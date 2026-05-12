// =========================================================
// DIGITAL CORTEX - APPLICATION LOGIC
// Phase 2: Elite Mode + Regional Anatomy Expansion
// =========================================================

const app = {
    state: {
        view: 'landing',
        region: null,
        system: null,
        eliteMode: false
    },

    init: () => {
        const savedTheme = localStorage.getItem('ivri-theme');
        if (savedTheme === 'professional') {
            document.body.classList.add('professional-mode');
            const btnText = document.getElementById('theme-text');
            if (btnText) btnText.innerText = 'Student Mode';
        }

        const savedElite = localStorage.getItem('ivri-elite');
        if (savedElite === 'true') {
            app.state.eliteMode = true;
        }

        // ---- Service worker registration (offline / PWA, silent auto-update) ----
        // The SW now self-activates on install (calls skipWaiting() itself) and
        // claims existing clients on activate. So a new version takes over
        // transparently — no banner, no surprise reloads. Visitors get the
        // latest site bytes on their next natural page load.
        if ('serviceWorker' in navigator && location.protocol !== 'file:') {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('./service-worker.js')
                    .then((registration) => {
                        registration.update().catch(() => { });
                        // Re-check for updates every 60 minutes while tab is open
                        setInterval(() => {
                            registration.update().catch(() => { });
                        }, 60 * 60 * 1000);
                    })
                    .catch((err) => console.warn('SW registration failed:', err.message));
            });
        }

        // ---- Hash routing ----
        window.addEventListener('hashchange', () => app.routeFromHash());
        // Defer first route until DOM ready (data files loaded via script tags)
        setTimeout(() => app.routeFromHash(), 0);
    },

    // ============== HASH ROUTING ==============
    // Hash format examples:
    //   #/landing
    //   #/atlas
    //   #/atlas/Forelimb
    //   #/atlas/Forelimb/Osteology
    //   #/atlas/Forelimb/Osteology/2          (open detail at index 2)
    //   #/why  | #/dashboard | #/bookmarks
    routeFromHash: () => {
        const raw = (location.hash || '').replace(/^#\/?/, '');
        if (!raw) return; // no hash → leave landing as-is
        const parts = raw.split('/').map(decodeURIComponent);
        const view = parts[0];

        if (view === 'why' || view === 'dashboard' || view === 'landing') {
            if (app.state.view !== view) app._loadViewInternal(view);
            return;
        }
        if (view === 'bookmarks') {
            app._loadViewInternal('atlas');
            app.showBookmarks();
            return;
        }
        if (view === 'atlas') {
            app._loadViewInternal('atlas');
            const region = parts[1] || null;
            const system = parts[2] || null;
            const idx = parts[3] != null ? parseInt(parts[3], 10) : null;
            app.state.region = (region && atlasData && atlasData[region]) ? region : null;
            app.state.system = (system && app.state.region && atlasData[app.state.region][system]) ? system : null;

            if (app.state.region && app.state.system) {
                document.getElementById('atlas-selector').style.display = 'none';
                document.getElementById('atlas-content').style.display = 'grid';
                document.getElementById('atlas-crumb').innerHTML =
                    `ATLAS > ${app.state.region.toUpperCase()} > ${app.state.system.toUpperCase()}`;
                app.renderTopicList();

                const eliteBtn = document.getElementById('elite-toggle');
                if (eliteBtn) eliteBtn.style.display = 'flex';

                if (Number.isInteger(idx) && idx >= 0) {
                    setTimeout(() => {
                        const btn = document.querySelector(`.topic-btn[data-index="${idx}"]`);
                        if (btn) app.renderDetail(idx, btn);
                    }, 30);
                }
            } else {
                app.renderAtlasSelector();
            }
            return;
        }
    },

    setHash: (hash) => {
        // Update without triggering hashchange loop
        if (location.hash !== hash) {
            history.pushState(null, '', hash);
        }
        // Keep document.title in sync with current location for SEO + bookmark sanity
        app.updatePageTitle();
    },

    // Builds a descriptive <title> from current state — helps SEO + browser tabs
    updatePageTitle: () => {
        const SITE = 'IVRI Anatomy';
        const parts = [];
        if (app.state.view === 'atlas') {
            if (app.state.region) parts.push(app.state.region);
            if (app.state.system) parts.push(app.state.system);
            parts.push('Atlas');
        } else if (app.state.view === 'why') {
            parts.push('Biomechanics');
        } else if (app.state.view === 'dashboard') {
            parts.push('Dashboard');
        } else if (app.state.view === 'landing') {
            // Default site title
            document.title = `${SITE} | Exploring Anatomy through Technology`;
            return;
        }
        document.title = (parts.length ? parts.join(' · ') + ' · ' : '') + SITE;
    },

    toggleTheme: () => {
        document.body.classList.toggle('professional-mode');
        const isPro = document.body.classList.contains('professional-mode');
        localStorage.setItem('ivri-theme', isPro ? 'professional' : 'neon');

        const btnText = document.getElementById('theme-text');
        if (btnText) {
            btnText.innerText = isPro ? 'Student Mode' : 'Professional Mode';
        }
        showToast(isPro ? 'Professional mode on' : 'Student mode on', 'info', 'fa-palette');
    },

    toggleElite: () => {
        app.state.eliteMode = !app.state.eliteMode;
        localStorage.setItem('ivri-elite', app.state.eliteMode);

        const eliteBtn = document.getElementById('elite-toggle');
        const eliteText = document.getElementById('elite-text');

        if (app.state.eliteMode) {
            if (eliteBtn) eliteBtn.classList.add('active');
            if (eliteText) eliteText.innerText = 'Standard View';
            showToast('Elite mode activated', 'info', 'fa-star');
        } else {
            if (eliteBtn) eliteBtn.classList.remove('active');
            if (eliteText) eliteText.innerText = 'Elite View';
            showToast('Elite mode off', 'info', 'fa-star');
        }

        const activeBtn = document.querySelector('.topic-btn.active');
        if (activeBtn) {
            const index = parseInt(activeBtn.dataset.index);
            if (!isNaN(index)) app.renderDetail(index, activeBtn);
        }
    },

    loadView: (viewName) => {
        app._loadViewInternal(viewName);
        // Reflect in URL so refresh / Back work
        app.setHash('#/' + viewName);
    },

    // Internal: switches the visible section without touching the hash.
    _loadViewInternal: (viewName) => {
        document.querySelectorAll('.view-section').forEach(el => {
            el.classList.remove('active');
            setTimeout(() => {
                if (!el.classList.contains('active')) el.style.display = 'none';
            }, 500);
        });

        const target = document.getElementById(viewName + '-view');
        if (!target) return;
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);

        app.state.view = viewName;
        window.scrollTo(0, 0);

        if (viewName === 'atlas') {
            // Reset to selector unless hash is restoring deeper state
            app.state.region = null;
            app.state.system = null;
            app.renderAtlasSelector();
        }
        if (viewName === 'dashboard' && typeof dashboard !== 'undefined') dashboard.render();
        if (viewName === 'why' && typeof renderCards === 'function' && typeof anatomyData !== 'undefined') {
            renderCards(anatomyData);
        }
    },

    // REGIONAL ANATOMY NAVIGATION
    renderAtlasSelector: () => {
        const grid = document.getElementById('atlas-selector');
        const breadcrumb = document.getElementById('atlas-crumb');
        const eliteBtn = document.getElementById('elite-toggle');

        if (eliteBtn) {
            if (app.state.system) {
                eliteBtn.style.display = 'flex';
                const eliteText = document.getElementById('elite-text');
                if (app.state.eliteMode) {
                    eliteBtn.classList.add('active');
                    if (eliteText) eliteText.innerText = 'Standard View';
                } else {
                    eliteBtn.classList.remove('active');
                    if (eliteText) eliteText.innerText = 'Elite View';
                }
            } else {
                eliteBtn.style.display = 'none';
            }
        }

        grid.style.display = 'grid';
        document.getElementById('atlas-content').style.display = 'none';

        // LEVEL 1: Region Selection (Forelimb, Hindlimb, etc.)
        if (!app.state.region) {
            breadcrumb.innerHTML = "ATLAS > SELECT REGION";
            grid.innerHTML = Object.keys(atlasData).map(region => {
                const icon = app.getRegionIcon(region);
                return `
                <div class="portal-card card-atlas" style="width: 280px; height: 300px;" onclick="app.selectRegion('${region}')">
                    <i class="fas ${icon} orb-icon" style="color: var(--atlas-gold); font-size: 3rem; margin-bottom: 20px; z-index: 2;"></i>
                    <div class="card-label" style="font-size: 1.5rem;">${region}</div>
                    <div class="card-sub">REGIONAL ANATOMY MODULE</div>
                </div>
            `}).join('');
        }
        // LEVEL 2: System Selection (Osteology, Myology, etc.)
        else if (!app.state.system) {
            breadcrumb.innerHTML = `ATLAS > ${app.state.region.toUpperCase()} > SELECT SYSTEM`;
            const systems = atlasData[app.state.region];
            grid.innerHTML = Object.keys(systems).map(sys => {
                const sysIcon = app.getSystemIcon(sys);
                const count = systems[sys].length;
                return `
                <div class="portal-card card-why" style="width: 280px; height: 300px;" onclick="app.selectSystem('${sys}')">
                    <i class="fas ${sysIcon} orb-icon" style="color: var(--why-cyan); font-size: 3rem; margin-bottom: 20px; z-index: 2;"></i>
                    <div class="card-label" style="font-size: 1.5rem;">${sys}</div>
                    <div class="card-sub">${count} STRUCTURES<br>CLICK TO ACCESS</div>
                </div>
            `}).join('');
        }
    },

    getRegionIcon: (region) => {
        const icons = {
            "Introduction": "fa-graduation-cap",
            "Forelimb": "fa-hand-point-up",
            "Hindlimb & Pelvis": "fa-shoe-prints",
            "Thorax": "fa-lungs",
            "Abdomen": "fa-prescription-bottle-alt",
            "Head & Neck": "fa-head-side-virus",
            "Histology": "fa-microscope",
            "Embryology": "fa-baby"
        };
        return icons[region] || "fa-bone";
    },

    getSystemIcon: (system) => {
        const icons = {
            "Osteology": "fa-bone",
            "Myology": "fa-running",
            "Arthrology": "fa-link",
            "Neurology": "fa-brain",
            "Angiology": "fa-heartbeat",
            "Splanchnology": "fa-lungs",
            "General Anatomy": "fa-compass",
            "General Osteology": "fa-bone",
            "General Arthrology": "fa-link",
            "General Myology": "fa-running",
            "General Angiology": "fa-heartbeat",
            "General Neurology": "fa-brain",
            "General Aesthesiology": "fa-eye",
            "General Splanchnology": "fa-lungs",
            "Surface Anatomy": "fa-male",
            "Imaging Principles": "fa-x-ray",
            "Cytology": "fa-atom",
            "Basic Tissues": "fa-th",
            "Blood & Bone Marrow": "fa-tint",
            "Digestive System": "fa-utensils",
            "Other Systems": "fa-project-diagram",
            "Gametogenesis & Fertilization": "fa-egg",
            "Cleavage, Blastulation & Gastrulation": "fa-circle-notch",
            "Foetal Membranes & Placenta": "fa-baby-carriage",
            "Germ Layers & Derivatives": "fa-layer-group",
            "Organ Development": "fa-seedling",
            "Twinning & Anomalies": "fa-clone"
        };
        return icons[system] || "fa-book-medical";
    },

    selectRegion: (region) => {
        app.state.region = region;
        app.setHash(`#/atlas/${encodeURIComponent(region)}`);
        app.renderAtlasSelector();
    },

    selectSystem: (system) => {
        app.state.system = system;
        app.setHash(`#/atlas/${encodeURIComponent(app.state.region)}/${encodeURIComponent(system)}`);
        document.getElementById('atlas-selector').style.display = 'none';
        document.getElementById('atlas-content').style.display = 'grid';
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > ${app.state.region.toUpperCase()} > ${system.toUpperCase()}`;
        app.renderTopicList();

        const eliteBtn = document.getElementById('elite-toggle');
        if (eliteBtn) {
            eliteBtn.style.display = 'flex';
            const eliteText = document.getElementById('elite-text');
            if (app.state.eliteMode) {
                eliteBtn.classList.add('active');
                if (eliteText) eliteText.innerText = 'Standard View';
            } else {
                eliteBtn.classList.remove('active');
                if (eliteText) eliteText.innerText = 'Elite View';
            }
        }
    },

    atlasBack: () => {
        if (document.getElementById('atlas-content').style.display === 'grid') {
            app.state.system = null;
            app.setHash(app.state.region ? `#/atlas/${encodeURIComponent(app.state.region)}` : '#/atlas');
            app.renderAtlasSelector();
        } else if (app.state.region) {
            app.state.region = null;
            app.setHash('#/atlas');
            app.renderAtlasSelector();
        } else {
            app.loadView('landing');
        }
    },

    renderTopicList: () => {
        const list = document.getElementById('topic-list');
        // Safety check
        if (!app.state.region || !app.state.system || !atlasData[app.state.region][app.state.system]) {
            list.innerHTML = '<div style="padding:20px; color:var(--text-mute);">No data available for this section.</div>';
            return;
        }

        const data = atlasData[app.state.region][app.state.system];
        list.innerHTML = data.map((item, index) => {
            const id = app.bookmarkId(app.state.region, app.state.system, index);
            const star = app.isBookmarked(id) ? '<i class="fas fa-star bm-star" title="Bookmarked"></i> ' : '';
            const readTick = app.isRead(id) ? '<i class="fas fa-check-circle read-tick" title="Read"></i> ' : '';
            const readClass = app.isRead(id) ? ' is-read' : '';
            return `
                <button class="topic-btn${readClass}" data-index="${index}" onclick="app.renderDetail(${index}, this)">${readTick}${star}${item.title.toUpperCase()}</button>
            `;
        }).join('');
        // Refresh the progress badge whenever the list re-renders
        app.updateReadProgressBadge();
    },

    renderDetail: (index, btnElement) => {
        const contentArea = document.getElementById('detail-panel');
        contentArea.style.animation = 'none';
        setTimeout(() => {
            contentArea.style.animation = 'contentSlide 0.4s ease-out';
        }, 10);

        document.querySelectorAll('.topic-btn').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');

        // Safety check
        if (!app.state.region || !app.state.system) return;

        const data = atlasData[app.state.region][app.state.system];
        if (!data || !data[index]) return;

        const item = data[index];
        const panel = document.getElementById('detail-panel');

        // Update URL so refresh / Back works on this exact topic
        app.setHash(`#/atlas/${encodeURIComponent(app.state.region)}/${encodeURIComponent(app.state.system)}/${index}`);

        // Override page title to include the structure name for sharper bookmarks/sharing
        document.title = `${item.title} · ${app.state.system} · ${app.state.region} · IVRI Anatomy`;

        // ELITE MODE LOGIC: Use eliteDesc if available and eliteMode is ON
        const useElite = app.state.eliteMode && item.eliteDesc;
        const displayContent = useElite ? item.eliteDesc : item.desc;
        const modeLabel = useElite ? 'COMPREHENSIVE ACADEMIC VIEW' : 'STANDARD MORPHOLOGY';
        const modeBadge = useElite ? '<span style="background:var(--why-cyan); color:var(--void); padding:2px 8px; border-radius:4px; font-size:0.8rem; margin-left:10px;">ELITE MODE</span>' : '';

        // Bookmark button
        const bmId = app.bookmarkId(app.state.region, app.state.system, index);
        const bookmarked = app.isBookmarked(bmId);
        const bmBtn = `<button class="bm-btn ${bookmarked ? 'active' : ''}" onclick="app.toggleBookmark(${index}, this)" title="${bookmarked ? 'Remove bookmark' : 'Bookmark this topic'}" aria-label="Toggle bookmark"><i class="fas fa-star"></i> <span>${bookmarked ? 'Bookmarked' : 'Bookmark'}</span></button>`;

        // Mark as Read button
        const isReadNow = app.isRead(bmId);
        const readBtn = `<button class="read-btn ${isReadNow ? 'active' : ''}" onclick="app.toggleRead(${index}, this)" title="${isReadNow ? 'Mark as unread' : 'Mark as read'}" aria-label="Toggle read status"><i class="${isReadNow ? 'fas fa-check-circle' : 'far fa-circle'}"></i> <span>${isReadNow ? 'Read' : 'Mark as Read'}</span></button>`;

        // Build content based on available data
        let contentHtml = `
            <div class="detail-header">
                <div>
                    <div class="h-title">${item.title} ${modeBadge}</div>
                    <span class="h-sub">/// ${modeLabel} // ${app.state.system.toUpperCase()}</span>
                </div>
                <div class="detail-header-actions">
                    ${readBtn}
                    ${bmBtn}
                </div>
            </div>

            <div class="feature-box" style="animation: detailFade 0.5s ease; background:rgba(255,255,255,0.03); padding:20px; border-radius:8px; margin-bottom:20px;">
                <strong style="color:var(--atlas-gold); display:block; margin-bottom:10px; font-family:var(--font-code);">
                    ${useElite ? '📚 DETAILED DESCRIPTION:' : '📝 STANDARD DESCRIPTION:'}
                </strong>
                <div style="line-height:1.8; color:var(--text-main);">
                    ${displayContent}
                </div>
            </div>
        `;

        // Comparative Analysis Table (if exists)
        if (item.comparative && item.comparative.length > 0) {
            contentHtml += `
                <h3 style="color:var(--atlas-gold); font-family:var(--font-code); margin-top:30px; animation: detailFade 0.6s ease;">// COMPARATIVE ANALYSIS</h3>
                <table class="comp-table" style="animation: detailFade 0.7s ease; width:100%; border-collapse:collapse;">
                    ${item.comparative.map(c => `
                        <tr style="border-bottom:1px solid var(--border);">
                            <td class="species-label" style="padding:15px; width:140px; font-weight:bold; color:var(--atlas-gold); font-family:var(--font-code);">${c.species.toUpperCase()}</td>
                            <td style="padding:15px; color:var(--text-mute); line-height:1.6;">${c.note}</td>
                        </tr>
                    `).join('')}
                </table>
            `;
        }

        // Clinical Correlation (if exists)
        if (item.clinical) {
            contentHtml += `
                <div style="margin-top:30px; border:1px dashed var(--why-cyan); padding:20px; border-radius:8px; animation: detailFade 0.8s ease; background:rgba(0,242,255,0.02);">
                    <strong style="color:var(--why-cyan); font-family:var(--font-code); display:block; margin-bottom:10px;">
                        <i class="fas fa-stethoscope"></i> CLINICAL CORRELATION
                    </strong>
                    <p style="margin-top:10px; color:var(--text-main); line-height:1.7;">${item.clinical}</p>
                </div>
            `;
        }

        // Visual reference (real image if present, placeholder fallback if only imgCode exists)
        if (item.img || item.imgCode) {
            contentHtml += `
                <div style="margin-top:30px; animation: detailFade 0.9s ease;">
                    <strong style="color:var(--text-mute); font-family:var(--font-code); display:block; margin-bottom:10px;">
                        <i class="fas fa-image"></i> VISUAL REFERENCE
                    </strong>
                    ${item.img ? `
                        <figure class="img-container atlas-image-frame">
                            <img class="atlas-reference-image" src="${item.img}" alt="${item.imgAlt || item.title + ' visual reference'}" loading="lazy">
                            ${item.imgCaption ? `<figcaption class="atlas-image-caption">${item.imgCaption}</figcaption>` : ''}
                        </figure>
                    ` : `
                        <div class="img-container">
                            <div class="img-placeholder-text">
                                <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px;"></i>
                                <div>Image: ${item.imgCode}</div>
                                <div style="font-size:0.8rem; margin-top:5px;">(Integration ready)</div>
                            </div>
                        </div>
                    `}
                </div>
            `;
        }

        // If Elite mode is on but no elite content exists
        if (app.state.eliteMode && !item.eliteDesc) {
            contentHtml += `
                <div style="margin-top:20px; padding:15px; background:rgba(255,215,0,0.1); border-radius:8px; border:1px solid var(--atlas-gold); color:var(--atlas-gold); font-size:0.9rem; animation: detailFade 1s ease;">
                    <i class="fas fa-info-circle"></i> <strong>Elite Mode Active:</strong> Detailed academic content for this structure is being compiled. Showing standard view instead.
                </div>
            `;
        }

        panel.innerHTML = contentHtml;

        // Decorate text with glossary tooltips (after innerHTML is set)
        if (typeof glossary !== 'undefined') {
            try { glossary.decorate(panel); } catch (e) { console.warn('Glossary decorate failed:', e.message); }
        }
    },

    // ============== BOOKMARKS ==============
    BOOKMARK_KEY: 'ivri-bookmarks',
    READ_KEY: 'ivri-read',  // Mark-as-Read storage

    bookmarkId: (region, system, index) => `${region}::${system}::${index}`,

    _loadBookmarks: () => {
        try { return JSON.parse(localStorage.getItem(app.BOOKMARK_KEY)) || []; }
        catch { return []; }
    },

    _saveBookmarks: (arr) => localStorage.setItem(app.BOOKMARK_KEY, JSON.stringify(arr)),

    isBookmarked: (id) => app._loadBookmarks().includes(id),

    // ============== MARK AS READ ==============
    _loadRead: () => {
        try { return JSON.parse(localStorage.getItem(app.READ_KEY)) || []; }
        catch { return []; }
    },
    _saveRead: (arr) => localStorage.setItem(app.READ_KEY, JSON.stringify(arr)),
    isRead: (id) => app._loadRead().includes(id),

    toggleRead: (index, btn) => {
        if (!app.state.region || !app.state.system) return;
        const id = app.bookmarkId(app.state.region, app.state.system, index);
        const list = app._loadRead();
        const i = list.indexOf(id);
        const nowRead = (i === -1);
        if (nowRead) {
            list.push(id);
            if (typeof showToast === 'function') showToast('Marked as read', 'success', 'fa-check-circle');
        } else {
            list.splice(i, 1);
            if (typeof showToast === 'function') showToast('Marked as unread', 'info', 'fa-circle');
        }
        app._saveRead(list);
        // Update the toggle button in detail panel
        if (btn) {
            btn.classList.toggle('active', nowRead);
            const span = btn.querySelector('span');
            if (span) span.innerText = nowRead ? 'Read' : 'Mark as Read';
            const icon = btn.querySelector('i');
            if (icon) icon.className = nowRead ? 'fas fa-check-circle' : 'far fa-circle';
        }
        // Refresh sidebar tick marks + progress badge
        app.renderTopicList();
        app.updateReadProgressBadge();
        // Re-mark active topic
        const act = document.querySelector(`.topic-btn[data-index="${index}"]`);
        if (act) act.classList.add('active');
    },

    // Returns {read, total, percent} for current region+system
    getReadStats: (region, system) => {
        if (!region || !system || !atlasData[region] || !atlasData[region][system]) {
            return { read: 0, total: 0, percent: 0 };
        }
        const total = atlasData[region][system].length;
        const readList = app._loadRead();
        let read = 0;
        for (let i = 0; i < total; i++) {
            if (readList.includes(app.bookmarkId(region, system, i))) read++;
        }
        return { read, total, percent: total ? Math.round((read / total) * 100) : 0 };
    },

    // Update the small "X / Y read" + progress bar shown in the breadcrumb / sidebar header
    updateReadProgressBadge: () => {
        const badge = document.getElementById('read-progress-badge');
        if (!badge) return;
        if (!app.state.region || !app.state.system) {
            badge.style.display = 'none';
            return;
        }
        const { read, total, percent } = app.getReadStats(app.state.region, app.state.system);
        if (total === 0) { badge.style.display = 'none'; return; }
        badge.style.display = 'flex';
        badge.innerHTML = `
            <span class="rp-text"><i class="fas fa-check-circle"></i> ${read}/${total} read</span>
            <span class="rp-bar"><span class="rp-fill" style="width:${percent}%"></span></span>
            <span class="rp-pct">${percent}%</span>
        `;
    },

    toggleBookmark: (index, btn) => {
        if (!app.state.region || !app.state.system) return;
        const id = app.bookmarkId(app.state.region, app.state.system, index);
        const list = app._loadBookmarks();
        const i = list.indexOf(id);
        if (i === -1) {
            list.push(id);
            if (typeof showToast === 'function') showToast('Bookmarked', 'success', 'fa-star');
        } else {
            list.splice(i, 1);
            if (typeof showToast === 'function') showToast('Bookmark removed', 'info', 'fa-star');
        }
        app._saveBookmarks(list);
        // Update UI immediately
        if (btn) {
            btn.classList.toggle('active');
            const span = btn.querySelector('span');
            if (span) span.innerText = btn.classList.contains('active') ? 'Bookmarked' : 'Bookmark';
        }
        // Refresh sidebar stars
        app.renderTopicList();
        // Re-mark the active topic
        const act = document.querySelector(`.topic-btn[data-index="${index}"]`);
        if (act) act.classList.add('active');
    },

    // Show all bookmarked topics in the Atlas content area
    showBookmarks: () => {
        const ids = app._loadBookmarks();
        document.getElementById('atlas-selector').style.display = 'none';
        document.getElementById('atlas-content').style.display = 'grid';
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > MY BOOKMARKS (${ids.length})`;

        const list = document.getElementById('topic-list');
        const panel = document.getElementById('detail-panel');

        if (ids.length === 0) {
            list.innerHTML = '<div style="padding:20px; color:var(--text-mute);">No bookmarks yet. Click the star icon on any topic to save it here.</div>';
            panel.innerHTML = `<div style="height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0.4;color:var(--text-mute);">
                <i class="fas fa-star" style="font-size:3rem;margin-bottom:20px;"></i>
                <div>YOUR BOOKMARK LIST IS EMPTY</div>
              </div>`;
            return;
        }

        list.innerHTML = ids.map((id) => {
            const [region, system, idxStr] = id.split('::');
            const idx = parseInt(idxStr, 10);
            const item = atlasData?.[region]?.[system]?.[idx];
            if (!item) return '';
            return `<button class="topic-btn" onclick="app.openBookmark('${region}','${system}',${idx})">
                        <i class="fas fa-star bm-star"></i> ${item.title.toUpperCase()}
                        <span class="bm-meta">${region} / ${system}</span>
                    </button>`;
        }).join('');

        panel.innerHTML = `<div style="height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;opacity:0.5;color:var(--text-mute);">
            <i class="fas fa-bookmark" style="font-size:3rem;margin-bottom:20px;color:var(--atlas-gold);"></i>
            <div>SELECT A BOOKMARKED TOPIC FROM THE LIST</div>
          </div>`;
    },

    openBookmark: (region, system, idx) => {
        app.state.region = region;
        app.state.system = system;
        app.setHash(`#/atlas/${encodeURIComponent(region)}/${encodeURIComponent(system)}/${idx}`);
        document.getElementById('atlas-crumb').innerHTML = `ATLAS > ${region.toUpperCase()} > ${system.toUpperCase()}`;
        app.renderTopicList();
        const eliteBtn = document.getElementById('elite-toggle');
        if (eliteBtn) eliteBtn.style.display = 'flex';
        setTimeout(() => {
            const btn = document.querySelector(`.topic-btn[data-index="${idx}"]`);
            if (btn) app.renderDetail(idx, btn);
        }, 30);
    },

    // ============== PWA UPDATE FLOW ==============
    // Updates are applied silently by the service worker (it skipWaiting()s on
    // install and clients.claim()s on activate). Readers get the latest version
    // on their next natural page reload — no banner, no prompts.

    // Nuclear option — wipe all caches + unregister all SWs + reload
    forceClearCacheAndReload: async () => {
        if (!confirm('Reset cached site data and reload? Your bookmarks, quiz history, and progress are kept safe — only the cached app files will be cleared.')) return;
        try {
            if ('caches' in window) {
                const keys = await caches.keys();
                await Promise.all(keys.map((k) => caches.delete(k)));
            }
            if ('serviceWorker' in navigator) {
                const regs = await navigator.serviceWorker.getRegistrations();
                await Promise.all(regs.map((r) => r.unregister()));
            }
        } catch (e) {
            console.warn('Cache reset issue:', e.message);
        }
        // Hard reload bypassing browser HTTP cache too
        window.location.reload();
    }
};

