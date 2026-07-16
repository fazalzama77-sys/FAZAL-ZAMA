// =========================================================
// INTRODUCTION DATA MODULE
// Covers VCI Unit-1 syllabus — General principles of veterinary anatomy
// Sub-systems used (custom names so this region has its own flavour):
//   General Anatomy, General Osteology, General Arthrology, General Myology,
//   General Angiology, General Neurology, General Aesthesiology,
//   General Splanchnology, Surface Anatomy, Imaging Principles
// Status: All Sections [Complete - UG B.V.Sc 1st Year]
// =========================================================

if (typeof atlasData === 'undefined') {
    var atlasData = {};
}

atlasData["Introduction"] = {

    // =====================================================
    // GENERAL ANATOMY — terms, branches, planes
    // =====================================================
    "General Anatomy": [
        {
            title: "Definition & Branches of Anatomy",
            desc: "<b>Anatomy</b> = the science of the structure of the body and the relationship between its parts. (Greek: <i>ana = up + tome = cutting</i> → 'cutting up').<br><br><b>Main Branches Studied in B.V.Sc:</b><br>• <b>Gross (Macroscopic) Anatomy</b> — naked-eye study (in dissection hall).<br>• <b>Microscopic Anatomy = Histology</b> — tissue level under microscope.<br>• <b>Cytology</b> — cell-level structure.<br>• <b>Embryology / Developmental Anatomy</b> — formation from fertilization to birth.<br>• <b>Comparative Anatomy</b> — across species (ox vs horse vs dog vs fowl).<br>• <b>Surface (Topographic) Anatomy</b> — palpable structures on the live animal.<br>• <b>Applied (Clinical) Anatomy</b> — surgical/diagnostic application.<br>• <b>Radiographic Anatomy</b> — interpretation of X-ray/USG/CT/MRI.",
            eliteDesc: "<b>VETERINARY ANATOMY</b><br><br>Veterinary anatomy studies the structure and relationships of animal bodies and applies them to clinical examination, surgery, imaging, reproduction and pathology. Major branches include gross anatomy, histology, cytology, developmental anatomy, comparative anatomy, surface anatomy, applied anatomy and imaging anatomy. Practical study may use ethically sourced cadavers, prosections, plastinated specimens, models and validated digital resources. Exact student-to-cadaver ratios, body-donation deadlines or mandatory species rules must be cited to a current VCI/MSVE regulation rather than stated without a source.",
            comparative: [
                { species: "Ox", note: "Reference species for VCI syllabus — students must know ox anatomy first, then compare." },
                { species: "Horse", note: "Carlo Ruini wrote the first species-specific veterinary anatomy book (1598)." },
                { species: "Dog", note: "Standard small-animal model for clinical anatomy." },
                { species: "Fowl", note: "Avian anatomy (poultry science) is integrated into the same VCI course." }
            ],
            clinical: "<b>Curricular use:</b> Learn the reference species and the prescribed comparative species in the current institutional and VCI/MSVE syllabus. Do not present an uncited fixed “five-species rule” as a universal regulation.",
            imgCode: "anatomy_intro"
        },
        {
            title: "Anatomical Position & Descriptive Terms",
            desc: "<b>Standard Anatomical Position</b> — the animal stands on all four limbs, head facing forward, eyes & nose horizontal.<br><br><b>Directional Terms (must memorise):</b><br>• <b>Cranial / Rostral</b> = toward the head (rostral is used in front of the eye).<br>• <b>Caudal</b> = toward the tail.<br>• <b>Dorsal</b> = toward the back (top).<br>• <b>Ventral</b> = toward the belly (bottom).<br>• <b>Medial</b> = toward the midline.<br>• <b>Lateral</b> = away from the midline.<br>• <b>Proximal</b> = near the body trunk (in limbs).<br>• <b>Distal</b> = far from the body trunk.<br>• <b>Palmar / Plantar</b> = back of forelimb foot / hindlimb foot (after carpus / tarsus).<br>• <b>Dorsal (in limbs distal to carpus/tarsus)</b> = front of foot.<br>• <b>Superficial / Deep</b> — relative to skin surface.<br>• <b>External / Internal</b> — relative to body cavity.",
            eliteDesc: "<b>ANATOMICAL POSITION & DIRECTIONAL TERMS</b><br><br>The reference position for veterinary anatomy is the animal standing squarely on all four limbs, head looking forward, eyes/nose horizontal. All directions are described <i>relative to this position</i>, NOT relative to the observer.<br><br><b>1. AXIAL DIRECTIONS (along the body's long axis):</b><br>• <b>Cranial</b> — toward the head. Used for the trunk and limbs proximal to the carpus/tarsus.<br>• <b>Rostral</b> — toward the tip of the nose. Used inside the head only (e.g., 'rostral to the eye').<br>• <b>Caudal</b> — toward the tail.<br><br><b>2. DORSO-VENTRAL:</b><br>• <b>Dorsal</b> — toward the back/spine.<br>• <b>Ventral</b> — toward the belly/sternum.<br><br><b>3. MEDIO-LATERAL:</b><br>• <b>Medial</b> — toward the median (midline) plane.<br>• <b>Lateral</b> — away from it.<br><br><b>4. LIMB-SPECIFIC TERMS (proximal vs distal to carpus/tarsus):</b><br>• <b>Proximal</b> — closer to the trunk.<br>• <b>Distal</b> — farther from the trunk.<br>• Above carpus/tarsus, the front of the limb is called <b>cranial</b> and the back <b>caudal</b>.<br>• Distal to the carpus/tarsus, the front becomes <b>dorsal</b> and the back becomes <b>palmar</b> (forelimb) or <b>plantar</b> (hindlimb).<br><br><b>5. RELATIVE POSITION:</b><br>• <b>Superficial</b> — closer to the skin.<br>• <b>Deep / Profundus</b> — farther from skin.<br>• <b>External / Internal</b> — relative to a body cavity.<br>• <b>Axial / Abaxial</b> — toward or away from the central axis of a digit (used in cloven-footed animals — e.g. 'axial groove of the medial claw').<br>• <b>Ipsilateral / Contralateral</b> — same side / opposite side.<br>• <b>Bilateral / Unilateral</b> — both sides / one side.<br><br><b>6. MOVEMENT TERMS:</b><br>• <b>Flexion</b> — decrease joint angle.<br>• <b>Extension</b> — increase joint angle.<br>• <b>Adduction</b> — toward midline.<br>• <b>Abduction</b> — away from midline.<br>• <b>Rotation</b> — turning around long axis.<br>• <b>Circumduction</b> — circular movement.<br>• <b>Pronation/Supination</b> — rotating limb so palm faces down/up (mostly in dog & humans).<br>• <b>Protraction/Retraction</b> — moving limb forward/backward.",
            comparative: [
                { species: "All quadrupeds", note: "For general body directions, veterinary anatomy prefers cranial/caudal and dorsal/ventral. Anterior/posterior or superior/inferior may still occur in official names of particular structures and should not be declared universally forbidden." }
            ],
            clinical: "<b>Communication:</b> Surgical and radiographic reports MUST use these terms exactly. 'Lateral oblique radiograph of left manus' is unambiguous; 'side view of left front foot' is not.",
            imgCode: "directional_terms"
        },
        {
            title: "Anatomical Planes",
            desc: "<b>Three Standard Planes</b> through the standing animal:<br><br>• <b>Median (Sagittal) Plane</b> — vertical, splits body into RIGHT and LEFT halves of equal size.<br>• <b>Sagittal Plane</b> — any vertical plane parallel to the median plane (off-centre).<br>• <b>Transverse (Cross-sectional) Plane</b> — perpendicular to the long axis; splits body into CRANIAL and CAUDAL parts.<br>• <b>Dorsal (Frontal/Horizontal) Plane</b> — perpendicular to the median plane and to the transverse plane; splits body into DORSAL and VENTRAL parts.<br><br>Used in: imaging (CT/MRI/USG), serial dissection, anatomical descriptions.",
            eliteDesc: "<b>ANATOMICAL PLANES</b><br><br>The median plane divides the body into equal right and left halves; sagittal planes are parallel to it. A transverse plane is perpendicular to the long axis of the body or structure. A dorsal plane divides dorsal and ventral portions. Radiographic projections are named for the direction the beam travels from entry to exit, such as dorsoventral or lateromedial, rather than by saying the beam “crosses” a named plane. In standard transverse CT/MR display, the patient’s right appears on the viewer’s left in both veterinary and human medicine.",
            comparative: [{"species":"All veterinary patients","note":"Use standard directional terms and projection names. Transverse images are conventionally displayed with the patient’s right on the viewer’s left."}],
            clinical: "<b>Imaging:</b> Orthogonal radiographic projections are the minimum for most lesions; additional oblique or specialized views are selected for the region and clinical question. “Three views” is not a universal fracture rule.",
            imgCode: "anatomical_planes"
        }
    ],

    // =====================================================
    // GENERAL OSTEOLOGY
    // =====================================================
    "General Osteology": [
        {
            title: "Properties & Classification of Bone",
            desc: "<b>Bone</b> is a living mineralized connective tissue composed of collagen-rich organic matrix, hydroxyapatite, cells and water. It supports and protects the body, acts as a lever, stores minerals and contains marrow. Common percentage figures depend on whether wet, dry or ash weight is being described and must be qualified.",
            eliteDesc: "<b>BONE AS A COMPOSITE TISSUE</b><br><br>Osteoblasts form osteoid, osteocytes maintain matrix and osteoclasts resorb bone. Compact bone forms a dense cortex and cancellous bone forms trabeculae around marrow spaces. Long bones have diaphyseal, metaphyseal and epiphyseal regions. Intramembranous and endochondral ossification are the principal formation mechanisms. Water is a substantial component of living wet bone, so dry-weight organic/inorganic ratios must not be presented as the complete composition of fresh bone.",
            comparative: [{"species":"Bird","note":"Selected bones communicate with air sacs and are pneumatic; not every avian bone is hollow or pneumatic."},{"species":"Mammal","note":"Bones contain cortical and cancellous tissue with marrow spaces; some mammalian skull bones also contain paranasal air sinuses."},{"species":"Aquatic or semiaquatic mammals","note":"Bone density and medullary structure vary by lineage and function; avoid calling the hippopotamus an aquatic mammal or assigning ballast function universally."}],
            clinical: "<b>Bone Marrow Aspiration:</b> Site and technique must be selected from a current species-, age- and patient-specific clinical reference; commonly considered bones vary among horses, cattle, dogs and cats, and sternal collection is not a universal recommendation. <b>Fracture healing:</b> Depends on vascularity, stability, viable osteogenic cells, soft-tissue condition and systemic factors.",
            imgCode: "bone_structure"
        },
        {
            title: "Classification of Skeletons & Bones",
            desc: "<b>Two main divisions of skeleton:</b><br>• <b>Axial Skeleton</b> — skull, vertebral column, ribs, sternum.<br>• <b>Appendicular Skeleton</b> — bones of forelimb + hindlimb (girdles + free limbs).<br>• <b>Visceral Skeleton</b> — bones in soft organs (e.g., os cordis in ox heart, os penis in dog).<br>• <b>Splanchnic / Heterotopic Skeleton</b> — same idea (bones found outside the typical skeleton).<br><br><b>Classification of bones (by shape):</b><br>1. <b>Long bones</b> — femur, humerus.<br>2. <b>Short bones</b> — carpal, tarsal bones.<br>3. <b>Flat bones</b> — scapula, skull bones.<br>4. <b>Irregular bones</b> — vertebrae.<br>5. <b>Sesamoid bones</b> — patella (largest), proximal/distal sesamoids of fetlock — develop within tendons.<br>6. <b>Pneumatic bones</b> — air-filled, in birds (humerus, sternum).",
            eliteDesc: "<b>SKELETAL ORGANIZATION</b><br><br><b>I. AXIAL SKELETON</b> — bones along the long axis:<br>• <b>Skull</b> (cranial + facial bones, hyoid bone).<br>• <b>Vertebral column</b> — Cervical, Thoracic, Lumbar, Sacral, Coccygeal.<br>• <b>Ribs + sternum</b>.<br>• Vertebral formula:<br>  – Ox: <b>C7 T13 L6 S5 Cy18-20</b><br>  – Horse: C7 T18 L6 S5 Cy15-21<br>  – Dog: C7 T13 L7 S3 Cy20-23<br>  – Pig: C7 T14-15 L6-7 S4 Cy20-23<br>  – Fowl: C13-14 (variable), with synsacrum + pygostyle.<br><br><b>II. APPENDICULAR SKELETON</b> — limbs:<br>• <b>Forelimb:</b> Pectoral girdle (scapula, clavicle—reduced in domestics) → humerus → radius+ulna → carpus → metacarpus → phalanges.<br>• <b>Hindlimb:</b> Pelvic girdle (os coxae) → femur → patella + tibia + fibula → tarsus → metatarsus → phalanges.<br><br><b>III. VISCERAL / HETEROTOPIC SKELETON</b> — bones embedded in soft tissues:<br>• <b>Os cordis</b> in heart of ox/buffalo.<br>• <b>Os penis</b> in dog, walrus, raccoon.<br>• <b>Os clitoridis</b> may occur variably in the bitch and some other mammals.<br>• <b>Os rostri</b> in pig snout.<br>• <b>Os priapi</b> in some carnivores.<br>• <b>Baculum</b> (general term for os penis).<br><br><b>BONE SHAPES (Detailed):</b><br>• <b>Long bones</b> (Os longum) — clearly longer than wide; have shaft + 2 ends; serve as levers.<br>• <b>Short bones</b> (Os breve) — cuboidal; carpus, tarsus; dissipate stress.<br>• <b>Flat bones</b> (Os planum) — broad surfaces for muscle attachment; protective (skull).<br>• <b>Irregular bones</b> (Os irregulare) — vertebrae, mandible.<br>• <b>Sesamoid bones</b> (Os sesamoideum) — within a tendon; reduce friction; <b>patella</b> (largest), fabella, distal sesamoid (navicular).<br>• <b>Pneumatic bones</b> (Os pneumaticum) — air-filled; birds; some skull bones in mammals.<br><br><b>OSTEOLOGICAL TERMS YOU MUST KNOW:</b><br>• <b>Foramen</b> — hole.<br>• <b>Fossa</b> — depression.<br>• <b>Sulcus</b> — groove.<br>• <b>Tubercle, Tuberosity, Trochanter, Crest</b> — projections for muscle attachment.<br>• <b>Condyle</b> — rounded articular projection.<br>• <b>Process</b> — any bony outgrowth.<br>• <b>Spine</b> — sharp ridge.<br>• <b>Facet</b> — small flat articular surface.<br>• <b>Notch (Incisura)</b> — indentation.<br>• <b>Sinus</b> — air-filled cavity in a bone.<br>• <b>Canal</b> — bony tunnel for vessels/nerves.",
            comparative: [
                { species: "Ox", note: "Total bones ≈ 207. C7-T13-L6-S5-Cy18-20." },
                { species: "Horse", note: "Total ≈ 205. T18 — most thoracic vertebrae among large mammals." },
                { species: "Dog", note: "Total ≈ 319 (highly variable due to coccygeal). L7." },
                { species: "Fowl", note: "Many bones fused into compound bones (synsacrum, tarsometatarsus, tibiotarsus)." }
            ],
            clinical: "<b>Vertebral Formula Rule:</b> <i>'Cattle and Cars share C7 T13 L6'</i> — easy mnemonic. <b>Splanchnic bones</b> become incidental findings on radiographs (e.g., os cordis must not be confused with cardiac calcification).",
            imgCode: "skeleton_classification"
        }
    ],

    // =====================================================
    // GENERAL ARTHROLOGY
    // =====================================================
    "General Arthrology": [
        {
            title: "Classification of Joints",
            desc: "<b>Joint classification</b><br><br><b>Structural classes:</b> fibrous joints, cartilaginous joints and synovial joints.<br><b>Functional classes:</b> synarthrosis (little or no movement), amphiarthrosis (limited movement) and diarthrosis (free movement). These systems overlap but are not exact one-to-one synonyms. Fibrous joints include sutures, syndesmoses and gomphoses; cartilaginous joints include synchondroses and symphyses; synovial joints have a cavity, articular cartilage, capsule and synovial fluid.",
            eliteDesc: "<b>JOINTS</b><br><br>Fibrous joints unite structures with fibrous tissue and range from nearly immobile sutures to syndesmoses with limited motion. Cartilaginous joints use hyaline cartilage or fibrocartilage. Synovial joints contain a cavity, articular cartilage, fibrous capsule and synovial membrane and are classified by surface form and permitted movement. Synovial fluid is a plasma ultrafiltrate modified by type A and type B synoviocytes; “B-cells” must not be confused with B lymphocytes.",
            comparative: [
                { species: "Horse", note: "The stifle and fetlock are high-motion synovial joints and are clinically important sites of injury and osteoarthritis; no single joint is universally the 'most prone' in every population or discipline." },
                { species: "Dog", note: "Hip and stifle often affected by hip dysplasia and cranial cruciate rupture." },
                { species: "Bird", note: "Joints of synsacrum almost completely fused — limited mobility, gain in stability." }
            ],
            clinical: "<b>Arthrocentesis:</b> Aspiration of synovial fluid for diagnosis (bacterial, immune-mediated arthritis). <b>Septic arthritis:</b> Joint sepsis — fluid becomes turbid with neutrophils. <b>Osteoarthritis:</b> Cartilage degeneration; common in old dogs and high-performance horses.",
            imgCode: "joint_classification"
        },
        {
            title: "Structure of a Synovial Joint & Movements",
            desc: "<b>Components of a typical synovial joint:</b><br>1. <b>Articular cartilage</b> — hyaline; smooth gliding surface; avascular.<br>2. <b>Joint capsule</b> — fibrous outer + synovial inner.<br>3. <b>Synovial membrane</b> — secretes synovial fluid.<br>4. <b>Synovial fluid</b> — lubricant + nutrient.<br>5. <b>Ligaments</b> — collateral, intracapsular, extracapsular.<br>6. <b>Menisci / Discs</b> (where present).<br><br><b>Movements at synovial joints:</b><br>• <b>Flexion / Extension</b> — decrease/increase angle.<br>• <b>Adduction / Abduction</b> — toward/away from midline.<br>• <b>Rotation</b> — around long axis.<br>• <b>Circumduction</b> — combined motion describing a cone.<br>• <b>Pronation / Supination</b> — rotate forearm/leg.<br>• <b>Gliding</b> — sliding of flat surfaces.",
            eliteDesc: "<b>SYNOVIAL JOINT</b><br><br>Articular hyaline cartilage covers subchondral bone and is nourished chiefly by synovial fluid. The capsule has an outer fibrous layer and inner synovial membrane. Type A synoviocytes are macrophage-like and type B synoviocytes synthesize hyaluronan and lubricating components. Ligaments, menisci, discs, fat pads, bursae and tendon sheaths occur according to the joint. Movements include flexion, extension, rotation, abduction, adduction and gliding within species-specific limits.",
            comparative: [
                { species: "Horse", note: "Pronation and supination are essentially absent because the radius and ulna are functionally fixed; this suits a limb specialized for parasagittal locomotion." },
                { species: "Dog", note: "Appreciable pronation and supination are retained because the radius can rotate relative to the ulna; the range is less than in humans and varies with conformation." },
                { species: "Cat", note: "The shoulder is a spheroidal synovial joint. Feline forelimb mobility is enhanced by the muscular attachment of the scapula to the trunk, a reduced clavicle and compliant periarticular soft tissues." }
            ],
            clinical: "<b>Sprain</b> = stretched/torn ligament. <b>Strain</b> = stretched/torn muscle/tendon. <b>Luxation</b> = dislocation (bone out of joint). <b>Subluxation</b> = partial luxation. <b>Effusion</b> = excess synovial fluid (visible swelling).",
            imgCode: "synovial_joint"
        }
    ],

    // =====================================================
    // GENERAL MYOLOGY
    // =====================================================
    "General Myology": [
        {
            title: "Classification of Muscle Tissue",
            desc: "<b>Muscle tissue</b><br><br>Skeletal muscle is striated, multinucleated and somatically controlled; fatigue resistance varies greatly among fiber types and tasks. Cardiac muscle consists of branched striated cells, usually with one and sometimes two central nuclei, connected by intercalated discs. Smooth muscle consists of nonstriated spindle-shaped cells controlled mainly by autonomic, hormonal and local mechanisms.",
            eliteDesc: "<b>MYOLOGY — STUDY OF MUSCLE</b><br><br>Muscle is the body's specialized contractile tissue, although contractile proteins and contractile behavior also occur in other cell types.<br><br><b>Skeletal muscle:</b> long multinucleated striated fibres organized into fascicles; contraction is controlled by somatic motor neurons. Fibre properties form a continuum commonly classified into Type I and Type II subtypes and vary by muscle, species, breed and training.<br><br><b>Cardiac muscle:</b> branched striated cells joined by intercalated discs; intrinsic pacemaker activity initiates contraction while autonomic input modulates it.<br><br><b>Smooth muscle:</b> nonstriated spindle-shaped cells regulated by autonomic, hormonal and local mechanisms; organization ranges from electrically coupled single-unit muscle to more independently controlled multi-unit muscle.<br><br><b>Connective-tissue organization:</b> epimysium surrounds the organ, perimysium surrounds fascicles and endomysium surrounds individual fibres. These layers transmit force into tendons or aponeuroses. Origin and insertion are descriptive attachments and are not invariably fixed versus movable in every action.",
            comparative: [{"species":"Horse","note":"Fiber-type proportions differ among muscles, breeds and training states; equine fast fibers are commonly described using IIa/IIx terminology."},{"species":"Cattle","note":"Fiber composition varies by muscle, breed, age and production type; avoid a universal endurance-grazing profile."},{"species":"Bird","note":"Pectoral color and oxidative capacity vary with species and flight behavior; domestic chicken breast is relatively glycolytic."}],
            clinical: "<b>Muscle biopsy</b> — for diagnosis of muscular dystrophies, myositis, polysaccharide storage myopathy (PSSM in horses). <b>Rhabdomyolysis</b> ('tying up' in horses) — muscle damage releases myoglobin → kidney damage.",
            imgCode: "muscle_types"
        },
        {
            title: "Muscle Classification by Shape, Action & Etymology",
            desc: "<b>By Shape:</b><br>• <b>Fusiform</b> — spindle-shaped (biceps).<br>• <b>Triangular</b> — fan-shaped (pectorals).<br>• <b>Quadrilateral</b> — square (rhomboideus).<br>• <b>Strap-like</b> — long, parallel (sartorius, sternohyoideus).<br>• <b>Pennate</b> — feather-like:<br>  – Unipennate (one side).<br>  – Bipennate (both sides).<br>  – Multipennate (many).<br>• <b>Circular (sphincter)</b> — ring (orbicularis oculi).<br><br><b>By Action:</b><br>• <b>Flexor / Extensor</b> — flex / extend joint.<br>• <b>Adductor / Abductor</b>.<br>• <b>Sphincter / Dilator</b>.<br>• <b>Levator / Depressor</b>.<br>• <b>Rotator</b> (medial / lateral).<br>• <b>Tensor</b>.<br><br><b>Muscle Naming (Etymology):</b> Latin/Greek roots indicating shape, location, action, attachments, or number of heads.",
            eliteDesc: "<b>MUSCLE CLASSIFICATION</b><br><br>Muscles may be fusiform, strap-like, convergent, circular or pennate and are named for shape, location, attachments or action. Names do not guarantee the same architecture in every species: canine and feline biceps brachii have a single head of origin despite the historical name. Domestic-animal terminology should use cranial/caudal rather than human anterior/posterior where applicable. The equine reciprocal apparatus belongs to the hindlimb and links stifle and hock through fibularis tertius and superficial digital flexor.",
            comparative: [
                { species: "Horse", note: "<b>Stay apparatus</b> = cooperative ligament+muscle system that lets the horse sleep standing (key UG concept)." },
                { species: "Dog", note: "Masticatory-muscle form varies with skull conformation and breed. A universal claim that brachycephalic dogs possess hypertrophied pterygoids specifically 'for bite strength' is unsupported." },
                { species: "Bird", note: "<b>Pectoralis major</b> (downstroke) and <b>supracoracoideus</b> (upstroke) are the chief flight muscles." }
            ],
            clinical: "<b>Atrophy</b> = wasting of muscle (denervation, disuse). <b>Hypertrophy</b> = increase in fibre size (training, anabolic agents). <b>Contracture</b> = permanent shortening (post-trauma fibrosis). <b>Myositis</b> = inflammation.",
            imgCode: "muscle_shapes"
        },
        {
            title: "Tendons, Ligaments, Aponeuroses, Bursae & Synovial Sheaths",
            desc: "<b>Tendon</b> — a strong, relatively stiff but viscoelastic dense connective-tissue structure that transmits muscle force, usually to bone.<br><br><b>Ligament</b> — dense connective tissue connecting bones or stabilizing an organ/joint; composition and elasticity vary, with the nuchal ligament being highly elastic.<br><br><b>Aponeurosis</b> — a broad, sheet-like tendon.<br><br><b>Synovial bursa</b> — a fluid-containing sac that reduces friction between moving tissues.<br><br><b>Synovial tendon sheath</b> — a double-layered synovial sleeve around a tendon where it passes through a region of substantial movement.",
            eliteDesc: "<b>ACCESSORY MUSCULOSKELETAL STRUCTURES</b><br><br>Tendons transmit muscle force to bone, ligaments connect bones and guide joints, and aponeuroses are broad sheet-like tendons. Bursae reduce friction between moving structures and tendon sheaths surround tendons over regions of movement. Capped elbow is olecranon bursitis; precarpal bursitis is a separate lesion. The equine stay apparatus uses coordinated muscles, tendons and ligaments, not ligaments alone. Bovine corkscrew claw is multifactorial and should not be attributed simply to chronic tendon strain.",
            comparative: [{"species":"Horse","note":"The nuchal ligament supports the head; forelimb and hindlimb stay mechanisms include muscles, tendons and ligaments."},{"species":"Ox","note":"Digital flexor tendons and suspensory structures support the claws; corkscrew claw has genetic, conformational and biomechanical influences."},{"species":"Dog","note":"Cranial cruciate ligament disease is a common cause of stifle instability."}],
            clinical: "<b>Clinical relevance:</b> Distinguish olecranon, precarpal and calcaneal bursitis by site. Tenosynovitis and tendon injury require localization to the affected tendon or sheath; human “carpal tunnel syndrome” should not be used as a generic veterinary example without species context.",
            imgCode: "tendons_ligaments"
        }
    ],

    // =====================================================
    // GENERAL ANGIOLOGY
    // =====================================================
    "General Angiology": [
        {
            title: "Structure of the Heart & Pericardium",
            desc: "<b>Heart</b> = 4-chambered muscular pump in the middle mediastinum.<br><br><b>4 chambers:</b> Right atrium → Right ventricle → (lungs) → Left atrium → Left ventricle.<br><br><b>4 Valves:</b><br>• <b>Tricuspid</b> (right atrioventricular) — between R atrium & R ventricle.<br>• <b>Pulmonary semilunar</b> — exit of R ventricle.<br>• <b>Mitral / Bicuspid</b> (left AV) — between L atrium & L ventricle.<br>• <b>Aortic semilunar</b> — exit of L ventricle.<br><br><b>3 Layers of Wall:</b><br>• <b>Epicardium</b> = visceral pericardium (outer).<br>• <b>Myocardium</b> = thick cardiac muscle (middle).<br>• <b>Endocardium</b> = inner endothelial lining.<br><br><b>Pericardium</b> = double-walled fibrous sac:<br>• Fibrous pericardium (outer).<br>• Parietal serous pericardium (inner).<br>• Pericardial cavity has small amount of fluid.",
            eliteDesc: "<b>HEART AND PERICARDIUM</b><br><br>The heart has right and left atria and ventricles, atrioventricular valves and aortic and pulmonary valves. The number and arrangement of pulmonary venous ostia, valve cusps, chordae and wall-thickness ratios vary among species and individuals. The pericardium consists of a fibrous layer and parietal and visceral serous layers. Sternopericardiac or phrenicopericardiac attachments are species-specific. Adult cattle commonly have ossa cordis in the cardiac fibrous skeleton.",
            comparative: [{"species":"Ox","note":"Heart lies chiefly between approximately the third and sixth ribs/intercostal spaces and commonly contains ossa cordis."},{"species":"Horse","note":"Cardiac size varies with body size, breed and training; avoid anecdotal fixed weights or chord formulas."},{"species":"Dog","note":"Cardiac silhouette is assessed radiographically with conformation-aware methods such as vertebral heart size."}],
            clinical: "<b>Auscultation Sites (Cow):</b> Left side — Mitral (5th ICS, lower third), Aortic (4th ICS, mid-third), Pulmonic (3rd ICS, mid-third). Right side — Tricuspid (3rd-4th ICS, mid-third). <b>Pericardiocentesis:</b> Aspiration of pericardial fluid in tamponade. <b>Hardware Disease (cattle):</b> Reticular foreign body penetrates pericardium → septic pericarditis ('washing-machine' heart sounds).",
            imgCode: "heart_structure"
        },
        {
            title: "Systemic & Pulmonary Circulations",
            desc: "<b>Pulmonary circuit:</b> Right ventricle → pulmonary trunk and arteries → pulmonary capillaries in the lungs → pulmonary veins → left atrium. The right atrium receives systemic venous return before blood enters the pulmonary circuit through the right ventricle.<br><br><b>Systemic circuit:</b> Left ventricle → aorta → systemic vessels → systemic veins → cranial and caudal venae cavae → right atrium. The left atrium receives pulmonary venous return before blood enters the systemic circuit through the left ventricle.<br><br>Aortic-arch and terminal branches vary among domestic species. In cattle, a single brachiocephalic trunk arises from the arch and gives rise to both subclavian arteries and the bicarotid trunk.",
            eliteDesc: "<b>SYSTEMIC AND PULMONARY CIRCULATION</b><br><br>The pulmonary circuit carries blood from the right ventricle to the lungs and back to the left atrium; the systemic circuit carries blood from the left ventricle through the aorta and returns it to the right atrium. Aortic-arch branching is species-specific: cattle have a single brachiocephalic trunk that gives both subclavians and a bicarotid trunk. Aortic termination into external iliac, internal iliac and median sacral pathways also varies by species. Venous valves and lymphatic drainage are not identical in every vessel or species. Thoracic-duct and right-lymphatic drainage should be described with veterinary species variation rather than a fixed human pattern.",
            comparative: [{"species":"Ox","note":"Single brachiocephalic trunk arises from the aortic arch; cerebral arterial supply includes a maxillary-derived rete."},{"species":"Horse","note":"Aortic arch branching and terminal vessels follow the equine pattern; heart-to-body ratio varies with breed and training."},{"species":"Bird","note":"The right systemic aortic arch persists in birds, and the heart has four chambers."}],
            clinical: "<b>Clinical relevance:</b> Patent ductus arteriosus produces a continuous murmur and is one of several congenital cardiac defects in dogs; it should not be declared universally the most common without population context.",
            imgCode: "circulations"
        }
    ],

    // =====================================================
    // GENERAL NEUROLOGY
    // =====================================================
    "General Neurology": [
        {
            title: "Divisions of the Nervous System",
            desc: "<b>Structural divisions:</b><br>• <b>Central nervous system:</b> brain and spinal cord. The optic nerve is a CNS tract, and olfactory pathways are also central extensions rather than ordinary peripheral nerves.<br>• <b>Peripheral nervous system:</b> the remaining cranial and spinal nerves, peripheral ganglia, receptors and nerve endings.<br><br><b>Functional organization:</b><br>• <b>Afferent pathways</b> convey somatic and visceral sensory information to the CNS.<br>• <b>Somatic efferent pathways</b> supply skeletal muscle.<br>• <b>Autonomic/visceral pathways</b> regulate smooth muscle, cardiac muscle and glands and include sympathetic, parasympathetic and enteric components.<br><br><b>Neural tissue:</b> neurons receive and transmit information and are supported by CNS and PNS glial cells.",
            eliteDesc: "<b>NERVOUS SYSTEM</b><br><br>The CNS comprises brain and spinal cord; the PNS comprises cranial and spinal nerves, ganglia and receptors. Somatic pathways supply body-wall sensation and skeletal muscle. Autonomic pathways include sympathetic, parasympathetic and enteric components, with segmental outflow varying among species. Choroid-plexus epithelial cells produce most CSF; ordinary ependymal cells line the ventricular system. Modern avian neuroanatomy recognizes a developed pallium and basal nuclei and should not say the corpus striatum “replaces” the mammalian cortex.",
            comparative: [{"species":"Mammals","note":"Share the same major CNS/PNS plan with species differences in size, folding and specialization."},{"species":"Bird","note":"Birds have a well-developed pallium, basal nuclei and cerebellum; their forebrain is not merely a corpus striatum replacing cortex."}],
            clinical: "<b>Sympathetic vs Parasympathetic dominance</b> drives clinical signs — e.g., dilated pupils (sympathetic) vs miotic pupils (parasympathetic). Horner's syndrome = loss of sympathetic supply to head → ptosis, miosis, enophthalmos, third-eyelid prolapse.",
            imgCode: "ns_divisions"
        },
        {
            title: "Brain, Spinal Cord & Meninges",
            desc: "<b>Brain:</b> telencephalon and diencephalon form the forebrain; midbrain, pons and medulla form the brainstem; cerebellum coordinates posture and movement. CN I is associated with the forebrain and CN II with the diencephalon, so not all twelve cranial nerves arise from the brainstem.<br><br><b>Spinal cord:</b> Extends caudally to a species- and age-specific vertebral level and terminates as the conus medullaris with cauda equina roots.<br><br><b>Meninges:</b> dura, arachnoid and pia surround the CNS.",
            eliteDesc: "<b>BRAIN, CORD AND MENINGES</b><br><br>The cerebrum, diencephalon, brainstem and cerebellum have distinct functions and ventricular relations. The spinal cord has cervical and lumbosacral enlargements and ends at a species- and age-dependent level. CSF collection sites are not interchangeable with epidural sites: sacrococcygeal or first intercoccygeal injection in cattle is an epidural technique, not a lumbosacral CSF tap. In dogs, lumbar CSF is generally collected cranial to the lumbosacral junction using specialist landmarks; neural injury remains possible.",
            comparative: [{"species":"Ox","note":"Spinal-cord termination and safe CSF sites depend on age and anatomy; S5-Cy1 is an epidural, not lumbosacral CSF, landmark."},{"species":"Horse","note":"Atlanto-occipital or atlantoaxial/lumbosacral sampling requires equine-specific technique and appropriate anesthesia or imaging."},{"species":"Dog","note":"Cisternal and lumbar CSF collection use small-animal neurologic landmarks; lumbosacral epidural and lumbar CSF taps are distinct procedures."}],
            clinical: "<b>Clinical procedures:</b> Cisternal CSF collection and epidural anesthesia are distinct procedures. Both require species-specific landmarks, appropriate restraint or anesthesia, asepsis and trained veterinary supervision. Sacrococcygeal/first intercoccygeal access in cattle is an epidural site, not a CSF collection site.",
            imgCode: "brain_cord"
        }
    ],

    // =====================================================
    // GENERAL AESTHESIOLOGY (Sense Organs)
    // =====================================================
    "General Aesthesiology": [
        {
            title: "Sense Organs — Overview",
            desc: "<b>Aesthesiology</b> is the study of sensory organs and systems.<br><br><b>Special senses:</b><br>1. <b>Vision</b> — retina and visual pathways.<br>2. <b>Hearing</b> — cochlear receptors and pathways.<br>3. <b>Equilibrium</b> — vestibule, semicircular ducts and vestibular pathways.<br>4. <b>Olfaction</b> — olfactory mucosa and pathways.<br>5. <b>Gustation</b> — taste buds and gustatory pathways.<br><br><b>General somatic and visceral senses</b> include touch, pressure, vibration, temperature, pain, proprioception and visceral sensation. Touch is therefore a general sense, not a special sense.",
            eliteDesc: "<b>SENSE ORGANS</b><br><br>The eye, ear, olfactory mucosa, taste receptors and cutaneous receptors mediate special and general sensation. A tapetum lucidum is present in many domestic mammals but is absent or reduced in some species, including the pig; do not say all domestic animals possess one. Taste innervation and receptor distribution should be expressed in veterinary terms rather than copied uncritically from human anatomy. Avian visual acuity varies greatly; raptors are exceptional and should not represent all birds or domestic fowl.",
            comparative: [{"species":"Dog/Cat","note":"Tapetum is well developed; olfactory anatomy varies with skull conformation and species."},{"species":"Horse","note":"Large laterally placed eyes and a visual streak provide a wide field, with blind regions."},{"species":"Pig","note":"Tapetum lucidum is absent; vision and olfaction should be described accordingly."},{"species":"Fowl","note":"Domestic fowl have strong visual abilities and a pecten oculi, but raptor-level acuity is not universal."}],
            clinical: "<b>Otitis Externa:</b> Inflammation of external ear canal — common in floppy-eared dogs. <b>Conjunctivitis & Keratitis:</b> Infection/irritation of conjunctiva or cornea. <b>Vestibular Disease:</b> Head tilt, nystagmus, ataxia — central or peripheral.",
            imgCode: "sense_organs"
        }
    ],

    // =====================================================
    // GENERAL SPLANCHNOLOGY
    // =====================================================
    "General Splanchnology": [
        {
            title: "Body Cavities & Their Boundaries",
            desc: "<b>Body cavities</b><br><br>The thoracic cavity is separated from the abdomen by the diaphragm and contains paired pleural cavities and the mediastinum. The abdominal and pelvic cavities are continuous as the abdominopelvic cavity; the pelvic inlet is a boundary landmark, not a closed partition. Serous membranes form potential spaces around organs rather than making every body cavity a closed sac.",
            eliteDesc: "<b>BODY CAVITIES</b><br><br>The thorax is bounded by vertebrae, ribs, sternum, thoracic inlet and diaphragm. The abdominal cavity continues caudally through the pelvic inlet into the pelvic cavity. Peritoneum lines much of the abdominal cavity and extends variably into the pelvis. Organ topography is species-specific: the bovine rumen occupies most of the left abdomen and is approached through the left paralumbar fossa for rumenotomy; the horse has a very large cecum and ascending colon.",
            comparative: [{"species":"Ox","note":"Rumen occupies most of the left abdomen; standard rumenotomy uses a left-flank approach."},{"species":"Horse","note":"Large cecum and ascending colon form an extensive hindgut."},{"species":"Dog","note":"Abdominopelvic organ positions vary with filling, posture and conformation."}],
            clinical: "<b>Clinical procedures:</b> Thoracocentesis, abdominocentesis and cystocentesis require species-, patient-, imaging- and indication-specific site selection. Do not use one fixed intercostal space or abdominal coordinate for every veterinary patient.",
            imgCode: "body_cavities"
        },
        {
            title: "General Topography of the Visceral Systems",
            desc: "<b>Topography (study of organ relationships):</b><br><br><b>Digestive System</b> — from mouth to anus. Starts in head, runs through neck (oesophagus), thorax, abdomen, pelvis. Accessory: liver, pancreas, salivary glands.<br><br><b>Respiratory System</b> — nose → nasal cavity → pharynx → larynx → trachea → bronchi → lungs (in thorax).<br><br><b>Urinary System</b> — kidneys (sublumbar, abdomen) → ureters → urinary bladder (pelvic floor) → urethra (pelvic + penile in male, short in female).<br><br><b>Endocrine System</b> — pituitary (brain), thyroid + parathyroid (neck), adrenals (kidneys), pancreas (islets), gonads.<br><br><b>Male Reproductive</b> — testes (scrotum) + epididymis + ductus deferens + accessory glands (pelvic) + penis.<br><br><b>Female Reproductive</b> — ovaries + uterine tubes + uterus (abdominal/pelvic) + cervix + vagina + vulva.<br><br><b>Avian (Fowl) variations:</b> 1 left ovary, single oviduct, cloaca (common opening).",
            eliteDesc: `<b>BIRD'S-EYE VIEW OF THE VISCERAL SYSTEMS</b><br><br>
            This entry summarises topography; detailed species differences belong in the regional modules.<br><br>
            <b>1. Digestive system:</b> Mouth and pharynx lead through the oesophagus to the stomach or ruminant compartments, small and large intestines, rectum and anus. Salivary glands, liver and pancreas are accessory digestive organs. Domestic fowl have a crop, proventriculus, ventriculus, paired ceca and cloaca.<br><br>
            <b>2. Respiratory system:</b> The mammalian conducting portion extends from the nasal passages through pharynx, larynx, trachea, bronchi and conducting bronchioles. Gas exchange occurs in respiratory bronchioles where present, alveolar ducts, alveolar sacs and alveoli. Domestic species differ in the prominence of respiratory bronchioles. Birds lack alveoli and a diaphragm; gas exchange occurs in parabronchial air capillaries, while air sacs act principally as bellows. Domestic fowl usually have nine air sacs.<br><br>
            <b>3. Urinary system:</b> Kidneys drain through ureters to the urinary bladder and urethra in mammals. The bovine kidney is externally lobulated and lacks a conventional renal pelvis. In the horse the <b>right kidney is heart-shaped and the left is bean-shaped</b>. Domestic fowl have lobulated kidneys, no urinary bladder and ureters opening into the urodeum.<br><br>
            <b>4. Endocrine organs:</b> Pituitary, pineal, thyroid, parathyroids, adrenal glands, pancreatic islets and gonads have species-specific positions. The thymus has thoracic and, especially in young ruminants and pigs, substantial cervical portions. Adrenal glands lie near the craniomedial aspects of the kidneys, but their exact renal relationship varies.<br><br>
            <b>5. Male reproductive system:</b> Sperm pass from testis to epididymis and ductus deferens, which enters the pelvic urethra in a species-specific relationship with accessory-gland ducts. A separate/common ejaculatory duct is not universal. The spermatic cord contains the ductus deferens, testicular vessels/pampiniform plexus, lymphatics and nerves with their coverings; the cremaster is an associated muscle rather than a luminal cord component. Ruminants and boar have fibroelastic penises with sigmoid flexures; horse and dog have musculocavernous penises. Male domestic fowl lack an intromittent phallus, whereas waterfowl and some ratites possess one.<br><br>
            <b>6. Female reproductive system:</b> Ovary, uterine tube, uterus, cervix, vagina, vestibule and vulva show marked species variation. The broad ligament consists of mesovarium, mesosalpinx and mesometrium. In domestic fowl only the left ovary and oviduct are normally functional; the oviduct includes infundibulum, magnum, isthmus, shell gland/uterus and vagina and opens into the urodeum.`,
            comparative: [
                { species: "Ox", note: "Reference species. Massive rumen on left, liver almost entirely on right." },
                { species: "Horse", note: "Single-chamber stomach, huge cecum + ventral & dorsal colon (hindgut fermenter)." },
                { species: "Fowl", note: "Cloaca = single common opening for digestive, urinary, reproductive systems (urodeum + coprodeum + proctodeum compartments)." }
            ],
            clinical: "<b>Topographic landmarks</b> = backbone of clinical exam (cardiac auscultation areas, lung percussion sites, liver dullness, kidney palpation per rectum, etc.).",
            imgCode: "topography_overview"
        }
    ],

    // =====================================================
    // SURFACE ANATOMY (Palpation, Venepuncture, BM/CSF sites)
    // =====================================================
    "Surface Anatomy": [
        {
            title: "Surface Regions & Joint Regions",
            desc: "<b>Body Surface Regions (Ox):</b><br>• <b>Head:</b> cranial, facial, orbital, oral, otic, temporal regions.<br>• <b>Neck:</b> dorsal, lateral (jugular furrow), ventral (laryngeal/tracheal).<br>• <b>Trunk:</b> withers, dorsum, loin, croup, thorax, abdomen, paralumbar fossa, flank.<br>• <b>Tail.</b><br>• <b>Forelimb regions:</b> shoulder, arm, elbow, forearm, carpus, metacarpus, fetlock, pastern, hoof.<br>• <b>Hindlimb regions:</b> hip, thigh, stifle, leg, hock, metatarsus, fetlock, pastern, hoof.<br><br><b>Joint regions</b> = visible swellings over joints — shoulder, elbow, carpus, fetlock, hip, stifle, hock.",
            eliteDesc: "<b>SURFACE REGIONS OF THE BOVINE BODY</b><br><br>The body surface is mapped into named regions for clinical communication. The student MUST be able to point to each region on the live cow.<br><br><b>I. HEAD REGIONS:</b><br>• <b>Cranial region</b> — over cranium (skullcap).<br>• <b>Frontal region</b> — between horns and eyes.<br>• <b>Parietal region</b> — between horns.<br>• <b>Temporal region</b> — lateral skull.<br>• <b>Orbital region</b> — around eye.<br>• <b>Nasal region</b> — over the nasal bones.<br>• <b>Maxillary / Mandibular regions</b> — jaws.<br>• <b>Buccal region</b> — cheek.<br>• <b>Mental region</b> — chin.<br>• <b>Otic region</b> — around ear.<br>• <b>Throatlatch</b> — angle of jaw to top of neck.<br><br><b>II. NECK REGIONS:</b><br>• <b>Crest</b> — dorsal neck.<br>• <b>Lateral cervical region</b> — sides of neck.<br>• <b>Jugular furrow</b> — palpable groove containing jugular vein, between the brachiocephalicus & sternomandibularis muscles. <b>Site of jugular venepuncture</b> in cattle and horse.<br>• <b>Laryngeal region</b> — over larynx.<br>• <b>Tracheal region</b> — over cervical trachea.<br><br><b>III. TRUNK REGIONS:</b><br>• <b>Withers</b> — between dorsal scapular borders.<br>• <b>Dorsal region (back)</b> — thoracic vertebrae.<br>• <b>Loin (lumbar region)</b> — over lumbar vertebrae; commercially the 'sirloin'.<br>• <b>Croup</b> — sacral region; tuber sacrale to tail base.<br>• <b>Pectoral region</b> — front of chest (brisket in cattle).<br>• <b>Costal region</b> — over ribs.<br>• <b>Abdominal region</b> — divided into epi- meso- hypogastrium.<br>• <b>Paralumbar fossa (Hungry hollow):</b> Triangular depression between last rib, tuber coxae, transverse processes of lumbar vertebrae. <b>Standing rumenotomy/caesarean site.</b><br>• <b>Flank</b> — lateral abdominal wall.<br>• <b>Inguinal region</b> — fold of skin between abdomen and thigh.<br>• <b>Perineal region</b> — between anus + tail base + ischium.<br><br><b>IV. LIMB REGIONS:</b><br><b>Forelimb:</b> Shoulder → Arm (Brachium) → Elbow (Cubitus) → Forearm (Antebrachium) → Carpus (Knee in horse) → Metacarpus (Cannon) → Fetlock → Pastern → Hoof.<br><b>Hindlimb:</b> Hip → Thigh (Femur) → Stifle (Genu) → Leg (Crus) → Hock (Tarsus) → Metatarsus (Cannon) → Fetlock → Pastern → Hoof.<br><br><b>JOINT REGIONS</b> are visible swellings/landmarks over each major synovial joint — palpation gives instant clinical info on swelling, heat, pain, crepitus.",
            comparative: [
                { species: "Horse", note: "'Knee' in horse = carpus (NOT stifle). 'Hock' = tarsus. Don't confuse with human terminology." },
                { species: "Cattle", note: "Hook (tuber coxae), Pin (tuber ischiadicum), Withers (dorsal scapular cartilages) — used for measuring height & body condition." }
            ],
            clinical: "<b>Conformation Scoring:</b> Standard examination of trunk + limb regions. <b>Localised lameness:</b> Region naming is essential when communicating between vet, owner, surgeon.",
            imgCode: "surface_regions"
        },
        {
            title: "Palpable Bony Prominences, Lymph Nodes & Arteries",
            desc: "<b>Palpable bovine bony landmarks:</b> scapular cartilage at the withers, tuber coxae, tuber sacrale, tuber ischiadicum, olecranon, calcaneal tuber, accessible vertebral processes, mandible and facial bones.<br><br><b>Lymph nodes:</b> Accessibility is species- and patient-dependent. Mandibular, parotid, superficial cervical, subiliac and superficial inguinal/supramammary nodes may be examined where superficial. Medial retropharyngeal nodes are deep and are not routine external palpation sites; the popliteal node is readily assessed in dogs but is not a universal large-animal landmark.<br><br><b>Routine arterial pulse sites:</b> equine facial artery at the mandibular border, canine/feline femoral artery at the medial thigh and bovine median caudal artery on the ventral tail. The common carotid is deep and must not be promoted as an ordinary superficial pulse site in the jugular furrow.",
            eliteDesc: "<b>PALPABLE LANDMARKS</b><br><br>Palpable bones, superficial lymph nodes and pulse sites differ among species. Mandibular, parotid, superficial cervical, subiliac and superficial inguinal nodes may be assessed where accessible. Medial retropharyngeal nodes are deep and are not routinely palpated externally or “per nasal.” Pulse sites include the bovine median caudal artery, equine facial artery and canine/feline femoral artery. Lymph-node enlargement is an important finding but is not by itself diagnostic of bovine leukosis or lymphoma.",
            comparative: [
                { species: "Ox", note: "Coccygeal pulse + jugular venepuncture = standard." },
                { species: "Horse", note: "Facial artery pulse + jugular vein. Digital pulse at fetlock — increased = laminitis." },
                { species: "Dog", note: "Femoral pulse + cephalic vein — primary clinical sites." }
            ],
            clinical: "Daily clinical exam = 'TPR' (Temperature, Pulse, Respiration) + LN palpation + body condition score using palpable bony points.",
            imgCode: "palpable_landmarks"
        },
        {
            title: "Surface Veins for Venepuncture & Injection Sites",
            desc: "<b>Venepuncture sites</b><br><br>Large animals commonly use the external jugular vein; cattle also use the median caudal vein for blood collection. Dogs commonly use cephalic or lateral saphenous veins, cats cephalic or medial saphenous veins, and both may use the jugular. Birds commonly use right jugular, basilic/cutaneous ulnar or medial metatarsal veins depending on size and condition. The bovine subcutaneous abdominal or milk vein is not a recommended routine or rescue IV site.",
            eliteDesc: "<b>SAFE VENOUS ACCESS</b><br><br>Select a vein by species, procedure, patient condition and operator skill. In the jugular furrow, know the deep relationship of carotid artery and vagosympathetic trunk and use appropriate restraint and needle direction. Small-animal peripheral catheters usually use cephalic or saphenous veins; femoral venous catheterization is not a routine first-line site. Catheters should be inspected and replaced when clinically indicated rather than by an inflexible universal 72-hour rule. Avoid the milk vein because severe hemorrhage or hematoma can occur.",
            comparative: [{"species":"Cattle","note":"Jugular for IV access; median caudal vein for many blood samples. Avoid the milk vein."},{"species":"Horse","note":"External jugular is the standard peripheral access site."},{"species":"Dog","note":"Cephalic, lateral saphenous or jugular access according to need."},{"species":"Cat","note":"Cephalic, medial saphenous or jugular access according to need."},{"species":"Bird","note":"Right jugular, basilic/cutaneous ulnar or medial metatarsal veins are selected by species and size."}],
            clinical: "<b>Clinical safety:</b> Use aseptic technique, confirm intravascular placement and monitor the site. Catheter replacement depends on contamination, inflammation, malfunction and ongoing need, not a universal time alone.",
            imgCode: "venepuncture_sites"
        },
        {
            title: "Bone Marrow & Cerebrospinal Fluid Collection Sites",
            desc: "<b>Bone marrow and CSF collection</b><br><br>Sites vary by species, age and patient size and include selected sternebrae, ilium, proximal humerus or femur for marrow and cisternal or lumbar sites for CSF. These are invasive specialist procedures requiring asepsis, appropriate anesthesia/sedation, imaging or verified landmarks, and patient-specific needle and volume selection. A lumbosacral epidural site is not automatically a CSF site.",
            eliteDesc: "<b>SAFE COLLECTION PRINCIPLES</b><br><br>Choose marrow and CSF sites from current species-specific clinical references. Do not publish a universal sternal depth, needle gauge or collection volume. Cisternal sampling can injure the brainstem, and lumbar sampling can injure neural structures; neither is risk-free. Suspected rabies or transmissible spongiform encephalopathy requires regulated biosafety and diagnostic pathways and should not be presented as an ordinary indication for CSF tap. Reference intervals vary with species, site, laboratory and method.",
            comparative: [{"species":"Ox","note":"Marrow and CSF sites are selected by age and clinical indication; sacrococcygeal access is epidural, not a CSF tap."},{"species":"Horse","note":"Adult CSF collection requires equine-specific standing image-guided or anesthetized techniques; it is not a routine blind standing AO tap."},{"species":"Dog/Cat","note":"Cisternal or lumbar CSF and iliac/proximal-humeral marrow sites require sedation or anesthesia and specialist landmarks."}],
            clinical: "<b>Safety:</b> Stop if anatomy, patient position or needle depth is uncertain. Avoid aspiration that could traumatize neural tissue, interpret blood contamination cautiously, and submit CSF promptly using laboratory-specific handling requirements.",
            imgCode: "csf_marrow_sites"
        }
    ],

    // =====================================================
    // IMAGING PRINCIPLES
    // =====================================================
    "Imaging Principles": [
        {
            title: "Radiography (X-Ray) — Principles & Application",
            desc: "<b>X-Ray Basics:</b><br>• Discovered by W.C. Roentgen, 1895.<br>• X-rays = high-energy electromagnetic radiation; pass through tissues differentially.<br>• Bone (calcium) absorbs most X-rays → appears WHITE (radiopaque).<br>• Air (lung, gas) absorbs least → BLACK (radiolucent).<br>• Soft tissue & fluid → SHADES OF GREY.<br><br><b>5 Radiographic Densities:</b> Metal > Bone > Soft tissue/Fluid > Fat > Air.<br><br><b>Standard Veterinary Radiographs:</b><br>• Lateral (LM/RL).<br>• Dorso-ventral (DV) or Ventro-dorsal (VD).<br>• Oblique projections (limbs, skull).<br><br><b>Uses:</b> fractures, foreign bodies, joint disease, cardiac silhouette (Vertebral Heart Score), bladder/kidney stones, dental disease.",
            eliteDesc: "<b>RADIOGRAPHY</b><br><br>X-rays are attenuated according to material composition, thickness and beam energy. The five basic radiographic opacities are metal/mineral, soft tissue-fluid, fat and gas, but no material is “completely opaque” under every exposure. Obtain at least two orthogonal projections for most lesions and add views as indicated. Contrast choice depends on the organ and suspected disease; if gastrointestinal perforation is suspected, use an appropriate water-soluble iodinated agent rather than barium. Radiation work follows ALARA, dosimetry and local occupational regulations. Pregnancy does not automatically prohibit a trained worker from operating equipment when regulatory dose controls are met.",
            comparative: [
                { species: "Cattle", note: "Limited utility on adults due to size — used mainly for limb fractures, head, calves." },
                { species: "Horse", note: "Limb radiography is important in lameness investigation. At least orthogonal projections and additional oblique or special views are chosen according to the suspected lesion; a fixed four-view rule is not universal." },
                { species: "Dog/Cat", note: "Whole-body imaging routine — staple of small-animal practice." }
            ],
            clinical: "<b>Clinical interpretation:</b> Radiolucent foreign bodies may require ultrasound, endoscopy or selected contrast studies. Free peritoneal gas depends on species, positioning and projection and has several causes; it is not automatically proof of bowel rupture.",
            imgCode: "radiography_intro"
        },
        {
            title: "Ultrasonography — Principles & Application",
            desc: "<b>Ultrasound basics:</b><br>• A transducer emits high-frequency sound pulses and receives returning echoes. Veterinary probes span a broad frequency range; lower frequencies provide greater penetration and higher frequencies provide finer superficial resolution.<br>• Diagnostic ultrasound is non-ionizing and is widely used in pregnant animals, while appropriate output and exposure principles should still be followed.<br><br><b>Echogenicity terms are relative:</b><br>• <b>Anechoic:</b> no detectable internal echoes under the selected settings. Simple fluid is often anechoic, but blood, urine or bile may contain visible echoes.<br>• <b>Hypoechoic:</b> less echogenic than the reference tissue.<br>• <b>Isoechoic:</b> equal echogenicity to a stated reference tissue—not equal physical density.<br>• <b>Hyperechoic:</b> more echogenic than the reference tissue.<br>• <b>Acoustic shadowing:</b> marked attenuation behind structures such as mineral, bone or gas interfaces.<br><br><b>Uses:</b> reproductive examination, abdominal and thoracic organs, echocardiography, ophthalmic imaging, musculoskeletal structures and image-guided procedures.",
            eliteDesc: "<b>ULTRASONOGRAPHY</b><br><br>Ultrasound uses pulsed high-frequency sound and returning echoes to form real-time images. Frequency is selected to balance resolution and penetration. Echogenicity is relative and organ comparisons are species-specific; spleen and liver should not be used as universally isoechoic examples. Fetal heart rate must be interpreted by species, gestational age, maternal heart rate and trend; a universal value above 120 bpm does not prove viability. Ultrasound is non-ionizing but remains operator-dependent and limited by bone and gas.",
            comparative: [{"species":"Cattle","note":"Transrectal ultrasonography is widely used for reproductive examination and pregnancy diagnosis."},{"species":"Horse","note":"Transrectal reproductive scanning and musculoskeletal tendon/ligament ultrasonography are common."},{"species":"Dog/Cat","note":"Abdominal and cardiac ultrasonography are important diagnostic tools; findings and organ echogenicity are species- and disease-specific."}],
            clinical: "<b>Clinical use:</b> Ultrasound can guide aspiration or biopsy when appropriate. Doppler assesses blood flow. Pregnancy diagnosis timing and fetal-viability criteria must be species- and gestation-specific rather than described as one universal economic test or heart-rate cutoff.",
            imgCode: "ultrasound_intro"
        }
    ]
};
