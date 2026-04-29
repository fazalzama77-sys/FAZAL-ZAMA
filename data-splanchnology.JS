// =========================================================
// SPLANCHNOLOGY DATA MODULE
// Pushes visceral organ data into the correct regional arrays:
//   atlasData["Head & Neck"]["Splanchnology"]
//   atlasData["Thorax"]["Splanchnology"]
//   atlasData["Abdomen"]["Splanchnology"]
// Must load AFTER the regional data files.
// =========================================================

// ---- HEAD & NECK > SPLANCHNOLOGY ----
atlasData["Head & Neck"]["Splanchnology"].push(
    {
        title: "Digestive System: Oral Cavity & Pharynx",
        desc: `<b>Overview:</b><br>
        • The oral cavity is the portal of the digestive tube.<br>
        • In ruminants, the <b>dental pad</b> replaces upper incisors — adapted for grasping roughage.<br>
        • The <b>Pharynx</b> is a muscular tube common to both respiratory and digestive pathways.<br>
        • Key features: Tongue (torus linguae in Ox), Teeth, Salivary Glands, and Soft Palate.`,
        eliteDesc: `<h3>Oral Cavity and Pharyngeal Architecture</h3>
        <p>The splanchnology of the head begins with the <b>oral cavity (cavum oris)</b>, which in ruminants is specialized for ingestion of large quantities of roughage. The absence of upper incisors and the presence of a cornified <b>dental pad</b> are pathognomonic adaptations.</p>
        <p>The bovine tongue bears a distinctive <b>torus linguae</b> (lingual torus) — a firm dorsal swelling of smooth muscle and connective tissue in the middle third of the tongue that aids in grasping forage.</p>
        <p>The <b>pharynx</b> acts as a critical switching station where the respiratory and digestive tracts cross. It is divided into the oropharynx, nasopharynx, and laryngopharynx. The epiglottis acts as the switching valve during deglutition.</p>
        <p>The <b>salivary glands</b> of ruminants are enormous — the parotid alone can weigh 400 g — because ruminants require vast quantities of alkaline saliva (up to 150 L/day in cattle) to buffer the fermentation acids in the rumen.</p>`,
        comparative: [
            { species: "Ox", note: "Dental pad (pollex dentalis) replaces upper incisors. Large torus linguae. Parotid gland is enormous. Soft palate is relatively short." },
            { species: "Horse", note: "Has upper incisors. Very long, fleshy soft palate — obligate nasal breather. Cannot vomit due to strong cardiac sphincter." },
            { species: "Dog", note: "Has both upper and lower incisors. Soft palate is short. Vomiting reflex is well developed." }
        ],
        clinical: "<b>Pharyngeal Paralysis:</b> Can lead to dysphagia and aspiration pneumonia. <b>Actinobacillosis (Wooden Tongue):</b> Actinobacillus lignieresii causes granulomatous glossitis in cattle — tongue becomes hard and swollen. <b>Calf Diphtheria:</b> Fusobacterium necrophorum causes necrotic stomatitis/pharyngitis in calves."
    }
);