// =========================================================
// 2. ATLAS QUIZ ENGINE - Enhanced (See enhanced-quiz.js)
// =========================================================
// The quizApp object is now defined in enhanced-quiz.js
// This provides: Next/Previous navigation, Bookmarks, Flags,
// Timer, Question Grid, Detailed Review, Category Breakdown,
// Save/Resume Progress, and more!
// =========================================================

// =========================================================
// 3. WHY SECTION LOGIC (Unchanged)
// =========================================================
let currentActiveItem = null;

const grid = document.getElementById('anatomyGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const searchInput = document.getElementById('searchInput');

function renderCards(data) {
    if (!grid) return;

    grid.innerHTML = '';

    if (data.length === 0) {
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-mute);">No structures found matching criteria.</div>`;
        return;
    }

    data.forEach((item, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.style.animationDelay = `${index * 0.05}s`;
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div>
                <div class="card-header">
                    <span class="card-category">${item.category}</span>
                    <i class="fas fa-arrow-right" style="color: var(--why-cyan); opacity: 0.5;"></i>
                </div>
                <h3 class="card-title">${item.title}</h3>
                <div class="card-comparison">
                    <i class="fas fa-balance-scale"></i> ${item.comparison}
                </div>
                <p class="card-preview">${item.why}</p>
            </div>
            <div class="card-footer">
                <span class="read-more">Analyze <i class="fas fa-microscope"></i></span>
            </div>
        `;
        grid.appendChild(card);
    });
}

let currentFilter = 'all';
let currentSearch = '';

function filterData() {
    if (!anatomyData) return;

    const filtered = anatomyData.filter(item => {
        const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
        const matchesSearch = item.title.toLowerCase().includes(currentSearch) ||
            item.why.toLowerCase().includes(currentSearch) ||
            item.comparison.toLowerCase().includes(currentSearch);
        return matchesCategory && matchesSearch;
    });
    renderCards(filtered);
}

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            filterData();
        });
    });
}

if (searchInput) {
    searchInput.addEventListener('input', (e) => {
        currentSearch = e.target.value.toLowerCase();
        filterData();
    });
}

const modal = document.getElementById('modalOverlay');
const body = document.body;
const aiResponseBox = document.getElementById('aiResponseBox');
const aiResponseText = document.getElementById('aiResponseText');

function openModal(item) {
    currentActiveItem = item;

    // ===== Smart image loading: skeleton until image is ready =====
    const imgEl = document.getElementById('modalImg');
    const imgCol = imgEl.parentElement; // .modal-image-col
    if (item.img) {
        imgEl.classList.remove('img-loaded');
        imgCol.classList.add('img-loading');
        imgEl.alt = item.title;
        imgEl.decoding = 'async';
        imgEl.loading = 'eager'; // user clicked - we want it
        // Reset before assigning so we always trigger 'load' (even if same src)
        imgEl.removeAttribute('src');
        imgEl.onload = () => {
            imgEl.classList.add('img-loaded');
            imgCol.classList.remove('img-loading');
        };
        imgEl.onerror = () => {
            imgCol.classList.remove('img-loading');
            imgCol.classList.add('img-error');
        };
        imgCol.classList.remove('img-error');
        imgEl.src = item.img;
    } else {
        // No image at all — clear and hide loading state
        imgEl.removeAttribute('src');
        imgCol.classList.remove('img-loading', 'img-error');
    }

    document.getElementById('modalCategory').textContent = item.category.toUpperCase();
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalComparison').textContent = `Comparison: ${item.comparison}`;
    document.getElementById('modalWhy').textContent = item.why;
    document.getElementById('modalClinical').textContent = item.clinical;

    aiResponseBox.style.display = 'none';
    aiResponseText.innerHTML = '';

    modal.classList.add('open');
    body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('open');
    body.style.overflow = 'auto';
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

function explainLikeEngineer() {
    if (!currentActiveItem) return;

    const btn = document.getElementById('simplifyBtn');
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Analyzing...';
    btn.disabled = true;

    setTimeout(() => {
        aiResponseBox.style.display = 'block';
        aiResponseText.innerHTML = `<strong>Bio-Engineer's Analogy:</strong> ${currentActiveItem.analogy}`;

        btn.innerHTML = originalText;
        btn.disabled = false;
    }, 800);
}

