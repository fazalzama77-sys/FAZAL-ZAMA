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
            <p>The osteology of the bovine skull (cranium) represents a pinnacle of artiodactyl evolution, characterized by a pyramidal architecture designed to support a massive masticatory apparatus while affording protection to the central nervous system and special sensory organs. Unlike the carnivorous skull, which prioritizes temporal muscle mass and jaw shear, the bovine skull is engineered for the ceaseless lateral grinding of herbivorous occlusion and the support of defensive cranial appendages.</p>
            
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

            comparative: [
                { species: "Ox (Bos taurus)", note: "Prominent condyles with distinct separation. Nuchal crest distinct; forms transverse ridge of nuchal surface. Paracondylar processes short, broad, curved medially. Foramen magnum large, circular to oval. Basilar tubercles flattened, less distinct." },
                { species: "Horse (Equus caballus)", note: "Smaller, widely separated condyles allow lateral rotation. Very prominent nuchal crest forms the poll (highest point). Paracondylar processes long, straight, directed ventrally. Foramen magnum triangular to oval. Very prominent muscular tubercles." },
                { species: "Dog (Canis lupus)", note: "Large separated condyles with deep intercondyloid notch. High sharp nuchal crest (except brachycephalic). Short paracondylar processes projecting ventrally by lateral processes of exoccipital. Circular foramen magnum located ventrally. Basioccipital plate-like, tubercles absent." },
                { species: "Pig (Sus scrofa)", note: "Large separated condyles allow substantial flexion for grazing. Prominent nuchal crest projects dorsally as high, thin plate. Very long paracondylar processes directed straight ventrally (paramastoid process). Oval foramen magnum. Prominent rough tubercles for heavy flexor attachment." },
                { species: "Fowl (Gallus domesticus)", note: "Single median condyle located ventral to foramen magnum allows wide rotation (near 180°). Temporal crests replace nuchal crest. Represented by paraoccipital processes. Transversely oval foramen magnum with dorsal notch common in toy breeds. Less prominent, fuses with sphenoid early." }
            ],

            clinical: "<b>Clinical Insight:</b> The single occipital condyle in Gallus domesticus is a phylogenetically significant retention of the reptilian (sauropsid) condition. This ball-and-socket configuration with the atlas allows birds to rotate their heads with extreme dexterity for preening and predator detection, a range of motion physically impossible for the bi-condylar mammalian skull."
        },
        {
            title: "Sphenoid Bone (Os sphenoidale)",
            desc: `<b>Key Features:</b><br>
            • <b>Keystone</b> of cranial base, terraced structure (presphenoid higher than basisphenoid)<br>
            • <b>Foramen Orbitorotundum:</b> Pathognomonic for ruminants - fusion of foramen rotundum + orbital fissure<br>
            • Transmits: CN III, IV, VI, V1 (ophthalmic), V2 (maxillary)<br>
            • <b>Oval Foramen:</b> For V3 (mandibular nerve) - distinct in ox, absent as discrete foramen in horse<br>
            • <b>Sella Turcica:</b> Deep hypophyseal fossa (houses pituitary) with high thick dorsum sellae<br>
            • <b>NO Alar Canal:</b> Maxillary artery courses on surface (not through bone) - changes surgical approach`,

            eliteDesc: `<h3>The Cranial Base Keystone</h3>
            <p>The sphenoid bone acts as the keystone of the cranial base, situated rostral to the occipital bone. In the ox, the sphenoid is <b>terraced</b>, meaning the rostral portion (presphenoid) sits at a higher elevation than the caudal portion (basisphenoid), reflecting the kyphosis of the cranial base.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Basisphenoid (Os basisphenoidale):</b> The caudal segment. Its dorsal surface features the <b>sella turcica</b> (Turkish saddle), which houses the pituitary gland. The dorsum sellae in the ox is high and thick, creating a deep hypophyseal fossa compared to the horse. The wings (alae) spread laterally to articulate with the temporal bones, forming the oval foramen.</p>
            
            <p><b>Presphenoid (Os praesphenoidale):</b> The rostral segment. Its body is hollow, excavated by the sphenoidal sinus, which communicates with the nasal cavity through the ethmoid meatus. The wings of the presphenoid form the caudal orbital wall and contain the optic canals.</p>
            
            <p><b>Foramen Orbitorotundum:</b> This is a <b>pathognomonic feature of the ruminant skull</b>. In the ox, the foramen rotundum and the orbital fissure fuse to form a single, massive opening. This transmits Cranial Nerves III (Oculomotor), IV (Trochlear), VI (Abducent), and the ophthalmic (V1) and maxillary (V2) branches of the Trigeminal nerve.</p>
            
            <p><b>Oval Foramen (Foramen ovale):</b> A distinct foramen in the ox located in the wing of the basisphenoid, transmitting the mandibular nerve (CN V3). This is absent as a discrete foramen in the horse, where it is represented by a notch in the foramen lacerum.</p>
            
            <p><b>Alar Canal:</b> Absent in the ox. This means the maxillary artery courses on the surface of the pterygoid muscles rather than through a bony conduit, altering the approach for vascular ligation in this region compared to the horse.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Foramen Orbitorotundum present (massive fusion of rotundum + orbital fissure). Alar Canal absent. Foramen Ovale present (large, discrete). Deep sella turcica with prominent hypophyseal fossa. Extremely large sphenoid sinus." },
                { species: "Horse (Equus caballus)", note: "Foramen Orbitorotundum present; similar to ruminants. Alar Canal present (transmits maxillary artery). Foramen Ovale present. Flat; shallow fossa. Communicates with ethmoid labyrinth." },
                { species: "Dog (Canis lupus)", note: "Orbital fissure and Foramen rotundum are separate (no fusion). Alar Canal present (transmits maxillary artery). Absent; replaced by large foramen lacerum. Distinct foramen ovale for CN V. Shallow; indistinct dorsum sellae. Communicates with palatine sinus." },
                { species: "Pig (Sus scrofa)", note: "Orbital fissure and Foramen rotundum are separate. Alar Canal present. Distinct foramen ovale present for CN V. Deep pituitary fossa. Often filled with marrow in small breeds." },
                { species: "Fowl (Gallus domesticus)", note: "Multiple separate foramina for cranial nerves (no fusion). Absent. Absent; replaced by incisura ovalis in foramen lacerum. Shallow; indistinct dorsum sellae. Absent; pneumatized by other systems." }
            ],

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

            eliteDesc: `<h3>The Olfactory Center</h3>
            <p>The ethmoid is a complex, cuboidal bone located deep between the orbits, separating the nasal cavity from the cranial cavity. It is the osseous center for olfaction.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Cribriform Plate (Lamina cribrosa):</b> A horizontal sieve-like plate located at the deepest part of the cranial fossa. It is perforated by numerous foramina transmitting the olfactory nerve fascicles (CN I) from the nasal mucosa to the olfactory bulbs.</p>
            
            <p><b>Crista Galli:</b> A median, vertical bony ridge projecting into the cranial cavity from the cribriform plate. In the ox, it is distinct but relatively short and thick compared to the spine-like process in the pig. It serves as an anchor for the falx cerebri.</p>
            
            <p><b>Perpendicular Plate (Lamina perpendicularis):</b> A median vertical plate that extends rostrally to form the caudal osseous portion of the nasal septum. It articulates with the vomer ventrally and the frontal bone dorsally.</p>
            
            <p><b>Ethmoidal Labyrinth:</b> A dense mass of delicate bony scrolls known as ethmoturbinates:</p>
            <ul>
                <li><b>Endoturbinates:</b> The inner row of large scrolls. In the ox, there are usually <b>5 endoturbinates</b>. The first endoturbinate is enormous and forms the core of the Dorsal Nasal Concha.</li>
                <li><b>Ectoturbinates:</b> The outer row of smaller scrolls, numbering approximately <b>18 in the ox</b>.</li>
            </ul>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Large labyrinth; 5 endoturbinates, ~18 ectoturbinates. Crista galli present; thick and low ridge. Perpendicular plate extensive; forms large part of septum. Lateral masses (lamina papyracea) present. Deep olfactory fossae." },
                { species: "Horse (Equus caballus)", note: "Extensive labyrinth; 6 endoturbinates, ~25 ectoturbinates. Crista galli present; prominent. Perpendicular plate extensive. Deep." },
                { species: "Dog (Canis lupus)", note: "Complex labyrinth; 7 endoturbinates, ~20 ectoturbinates. Crista galli present; high and ridge-like. Perpendicular plate extensive. Very deep; houses large olfactory bulbs." },
                { species: "Pig (Sus scrofa)", note: "Massive labyrinth; highly complex lamellae for macrosmatic olfaction. Crista galli absent or vestigial. Perpendicular plate extensive. Deep." },
                { species: "Fowl (Gallus domesticus)", note: "Reduced; simple structure, olfaction is less critical. Very prominent; spine-like projection. Thin; membranous/cartilaginous. Small olfactory lobes." }
            ],

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
                { species: "Dog (Canis lupus)", note: "Restricted to forehead; parietals form the roof. Absent. Absent (Open orbit; orbital ligament replaces bone). Extensive; covers entire cranium. Normal position." },
                { species: "Pig (Sus scrofa)", note: "Flat/Concave dorsum; heavy supraorbital rim. Absent. Present (located at base of zygomatic process). Large; communicates directly with dorsal conchal sinus. Normal position." },
                { species: "Fowl (Gallus domesticus)", note: "Forms roof of orbit and braincase; fused with other bones. Absent. Absent. Absent/Spongy bone (pneumatized by air sacs). Part of temporal fossa rim (squamosal)." }
            ],

            clinical: "<b>Comparative Insight:</b> The 'complete bony orbit' of the ox and horse is a crucial adaptation for herbivores, providing robust protection for the eye against trauma during grazing in brush, unlike the 'open orbit' of the carnivore which allows for wider jaw opening (temporalis muscle expansion) without bony restriction."
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
                { species: "Dog (Canis lupus)", note: "Tympanic bulla very large; elongated vertically; flask-shaped. Zygomatic process long; overlaps zygomatic bone. Very long and distinct mastoid process. Convex/Concave; allows grinding. Directed dorsolaterally." },
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

            comparative: [
                { species: "Ox (Bos taurus)", note: "Facial tuberosity knob-like. Single infraorbital foramen above 3rd premolar. 6 cheek teeth (no incisors/canines). Extensive sinus continuous with palatine. Shape: Short and broad." },
                { species: "Horse (Equus caballus)", note: "Facial crest prominent sharp ridge. Single infraorbital foramen above 3rd premolar. 6 cheek teeth + canines (male). Divided into rostral/caudal compartments. Long and narrow." },
                { species: "Dog (Canis lupus)", note: "Smooth surface (no crest). Multiple small foramina. Premolars + Molars + Canines. Small. Long and robust." },
                { species: "Pig (Sus scrofa)", note: "Prominent ridge above canine. Single; above 1st cheek tooth. PM + M + Canines. Large recess rather than true sinus. Short (brachy) to Long (dolicho)." },
                { species: "Fowl (Gallus domesticus)", note: "Absent. Single; above 3rd cheek tooth. Edentulous (no teeth). Pneumatized (antorbital sinus). Slender rod-like (part of upper beak)." }
            ],

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

            clinical: "<b>Fowl Comparison:</b> The nasal bone in chickens forms a nasofrontal hinge with the frontal bone. This is a synovial syndesmosis that allows the upper beak to flex upward relative to the braincase (prokinesis), a key adaptation for avian feeding."
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

            eliteDesc: `<h3>Mandible (Mandibula)</h3>
            <p>The lower jaw; the only mobile bone of the skull.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Symphysis:</b> The joint between the two halves (mandibular synchondrosis). In the ox, this ossifies very late or never fully, allowing some independent movement of the halves.</p>
            <p><b>Diastema:</b> The large gap between the incisors (only lower incisors are present) and the cheek teeth.</p>
            <p><b>Coronoid Process:</b> Long and curves caudally for insertion of the temporalis muscle.</p>
            <p><b>Condylar Process:</b> Concave-convex articular surface for the TMJ.</p>
            <p><b>Angle:</b> The angle of the mandible is expanded and rough for the insertion of the masseter and pterygoid muscles (chewing muscles).</p>
            
            <h3>Hyoid Apparatus (Apparatus hyoideus)</h3>
            <p>A series of bony rods suspending the tongue and larynx from the skull.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Stylohyoid (Stylohyoideum):</b> The largest element in the ox. It is flattened and has a distinct muscular angle near its proximal end.</p>
            <p><b>Epihyoid:</b> Short and cylindrical.</p>
            <p><b>Ceratohyoid:</b> Rod-like.</p>
            <p><b>Basihyoid:</b> The transverse bar connecting the two sides.</p>
            <p><b>Lingual Process:</b> Projects rostrally from the basihyoid into the tongue. In the ox, this is short and tuberous, distinguishing it sharply from the horse.</p>
            <p><b>Thyrohyoid:</b> Connects to the thyroid cartilage of the larynx.</p>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Mandible: Symphysis ossifies very late/never fully. 8 Incisors, 6 Cheek teeth. Coronoid long curved. Saddle-shaped condyle. Large rounded rough angle. Hyoid: Stylohyoid large with angle. Lingual process short, blunt, tuberous." },
                { species: "Horse (Equus caballus)", note: "Mandible: Fibrous symphysis (never fuses). 6 Incisors, 6 Cheek teeth. Coronoid long slender (for temporalis). Convex condyle. Hooked angular process. Hyoid: Stylohyoid large with angle. Lingual process very long, spur-like." },
                { species: "Dog (Canis lupus)", note: "Mandible: Fuses early. I, C, PM, M. Coronoid short small. Cylindrical hinge condyle. Hyoid: Small nodule or fused. Lingual process absent/vestigial." },
                { species: "Pig (Sus scrofa)", note: "Mandible: Fused into single bone. I, C, PM, M. Coronoid wide high. Large rounded condyle. Hyoid: Long distinct bone. Curved rod lingual process." },
                { species: "Fowl (Gallus domesticus)", note: "Mandible: Fuses completely in adult. Edentulous (beak). Surangular distinct bone. Retroarticular process. Articulates with Quadrate. Hyoid: Entoglossal bone supports tongue. Extremely long apparatus curling around skull." }
            ],

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

            eliteDesc: `<h3>The Turbinates (Conchae nasales)</h3>
            <p>Delicate, scroll-like bones within the nasal cavity that increase surface area for warming air and filtration.</p>
            
            <h4>Anatomical Topography</h4>
            <p><b>Dorsal Nasal Concha:</b> Formed by the first endoturbinate of the ethmoid bone. It is a single scroll.</p>
            <p><b>Ventral Nasal Concha:</b> A separate bone (maxilloturbinate) attached to the maxilla. In the ox, it is a <b>double scroll</b> (rolls dorsal and ventral), unlike the horse which has a single scroll dorsally.</p>
            <p><b>Middle Concha:</b> Smaller, situated between the dorsal and ventral conchae.</p>
            
            <p>The ethmoidal labyrinth contains:</p>
            <ul>
                <li><b>5 Endoturbinates</b> (inner row)</li>
                <li><b>~18 Ectoturbinates</b> (outer row)</li>
            </ul>`,

            comparative: [
                { species: "Ox (Bos taurus)", note: "Ventral concha is double scroll. Highly vascular. 5 endoturbinates, ~18 ectoturbinates." },
                { species: "Horse (Equus caballus)", note: "Ventral concha double scroll. Dorsal concha encloses large sinus. 6 endoturbinates, ~25 ectoturbinates." },
                { species: "Dog (Canis lupus)", note: "Extremely complex branching (lamellae) for macrosmatic olfaction. 7 endoturbinates, ~20 ectoturbinates." },
                { species: "Pig (Sus scrofa)", note: "Similar to ox; long and narrow turbinates." },
                { species: "Fowl (Gallus domesticus)", note: "Simplified into three cartilaginous/bony folds (rostral, middle, caudal)." }
            ],

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
            clinical: "<b>Clinical Relevance:</b> Infection from the upper cheek teeth (PM4, M1, M2, M3) can break into the maxillary sinus, causing empyema (pus accumulation). The complexity of the frontal sinus compartments dictates the approach to treating sinusitis and horn fractures."
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
            clinical: "<b>Critical Landmark:</b> The Pterygopalatine Fossa is the target for the Peterson Eye Block. The specific location of the foramen orbitorotundum and this fossa are critical for nerve blocks in veterinary practice."
        }
    ],

    "Myology": [],
    "Arthrology": [],
    "Neurology": [],
    "Angiology": []
};