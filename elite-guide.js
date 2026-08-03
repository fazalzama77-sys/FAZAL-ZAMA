/*
 * One-time Elite View guide.
 * Isolated from app.js so a guide failure cannot affect lesson content.
 */
(() => {
    'use strict';

    const STORAGE_KEY = 'ivri-elite-guide-seen';
    let guide = null;
    let observer = null;
    let checkTimer = null;

    const hasSeenGuide = () => {
        try { return localStorage.getItem(STORAGE_KEY) === '1'; }
        catch (_) { return false; }
    };

    const markSeen = () => {
        try { localStorage.setItem(STORAGE_KEY, '1'); }
        catch (_) { /* Storage can be unavailable in privacy modes. */ }
    };

    const buttonIsVisible = (button) => {
        if (!button) return false;
        const style = window.getComputedStyle(button);
        return style.display !== 'none' && style.visibility !== 'hidden' && button.getClientRects().length > 0;
    };

    const lessonIsOpen = () => {
        const atlas = document.getElementById('atlas-view');
        const button = document.getElementById('elite-toggle');
        const activeTopic = document.querySelector('#topic-list .topic-btn.active');
        return Boolean(
            atlas && atlas.classList.contains('active') &&
            activeTopic && buttonIsVisible(button)
        );
    };

    const positionGuide = () => {
        if (!guide) return;
        const button = document.getElementById('elite-toggle');
        if (!buttonIsVisible(button)) return;

        const rect = button.getBoundingClientRect();
        const gap = 12;
        const width = Math.min(360, window.innerWidth - 24);
        guide.style.width = `${width}px`;

        let left = rect.right - width;
        left = Math.max(12, Math.min(left, window.innerWidth - width - 12));

        const expectedHeight = guide.offsetHeight || 210;
        let top = rect.bottom + gap;
        let direction = 'above';
        if (top + expectedHeight > window.innerHeight - 12) {
            top = Math.max(12, rect.top - expectedHeight - gap);
            direction = 'below';
        }

        // Atlas sections animate into place. During that brief transition the
        // button can report its former off-screen position, so always keep the
        // guide inside the current viewport while the layout settles.
        top = Math.max(12, Math.min(top, window.innerHeight - expectedHeight - 12));

        guide.style.left = `${left}px`;
        guide.style.top = `${top}px`;
        guide.dataset.pointer = direction;
    };

    const dismiss = (remember = true) => {
        if (!guide) return;
        if (remember) markSeen();
        guide.classList.remove('is-visible');
        const oldGuide = guide;
        guide = null;
        setTimeout(() => oldGuide.remove(), 180);
        window.removeEventListener('resize', positionGuide);
        window.removeEventListener('scroll', positionGuide, true);
    };

    const showGuide = () => {
        if (guide || document.querySelector('.topic-guide') || hasSeenGuide() || !lessonIsOpen()) return;
        const eliteButton = document.getElementById('elite-toggle');
        if (!eliteButton || eliteButton.classList.contains('active')) return;

        guide = document.createElement('aside');
        guide.className = 'elite-guide';
        guide.setAttribute('role', 'dialog');
        guide.setAttribute('aria-modal', 'false');
        guide.setAttribute('aria-labelledby', 'elite-guide-title');
        guide.innerHTML = `
            <button class="elite-guide-close" type="button" aria-label="Dismiss Elite View guide">
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
            <div class="elite-guide-kicker"><i class="fas fa-graduation-cap" aria-hidden="true"></i> TWO LEVELS OF DETAIL</div>
            <h2 id="elite-guide-title">Open the full lesson</h2>
            <p>Tap <strong>Elite View</strong> for detailed UG-level anatomy, species comparisons and clinical depth.</p>
            <div class="elite-guide-actions">
                <button class="elite-guide-secondary" type="button">Got it</button>
                <button class="elite-guide-primary" type="button"><i class="fas fa-graduation-cap" aria-hidden="true"></i> Open Elite View</button>
            </div>`;

        document.body.appendChild(guide);
        guide.querySelector('.elite-guide-close').addEventListener('click', () => dismiss(true));
        guide.querySelector('.elite-guide-secondary').addEventListener('click', () => dismiss(true));
        guide.querySelector('.elite-guide-primary').addEventListener('click', () => {
            markSeen();
            eliteButton.click();
            dismiss(false);
        });
        guide.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') dismiss(true);
        });

        positionGuide();
        requestAnimationFrame(() => guide && guide.classList.add('is-visible'));
        [80, 240, 600].forEach((delay) => setTimeout(() => guide && positionGuide(), delay));
        window.addEventListener('resize', positionGuide);
        window.addEventListener('scroll', positionGuide, true);
        guide.querySelector('.elite-guide-primary').focus({ preventScroll: true });
    };

    const scheduleCheck = () => {
        clearTimeout(checkTimer);
        checkTimer = setTimeout(() => {
            if (guide) positionGuide();
            else showGuide();
        }, 120);
    };

    const init = () => {
        if (hasSeenGuide()) return;
        const atlas = document.getElementById('atlas-view');
        if (!atlas) return;
        observer = new MutationObserver(scheduleCheck);
        observer.observe(atlas, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });
        window.addEventListener('popstate', scheduleCheck);
        window.addEventListener('hashchange', scheduleCheck);
        document.addEventListener('ivri:topic-guide-dismissed', scheduleCheck);
        scheduleCheck();
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();