// =========================================================
// WHY-SECTION QUIZ — Session Engine ("Challenge Me")
// Distinct from Atlas Quiz: single-flow session with score,
// streak, progress, results & review. No region/system wizard.
// =========================================================
const quizOverlay = document.getElementById('quizOverlay');

function startQuiz() {
    if (!quizOverlay) return;
    quizOverlay.classList.add('open');
    quizSession.toSetup();
}

function closeQuiz() {
    if (quizOverlay) quizOverlay.classList.remove('open');
}

const quizSession = {
    pool: [],
    queue: [],
    idx: 0,
    score: 0,
    streak: 0,
    bestStreak: 0,
    target: 10,
    category: 'all',
    current: null,
    wrongLog: [],

    // Show the setup screen
    toSetup() {
        document.getElementById('quizSetup').style.display = 'block';
        document.getElementById('quizContent').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        // Wire chip selectors (idempotent)
        document.querySelectorAll('#quizChips .quiz-chip').forEach(c => {
            c.onclick = () => {
                document.querySelectorAll('#quizChips .quiz-chip').forEach(x => x.classList.remove('active'));
                c.classList.add('active');
            };
        });
        document.querySelectorAll('#quizCountChips .quiz-chip').forEach(c => {
            c.onclick = () => {
                document.querySelectorAll('#quizCountChips .quiz-chip').forEach(x => x.classList.remove('active'));
                c.classList.add('active');
            };
        });
    },

    // Begin a new session
    start() {
        const catBtn = document.querySelector('#quizChips .quiz-chip.active');
        const cntBtn = document.querySelector('#quizCountChips .quiz-chip.active');
        this.category = catBtn ? catBtn.dataset.cat : 'all';
        const cnt = cntBtn ? parseInt(cntBtn.dataset.count, 10) : 10;

        // Filter pool
        if (!Array.isArray(anatomyData) || !anatomyData.length) return;
        this.pool = anatomyData.filter(it => it.quiz && (this.category === 'all' || it.category === this.category));
        if (!this.pool.length) {
            alert('No questions available for this topic.');
            return;
        }

        // Shuffle + slice
        this.queue = this._shuffle(this.pool.slice());
        this.target = (cnt === 0) ? 0 : Math.min(cnt, this.queue.length);
        if (this.target > 0) this.queue = this.queue.slice(0, this.target);

        // Reset counters
        this.idx = 0;
        this.score = 0;
        this.streak = 0;
        this.bestStreak = 0;
        this.wrongLog = [];

        document.getElementById('quizSetup').style.display = 'none';
        document.getElementById('quizResults').style.display = 'none';
        document.getElementById('quizContent').style.display = 'block';

        this._render();
    },

    // Move to next question or finish
    next() {
        this.idx++;
        if (this.target > 0 && this.idx >= this.target) {
            this._showResults();
            return;
        }
        if (this.target === 0 && this.idx >= this.queue.length) {
            // Endless mode: reshuffle pool to keep going
            this.queue = this._shuffle(this.pool.slice());
            this.idx = 0;
        }
        this._render();
    },

    restart() { this.start(); },

    _render() {
        const item = this.queue[this.idx];
        if (!item) return;
        this.current = item;
        const q = item.quiz;
        const total = this.target > 0 ? this.target : '∞';
        document.getElementById('hudProgress').innerText = `${this.idx + 1}/${total}`;
        document.getElementById('hudScore').innerText = this.score;
        document.getElementById('hudStreak').innerHTML = `${this.streak}&nbsp;<i class="fas fa-fire" style="color:${this.streak >= 3 ? '#ff7a00' : '#888'};"></i>`;
        const pct = this.target > 0 ? ((this.idx) / this.target) * 100 : ((this.idx % 10) / 10) * 100;
        document.getElementById('quizProgressFill').style.width = pct + '%';

        const tag = document.getElementById('quizTopicTag');
        tag.innerText = (item.title || '') + ' · ' + (item.category || '').toUpperCase();

        document.getElementById('quizQuestion').innerText = q.question;

        const opts = document.getElementById('quizOptions');
        opts.innerHTML = '';
        q.options.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-btn';
            btn.innerText = opt;
            btn.onclick = () => this._answer(i, btn);
            opts.appendChild(btn);
        });

        document.getElementById('quizFeedback').style.display = 'none';
        document.getElementById('nextQuizBtn').style.display = 'none';
    },

    _answer(selectedIdx, btn) {
        const q = this.current.quiz;
        const buttons = document.querySelectorAll('#quizOptions .quiz-btn');
        const correct = (selectedIdx === q.correctIndex);

        buttons.forEach((b, i) => {
            b.disabled = true;
            if (i === q.correctIndex) b.classList.add('correct');
            else if (i === selectedIdx) b.classList.add('wrong');
        });

        if (correct) {
            this.score++;
            this.streak++;
            if (this.streak > this.bestStreak) this.bestStreak = this.streak;
        } else {
            this.streak = 0;
            this.wrongLog.push({
                title: this.current.title,
                question: q.question,
                correct: q.options[q.correctIndex],
                explanation: q.explanation
            });
        }

        const fb = document.getElementById('quizFeedback');
        fb.style.display = 'block';
        fb.className = 'quiz-feedback ' + (correct ? 'fb-good' : 'fb-bad');
        fb.innerHTML = `<strong>${correct ? '✓ Correct!' : '✗ Not quite.'}</strong> ${q.explanation}`;

        // Update HUD live
        document.getElementById('hudScore').innerText = this.score;
        document.getElementById('hudStreak').innerHTML = `${this.streak}&nbsp;<i class="fas fa-fire" style="color:${this.streak >= 3 ? '#ff7a00' : '#888'};"></i>`;

        document.getElementById('nextQuizBtn').style.display = 'inline-flex';
    },

    _showResults() {
        document.getElementById('quizContent').style.display = 'none';
        document.getElementById('quizResults').style.display = 'block';
        const total = this.target;
        const pct = total > 0 ? Math.round((this.score / total) * 100) : 0;

        let grade = 'Keep Practising', badge = 'fa-seedling';
        if (pct >= 90) { grade = 'Master Anatomist'; badge = 'fa-crown'; }
        else if (pct >= 75) { grade = 'Excellent'; badge = 'fa-trophy'; }
        else if (pct >= 60) { grade = 'Solid Pass'; badge = 'fa-medal'; }
        else if (pct >= 40) { grade = 'Needs Review'; badge = 'fa-book'; }

        const badgeEl = document.getElementById('quizResultBadge');
        badgeEl.innerHTML = `<i class="fas ${badge}"></i>`;
        document.getElementById('quizResultTitle').innerText = 'Session Complete';
        document.getElementById('quizResultScore').innerText = `${this.score} / ${total}`;
        document.getElementById('quizResultGrade').innerText = grade + ' · ' + pct + '%';
        document.getElementById('resBestStreak').innerText = this.bestStreak;
        document.getElementById('resAccuracy').innerText = pct + '%';
        document.getElementById('resTopic').innerText = this.category === 'all' ? 'All' : this.category;

        const rev = document.getElementById('quizReviewBox');
        if (this.wrongLog.length === 0) {
            rev.innerHTML = '<div class="quiz-review-perfect"><i class="fas fa-check-circle"></i> Perfect run — no review needed.</div>';
        } else {
            rev.innerHTML = '<div class="quiz-review-head">Review missed questions</div>' +
                this.wrongLog.map(w =>
                    `<div class="quiz-review-item">
                        <div class="qri-title">${w.title}</div>
                        <div class="qri-q">${w.question}</div>
                        <div class="qri-a">✓ ${w.correct}</div>
                        <div class="qri-exp">${w.explanation}</div>
                     </div>`
                ).join('');
        }
    },

    _shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

if (grid && anatomyData) {
    renderCards(anatomyData);
}
