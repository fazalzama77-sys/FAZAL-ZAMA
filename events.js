/*
 * Safe renderer for department announcements.
 * Staff content comes only from events-data.js. This file deliberately avoids
 * app globals and uses textContent so event text cannot inject page markup.
 */
(() => {
    'use strict';

    const SEEN_KEY = 'ivri-event-announcements-seen';
    const isLocalPreview = location.protocol === 'file:' || ['localhost', '127.0.0.1'].includes(location.hostname);

    const safeText = (value, fallback = '') => typeof value === 'string' ? value.trim() : fallback;
    const safeUrl = (value) => {
        try {
            const url = new URL(value, location.href);
            return url.protocol === 'https:' ? url.href : '';
        } catch (_) { return ''; }
    };
    const make = (tag, className, text) => {
        const node = document.createElement(tag);
        if (className) node.className = className;
        if (text) node.textContent = text;
        return node;
    };
    const makeLink = (url, label, className, icon) => {
        const href = safeUrl(url);
        if (!href) return null;
        const link = make('a', className);
        link.href = href;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        if (icon) {
            const iconNode = make('i', `fas ${icon}`);
            iconNode.setAttribute('aria-hidden', 'true');
            link.append(iconNode, document.createTextNode(' '));
        }
        link.append(document.createTextNode(label));
        return link;
    };
    const validDate = (value) => {
        const date = new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    };
    const formatDate = (value) => {
        const date = validDate(value);
        if (!date) return 'Date to be announced';
        return new Intl.DateTimeFormat(undefined, {
            weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
            hour: 'numeric', minute: '2-digit', timeZoneName: 'short'
        }).format(date);
    };

    const normalizeConfig = () => {
        const source = window.IVRI_EVENTS_CONFIG;
        if (!source || typeof source !== 'object') return null;
        const events = Array.isArray(source.events) ? source.events.filter((event) => {
            if (!event || typeof event !== 'object' || !safeText(event.id) || !safeText(event.title)) return false;
            return event.published === true || (isLocalPreview && event.published === false);
        }) : [];
        return {
            enabled: source.sectionEnabled !== false,
            title: safeText(source.sectionTitle, 'Veterinary Anatomy Studio Events'),
            subtitle: safeText(source.sectionSubtitle),
            emptyMessage: safeText(source.emptyMessage, 'No upcoming events right now.'),
            youtubeUrl: safeUrl(source.youtubeChannelUrl),
            youtubeLabel: safeText(source.youtubeChannelLabel, 'Visit our YouTube channel'),
            events
        };
    };

    const buildCard = (event) => {
        const card = make('article', 'ivri-event-card');
        if (event.featured === true) card.classList.add('is-featured');

        const meta = make('div', 'ivri-event-meta');
        meta.append(make('span', 'ivri-event-category', safeText(event.category, 'Academic Event')));
        if (event.published !== true) meta.append(make('span', 'ivri-event-draft', 'DRAFT PREVIEW'));

        const title = make('h3', '', safeText(event.title));
        const date = make('p', 'ivri-event-date');
        const calendarIcon = make('i', 'fas fa-calendar-days');
        calendarIcon.setAttribute('aria-hidden', 'true');
        date.append(calendarIcon, document.createTextNode(` ${formatDate(event.date)}`));

        card.append(meta, title, date);
        const speaker = safeText(event.speaker);
        if (speaker) card.append(make('p', 'ivri-event-speaker', speaker));
        const description = safeText(event.description);
        if (description) card.append(make('p', 'ivri-event-description', description));

        const actions = make('div', 'ivri-event-actions');
        const watch = makeLink(event.youtubeUrl, 'Watch on YouTube', 'ivri-event-action ivri-event-youtube', 'fa-play');
        const register = makeLink(event.registrationUrl, 'View details / register', 'ivri-event-action ivri-event-register', 'fa-arrow-up-right-from-square');
        if (watch) actions.append(watch);
        if (register) actions.append(register);
        if (actions.children.length) card.append(actions);
        return card;
    };

    const injectStructuredData = (events) => {
        const published = events.filter((event) => event.published === true && validDate(event.date));
        if (!published.length) return;
        const payload = published.map((event) => ({
            '@context': 'https://schema.org',
            '@type': 'EducationEvent',
            name: safeText(event.title),
            startDate: event.date,
            ...(validDate(event.endDate) ? { endDate: event.endDate } : {}),
            eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            ...(safeUrl(event.youtubeUrl) ? { location: { '@type': 'VirtualLocation', url: safeUrl(event.youtubeUrl) } } : {}),
            description: safeText(event.description),
            organizer: { '@type': 'Organization', name: 'ICAR-Indian Veterinary Research Institute', url: 'https://veterinaryanatomy.com/' }
        }));
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.dataset.ivriEvents = 'true';
        script.textContent = JSON.stringify(payload);
        document.head.append(script);
    };

    const readSeen = () => {
        try {
            const value = JSON.parse(localStorage.getItem(SEEN_KEY) || '[]');
            return Array.isArray(value) ? value : [];
        } catch (_) { return []; }
    };
    const markSeen = (id) => {
        try {
            const seen = new Set(readSeen());
            seen.add(id);
            localStorage.setItem(SEEN_KEY, JSON.stringify([...seen].slice(-40)));
        } catch (_) { /* non-critical */ }
    };

    const showAnnouncement = (event) => {
        const eventId = safeText(event.id);
        if (!eventId || readSeen().includes(eventId)) return;
        if (document.querySelector('.ivri-event-dialog')) return;

        const overlay = make('div', 'ivri-event-dialog');
        const dialog = make('section', 'ivri-event-dialog-card');
        dialog.setAttribute('role', 'dialog');
        dialog.setAttribute('aria-modal', 'true');
        dialog.setAttribute('aria-labelledby', 'ivri-event-dialog-title');
        const close = make('button', 'ivri-event-dialog-close');
        close.type = 'button';
        close.setAttribute('aria-label', 'Close event announcement');
        close.innerHTML = '<i class="fas fa-times" aria-hidden="true"></i>';
        dialog.append(close, make('div', 'ivri-event-dialog-kicker', safeText(event.category, 'Upcoming Veterinary Anatomy Studio Event')));
        const title = make('h2', '', safeText(event.title));
        title.id = 'ivri-event-dialog-title';
        dialog.append(title, make('p', 'ivri-event-dialog-date', formatDate(event.date)));
        if (safeText(event.description)) dialog.append(make('p', 'ivri-event-dialog-description', safeText(event.description)));
        const actions = make('div', 'ivri-event-dialog-actions');
        const watch = makeLink(event.youtubeUrl, 'Open YouTube', 'ivri-event-action ivri-event-youtube', 'fa-play');
        const register = makeLink(event.registrationUrl, 'View details', 'ivri-event-action ivri-event-register', 'fa-arrow-up-right-from-square');
        if (watch) actions.append(watch);
        if (register) actions.append(register);
        const later = make('button', 'ivri-event-later', 'Not now');
        actions.append(later);
        dialog.append(actions);
        overlay.append(dialog);
        document.body.append(overlay);

        const dismiss = () => {
            markSeen(eventId);
            overlay.classList.remove('is-visible');
            setTimeout(() => overlay.remove(), 180);
        };
        close.addEventListener('click', dismiss);
        later.addEventListener('click', dismiss);
        overlay.addEventListener('click', (e) => { if (e.target === overlay) dismiss(); });
        overlay.addEventListener('keydown', (e) => { if (e.key === 'Escape') dismiss(); });
        requestAnimationFrame(() => overlay.classList.add('is-visible'));
        close.focus({ preventScroll: true });
    };

    const scheduleAnnouncement = (events, attempts = 0) => {
        const event = events.find((item) => item.published === true && item.featured === true && item.showPopup === true);
        if (!event || readSeen().includes(safeText(event.id))) return;
        const onboarding = document.getElementById('onboard-modal');
        const anotherModalOpen = (onboarding && onboarding.style.display !== 'none') || document.querySelector('.modal-overlay.open');
        if (anotherModalOpen && attempts < 20) {
            setTimeout(() => scheduleAnnouncement(events, attempts + 1), 750);
            return;
        }
        if (!anotherModalOpen) showAnnouncement(event);
    };

    const init = () => {
        try {
            const config = normalizeConfig();
            const anchor = document.querySelector('#landing-view .hero-stats-strip');
            if (!config || !config.enabled || !anchor) return;

            const section = make('section', 'ivri-events-section');
            section.id = 'ivri-events';
            section.setAttribute('aria-labelledby', 'ivri-events-title');
            const header = make('div', 'ivri-events-header');
            const headingWrap = make('div');
            const eyebrow = make('div', 'ivri-events-eyebrow', 'ACADEMIC ANNOUNCEMENTS');
            const title = make('h2', '', config.title);
            title.id = 'ivri-events-title';
            headingWrap.append(eyebrow, title);
            if (config.subtitle) headingWrap.append(make('p', '', config.subtitle));
            header.append(headingWrap);
            const channel = makeLink(config.youtubeUrl, config.youtubeLabel, 'ivri-events-channel', 'fa-youtube');
            if (channel) header.append(channel);
            section.append(header);

            if (config.events.length) {
                const grid = make('div', 'ivri-events-grid');
                config.events.forEach((event) => grid.append(buildCard(event)));
                section.append(grid);
            } else {
                const empty = make('div', 'ivri-events-empty');
                const emptyIcon = make('i', 'fas fa-calendar-check');
                emptyIcon.setAttribute('aria-hidden', 'true');
                const emptyText = make('div');
                emptyText.append(
                    make('strong', '', config.emptyMessage),
                    make('span', '', 'New seminars, webinars and lectures will be announced here.')
                );
                empty.append(emptyIcon, emptyText);
                section.append(empty);
            }
            anchor.insertAdjacentElement('afterend', section);
            injectStructuredData(config.events);
            setTimeout(() => scheduleAnnouncement(config.events), 1500);
        } catch (error) {
            console.warn('IVRI events section was safely skipped:', error.message);
        }
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
