// =========================================================
// GLOSSARY — UG-friendly tooltip definitions for tough terms
// =========================================================
// Usage: glossary.decorate(rootElement) scans the rendered HTML
// inside rootElement and wraps known terms with a hover-tooltip.
// Terms are matched longest-first to avoid partial overlap.
// =========================================================

const glossary = {

    // Term → simple UG-level definition. Add freely.
    terms: {
        // ---------- POSTURE / GAIT ----------
        "anticlinal vertebra": "The single vertebra in the back whose spine stands vertical. Spines in front of it slope back; spines behind slope forward. T13 in ox, T16 in horse.",
        "plantigrade": "Walking on the entire sole of the foot — heel and toes both touching the ground. Bears, humans.",
        "digitigrade": "Walking on the toes only (heel raised). Dogs, cats.",
        "unguligrade": "Walking on the tip of the toe (hoof). Horse, ox.",
        "synsarcosis": "A 'muscle joint' — bones connected by muscles instead of bony joints. The forelimb is attached to the trunk this way (no clavicle).",

        // ---------- BONES ----------
        "ossa cordis": "Two small bones in the fibrous skeleton of the heart at the base of the aorta — only in adult ruminants.",
        "carina": "The deep bony keel on the underside of a bird's sternum, where the powerful flight muscles attach.",
        "notarium": "Fused cranial thoracic vertebrae (T1–T5) in birds — gives the back rigidity for flight.",
        "synsacrum": "Fusion of last thoracic + lumbar + sacral + first caudal vertebrae into one rigid bone in birds.",
        "pygostyle": "Fused last few caudal vertebrae in birds — supports the tail feathers.",
        "tarsometatarsus": "A single fused bone in birds = distal tarsals + metatarsals fused together.",
        "tibiotarsus": "A single fused bone in birds = tibia + proximal tarsals fused together.",
        "uncinate process": "Backward-pointing bony process on bird ribs that overlaps the next rib — strengthens the chest wall for flight.",
        "fovea capitis": "A small pit on the head of the femur where the round ligament attaches.",
        "tuber calcanei": "The bony point that sticks up at the back of the hock — 'point of the hock' — where the Achilles tendon attaches.",
        "tuber coxae": "The 'hook bone' — palpable cranio-lateral angle of the ilium (rump corner) in cattle.",
        "tuber ischiadicum": "The 'pin bone' — caudal palpable corner of the ischium next to the tail base in cattle.",
        "tuber sacrale": "The dorsomedial angle of the ilium where the rump meets the sacrum — the highest point of the croup.",

        // ---------- LIGAMENTS / CONNECTIVE ----------
        "lacertus fibrosus": "A fibrous band linking the biceps brachii tendon to the extensor carpi radialis tendon — part of the equine stay apparatus.",
        "intercapital ligament": "A ligament that joins the heads of the right and left ribs across the floor of the vertebral canal — protects the disc from bulging.",
        "ligamentum flavum": "Yellow elastic ligament between vertebral arches — the 'pop' you feel when placing an epidural needle.",
        "nuchal ligament": "Big elastic ligament running from skull → withers — passively holds up the heavy head of a grazing animal.",
        "supraspinous ligament": "Long fibrous band along the tips of all spinous processes; resists over-flexion of the back.",
        "round ligament": "Inside the hip joint — runs from the fovea capitis on the femur to the acetabular fossa.",
        "accessory ligament": "An EXTRA ligament in horses, anchoring the femoral head to the prepubic tendon — limits abduction.",
        "prepubic tendon": "Strong tendinous insertion on the cranial pubic brim — anchors the abdominal wall and rectus abdominis to the pelvis.",

        // ---------- VESSELS ----------
        "rete mirabile": "Latin for 'wonderful net' — a network of intertwined small vessels that buffers blood pressure or exchanges heat (e.g. at the giraffe skull base).",
        "pampiniform plexus": "A network of veins around the testicular artery in the spermatic cord — cools the incoming arterial blood.",
        "cisterna chyli": "Sac-like dilation in the abdomen (dorsal to aorta) where the thoracic duct begins.",
        "azygos vein": "Unpaired vein draining the intercostal spaces. RIGHT in ox/horse; LEFT (hemiazygos) in dog/pig/cat.",
        "ventral coccygeal artery": "Artery under the tail — the standard pulse and blood-collection site in cattle.",

        // ---------- NERVES ----------
        "recurrent laryngeal nerve": "Branch of the vagus that loops around a chest artery and runs back UP to the larynx. Damage → roaring in horses.",
        "phrenic nerve": "Cervical-origin nerve (C5–C7) — the SOLE motor nerve to the diaphragm.",
        "lumbosacral plexus": "Network formed by ventral branches of last lumbar + first sacral spinal nerves — gives rise to femoral, obturator, sciatic, pudendal nerves.",
        "pudendal nerve": "Sacral nerve (S2–S4) — supplies perineum, scrotum, prepuce, vulva, penis.",

        // ---------- ORGANS ----------
        "trachealis muscle": "Smooth muscle that closes the dorsal gap of the C-shaped tracheal cartilages.",
        "tracheal bronchus": "Extra bronchus arising from the right side of the trachea BEFORE the bifurcation — present in ox, sheep, pig (NOT in horse, dog).",
        "mediastinum": "The thin median wall between the right and left pleural sacs — contains heart, trachea, oesophagus.",
        "centrum tendineum": "Y-shaped central tendon of the diaphragm — non-contractile; forms the roof of the dome.",
        "aortic hiatus": "Most dorsal opening in the diaphragm — passes aorta, azygos vein, thoracic duct.",
        "oesophageal hiatus": "Middle opening in the diaphragm — passes oesophagus and the two vagal trunks.",
        "caval foramen": "Most ventral opening in the diaphragm (in tendinous centre) — passes the caudal vena cava only.",

        // ---------- CLINICAL / DISEASE ----------
        "auscultation": "Listening to internal body sounds with a stethoscope.",
        "percussion": "Tapping the body wall and judging the sound (resonant = air, dull = fluid/solid).",
        "paracentesis thoracis": "Inserting a needle through the chest wall to remove fluid or air from the pleural cavity.",
        "roaring": "Laryngeal hemiplegia in horses — left recurrent laryngeal nerve paralysis → loud whistling on inspiration during exercise.",
        "choke": "Oesophageal obstruction — a food bolus stuck in the gullet. Common at thoracic inlet and base of heart.",
        "hardware disease": "Traumatic reticulopericarditis — a swallowed wire or nail pierces the reticulum and reaches the pericardium → infection of heart sac.",
        "calving paralysis": "Damage to the obturator nerve during difficult calving → cow's hind legs splay sideways = 'downer cow'.",
        "downer cow": "A cow that cannot rise after calving — usually due to obturator/femoral nerve damage or metabolic disease.",
        "stay apparatus": "A passive locking system in the limbs (especially in horses) that lets the animal stand and sleep with minimal muscle effort.",
        "reciprocal apparatus": "Tendinous link in the horse hindlimb (peroneus tertius + superficial digital flexor) — when the stifle flexes, the hock automatically flexes with it.",
        "epidural anaesthesia": "Local anaesthetic injected into the epidural space (around the dura) — blocks spinal nerves.",
        "patellar desmotomy": "Cutting the medial patellar ligament in horses to release a patella stuck over the medial trochlear ridge ('upward fixation').",

        // ---------- SHORT TECH TERMS ----------
        "synovial joint": "A joint with a fluid-filled cavity, allowing free movement (knee, elbow, etc.).",
        "synchondrosis": "Bone-to-bone joint joined by cartilage with NO cavity — almost no movement.",
        "synostosis": "When two bones fuse together as one bone (e.g. radius and ulna in ox).",
        "aponeurosis": "A flat, sheet-like tendon connecting muscle to bone or to another muscle.",
        "synovial bursa": "A small fluid-filled sac that reduces friction where a tendon crosses a bony point.",
        "synovial sheath": "A tube of synovial membrane wrapping around a tendon to let it glide smoothly."
    },

    // Pre-build the regex (longest-first, case-insensitive, word-boundary).
    _regex: null,
    _lookup: null,
    _buildIndex() {
        const sortedTerms = Object.keys(glossary.terms)
            .sort((a, b) => b.length - a.length)
            .map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        if (sortedTerms.length === 0) return;
        glossary._regex = new RegExp(`\\b(${sortedTerms.join('|')})\\b`, 'gi');

        // Lower-cased lookup map for retrieving definitions
        glossary._lookup = {};
        Object.keys(glossary.terms).forEach((t) => {
            glossary._lookup[t.toLowerCase()] = glossary.terms[t];
        });
    },

    // Walk text nodes inside `root` and wrap matches in <span class="gloss-term">.
    // SAFE: only operates on text nodes — never touches existing HTML.
    decorate(root) {
        if (!root) return;
        if (!glossary._regex) glossary._buildIndex();
        if (!glossary._regex) return;

        // Skip these — already-decorated or interactive nodes
        const SKIP = new Set(['SCRIPT', 'STYLE', 'A', 'BUTTON', 'INPUT', 'TEXTAREA', 'CODE', 'PRE']);
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
            acceptNode(node) {
                if (!node.textContent.trim()) return NodeFilter.FILTER_REJECT;
                let p = node.parentNode;
                while (p) {
                    if (!p.tagName) break;
                    if (SKIP.has(p.tagName)) return NodeFilter.FILTER_REJECT;
                    if (p.classList && p.classList.contains('gloss-term')) return NodeFilter.FILTER_REJECT;
                    p = p.parentNode;
                }
                return NodeFilter.FILTER_ACCEPT;
            }
        });

        const targets = [];
        let n;
        while ((n = walker.nextNode())) targets.push(n);

        targets.forEach((textNode) => {
            const text = textNode.textContent;
            if (!glossary._regex.test(text)) return;
            glossary._regex.lastIndex = 0;

            const frag = document.createDocumentFragment();
            let lastIdx = 0;
            let m;
            while ((m = glossary._regex.exec(text)) !== null) {
                if (m.index > lastIdx) {
                    frag.appendChild(document.createTextNode(text.slice(lastIdx, m.index)));
                }
                const span = document.createElement('span');
                span.className = 'gloss-term';
                span.textContent = m[0];
                span.dataset.def = glossary._lookup[m[0].toLowerCase()] || '';
                span.setAttribute('tabindex', '0');
                span.setAttribute('aria-label', `Definition: ${span.dataset.def}`);
                frag.appendChild(span);
                lastIdx = m.index + m[0].length;
            }
            if (lastIdx < text.length) {
                frag.appendChild(document.createTextNode(text.slice(lastIdx)));
            }
            textNode.parentNode.replaceChild(frag, textNode);
        });
    },

    // Optional: lookup function for use elsewhere
    define(term) {
        if (!glossary._lookup) glossary._buildIndex();
        return glossary._lookup[term.toLowerCase()] || null;
    }
};

if (typeof window !== 'undefined') window.glossary = glossary;
