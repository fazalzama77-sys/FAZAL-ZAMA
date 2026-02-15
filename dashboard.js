// =========================================================
// DASHBOARD & PERFORMANCE TRACKER
// Tracks quiz history, calculates strengths, renders charts
// =========================================================

const dashboard = {
    STORAGE_KEY: 'ivri-quiz-history',
    regions: ["Forelimb", "Hindlimb", "Head & Neck", "Thorax", "Abdomen", "Pelvis"],
    systems: ["Osteology", "Myology", "Arthrology", "Neurology", "Angiology"],

    // ==================== DATA PERSISTENCE ====================

    saveQuizResult: (data) => {
        const history = dashboard.getHistory();
        history.push({
            region: data.region || 'Unknown',
            system: data.system || 'Unknown',
            mode: data.mode || 'mcq',
            score: data.score || 0,
            total: data.total || 0,
            accuracy: data.total > 0 ? Math.round((data.score / data.total) * 100) : 0,
            timestamp: Date.now(),
            date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        });
        localStorage.setItem(dashboard.STORAGE_KEY, JSON.stringify(history));
    },

    getHistory: () => {
        try {
            return JSON.parse(localStorage.getItem(dashboard.STORAGE_KEY)) || [];
        } catch {
            return [];
        }
    },

    clearData: () => {
        if (confirm('Are you sure you want to clear all performance data? This cannot be undone.')) {
            localStorage.removeItem(dashboard.STORAGE_KEY);
            dashboard.render();
        }
    },

    // ==================== CALCULATIONS ====================

    getOverviewStats: () => {
        const history = dashboard.getHistory();
        if (history.length === 0) {
            return { totalQuizzes: 0, totalQuestions: 0, avgAccuracy: 0, bestAccuracy: 0, studyStreak: 0, totalCorrect: 0 };
        }

        const totalQuizzes = history.length;
        const totalQuestions = history.reduce((sum, h) => sum + h.total, 0);
        const totalCorrect = history.reduce((sum, h) => sum + h.score, 0);
        const avgAccuracy = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
        const bestAccuracy = Math.max(...history.map(h => h.accuracy));

        // Calculate study streak (consecutive days)
        let streak = 0;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dates = [...new Set(history.map(h => {
            const d = new Date(h.timestamp);
            d.setHours(0, 0, 0, 0);
            return d.getTime();
        }))].sort((a, b) => b - a);

        for (let i = 0; i < dates.length; i++) {
            const expected = new Date(today);
            expected.setDate(expected.getDate() - i);
            expected.setHours(0, 0, 0, 0);
            if (dates[i] === expected.getTime()) {
                streak++;
            } else {
                break;
            }
        }

        return { totalQuizzes, totalQuestions, avgAccuracy, bestAccuracy, studyStreak: streak, totalCorrect };
    },

    getTopicStrengths: () => {
        const history = dashboard.getHistory();
        const map = {};

        history.forEach(h => {
            const key = `${h.region}|${h.system}`;
            if (!map[key]) {
                map[key] = { region: h.region, system: h.system, totalScore: 0, totalQuestions: 0, attempts: 0 };
            }
            map[key].totalScore += h.score;
            map[key].totalQuestions += h.total;
            map[key].attempts++;
        });

        Object.values(map).forEach(entry => {
            entry.accuracy = entry.totalQuestions > 0
                ? Math.round((entry.totalScore / entry.totalQuestions) * 100)
                : 0;
        });

        return map;
    },

    // ==================== RENDERING ====================

    render: () => {
        dashboard.renderOverviewStats();
        dashboard.renderAccuracyChart();
        dashboard.renderHeatmap();
        dashboard.renderHistory();
    },

    renderOverviewStats: () => {
        const container = document.getElementById('dash-overview-stats');
        if (!container) return;

        const stats = dashboard.getOverviewStats();

        const cards = [
            { icon: 'fa-clipboard-check', label: 'Quizzes Taken', value: stats.totalQuizzes, color: '#bd93f9' },
            { icon: 'fa-question-circle', label: 'Questions Answered', value: stats.totalQuestions, color: 'var(--why-cyan)' },
            { icon: 'fa-bullseye', label: 'Average Accuracy', value: stats.avgAccuracy + '%', color: dashboard.getAccuracyColor(stats.avgAccuracy) },
            { icon: 'fa-trophy', label: 'Best Score', value: stats.bestAccuracy + '%', color: 'var(--atlas-gold)' },
            { icon: 'fa-fire', label: 'Study Streak', value: stats.studyStreak + ' days', color: '#ff7043' },
            { icon: 'fa-check', label: 'Correct Answers', value: stats.totalCorrect, color: '#00ff9d' }
        ];

        container.innerHTML = cards.map(card => `
      <div class="dash-stat-card">
        <div class="dash-stat-icon" style="color: ${card.color};">
          <i class="fas ${card.icon}"></i>
        </div>
        <div class="dash-stat-value" style="color: ${card.color};">${card.value}</div>
        <div class="dash-stat-label">${card.label}</div>
      </div>
    `).join('');
    },

    renderAccuracyChart: () => {
        const container = document.getElementById('dash-accuracy-chart');
        if (!container) return;

        const history = dashboard.getHistory();

        if (history.length === 0) {
            container.innerHTML = `
        <div class="dash-empty">
          <i class="fas fa-chart-line" style="font-size:2rem; margin-bottom:10px; opacity:0.3;"></i>
          <p>Complete quizzes to see your accuracy trend</p>
        </div>
      `;
            return;
        }

        const recent = history.slice(-20);
        const maxVal = 100;
        const chartHeight = 200;
        const barWidth = Math.max(20, Math.floor((100 / recent.length) * 3));

        const barsHtml = recent.map((h, i) => {
            const height = (h.accuracy / maxVal) * chartHeight;
            const color = dashboard.getAccuracyColor(h.accuracy);
            return `
        <div class="dash-bar-wrapper" style="flex: 1; min-width: ${barWidth}px;">
          <div class="dash-bar-tooltip">${h.accuracy}%<br><span style="font-size:0.65rem;opacity:0.7;">${h.region}</span></div>
          <div class="dash-bar" style="height: ${height}px; background: ${color};" title="${h.accuracy}% - ${h.region} ${h.system}"></div>
          <div class="dash-bar-label">${i + 1}</div>
        </div>
      `;
        }).join('');

        // Grid lines
        const gridLines = [100, 75, 50, 25, 0].map(val => `
      <div class="dash-grid-line" style="bottom: ${(val / maxVal) * chartHeight}px;">
        <span class="dash-grid-label">${val}%</span>
      </div>
    `).join('');

        container.innerHTML = `
      <div class="dash-chart-area" style="height: ${chartHeight + 40}px;">
        <div class="dash-grid-lines" style="height: ${chartHeight}px;">
          ${gridLines}
        </div>
        <div class="dash-bars-row">
          ${barsHtml}
        </div>
      </div>
    `;
    },

    renderHeatmap: () => {
        const container = document.getElementById('dash-heatmap');
        if (!container) return;

        const strengths = dashboard.getTopicStrengths();
        const history = dashboard.getHistory();

        if (history.length === 0) {
            container.innerHTML = `
        <div class="dash-empty">
          <i class="fas fa-th" style="font-size:2rem; margin-bottom:10px; opacity:0.3;"></i>
          <p>Complete quizzes to see your topic strengths</p>
        </div>
      `;
            return;
        }

        // Build heatmap grid
        let html = '<div class="dash-heatmap-grid">';

        // Header row
        html += '<div class="dash-hm-corner"></div>';
        dashboard.systems.forEach(sys => {
            html += `<div class="dash-hm-header">${sys.substring(0, 5)}</div>`;
        });

        // Data rows
        dashboard.regions.forEach(region => {
            html += `<div class="dash-hm-row-label">${region}</div>`;
            dashboard.systems.forEach(sys => {
                const key = `${region}|${sys}`;
                const data = strengths[key];
                if (data) {
                    const color = dashboard.getAccuracyColor(data.accuracy);
                    const opacity = Math.max(0.3, data.accuracy / 100);
                    html += `
            <div class="dash-hm-cell" title="${region} - ${sys}: ${data.accuracy}% (${data.attempts} attempts)"
                 style="background: ${color}; opacity: ${opacity};">
              <span>${data.accuracy}%</span>
            </div>
          `;
                } else {
                    html += `<div class="dash-hm-cell empty" title="${region} - ${sys}: Not attempted">—</div>`;
                }
            });
        });

        html += '</div>';

        // Legend
        html += `
      <div class="dash-hm-legend">
        <span><span class="dash-hm-legend-dot" style="background:#ff6b6b;"></span> &lt;60%</span>
        <span><span class="dash-hm-legend-dot" style="background:#ffd700;"></span> 60-79%</span>
        <span><span class="dash-hm-legend-dot" style="background:#00ff9d;"></span> ≥80%</span>
        <span><span class="dash-hm-legend-dot" style="background:var(--border);"></span> Not attempted</span>
      </div>
    `;

        container.innerHTML = html;
    },

    renderHistory: () => {
        const container = document.getElementById('dash-history');
        if (!container) return;

        const history = dashboard.getHistory();

        if (history.length === 0) {
            container.innerHTML = `
        <div class="dash-empty">
          <i class="fas fa-history" style="font-size:2rem; margin-bottom:10px; opacity:0.3;"></i>
          <p>Your quiz sessions will appear here</p>
        </div>
      `;
            return;
        }

        const recent = history.slice().reverse().slice(0, 25);

        container.innerHTML = `
      <div class="dash-history-table">
        <div class="dash-ht-header">
          <div class="dash-ht-col">#</div>
          <div class="dash-ht-col wide">Region</div>
          <div class="dash-ht-col">System</div>
          <div class="dash-ht-col">Mode</div>
          <div class="dash-ht-col">Score</div>
          <div class="dash-ht-col">Accuracy</div>
          <div class="dash-ht-col">Date</div>
        </div>
        ${recent.map((h, i) => {
            const color = dashboard.getAccuracyColor(h.accuracy);
            return `
            <div class="dash-ht-row" style="animation-delay: ${i * 0.03}s;">
              <div class="dash-ht-col">${history.length - i}</div>
              <div class="dash-ht-col wide">${h.region}</div>
              <div class="dash-ht-col">${h.system}</div>
              <div class="dash-ht-col"><span class="dash-mode-tag">${h.mode.toUpperCase()}</span></div>
              <div class="dash-ht-col">${h.score}/${h.total}</div>
              <div class="dash-ht-col" style="color: ${color}; font-weight: 700;">${h.accuracy}%</div>
              <div class="dash-ht-col">${h.date}</div>
            </div>
          `;
        }).join('')}
      </div>
    `;
    },

    // ==================== UTILITIES ====================

    getAccuracyColor: (accuracy) => {
        if (accuracy >= 80) return '#00ff9d';
        if (accuracy >= 60) return '#ffd700';
        return '#ff6b6b';
    }
};

// ==================== HOOK INTO QUIZ ENGINE ====================
// Override showAnalysis to save quiz results to dashboard
(function () {
    const originalShowAnalysis = quizApp.showAnalysis;
    quizApp.showAnalysis = () => {
        originalShowAnalysis();

        // Save result to dashboard
        const attempted = quizApp.score + quizApp.wrong;
        if (attempted > 0) {
            dashboard.saveQuizResult({
                region: quizApp.selectedRegion || 'Combined',
                system: quizApp.selectedSystem || 'Combined',
                mode: quizApp.mode || 'mcq',
                score: quizApp.score,
                total: attempted
            });
        }
    };
})();
