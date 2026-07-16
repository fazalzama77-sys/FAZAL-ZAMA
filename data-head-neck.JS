// =========================================================
// HEAD & NECK DATA MODULE
// Contains: Osteology, Myology, Arthrology, Neurology, Angiology
// Status: POPULATED - Bovine Skull Anatomy (Standard + Elite Views)
// =========================================================

if (typeof atlasData === 'undefined') {
    var atlasData = {};
}

atlasData["Head & Neck"] = {
    "Osteology": [
        {
            title: "Introduction: Bovine Cranial Architecture",
            desc: `<b>Quick Revision:</b><br>
            • Skull divided into <b>Neurocranium</b> (braincase) and <b>Splanchnocranium</b> (facial skeleton)<br>
            • ~32 individual bones in adult (fusion obscures boundaries)<br>
            • Key feature: Extensive <b>pneumatization</b> - frontal sinuses invade parietal, interparietal, occipital<br>
            • Double-walled cranial vault acts as shock absorber during head-butting<br>
            • Architectural dominant: <b>Frontal bone</b> (forms entire roof)<br>
            • Clinical relevance: Surgical approaches for dehorning, sinus drainage, nerve blocks`,

            eliteDesc: `<h3>Architectural Dynamics of the Bovine Cranium</h3>
            <p>The osteology of the bovine skull (cranium) represents a pinnacle of artiodactyl design, characterized by a pyramidal architecture designed to support a massive masticatory apparatus while affording protection to the central nervous system and special sensory organs. Unlike the carnivorous skull, which prioritizes temporal muscle mass and jaw shear, the bovine skull is engineered for the ceaseless lateral grinding of herbivorous occlusion and the support of defensive cranial appendages.</p>
            
            <p>The skull is anatomically divisible into two primary functional units: the <b>Neurocranium</b> (braincase), comprising the caudal and dorsal protective plates, and the <b>Splanchnocranium</b> (viscerocranium or facial skeleton), which houses the respiratory and digestive portals. In the adult Bos taurus, these divisions are integrated via complex sutural, synchondrotic, and synostotic articulations, forming a rigid unit of approximately 32 individual bones, though fusion often obscures these boundaries in mature specimens.</p>
            
            <p>From a biomechanical perspective, the bovine skull is distinct due to the extensive pneumatization of its dorsal and caudal elements. The frontal sinuses do not merely occupy the frontal bone but invade the parietal, interparietal, and occipital territories, effectively creating a double-walled cranial vault that acts as a shock absorber during head-butting behaviors. This pneumatization dictates the surgical approaches to the cranium, particularly in dehorning and sinus drainage procedures.</p>
            
            <p><b>Comparative Context:</b> The bovine neurocranium is relatively shortened longitudinally but expanded transversely compared to the equine skull. This expansion is largely illusory, driven by the lateral and caudal ballooning of the frontal sinuses rather than an increase in cranial cavity volume.</p>`,

            comparative: [],
            clinical: "Understanding the double-walled pneumatic structure is imperative for surgical interventions. The complexity of the frontal sinus compartments dictates the approach to treating sinusitis and horn fractures."
        },
        {
            title: "Occipital Bone (Os occipitale)",
            desc: `<b>Exam Focus:</b><br>
            • Forms caudal terminus, surrounds foramen magnum<br>
            • <b>Basilar part:</b> Fuses with basisphenoid at 2-3 years (marks skeletal maturity)<br>
            • <b>Condyles:</b> Deeply curved, obliquely oriented for grazing flexion<br>
            • <b>Paracondylar processes:</b> Short, broad, curve medially (horse = straight/vertical)<br>
            • <b>Hypoglossal canal (CN XII):</b> Often double/triple in ox (rare in horse)<br>
            • <b>Squamous part:</b> Restricted to nuchal surface only (displaced dorsally by frontal bone)`,

            eliteDesc: `<h3>Anatomical Topography</h3>
            <p>The occipital bone forms the caudal terminus of the skull, surrounding the foramen magnum and articulating with the atlas (C1). In the ox, the topography of this bone is profoundly altered by the caudal encroachment of the frontal bones, which displace the occipital squama to the ventral-nuchal aspect of the skull.</p>
            
            <h4>Basilar Part (Pars basilaris)</h4>
            <p>This robust, prismatic bar forms the posterior floor of the cranial cavity. Rostrally, it fuses with the basisphenoid at the <b>spheno-occipital synchondrosis</b>, a cartilaginous joint that ossifies between 2 and 3 years of age, marking skeletal maturity. Ventrally, the tuberculum musculare (muscular tubercles) are prominent, rough, and wide, serving as the insertion for the powerful rectus capitis ventralis muscles which flex the head.</p>
            
            <h4>Lateral Parts (Partes laterales)</h4>
            <p>These segments flank the foramen magnum and bear the <b>occipital condyles</b> (condylus occipitalis). The bovine condyles are geometrically complex—deeply curved and obliquely oriented to facilitate the hinge-like flexion required for grazing. Lateral to the condyles project the <b>paracondylar processes</b> (jugular processes). In the ox, these are short, broad, and curve medially, unlike the straight vertical processes of the horse. The hypoglossal canal, transmitting Cranial Nerve XII, pierces the base of the condyles and is frequently double or triple in the ox, a variation rare in the horse.</p>
            
            <h4>Squamous Part (Squama occipitalis)</h4>
            <p>In the ox, this component is entirely restricted to the nuchal (posterior) surface of the skull. It does not contribute to the dorsal roof. It bears the external occipital protuberance, a rugose thickening for the attachment of the funicular part of the ligamentum nuchae, essential for supporting the massive head.</p>`,

            comparative: [{"species":"Ox","note":"Paired occipital condyles flank the foramen magnum; a strong nuchal crest and paracondylar processes provide neck-muscle attachment."},{"species":"Horse","note":"Paired occipital condyles and prominent paracondylar processes; nuchal attachments are strongly developed."},{"species":"Dog","note":"Paired occipital condyles; the foramen magnum may show breed-related shape variation, but toy-breed features must not be assigned to birds."},{"species":"Fowl (Gallus domesticus)","note":"A single occipital condyle permits extensive head rotation. Avian occipital anatomy must be described independently of canine skull traits."}],

            clinical: "<b>Clinical Insight:</b> In Gallus domesticus, the presence of a single occipital condyle forms a highly mobile articulation with the atlas, permitting an extensive range of head rotation. This enhanced mobility is essential for preening, rapid environmental surveillance, precise visual alignment, and predator detection. In contrast, the bi-condylar arrangement of the mammalian skull generally provides greater stability but a comparatively reduced range of rotational movement."
        },
        {
            title: "Sphenoid Bone (Os sphenoidale)",
            desc: "<b>Sphenoid complex:</b><br>• Presphenoid and basisphenoid form the cranial base and part of the orbit.<br>• In ruminants and pigs, orbital fissure and foramen rotundum unite as the foramen orbitorotundum.<br>• Cattle lack an alar canal and possess a distinct foramen ovale for V3.<br>• Horse and dog retain separate orbital fissure and foramen rotundum; both possess an alar canal.",

            eliteDesc: "<b>SPHENOID COMPLEX</b><br><br>The presphenoid and basisphenoid form much of the cranial base and contribute to the orbit. In ruminants and pigs, the orbital fissure and foramen rotundum unite as the foramen orbitorotundum, transmitting CN III, IV, VI, V1 and V2. In the horse and dog those openings remain separate. Cattle lack an alar canal; horse and dog possess one. The bovine foramen ovale transmits V3, whereas in the horse V3 exits through the oval notch/foramen-lacerum region.",

            comparative: [{"species":"Ox","note":"Foramen orbitorotundum present; alar canal absent; foramen ovale distinct."},{"species":"Horse","note":"Orbital fissure and foramen rotundum remain separate; alar canal present; V3 exits through the oval notch/foramen-lacerum region."},{"species":"Dog","note":"Orbital fissure, foramen rotundum and foramen ovale are separate; alar canal present."},{"species":"Pig","note":"Foramen orbitorotundum is present, so this fusion is not unique to ruminants."}],

            clinical: "<b>Functional Context:</b> The absence of the Alar Canal in the ox means the maxillary artery courses on the surface of the pterygoid muscles rather than through a bony conduit, altering the approach for vascular ligation in this region compared to the horse."
        },
        {
            title: "Ethmoid Bone (Os ethmoidale)",
            desc: `<b>Revision Points:</b><br>
            • Complex cuboidal bone between orbits, separates nasal from cranial cavity<br>
            • <b>Cribriform plate:</b> Horizontal sieve-like plate perforated for olfactory fascicles (CN I)<br>
            • <b>Crista Galli:</b> Short, thick ridge (vs spine-like in pig) - anchor for falx cerebri<br>
            • <b>Perpendicular plate:</b> Forms caudal portion of nasal septum<br>
            • <b>Ethmoidal Labyrinth:</b> 5 endoturbinates, ~18 ectoturbinates<br>
            • <b>First endoturbinate:</b> Forms core of Dorsal Nasal Concha`,

            eliteDesc: "<b>ETHMOID BONE</b><br><br>The ethmoid separates the cranial and nasal cavities and includes the cribriform plate, perpendicular plate and ethmoidal labyrinth. Olfactory nerve filaments pass through numerous cribriform foramina. Ethmoturbinate number and arrangement vary by species and individual; fixed universal counts should not be taught. The crista galli projects into the cranial cavity and must be described from species-specific references.",

            comparative: [{"species":"Ox","note":"Well-developed ethmoidal labyrinth supporting a large olfactory mucosal area."},{"species":"Horse","note":"Extensive ethmoidal labyrinth; species-specific lamellar arrangement."},{"species":"Dog","note":"Highly developed ethmoturbinates, especially in long-headed breeds."},{"species":"Pig","note":"Extensive labyrinth associated with strong olfaction; avoid unsupported fixed lamellar counts."},{"species":"Fowl (Gallus domesticus)","note":"Avian ethmoid and nasal conchae differ fundamentally from mammalian ethmoturbinates and require chicken-specific description."}],

            clinical: "<b>Comparative Note on Fowl:</b> The avian ethmoid is simplified. The olfactory lobes are small, and the turbinates are less convoluted, reflecting the general reliance of birds on vision rather than olfaction (with exceptions like vultures or kiwi)."
        },
        {
            title: "Frontal Bone (Os frontale)",
            desc: `<b>Architectural Dominant:</b><br>
            • Forms <b>entire roof of skull</b> (displaces parietals to nuchal region)<br>
            • <b>Cornual Process:</b> Osseous core of horns, excavated by sinus (infection risk post-dehorning)<br>
            • <b>Supraorbital groove/foramen:</b> Often double in ox; transmits vein/nerve<br>
            • <b>Extensive pneumatization:</b> Frontal sinus invades parietal, interparietal, occipital<br>
            • <b>Temporal line:</b> Pushed laterally by expanded sinus<br>
            • <b>Clinical:</b> Complete bony orbit protects eye during grazing (carnivores have open orbit)`,

            eliteDesc: `<h3>The Architectural Dominant</h3>
            <p>In the bovine species, the frontal bone is the architectural dominant of the cranium. It forms the entire roof of the skull, extending from the nasofrontal suture rostrally to the nuchal crest caudally, effectively displacing the parietal bones to the back of the skull.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Cornual Process (Processus cornualis):</b> In horned breeds, the caudolateral angles of the frontal bone project to form the osseous core of the horns. This process is internally excavated by the <b>Cornual Diverticulum</b> of the frontal sinus. This connection is the pathway for pathogens causing frontal sinusitis following dehorning.</p>
            
            <p><b>Supraorbital Groove & Foramen:</b> A distinct longitudinal groove on the dorsal surface leads to the Supraorbital Foramen (often double in the ox). This transmits the supraorbital vein and nerve (branch of the ophthalmic nerve). The groove marks the lateral limit of the frontal sinus proper in the supraorbital region.</p>
            
            <p><b>Pneumatization:</b> The Frontal Sinus is vast in the ox, separating the internal and external plates of the bone. It is intricate, divided by bony septa, and extends into the cornual process, the nuchal region, and the parietal territories.</p>
            
            <p><b>Temporal Line:</b> A prominent, curved ridge bounding the temporal fossa dorsally. In the ox, this line is pushed laterally by the expanded sinus mass.</p>
            
            <p><b>Zygomatic Process:</b> Joins the zygomatic bone to complete the bony orbit caudally.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Forms entire cranial roof; reaches nuchal crest. Present in horned breeds. Supraorbital foramen present (open groove/foramen, often double). Massive complex sinus with septa extending to horn core. Temporal line pushed laterally." },
                { species: "Horse (Equus caballus)", note: "Restricted to forehead; parietals form the roof. Absent. Supraorbital foramen present. Moderate; confined to frontal bone. Normal position." },
                { species: "Dog (Canis lupus)", note: "Restricted to forehead; parietals form the roof. Absent. Absent (Open orbit; orbital ligament replaces bone). Highly breed-variable; reduced or absent compartments may occur in brachycephalic dogs. Normal position." },
                { species: "Pig (Sus scrofa)", note: "Flat/Concave dorsum; heavy supraorbital rim. Absent. Present (located at base of zygomatic process). Large; communicates directly with dorsal conchal sinus. Normal position." },
                { species: "Fowl (Gallus domesticus)", note: "Forms roof of orbit and braincase; fused with other bones. Absent. Absent. Absent/Spongy bone (pneumatized by air sacs). Part of temporal fossa rim (squamosal)." }
            ],

            clinical: "<b>Clinical relevance:</b> The frontal sinus and cornual diverticulum vary with age, horn status and species. A complete bony orbit occurs in horse, pig and ruminants, while carnivores have an orbital ligament completing the rim. Functional explanations should be presented cautiously rather than as certain causal or behavioral conclusions."
        },
        {
            title: "Parietal & Interparietal Bones",
            desc: `<b>Exam Essentials:</b><br>
            • <b>Parietal:</b> Displaced to lateral/nuchal aspects only (do NOT form skull roof)<br>
            • Fused with interparietal and supraoccipital early in life<br>
            • <b>Interparietal:</b> Distinct in fetus, fuses quickly with parietals/occipital in calf<br>
            • Bears internal occipital protuberance (landmark for tentorium cerebelli)<br>
            • <b>Comparative:</b> In horse/dog, parietals form dorsal roof; in ox, frontal dominates roof`,

            eliteDesc: `<h3>Osteological Displacement</h3>
            <p>The parietal bones in the ox are a remarkable example of osteological displacement. Due to the massive caudal expansion of the frontal bones, the parietals are relegated to the lateral and nuchal aspects of the skull.</p>
            
            <h4>Parietal Bone (Os parietale)</h4>
            <p><b>Location:</b> They form the upper part of the lateral wall of the cranium, situated below the frontal bone and above the occipital bone. They do not form the skull roof (calvaria) as they do in the horse, dog, or human.</p>
            <p><b>Structure:</b> In the adult ox, they are fused with the interparietal and supraoccipital bones. The line of fusion is often indistinct.</p>
            <p><b>Temporal Line:</b> The parietal bone contributes to the temporal line, forming the upper boundary of the temporal fossa.</p>
            
            <h4>Interparietal Bone (Os interparietale)</h4>
            <p>Situated centrally between the parietal bones and the supraoccipital. In the ox, this bone is distinct in the fetus but undergoes rapid fusion.</p>
            <p><b>Ossification:</b> It ossifies from two centers but fuses quickly with the parietals and occipital in the calf.</p>
            <p><b>Internal Occipital Protuberance:</b> The internal surface bears this projection, which is located on the interparietal bone in the ox, serving as a landmark for the tentorium cerebelli.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Parietals: Nuchal/Lateral aspect only; not dorsal. Fuses early with occipital/interparietal. Interparietal: Fuses internally with supraoccipital; rarely distinct in adults." },
                { species: "Horse (Equus caballus)", note: "Parietals: Dorsal; forms cranial roof. Fuses late; distinct sutures visible. Interparietal: Distinct in foals; fuses in adults but remains centrally located." },
                { species: "Dog (Canis lupus)", note: "Parietals: Dorsal; forms cranial roof. Fuses late; distinct sagittal suture. Interparietal: Often fuses with supraoccipital to form large triangular nuchal crest." },
                { species: "Pig (Sus scrofa)", note: "Parietals: Lateral/Nuchal; vertical orientation. Fuses early. Interparietal: Fuses early; indistinguishable." },
                { species: "Fowl (Gallus domesticus)", note: "Parietals: Fused with frontal/occipital. Fuses very early; sutures invisible. Interparietal: Absent or completely fused in embryo; no sutural trace." }
            ],

            clinical: null
        },
        {
            title: "Temporal Bone (Os temporale)",
            desc: `<b>Key Components:</b><br>
            • <b>Squamous part:</b> Mandibular fossa is <b>saddle-shaped</b> (convex-concave) for lateral grinding<br>
            • <b>Petrous part:</b> Hardest bone in body, houses cochlea/vestibular apparatus<br>
            • <b>Tympanic part:</b> Bulla tympanica (laterally compressed, rough, less bulbous than carnivores)<br>
            • <b>Hyoid process:</b> Sheath-like projection enclosing stylohyoid bone<br>
            • <b>Comparative:</b> Fowl lacks TMJ - has quadrate bone instead (kinetic skull)`,

            eliteDesc: `<h3>Composite Structure</h3>
            <p>A complex composite bone forming the lateral wall of the cranial cavity and housing the auditory and vestibular apparatus. It results from the fusion of the squamous, petrous, and tympanic parts.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Squamous Part:</b> Forms the lateral wall of the cranium. It features the <b>mandibular fossa</b> for articulation with the mandible (TMJ). In the ox, this fossa is saddle-shaped (convex-concave) to allow for lateral grinding movements. The zygomatic process projects forward to overlap the temporal process of the zygomatic bone, forming the zygomatic arch.</p>
            
            <p><b>Petrous Part:</b> The hardest bone in the body, housing the cochlea and vestibular apparatus. It projects into the cranial cavity and is not visible externally.</p>
            
            <p><b>Tympanic Part:</b> Forms the Bulla Tympanica (osseous bulla). In the ox, the bulla is laterally compressed, rough, and less bulbous than in carnivores. It bears the external acoustic meatus, which faces laterally.</p>
            
            <p><b>Hyoid Process:</b> The styloid process (vagina processus styloidei) is a sheath-like bony projection that encloses the root of the stylohyoid bone of the hyoid apparatus.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Tympanic bulla compressed laterally; rough surface. Zygomatic process curved; forms wide arch. Small mastoid process; part of nuchal line. Glenoid fossa (TMJ) concave-convex. External acoustic meatus directed laterally." },
                { species: "Horse (Equus caballus)", note: "Tympanic bulla large, bulbous, smooth (shell-like). Zygomatic process short; overlaps zygomatic bone. Small but distinct mastoid process. Convex/Concave; allows lateral grinding. Directed laterally." },
                { species: "Dog (Canis lupus)", note: "Tympanic bulla very large; elongated vertically; flask-shaped. Zygomatic process long; overlaps zygomatic bone. Very long and distinct mastoid process. Convex/Concave; primarily permits hinge-like opening and closing with limited lateral excursion. Directed dorsolaterally." },
                { species: "Pig (Sus scrofa)", note: "Tympanic bulla distinct; fused with paraoccipital. Zygomatic process short; robust mastoid. Distinct. Deep groove; strictly hinge-like (ginglymus). Directed ventrolaterally." },
                { species: "Fowl (Gallus domesticus)", note: "Tympanic bulla absent (analogous structures differ). Part of temporal fossa rim (squamosal). Absent. Articulates via Quadrate bone (not TMJ). Not applicable." }
            ],

            clinical: "<b>Comparative Insight (Fowl):</b> Birds lack a direct Temporomandibular Joint (TMJ). Instead, the temporal region articulates with the Quadrate bone, which in turn articulates with the mandible. This 'Quadrato-articular' joint is key to the kinetic skull of the bird, allowing the upper beak to flex upward when the mandible opens—a mechanism absent in mammals."
        },
        {
            title: "Maxilla (Os maxillare)",
            desc: `<b>Principal Upper Jaw Bone:</b><br>
            • <b>Facial tuberosity:</b> Knob-like elevation above 3rd/4th cheek tooth (bovine equivalent of horse's facial crest)<br>
            • <b>Infraorbital foramen:</b> Single (occasionally double), dorsal to first cheek tooth<br>
            • <b>No upper incisors/canines:</b> Only cheek teeth present (dental pad instead)<br>
            • <b>Maxillary sinus:</b> Extensive, extends into palatine/lacrimal<br>
            • <b>Drainage issue:</b> Nasomaxillary opening is high on medial wall (gravity drainage poor)<br>
            • <b>Palatine process:</b> Forms major portion of hard palate`,

            eliteDesc: `<h3>The Facial Skeleton Anchor</h3>
            <p>The maxilla is the principal bone of the upper jaw, carrying the upper cheek teeth (premolars and molars) and forming the lateral walls of the nasal cavity.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Facial Tuberosity (Tuber faciale):</b> A prominent, knob-like rough elevation on the lateral surface, situated above the 3rd or 4th cheek tooth. It serves as an attachment for the buccinator muscle. It is the bovine equivalent of the facial crest in the horse but is less ridge-like.</p>
            
            <p><b>Infraorbital Foramen:</b> Located dorsal to the first cheek tooth; it acts as the exit point for the infraorbital nerve and artery. In the ox, it is single (occasionally double).</p>
            
            <p><b>Alveolar Process:</b> A thick ridge housing the roots of the upper cheek teeth. The ox has no upper incisors or canines; thus, the maxilla lacks alveoli in the rostral region.</p>
            
            <p><b>Maxillary Sinus:</b> A large diverticulum housed within the maxilla. It extends into the palatine bone and the lacrimal bulla. It communicates with the nasal cavity via the nasomaxillary opening, which is situated high on the medial wall, making gravity drainage of pus difficult.</p>
            
            <p><b>Palatine Process:</b> Forms the major portion of the hard palate, fusing with the counterpart at the median palatine suture.</p>`,

            comparative: [{"species":"Ox","note":"Bears upper cheek teeth and a facial tuberosity; the infraorbital foramen is related to species-specific cheek-tooth landmarks."},{"species":"Horse","note":"Facial crest and infraorbital canal are prominent; long cheek-tooth reserve crowns affect sinus anatomy."},{"species":"Dog","note":"Contains canine and cheek-tooth alveoli; infraorbital landmarks vary with skull conformation."},{"species":"Pig","note":"Robust maxilla supporting complete cheek-tooth dentition."},{"species":"Fowl (Gallus domesticus)","note":"Contributes to the upper beak and palate; chickens are edentulous and have no cheek-tooth landmarks."}],

            clinical: "<b>Clinical Relevance:</b> Infection from the upper cheek teeth (PM4, M1, M2, M3) can break into the maxillary sinus, causing empyema (pus accumulation). Trephination is performed dorsal to the facial tuberosity, avoiding the nasolacrimal duct and the infraorbital nerve."
        },
        {
            title: "Incisive & Nasal Bones",
            desc: `<b>Incisive Bone (Premaxilla):</b><br>
            • Rostral tip of skull, forms muzzle support<br>
            • <b>Edentulous:</b> Flattened, no alveoli (supports dental pad)<br>
            • <b>Nasoincisive notch:</b> Gap where nasal process doesn't reach nasal bone<br>
            • <b>Interincisive fissure:</b> Gap between incisive bones<br>
            <br><b>Nasal Bones:</b><br>
            • Short, <b>bifid</b> (split) at rostral apex<br>
            • Often does not articulate with incisive bone (creates notch)<br>
            • Forms roof of nasal cavity`,

            eliteDesc: `<h3>Incisive Bone (Os incisivum / Premaxilla)</h3>
            <p>Located at the rostral tip of the skull, the incisive bone forms the skeletal support for the muzzle and the upper dental pad.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Body:</b> In the ox, the body is flattened and lacks alveoli because ruminants have no upper incisors. Instead, it supports the dense fibrous dental pad against which the lower incisors grind.</p>
            
            <p><b>Nasal Process:</b> Extends caudally to articulate with the maxilla and nasal bone. In the ox, there is often a nasoincisive notch where the nasal process does not fully articulate with the nasal bone, leaving a gap.</p>
            
            <p><b>Palatine Process:</b> Forms the rostral tip of the hard palate.</p>
            
            <p><b>Interincisive Fissure:</b> A distinct gap between the nasal process of the incisive bone and the maxilla, covered in life by mucosa.</p>
            
            <h3>Nasal Bone (Os nasale)</h3>
            <p>Paired bones forming the roof of the nasal cavity.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Shape:</b> In the ox, the nasal bones are relatively short and bifid (split) at the rostral end (apex), creating a double-point appearance.</p>
            <p><b>Articulation:</b> Articulates caudally with the frontal bone and laterally with the maxilla. Unlike the horse, it often does not articulate with the incisive bone rostrally, contributing to the nasoincisive notch.</p>
            <p><b>Dorsal Surface:</b> Smooth and convex.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Incisive: Absent teeth (dental pad). Body thin, flattened, fragile. Nasal process does not always reach nasal bone (notch present). Nasal: Apex bifid (notched). Short (compared to head length). Floating rostrally (nasoincisive notch)." },
                { species: "Horse (Equus caballus)", note: "Incisive: 3 incisors present. Strong, thick body. Articulates with nasal bone. Nasal: Apex pointed. Very long. Articulates with incisive bone." },
                { species: "Dog (Canis lupus)", note: "Incisive: 3 incisors present. Small, compressed. Articulates with nasal bone. Nasal: Truncated/Notched. Variable (breed dependent). Articulates with incisive bone." },
                { species: "Pig (Sus scrofa)", note: "Incisive: 3 incisors present. Very strong, snout-like. Articulates with nasal bone. Nasal: Long. Very narrow. Firmly united to incisive." },
                { species: "Fowl (Gallus domesticus)", note: "Incisive: Absent (forms beak tip). Fused, sharp tip. Nasal: Thin, flexible. Fused with Frontal (Kinetic hinge - nasofrontal hinge allows prokinesis)." }
            ],

            clinical: "<b>Clinical relevance:</b> The nasoincisive notch and nasal bones are palpable landmarks in large animals. In birds the craniofacial hinge permits upper-beak movement through specialized flexible articulations; it must not be called a “synovial syndesmosis.”"
        },
        {
            title: "Lacrimal & Zygomatic Bones",
            desc: `<b>Lacrimal Bone:</b><br>
            • <b>Lacrimal bulla:</b> Unique thin-walled protuberance inside orbit containing sinus<br>
            • <b>Clinical:</b> Fragile - damage during enucleation causes sinusitis<br>
            • Large facial plate, extensive on face<br>
            • Nasolacrimal canal entrance on orbital surface<br>
            <br><b>Zygomatic Bone (Malar):</b><br>
            • Forms ventral orbital margin, rostral zygomatic arch<br>
            • <b>Complete bony orbit:</b> Frontal process joins frontal bone (unlike dog/pig)<br>
            • Extensive facial surface reaching facial tuberosity`,

            eliteDesc: `<h3>Lacrimal Bone (Os lacrimale)</h3>
            <p>Located at the anterior margin of the orbit, articulating with the frontal, zygomatic, and maxillary bones.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Lacrimal Bulla (Bulla lacrimalis):</b> A unique, thin-walled bony protuberance inside the orbit of the ox. It is fragile and contains the lacrimal sinus, a posterior extension of the maxillary sinus. Damage to this bulla during enucleation can lead to sinus infection.</p>
            <p><b>Facial Plate:</b> Large and flat on the face, extending rostrally.</p>
            <p><b>Orbital Plate:</b> Forms the medial wall of the orbit.</p>
            <p><b>Nasolacrimal Canal:</b> The entrance (fossa) leads to the duct carrying tears to the nose. In the ox, it is situated on the orbital surface.</p>
            
            <h3>Zygomatic Bone (Os zygomaticum / Malar)</h3>
            <p>Forms the ventral margin of the orbit and the rostral part of the zygomatic arch.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Facial Surface:</b> Extensive in the ox, extending rostrally to the facial tuberosity.</p>
            <p><b>Frontal Process:</b> Projects dorsally to articulate with the zygomatic process of the frontal bone. This articulation completes the bony orbit caudally, a key distinction from carnivores where the orbit is open.</p>
            <p><b>Temporal Process:</b> Extends caudally to meet the zygomatic process of the temporal bone, forming the zygomatic arch.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Lacrimal: Bulla present (large, fragile). Facial part large. Lacrimal fossa near orbital rim. Zygomatic: Complete orbit (joins frontal). Bifurcated (frontal/temporal procs). Large/broad." },
                { species: "Horse (Equus caballus)", note: "Lacrimal: Absent bulla. Small facial part. Funnel-like; inside orbit. Zygomatic: Complete orbit. Blade-like. Large." },
                { species: "Dog (Canis lupus)", note: "Lacrimal: Absent bulla. Very small (mostly orbital). On orbital rim. Zygomatic: Incomplete orbit (ligamentous closure). Curved bar. Small." },
                { species: "Pig (Sus scrofa)", note: "Lacrimal: Absent bulla. Small. Two foramina usually. Zygomatic: Incomplete orbit (ligamentous closure). Robust. Massive." },
                { species: "Fowl (Gallus domesticus)", note: "Lacrimal: Absent (different drainage). Large (Prefrontal bone). Absent. Zygomatic: Incomplete orbit (jugal bone). Rod-like (jugal). Very thin/rod-like." }
            ],

            clinical: "<b>Clinical Warning:</b> The lacrimal bulla in the ox is thin-walled and easily damaged during surgical procedures such as enucleation (eye removal). Damage can lead to sinusitis as the bulla connects to the maxillary sinus system."
        },
        {
            title: "Palatine, Pterygoid & Vomer",
            desc: `<b>Palatine Bone:</b><br>
            • Horizontal plate: Forms posterior 1/4 of hard palate<br>
            • Extensively pneumatized (palatine sinus)<br>
            • Greater/lesser palatine foramina (nerves/vessels)<br>
            <br><b>Pterygoid Bone:</b><br>
            • Thin strap-like bone on lateral side of choanae<br>
            • <b>Hamulus:</b> Sharp hook-like process for tensor veli palatini pulley<br>
            <br><b>Vomer:</b><br>
            • Unpaired, forms ventral nasal septum<br>
            • Sulcus septi nasi (groove for cartilage)<br>
            • Free sharp caudal border separating choanae`,

            eliteDesc: `<h3>Palatine Bone (Os palatinum)</h3>
            <p>Forms the caudal portion of the hard palate and the lateral wall of the choanae (posterior nares).</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Horizontal Plate:</b> Forms the posterior 1/4 of the hard palate. In the ox, this plate is extensive and hollowed by the Palatine Sinus, which communicates with the maxillary sinus.</p>
            <p><b>Perpendicular Plate:</b> Forms the lateral wall of the nasal cavity caudal to the maxilla. It helps bound the Pterygopalatine fossa.</p>
            <p><b>Foramina:</b> The Greater and Lesser Palatine foramina are located here, transmitting the palatine nerves and vessels to the hard palate.</p>
            
            <h3>Pterygoid Bone (Os pterygoideum)</h3>
            <p>A thin, strap-like bone lying on the lateral side of the choanae.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Hamulus (Hamulus pterygoideus):</b> A thin, hook-like process at the ventral end. It acts as a pulley for the tendon of the tensor veli palatini muscle. In the ox, the hamulus is sharp and distinct.</p>
            <p><b>Structure:</b> In the ox, it is a distinct, thin plate overlapping the pterygoid process of the sphenoid.</p>
            
            <h3>Vomer (Vomer)</h3>
            <p>An unpaired bone forming the ventral part of the nasal septum.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Sulcus Septi Nasi:</b> A deep groove on the dorsal border that receives the cartilaginous nasal septum.</p>
            <p><b>Posterior Border:</b> Free, sharp, and concave, separating the two choanae (posterior nostrils). In the ox, the vomer is deeply grooved and extends far caudally. It sits on the floor of the nasal cavity but does not fuse with the maxilla along its entire length, leaving a gap.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Palatine: Large, pneumatized. Pterygoid: Large, distinct sharp hook. Late fusion. Vomer: Deeply grooved; free caudal border sharp." },
                { species: "Horse (Equus caballus)", note: "Palatine: Narrow; pneumatized. Pterygoid: Distinct grooved hook. Late fusion. Vomer: Fuses with palatine process." },
                { species: "Dog (Canis lupus)", note: "Palatine: Wide; not pneumatized. Pterygoid: Short, quadrate; blunt. Early fusion. Vomer: High vertical plate." },
                { species: "Pig (Sus scrofa)", note: "Palatine: Extensive. Pterygoid: Broad plate. Late fusion. Vomer: Long and broad." },
                { species: "Fowl (Gallus domesticus)", note: "Palatine: Long thin rods; crucial for cranial kinesis. Pterygoid: Rod-like; articulates with Quadrate. Mobile joint. Vomer: Vestigial or absent; thin vertical plate when present." }
            ],

            clinical: "<b>Avian Adaptation:</b> In fowl, the palatine bones are long thin rods articulating with the pterygoids and are crucial for cranial kinesis (transmitting force to move the upper beak)."
        },
        {
            title: "Mandible & Hyoid Apparatus",
            desc: `<b>Mandible (Lower Jaw):</b><br>
            • Only mobile skull bone<br>
            • <b>Symphysis:</b> Ossifies very late/never fully (allows independent movement of halves)<br>
            • <b>Diastema:</b> Large gap between incisors and cheek teeth<br>
            • <b>Coronoid process:</b> Long, curves caudally (for temporalis)<br>
            • <b>Condyle:</b> Saddle-shaped for TMJ<br>
            • <b>Angle:</b> Expanded, rough for masseter/pterygoid insertion<br>
            <br><b>Hyoid Apparatus:</b><br>
            • Stylohyoid: Largest, flattened, muscular angle present<br>
            • <b>Lingual process:</b> Short, tuberous in ox (vs long spur in horse)<br>
            • Supports tongue and larynx`,

            eliteDesc: "<b>MANDIBLE AND HYOID</b><br><br>The paired mandibular halves meet rostrally at a species-specific symphysis. In the dog the mandibular symphysis normally remains a fibrous/fibrocartilaginous union rather than fusing early, and the coronoid process is large for temporalis attachment. The hyoid apparatus suspends the tongue and larynx and differs among mammals. The domestic fowl has a species-appropriate basihyal/urohyal and branchial apparatus; the extreme hyoid wrapping around the skull is a woodpecker specialization, not normal chicken anatomy.",

            comparative: [{"species":"Ox","note":"Mandibular symphysis ossifies with maturity; broad cheek-tooth region supports grinding."},{"species":"Horse","note":"Mandibular symphysis is fused in the adult; long diastema and large cheek-tooth region."},{"species":"Dog","note":"Mandibular symphysis remains fibrous; coronoid process is large and the TMJ is predominantly hinge-like."},{"species":"Fowl (Gallus domesticus)","note":"Lower jaw articulates through the quadrate; the hyoid supports tongue and swallowing but does not curl around the skull as in woodpeckers."}],

            clinical: "<b>Fowl Note:</b> The avian hyoid apparatus is extremely long, curling around the back of the skull in species like woodpeckers, but less so in the fowl. It includes the entoglossal bone inside the tongue, a unique avian feature."
        },
        {
            title: "Nasal Turbinates (Conchae)",
            desc: `<b>Scroll-like Bones in Nasal Cavity:</b><br>
            • Increase surface area for warming/filtering air<br>
            • <b>Dorsal Nasal Concha:</b> Single scroll (from 1st endoturbinate)<br>
            • <b>Ventral Nasal Concha:</b> <b>Double scroll</b> (dorsal + ventral rolls) - unlike horse (single)<br>
            • <b>Middle Concha:</b> Smaller, between dorsal and ventral<br>
            • Highly vascular mucosa<br>
            • <b>Ox:</b> 5 endoturbinates, ~18 ectoturbinates total`,

            eliteDesc: "<b>NASAL CONCHAE</b><br><br>Dorsal and ventral nasal conchae project from the lateral nasal wall and bear spiral lamellae whose arrangement is species-specific. Ethmoidal conchae occupy the caudal nasal cavity. In the horse, dorsal and ventral conchae contain defined dorsal and ventral scrolls and communicate with paranasal compartments in specific ways; they must not be described elsewhere as simply single-scroll structures.",

            comparative: [{"species":"Ox","note":"Dorsal and ventral conchae are well developed; conchal sinuses and communications are species-specific."},{"species":"Horse","note":"Dorsal and ventral conchae have spiral lamellae/scrolls and defined conchal sinuses."},{"species":"Dog","note":"Complex conchae and ethmoturbinates provide a large olfactory surface."},{"species":"Fowl (Gallus domesticus)","note":"Usually three nasal conchae with avian morphology, not mammalian scroll terminology."}],

            clinical: null
        },
        {
            title: "Frontal & Maxillary Sinuses",
            desc: `<b>Frontal Sinus:</b><br>
            • Most clinically significant sinus in ox<br>
            • Complex system (not simple cavity)<br>
            • <b>Cornual diverticulum:</b> Extends into horn core (opened during dehorning = infection risk)<br>
            • Nuchal and postorbital diverticula<br>
            • Divided by oblique septum into rostral (minor) and caudal (major)<br>
            • Poor drainage (complex meatus communication)<br>
            <br><b>Maxillary Sinus:</b><br>
            • Within maxilla, lacrimal, zygomatic bones<br>
            • Communicates with nasal cavity via high nasomaxillary opening (gravity drainage difficult)<br>
            • Communicates with palatine and lacrimal sinuses`,

            eliteDesc: `<h3>The Paranasal Sinuses</h3>
            <p>The bovine skull is heavily pneumatized. The sinuses are diverticula of the nasal cavity lined with mucous membrane.</p>
            
            <h4>A. The Frontal Sinus (Sinus frontalis)</h4>
            <p>The most clinically significant sinus in the ox. It is not a simple cavity but a complex system of intercommunicating compartments.</p>
            
            <p><b>Boundaries:</b> Extends from the rostral third of the orbit to the nuchal crest, and laterally into the horn core.</p>
            
            <p><b>Diverticula:</b></p>
            <ul>
                <li><b>Cornual Diverticulum:</b> Extends into the process of the horn. <i>Clinical Note: Dehorning in adult cattle opens this sinus, creating a direct portal for infection (frontal sinusitis).</i></li>
                <li><b>Nuchal Diverticulum:</b> Extends caudally into the nuchal region.</li>
                <li><b>Postorbital Diverticulum:</b> Located behind the orbit.</li>
            </ul>
            
            <p><b>Compartmentalization:</b> It is divided into a Rostral Frontal Sinus (minor) and a Caudal Frontal Sinus (major) by an oblique septum. The caudal sinus communicates with the nasal cavity.</p>
            <p><b>Drainage:</b> Drains intricately into the ethmoid meatus. Drainage is poor due to the complex anatomy.</p>
            
            <h4>B. The Maxillary Sinus (Sinus maxillaris)</h4>
            <p>Located within the maxilla, lacrimal, and zygomatic bones.</p>
            <p><b>Boundaries:</b> Anteriorly by the facial tuberosity; posteriorly by the bulla lacrimalis.</p>
            <p><b>Communication:</b> Communicates with the nasal cavity via the Nasomaxillary Opening (high in location, making natural drainage difficult). It also communicates with the palatine and lacrimal sinuses.</p>
            
            <h4>C. Surgical Trephination Points</h4>
            <p><b>Frontal Sinus:</b> To drain the caudal frontal sinus, a trephine hole is placed approximately 2cm from the midline on a line connecting the centers of the orbits. Alternatively, post-dehorning drainage occurs through the horn stump.</p>
            <p><b>Maxillary Sinus:</b> Trephination is performed dorsal to the facial tuberosity, avoiding the nasolacrimal duct and the infraorbital nerve.</p>`,

            comparative: [],
            clinical: "<b>Clinical relevance:</b> Sinus trephination or drainage requires species-specific landmarks, knowledge of compartments, age and horn status, and preferably imaging. Do not publish a fixed distance from the midline as a universal bovine trephination point."
        },
        {
            title: "Pterygopalatine & Temporal Fossae",
            desc: `<b>Pterygopalatine Fossa:</b><br>
            • Deep space ventral to orbit, deep to zygomatic arch<br>
            • <b>Boundaries:</b> Maxillary tuberosity (ant), pterygoid process (post), palatine perpendicular plate (medial)<br>
            • <b>Contains:</b> Maxillary nerve (V2), Maxillary artery, Pterygopalatine ganglion<br>
            • <b>Clinical:</b> Target for <b>Peterson Eye Block</b> (enucleation anesthesia)<br>
            • Entry: Foramen orbitorotundum<br>
            <br><b>Temporal Fossa:</b><br>
            • Depression lateral to neurocranium, posterior to orbit<br>
            • Filled entirely by Temporalis muscle<br>
            • Displaced laterally by frontal sinus expansion in ox`,

            eliteDesc: `<h3>Clinical Zones</h3>
            
            <h4>The Pterygopalatine Fossa (Fossa pterygopalatina)</h4>
            <p>A deep, clinically critical space located ventral to the orbit and deep to the zygomatic arch.</p>
            
            <p><b>Boundaries:</b></p>
            <ul>
                <li><b>Anterior:</b> Maxillary tuberosity</li>
                <li><b>Posterior:</b> Pterygoid process of sphenoid</li>
                <li><b>Medial:</b> Perpendicular plate of palatine bone</li>
            </ul>
            
            <p><b>Contents:</b></p>
            <ol>
                <li><b>Maxillary Nerve (CN V2):</b> Branches into the infraorbital, zygomatic, and pterygopalatine nerves.</li>
                <li><b>Maxillary Artery:</b> The terminal branch of the external carotid artery.</li>
                <li><b>Pterygopalatine Ganglion:</b> Parasympathetic ganglion.</li>
            </ol>
            
            <p><b>Foramina Openings:</b></p>
            <ul>
                <li><b>Foramen Orbitorotundum:</b> Entry of nerves from cranium.</li>
                <li><b>Maxillary Foramen:</b> Entry to infraorbital canal.</li>
                <li><b>Sphenopalatine Foramen:</b> To nasal cavity.</li>
                <li><b>Caudal Palatine Foramen:</b> To hard palate.</li>
            </ul>
            
            <p><b>Clinical Significance:</b> This is the target site for the <b>Peterson Eye Block</b>, a local anesthesia technique used for enucleation (removal of the eye). The needle is directed into this fossa to block the maxillary and ophthalmic nerves.</p>
            
            <h4>The Temporal Fossa (Fossa temporalis)</h4>
            <p>The depression on the lateral side of the neurocranium, posterior to the orbit.</p>
            <p><b>Boundaries:</b> Medially by the parietal/frontal bones; laterally by the zygomatic arch.</p>
            <p><b>Content:</b> Filled entirely by the Temporalis muscle.</p>
            <p><b>Comparative Note:</b> Deep in the ox and dog; shallow in the horse. In the ox, it is displaced laterally by the frontal sinus expansion.</p>`,

            comparative: [],
            clinical: "<b>Clinical relevance:</b> The pterygopalatine fossa contains major nerves and vessels. Retrobulbar and Peterson techniques may desensitize orbital motor and sensory nerves, but carry risks to the globe, optic nerve and vessels and must be performed only by trained veterinarians using current species-specific guidance."
        },
        {
            title: "Cervical Vertebrae (C1-C7) — Bones of the Neck",
            desc: "<b>High-yield points:</b><br>• Most mammals, including ox, horse, dog and pig, have seven cervical vertebrae; rare mammalian exceptions exist.<br>• C1 is the atlas and C2 the axis.<br>• C3-C5 are typical cervical vertebrae; C6 has a characteristic ventral lamina and C7 marks the cervicothoracic transition.<br>• Atlas foramina and vertebral-artery routes vary by species.",
            eliteDesc: "<b>CERVICAL VERTEBRAE</b><br><br>Most mammals, including the principal domestic mammals, have seven cervical vertebrae; rare mammalian exceptions exist. The atlas has dorsal and ventral arches and species-specific alar, lateral and transverse foramina. The axis bears the dens. Vertebral-artery and spinal-nerve routes through the atlas vary by species and should not be generalized. Domestic fowl usually have 14 cervical vertebrae and marked neck mobility, but owl rotation must not be used as the chicken comparison.",
            comparative: [{"species":"Ox","note":"Seven cervical vertebrae; atlas foramina and axis morphology are bovine-specific."},{"species":"Horse","note":"Seven cervical vertebrae with large transverse processes and species-specific atlas vascular routes."},{"species":"Dog","note":"Seven cervical vertebrae; relatively greater neck mobility than large ungulates."},{"species":"Fowl (Gallus domesticus)","note":"Usually 14 cervical vertebrae in the chicken, permitting extensive but not owl-like neck rotation."}],
            clinical: "<b>Atlanto-Axial Subluxation (Toy Dogs):</b> Yorkie / Toy Poodle puppies — congenital absence or fracture of the dens → atlas slips on axis → spinal cord compression → tetraparesis. Surgical fixation needed. <b>Cervical IVDD (Dog):</b> Disc herniation between C2-C7 — neck pain + thoracic-limb lameness. <b>Wobbler Syndrome (Horse, Great Dane, Doberman):</b> Caudal cervical instability with cord compression — ataxia. <b>CSF Tap Sites:</b> Atlanto-occipital (cisterna magna) — needle on dorsal midline between occiput and wings of atlas. <b>Vertebral Artery Damage:</b> Trauma to wings of atlas can rupture the vertebral artery as it passes through the alar foramen.",
            imgCode: "cervical_vertebrae"
        }
    ],

    "Myology": [
        {
            title: "Cutaneous & Facial Muscles (Mimetic / Expression)",
            desc: "<b>High-Yield Points:</b><br>• Thin sheet-like muscles in the skin of the head; INNERVATED BY <b>FACIAL NERVE (CN VII)</b>.<br>• <b>Orbicularis oris</b> — sphincter of mouth.<br>• <b>Orbicularis oculi</b> — closes eyelids ('blink' reflex).<br>• <b>Levator nasolabialis</b> — lifts upper lip & nostril (Flehmen response).<br>• <b>Buccinator</b> — cheek muscle, keeps food between molars.<br>• <b>Caninus, Levator labii superioris, Depressor labii inferioris</b> — lip movers.<br>• <b>Auricular muscles (rostral, dorsal, caudal, ventral)</b> — move pinna; very large in cattle/horse.<br>• <b>Cutaneous faciei</b> — superficial skin muscle of face (insect-twitch).<br><br>Damage to CN VII = facial nerve paralysis: ear droop, ptosis, lip droop, deviated muzzle, no menace response.",
            eliteDesc: "<b>FACIAL MUSCLES</b><br><br>Muscles of facial expression are supplied by the facial nerve. The menace response is not a pure CN VII test: it requires vision through CN II, central processing, cerebellar coordination and facial motor output. Routine dehorning targets cornual sensory nerves and should not be taught as a common cause of facial-nerve injury. Brachycephalic appearance must not be attributed to “weak mimetic muscles” without evidence.",
            comparative: [{"species":"Ox","note":"Facial muscles move the lips, nostrils, eyelids and ears and are supplied by CN VII."},{"species":"Horse","note":"Highly mobile lips and nostrils are important in prehension and airflow."},{"species":"Dog","note":"Facial-muscle arrangement varies with skull conformation, but brachycephaly should not be described as generalized mimetic-muscle weakness."},{"species":"Fowl","note":"Avian facial movement is organized differently around the beak and eyelids."}],
            clinical: "<b>Facial Nerve Paralysis (CN VII):</b> Lop ear, ptosis, lip droop, drooling. Common in cattle after dehorning or otitis media. <b>Test:</b> Menace response, palpebral reflex, ear retraction.",
            imgCode: "facial_muscles"
        },
        {
            title: "Muscles of Mastication (Chewing)",
            desc: "<b>4 Pairs — INNERVATED BY MANDIBULAR DIVISION OF CN V (Trigeminal):</b><br><br>1. <b>Masseter</b> — large, on lateral cheek; closes jaw (most powerful in herbivores).<br>2. <b>Temporalis</b> — fan-shaped, in temporal fossa; closes jaw.<br>3. <b>Medial Pterygoid</b> — deep, medial side of mandible; closes jaw + side-to-side grinding.<br>4. <b>Lateral Pterygoid</b> — protracts and shifts the mandible side-to-side (key for grinding cud).<br><br><b>Digastricus</b> — small; OPENS the jaw.<br><br>In herbivores (ox, horse): masseter + medial pterygoid form a sling around the mandible for the side-to-side <b>grinding</b> motion of cud-chewing — much larger than in carnivores.",
            eliteDesc: "<b>MUSCLES OF MASTICATION</b><br><br>Masseter, temporalis, medial pterygoid and lateral pterygoid are supplied by the mandibular division of the trigeminal nerve. Their relative size and actions vary with species and permit different combinations of elevation, protraction and lateral excursion. Digastricus depresses the mandible, but its bellies, intermediate tendon and innervation vary by species. Canine 2M autoimmune disease is correctly termed masticatory muscle myositis, not masseter myositis.",
            comparative: [
                { species: "Ox/Horse (Herbivores)", note: "<b>Massive masseter + medial pterygoid</b> — visible bulge on cheek. Side-to-side cud-grinding chew." },
                { species: "Dog/Cat (Carnivores)", note: "<b>Massive temporalis</b> for vertical bone-crushing bite. Pterygoids small (no grinding)." },
                { species: "Fowl", note: "Lacks teeth → mastication done by gizzard. Jaw muscles small." }
            ],
            clinical: "<b>Masticatory muscle myositis (dog):</b> An immune-mediated disease of type 2M masticatory fibers that can cause painful trismus acutely and muscle atrophy chronically. <b>Tetanus:</b> May cause generalized rigidity and trismus. <b>Trigeminal neuropathy:</b> Can cause mandibular weakness or dropped jaw.",
            imgCode: "mastication_muscles"
        },
        {
            title: "Muscles of the Tongue, Pharynx, Soft Palate, Hyoid & Larynx",
            desc: "<b>Tongue Muscles (mostly CN XII):</b><br>• <b>Genioglossus</b> — protrudes tongue.<br>• <b>Hyoglossus</b> — retracts & depresses.<br>• <b>Styloglossus</b> — retracts & elevates.<br>• Plus intrinsic muscles for changing shape.<br><br><b>Pharyngeal Muscles (CN IX, X):</b><br>• Constrictors (rostral, middle, caudal) — push food caudally during swallowing.<br>• Stylopharyngeus — elevates pharynx.<br><br><b>Soft Palate Muscles (CN IX, X):</b><br>• Palatinus, Tensor + Levator Veli Palatini — close nasopharynx during swallowing.<br><br><b>Hyoid Muscles:</b> Sternohyoideus, Sternothyroideus, Mylohyoideus, Geniohyoideus — move hyoid + tongue.<br><br><b>Laryngeal Muscles (CN X — Recurrent Laryngeal Nerve):</b><br>• <b>Cricoarytenoideus dorsalis</b> — ABDUCTS vocal folds (only abductor!).<br>• Cricoarytenoideus lateralis, Thyroarytenoideus — adduct.<br><br>Damage to recurrent laryngeal nerve → roaring/hemiplegia laryngis in horse (inspiratory whistle).",
            eliteDesc: "<b>TONGUE, PHARYNX AND SOFT PALATE</b><br><br>Intrinsic and extrinsic tongue muscles are supplied chiefly by CN XII, except palatoglossus. Pharyngeal and most soft-palate muscles receive motor fibers mainly through the vagus/pharyngeal plexus. Tensor veli palatini is the key exception and is supplied by the mandibular division of CN V. Species differences in the larynx and pharynx should be stated explicitly.",
            comparative: [
                { species: "Horse", note: "Long left RLN — classic 'roarer' surgery. Soft palate very long → cannot mouth-breathe (obligate nasal breather)." },
                { species: "Ox", note: "Soft palate shorter; swallowing & cud-chewing rely on synchronised pharyngeal & tongue movements." },
                { species: "Dog", note: "Brachycephalic obstructive airway syndrome — elongated soft palate + everted laryngeal saccules." }
            ],
            clinical: "<b>Choke (Oesophageal Obstruction):</b> Bolus stuck cranial to chest entrance. <b>Roaring (Horse):</b> Inspiratory whistle, treated by laryngoplasty. <b>BOAS (Brachycephalic):</b> Surgical staphylectomy + saccule removal. <b>Hyoid Fracture:</b> May cause dysphagia.",
            imgCode: "head_neck_muscles"
        },
        {
            title: "Neck Muscles & Boundaries of the Jugular Furrow",
            desc: "<b>Superficial Neck Muscles:</b><br>• <b>Brachiocephalicus</b> — long muscle from skull → arm; flexes/extends neck, advances limb.<br>• <b>Sternomandibularis (Sternocephalicus mandibular part)</b> — sternum to mandible; flexes head.<br>• <b>Sternocephalicus (mastoid part)</b> — sternum to mastoid; turns head sideways.<br>• <b>Omotransversarius</b> — scapula to wing of atlas.<br>• <b>Splenius, Rhomboideus, Longissimus capitis</b> — deeper neck muscles.<br><br><b>Jugular Furrow Boundaries:</b><br>• <b>Cranial:</b> caudal border of mandible.<br>• <b>Caudal:</b> manubrium sterni.<br>• <b>Dorsal:</b> brachiocephalicus muscle.<br>• <b>Ventral:</b> sternocephalicus (mandibular part) — sternomandibularis.<br>• <b>Floor:</b> deep cervical fascia / scalene + omohyoid.<br>• <b>Contents:</b> External jugular vein (the practical IV site in cattle/horse).",
            eliteDesc: "<b>JUGULAR FURROW AND DEEP NECK</b><br><br>The external jugular vein is the principal superficial content of the jugular furrow, bounded by brachiocephalicus dorsally and sternocephalicus ventrally with a species-variable muscular floor. The common carotid artery and vagosympathetic trunk lie much deeper in the carotid sheath. The recurrent laryngeal nerve follows the tracheoesophageal region and must not be listed as a routine superficial furrow content.",
            comparative: [
                { species: "Horse", note: "Jugular furrow well-defined. Avoid lower 1/3 — carotid lies just under jugular vein → risk of arterial puncture." },
                { species: "Cattle", note: "Jugular furrow shallow because of heavy brisket; venepuncture in upper 2/3." },
                { species: "Dog", note: "Cervical muscles smaller. Jugular vein still palpable for anaesthesia sample." }
            ],
            clinical: "<b>Jugular Venepuncture:</b> Standard IV in cattle & horse — upper third of furrow. <b>Carotid Hit (Horse):</b> Bright red pulsatile blood — life-threatening if drug injected (PROCAINE → seizures). <b>Horner's Syndrome:</b> Damage to vagosympathetic trunk → ptosis + miosis + enophthalmos + 3rd eyelid prolapse.",
            imgCode: "neck_muscles"
        }
    ],
    "Arthrology": [
        {
            title: "Articulations & Special Ligaments of Head and Neck",
            desc: "<b>Cranial Articulations:</b><br>• <b>Atlanto-occipital joint</b> (Skull-C1): nodding 'YES' joint. Condyles of occipital fit cranial articular fovea of atlas. Site of <b>cisterna magna CSF tap</b>.<br>• <b>Atlanto-axial joint</b> (C1-C2): rotational 'NO' joint. Dens of axis pivots in atlas.<br>• <b>Other intervertebral joints</b> of cervical vertebrae: facet joints + intervertebral discs.<br>• <b>Temporomandibular joint (TMJ)</b>: synovial joint between mandibular condyle + temporal bone; with articular disc; allows hinge + slight gliding/grinding.<br><br><b>Special Ligaments of Head and Neck:</b><br>• <b>Nuchal ligament (Funicular + Lamellar parts)</b> — yellow elastic; supports head, runs from external occipital protuberance → withers.<br>• <b>Apical, Alar, Transverse ligaments of dens</b> — stabilise C1-C2.<br>• <b>Dorsal & Ventral atlanto-axial ligaments</b>.",
            eliteDesc: "<b>HEAD AND NECK ARTICULATIONS</b><br><br>The atlanto-occipital joint permits chiefly flexion and extension; the atlantoaxial joint permits rotation. Ligaments of the dens vary among species, so apical, alar and transverse ligaments must not be presented as identical in all domestic animals. The nuchal ligament supports the head in ungulates. Poll evil is inflammation/infection of bursae at the poll, whereas fistulous withers affects bursae and tissues over the withers.",
            comparative: [
                { species: "Horse", note: "Massive nuchal ligament — supports very heavy head. <b>Poll evil</b> = nuchal bursitis." },
                { species: "Ox", note: "Nuchal ligament well-developed; horns add to load → bursitis ('fistulous withers'). Common reason for euthanasia in old draft cattle." },
                { species: "Dog", note: "Nuchal ligament much smaller. <b>Atlantoaxial subluxation</b> in toy breeds — congenital instability of dens." },
                { species: "Pig", note: "Nuchal ligament rudimentary; head supported by muscle alone." }
            ],
            clinical: "<b>Cisterna Magna CSF Tap:</b> AO space, dorsal midline. <b>Atlantoaxial Subluxation:</b> Congenital in toy dogs — neck pain, ataxia, sudden tetraparesis. <b>Poll Evil / Fistulous Withers:</b> Chronic supraspinous bursitis (Brucella in cattle/horse). <b>TMJ Luxation:</b> Trauma — jaw locked open.",
            imgCode: "head_neck_joints"
        }
    ],
    "Neurology": [
    {
        title: "Introduction: The Cranial Command Center",
        desc: "<b>Cranial nerves:</b> Twelve paired nerves connect the brain with special senses, extraocular and facial muscles, mastication, swallowing, phonation, tongue movement and parasympathetic functions. Fiber classifications and foraminal exits must be given by species. The bovine cornual nerve follows the temporal line and is described here as an ophthalmic-associated cornual branch formed through lacrimal/zygomaticotemporal communications; goats additionally require the infratrochlear cornual branch.",

        eliteDesc: "<b>CRANIAL NERVE ORGANIZATION</b><br><br>The twelve cranial nerves carry special sensory, somatic motor, branchial motor and autonomic fibers. In cattle the cornual nerve follows the temporal line to the horn and is conventionally treated as an ophthalmic-associated branch formed through lacrimal/zygomaticotemporal communications. Goats require blockade of both lacrimal and infratrochlear cornual branches. Classification should acknowledge terminology differences among veterinary texts rather than label the nerve simply as V2.",

        comparative: [
            { species: "Ox (Bos taurus)", note: "Foramen Orbitorotundum present (fusion of orbital fissure + rotundum). Foramen Ovale discrete and separate. High optic decussation (80-90%) for panoramic vision." },
            { species: "Horse (Equus caballus)", note: "Separate Orbital Fissure and Foramen Rotundum. Foramen Lacerum is large, irregular gap containing Oval Notch (for V3) and Jugular portion (for IX, X, XI). Internal carotid artery enters cranium here." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern: separate orbital fissure, foramen rotundum, and ovale. Alar canal present for maxillary artery." },
            { species: "Goat (Capra hircus)", note: "CRITICAL CLINICAL VARIANT: Horn bud innervated by TWO nerves—Cornual nerve (V2) AND Cornual branch of Infratrochlear nerve (V1). The 'Goat Trap' for dehorning anesthesia." }
        ],
        clinical: "<b>Cornual anesthesia:</b> In cattle, block the cornual pathway using bovine landmarks and account for accessory innervation. In goats, both lacrimal and infratrochlear cornual branches must be desensitized. Use calm, professional safety language and current species-specific anesthetic guidance."
    },
    {
        title: "CN I & II: The Special Senses (Olfactory & Optic)",
        desc: `<b>High-Yield Points:</b><br>
        • <b>CN I (Olfactory):</b> Not a single trunk—collection of non-myelinated axons through Cribriform Plate; vulnerable to head trauma/epistaxis<br>
        • <b>Vomeronasal Organ (Jacobson):</b> Detects pheromones; Flehmen response pumps air into incisive ducts<br>
        • <b>CN II (Optic):</b> Extension of diencephalon, ensheathed in meninges; 80-90% decussation in ungulates (panoramic vision)<br>
        • <b>PLR Test:</b> Afferent = CN II, Efferent = CN III; positive PLR doesn't prove vision (cortical blindness possible)<br>
        • <b>Menace Response:</b> Tests cortical vision (CN II in, CN VII out)`,

        eliteDesc: "<b>CN I AND CN II</b><br><br>Olfactory nerve filaments cross the cribriform plate to the olfactory bulb. The optic nerve passes through the optic canal to the optic chiasm. The proportion of decussating optic fibers and total visual field varies by species and measurement method; use approximate, cited values rather than fixed percentages or a literal 360-degree field.",

        comparative: [
            { species: "Ox (Bos taurus)", note: "Macrosmatic (smell-dominant). Optic decussation 80-90%. Panoramic vision. Flehmen response highly developed in bulls." },
            { species: "Horse (Equus caballus)", note: "Similar to ox: high optic decussation (85%), lateral placement of eyes for wide field of view." },
            { species: "Dog (Canis lupus)", note: "Microsmatic relative to ungulates. Optic decussation ~65%. Binocular vision prioritized over panoramic. Retinal tapetum present for night vision." }
        ],
        clinical: "<b>Clinical Pearl:</b> In cattle with suspected blindness, always perform both PLR and Menace Response. If PLR is present but Menace is absent, suspect cortical blindness (polioencephalomalacia, lead toxicity, or cerebral abscess) rather than retinal or optic nerve disease."
    },
    {
        title: "CN III, IV, VI: The Orbital Motor Group",
        desc: "<b>Orbital motor group:</b><br>• CN III supplies dorsal, medial and ventral recti, ventral oblique, levator palpebrae and parasympathetic pupillary fibers.<br>• CN IV supplies dorsal oblique.<br>• CN VI supplies lateral rectus and most of retractor bulbi.<br><br>In cattle these pass through the foramen orbitorotundum; in horse and dog they pass through the separate orbital fissure.",

        eliteDesc: "<b>ORBITAL MOTOR NERVES</b><br><br>CN III supplies most extraocular muscles and parasympathetic fibers to the pupil; CN IV supplies dorsal oblique; CN VI supplies lateral rectus and most of retractor bulbi. In cattle these nerves pass through the foramen orbitorotundum. In horse and dog they use the separate orbital fissure; the maxillary nerve uses the separate foramen rotundum. Polioencephalomalacia and lead poisoning should not be presented as causes of an isolated trochlear neuropathy.",

        comparative: [{"species":"Ox","note":"CN III, IV, VI and V1 pass through the foramen orbitorotundum with V2."},{"species":"Horse","note":"Orbital fissure and foramen rotundum are separate."},{"species":"Dog","note":"Orbital fissure and foramen rotundum are separate; clinical deficits depend on lesion location."}],
        clinical: "<b>Diagnostic Localization:</b> A ventrolateral strabismus with ptosis and mydriasis localizes the lesion to CN III (midbrain or orbital fissure). Medial strabismus alone indicates CN VI pathology (often from guttural pouch disease in horses or skull fractures in cattle)."
    },
    {
        title: "CN V: The Trigeminal Nerve (The Giant)",
        desc: "<b>Trigeminal nerve:</b> V1 is sensory to the cornea, orbit and dorsomedial face; V2 supplies the maxillary teeth, upper lip and adjacent face; V3 supplies mandibular sensation and motor fibers to masticatory muscles. In cattle, qualified lacrimal/zygomaticotemporal communications form the cornual pathway; avoid labeling it simply as V2.",

        eliteDesc: "<b>TRIGEMINAL NERVE</b><br><br>V1 is sensory to the orbit, cornea and dorsomedial facial structures; V2 supplies the maxillary teeth, upper lip and related facial regions; V3 supplies mandibular sensation and branchial motor fibers to masticatory muscles. The supraorbital foramen transmits the supraorbital nerve with accompanying vessels. In adult cattle the rostral epidural rete is supplied chiefly by maxillary arterial rete branches; vertebrobasilar supply should be described separately. Cornual innervation must follow the qualified ophthalmic-associated description used in the introductory entry.",

        comparative: [
            { species: "Ox (Bos taurus)", note: "Foramen Ovale is discrete, separate opening in basisphenoid wing. Cornual nerve from V2 supplies horn exclusively (in cattle). Rete Mirabile present." },
            { species: "Horse (Equus caballus)", note: "V3 exits via 'Oval Notch' in Foramen Lacerum, not a discrete foramen. No Rete Mirabile—internal carotid artery persists." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern with distinct Foramen Ovale. Alar canal transmits maxillary artery." },
            { species: "Goat (Capra hircus)", note: "CRITICAL: Dual innervation of horn—Cornual nerve (V2) AND Infratrochlear cornual branch (V1). Requires two-site blockade." }
        ],
        clinical: "<b>The 'Dropped Jaw' Test:</b> Bilateral mandibular nerve paralysis causes the jaw to hang open with inability to close the mouth (motor deficit). In unilateral lesions, the jaw deviates toward the affected side when the mouth is opened due to unopposed contralateral pterygoid contraction."
    },
    {
        title: "CN VII: The Facial Nerve (The Mask)",
        desc: "<b>Facial nerve:</b> A mixed cranial nerve with SVE motor fibers to muscles of facial expression, parasympathetic fibers to selected glands, taste fibers and limited somatic sensation. It exits the stylomastoid foramen and divides into species-specific facial branches.",

        eliteDesc: "<b>FACIAL NERVE</b><br><br>Facial motor fibers to muscles derived from the second pharyngeal arch are special visceral efferent (SVE), not GSE. Peripheral lesions cause ipsilateral weakness of facial expression and blinking. Reduced lacrimation occurs only when the lesion is proximal enough to affect parasympathetic pathways; distal facial paralysis more commonly causes exposure keratitis from poor blinking.",

        comparative: [
            { species: "Ox (Bos taurus)", note: "Rich anastomotic plexus between buccal branches over masseter. Stylomastoid foramen distinct. Facial canal courses through petrous temporal bone." },
            { species: "Horse (Equus caballus)", note: "Buccal branches widely separated (dorsal and ventral do not anastomose as richly as in ox). Facial nerve exits stylomastoid foramen." },
            { species: "Dog (Canis lupus)", note: "Five major branches: Auriculopalpebral, Dorsal Buccal, Ventral Buccal, Marginal Mandibular, Cervical. More distinct separation than ruminants." }
        ],
        clinical: "<b>Auriculopalpebral Block:</b> Inject subcutaneously over zygomatic arch where nerve crosses. Results in akinesia (paralysis) of eyelids (ptosis) but NOT anesthesia—corneal sensation remains intact (CN V1). Use ONLY for examination/procedures where pain isn't expected; for painful procedures, use additional topical anesthesia or retrobulbar block."
    },
    {
        title: "CN IX, X, XI: The Vagal Group",
        desc: `<b>The Swallowing & Visceral Trinity:</b><br>
        • <b>Common Exit:</b> Jugular Foramen (ox) or Foramen Lacerum (horse)<br>
        • <b>CN IX (Glossopharyngeal):</b> Motor to Stylopharyngeus; Sensory to caudal 1/3 tongue (taste); Visceral to carotid body/sinus; Parasympathetic to parotid gland<br>
        • <b>CN X (Vagus):</b> The Wanderer—descends in Carotid Sheath; Cranial Laryngeal (sensory larynx, motor Cricothyroid); <b>Recurrent Laryngeal</b> (loops around aorta/subclavian, motor to all other laryngeal muscles including CAD—the only abductor)<br>
        • <b>CN XI (Accessory):</b> Motor to Trapezius, Sternocephalicus, Omotransversarius; unique spinal origin<br>
        • <b>Ruminant Specialization:</b> Vagus controls rumen/reticulum/omasum motility; damage = Vagal Indigestion (Hoflund Syndrome)`,

        eliteDesc: "<b>GLOSSOPHARYNGEAL, VAGUS AND ACCESSORY NERVES</b><br><br>CN IX and X supply pharyngeal sensation and motor functions important in swallowing; CN X also carries extensive parasympathetic fibers to thoracic and abdominal viscera. CN XI supplies major neck muscles. Vagal indigestion is a syndrome of impaired forestomach motility or outflow with multiple possible causes, not simply unilateral or bilateral vagal transection. The so-called cranial root of XI is commonly treated as part of the vagal system in modern descriptions.",

        comparative: [
            { species: "Ox (Bos taurus)", note: "Jugular Foramen distinct and separate from Foramen Ovale. Recurrent laryngeal loops around aortic arch (left) and subclavian (right). Extensive ruminant vagal specialization for forestomach control." },
            { species: "Horse (Equus caballus)", note: "IX, X, XI exit via caudal aspect of Foramen Lacerum (not distinct Jugular Foramen). Left Recurrent Laryngeal Neuropathy ('Roaring') is common in large horses." },
            { species: "Dog (Canis lupus)", note: "Standard mammalian pattern. Recurrent laryngeal follows same looping pattern. Less pronounced vagal gastric control compared to ruminants." }
        ],
        clinical: "<b>Vagal Indigestion (Hoflund Syndrome):</b> Unilateral or bilateral damage to the vagal trunks (often from penetrating reticular foreign bodies or surgical complications) results in complete rumen atony, failure of eructation (bloat), and characteristic 'pipestream' feces. Requires rumenotomy or permanent fistulation in severe cases."
    },
    {
        title: "CN XII: The Hypoglossal Nerve",
        desc: `<b>The Tongue Master:</b><br>
        • Motor only (GSE); Origin: Medulla; Exit: <b>Hypoglossal Canal</b> (often double/triple in ox)<br>
        • Target: All intrinsic and extrinsic tongue muscles (Styloglossus, Hyoglossus, Genioglossus)<br>
        • Function: Prehension (wrapping tongue around grass), deglutition (swallowing), lapping<br>
        • <b>Clinical:</b> Paralysis leads to tongue atrophy, 'lolling' (hanging out), inability to prehend food<br>
        • <b>Listeria Connection:</b> CN XII deficits (tongue paralysis) + CN V (dropped jaw) + CN VII (facial droop) = classic Listeriosis presentation`,

        eliteDesc: `<h3>Cranial Nerve XII: The Hypoglossal Nerve</h3>
        <p>The final cranial nerve is purely motor, governing the complex muscular hydrostat that is the tongue—essential for prehension, manipulation of food, and deglutition.</p>

        <h4>Anatomical Topography</h4>
        <p><b>Origin:</b> Medulla oblongata (hypoglossal nucleus).<br>
        <b>Exit:</b> Hypoglossal Canal—frequently <b>double or triple</b> in the ox (a variation rare in the horse).<br>
        <b>Target Muscles:</b></p>
        <ul>
            <li><b>Extrinsic:</b> Styloglossus (retraction/elevation), Hyoglossus (depression), Genioglossus (protrusion).</li>
            <li><b>Intrinsic:</b> Longitudinal, transverse, and vertical muscles that shape the tongue for grasping.</li>
        </ul>

        <h4>Functional Significance</h4>
        <p>In cattle, the tongue performs the critical <b>prehension</b> function—wrapping around grass stems and tearing them against the dental pad. This requires coordinated contraction of all hypoglossal-innervated muscles. During swallowing, the tongue acts as a piston to propel the bolus into the pharynx.</p>

        <h4>Clinical Manifestations</h4>
        <p><b>Unilateral Paralysis:</b> Tongue deviates toward the affected side when protruded (due to unopposed contralateral genioglossus action).</p>
        <p><b>Bilateral Paralysis:</b> Tongue hangs out of mouth ('lolling'), becomes flaccid, shows rapid atrophy, and accumulates food (sialosis). Animal cannot prehend or swallow effectively, leading to starvation and aspiration pneumonia.</p>

        <h4>Neurological Integration</h4>
        <p>Hypoglossal function is often tested alongside other cranial nerves in neurological exams. The combination of:</p>
        <ul>
            <li>CN XII deficit (tongue paralysis)</li>
            <li>CN V deficit (dropped jaw)</li>
            <li>CN VII deficit (facial paralysis)</li>
        </ul>
        <p>...strongly suggests <b>Listeria monocytogenes</b> infection (circling disease), where bacteria ascend sensory branches of CN V and cause microabscesses in the brainstem affecting multiple cranial nerve nuclei.</p>`,

        comparative: [
            { species: "Ox (Bos taurus)", note: "Hypoglossal canal frequently double or triple. Tongue used for grasping grass (prehension). Heavy reliance on tongue for feeding." },
            { species: "Horse (Equus caballus)", note: "Single hypoglossal canal typically. Horse uses lips for prehension more than tongue; tongue used less for grasping, more for manipulation." },
            { species: "Dog (Canis lupus)", note: "Single hypoglossal canal. Tongue essential for lapping water and manipulation of food within mouth." }
        ],
        clinical: "<b>Clinical relevance:</b> Hypoglossal injury causes ipsilateral tongue weakness and, with chronic denervation, atrophy. Listerial brainstem disease can involve CN V-XII in variable asymmetric combinations; no fixed CN XII-V-VII triad is diagnostic."
    },
    {
        title: "Foramina & Exit Strategies: Comparative",
        desc: "<b>Comparative exits:</b><br>• Ox and pig: foramen orbitorotundum combines orbital fissure and foramen rotundum.<br>• Horse and dog: orbital fissure and foramen rotundum remain separate.<br>• Ox: foramen ovale carries V3 and no alar canal is present.<br>• Horse: V3 uses the oval-notch/foramen-lacerum region and the alar canal is present.<br>• Dog: separate foramen ovale and alar canal.",

        eliteDesc: "<b>MAJOR CRANIAL EXITS</b><br><br>Ruminants and pigs possess a foramen orbitorotundum formed by fusion of the orbital fissure and foramen rotundum. Horse and dog retain separate openings. Cattle lack an alar canal; horse and dog possess one. The bovine mandibular nerve uses the foramen ovale, while the equine nerve exits through the oval notch/foramen-lacerum region. CN IX-XI use the jugular foramen or species-equivalent caudal lacerum region, and CN XII uses the hypoglossal canal.",

        comparative: [{"species":"Ox","note":"Foramen orbitorotundum; distinct foramen ovale; no alar canal."},{"species":"Horse","note":"Separate orbital fissure and foramen rotundum; alar canal present; V3 exits at the oval notch/foramen-lacerum region."},{"species":"Dog","note":"Separate orbital fissure, rotundum and ovale; alar canal present."},{"species":"Pig","note":"Foramen orbitorotundum present."}],
        clinical: "<b>Critical Localization:</b> Complete ophthalmoplegia (paralysis of all eye muscles) with sensory loss to the cornea and upper face in cattle localizes to the Foramen Orbitorotundum region. In horses, such diffuse deficits would suggest a cavernous sinus syndrome or multiple lesions rather than a single foramen issue."
    },
    {
        title: "Clinical Applications: Regional Anesthesia",
        desc: "<b>Regional anesthesia of the bovine head</b><br><br>Cornual, auriculopalpebral, infraorbital, mental, mandibular, maxillary and retrobulbar techniques may be indicated for selected procedures. The exact block, drug, dose, needle and approach must be chosen for the species and individual animal by a trained veterinarian. Horses do not have a cornual nerve block.",

        eliteDesc: "<b>SAFE HEAD-REGION ANESTHESIA</b><br><br>For bovine dehorning, desensitize the cornual nerve and account for accessory innervation; goats require both lacrimal and infratrochlear cornual branches. Auriculopalpebral block supplies motor akinesia but not corneal analgesia. Dental and ocular blocks require accurate species-specific foraminal anatomy. Peterson and retrobulbar techniques carry risks to the globe, optic nerve and major vessels. Do not publish universal volumes, needle sizes, trajectories or toxicity thresholds; calculate dosing for the animal and agent.",

        comparative: [{"species":"Cattle","note":"Cornual and ocular blocks require bovine-specific anatomy and calculated dosing."},{"species":"Goat","note":"Both lacrimal and infratrochlear cornual branches must be addressed for horn procedures."},{"species":"Horse","note":"Equine dental and ocular blocks use equine-specific landmarks; there is no cornual block."},{"species":"Dog","note":"Small-animal blocks require weight-based dosing and appropriate imaging or landmark guidance."}],
        clinical: "<b>Safety Protocol:</b> When performing Peterson block, ALWAYS aspirate before injecting. If blood appears in the hub, withdraw slightly and re-aspirate. Intravenous injection of local anesthetic into the maxillary artery can cause immediate seizures, collapse, and death. Never exceed toxic dose calculations (usually 2-4mg/kg lidocaine maximum)."
    },
    {
        title: "Clinical Neurology: Pathology",
        desc: "<b>Major syndromes:</b><br>• Listeriosis: asymmetric brainstem disease with variable CN V-XII deficits, circling, head tilt and dysphagia.<br>• Facial paralysis: poor blink, drooping lip/ear and exposure keratitis.<br>• Horner syndrome: sympathetic denervation with species-variable ocular and vascular signs.<br>• Trigeminal disease: sensory loss or masticatory weakness depending on division.<br><br>No fixed cranial-nerve triad is diagnostic by itself.",

        eliteDesc: "<b>CLINICAL NEUROLOGY</b><br><br>Listeriosis produces asymmetric brainstem disease with variable deficits of CN V-XII, head tilt, circling and dysphagia; no fixed cranial-nerve triad is diagnostic. Horner syndrome reflects interruption of sympathetic supply and its signs vary by species; a “dry nose from loss of sweating” is not a universal bovine sign. Traumatic reticuloperitonitis should not be listed as a routine cause of Horner syndrome. Diagnosis requires localization plus appropriate laboratory and imaging tests.",

        comparative: [{"species":"Ox","note":"Listeriosis may cause variable asymmetric brainstem deficits; Horner signs must be interpreted with bovine autonomic anatomy."},{"species":"Horse","note":"Recurrent laryngeal neuropathy and facial trauma are important species-specific disorders."},{"species":"Dog","note":"Vestibular, facial and trigeminal disorders require lesion localization and diagnostic testing."}],
        clinical: "<b>Localization Rule:</b> Multiple cranial nerve deficits (especially asymmetric) localizing to the brainstem suggest Listeriosis or space-occupying lesions (tumors, abscesses). Peripheral single nerve deficits suggest trauma or localized inflammation (e.g., otitis media affecting CN VII specifically)."
    }
],
    "Angiology": [
        {
            title: "Arteries of the Head & Neck",
            desc: "<b>Bovine head arteries:</b><br>• The common carotid supplies the head chiefly through the external carotid system in the adult.<br>• The extracranial internal carotid regresses after birth.<br>• External-carotid branches include lingual, facial, superficial temporal and maxillary arteries.<br>• The maxillary artery supplies the rostral epidural rete but does not pass through an alar canal in cattle.<br>• Cornual vessels require deliberate hemostasis during horn surgery.",
            eliteDesc: "<b>ARTERIES OF THE BOVINE HEAD AND NECK</b><br><br>The common carotid divides chiefly into external carotid branches in the adult. The extracranial internal carotid regresses after birth in cattle, and the brain receives major arterial supply through the maxillary-derived rostral epidural rete with vertebrobasilar contribution caudally. The maxillary artery does not traverse an alar canal in cattle because the alar canal is absent. Cornual vessels can bleed substantially during horn surgery, but hemorrhage should be described and controlled without claiming that every case is fatal unless ligated.",
            comparative: [
                { species: "Horse", note: "Internal carotid passes through guttural pouch — site of fatal mycotic erosion ('guttural pouch mycosis' → epistaxis). Facial artery palpable on mandible." },
                { species: "Ox", note: "Internal carotid regresses; brain supplied via maxillary + rete. <b>Cornual artery</b> + superficial temporal artery vital in dehorning." },
                { species: "Dog", note: "Common carotid pulse and lingual artery (sublingual) used for pulse during anaesthesia." }
            ],
            clinical: "<b>DEHORNING (Cattle):</b> Cornual nerve block + ligation/cautery of <b>cornual artery</b> (branch of superficial temporal). Failure → severe hemorrhage. <b>Guttural Pouch Mycosis (Horse):</b> Aspergillus erodes internal carotid → fatal epistaxis. <b>Carotid puncture during jugular venepuncture (Horse):</b> bright red pulsatile blood — emergency.",
            imgCode: "head_arteries"
        },
        {
            title: "Veins & Lymph Nodes of the Head & Neck",
            desc: "<b>Major Veins:</b><br>• <b>External Jugular Vein</b> — chief drainage of head; in jugular furrow; <b>standard IV site in cattle/horse</b>.<br>  Formed by union of <b>linguofacial + maxillary veins</b> at the angle of mandible.<br>• <b>Linguofacial vein</b> — drains tongue + face.<br>• <b>Maxillary vein</b> — drains deep face, jaws.<br>• Internal jugular vein — small or absent in horse; well-developed in dog.<br>• <b>Vertebral vein</b> — drains brain & cervical spine.<br><br><b>Lymph Nodes (Routine in Clinical Exam):</b><br>• <b>Parotid LN</b> — caudal to mandible.<br>• <b>Mandibular LN</b> — at angle of mandible.<br>• <b>Lateral & Medial Retropharyngeal LN</b> — deep, behind pharynx.<br>• <b>Superficial Cervical (Prescapular) LN</b> — base of neck, on supraspinatus.<br>• <b>Deep Cervical LN</b> — chains along carotid (cranial, middle, caudal).",
            eliteDesc: "<b>VEINS AND LYMPH NODES</b><br><br>The external jugular is formed by major tributaries including linguofacial and maxillary veins and drains through species-specific venous convergence into the brachiocephalic/cranial-caval system. Mandibular, parotid and superficial cervical nodes may be examined externally; medial retropharyngeal nodes are deep and are not routinely externally palpable. Thoracic-duct and right-lymphatic drainage patterns vary among species and should not be forced into a fixed human-style venous-angle scheme.",
            comparative: [
                { species: "Horse", note: "External jugular dominant; internal jugular tiny. Lower jugular furrow has carotid lying just deep — risk during venepuncture." },
                { species: "Cattle", note: "Routine palpation: parotid + mandibular + retropharyngeal + prescapular LN. Bovine TB: caseous granulomas in retropharyngeal LN." },
                { species: "Dog", note: "Mandibular LN palpable in normal dogs. Generalized lymphadenopathy = lymphoma." }
            ],
            clinical: "<b>Tuberculosis Inspection:</b> Mandatory examination of mandibular, retropharyngeal, mediastinal, mesenteric LN at meat inspection. <b>Lymphadenopathy in dog:</b> Mandibular + prescapular + popliteal LN palpation = lymphoma screen.",
            imgCode: "head_veins_lymph"
        }
    ],
    "Splanchnology": []
};

// Verified regional additions (2026-07): complete syllabus gaps without replacing existing lessons.
(function applyVerifiedHeadNeckAudit() {
    var region = atlasData["Head & Neck"];
    function entry(section, title) {
        return (region[section] || []).find(function (item) { return item.title === title; });
    }
























    if (!entry("Neurology", "CN VIII: Vestibulocochlear Nerve")) {
        var pathologyIndex = region.Neurology.findIndex(function (item) { return item.title === "Clinical Neurology: Pathology"; });
        region.Neurology.splice(pathologyIndex < 0 ? region.Neurology.length : pathologyIndex, 0, {
            title: "CN VIII: Vestibulocochlear Nerve",
            desc: "<b>CN VIII:</b> A special sensory nerve with cochlear fibers for hearing and vestibular fibers for head position and balance. It enters the brainstem at the cerebellopontine region and is closely related to the facial nerve and inner ear. Peripheral vestibular disease causes head tilt, asymmetric ataxia and nystagmus without paresis; central disease may add proprioceptive deficits or other cranial-nerve signs.",
            eliteDesc: "<b>VESTIBULOCOCHLEAR NERVE</b><br><br>Receptors in the cochlea, semicircular ducts, utricle and saccule send impulses through cochlear and vestibular ganglia to CN VIII. The nerve traverses the internal acoustic meatus with CN VII. Otitis media/interna can affect vestibular function and the adjacent facial nerve or sympathetic fibers. Differentiate peripheral from central vestibular disease by mentation, postural reactions, nystagmus characteristics and associated deficits.",
            comparative: [
                { species: "Ox", note: "Otitis and listerial brainstem disease are important differentials for head tilt; localization determines whether CN VIII itself or central pathways are involved." },
                { species: "Horse", note: "Peripheral vestibular disease may follow temporohyoid or middle/inner-ear disease." },
                { species: "Dog", note: "Idiopathic peripheral vestibular syndrome, otitis and central disease are common differential categories." }
            ],
            clinical: "<b>Examination:</b> Assess hearing where practical, spontaneous/positional nystagmus, head tilt, gait, postural reactions and other cranial nerves.",
            imgCode: "vestibulocochlear_nerve"
        });
    }



    if (!entry("Angiology", "Carotid Sheath and Major Branch Relations")) {
        region.Angiology.splice(1, 0, {
            title: "Carotid Sheath and Major Branch Relations",
            desc: "<b>Carotid sheath:</b> Deep cervical fascia encloses the common carotid artery, vagosympathetic trunk and related lymphatic/neural structures; the internal jugular vein is small and variably associated in large domestic animals. The recurrent laryngeal nerve runs in the tracheoesophageal region rather than inside the superficial jugular furrow.",
            eliteDesc: "<b>DEEP NECK NEUROVASCULAR BUNDLE</b><br><br>The common carotid and vagosympathetic trunk ascend deep to the jugular furrow within a fascial compartment beside the trachea and esophagus. The sympathetic trunk separates from the vagus near the cranial cervical ganglion. The cervical trunk, recurrent laryngeal nerve and deep lymphatics have distinct relations. This topography explains why a poorly placed deep jugular injection can injure an artery or nerve even though these structures are not normal superficial furrow contents.",
            comparative: [
                { species: "Ox", note: "Common carotid and vagosympathetic trunk are deep; the external jugular remains superficial in the furrow." },
                { species: "Horse", note: "Carotid-jugular relationships change from cranial to caudal neck and matter during venipuncture." },
                { species: "Dog", note: "Internal and external jugular pathways and sheath relations differ from large ungulates." }
            ],
            clinical: "<b>Application:</b> Jugular access and neck surgery require awareness of depth, side and level; use species-specific landmarks.",
            imgCode: "carotid_sheath"
        });
    }
})();

// Phrase-level errata: preserve the full original lesson and correct only the
// inaccurate or overgeneralized wording.
(function applyHeadNeckPhraseErrata() {
    var region = atlasData["Head & Neck"];
    var rules = [
        [/~32 individual bones in adult \(fusion obscures boundaries\)/g, "multiple component bones whose visible boundaries change as sutures fuse with age"],
        [/acts as shock absorber during head-butting/g, "reduces bone mass and may distribute loads, but is not proven to be a dedicated head-butting shock absorber"],
        [/a double-walled cranial vault that acts as a shock absorber during head-butting behaviors/g, "a double-walled cranial vault that reduces mass and may distribute loads; a dedicated head-butting shock-absorber function should not be stated as proven"],
        [/ossifies between 2 and 3 years of age, marking skeletal maturity/g, "ossifies during maturation at a variable age and is only one indicator of skeletal maturity"],
        [/Horizontal sieve-like plate/g, "Sieve-like cribriform plate"],
        [/5 endoturbinates, ~18 ectoturbinates/g, "a species-variable ethmoturbinate arrangement; fixed universal counts should not be taught"],
        [/5 endoturbinates, ~18 ectoturbinates total/g, "species-variable ethmoturbinates rather than one universal count"],
        [/transmits vein\/nerve/g, "in cattle principally transmits a supraorbital vein; it is not identical to the equine neurovascular foramen"],
        [/transmits the supraorbital vein and nerve \(branch of the ophthalmic nerve\)/g, "principally transmits a supraorbital vein in cattle; the equine foramen carries the supraorbital neurovascular bundle"],
        [/Symphysis:<\/b> Ossifies very late\/never fully \(allows independent movement of halves\)/g, "Symphysis:</b> Remains a fibrous union in cattle"],
        [/Mandibular symphysis ossifies with maturity/g, "Mandibular symphysis remains fibrous in the adult"],
        [/Incisive: Absent \(forms beak tip\)\. Fused, sharp tip/g, "Premaxilla/incisive homologue is large and forms much of the upper beak"],
        [/Nasal: Thin, flexible\. Fused with Frontal \(Kinetic hinge - nasofrontal hinge allows prokinesis\)/g, "Nasal and frontal elements meet in the flexible craniofacial region involved in beak movement"],
        [/Lacrimal: Absent \(different drainage\)\. Large \(Prefrontal bone\)\. Absent\./g, "An avian lacrimal element is present and participates in the orbital framework; drainage anatomy differs from mammals."],
        [/unlike horse \(single\)/g, "with species-specific scrolls; the horse also has defined dorsal and ventral conchal scrolls"],
        [/2cm from the midline/g, "at a patient-specific site selected from age, horn status, imaging and current bovine landmarks"],
        [/no menace response/g, "loss of the facial motor component of the menace response; the pathway also requires CN II, forebrain and cerebellum"],
        [/Common in cattle after dehorning or otitis media/g, "May occur with otitis, trauma or other lesions; routine dehorning is not a standard cause of facial-nerve paralysis"],
        [/Soft Palate Muscles \(CN IX, X\):/g, "Soft Palate Muscles (mainly vagal/pharyngeal plexus; tensor veli palatini is supplied by V3):"],
        [/Laryngeal Muscles \(CN X — Recurrent Laryngeal Nerve\):/g, "Laryngeal muscles (CN X: recurrent laryngeal supplies all intrinsic muscles except cricothyroideus, supplied by the external cranial-laryngeal branch):"],
        [/horns add to load → bursitis \('fistulous withers'\)/g, "strong nuchal support; poll bursitis and fistulous withers are anatomically distinct conditions"],
        [/Cornual nerve \(V2\) AND Cornual branch of Infratrochlear nerve \(V1\)/g, "lacrimal and infratrochlear cornual branches in the goat; bovine principal horn supply follows the zygomaticotemporal pathway with possible accessory supply"],
        [/Cornual nerve from V2 supplies horn exclusively \(in cattle\)/g, "Principal bovine cornual supply follows the zygomaticotemporal pathway; accessory innervation can occur"],
        [/80-90% decussation/g, "a high, method-dependent proportion of optic-fiber decussation"],
        [/Optic decussation 80-90%/g, "High optic-fiber decussation; exact percentage varies by method"],
        [/Optic decussation ~65%/g, "Lower optic-fiber decussation than in large ungulates; exact percentage varies by method"],
        [/damage = Vagal Indigestion \(Hoflund Syndrome\)/g, "dysfunction can contribute to vagal-indigestion syndromes with several possible causes"],
        [/results in complete rumen atony, failure of eructation \(bloat\), and characteristic 'pipestream' feces\. Requires rumenotomy or permanent fistulation in severe cases/g, "may impair forestomach motility or outflow; signs and treatment depend on the anatomical and underlying lesion"],
        [/CN XII deficits \(tongue paralysis\) \+ CN V \(dropped jaw\) \+ CN VII \(facial droop\) = classic Listeriosis presentation/g, "Listerial rhombencephalitis can cause variable asymmetric deficits involving several cranial nerves, commonly including V, VII and VIII"],
        [/strongly suggests <b>Listeria monocytogenes<\/b> infection/g, "supports brainstem localization and makes listeriosis one important differential, but is not a diagnostic fixed triad"],
        [/Never exceed toxic dose calculations \(usually 2-4mg\/kg lidocaine maximum\)/g, "Calculate the agent-specific dose for the individual animal using a current veterinary reference"],
        [/Routine palpation: parotid \+ mandibular \+ retropharyngeal \+ prescapular LN/g, "Routine examination includes accessible mandibular, parotid and superficial cervical regions; medial retropharyngeal nodes are deep"],
        [/lingual artery \(sublingual\) used for pulse during anaesthesia/g, "species-appropriate peripheral arteries are used for pulse assessment during anesthesia"]
    ];
    function rewrite(value) {
        if (typeof value === "string") {
            rules.forEach(function (rule) { value = value.replace(rule[0], rule[1]); });
            return value;
        }
        if (Array.isArray(value)) return value.map(rewrite);
        if (value && typeof value === "object") Object.keys(value).forEach(function (key) { value[key] = rewrite(value[key]); });
        return value;
    }
    rewrite(region);
})();
