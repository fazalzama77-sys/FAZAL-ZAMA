// =========================================================
// SPACED REPETITION SYSTEM (SRS) — Leitner Box Algorithm
// =========================================================
// 5-box system. Wrong answers drop a question to Box 1 (sees daily).
// Correct answers promote +1 box. Box 5 = mastered (review monthly).
// Intervals: B1 = 1d, B2 = 3d, B3 = 7d, B4 = 14d, B5 = 30d.
// =========================================================

const srs = {
    STORAGE_KEY: 'ivri-srs-state',

    // Interval table in DAYS for each Leitner box.
    intervals: { 1: 1, 2: 3, 3: 7, 4: 14, 5: 30 },

    // ---- STATE PERSISTENCE ----
    _load: () => {
        try { return JSON.parse(localStorage.getItem(srs.STORAGE_KEY)) || {}; }
        catch { return {}; }
    },
    _save: (state) => localStorage.setItem(srs.STORAGE_KEY, JSON.stringify(state)),

    // Build a stable question id from region/system/mode/index
    qid: (region, system, mode, index) => `${region}::${system}::${mode}::${index}`,

    // ---- RECORDING ANSWERS ----
    recordAnswer: (qid, isCorrect) => {
        const state = srs._load();
        const today = Date.now();
        const card = state[qid] || { box: 1, lastReview: null, history: [] };

        if (isCorrect) {
            card.box = Math.min(5, card.box + 1);
        } else {
            card.box = 1; // wrong answer → back to daily
        }
        card.lastReview = today;
        card.history.push({ t: today, c: isCorrect });
        // Keep history bounded
        if (card.history.length > 50) card.history = card.history.slice(-50);

        state[qid] = card;
        srs._save(state);
        return card;
    },

    // ---- DUE QUESTIONS ----
    isDue: (card) => {
        if (!card || !card.lastReview) return true; // never seen → due
        const daysElapsed = (Date.now() - card.lastReview) / (1000 * 60 * 60 * 24);
        return daysElapsed >= srs.intervals[card.box];
    },

    // Returns array of qids that are due for review (either never seen OR overdue)
    getDueQids: () => {
        const state = srs._load();
        return Object.keys(state).filter((qid) => srs.isDue(state[qid]));
    },

    // ---- BUILDING A SMART REVIEW SET ----
    // Pulls all due questions across all regions/systems for a given mode (mcq/tf/fib).
    // If pool isn't large enough, fills with new (never-seen) questions.
    buildReviewSet: (mode = 'mcq', limit = 20) => {
        if (typeof quizBank === 'undefined') return [];

        const state = srs._load();
        const allQuestions = [];

        // Collect every question with its identity
        Object.keys(quizBank).forEach((region) => {
            Object.keys(quizBank[region]).forEach((system) => {
                const sysData = quizBank[region][system];
                if (!sysData || !sysData[mode]) return;
                sysData[mode].forEach((q, idx) => {
                    const qid = srs.qid(region, system, mode, idx);
                    const card = state[qid];
                    allQuestions.push({ qid, region, system, mode, idx, q, card });
                });
            });
        });

        // Sort: due-with-low-box first (struggling), then never-seen, then promoted
        allQuestions.sort((a, b) => {
            const aDue = !a.card || srs.isDue(a.card);
            const bDue = !b.card || srs.isDue(b.card);
            if (aDue && !bDue) return -1;
            if (!aDue && bDue) return 1;
            const aBox = a.card ? a.card.box : 0; // never-seen ranks before high boxes
            const bBox = b.card ? b.card.box : 0;
            return aBox - bBox;
        });

        return allQuestions.slice(0, limit);
    },

    // ---- STATS ----
    getStats: () => {
        const state = srs._load();
        const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        let dueNow = 0;
        Object.values(state).forEach((card) => {
            counts[card.box] = (counts[card.box] || 0) + 1;
            if (srs.isDue(card)) dueNow++;
        });
        return {
            totalCards: Object.keys(state).length,
            byBox: counts,
            mastered: counts[5],
            dueNow
        };
    },

    // ---- RESET ----
    reset: () => {
        if (confirm('Reset all spaced-repetition progress? This cannot be undone.')) {
            localStorage.removeItem(srs.STORAGE_KEY);
            return true;
        }
        return false;
    }
};

// Expose for console debugging
if (typeof window !== 'undefined') window.srs = srs;