/*
 * One-time Atlas orientation guide shown before a visitor chooses a topic.
 * Kept in this isolated file so it cannot interfere with lesson rendering.
 */
(() => {
    'use strict';

    const STORAGE_KEY = 'ivri-topic-guide-seen';
    let guide = null;
    let observer = null;
    let checkTimer = null;

    const hasSeenGuide = () => {
        try { return localStorage.getItem(STORAGE_KEY) === '1'; }
        catch (_) { return false; }
    };

    const markSeen = () => {
        try { localStorage.setItem(STORAGE_KEY, '1'); }
        catch (_) { /* Non-critical in restricted storage modes. */ }
    };

    const topicSelectionIsWaiting = () => {
        const atlas = document.getElementById('atlas-view');
        const workspace = document.getElementById('atlas-content');
        const firstTopic = document.querySelector('#topic-list .topic-btn');
        const activeTopic = document.querySelector('#topic-list .topic-btn.active');
        if (!atlas || !workspace || !firstTopic || activeTopic) return false;
        const workspaceStyle = window.getComputedStyle(workspace);
        return atlas.classList.contains('active') && workspaceStyle.display !== 'none';
    };

    const positionGuide = () => {
        if (!guide) return;
        const firstTopic = document.querySelector('#topic-list .topic-btn');
        if (!firstTopic) return;
        const rect = firstTopic.getBoundingClientRect();
        const width = Math.min(350, window.innerWidth - 24);
        const height = guide.offsetHeight || 210;
        const gap = 14;
        guide.style.width = `${width}px`;

        let left = rect.right + gap;
        let side = 'left';
        if (left + width > window.innerWidth - 12) {
            left = rect.left;
            side = 'above';
        }
        left = Math.max(12, Math.min(left, window.innerWidth - width - 12));

        let top = side === 'left' ? rect.top : rect.bottom + gap;
        top = Math.max(12, Math.min(top, window.innerHeight - height - 12));
        guide.style.left = `${left}px`;
        guide.style.top = `${top}px`;
        guide.dataset.pointer = side;
    };

    const dismiss = (remember = true) => {
        if (!guide) return;
        if (remember) markSeen();
        guide.classList.remove('is-visible');
        const oldGuide = guide;
        guide = null;
        setTimeout(() => {
            oldGuide.remove();
            document.dispatchEvent(new CustomEvent('ivri:topic-guide-dismissed'));
        }, 180);
        window.removeEventListener('resize', positionGuide);
        window.removeEventListener('scroll', positionGuide, true);
    };

    const showGuide = () => {
        if (guide || document.querySelector('.elite-guide') || hasSeenGuide() || !topicSelectionIsWaiting()) return;
        const firstTopic = document.querySelector('#topic-list .topic-btn');
        if (!firstTopic) return;

        guide = document.createElement('aside');
        guide.className = 'topic-guide';
        guide.setAttribute('role', 'dialog');
        guide.setAttribute('aria-modal', 'false');
        guide.setAttribute('aria-labelledby', 'topic-guide-title');
        guide.innerHTML = `
            <button class="topic-guide-close" type="button" aria-label="Dismiss topic selection guide">
                <i class="fas fa-times" aria-hidden="true"></i>
            </button>
            <div class="topic-guide-kicker"><i class="fas fa-hand-pointer" aria-hidden="true"></i> START READING</div>
            <h2 id="topic-guide-title">Select a topic from the left</h2>
            <p>Choose any topic in this panel to open its anatomy lesson, comparisons and clinical notes.</p>
            <div class="topic-guide-actions">
                <button class="topic-guide-secondary" type="button">Got it</button>
                <button class="topic-guide-primary" type="button"><i class="fas fa-book-open" aria-hidden="true"></i> Open first topic</button>
            </div>`;

        document.body.appendChild(guide);
        guide.querySelector('.topic-guide-close').addEventListener('click', () => dismiss(true));
        guide.querySelector('.topic-guide-secondary').addEventListener('click', () => dismiss(true));
        guide.querySelector('.topic-guide-primary').addEventListener('click', () => {
            markSeen();
            dismiss(false);
            firstTopic.click();
        });
        guide.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') dismiss(true);
        });

        positionGuide();
        requestAnimationFrame(() => guide && guide.classList.add('is-visible'));
        [80, 240, 600].forEach((delay) => setTimeout(() => guide && positionGuide(), delay));
        window.addEventListener('resize', positionGuide);
        window.addEventListener('scroll', positionGuide, true);
        guide.querySelector('.topic-guide-primary').focus({ preventScroll: true });
    };

    const scheduleCheck = () => {
        clearTimeout(checkTimer);
        checkTimer = setTimeout(() => {
            if (guide) positionGuide();
            else showGuide();
        }, 120);
    };

    const init = () => {
        if (hasSeenGuide()) return;
        const atlas = document.getElementById('atlas-view');
        if (!atlas) return;
        observer = new MutationObserver(scheduleCheck);
        observer.observe(atlas, {
            subtree: true,
            childList: true,
            attributes: true,
            attributeFilter: ['class', 'style']
        });
        window.addEventListener('popstate', scheduleCheck);
        window.addEventListener('hashchange', scheduleCheck);
        scheduleCheck();
    };

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
    else init();
})();