// ---- THORAX > SPLANCHNOLOGY ----
atlasData["Thorax"]["Splanchnology"].push(
    {
        title: "Respiratory System: Lungs & Pleura",
        desc: `<b>Overview:</b><br>
        • The lungs are the primary organs of respiration.<br>
        • Ruminant lungs are <b>highly lobulated</b> (interlobular septa of connective tissue).<br>
        • The <b>Tracheal Bronchus</b> (Bronchus trachealis) is a unique feature of the Ox and Pig — it directly supplies the right cranial lobe from the trachea, proximal to the bifurcation.<br>
        • Pleural cavity contains a small amount of serous fluid for frictionless lung movement.`,
        eliteDesc: `<h3>Thoracic Viscera: Pulmonology</h3>
        <p>The bovine respiratory system is characterized by its high degree of <b>lobulation</b> and the presence of the <b>bronchus trachealis</b>. This extra bronchus arises from the trachea proximal to the carina and supplies the right cranial lobe, completely independently of the main bronchial tree.</p>
        <p>This anatomical feature is clinically significant as it can be a site for localized infections (right cranial lobe pneumonia) or selective inhalation of foreign bodies during forced feeding or drenching.</p>
        <p>The interlobular septa in cattle lungs are thick and visible on gross examination, making lobular pneumonia easy to identify at necropsy. The horse, by contrast, has very thin septa making true lobular pneumonia rare.</p>
        <p>The bovine <b>pleural cavity</b> is divided by the mediastinum. Unlike in dogs, the two pleural cavities are more distinctly separated — right-sided effusion does not always affect the left side.</p>`,
        comparative: [
            { species: "Ox", note: "Tracheal bronchus present. Highly lobulated with thick interlobular septa. Right cranial lobe supplied directly from trachea." },
            { species: "Horse", note: "No tracheal bronchus. Lungs are poorly lobulated (septa thin or absent). More susceptible to diffuse pneumonia." },
            { species: "Pig", note: "Also has a tracheal bronchus, similar to the Ox. Three lobes on left, four on right (plus accessory/cardiac lobe)." },
            { species: "Dog", note: "No tracheal bronchus. Three lobes on left (cranial, middle, caudal), four on right (cranial, middle, caudal, accessory)." }
        ],
        clinical: "<b>Enzootic Pneumonia in Calves:</b> Typically begins in the right cranial lobe, possibly due to the independent tracheal bronchus directing inhaled pathogens. <b>Auscultation Tip:</b> The right cranial lobe must be auscultated cranially and high on the thorax in cattle. <b>Pleuropneumonia:</b> Fibrinous exudate can seal the pleural surfaces — pathognomonic fibrous tags ('jellyfish') seen at necropsy."
    },
    {
        title: "Cardiovascular System: The Bovine Heart",
        desc: `<b>Overview:</b><br>
        • Located in the middle mediastinum, with apex pointing ventrocaudally to the left.<br>
        • Features <b>Ossa Cordis</b> (ossified cartilages at the aortic root) in older cattle — unique among domestic species.<br>
        • Pericardium = fibrous outer layer + serous inner layer (visceral = epicardium).<br>
        • The reticulum lies directly against the diaphragm, which is separated from the pericardium by a thin membrane.`,
        eliteDesc: `<h3>Unique Bovine Cardiac Architecture</h3>
        <p>The bovine heart is remarkable for the development of <b>Ossa Cordis</b> — one or two ossified nodules (formerly cartilaginous) located at the base of the aorta, adjacent to the aortic valve. These are pathognomonic of Bos taurus and are absent in all other domestic species. They are best palpated post-mortem at the aortic root.</p>
        <p>The pericardium is attached ventrally to the sternum via the <b>sternopericardiac ligament</b>. The thin median partition between the pericardium and the diaphragm means that foreign bodies from the reticulum that penetrate the diaphragm have immediate access to the pericardial space.</p>
        <p><b>Cardiac Position:</b> The bovine heart occupies the 3rd to 6th intercostal spaces, with the apex reaching to the left of the midsternal line. Auscultation: Left side (3rd-5th ICS, lower third) for mitral and aortic valves; right side (3rd-4th ICS) for tricuspid.</p>`,
        comparative: [
            { species: "Ox", note: "Ossa Cordis present at aortic root. Heart base at 3rd-6th ICS. Pericardium closely related to diaphragm and reticulum." },
            { species: "Horse", note: "No Ossa Cordis. Aortic valve has three semilunar cusps. Large heart relative to body (up to 10 kg in Thoroughbreds)." },
            { species: "Dog", note: "No Ossa Cordis in normal dogs (cats may have os cordis rarely). Heart is more globular. Rate 60-140 bpm." }
        ],
        clinical: "<b>Traumatic Reticulopericarditis (Hardware Disease):</b> Swallowed metal objects (wire, nails) settle in the reticulum, pierce the reticular wall and diaphragm, and reach the pericardial space. Causes septic pericarditis — 'washing machine' heart sounds on auscultation. Diagnosis: Grunt test, rumenocentesis, radiography. Treatment: Rumenotomy, magnets (prevention). <b>Endocarditis:</b> Bacterial infection of heart valves, often secondary to foot rot or septicemia."
    }
);

