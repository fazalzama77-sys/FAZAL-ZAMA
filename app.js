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
    },

    toggleTheme: () => {
        document.body.classList.toggle('professional-mode');
        const isPro = document.body.classList.contains('professional-mode');
        localStorage.setItem('ivri-theme', isPro ? 'professional' : 'neon');

        const btnText = document.getElementById('theme-text');
        if (btnText) {
            btnText.innerText = isPro ? 'Student Mode' : 'Professional Mode';
        }
    },

    toggleElite: () => {
        app.state.eliteMode = !app.state.eliteMode;
        localStorage.setItem('ivri-elite', app.state.eliteMode);

        const eliteBtn = document.getElementById('elite-toggle');
        const eliteText = document.getElementById('elite-text');

        if (app.state.eliteMode) {
            if (eliteBtn) eliteBtn.classList.add('active');
            if (eliteText) eliteText.innerText = 'Standard View';
        } else {
            if (eliteBtn) eliteBtn.classList.remove('active');
            if (eliteText) eliteText.innerText = 'Elite View';
        }

        const activeBtn = document.querySelector('.topic-btn.active');
        if (activeBtn) {
            const match = activeBtn.getAttribute('onclick').match(/renderDetail\((\d+)/);
            if (match) {
                const index = parseInt(match[1]);
                app.renderDetail(index, activeBtn);
            }
        }
    },

    loadView: (viewName) => {
        document.querySelectorAll('.view-section').forEach(el => {
            el.classList.remove('active');
            setTimeout(() => {
                if (!el.classList.contains('active')) el.style.display = 'none';
            }, 500);
        });

        const target = document.getElementById(viewName + '-view');
        target.style.display = 'block';
        setTimeout(() => target.classList.add('active'), 10);

        app.state.view = viewName;
        window.scrollTo(0, 0);

        if (viewName === 'atlas') app.renderAtlasSelector();
        if (viewName === 'dashboard' && typeof dashboard !== 'undefined') dashboard.render();
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
            "Forelimb": "fa-hand-point-up",
            "Hindlimb": "fa-shoe-prints",
            "Thorax": "fa-lungs",
            "Abdomen": "fa-prescription-bottle-alt",
            "Head & Neck": "fa-head-side-virus",
            "Pelvis": "fa-bone"
        };
        return icons[region] || "fa-bone";
    },

    getSystemIcon: (system) => {
        const icons = {
            "Osteology": "fa-bone",
            "Myology": "fa-running",
            "Arthrology": "fa-link",
            "Neurology": "fa-brain",
            "Angiology": "fa-heartbeat"
        };
        return icons[system] || "fa-book-medical";
    },

    selectRegion: (region) => {
        app.state.region = region;
        app.renderAtlasSelector();
    },

    selectSystem: (system) => {
        app.state.system = system;
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
            app.renderAtlasSelector();
        } else if (app.state.region) {
            app.state.region = null;
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
        list.innerHTML = data.map((item, index) => `
            <button class="topic-btn" onclick="app.renderDetail(${index}, this)">${item.title.toUpperCase()}</button>
        `).join('');
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

        // ELITE MODE LOGIC: Use eliteDesc if available and eliteMode is ON
        const useElite = app.state.eliteMode && item.eliteDesc;
        const displayContent = useElite ? item.eliteDesc : item.desc;
        const modeLabel = useElite ? 'COMPREHENSIVE ACADEMIC VIEW' : 'STANDARD MORPHOLOGY';
        const modeBadge = useElite ? '<span style="background:var(--why-cyan); color:var(--void); padding:2px 8px; border-radius:4px; font-size:0.8rem; margin-left:10px;">ELITE MODE</span>' : '';

        // Build content based on available data
        let contentHtml = `
            <div class="h-title">${item.title} ${modeBadge}</div>
            <span class="h-sub">/// ${modeLabel} // ${app.state.system.toUpperCase()}</span>
            
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

        // Image placeholder (if imgCode exists)
        if (item.imgCode) {
            contentHtml += `
                <div style="margin-top:30px; animation: detailFade 0.9s ease;">
                    <strong style="color:var(--text-mute); font-family:var(--font-code); display:block; margin-bottom:10px;">
                        <i class="fas fa-image"></i> VISUAL REFERENCE
                    </strong>
                    <div style="background:var(--void); border:1px dashed var(--border); border-radius:8px; padding:40px; text-align:center; color:var(--text-mute);">
                        <i class="fas fa-image" style="font-size:2rem; margin-bottom:10px;"></i>
                        <div>Image: ${item.imgCode}</div>
                        <div style="font-size:0.8rem; margin-top:5px;">(Integration ready)</div>
                    </div>
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
    document.getElementById('modalImg').src = item.img;
    document.getElementById('modalImg').alt = item.title;
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

const quizOverlay = document.getElementById('quizOverlay');
const quizQuestion = document.getElementById('quizQuestion');
const quizOptions = document.getElementById('quizOptions');
const quizFeedback = document.getElementById('quizFeedback');
const nextQuizBtn = document.getElementById('nextQuizBtn');
let currentQuizData = null;

function startQuiz() {
    if (quizOverlay) {
        quizOverlay.classList.add('open');
        generateQuiz();
    }
}

function closeQuiz() {
    if (quizOverlay) {
        quizOverlay.classList.remove('open');
    }
}

function generateQuiz() {
    quizQuestion.innerText = "Accessing Biomechanical Database...";
    quizOptions.innerHTML = '<div style="color: var(--why-cyan); text-align: center;"><i class="fas fa-cog fa-spin fa-2x"></i></div>';
    quizFeedback.style.display = 'none';
    nextQuizBtn.style.display = 'none';

    setTimeout(() => {
        if (anatomyData && anatomyData.length > 0) {
            const item = anatomyData[Math.floor(Math.random() * anatomyData.length)];
            currentQuizData = item.quiz;
            renderQuiz(currentQuizData);
        }
    }, 600);
}

function renderQuiz(data) {
    quizQuestion.innerText = data.question;
    quizOptions.innerHTML = '';

    data.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-btn';
        btn.innerText = opt;
        btn.onclick = () => checkAnswer(index, btn);
        quizOptions.appendChild(btn);
    });
}

function checkAnswer(selectedIndex, btnElement) {
    const buttons = quizOptions.querySelectorAll('.quiz-btn');
    buttons.forEach((b, idx) => {
        b.disabled = true;
        if (idx === currentQuizData.correctIndex) b.classList.add('correct');
        else if (idx === selectedIndex) b.classList.add('wrong');
    });

    quizFeedback.style.display = 'block';
    quizFeedback.innerHTML = `<strong>${selectedIndex === currentQuizData.correctIndex ? 'Correct!' : 'Incorrect.'}</strong> ${currentQuizData.explanation}`;

    nextQuizBtn.style.display = 'block';
}

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});

if (grid && anatomyData) {
    renderCards(anatomyData);
}