// ---- ABDOMEN > SPLANCHNOLOGY ----
atlasData["Abdomen"]["Splanchnology"].push(
    {
        title: "Digestive System: The Ruminant Stomach",
        desc: `<b>Overview:</b><br>
        • Four-compartment stomach: <b>Reticulum, Rumen, Omasum, Abomasum</b> (in topographic order).<br>
        • Rumen is the largest (up to 150L in adult cow) — acts as a fermentation vat.<br>
        • Reticulum has a honeycomb mucosal pattern — also called the 'hardware stomach'.<br>
        • Omasum (many-plies / psalterium) filters particles; Abomasum is the true glandular stomach.`,
        eliteDesc: `<h3>The Complex Gastric Apparatus of Ruminants</h3>
        <p>Ruminants are characterized by a massive composite stomach that dominates the left and ventral abdominal cavity. The first three compartments (<b>proventriculi</b>) are non-glandular and lined with stratified squamous epithelium, while the <b>abomasum</b> is glandular and represents the homolog of the simple stomach.</p>
        <p><b>Reticulum:</b> The most cranial compartment, pressed against the diaphragm (3rd-8th ribs on right, to 6th-7th on left). Its mucosa has a honeycomb (reticular) pattern. The reticuloruminal fold separates it from the rumen but allows passage of digesta.</p>
        <p><b>Rumen:</b> Occupies the entire left side of the abdominal cavity, from diaphragm to pelvis. Divided by muscular pillars (coronary, longitudinal, accessory) into ventral and dorsal sacs. Site of primary fermentation by microflora generating VFAs. Gas accumulation causes bloat.</p>
        <p><b>Omasum:</b> On the right side, spherical with leaf-like folds (laminae omasi) that trap and squeeze digesta. The omasal canal connects to the abomasum via the omasoabomasal orifice.</p>
        <p><b>Abomasum:</b> The 'true' stomach — glandular, secretes HCl and pepsin. Located on the ventral abdominal floor, right of midline. Can undergo displacement (LDA/RDA) in high-producing dairy cows.</p>`,
        comparative: [
            { species: "Ox", note: "Four-compartment stomach. Rumen capacity ~150L. High salivary buffering capacity (150L/day alkaline saliva). Teat-canal reflex suckles milk past proventriculi directly to abomasum in calves." },
            { species: "Horse", note: "Simple single-compartment stomach (monogastric). Small capacity (~15L). Pyloric sphincter is strong — unable to vomit. Cecum and colon are massive (hindgut fermentation)." },
            { species: "Pig", note: "Monogastric with a well-developed diverticulum gastri. Gastric ulcers common near pars oesophagea." },
            { species: "Dog", note: "Simple stomach. Prone to gastric dilatation-volvulus (GDV) — stomach rotates on its axis, trapping gas. Emergency." }
        ],
        clinical: "<b>Left Displacement of Abomasum (LDA):</b> Abomasum slips under rumen to lie between rumen and left abdominal wall — 'ping' on percussion-auscultation. Common in fresh dairy cows (high-grain diet). <b>Right Displacement / Volvulus (RDA/RVA):</b> More severe, abomasum rotates clockwise — emergency surgery. <b>Ruminal Bloat:</b> Frothy (legume) or free-gas (vagal indigestion) bloat — distension of left paralumbar fossa. <b>Vagal Indigestion:</b> Damage to vagal nerve branches disrupts reticulo-omasal flow — 'papple' shape (distended right flank from omasal/reticular impaction)."
    }
);
