// =========================================================
// FORELIMB DATA MODULE
// Contains: Osteology, Myology, Arthrology, Neurology, Angiology
// Status: Osteology [Complete], Neurology [Complete], Others [Pending]
// =========================================================

if (typeof atlasData === 'undefined') {
    var atlasData = {};
}

atlasData["Forelimb"] = {
    "Osteology": [
        {
            title: "Scapula",
            desc: "Triangular flat bone (os planum). <br><br><b>Ox Standard:</b><br>- Spine is sinuous and divides lateral surface into 1:3 ratio (Supra:Infra).<br>- Acromion process is pointed and distinct.<br>- Subscapular fossa is shallow.<br>- Glenoid cavity is circular without a notch.",
            eliteDesc: "<b>SCAPULA — THE SHOULDER BLADE</b><br><br>The scapula is a flat triangular bone that forms the proximal part of the forelimb girdle. In domestic mammals it has NO bony attachment to the axial skeleton — it is suspended from the trunk by a muscular sling ('synsarcosis'), which lets it glide cranio-caudally to add length to the stride.<br><br><b>BORDERS (3):</b><br>• <b>Cranial border</b> — slightly convex; gives origin to supraspinatus.<br>• <b>Caudal border</b> — thicker; gives origin to teres major and the long head of triceps.<br>• <b>Dorsal border</b> — bears the <b>scapular cartilage (cartilago scapulae)</b> in large herbivores — adds 3-5 cm of attachment area.<br><br><b>ANGLES (3):</b><br>• <b>Cranial angle</b> — between cranial and dorsal borders.<br>• <b>Caudal angle</b> — between caudal and dorsal borders.<br>• <b>Ventral angle (glenoid angle)</b> — distal; bears the glenoid cavity.<br><br><b>SURFACES (2):</b><br>• <b>Lateral (Costal-opposing) surface</b> — divided by the <b>scapular spine</b> into:<br>  – <b>Supraspinous fossa</b> (cranial — narrow in ox, ratio 1:3) for supraspinatus.<br>  – <b>Infraspinous fossa</b> (caudal — wide) for infraspinatus.<br>• <b>Medial (Costal) surface</b> — has the <b>subscapular fossa</b> for subscapularis (shallow in ox; deep in horse).<br><br><b>KEY FEATURES:</b><br>• <b>Spine of scapula</b> — vertical ridge on lateral surface; sinuous (S-shaped) in ox; ends distally as the <b>ACROMION</b> in ox & dog (ABSENT in horse).<br>• <b>Tuber spinae</b> — thickening of the middle of the spine; very prominent in horse, replaces acromion.<br>• <b>Glenoid cavity</b> — shallow oval socket at ventral angle; receives the head of humerus → shoulder joint.<br>• <b>Supraglenoid tubercle</b> — small projection cranial to glenoid; origin of <b>biceps brachii</b>.<br>• <b>Coracoid process</b> — small medial projection of supraglenoid tubercle; origin of coracobrachialis.<br>• <b>Suprascapular nerve relation</b> — the nerve turns around the cranial border/neck of the scapula, where it is vulnerable to trauma; it does not cross a notch at the base of the spine.<br><br><b>UG MEMORY HOOK:</b> 'Triangular bone, 3 borders, 3 angles, 2 surfaces, 1 spine ending in acromion (in ox/dog) or tuber spinae (in horse).'",
            comparative: [
                { species: "Horse", note: "Acromion ABSENT. Spine fades distally. Prominent 'Tuber Spinae' present. Glenoid notch present." },
                { species: "Dog", note: "Acromion prominent with 'Hamate Process'. Spine high, 1:1 fossa ratio." },
                { species: "Pig", note: "Tuber spinae is very prominent and recurved caudally." },
                { species: "Fowl", note: "Saber-like blade. No spine/fossae. Parallel to vertebrae." }
            ],
            clinical: "<b>Sweeney Shoulder (Horse):</b> Atrophy of supra/infraspinatus muscles due to suprascapular nerve damage as it crosses the neck of the scapula.",
            imgCode: "scapula",
            img: "images/scapula-ox-horse-dog-annotated.png",
            imgAlt: "Annotated comparative scapula image showing ox, horse, and dog landmarks",
            imgCaption: "Comparative scapula landmarks: ox, horse, and dog."
        },
        {
            title: "Humerus",
            desc: "Robust, short, twisted long bone.<br><br><b>Ox Standard:</b><br>- Massive Greater Tubercle (overhangs groove).<br>- Intertubercular (Bicipital) Groove is undivided.<br>- Musculospiral groove is distinct.<br>- NO Supratrochlear foramen.",
            eliteDesc: "<b>HUMERUS — BONE OF THE ARM (BRACHIUM)</b><br><br>A robust, short, twisted (helical) long bone forming the only bone of the upper arm. It bears the body weight transmitted from scapula → forearm.<br><br><b>PROXIMAL END (SHOULDER):</b><br>• <b>Head (caput humeri)</b> — articulates with the glenoid cavity. The joint is spheroidal in form but, in large domestic animals, functions mainly in flexion and extension because of muscular constraints.<br>• <b>Neck</b> — slight constriction below the head.<br>• <b>Greater Tubercle (Tuberculum majus)</b> — laterally placed; <b>massive in ox</b>, overhangs the bicipital groove. Insertion of supraspinatus and infraspinatus; other attachments are species-specific. Teres minor inserts on the teres minor tuberosity.<br>• <b>Lesser Tubercle (Tuberculum minus)</b> — medial, smaller; insertion of subscapularis. Teres major and latissimus dorsi insert on the teres major tuberosity.<br>• <b>Intertubercular (Bicipital) Groove</b> — between the two tubercles; transmits the tendon of biceps brachii. <b>Undivided in ox</b>; <b>divided by an intermediate tubercle in HORSE</b> — the basis of the equine stay apparatus.<br><br><b>SHAFT (BODY):</b><br>• Cylindrical proximally, somewhat triangular distally.<br>• <b>Deltoid Tuberosity</b> — large bony prominence on the cranio-lateral surface; insertion of deltoid + brachiocephalicus.<br>• <b>Tricipital Line / Crest</b> — connects deltoid tuberosity to greater tubercle.<br>• <b>Musculospiral Groove (Sulcus brachialis)</b> — diagonal groove on caudo-lateral aspect; <b>lodges the radial nerve + brachial artery branches</b>. <b>The radial nerve is highly vulnerable here</b> in recumbent cattle ('downer cow' radial paralysis).<br>• <b>Nutrient Foramen</b> — usually on caudal surface of mid-shaft.<br><br><b>DISTAL END (ELBOW):</b><br>• <b>Condyle of humerus</b> — articular surface for forearm; has 2 parts:<br>  – <b>Trochlea</b> (medial, larger) — pulley shape; articulates with ulna.<br>  – <b>Capitulum</b> (lateral) — articulates with radius.<br>• <b>Medial + Lateral Epicondyles</b> — non-articular ridges above the condyle; origin of forearm muscles. The medial epicondyle (= 'flexor epicondyle') is the bovine 'funny bone' — ulnar nerve passes caudally.<br>• <b>Olecranon Fossa</b> — deep depression on caudal surface; receives anconeal process of ulna in extension.<br>• <b>Coronoid (Radial) Fossa</b> — smaller, on cranial surface; receives radius head in flexion.<br>• <b>Supratrochlear Foramen</b> — hole connecting olecranon and coronoid fossae; <b>PRESENT in DOG</b>; <b>ABSENT in OX, HORSE, PIG</b> (solid bone for weight support).<br><br><b>UG MEMORY:</b> 'Head + 2 tubercles + groove proximally; condyle + 2 epicondyles + 2 fossae distally; spiral groove for radial nerve in mid-shaft.'",
            comparative: [
                { species: "Horse", note: "Intermediate Tubercle present (divides bicipital groove). Greater Tubercle forms 'Point of Shoulder'." },
                { species: "Dog", note: "Supratrochlear Foramen present (hole between condyles). Greater tubercle is lower than head." },
                { species: "Pig", note: "Greater tubercle almost closes the groove into a foramen." },
                { species: "Fowl", note: "Pneumatic bone (air-filled). Pectoral crest replaces deltoid tuberosity." }
            ],
            clinical: "<b>Radial Nerve Paralysis:</b> Vulnerable in the musculospiral groove. Causes dropped elbow and inability to extend the carpus.",
            imgCode: "humerus"
        },
        {
            title: "Radius & Ulna",
            desc: "Weight-bearing column.<br><br><b>Ox Standard:</b><br>- Fused bones (No pronation/supination).<br>- Ulna is complete (reaches carpus).<br>- 2 Interosseous spaces (Proximal & Distal).<br>- Lateral Styloid process belongs to ULNA.",
            eliteDesc: "<b>RADIUS & ULNA — BONES OF THE FOREARM (ANTEBRACHIUM)</b><br><br>The forearm of the ox is a fused, weight-bearing column. The radius is the larger weight-bearer; the ulna is reduced but COMPLETE (extends from olecranon to carpus, unlike horse where its distal half is vestigial).<br><br><b>RADIUS — main weight-bearer:</b><br><b>Proximal end:</b><br>• <b>Head (Fovea capitis radii)</b> — concave articular surface for capitulum of humerus; saddle-shaped.<br>• <b>Radial Tuberosity</b> — medial, just below head; insertion of biceps brachii.<br>• <b>Neck</b> — slight constriction.<br><b>Shaft:</b><br>• Slightly curved cranially.<br>• <b>Cranial border (sharp)</b> = palpable subcutaneously — fracture site.<br><b>Distal end:</b><br>• <b>Trochlea radii</b> — articular surface for proximal carpal row.<br>• <b>Medial Styloid Process</b> — bony bump on medial side; in OX the lateral styloid is part of ULNA.<br><br><b>ULNA — reduced but functional:</b><br><b>Proximal end:</b><br>• <b>Olecranon</b> — large beak-like projection forming the 'point of the elbow'; insertion of triceps brachii.<br>• <b>Anconeal Process</b> — projects forward from olecranon; locks into olecranon fossa during full extension.<br>• <b>Trochlear Notch (Semilunar)</b> — concave articular surface that grips the trochlea of humerus.<br>• <b>Coronoid processes</b> — form part of the trochlear notch and participate in the humeroulnar articulation.<br><b>Shaft:</b> Lies caudal to radius; fused with it.<br><b>Distal end:</b><br>• <b>Lateral Styloid Process</b> — in OX, this is part of ULNA (in horse it belongs to radius!).<br><br><b>RELATIONSHIP IN OX:</b><br>• Radius and ulna are FUSED at proximal + distal ends, with 2 interosseous spaces (proximal + distal) closed by interosseous membrane.<br>• <b>NO pronation / supination</b> — the cursorial design locks the limb in pronation as a rigid column for forward locomotion (energy-efficient running).<br><br><b>UG MEMORY:</b> 'Ox = fused, complete ulna, 2 spaces, lateral styloid = ulna. Horse = fused, ulna shaft fades, 1 space, lateral styloid = radius. Dog = SEPARATE, mobile, full pronation/supination.'",
            comparative: [
                { species: "Horse", note: "Ulna fuses mid-shaft (Distal half is vestigial). Lateral Styloid belongs to RADIUS. Only 1 proximal space." },
                { species: "Dog", note: "Separate bones. Mobile (allows pronation). Ulna has trochlear notch." },
                { species: "Fowl", note: "Ulna is larger than Radius. 'Quill Knobs' present on Ulna for feather attachment." }
            ],
            clinical: "<b>Fractures:</b> In horses, ulnar fractures usually involve the olecranon (dropped elbow) as the distal ulna is fused.",
            imgCode: "radius_ulna"
        },
        {
            title: "Carpus (Knee)",
            desc: "Complex hinge joint.<br><br><b>Ox Standard (6 Bones):</b><br>- Proximal: Radial, Intermediate, Ulnar, Accessory.<br>- Distal: C1 Absent, C2+C3 Fused, C4 present.",
            eliteDesc: "<b>CARPUS — THE 'KNEE' OF THE HORSEMAN</b><br><br>The carpus is the equivalent of the human wrist — but in equids it is colloquially called the 'knee' (NOT to be confused with the stifle, which is the true hindlimb knee). It is a complex composite hinge joint between the forearm and metacarpus.<br><br><b>OX CARPUS — 6 BONES IN 2 ROWS:</b><br><b>Proximal Row (4 bones, lateral → medial):</b><br>• <b>Accessory Carpal (Cu)</b> — projects backward like a horn; insertion of flexor carpi ulnaris and ulnaris lateralis. Easily palpable.<br>• <b>Ulnar Carpal (Cui)</b> — articulates with ulna proximally.<br>• <b>Intermediate Carpal (Ci)</b> — between radius and ulna.<br>• <b>Radial Carpal (Cr)</b> — articulates with radius proximally.<br><br><b>Distal Row (2 bones in ox):</b><br>• <b>C1 (1st carpal)</b> — <b>ABSENT in OX</b>.<br>• <b>C2+C3 (FUSED)</b> — single bone — characteristic of ruminants.<br>• <b>C4 (4th carpal)</b> — separate, lateral.<br><br><b>JOINT LEVELS (3 in ox):</b><br>1. <b>Antebrachiocarpal joint</b> — between forearm and proximal row → highest mobility.<br>2. <b>Mid-carpal joint</b> — between rows.<br>3. <b>Carpo-metacarpal joint</b> — between distal row and metacarpus → little movement.<br><br><b>LIGAMENTS:</b><br>• Medial + Lateral Collateral ligaments.<br>• Multiple short interosseous ligaments connect adjacent bones.<br>• <b>Palmar carpal ligament</b> + <b>flexor retinaculum</b> hold flexor tendons; together with the accessory carpal bone they form the <b>CARPAL CANAL</b> on the palmar aspect — through it pass the median nerve, median artery, deep digital flexor tendon and superficial digital flexor tendon.<br><br><b>SYNOVIAL STRUCTURES:</b><br>• The carpus has species-specific synovial compartments. The middle carpal and carpometacarpal compartments commonly communicate; communications must be considered clinically.<br>• Tendon sheaths around flexor tendons.<br>• Subcutaneous bursa over cranial carpus → <b>'precarpal hygroma'</b> in chronic 'kneeling' cattle.<br><br><b>UG MEMORY:</b> 'Ox = 6 (proximal: 4 + distal: 2 — C1 lost, C2+3 fused). Horse = 7-8 (full row except C1 inconstant). Dog = 7 (Cr + Ci fused into intermedioradial). Pig = 8 (full primitive).'",
            comparative: [
                { species: "Horse", note: "7-8 Bones. C3 is massive (load bearing). C1 vestigial/variable." },
                { species: "Dog", note: "7 Bones. Radial + Intermediate fused into 'Intermedioradial' bone." },
                { species: "Pig", note: "8 Bones (Complete pattern retained)." }
            ],
            clinical: "<b>Slab Fractures (Horse):</b> Common in C3 due to race fatigue.",
            imgCode: "carpus"
        },
        {
            title: "Metacarpus (Cannon)",
            desc: "<b>Ox Standard:</b><br>- Fused Mc III & IV (Cannon Bone).<br>- Dorsal longitudinal groove.<br>- Two distal trochleae for digits.<br>- Mc V is a vestigial lateral 'button'.",
            eliteDesc: "<b>METACARPUS — THE CANNON BONE</b><br><br>The metacarpus is the segment between the carpus and the digits. In ox it is a single fused 'cannon bone' (Mc III + Mc IV), reflecting the cloven-hoof design.<br><br><b>OX METACARPUS:</b><br>• Single large bone formed by fusion of <b>3rd + 4th metacarpals</b> (Mc III + Mc IV) early in fetal life.<br>• A <b>dorsal longitudinal groove</b> on the front face marks where the two original bones fused — useful in distinguishing metacarpus from metatarsus (groove deeper in metatarsus).<br>• <b>Distal end</b> bears <b>two trochleae</b> (one for each digit) separated by a notch.<br>• Each trochlea has a sagittal ridge that fits between the two proximal sesamoids of its digit at the fetlock.<br>• <b>Mc V</b> = vestigial; often a small 'button' on the latero-proximal aspect.<br>• <b>Mc II</b> = absent or extremely reduced.<br>• Internally the bone retains TWO medullary cavities that join at the centre — evidence of fusion.<br><br><b>HOW TO TELL FORELIMB CANNON FROM HINDLIMB CANNON:</b><br>• <b>Forelimb (metacarpal) cannon</b> — SHORTER, more rounded in cross-section, dorsal groove shallow.<br>• <b>Hindlimb (metatarsal) cannon</b> — LONGER, more square / quadrilateral, dorsal groove deeper.<br><br><b>HORSE METACARPUS:</b><br>• <b>Mc III</b> = main cannon bone (single weight-bearing column for the single digit).<br>• <b>Mc II + Mc IV</b> = <b>'splint bones'</b> — vestigial, taper distally to small 'buttons'; bound to Mc III by interosseous ligament.<br>• Splint bones don't bear weight but their inflammation = <b>'splints'</b> (common young horse lameness).<br><br><b>DOG METACARPUS:</b><br>• 5 separate metacarpals (full pentadactyl pattern).<br>• Mc I supports the dewclaw (digit I).<br>• Mc II-V bear weight on their respective digits.<br><br><b>FOWL METACARPUS:</b><br>• <b>Carpometacarpus</b> = fusion of carpal + metacarpal bones into a single rigid bone of the wing.<br><br><b>UG MEMORY:</b> 'Ox = MC III+IV fused = cannon. Horse = only MC III is cannon, MC II + IV = splints. Dog = 5 separate. Fowl = carpometacarpus fused.'",
            comparative: [
                { species: "Horse", note: "Mc III is the Cannon. Mc II & IV are 'Splint Bones' (vestigial, non-weight bearing)." },
                { species: "Dog", note: "5 Separate Metacarpals. Mc I is dewclaw." },
                { species: "Fowl", note: "Carpometacarpus (Fused carpus + metacarpus)." }
            ],
            clinical: "<b>Splints (Horse):</b> Inflammation of the interosseous ligament between Cannon and Splint bones.",
            imgCode: "metacarpus"
        },
        {
            title: "Digits",
            desc: "<b>Ox Standard (Artiodactyl):</b><br>- 2 Functional Digits (III & IV).<br>- 2 Accessory Digits (Dewclaws).<br>- P3 is Cloven (coffin bone).<br>- 2 Proximal Sesamoids per digit (4 total).",
            eliteDesc: "<b>DIGITS OF THE OX — THE CLOVEN HOOF</b><br><br>The ox is an <b>Artiodactyl</b> ('even-toed') — it walks on TWO functional digits (III and IV), with two non-weight-bearing dewclaws (II and V).<br><br><b>FUNCTIONAL DIGITS (III medial, IV lateral):</b><br>Each functional digit has 3 phalanges + 3 sesamoid bones.<br><br><b>P1 (Proximal Phalanx) — 'long pastern bone':</b><br>• Long bone with proximal articular surface (cup) for cannon trochlea.<br>• Distal end articulates with P2.<br>• Site of attachment for several flexor/suspensory ligaments.<br><br><b>P2 (Middle Phalanx) — 'short pastern bone':</b><br>• Short and wedge-shaped.<br>• Lies inside the hoof partly.<br><br><b>P3 (Distal Phalanx) — 'coffin bone' / 'os ungulare' / 'pedal bone':</b><br>• <b>The cloven hoof bone</b> — encased entirely within the hoof horn.<br>• Pyramidal in shape; has axial (medial) + abaxial (lateral) surfaces.<br>• Bears the <b>solar surface</b> below + the <b>extensor process</b> on top (cranial) for insertion of common digital extensor.<br>• Receives weight via P2 above and the corium (laminar attachment to hoof wall) around it.<br><br><b>SESAMOID BONES (per digit):</b><br>• <b>2 Proximal Sesamoids</b> — at the back of the fetlock joint, embedded in the suspensory ligament; they articulate with the trochlea of cannon → form the FETLOCK joint together.<br>• <b>1 Distal Sesamoid (Navicular)</b> — small boat-shaped bone behind P3, positioned against the deep surface of the deep digital flexor tendon; the tendon glides over its flexor surface with the navicular bursa interposed. Lies inside the hoof.<br><br><b>DEWCLAWS (Digits II + V):</b><br>• Small, non-weight-bearing.<br>• They contain variable rudimentary phalangeal elements and do not consistently possess a complete P1-P2-P3 series.<br>• Located above and behind the fetlock.<br>• Cosmetically removed in some breeds.<br><br><b>HOOF CAPSULE:</b><br>The horn capsule that covers P3 + part of P2. Composed of:<br>• <b>Wall (paries)</b> — visible from outside; grows down from coronet.<br>• <b>Sole (solea)</b> — bottom; grows from solar corium.<br>• <b>Bulb (heel)</b> — soft caudal area.<br>• <b>White line (zona alba)</b> — junction of wall + sole; weakest area, common laminitis site.<br>• Each functional digit has its own complete horn capsule → 'cloven hoof' = 2 horn capsules per foot.<br><br><b>HORSE DIGIT (single, digit III only):</b><br>• Same 3 phalanges + 2 proximal sesamoids + 1 distal (navicular) sesamoid.<br>• P3 is the 'coffin bone' inside the single hoof; bears wings, retrossal processes, palmar processes.<br>• Hoof capsule encloses everything.<br><br><b>DOG DIGIT (digits II-V functional, I = dewclaw):</b><br>• Each digit has 3 phalanges + sesamoids.<br>• P3 is 'ungual crest' = claw-shaped — encased in the keratinous claw.<br>• Digital pads (toe + metacarpal pads) bear weight (NOT the bone surfaces directly).<br><br><b>UG MEMORY:</b> 'Ox = 2 functional + 2 dewclaws, P3 cloven; Horse = 1 functional, P3 coffin + navicular; Dog = 4 functional + dewclaw, P3 ungual claw.'",
            comparative: [
                { species: "Horse", note: "1 Functional Digit (III). P3 is Coffin Bone with Retrossal processes. Navicular bone present." },
                { species: "Dog", note: "Digits II-V functional. P3 is Ungual Crest (Claw)." },
                { species: "Pig", note: "4 Digits. III & IV main, II & V also functional on soft ground." }
            ],
            clinical: "<b>Laminitis:</b> Inflammation and structural failure of the hoof corium/laminar apparatus. Displacement of P3 is a possible sequel, not the definition. Bovine sole ulcer is a distinct claw-horn lesion and must not be used as a synonym for laminitis or coriosis."
        }
    ],
    
    "Myology": [
    // ==================== EXTRINSIC SUPERFICIAL LAYER ====================
    {
        title: "Trapezius Muscle",
        desc: "<b>Type:</b> Extrinsic, Superficial Layer<br><br><b>Origin:</b> Nuchal ligament (C2-Thoracic inlet) [Cervical part]; Supraspinous ligament (T2-T10/12) [Thoracic part]<br><br><b>Insertion:</b> Scapular spine (cervical part along dorsal length; thoracic part on dorsal third)<br><br><b>Function:</b> Elevates shoulder; cervical part protracts (draws craniodorsally), thoracic part retracts (draws caudodorsally).",
        eliteDesc: "<b>SUPERFICIAL SHOULDER SUSPENSION SYSTEM</b><br><br>The trapezius is a broad triangular sheet classified as the primary extrinsic elevator and abductor of the scapula. Unlike equines where the separation is more distinct, the bovine trapezius is divided into two parts by a tendinous aponeurosis.<br><br><b>FIBER ARCHITECTURE:</b><br>• <b>Pars Cervicalis (Cranial):</b> Originates from the funicular nuchal ligament extending from the axis (C2) to the thoracic inlet. Fibers run caudoventrally.<br>• <b>Pars Thoracica (Caudal):</b> Originates from the supraspinous ligament of thoracic vertebrae (T2 to T10 or T12). Fibers run cranioventrally.<br>• Both parts converge on the scapular spine, creating a force-coupling mechanism for multidirectional control.<br><br><b>BIOMECHANICAL DYNAMICS:</b><br>When acting unilaterally in the non-weight-bearing limb, the cervical component draws the scapula craniodorsally (protraction), assisting the forward swing phase. The thoracic component draws the scapula caudodorsally (retraction). When acting bilaterally, they fix the scapula against the trunk, providing stability during weight bearing and shock absorption.<br><br><b>NEURAL SUPPLY:</b> Dorsal branch of the Accessory nerve (Cranial Nerve XI). Damage leads to shoulder drooping and atrophy, though true clinical 'Sweeny' typically involves the suprascapular nerve.",
        comparative: [
            { species: "Horse", note: "Separation between cervical and thoracic parts is much more distinct; cervical part originates from C2-C7." },
            { species: "Dog", note: "Divided into cervical, thoracic, and lumbar parts; more extensive origin." }
        ],
        clinical: "<b>Accessory Nerve Injury:</b> Damage in the cervical region leads to shoulder atrophy and depression, though less common than suprascapular neuropathy for instability.",
        imgCode: "trapezius"
    },
    {
        title: "Omotransversarius",
        desc: "<b>Type:</b> Extrinsic, Superficial Layer<br><br><b>Origin:</b> Principally the wing of the atlas; exact cervical attachment varies by species<br><br><b>Insertion:</b> Distal end of scapular spine and acromion process<br><br><b>Function:</b> Advances limb (protraction); unilateral contraction flexes neck laterally; bilateral contraction extends head/neck.",
        eliteDesc: "<b>THE CRANIAL DRAW BRIDGE</b><br><br>The omotransversarius is a strap-like muscle representing a critical distinction in bovine anatomy: it is a <b>separate muscle from the brachiocephalicus</b>, and it is also a distinct muscle in the horse, although fascial blending can occur.<br><br><b>TOPOGRAPHIC COURSE:</b> Extends obliquely from the cranial cervical vertebrae to the shoulder, passing over the cranial border of the scapula deep to the trapezius. It forms a functional unit connecting the head/neck directly to the limb.<br><br><b>FUNCTIONAL SYNTHESIS:</b> When the limb is fixed (stance phase), contraction pulls the neck toward the limb; when the limb is free (swing phase), it draws the limb cranially. This reciprocity is essential for coordinating head position with limb advancement during grazing locomotion.<br><br><b>SURGICAL LANDMARK:</b> The muscle serves as a critical landmark for the <b>superficial cervical lymph nodes (prescapular lymph nodes)</b>, located deep to this muscle and cranial to the supraspinatus. Essential landmark for palpation/biopsy in cattle suspected of lymphosarcoma or tuberculosis.",
        comparative: [
            { species: "Horse", note: "A distinct omotransversarius is present, although fascial blending may occur." },
            { species: "Dog", note: "Similar to ox as a distinct muscle; larger relative to body size." }
        ],
        clinical: "<b>Prescapular Lymph Node Access:</b> Surgical approach for lymph node biopsy requires knowledge of omotransversarius position to avoid hemorrhage.",
        imgCode: "omotransversarius"
    },
    {
        title: "Brachiocephalicus",
        desc: "<b>Type:</b> Extrinsic, Superficial Layer<br><br><b>Origin:</b> Mastoid process of temporal bone [Cleidocephalicus pars mastoidea]; Nuchal crest/ ligament [Cleidocephalicus pars occipitalis]<br><br><b>Insertion:</b> Deltoid tuberosity and crest of humerus<br><br><b>Function:</b> Principal protractor of the limb; flexes neck laterally (unilateral) or extends head/neck (bilateral).",
        eliteDesc: "<b>THE PRIMARY PROTRACTOR</b><br><br>This compound muscle forms the dorsal border of the jugular groove and represents the principal engine for limb advancement (protraction). It is divided by a <b>clavicular intersection</b> (a fibrous intersection used as an anatomical landmark) into two distinct parts.<br><br><b>ANATOMICAL SUBDIVISIONS:</b><br>• <b>Cleidocephalicus:</b> Proximal segment attaching head to limb, further divided into:<br>  - <b>Pars Mastoidea:</b> Attaches to mastoid process of temporal bone—powerful neck flexor<br>  - <b>Pars Occipitalis:</b> Attaches to nuchal crest and ligament—head extensor<br>• <b>Cleidobrachialis:</b> Distal segment from clavicular intersection to deltoid tuberosity and humeral crest—direct limb puller<br><br><b>CLAVICULAR INTERSECTION:</b> This fibrous intersection separates cleidobrachialis from cleidocephalicus. It should not be described as a functional bony clavicle. Cleidocephalicus subdivisions vary among domestic species.<br><br><b>FUNCTIONAL MECHANICS:</b> Most powerful protractor of the free limb. Its line of pull from the head/neck to the humerus allows the animal to swing the heavy limb forward using trunk momentum rather than intrinsic shoulder power alone.",
        comparative: [
            { species: "Horse", note: "Divides into cleidocephalicus and cleidobrachialis; omotransversarius is distinct." },
            { species: "Human", note: "Functionally equivalent to the human sternocleidomastoid and deltoid connections." }
        ],
        clinical: "<b>Jugular Vein Landmark:</b> Forms dorsal border of jugular groove—critical for venipuncture landmarks.",
        imgCode: "brachiocephalicus"
    },
    
    // ==================== EXTRINSIC DEEP LAYER ====================
    {
        title: "Rhomboideus",
        desc: "<b>Type:</b> Extrinsic, Deep Layer<br><br><b>Origin:</b> Funicular nuchal ligament [Cervicis]; Spinous processes T2-T7 [Thoracis]<br><br><b>Insertion:</b> Medial surface of dorsal scapular cartilage<br><br><b>Function:</b> Elevates scapula and draws it medially toward trunk; stabilizes dorsal apex during stance phase.",
        eliteDesc: "<b>THE SCAPULAR ANCHOR</b><br><br>Lying deep to the trapezius, the rhomboideus provides the medial stabilizing force for the scapular girdle, anchoring the dorsal border to the axial skeleton.<br><br><b>SUBDIVISIONS:</b><br>• <b>Rhomboideus Cervicis:</b> Arises from the funicular nuchal ligament (larmier)<br>• <b>Rhomboideus Thoracis:</b> Arises from spinous processes of cranial thoracic vertebrae (T2-T7)<br>• <b>Rhomboideus Capitis:</b> <b>ABSENT or vestigial in ox</b> (critical distinction from carnivores where it reaches the occiput)<br><br><b>INSERTION SPECIFICS:</b> Muscle inserts on the medial surface of the dorsal scapular cartilage (cartilago scapulae), amplifying the surface area for thoracic attachment and shock dissipation.<br><br><b>BIOMECHANICAL ROLE:</b> Presses the cartilage against the trunk, preventing lateral deviation of the scapula during the stance phase. This medial pull is vital for maintaining the rigid column needed for weight support, counteracting the lateral abduction forces generated during weight bearing.",
        comparative: [
            { species: "Dog", note: "Possesses prominent rhomboideus capitis attaching to occiput; absent in ox." },
            { species: "Horse", note: "Similar division but attaches more extensively to cervical vertebrae." }
        ],
        clinical: "<b>Atrophy Indicators:</b> Wasting creates instability at the shoulder dorsal angle, contributing to lateral 'popping' in conjunction with sweeney.",
        imgCode: "rhomboideus"
    },
    {
        title: "Serratus Ventralis",
        desc: "<b>Type:</b> Extrinsic, Deep Layer (Synsarcosis Core)<br><br><b>Origin:</b> Transverse processes of last 4-5 cervical vertebrae [Cervicis]; Lateral surfaces of ribs 1-9 [Thoracis]<br><br><b>Insertion:</b> Facies serrata on proximal medial surface of scapula<br><br><b>Function:</b> Suspends trunk between forelimbs (primary shock absorber); elevates thorax during inspiration.",
        eliteDesc: "<b>THE SUSPENSORY SLING</b><br><br>The most critical muscle of the synsarcosis, forming a muscular 'sling' or 'hammock' that suspends the entire thorax between the two forelimbs. It is a principal component of the muscular sling supporting the trunk. The thoracic limbs together carry roughly 55-60% of body weight; that percentage is not borne by this muscle alone.<br><br><b>ARCHITECTURAL DIVISION:</b><br>• <b>Serratus Ventralis Cervicis:</b>Originates from transverse processes of last 4-5 cervical vertebrae (C3-C7 equivalent)<br>• <b>Serratus Ventralis Thoracis:</b> Originates from lateral surfaces of first 8-9 ribs with prominent muscular interdigitations with the external oblique muscle (interdigitating digitations visible on thoracic wall)<br><br><b>INSERTION MECHANICS:</b> Both parts converge on the facies serrata—a distinct roughened area on the proximal medial scapular surface. This broad insertion distributes weight evenly across the scapula.<br><br><b>ELASTIC HAMMOCK FUNCTION:</b> Acts as the primary shock absorber during locomotion. During weight bearing, it stretches elastically, damping concussive forces. Unilateral contraction shifts weight to the opposite limb (compensatory weight shifting during lameness); bilateral contraction assists in elevating the thorax during deep inspiration.<br><br><b>NEURAL INNERVATION:</b> Cervical part by ventral branches of cervical spinal nerves; Thoracic part by Long Thoracic nerve.<br><br><b>PATHOPHYSIOLOGY:</b> Serratus ventralis atrophy (neurogenic from long thoracic nerve damage) results in 'sagging' of the trunk between the scapulae and inability to support weight effectively—clinically devastating.",
        comparative: [
            { species: "Horse", note: "Similar architecture but less dominant digitations with external oblique." },
            { species: "Dog", note: "Less robust; supports less body weight percentage due to weight distribution differences." }
        ],
        clinical: "<b>Sweeney vs. Serratus Paralysis:</b> Unlike suprascapular nerve injury (Sweeney), long thoracic nerve damage causes trunk sagging between scapulae—key differential. <b>Avulsion Injury:</b> Forceful upward pulling on limb can avulse origin from ribs, causing severe loss of trunk support and recumbency; the injury is serious but not automatically fatal.",
        imgCode: "serratus_ventralis"
    },
    {
        title: "Latissimus Dorsi",
        desc: "<b>Type:</b> Extrinsic, Deep Layer<br><br><b>Origin:</b> Thoracolumbar fascia, spinous processes of lumbar/caudal thoracic vertebrae, last few ribs<br><br><b>Insertion:</b> Teres major tuberosity on medial humerus (common tendon with teres major)<br><br><b>Function:</b> Primary retractor of free limb; power stroke of propulsion (draws trunk forward when limb fixed); antagonist to brachiocephalicus.",
        eliteDesc: "<b>THE POWER STROKE ENGINE</b><br><br>A broad, triangular sheet covering the dorsal trunk, representing the primary caudal pulling force (retractor) of the forelimb and the essential 'power stroke' muscle for propulsion.<br><br><b>ORIGIN COMPLEX:</b> Extensive origin from thoracolumbar fascia (lumbodorsal fascia), spinous processes of lumbar vertebrae and caudal thoracic vertebrae, plus the last 2-3 ribs. This wide origin allows it to harness power from the entire caudal trunk.<br><br><b>TENDON INSERTION:</b> Inserts via a strong tendon common with the teres major on the teres major tuberosity (medial aspect of humeral shaft). This shared insertion creates a powerful adductor/retractor complex.<br><br><b>FUNCTIONAL biomechanics:</b> When the limb is not bearing weight, it pulls the humerus (and thus the limb) caudally (retraction). When the limb is fixed during the stance phase, it draws the trunk forward over the planted limb—this is the fundamental propulsive mechanism for forward movement. It is the direct antagonist to the brachiocephalicus.<br><br><b>CARDINAL IMPORTANCE:</b> Without this muscle, the animal cannot generate forward momentum from the forelimb, though it can still bear weight.",
        comparative: [
            { species: "Horse", note: "Similar origin and insertion; equally crucial for propulsion." },
            { species: "Dog", note: "Insertion varies slightly; less dominant due to weight distribution differences." }
        ],
        clinical: "<b>Thoracodorsal nerve Injury:</b> Results in inability to pull trunk forward effectively, causing a shortened stride and trunk 'lurching' on affected side during motion.",
        imgCode: "latissimus_dorsi"
    },
    {
        title: "Pectoral Muscles",
        desc: "<b>Type:</b> Extrinsic, Deep Layer<br><br><b>Subtypes:</b> Descending (manubrium), Transverse (sternal), Deep/Ascending (sternum/xiphoid)<br><br><b>Insertion:</b> Greater/lesser tubercles of humerus; deltoid crest<br><br><b>Function:</b> Adduct limb; prevent abduction during weight bearing; assist in advancing trunk (deep part) or limb (superficial).",
        eliteDesc: "<b>PECTORAL MUSCLES</b><br><br>The superficial pectorals adduct the limb and attach from the sternum to the humerus and antebrachial fascia in species-specific patterns. The deep pectoral arises from the ventral sternum and adjacent fascia and inserts on the humerus and shoulder fascia according to species. Together they stabilize the limb against abduction; the deep pectoral retracts the free limb and can advance the trunk when the limb is fixed. Exact tubercular attachments must not be generalized across cattle, horse and dog.",
        comparative: [
            { species: "Horse", note: "Deep pectoral (ascending) is massive; subclavius is distinct and robust." },
            { species: "Dog", note: "Deep pectoral has distinct abdominal attachment; accessory head common." }
        ],
        clinical: "<b>Deep Pectoral Tear:</b> Rare but causes limb abduction inability, 'sprawling' gait. <b>Mastitis Extension:</b> Infections can track along pectoral fascia to forelimb lymphatics.",
        imgCode: "pectoral_muscles"
    },

    // ==================== INTRINSIC SCAPULAR (LATERAL) ====================
    {
        title: "Supraspinatus",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral<br><br><b>Origin:</b> Supraspinous fossa of scapula<br><br><b>Insertion:</b> Greater and lesser tubercles of humerus (bridges intertubercular groove)<br><br><b>Function:</b> Extends shoulder joint; prevents shoulder flexion/collapse during weight bearing (cranial collateral ligament equivalent).",
        eliteDesc: "<b>THE ANTI-GRAVITY STABILIZER</b><br><br>Filling the supraspinous fossa, this muscle is the primary extensor of the shoulder and prevents the joint from collapsing into flexion during the weight-bearing phase. It effectively functions as the <b>cranial collateral ligament</b> of the shoulder joint.<br><br><b>TENDON ARCHITECTURE:</b> The tendon divides to attach to both the greater and lesser tubercles, effectively bridging across the intertubercular (bicipital) groove. This creates a tense band preventing flexion collapse.<br><br><b>BIOMECHANICAL IMPERATIVE:</b> During the stance phase, the weight of the cranial trunk creates a flexion moment at the shoulder. The supraspinatus provides the constant tonic contraction (and passive tension in the tendon) to oppose this, locking the shoulder in extension so the limb acts as a rigid column.<br><br><b>NEURAL SUPPLY:</b> Suprascapular nerve (C6-C7).<br><br><b>SWEENEY PATHOLOGY:</b> When the suprascapular nerve is damaged at the scapular neck, this muscle atrophies rapidly (neurogenic atrophy), leading to loss of shoulder extension capability and the characteristic 'shoulder slip' when infraspinatus also fails.",
        comparative: [
            { species: "Horse", note: "Similar function; prone to direct trauma during neck of scapula passage." },
            { species: "Dog", note: "Smaller relative to body size; important for extension and stabilization of the shoulder." }
        ],
        clinical: "<b>Sweeny (Suprascapular Paralysis):</b> Atrophy results in prominent scapular spine; loss of shoulder extension stability causes 'dropped' shoulder during weight bearing.",
        imgCode: "supraspinatus"
    },
    {
        title: "Infraspinatus",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral<br><br><b>Origin:</b> Infraspinous fossa of scapula<br><br><b>Insertion:</b> Lateral aspect of greater tubercle of humerus<br><br><b>Function:</b> Flexes/abducts shoulder; acts as lateral collateral ligament (prevents abduction).",
        eliteDesc: "<b>THE LATERAL COLLATERAL LIGAMENT</b><br><br>Filling the infraspinous fossa, this muscle provides the lateral stabilization of the shoulder joint, functioning as the <b>lateral collateral ligament</b>.<br><br><b>TENDON PROTECTION:</b> The tendon of insertion passes over the caudal part of the greater tubercle, protected by a synovial bursa (<b>bursa subtendinea m. infraspinati</b>). This bursa prevents friction but is prone to inflammation.<br><br><b>FUNCTIONAL DUALITY:</b> Acts to flex or abduct the shoulder joint (non-weight bearing), but its critical role is limiting excessive lateral movement and stabilizing the humeral head during weight bearing. When the supraspinatus and infraspinatus contract together, they create a force couple compressing the humeral head into the glenoid cavity.<br><br><b>SWEENEY SIGNIFICANCE:</b> In suprascapular nerve injury (Sweeny), atrophy of infraspinatus removes lateral support, causing the shoulder to 'pop' laterally (abduct) when weight is placed on the limb—an important clinical sign that must be interpreted with the complete neurologic and orthopedic examination.",
        comparative: [
            { species: "Horse", note: "Similar position and function; same vulnerability to suprascapular nerve injury." },
            { species: "Dog", note: "Rotator cuff equivalent; similar vulnerability." }
        ],
        clinical: "<b>Clinical relevance:</b> Infraspinatus bursitis or tendinopathy can cause shoulder pain. Suprascapular neuropathy produces supraspinatus/infraspinatus atrophy and lateral shoulder instability, but the observed “shoulder slip” must be interpreted with the complete examination rather than called pathognomonic by itself.",
        imgCode: "infraspinatus"
    },
    {
        title: "Deltoideus",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral<br><br><b>Parts:</b> Pars Scapularis (scapular spine/infraspinatus fascia) & Pars Acromialis (acromion process)<br><br><b>Insertion:</b> Deltoid tuberosity on lateral humeral shaft<br><br><b>Function:</b> Flexes shoulder joint and abducts arm.",
        eliteDesc: "<b>THE LATERAL SHOULDER FLEXOR</b><br><br>Located lateral to the shoulder joint, this muscle flexes the shoulder and provides limited abduction.<br><br><b>TWO-PART ORIGIN:</b><br>• <b>Pars Scapularis:</b> Arises from the spine of the scapula and the aponeurosis covering the infraspinatus<br>• <b>Pars Acromialis:</b> Arises from the distinct acromion process of the scapula (which is prominent in ox unlike horse)<br><br><b>DELTOID TUBEROSITY:</b> Inserts on this distinct lateral humeral prominences—key landmark for surgical approaches and palpation.<br><br><b>FUNCTIONAL ROLE:</b> Acts during the swing phase to flex the shoulder (advance the limb) and provides minor abduction. Not primarily a weight-bearing stabilizer but assists in positioning the limb for landing.",
        comparative: [
            { species: "Horse", note: "Horse lacks distinct acromion; deltoid arises chiefly from the scapular spine and adjacent fascia." },
            { species: "Dog", note: "Has additional spinal and acromial heads." }
        ],
        clinical: "<b>Cleobrachialis Association:</b> Often works in conjunction with distal brachiocephalicus; both insert near deltoid tuberosity.",
        imgCode: "deltoideus"
    },
    {
        title: "Teres Minor",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral<br><br><b>Origin:</b> Distal third of caudal border of scapula<br><br><b>Insertion:</b> Teres minor tuberosity of humerus (proximal to deltoid tuberosity)<br><br><b>Function:</b> Flexes shoulder joint and laterally rotates humerus.",
        eliteDesc: "<b>THE ROTATOR CUFF ASSISTANT</b><br><br>A small muscle located deep to the deltoid and lateral head of the triceps, part of the functional 'rotator cuff' analog in cattle.<br><br><b>PRECISE LOCATION:</b> Originates from the distal third of the caudal scapular border (caudal angle region), threading deep between larger lateral muscles.<br><br><b>FUNCTIONAL MECHANICS:</b> Flexes the shoulder joint and laterally rotates the humerus. This rotation is subtle in cattle due to fused elbow joints but assists in positioning the hoof during landing.",
        comparative: [
            { species: "Dog", note: "More significant for shoulder rotation; larger relative size." },
            { species: "Horse", note: "Similar small size; often fused with infraspinatus fascia in part." }
        ],
        clinical: "<b>Quadrangular Space:</b> Teres minor helps form the caudal border of the quadrangular space (with subscapularis cranially, teres major caudally)—axillary nerve passes through here.",
        imgCode: "teres_minor"
    },

    // ==================== INTRINSIC SCAPULAR (MEDIAL) ====================
    {
        title: "Subscapularis",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral (Medial)<br><br><b>Origin:</b> Subscapular fossa (entire medial scapular surface)<br><br><b>Insertion:</b> Medial (lesser) tubercle of humerus<br><br><b>Function:</b> Adducts arm; extends shoulder; functions as medial collateral ligament.",
        eliteDesc: "<b>THE MEDIAL COLLATERAL LIGAMENT</b><br><br>A massive multipennate muscle filling the entire subscapular fossa on the medial aspect of the scapula. It is the largest and most powerful medial stabilizer of the shoulder.<br><br><b>PENNATE ARCHITECTURE:</b> Multipennate structure allows for powerful contraction over short distances—ideal for stabilizing rather than sweeping movements.<br><br><b>FUNCTIONAL ANALOGY:</b> Functions as the <b>medial collateral ligament</b> of the shoulder joint, preventing abduction (movement away from midline) while also being capable of active adduction (pulling toward midline).<br><br><b>MEDIAL STABILIZATION:</b> Provides the essential counterforce to the infraspinatus laterally. Together, these muscles cradle the humeral head within the glenoid cavity during weight bearing.<br><br><b>NEURAL SUPPLY:</b> Subscapular nerve.",
        comparative: [
            { species: "Horse", note: "Similar massive size and function; critical for weight bearing." },
            { species: "Dog", note: "Part of true 'rotator cuff' foursome." }
        ],
        clinical: "<b>Medial Instability:</b> Unlikely to be injured alone; usually involved in complete brachial plexus avulsions.",
        imgCode: "subscapularis"
    },
    {
        title: "Teres Major",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral (Medial)<br><br><b>Origin:</b> Caudal angle and caudal border of scapula<br><br><b>Insertion:</b> Teres major tuberosity on medial humerus (common with latissimus dorsi)<br><br><b>Function:</b> Flexes shoulder joint and adducts limb.",
        eliteDesc: "<b>THE CAUDAL MEDIAL FLEXOR</b><br><br>Located on the medial aspect just caudal to the shoulder joint, forming a functional unit with the latissimus dorsi (shared insertion).<br><br><b>ORIGIN SITES:</b> Arises from the caudal angle (distal tip) and caudal border of the scapula, giving it a caudal line of pull compared to other shoulder flexors.<br><br><b>SYNERGISTIC INSERTION:</b> Inserts via common tendon with latissimus dorsi on the teres major tuberosity. This combined insertion creates one of the most powerful retractor/adductor complexes in the body.<br><br><b>QUADRANGULAR SPACE:</b> Forms the caudal boundary of the quadrangular space through which the axillary nerve passes. Surgical approaches to the axillary nerve or shoulder must account for teres major position.<br><br><b>FUNCTION:</b> Flexes the shoulder (drawing limb forward/upward) and adducts the limb toward the body wall.",
        comparative: [
            { species: "Horse", note: "Similar position; also shares tendon with latissimus." },
            { species: "Dog", note: "More distinct separation from latissimus insertion." }
        ],
        clinical: "<b>Caudal Dislocation:</b> Helps resist caudal displacement of humeral head; injury allows caudal 'slipping'.",
        imgCode: "teres_major"
    },
    {
        title: "Coracobrachialis",
        desc: "<b>Type:</b> Intrinsic, Scapulohumeral (Medial)<br><br><b>Origin:</b> Coracoid process of scapula (medial to supraglenoid tubercle)<br><br><b>Insertion:</b> Medial surface of humeral shaft, distal to lesser tubercle<br><br><b>Function:</b> Adducts arm and flexes shoulder.",
        eliteDesc: "<b>THE MEDIAL STABILIZER</b><br><br>Arises from the coracoid process (a medial bony prominence of the scapula), giving it a medial-anterior line of pull.<br><br><b>COURSE:</b> Runs along the medial aspect of the humerus, deep to the pectoral muscles but superficial to the brachial vessels and nerves in the proximal arm region.<br><br><b>FUNCTIONAL ROLE:</b> Primarily adducts the arm (prevents abduction) and assists in shoulder flexion. Acts as a medial bracing muscle during the stance phase, preventing lateral deviation of the limb.<br><br><b>NERVOUS RELATIONSHIP:</b> Innervated by the musculocutaneous nerve; often used as a surgical landmark to locate this nerve during axillary approaches.",
        comparative: [
            { species: "Dog", note: "Two heads common; more significant for shoulder flexion." },
            { species: "Horse", note: "Similar single head anatomy; less bulky than in ox." }
        ],
        clinical: "<b>Axillary Approach:</b> Retracted laterally during approaches to axillary vessels; protects brachial plexus roots.",
        imgCode: "coracobrachialis"
    },

    // ==================== BRACHIUM MUSCLES ====================
    {
        title: "Biceps Brachii",
        desc: "<b>Type:</b> Intrinsic, Brachial (Biarticular)<br><br><b>Origin:</b> Supraglenoid tubercle of scapula<br><br><b>Insertion:</b> Radial tuberosity (proximal medial radius) and medial collateral ligament of elbow<br><br><b>Function:</b> Flexes elbow; extends shoulder via reciprocal tension.<br><br><b>Stay Apparatus:</b> Lacertus fibrosus connects to Extensor Carpi Radialis (passive carpal extension).",
        eliteDesc: "<b>THE STAY APPARATUS ANCHOR</b><br><br>Despite its name, the bovine biceps brachii has only one head (unlike the two-headed human version). It is a powerful biarticular muscle crossing both shoulder and elbow joints.<br><br><b>SUPRAGLENOID ORIGIN:</b> Originates from the supraglenoid tubercle (cranial margin of glenoid cavity), placing it cranial to the shoulder joint axis.<br><br><b>PASSIVE STAY MECHANISM:</b> The muscle sends a fibrous band called the <b>lacertus fibrosus</b> to the tendon of the Extensor Carpi Radialis. While less developed than in the horse, this structure contributes to the passive stay apparatus by preventing flexion of the carpus while standing without muscular effort.<br><br><b>BIO-TENDINOUS COMPLEX:</b> The tendon bridges the cranial aspect of the shoulder and passes through the intertubercular (bicipital) groove (bicipital groove), where it is protected by the transverse humeral retinaculum.<br><br><b>DUAL JOINT ACTION:</b> Flexes the elbow joint (primary action) and extends the shoulder joint via its cranial position relative to shoulder center of rotation. The biceps brachii 'tension band' principle helps stabilize the shoulder during weight bearing.",
        comparative: [
            { species: "Horse", note: "Lacertus fibrosus is massive and primary stay apparatus component; biceps tendon is larger." },
            { species: "Dog", note: "Single head of origin in the dog and cat; no significant stay-apparatus contribution." }
        ],
        clinical: "<b>Bicipital Bursitis:</b> Inflammation of bicipital bursa in the intertubercular groove causes lameness. <b>Radial Nerve Association:</b> Proximal radial nerve injury affects elbow extension, but biceps flexion is unopposed, creating imbalance.",
        imgCode: "biceps_brachii"
    },
    {
        title: "Brachialis",
        desc: "<b>Type:</b> Intrinsic, Brachial<br><br><b>Origin:</b> Proximal caudal aspect of humerus<br><br><b>Insertion:</b> Medial aspect of proximal radius and medial coronoid process of ulna<br><br><b>Function:</b> Pure and powerful flexor of the elbow joint.",
        eliteDesc: "<b>THE ELBOW FLEXOR PURIST</b><br><br>Located within the musculospiral groove of the humerus, deep to the biceps and adjacent to the radial nerve.<br><br><b>COURSE MECHANICS:</b> Originates from the proximal caudal humerus, wraps around the medial aspect, and passes deep to the biceps tendon near the elbow to insert on the proximal radius and ulna.<br><br><b>PURE FLEXOR:</b> Unlike the biarticular biceps, the brachialis acts only on the elbow joint, making it the 'pure' elbow flexor. It provides the actual power for rapid flexion during the swing phase of locomotion.<br><br><b>NEURAL SUPPLY:</b> Primarily musculocutaneous nerve, but receives branches from the radial nerve in cattle (dual innervation pattern in some specimens).<br><br><b>SURGICAL CORRIDOR:</b> Directly deep to the biceps; must be retracted to access the elbow joint capsule medially.",
        comparative: [
            { species: "Dog", note: "Exclusively musculocutaneous innervation; no radial contribution." },
            { species: "Horse", note: "Similar position; less bulky than biceps." }
        ],
        clinical: "<b>Radial Nerve Compression:</b> Located adjacent to radial nerve in musculospiral groove; hematomas here affect both structures.",
        imgCode: "brachialis"
    },
    {
        title: "Triceps Brachii",
        desc: "<b>Type:</b> Intrinsic, Brachial (Extensor)<br><br><b>Heads:</b> Long (scapula), Lateral (humerus), Medial (humerus), Accessory (neck of humerus)<br><br><b>Insertion:</b> Olecranon tuber of ulna<br><br><b>Function:</b> Extends elbow (primary weight-bearing extensor); long head flexes shoulder.",
        eliteDesc: "<b>THE ANTI-GRAVITY EXTENSOR</b><br><br>The primary extensor of the elbow joint, essential for weight-bearing. Distinguished by possessing <b>four heads</b> in ox (same as dogs; vs. three in humans).<br><br><b>FOUR-HEADED ARCHITECTURE:</b><br>• <b>Long Head (Caput Longum):</b> Largest head; originates from caudal scapular border (biarticular—flexes shoulder, extends elbow)<br>• <b>Lateral Head (Caput Laterale):</b> Originates from lateral humeral shaft (tricipital line)<br>• <b>Medial Head (Caput Mediale):</b> Originates from medial humeral shaft (crest of lesser tubercle region)<br>• <b>Accessory Head (Caput Accessorium):</b> Unique to ruminants and carnivores (absent in horses/humans); originates from caudal aspect of neck of humerus; lies between lateral and medial heads—provides additional mass for heavy weight extension<br><br><b>MECHANICAL ADVANTAGE:</b> All heads converge on the massive olecranon tuber of the ulna, providing a long lever arm for powerful elbow extension against ground reaction forces.<br><br><b>RADIAL NERVE DEPENDENCY:</b> Solely innervated by the radial nerve. High radial nerve paralysis results in complete triceps failure and 'dropped elbow'—inability to bear weight.<br><br><b>CLINICAL EXAMINATION:</b> Triceps tone maintains the elbow in extension during standing; loss of this tone is the immediate sign of radial nerve injury proximal to the elbow.",
        comparative: [
            { species: "Dog", note: "Four heads (including accessory head); olecranon smaller relative to body." },
            { species: "Horse", note: "Three heads; different split of lateral and medial heads." }
        ],
        clinical: "<b>Capped Elbow (Olecranon Bursitis):</b> Subcutaneous bursa over olecranon becomes inflamed from trauma (lying on hard surfaces). <b>Radial Paralysis:</b> Loss of triceps tone causes 'dropped elbow' and inability to support weight; most critical muscle for standing.",
        imgCode: "triceps_brachii"
    },
    {
        title: "Tensor Fasciae Antebrachii",
        desc: "<b>Type:</b> Intrinsic, Brachial (Accessory)<br><br><b>Origin:</b> Caudal border of scapula and latissimus dorsi fascia<br><br><b>Insertion:</b> Olecranon and antebrachial fascia<br><br><b>Function:</b> Extends elbow; tenses antebrachial fascia.",
        eliteDesc: "<b>TENSOR FASCIAE ANTEBRACHII</b><br><br>This thin muscle arises from the latissimus-dorsi tendon and caudal scapular region and inserts on the olecranon and antebrachial fascia. It assists extension of the elbow and tenses the antebrachial fascia. Do not assign it an unproven hydrostatic compartment-pressure mechanism.",
        comparative: [
            { species: "Horse", note: "Similar origin and function; clinically significant for fascial closure." },
            { species: "Dog", note: "Less developed; less fascial integration." }
        ],
        clinical: "<b>Clinical relevance:</b> Injury may weaken elbow extension together with triceps injury. Compartment syndrome should be described from documented vascular and fascial pathology, not attributed specifically to this muscle.",
        imgCode: "tensor_fasciae_antebrachii"
    },
    {
        title: "Anconeus",
        desc: "<b>Type:</b> Intrinsic muscle of the brachium<br><br><b>Origin:</b> Lateral supracondylar crest of humerus<br><br><b>Insertion:</b> Lateral aspect of olecranon<br><br><b>Function:</b> Extends elbow; prevents joint capsule pinching during extension.",
        eliteDesc: "<b>THE JOINT PROTECTOR</b><br><br>A small muscle located deep to the lateral head of the triceps, serving a specialized protective function.<br><br><b>STABILIZOR FUNCTION:</b> While it assists in elbow extension, its primary role is mechanical protection. During terminal elbow extension, the anconeus provides caudolateral support preventing the olecranon from displacing medially while simultaneously keeping the joint capsule taut.<br><br><b>CAPSULAR PROTECTION:</b> Prevents the joint capsule from being pinched between the olecranon and the humeral condyle during full extension—a common source of pain and synovitis if not mechanically protected.<br><br><b>RELATIONSHIPS:</b> Lies directly deep to the lateral head of triceps; identified during deep dissections of the lateral elbow approaches.",
        comparative: [
            { species: "Dog", note: "Similar function; more distinct separation from triceps." },
            { species: "Horse", note: "Present but less distinct; often considered part of triceps complex." }
        ],
        clinical: "<b>El Joint Approach:</b> Must be identified and preserved during lateral arthrotomy approaches to prevent post-operative capsular entrapment.",
        imgCode: "anconeus"
    },

    // ==================== ANTEBRACHIUM EXTENSORS ====================
    {
        title: "Extensor Carpi Radialis",
        desc: "<b>Type:</b> Intrinsic craniolateral antebrachial muscle<br><br><b>Origin:</b> Lateral supracondylar crest of the humerus<br><br><b>Insertion:</b> Dorsoproximal metacarpal tuberosity<br><br><b>Function:</b> Principally extends the carpus and may assist elbow flexion according to limb position. It is not part of a forelimb reciprocal apparatus.",
        eliteDesc: "<b>THE CARPAL EXTENSOR PILLAR</b><br><br>The most cranial and largest extensor muscle of the forearm, critical for maintaining the carpus in extension during weight bearing and the swing phase.<br><br><b>TOPOGRAPHIC POSITION:</b> Lies directly beneath the skin on the craniolateral aspect of the forearm, immediately lateral to the radius. Its tendon is palpable and visible over the dorsal carpus.<br><br><b>STAY APPARATUS CONNECTION:</b> Receives the <b>lacertus fibrosus</b> from the biceps brachii tendon. This fibrous connection allows passive transfer of tension from shoulder to carpus, assisting in keeping the carpus extended without muscular effort during standing—a key component of the bovine stay apparatus.<br><br><b>BIPENNATE STRUCTURE:</b> Highly organized fascicles allow for sustained tonic contraction suitable for weight bearing rather than just rapid movement.<br><br><b>INSERTION:</b> The stout tendon inserts on the large metacarpal tuberosity of the fused third and fourth metacarpal (cannon bone), providing direct extension of the carpo-metacarpal joint.",
        comparative: [
            { species: "Dog", note: "Divided into longus and brevis; ox has single belly." },
            { species: "Horse", note: "Similar single belly; lacertus fibrosus connection is massive and primary stay mechanism." }
        ],
        clinical: "<b>Radial Nerve Paralysis:</b> Low lesions spare triceps but paralyze ECR, causing the carpus to knuckle during weight bearing. <b>Tenosynovitis:</b> Tendon may swell within synovial sheath at carpus.",
        imgCode: "extensor_carpi_radialis"
    },
    {
        title: "Common Digital Extensor",
        desc: "<b>Type:</b> Intrinsic, Forearm (Bidactyl Extensor)<br><br><b>Structure:</b> Two distinct muscular bellies (Medial & Lateral)<br><br><b>Origin:</b> Lateral epicondyle of humerus<br><br><b>Insertion:</b> Extensor processes of distal phalanges (P3) of Digits III & IV<br><br><b>Function:</b> Extends carpus and digital joints of both digits.",
        eliteDesc: "<b>THE DORSAL DIGITAL EXTENSOR COMPLEX</b><br><br>More complex than the equine version due to the bidactyl (cloven hoof) anatomy, consisting of two distinct muscular bellies serving the two functional digits.<br><br><b>DUAL BELLY ARCHITECTURE:</b><br>• <b>Medial Belly:</b> Tendon bifurcates to insert on extensor process of distal phalanx (P3) of medial digit (III) and middle phalanx (P2) of same digit<br>• <b>Lateral Belly:</b> Tendon splits to serve extensor processes of P3 of BOTH digits (III and IV)<br><br><b>BIDACTYL FUNCTIONAL COMPROMISE:</b> This bifurcation pattern reflects the functional adaptation to two weight-bearing digits. The medial belly focuses on digit III; the lateral belly serves both, creating a complex coordination mechanism for even hoof placement.<br><br><b>SURGICAL ACCESSIBILITY:</b> Tendons are palpable on the dorsal surface of the cannon bone (Mc III/IV), allowing easy evaluation of tendon integrity and synovial sheath distension. Critical landmark for distal limb nerve block evaluation.",
        comparative: [
            { species: "Horse", note: "Single functional digit; single belly serving digit III only." },
            { species: "Dog", note: "Separate tendons to digits III-V; different branching pattern." }
        ],
        clinical: "<b>Radial Nerve Paralysis (Distal):</b> Inability to extend digits causes 'knuckling over' at fetlock; animal steps on dorsum of hoof. <b>Tendon Laceration:</b> Complete digital extension loss requires immediate surgical repair.",
        imgCode: "common_digital_extensor"
    },
    {
        title: "Lateral Digital Extensor",
        desc: "<b>Type:</b> Intrinsic, Forearm (Digit 4 Specialist)<br><br><b>Origin:</b> Lateral collateral ligament of elbow and lateral epicondyle<br><br><b>Insertion:</b> Middle (P2) and distal (P3) phalanges of lateral digit (IV) only<br><br><b>Function:</b> Extends lateral digit (Digit IV) specifically; allows independent movement.",
        eliteDesc: "<b>THE LATERAL DIGIT AUTONOMY SYSTEM</b><br><br>A smaller extensor specifically serving the lateral digit (Digit IV), allowing independent extension and some abduction of the lateral claw.<br><br><b>EGINAL COMPLEXITY:</b> Originates not just from the lateral epicondyle but also from the lateral collateral ligament of the elbow, embedding it in the lateral stability system of the elbow joint.<br><br><b>DISTINCT TENDON PATH:</b> The tendon passes through the lateral collateral ligament of the carpus (staying lateral) to insert specifically on P2 and P3 of digit IV only. This maintains separate control of the lateral claw.<br><br><b>COMPARATIVE SIGNIFICANCE:</b> Unlike the horse where the LDE tendon joins the CDE tendon distally, in the ox they remain distinct throughout their course, allowing cattle to manipulate the lateral claw somewhat independently—useful for traction on uneven terrain or when one claw is injured.",
        comparative: [
            { species: "Horse", note: "Tendon joins CDE tendon distally; no independent extension possible." },
            { species: "Dog", note: "Often fused with CDE or absent as distinct entity." }
        ],
        clinical: "<b>Independent Claw Extension:</b> Lesions here explain why cattle can extend one claw but not the other in some neuropathies.",
        imgCode: "lateral_digital_extensor"
    },
    {
        title: "Ulnaris Lateralis",
        desc: "<b>Type:</b> Intrinsic, Forearm (Extensor Group by nerve, Flexor by action)<br><br><b>Origin:</b> Lateral epicondyle of humerus<br><br><b>Insertion:</b> Accessory carpal bone and proximal vestigial fifth metacarpal (Mc V)<br><br><b>Function:</b> Flexes carpus (despite radial innervation); abducts limb minimally.",
        eliteDesc: "<b>THE CARPAL FLEXOR PARADOX</b><br><br>Morphologically classified as an extensor (supplied by radial nerve) but positioned caudal to the axis of rotation, making it functionally a <b>carpal flexor</b>.<br><br><b>ACCESS CARPAL ANCHOR:</b> Inserts on the prominent accessory carpal bone, the pulley-like bone on the caudolateral carpus. This insertion provides mechanical advantage for flexion and lateral stability.<br><br><b>VESTIGIAL DIGIT CONNECTION:</b> Also inserts on the rudimentary fifth metacarpal; this is not the entire dewclaw, representing the structural remnant of digit V.<br><br><b>LATERAL STABILITY:</b> Provides lateral support to the carpus during weight bearing, preventing excessive medial deviation of the carpus.<br><br><b>NEURAL BLOCK LANDMARK:</b> The groove between Ulnaris Lateralis and Flexor Carpi Ulnaris is the critical landmark for performing the <b>Ulnar Nerve Block</b> at the distal forearm level.",
        comparative: [
            { species: "Horse", note: "Similar paradoxical flexor function; same landmark usage." },
            { species: "Dog", note: "Separate tendon slips to digit V when present." }
        ],
        clinical: "<b>Ulnar Nerve Block Site:</b> Palpable groove ~10cm proximal to accessory carpal bone between this muscle and FCU is THE landmark for ulnar block. <b>Carpal Flexion Weakness:</b> Rarely injured alone but contributes to carpal drop in severe flexor deficits.",
        imgCode: "ulnaris_lateralis"
    },
    {
        title: "Extensor Carpi Obliquus",
        desc: "<b>Type:</b> Intrinsic craniolateral antebrachial muscle<br><br><b>Origin:</b> Lateral surface of the radius<br><br><b>Insertion:</b> Medial proximal metacarpal region, varying by species<br><br><b>Function:</b> Assists extension and medial stabilization of the carpus. Equine splint-bone terminology must not be applied to cattle.",
        eliteDesc: "<b>EXTENSOR CARPI OBLIQUUS / ABDUCTOR DIGITI I LONGUS</b><br><br>This small oblique muscle crosses the dorsal carpus from the radius to the medial proximal metacarpal region. Its insertion and nomenclature vary by species. In cattle it should not be described as inserting on an equine medial splint bone.",
        comparative: [
            { species: "Horse", note: "Similar; often called Abductor Digiti I Longus." },
            { species: "Dog", note: "True abductor of digit II when present." }
        ],
        clinical: "<b>Clinical relevance:</b> Its tendon is encountered in dorsal carpal approaches. Tendon-sheath relations are species-specific and should not be stated to be universally shared with extensor carpi radialis.",
        imgCode: "extensor_carpi_obliquus"
    },

    // ==================== ANTEBRACHIUM FLEXORS ====================
    {
        title: "Flexor Carpi Radialis",
        desc: "<b>Type:</b> Intrinsic, Forearm (Caudomedial/Flexor Group)<br><br><b>Origin:</b> Medial epicondyle of humerus<br><br><b>Insertion:</b> Palmar aspect of proximal metacarpus (Mc III)<br><br><b>Function:</b> Flexes the carpus (primary flexor).",
        eliteDesc: "<b>THE CARPAL FLEXOR LEADER</b><br><br>The most cranial of the caudal (flexor) group muscles, lying directly medial on the forearm deep to the pectoral retinacula.<br><br><b>STRAIGHT LINE PULL:</b> Originates from the medial epicondyle and runs straight down the medial forearm to insert on the palmar aspect of the proximal cannon bone (Mc III). This direct line provides maximum mechanical advantage for carpal flexion.<br><br><b>CARPAL CANAL RELATIONSHIP:</b> Passes over the palmar carpus but outside the carpal canal proper (which contains the digital flexors). Covered by the flexor retinaculum at the carpus.<br><br><b>FUNCTIONAL DUALITY:</b> While primarily a flexor, it provides active check against hyperextension during the weight-bearing phase, working in concert with the passive stay apparatus.<br><br><b>MEDIAN NERVE RELATIONSHIP:</b> The median nerve runs deep to this muscle in the proximal forearm; the muscle serves as a landmark for median nerve blocks (inject just cranial to FCR tendon at carpus).",
        comparative: [
            { species: "Horse", note: "Similar position and function; larger for support." },
            { species: "Dog", note: "Splits into superficial and deep parts in some breeds." }
        ],
        clinical: "<b>Clinical relevance:</b> The tendon is a palpable medial landmark at the distal forearm. Regional anesthesia must use current palmar terminology and species-specific landmarks; this muscle alone is not a universal landmark for a high palmar block.",
        imgCode: "flexor_carpi_radialis"
    },
    {
        title: "Flexor Carpi Ulnaris",
        desc: "<b>Type:</b> Intrinsic, Forearm (Caudomedial/Ulnar Group)<br><br><b>Heads:</b> Humeral head (medial epicondyle) & Ulnar head (olecranon)<br><br><b>Insertion:</b> Accessory carpal bone<br><br><b>Function:</b> Flexes carpus (ulnar aspect).",
        eliteDesc: "<b>THE ULNAR CARPAL FLEXOR</b><br><br>Located caudal/medial in the forearm, providing ulnar-sided flexion and stabilization.<br><br><b>DUAL-HEADED ORIGIN:</b> Unique among flexors in having two origins:<br>• <b>Humeral Head:</b> Arises from medial epicondyle (with other flexors)<br>• <b>Ulnar Head:</b> Arises from medial surface of the olecranon (ulna), giving it origin from the forearm itself<br><br><b>ACCESSORY CARPAL INSERTION:</b> Inserts on the prominent accessory carpal bone on the caudolateral carpus—the same bone receiving the Ulnaris Lateralis but from the flexor side.<br><br><b>ULNAR STABILITY:</b> Provides the flexor counterbalance to the Ulnaris Lateralis, creating a force couple stabilizing the carpus in the frontal plane during weight bearing. Prevents excessive abduction/adduction of the carpus.<br><br><b>ULNAR NERVE BLOCK LANDMARK:</b> Forms the medial border of the groove (with Ulnaris Lateralis forming the lateral border) used for ulnar nerve blocks.",
        comparative: [
            { species: "Horse", note: "Similar dual heads; ulnar head larger in horse." },
            { species: "Dog", note: "Ulnar head may be absent or fused in some individuals." }
        ],
        clinical: "<b>Ulnar Nerve Block Landmark:</b> Palpate groove between FCU (medial) and Ulnaris Lateralis (lateral) ~10cm proximal to accessory carpal bone. <b>Carpal Valgus/Varus:</b> Asymmetry between left/right FCU tone contributes to angular limb deformities.",
        imgCode: "flexor_carpi_ulnaris"
    },
    {
        title: "Superficial Digital Flexor",
        desc: "<b>Type:</b> Intrinsic, Flexor Group<br><br><b>Origin:</b> Medial epicondyle of humerus<br><br><b>Insertion:</b> Palmar surface of Middle Phalanx (P2) of Digits III & IV (via manica flexoria)<br><br><b>Function:</b> Flexes proximal/middle phalangeal joints (fetlock/pastern) and carpus.",
        eliteDesc: "<b>THE MANICA FLEXORIA CONTAINER</b><br><br>A key component of the forelimb stay apparatus and digital support system, distinct in bovines due to the bidactyl arrangement.<br><br><b>SYNOVIAL SHEATH COURSE:</b> Tendon passes through the carpal canal (carpal sheath) deep to the flexor retinaculum alongside the DDF. At the carpus, it is covered by synovial membrane—prone to tenosynovitis.<br><br><b>MANICA FLEXORIA ARCHITECTURE:</b> At the fetlock level, the tendon bifurcates (one branch per digit). Each branch forms a ring-like structure called the <b>Manica Flexoria</b> ('flexor sleeve') that wraps around the Deep Digital Flexor tendon. This allows the DDF to pass through to the distal phalanx while the SDF inserts on the middle phalanx (P2).<br><br><b>BIDACTYL DIVISION:</b> Unlike the horse where the SDF splits to surround the DDF in the pattern of a U, in cattle the two separate digit branches allow independent suspension of each claw.<br><br><b>INSERTION:</b> Terminal branches insert on the palmar surface of P2 (middle phalanx/pastern bone) of both digits III and IV.",
        comparative: [
            { species: "Horse", note: "Single manica flexoria arrangement around single DDF tendon; inserts on P1 and P2." },
            { species: "Dog", note: "Single tendon to each digit; similar P2 insertion." }
        ],
        clinical: "<b>Manica Flexoria Syndrome:</b> Damage to the manica allows SDF tendon displacement. <b>Tenosynovitis:</b> SDF tendon within digital sheath commonly affected in 'septic arthritis' extension.",
        imgCode: "superficial_digital_flexor"
    },
    {
        title: "Deep Digital Flexor",
        desc: "<b>Type:</b> Intrinsic, Forearm (Flexor Group)<br><br><b>Heads:</b> Humeral (medial epicondyle), Radial (caudal radius), Ulnar (caudal ulna)<br><br><b>Insertion:</b> Flexor tubercle of Distal Phalanx (P3/coffin bone) of Digits III & IV<br><br><b>Function:</b> Flexes distal phalanx (coffin joint) and all proximal joints.",
        eliteDesc: "<b>THE ULTIMATE DIGITAL FLEXOR</b><br><br>The powerhouse of digital flexion, originating from three heads and terminating on the coffin bone.<br><br><b>TRI-HEADED COMPLEXITY:</b><br>• <b>Humeral Head:</b> Largest; from medial epicondyle<br>• <b>Radial Head:</b> From caudal surface of radius<br>• <b>Ulnar Head:</b> From caudal surface of ulna<br>The three heads fuse proximal to the carpus into a single massive tendon.<br><br><b>CARPAL CANAL PASSAGE:</b> Passes through the carpal canal <b>deep to the SDF tendon</b>—remaining deep to the superficial digital flexor; at the fetlock it passes through the flexor manica and continues on the palmar aspect of the digit.<br><br><b>DISTAL COURSE:</b> Single massive tendon passes to fetlock, then splits into two tendons (one per digit), each passing through the manica flexoria of the SDF, then continuing to insert on the flexor tubercle of P3 (coffin bone/distal phalanx).<br><br><b>FUNCTIONAL ROLE:</b> Flexes the coffin joint (DIP) primarily, but due to its passage through the fetlock and pastern regions, it secondarily flexes all proximal joints. Essential for gripping and traction.",
        comparative: [
            { species: "Horse", note: "Three heads (humeral, radial, ulnar); massive DDF tendon." },
            { species: "Dog", note: "Variable presence of radial head." }
        ],
        clinical: "<b>Ascending Tenosynovitis:</b> Puncture wounds to sole can infect digital sheath, leading to an ascending infection that can involve tendon sheath, joints and deeper tissues and requires urgent veterinary treatment. <b>Deep Flexor Tendonitis:</b> 'Sole bruising' often reflects DDF stress.",
        imgCode: "deep_digital_flexor"
    },

    // ==================== MANUS (DISTAL LIMB) ====================
    {
        title: "Interosseous Muscle (Suspensory)",
        desc: "<b>Type:</b> Intrinsic, Manus<br><br><b>Origin:</b> Proximal metacarpus and distal carpal bones<br><br><b>Insertion:</b> Proximal sesamoid bones (4 total—2 per digit) and extensor tendons (via extensor branches)<br><br><b>Function:</b> Suspensory apparatus preventing fetlock hyperextension; supports fetlock during stance.",
        eliteDesc: "<b>INTEROSSEOUS MUSCLE / SUSPENSORY LIGAMENT</b><br><br>The interosseous structure supports the fetlock and gives extensor branches distally. It retains variable muscle fibers: generally more in cattle and fewer in the adult horse, but the equine suspensory is not universally devoid of muscle. It is distinct from the accessory (check) ligaments of the digital flexor tendons. Claims that bovine muscle content causes cattle to fatigue on hard surfaces are unsupported.",
        comparative: [{"species":"Ox","note":"Retains more muscle fibers on average and functions chiefly as a suspensory structure."},{"species":"Horse","note":"Adult suspensory ligament usually contains fewer but variable residual muscle fibers; it is not universally entirely tendinous."},{"species":"Dog","note":"Interosseous muscles remain muscular and contribute to digital movement."}],
        clinical: "<b>Clinical relevance:</b> Desmitis or rupture weakens fetlock support. Diagnosis and prognosis depend on species, lesion site and imaging; do not infer fatigue or lesion severity from muscle-fiber content alone.",
        imgCode: "interosseous_muscle"
    },
    {
        title: "Distal Annular Ligaments & Interdigital",
        desc: "<b>Type:</b> Fascial/Muscular remnants<br><br><b>Components:</b> Lumbricals, Interdigital muscles<br><br><b>Function:</b> Adduction of claws (prevent splaying); minor proprioceptive roles.",
        eliteDesc: "<b>DISTAL RETINACULAR AND INTERDIGITAL STRUCTURES</b><br><br>Palmar and digital annular ligaments retain the flexor tendons against the digit and prevent bowstringing. Proximal and distal interdigital ligaments limit excessive separation of bovine digits. Lumbrical and small intrinsic muscles vary by species and should not be presented as the principal mechanism controlling independent claw placement. Annular ligaments are fibrous retainers, not muscular remnants.",
        comparative: [
            { species: "Horse", note: "No interdigital muscles (single digit); different annular system." },
            { species: "Dog", note: "Multiple interossei and lumbricals corresponding to 4-5 digits." }
        ],
        clinical: "<b>Interdigital Fibroma:</b> Hyperplasia of interdigital skin into a 'corn.' <b>Tendon Displacement:</b> Annular ligament rupture causes bowstringing of flexor tendons. <b>Claw Integrity:</b> Loss of adduction function leads to splayed toes and hoof wear abnormalities.",
        imgCode: "lumbricals_interdigital"
    }
],
    
    "Arthrology": [
    {
        title: "Shoulder Joint (Articulatio Humeri)",
        desc: "Synovial ball-and-socket joint (enarthrosis) functioning primarily as a hinge (ginglymus).<br><br>Articular surfaces: Shallow glenoid cavity rimmed by fibrocartilaginous labrum articulates with expansive humeral head; surface area mismatch creates inherent mobility.<br><br>No true collateral ligaments—dynamic stability provided by muscules: subscapularis (medial), infraspinatus (lateral), and supraspinatus/biceps (cranial).<br><br>Gleno humeral ligament present.<br><br>Movements: Primarily flexion/extension; limited adduction/abduction prevented by pectoral/serratus muscles; negligible rotation due to massive soft tissue envelope.",
        eliteDesc: "<b>SHOULDER JOINT</b><br><br>The shoulder is a spheroidal synovial joint between the humeral head and glenoid cavity. In large domestic animals movement is chiefly flexion and extension because stability is supplied mainly by the capsule and surrounding muscles, especially subscapularis medially and infraspinatus laterally. The dog has glenohumeral capsular ligaments, not robust true collateral ligaments. Avoid unsupported fixed claims about labral depth or suction.",
        comparative: [
            { species: "Horse", note: "Similar active collateral system but greater range of flexion; bicipital bursitis equally common." },
            { species: "Dog", note: "True collateral ligaments present; less reliance on muscular stabilization; prone to traumatic luxation unlike ox." }
        ],
        clinical: "<b>Clinical relevance:</b> Suprascapular neuropathy can cause muscle atrophy and lateral instability. The bicipital bursa and shoulder joint are distinct synovial structures; any communication is species- or lesion-dependent and must not be assumed. Luxation is uncommon in large animals because of muscular stabilization.",
        imgCode: "shoulder_joint"
    },
    {
        title: "Elbow Joint (Articulatio Cubiti)",
        desc: "Synovial compound hinge (ginglymus) functioning as rigid locking pivot in stay apparatus.<br><br>Articular surfaces: Humeral trochlea (medial and lateral condyles separated by synovial groove) articulates with radial head (fovea capitis) and ulnar trochlear notch with anconeal process.<br><br>Lateral collateral ligament originates eccentrically (caudal to rotation center) creating 'snap' mechanism—elastic recoil locks joint in full extension without muscular effort.<br><br>Medial collateral ligament has long and short parts inserting on medial radial tuberosity and coronoid process.<br><br>Radius and ulna fused via synostosis in adults (radioulnar ligaments ossified), eliminating pronation/supination. Two proximal interosseous fenestrae remain for vascular passage.<br><br>Anconeal process locks into olecranon fossa during extension providing bony stability.<br><br><b>Clinical:</b> Capped elbow (olecranon bursitis) from trauma; fractures complicated by lack of interosseous give.",
        eliteDesc: "<b>ELBOW JOINT</b><br><br>The elbow combines humeroradial and humeroulnar articulations in a common functional hinge. Collateral ligaments and congruent articular surfaces restrict motion mainly to flexion and extension. Cattle have species-specific radioulnar fusion and interosseous spaces, but no established anconeal or collateral \"snap-lock\" mechanism comparable to the equine patellar lock.",
        comparative: [
            { species: "Horse", note: "Similar snap mechanism but radioulnar fusion less complete distally; olecranon bursitis ('capped elbow') equally common." },
            { species: "Dog", note: "Separate radius and ulna allowing pronation/supination; true snap mechanism absent; elbow dysplasia common." }
        ],
        clinical: "<b>Capped Elbow (Bursitis):</b> Subcutaneous olecranon bursa inflammation from lying on concrete ('shoe boil'); extra-articular swelling distinct from joint effusion.<br><br><b>Fracture Patterns:</b> Humeral spiral fractures common due to radioulnar fusion preventing interosseous give.<br><br><b>Radial Nerve Paralysis:</b> Combined with triceps failure eliminates ability to lock elbow, causing 'dropped elbow' inability to bear weight.",
        imgCode: "elbow_joint"
    },
    {
        title: "Carpus/Knee Joint (Articulatio Carpi)",
        desc: "A composite synovial joint with antebrachiocarpal, middle carpal and carpometacarpal levels. Most flexion occurs proximally, while distal motion is more limited. Synovial communications vary by species and individual; the middle carpal and carpometacarpal compartments commonly communicate. Do not assign fixed universal flexion angles or assume complete sac isolation.",
        eliteDesc: "<b>CARPAL JOINT</b><br><br>The antebrachiocarpal, middle carpal and carpometacarpal levels form a composite joint. Motion and synovial communications vary by species; the middle carpal and carpometacarpal compartments commonly communicate. Fixed normal angles and universal lavage-port rules are inappropriate. Septic-joint lavage must target the affected compartment using current clinical anatomy.",
        comparative: [
            { species: "Horse", note: "Seven to eight carpal bones (C1 vestigial/variable); C3 massive load-bearing; similar three-level architecture but C1 present." },
            { species: "Dog", note: "Radial and intermediate fused into 'intermedioradial'; seven bones total; thinner palmar ligament." }
        ],
        clinical: "<b>Clinical relevance:</b> Precarpal hygroma is extra-articular. Septic arthritis requires identification of the involved synovial compartment and lavage planned from current species-specific anatomy; a universal two-needle technique cannot be prescribed from this overview.",
        imgCode: "carpus_joint"
    },
    {
        title: "Fetlock Joint (Metacarpophalangeal)",
        desc: "The bovine fetlock comprises paired metacarpophalangeal articulations for digits III and IV with four proximal sesamoids. The interosseous/suspensory structure, extensor branches, distal sesamoidean ligaments and interdigital ligaments support the joint. Exact distal sesamoidean ligament pattern and nomenclature are species-specific and should not be reduced to a universal claim that the straight ligament is absent.",
        eliteDesc: "<b>BOVINE FETLOCK SUPPORT</b><br><br>Each functional digit articulates with its metacarpal trochlea and paired proximal sesamoids. Interosseous branches attach to the sesamoids and send extensor branches dorsally. Distal sesamoidean and interdigital ligaments limit excessive extension and splaying. The bovine interosseous retains variable muscle fibers; the equine suspensory may also retain residual fibers. Relationships and ligament names should follow species-specific references rather than unsupported absence claims.",
        comparative: [{"species":"Ox","note":"Two functional fetlock articulations with interdigital stabilization and a suspensory structure retaining variable muscle fibers."},{"species":"Horse","note":"One principal fetlock; suspensory ligament and distal sesamoidean ligaments are highly developed and may contain residual muscle fibers."},{"species":"Dog","note":"Separate metacarpophalangeal joints with muscular interossei."}],
        clinical: "<b>Septic Arthritis:</b> Common sequel to penetrating wounds (nails/wire) or foot rot extension; requires palmar pouch lavage.<br><br><b>Suspensory Breakdown:</b> Desmitis causes 'sinking' fetlock (hyperextension) beyond normal limits, altering hoof flight and causing sole ulcers.<br><br><b>Interdigital Hyperplasia:</b> Laxity of interdigital ligaments from poorly conformed heavy cattle leads to splaying, skin irritation, and proliferative granulomas (corns).",
        imgCode: "fetlock_joint"
    },
    {
        title: "Pastern Joint (Proximal Interphalangeal - PIP)",
        desc: "Synovial ginglymus (hinge) joint between proximal (P1) and middle (P2) phalanges.<br><br>Articular surfaces: Condyles of P1 articulate with glenoid cavities of P2 forming hinge mechanism.<br><br>Ligaments: Collateral ligaments provide lateral stability; palmar ligaments are fibrocartilaginous plates restricting hyperextension.<br><br>Secondary shock absorber distal to fetlock with limited lateral movement.<br><br>Clinical significance includes high ringbone (osteoarthritis) rare in cattle versus horses, and surgical ankylosis performed for chronic septic arthritis unresponsive to medical therapy.",
        eliteDesc: "<b>THE PASTERN HINGE</b><br><br>The PIP joint represents the transitional articulation between the mobile fetlock and rigid coffin, providing secondary cushioning while maintaining alignment of the digital column.<br><br><b>ARTICULAR ARCHITECTURE:</b> The condylar geometry of P1 fits into corresponding glenoid cavities of P2 (short pastern). The joint capsule is tight with limited volume—effusion causes obvious distension.<br><br><b>PALMAR LIGAMENTS:</b> Dense fibrocartilaginous plates replacing the joint capsule palmarly, preventing hyperextension while allowing full flexion. These plates blend with the collateral ligaments and the fibrocartilage of the foot.<br><br><b>FUNCTIONAL ROLE:</b> Provides 40-50° flexion range; works in concert with the fetlock to absorb ground impact before forces reach the coffin joint. The limited lateral mobility here is compensated by slight rotation at the fetlock level.",
        comparative: [
            { species: "Horse", note: "Similar anatomy but prone to high ringbone (osteoarthritis); rotational forces more common due to single digit." },
            { species: "Dog", note: "P2 often called 'middle phalanx'; similar hinge mechanics but smaller relative size." }
        ],
        clinical: "<b>High Ringbone:</b> Articular osteoarthritis rare in cattle but occurs in aged bulls; presents as bony swelling at pastern.<br><br><b>Ankylosis:</b> Surgical fusion of PIP joint (arthrodesis) used to salvage chronically infected joints when medical therapy fails; weight-bearing function preserved due to dual-digit support from adjacent healthy digit.",
        imgCode: "pastern_joint"
    },
    {
        title: "Coffin Joint (Distal Interphalangeal - DIP)",
        desc: "Synovial ginglymus between middle (P2) and distal (P3/coffin) phalanges including navicular bone.<br><br>Articular surfaces: Distal P2 articulates with proximal P3; navicular bone (distal sesamoid) lies palmar to joint surface.<br><br>Navicular bone suspended by collateral sesamoidean ligaments from P1 and anchored distally by impar ligament to flexor surface of P3.<br><br>Deep digital flexor tendon (DDFT) passes over navicular bone enclosed within navicular bursa reducing friction.<br><br>Collateral ligaments connect P2 to P3 bilaterally.<br><br>Vulnerable to 'street nail' injuries penetrating sole and entering navicular bursa causing septic bursitis—catastrophic lameness requiring surgical drainage.",
        eliteDesc: "<b>DISTAL INTERPHALANGEAL JOINT</b><br><br>The DIP joint is formed by P2, P3 and the distal sesamoid bone. The deep digital flexor tendon glides over the flexor surface of the distal sesamoid, with the navicular bursa between tendon and bone. The bursa and DIP joint are normally separate; an acquired communication may indicate injury. Penetrating foot wounds require imaging and specialist treatment rather than a universal surgical approach.",
        comparative: [
            { species: "Horse", note: "Navicular bone larger with distinct navicular syndrome (bone degeneration); single digit makes salvage critical." },
            { species: "Dog", note: "P3 called 'ungual process' with ungual crest; navicular smaller; joints more mobile." }
        ],
        clinical: "<b>Septic Navicular Bursitis:</b> Catastrophic lameness from penetrating foreign body; requires immediate surgical drainage via street nail procedure.<br><br><b>Coffin Joint Septic Arthritis:</b> Tracks from sole abscesses or white line disease; difficult to treat due to enclosed anatomy.<br><br><b>Impar Ligament Injury:</b> Rare but contributes to navicular bone instability and chronic foot lameness.",
        imgCode: "coffin_joint"
    }
],
    
    "Neurology": [
        {
            title: "Brachial Plexus Architecture",
            desc: "<b>Formation:</b> Ventral rami of C6, C7, C8, T1, and T2 (Post-fixed arrangement).<br><br><b>Key Features:</b><br>- Located deep in axillary space<br>- Forms broad 'plexus sheet' around axillary artery<br>- C6-C7: Cranial roots (shoulder/stabilization)<br>- C8-T2: Caudal roots (flexors/foot)<br><br><b>Clinical Significance:</b><br>T2 inclusion serves massive pectoral muscles and cutaneous trunci (fly swatting reflex).",
            eliteDesc: "<b>BRACHIAL PLEXUS</b><br><br>In cattle the plexus is formed chiefly by ventral branches C6-T2, with variation. The canine plexus is also classically C6-T2, so T2 is not a uniquely ruminant contribution. Roots intermingle to form the named limb nerves; clinical localization should use motor, sensory and reflex findings rather than assigning one function rigidly to a single root.",
            comparative: [{"species":"Ox","note":"Chiefly C6-T2, with individual variation."},{"species":"Horse","note":"Chiefly C6-T2; segmental contributions vary."},{"species":"Dog","note":"Classically C6-T2, not C5-T1."}],
            clinical: "<b>Root Avulsion:</b> Traction injuries can avulse C6-T1 roots from spinal cord. <b>Axillary Trauma:</b> Deep penetration wounds or hematomas can compress entire plexus causing complete forelimb paresis.",
            imgCode: "brachial_plexus"
        },
        {
            title: "Radial Nerve",
            desc: "<b>The Extensor King</b><br>- <b>Origin:</b> C7, C8, T1, T2 (caudal plexus)<br>- <b>Vulnerable Zone:</b> Musculospiral groove (caudal humerus)<br>- <b>Motor:</b> Triceps (elbow extension), all carpal/digital extensors<br>- <b>Sensory:</b> Craniolateral forearm, dorsal manus, digits III & IV<br><br><b>Lesion Patterns:</b><br><b>High (Proximal):</b> Dropped elbow (triceps paralysis), cannot bear weight<br><b>Low (Distal):</b> Knuckled fetlock only (triceps spared), can bear weight if manually placed",
            eliteDesc: "<b>THE ANTI-GRAVITY BATTERY</b><br><br>The Radial nerve is clinically the most significant nerve in the forelimb—the primary defense against gravity, powering anti-gravity muscles that convert the limb into a rigid column supporting half a ton of mass.<br><br><b>ORIGIN & PATHWAY:</b><br>Arises from caudal plexus (C7-T2), separates between subscapularis and teres major, then enters its defining anatomical feature: the <b>Musculospiral Groove</b>.<br><br><b>THE GROOVE - CRITICAL VULNERABILITY:</b><br>The nerve winds spirally around caudal/lateral humeral shaft, lying directly against periosteum, covered only by lateral head of triceps. This creates the 'perfect storm' for compressive neuropathy:<br><br>• <b>Recumbency Trauma:</b> When heavy cows lie on hard concrete or are strapped to tilt tables, ribcage weight compresses triceps → crushes radial nerve against bone<br>• <b>Fractures:</b> Humeral shaft fractures commonly injure the nerve in this groove<br><br><b>MOTOR SUPPLY:</b><br><br><b>Proximal Branches (Before Groove):</b><br>• Triceps Brachii (Long, Lateral, Medial, Accessory heads)<br>• Tensor Fasciae Antebrachii<br>• Anconeus<br><i>Function:</i> Extension of elbow—the single most critical movement for standing. If the elbow cannot extend, the limb collapses.<br><br><b>Distal Deep Branches (After Groove):</b><br>• Extensor Carpi Radialis<br>• Common Digital Extensor<br>• Lateral Digital Extensor<br>• Ulnaris Lateralis (carpal extensor in flexed position)<br><i>Function:</i> Extension of carpus and digits—prepares hoof to land flat and bear weight.<br><br><b>SENSORY DISTRIBUTION:</b><br>Superficial branch provides cutaneous sensation to craniolateral forearm and dorsal surface of manus, specifically digits III and IV. Vital for sensing 'knuckling' or dorsal placement.<br><br><b>LESION HIERARCHY:</b><br><br><b>High (Proximal) Lesion:</b> Above triceps branches. <i>Sign:</i> 'Dropped Elbow'—olecranon drops ventrally. Carpus and fetlock flex due to reciprocal tension. Toe drags. Cannot bear weight. Limb appears 'too long.'<br><br><b>Low (Distal) Lesion:</b> In musculospiral groove. <i>Sign:</i> 'Knuckled Fetlock'—triceps spared (can lock shoulder), but distal extensors paralyzed. Animal stands with carpus/fetlock partially flexed. <i>Crucial Distinction:</i> If examiner manually places hoof flat and pushes knee back, cow CAN bear weight because triceps maintains column.",
            comparative: [
                { species: "Dog", note: "More susceptible to complete radial paralysis due to less redundant innervation. Different gait compensation." },
                { species: "Horse", note: "Radial nerve paralysis similar presentation but nerve emerges from groove more cranially. Recumbency neuropathy common in anesthesia." }
            ],
            clinical: "<b>Compression Neuropathy:</b> 'Saturday Night Paralysis' in cattle from lying on hard surfaces. <b>Fracture Prognosis:</b> Humeral fractures involving the groove carry guarded prognosis for radial recovery. <b>Diagnostic Test:</b> Manual extension test distinguishes high vs low lesions—if triceps functional, manual placement allows weight bearing.",
            imgCode: "radial_nerve"
        },
        {
            title: "Median Nerve",
            desc: "<b>The Flexor Chief</b><br>- <b>Origin:</b> C8, T1, T2 (caudal roots)<br>- <b>Path:</b> Medial arm → Carpal canal → Palmar foot<br>- <b>Motor:</b> Flexor Carpi Radialis, Flexor Digitorum Superficialis, FDP (radial/humeral heads)<br>- <b>Sensory:</b> Medial and palmar aspect of foot<br><br><b>Key Relationships:</b><br>Forms Ansa Axillaris with musculocutaneous nerve around axillary artery. Passes deep to Pronator Teres (fibrous band in cattle) and through Carpal Canal.<br><br><b>Paralysis Signs:</b> Loss of flexion, 'sinking' fetlock (hyperextension), 'slapping' gait (hoof not lifted crisply), NO withdrawal on medial heel bulb.",
            eliteDesc: "<b>THE GRIPPING MECHANISM OPERATOR</b><br><br>While the Radial nerve provides structural support, the Median nerve operates the gripping mechanism—essential for traction, propulsion, and navigating uneven terrain.<br><br><b>ORIGIN & FORMATION:</b><br>Formed by C8, T1, and T2 roots. Usually arises from common trunk with Ulnar nerve, separating in mid-arm region. Forms the <b>Ansa Axillaris</b> (loop) with musculocutaneous nerve wrapping around axillary artery—intimate relationship means arterial aneurysms or trauma directly produce median neuropathy.<br><br><b>TOPOGRAPHIC COURSE:</b><br><br>1. <b>Axillary/Brachial:</b> Descends medial aspect of arm, cranial to brachial artery. Palpable on medial elbow, protected only by sparse musculature and skin.<br><br>2. <b>Antebrachial:</b> Passes deep to Pronator Teres (fibrous band in cattle—rudimentary muscle) and runs deep to Flexor Carpi Radialis.<br><br>3. <b>Carpal Canal:</b> Passes through Carpal Tunnel deep to flexor retinaculum alongside massive flexor tendons. <b>Vulnerable to compression</b> from carpal synovitis or tenosynovitis.<br><br><b>MOTOR SUPPLY:</b><br>• Flexor Carpi Radialis (FCR): Carpal flexion<br>• Flexor Digitorum Superficialis (FDS): Flexes digit at proximal interphalangeal joint (pasture joint)<br>• Flexor Digitorum Profundus (FDP) - Radial and Humeral heads: Powerhouse of digital flexion, flexing distal interphalangeal joint (coffin joint)<br>• Pronator Teres: Rudimentary in cattle<br><br><i>Functional Rationale:</i> Strong flexion required to pull hoof off ground (swing phase) and dig toes for propulsion (stance phase).<br><br><b>SENSORY DISTRIBUTION:</b><br>Supplies medial and palmar aspect of the foot. Most clinically evident deficit area.<br><br><b>CLINICAL PRESENTATION:</b><br><br><b>Motor Deficit:</b><br>• Loss of flexion power<br>• Slight 'sinking' of fetlock during weight bearing (hyperextension) due to loss of muscular tone on flexor tendons<br>• 'Slapping' gait—hoof not lifted crisply in swing phase<br><br><b>Sensory Deficit (Definitive):</b><br>Anesthesia of medial and palmar foot. <b>Key Test:</b> Cow will NOT withdraw limb when medial bulb of heel is pinched (crossed with lateral/Ulnar territory).<br><br><b>NERVE BLOCK PROTOCOL:</b><br><b>Site:</b> Medial proximal forearm<br><b>Landmark:</b> Just distal to elbow joint, cranial to brachial artery<br><b>Technique:</b> 20-gauge, 1.5-inch needle. <b>Aspiration mandatory</b> to avoid intravascular injection. Deposit 10-15mL Lidocaine.<br><b>Result:</b> Anesthesia of palmar foot majority (except lateral aspect supplied by Ulnar).",
            comparative: [
                { species: "Dog", note: "Passes between two heads of pronator teres (fleshy muscle). Carpal tunnel syndrome documented." },
                { species: "Horse", note: "Similar course but larger carpal canal. Used for 'High 4-point' block at medial aspect." }
            ],
            clinical: "<b>Clinical relevance:</b> Median-nerve injury weakens carpal and digital flexion and alters palmar sensation, with overlap from the ulnar nerve. Diagnostic or anesthetic blocks require species-specific landmarks and weight-appropriate drug dosing; fixed universal volumes are inappropriate.",
            imgCode: "median_nerve"
        },
        {
            title: "Ulnar Nerve",
            desc: "<b>The Flexor Assistant</b><br>- <b>Origin:</b> C8, T1, T2 (most caudal roots)<br>- <b>Path:</b> Diverges caudally from median → passes caudal to medial epicondyle ('funny bone') → groove between FCU and Ulnaris Lateralis<br>- <b>Motor:</b> Flexor Carpi Ulnaris, FDP (ulnar head), Interosseous muscles (fetlock support)<br>- <b>Sensory:</b> Lateral foot, caudal forearm<br><br><b>Clinical Signs:</b> 'Knuckling' (fetlock sinking due to suspensory weakness), anesthesia lateral foot.",
            eliteDesc: "<b>ULNAR NERVE</b><br><br>The ulnar nerve arises mainly from caudal brachial-plexus roots and supplies flexor carpi ulnaris, part of deep digital flexor and cutaneous territories of the caudolateral antebrachium and manus. Fetlock support is primarily passive through the interosseous/suspensory apparatus, so ulnar paralysis should not be explained as loss of active suspensory tone. Block landmarks and volumes are species- and patient-specific.",
            comparative: [{"species":"Ox","note":"Contributes motor supply to caudal forearm flexors and sensory supply to the lateral/palmar manus."},{"species":"Horse","note":"The palmar and palmar metacarpal nerves are targeted in four-point blocks at defined metacarpal levels; this is not an ulnar-nerve block at the splint-bone button."},{"species":"Dog","note":"Supplies flexor carpi ulnaris, part of deep digital flexor and caudolateral cutaneous territory."}],
            clinical: "<b>Suspensory Failure:</b> Combined median/ulnar lesions cause complete loss of deep flexor function and suspensory collapse—fetlock drops to ground. <b>Chronic Neuropathy:</b> cattle with chronic ulnar damage develop asymmetric hoof wear on lateral digit (IV) due to proprioceptive loss and abnormal landing.",
            imgCode: "ulnar_nerve"
        },
        {
            title: "Suprascapular Nerve",
            desc: "<b>Shoulder stabilizer</b><br>- <b>Origin:</b> chiefly C6-C7<br>- <b>Course:</b> passes around the cranial border/neck of the scapula between supraspinatus and subscapularis<br>- <b>Motor:</b> supraspinatus and infraspinatus<br><br><b>Vulnerability:</b> Superficial passage around the cranial scapular border predisposes it to compression and traction injury.",
            eliteDesc: "<b>SUPRASCAPULAR NERVE</b><br><br>This predominantly motor nerve supplies supraspinatus and infraspinatus. It courses around the cranial border/neck of the scapula, not through a notch at the base of the spine. Injury causes neurogenic atrophy and lateral shoulder instability. Neurapraxia often recovers; axonotmesis can recover by axonal regeneration when connective sheaths remain intact, whereas neurotmesis has a poor prognosis.",
            comparative: [
                { species: "Dog", note: "Sweeney rare. Different gait compensation (weight shifted to front). Acromion anatomy different." },
                { species: "Horse", note: "Classic Sweeney well-documented. Nerve more accessible for surgical decompression at notch." }
            ],
            clinical: "<b>Sweeney Diagnosis:</b> Key differentiator from brachial plexus injury is PRESERVATION OF SENSATION (pure motor nerve) and ability to bear weight (limb doesn't drag). <b>Atrophy Pattern:</b> Muscle wasting makes spine appear more prominent—classic 'shark fin' appearance on lateral scapula. <b>Pain:</b> Usually non-painful unless acute neuritis present.",
            imgCode: "suprascapular_nerve"
        },
        {
            title: "Musculocutaneous Nerve",
            desc: "<b>Elbow Flexor & Medial Sensory</b><br>- <b>Origin:</b> C6, C7<br>- <b>Path:</b> Runs fused with median nerve proximally (Ansa Axillaris), then dives between biceps and brachialis<br>- <b>Motor:</b> Biceps Brachii, Brachialis (primary elbow flexors)<br>- <b>Sensory:</b> Medial Cutaneous Antebrachial Nerve → medial forearm skin<br><br><b>Clinical:</b> Injury weakens elbow flexion (often masked by extensor tone), causes medial forearm anesthesia.",
            eliteDesc: "<b>THE ELBOW FLEXOR & MEDIAL SENSORY SUPPLIER</b><br><br>The Musculocutaneous nerve serves dual roles: motor control of the primary elbow flexors and sensory innervation of the medial forearm.<br><br><b>ORIGIN & FUSION:</b><br>Arises from C6-C7. Unlike other species where it separates early, in cattle it runs distally <b>fused with the median nerve in the proximal arm</b> forming the Ansa Axillaris loop around the axillary artery. This is both a landmark and a surgical hazard.<br><br><b>MOTOR COURSE:</b><br>Separates from median nerve and dives deep between:<br>• Biceps Brachii (cranial)<br>• Brachialis (caudal)<br><br><b>MOTOR TARGETS:</b><br>• <b>Biceps Brachii:</b> Primary elbow flexor, also stabilizes shoulder via its tendon<br>• <b>Brachialis:</b> Synergistic elbow flexor, powerful in cattle for pulling limb forward during recovery<br><br><i>Functional Note:</i> These muscles are essential for the 'recovery stroke'—pulling the advanced limb back toward the body during the stride.<br><br><b>SENSORY DISTRIBUTION:</b><br>Distal continuation becomes the <b>Medial Cutaneous Antebrachial Nerve</b>:<br>• Exits between biceps and brachialis<br>• Supplies skin on medial aspect of forearm from elbow to carpus<br>• Used to test C6-C7 integrity<br><br><b>CLINICAL SIGNIFICANCE:</b><br><br><b>Motor Deficit:</b> Weakens elbow flexion but often <b>clinically masked</b> because:<br>1. Extensor tone (triceps/radial) often dominates in standing cattle<br>2. Gravity assists flexion during swing phase<br>3. Weight bearing appears normal<br><br>Deficit only apparent during attempts at rapid flexion or climbing.<br><br><b>Sensory Deficit:</b> Anesthesia of medial forearm skin. Useful for neuroanatomic localization (differentiates from C8-T1 lesions which spare this area).<br><br><b>ASSOCIATION WITH AXILLARY ARTERY:</b><br>Because of the Ansa Axillaris relationship, hematoma or thrombosis of axillary artery frequently affects both median AND musculocutaneous nerves simultaneously.",
            comparative: [
                { species: "Dog", note: "Separates earlier from median nerve. Innervates brachialis more extensively." },
                { species: "Horse", note: "Similar ansa axillaris formation. Critical for 'cubitators' (elbow flexors)." }
            ],
            clinical: "<b>Clinical relevance:</b> Injury weakens elbow flexion and may reduce sensation on the medial antebrachium. Axillary masses or trauma may affect it together with the median nerve. Dehorning is anatomically remote and should not be listed as a mechanism of musculocutaneous injury.",
            imgCode: "musculocutaneous_nerve"
        },
        {
            title: "Axillary Nerve",
            desc: "<b>Lateral Shoulder Controller</b><br>- <b>Origin:</b> C6, C7<br>- <b>Path:</b> Dives into quadrangular space (between subscapularis and teres major) to reach lateral shoulder<br>- <b>Motor:</b> Deltoid, Teres Major, Teres Minor (shoulder flexors)<br>- <b>Sensory:</b> Cranial Lateral Cutaneous Brachial Nerve → lateral shoulder skin<br><br><b>Clinical:</b> Atrophy of deltoid, small patch of anesthesia over lateral shoulder. Less debilitating than suprascapular injury.",
            eliteDesc: "<b>THE LATERAL SHOULDER CONTROLLER</b><br><br>The Axillary nerve supplies the 'meat' muscles of the lateral shoulder—the flexors and rotators that fine-tune shoulder position during the stride.<br><br><b>ORIGIN & PATHWAY:</b><br>Arises from C6-C7 roots. Takes characteristic deep course through the <b>quadrangular space</b>—an anatomical interval bounded by:<br>• Cranial: Subscapularis<br>• Caudal: Teres Major<br>• Lateral: Humeral shaft<br><br>Emerges into lateral shoulder region to innervate the deltoid complex.<br><br><b>MOTOR SUPPLY:</b><br>• <b>Deltoid (Deltoideus):</b> Shoulder flexion and abduction<br>• <b>Teres Major:</b> Shoulder flexion and adduction (assists latissimus dorsi)<br>• <b>Teres Minor:</b> Lateral stabilization and rotation<br><br><i>Functional Role:</b> These muscles provide the 'shock absorption' and positioning control for the shoulder joint during impact phase of stride.<br><br><b>SENSORY DISTRIBUTION:</b><br>Continues as the <b>Cranial Lateral Cutaneous Brachial Nerve</b>:<br>• Emerges at cranial border of deltoid or through muscle belly<br>• Supplies skin over point of the shoulder and lateral brachium<br>• Overlaps with radial nerve territory<br><br><b>CLINICAL PRESENTATION:</b><br><br><b>Motor Deficits:</b> Less functionally debilitating than suprascapular nerve injury because infraspinatus (radial stabilization) remains intact.<br>• Subtle atrophy of deltoid—flattening of lateral shoulder contour<br>• Weakness in shoulder flexion and abduction<br>• Normal weight bearing maintained<br><br><b>Sensory Deficits:</b> Small patch of anesthesia over lateral shoulder (often missed unless specifically tested).<br><br><b>INJURY MECHANISMS:</b><br>• <b>Cranial dislocations of humerus:</b> Humeral head compresses nerve against caudal border of subscapularis<br>• <b>Deep shoulder wounds:</b> Penetrating trauma to quadrangular space<br>• <b>Fractures:</b> Proximal humeral fractures involving surgical neck",
            comparative: [
                { species: "Dog", note: "More susceptible to injury due to mobility of shoulder joint. Quadrangular space smaller." },
                { species: "Horse", note: "Deltoid complex less developed. Similar quadrangular space anatomy." }
            ],
            clinical: "<b>Differential Diagnosis:</b> Isolated axillary injury rarely causes lameness visible at walk. Recognized by deltoid atrophy + intact sensation over lateral forearm (radial territory) combined with small sensory patch deficit. <b>Prognosis:</b> Better than suprascapular injury—often recovers with rest as shoulder position less critical for weight bearing.",
            imgCode: "axillary_nerve"
        },
        {
            title: "Regional Anesthesia - Nerve Blocks",
            desc: "<b>Regional anesthesia of the bovine distal limb</b><br><br>Intravenous regional anesthesia, perineural blocks and ring infiltration may be used for selected procedures. Technique, tourniquet placement, agent, concentration, total dose and duration must be chosen for the individual animal by a trained veterinarian. Current terminology uses palmar rather than volar.",
            eliteDesc: "<b>SAFE PRINCIPLES FOR BOVINE FORELIMB ANESTHESIA</b><br><br>Choose the block from the operative site and known sensory distribution. For IV regional anesthesia, confirm venous placement, use an appropriate tourniquet and calculate the local-anesthetic dose from species, body weight, drug and concentration. Median, ulnar, palmar and palmar metacarpal blocks require species-specific landmarks. Do not publish universal volumes, needle sizes, ischemic time limits or a claim that slow tourniquet release alone prevents systemic toxicity. These procedures require veterinary training and monitoring.",
            comparative: [{"species":"Cattle","note":"IV regional anesthesia or targeted distal-limb blocks may be used by trained veterinarians with calculated dosing."},{"species":"Horse","note":"Diagnostic palmar and four-point blocks use equine-specific landmarks and terminology; protocols are not interchangeable with cattle."},{"species":"Dog","note":"Peripheral nerve blocks use small-animal-specific ultrasound or landmark guidance and weight-based dosing."}],
            clinical: "<b>Safety Protocols:</b> IVRA tourniquet must be released SLOWLY to prevent lidocaine toxicity (seizures). Never exceed 4mg/kg lidocaine total dose. <b>Troubleshooting:</b> If block fails, usually due to insufficient volume (bovine tissues require MORE than equine) or injection too proximal (tourniquet effect blocks diffusion). <b>Alternative:</b> When tourniquet contraindicated (infection, dermatitis), use specific nerve blocks rather than IVRA.",
            imgCode: "nerve_blocks"
        }
    ],
    
    "Angiology": [
        {
            title: "Arterial Tree of the Forelimb (Subclavian → Digital)",
            desc: "<b>Sequence (Ox):</b><br>Subclavian → <b>Axillary</b> → <b>Brachial</b> → <b>Median</b> → <b>Palmar Common Digital II/III/IV</b> → <b>Proper Palmar Digital</b> arteries.<br><br>• <b>Axillary a.</b> begins at first rib, lies in axillary space — <b>chief vessel of the forelimb</b>.<br>• <b>Brachial a.</b> = continuation along medial arm; gives off Deep Brachial → musculospiral groove.<br>• <b>Median a.</b> is the main continuation in the forearm (NOT radial like in humans!) — runs through carpal canal.<br>• Distally splits into common digital arteries that supply the cloven hoof.<br><br><b>Cephalic vein</b> on cranial forearm = <b>standard IV site in dog</b>.<br><b>Jugular vein</b> = main IV site in cattle/horse (not a forelimb vein, but commonly grouped clinically).",
            eliteDesc: "<b>FORELIMB ARTERIAL TREE</b><br><br>In cattle the aortic arch gives a single brachiocephalic trunk. That trunk gives rise to both subclavian arteries and the bicarotid trunk; the left subclavian does not arise directly from the arch. Each subclavian continues as axillary, brachial and chiefly median arterial pathways to the palmar common and proper digital arteries. The radial artery is comparatively small but should not be described as universally absent or functionless.",
            comparative: [
                { species: "Ox", note: "Median artery dominant; radial vestigial. Cephalic + accessory cephalic prominent. Hoof corium fed by solar arch from proper palmar digitals." },
                { species: "Horse", note: "Median artery is also dominant. Pulse routinely taken at <b>facial artery</b> at mandible (not forelimb). Distal limb: medial palmar digital artery used for diagnostic 'palmar digital block' pulse check." },
                { species: "Dog", note: "Cephalic vein is the routine IV site. Brachial pulse felt on medial elbow. Femoral pulse (hindlimb) commonly used for cardiac assessment." },
                { species: "Fowl", note: "Brachial artery main vessel. Wing veins (basilic / ulnar) used for venepuncture in birds (radiometacarpal anastomosis)." }
            ],
            clinical: "<b>Cephalic Venepuncture (Dog):</b> Distal cranial forearm — most common IV site in small animal practice.<br><b>Jugular vein</b> in large animals — clinically the practical 'forelimb-region' IV.<br><b>Hoof Pulse Examination (Horse):</b> Increased digital pulse at the abaxial sesamoid → laminitis warning.<br><b>Aneurysm/Thrombosis of Brachial/Axillary Artery:</b> Compression neuropathy of the median + musculocutaneous nerves due to Ansa Axillaris relationship.",
            imgCode: "forelimb_arteries"
        },
        {
            title: "Forelimb Lymph Nodes & Surface Veins",
            desc: "<b>Key lymph structures:</b> Superficial cervical nodes drain much of the neck, shoulder and proximal limb; axillary nodes drain deeper limb structures. Size, number and palpability vary.<br><br><b>Venous access:</b> The cephalic vein is standard in small animals and the jugular is standard in large animals. The subcutaneous abdominal or milk vein is not a recommended routine or rescue IV-access site because hemorrhage and hematoma can be severe.",
            eliteDesc: "<b>LYMPH NODES AND SURFACE VEINS</b><br><br>The superficial cervical lymph centre lies cranial to the shoulder deep to the cervical muscles and is commonly examined in cattle. Axillary nodes are deep and not normally palpable. Cubital-node presence varies by species and individual. For venous access use standard species-appropriate sites, especially the jugular in large animals and cephalic or saphenous veins in small animals. Do not teach the milk vein as a last-resort catheter site.",
            comparative: [
                { species: "Cattle", note: "Prescapular LN routinely palpated and used for meat inspection. Jugular = standard IV." },
                { species: "Dog/Cat", note: "Prescapular LN palpable in slim animals — generalized enlargement = lymphoma. Cephalic vein = first IV choice." },
                { species: "Horse", note: "Jugular venepuncture in upper third of jugular furrow. Avoid lower third (close to common carotid)." }
            ],
            clinical: "<b>Clinical relevance:</b> Persistent lymph-node enlargement requires examination and diagnostic testing. Repeated traumatic venepuncture can cause jugular thrombophlebitis. Avoid puncture of the subcutaneous abdominal vein because uncontrolled bleeding and hematoma may occur.",
            imgCode: "forelimb_lymph"
        }
    ],
    "Splanchnology": []  // No visceral organs in the forelimb (intentionally empty per VCI Unit-2)
};

// Verified regional additions (2026-07): complete nerve and vessel coverage without replacing existing lessons.
(function applyVerifiedForelimbAudit() {
    var region = atlasData["Forelimb"];
    function entry(section, title) {
        return (region[section] || []).find(function (item) { return item.title === title; });
    }















    var arterial = entry("Angiology", "Arterial Tree of the Forelimb (Subclavian → Digital)");
    if (arterial && arterial.comparative) {
        arterial.comparative = arterial.comparative.map(function (row) {
            return row.species === "Ox" ? { species: "Ox", note: "Median artery is dominant distally; the radial artery is comparatively small but present. Palmar common and proper digital arteries supply the claws." } : row;
        });
    }


















    if (!entry("Neurology", "Other Proximal Brachial Plexus Branches")) {
        region.Neurology.splice(1, 0, {
            title: "Other Proximal Brachial Plexus Branches",
            desc: "<b>Subscapular nerves:</b> Supply subscapularis.<br><b>Thoracodorsal nerve:</b> Supplies latissimus dorsi.<br><b>Long thoracic nerve:</b> Supplies thoracic serratus ventralis.<br><b>Lateral thoracic nerve:</b> Supplies cutaneous trunci and contributes to the efferent limb of the cutaneous-trunci reflex.<br><b>Pectoral nerves:</b> Supply superficial and deep pectoral muscles. Root contributions and branching vary.",
            eliteDesc: "<b>PROXIMAL PLEXUS BRANCHES</b><br><br>Subscapular, thoracodorsal, long-thoracic, lateral-thoracic and pectoral nerves stabilize the scapula and connect the limb to the trunk. Long-thoracic injury weakens the thoracic part of serratus ventralis and may destabilize the muscular sling. Lateral-thoracic injury can abolish the ipsilateral motor response of the cutaneous-trunci reflex despite intact sensation entering elsewhere. These nerves should not be omitted from a complete brachial-plexus map.",
            comparative: [
                { species: "Ox", note: "Well-developed trunk-sling and cutaneous-trunci pathways reflect large body mass and skin mobility." },
                { species: "Horse", note: "Comparable proximal branches supply the synsarcosis and cutaneous trunci." },
                { species: "Dog", note: "Long-thoracic and lateral-thoracic nerves are important in scapular support and neurologic localization." }
            ],
            clinical: "<b>Localization:</b> Combine scapular position, muscle atrophy and the cutaneous-trunci reflex; one absent skin twitch does not automatically identify a spinal-cord lesion.",
            imgCode: "proximal_brachial_branches"
        });
    }

    if (!entry("Neurology", "Distal Palmar and Digital Nerves")) {
        var regionalIndex = region.Neurology.findIndex(function (item) { return item.title === "Regional Anesthesia - Nerve Blocks"; });
        region.Neurology.splice(regionalIndex < 0 ? region.Neurology.length : regionalIndex, 0, {
            title: "Distal Palmar and Digital Nerves",
            desc: "<b>Bovine manus:</b> Median and ulnar nerves contribute palmar branches; the superficial radial nerve contributes dorsal branches. Palmar and dorsal common digital nerves divide into axial and abaxial proper digital nerves for digits III and IV. Territories overlap around the claws.",
            eliteDesc: "<b>DISTAL FORELIMB INNERVATION</b><br><br>At the carpus and metacarpus, median, ulnar and superficial-radial branches form communicating dorsal and palmar pathways. Each functional digit receives axial and abaxial proper-digital branches. The deep ulnar branch supplies interosseous structures. Equine palmar/palmar-metacarpal terminology and block levels differ from bovine common/proper-digital anatomy, so blocks must be named by exact nerve and level.",
            comparative: [
                { species: "Ox", note: "Two functional digits have axial and abaxial palmar/dorsal proper digital nerves." },
                { species: "Horse", note: "Medial/lateral palmar nerves and palmar metacarpal nerves serve the single digit at defined levels." },
                { species: "Dog", note: "Palmar and dorsal digital branches serve multiple digits with overlapping territories." }
            ],
            clinical: "<b>Blocks:</b> Palmar, palmar-metacarpal and digital techniques are not interchangeable across cattle and horses; use current species-specific landmarks and calculated dosing.",
            imgCode: "forelimb_distal_nerves"
        });
    }



    if (!entry("Angiology", "Axillary and Brachial Branches")) {
        region.Angiology.splice(1, 0, {
            title: "Axillary and Brachial Branches",
            desc: "<b>Proximal vessel map:</b> Axillary branches supply the shoulder and scapular region; brachial branches supply the arm, elbow and forearm. Key named branches include subscapular, thoracodorsal, circumflex scapular, cranial/caudal circumflex humeral, deep brachial, collateral ulnar and interosseous arteries. Exact order and common trunks vary by species.",
            eliteDesc: "<b>PROXIMAL FORELIMB VESSELS</b><br><br>The subscapular artery is the major axillary branch and divides into circumflex scapular and thoracodorsal pathways. Cranial and caudal circumflex humeral vessels surround the shoulder region. The deep brachial artery accompanies the radial nerve in the brachialis groove; the main brachial artery remains medial. Distally, collateral ulnar and interosseous branches supply the elbow and antebrachium. These relations explain why proximal trauma can injure vessels and nerves together.",
            comparative: [
                { species: "Ox", note: "Median artery is the dominant continuation; cranial interosseous supply reaches the extensor compartment through the interosseous space." },
                { species: "Horse", note: "Common interosseous and median pathways are prominent; distal branching differs from cattle." },
                { species: "Dog", note: "Brachial artery divides into species-specific median, radial, ulnar and interosseous branches." }
            ],
            clinical: "<b>Topography:</b> The radial nerve accompanies deep brachial vessels around the humerus, while the median nerve follows the main brachial/median trunk medially.",
            imgCode: "forelimb_proximal_vessels"
        });
    }

    if (!entry("Angiology", "Distal Forelimb Vessels")) {
        region.Angiology.splice(2, 0, {
            title: "Distal Forelimb Vessels",
            desc: "<b>Cattle:</b> The median artery supplies palmar common digital arteries and then axial and abaxial proper digital arteries for digits III and IV. Dorsal and palmar networks communicate around the carpus, metacarpus and digits. Veins form paired deep channels and a rich superficial/digital network.",
            eliteDesc: "<b>DISTAL VASCULAR PATTERN</b><br><br>At the bovine carpus and metacarpus, median, radial and interosseous contributions form dorsal and palmar anastomoses. Palmar common digital vessels divide into proper digital vessels along axial and abaxial surfaces of the two principal digits. Digital arteries supply the corium, distal phalanx and associated soft tissues. Because bovine and equine distal nomenclature differs, equine medial/lateral palmar-artery descriptions must not be copied unchanged to the cloven foot.",
            comparative: [
                { species: "Ox", note: "Paired functional digits receive axial and abaxial proper digital vessels." },
                { species: "Horse", note: "Medial and lateral palmar digital arteries supply the single digit." },
                { species: "Dog", note: "Dorsal and palmar metacarpal vessels supply multiple digits." }
            ],
            clinical: "<b>Clinical relevance:</b> Distal intravenous regional anesthesia uses a suitable vein under a tourniquet; it is not an intra-arterial technique.",
            imgCode: "forelimb_distal_vessels"
        });
    }
})();

(function applyForelimbFinalErrata() {
    var region = atlasData["Forelimb"];
    var rules = [
        [/functioning as rigid locking pivot in stay apparatus/g, "functioning as a stable compound hinge; it has no special snap-lock stay mechanism"],
        [/Lateral collateral ligament originates eccentrically \(caudal to rotation center\) creating 'snap' mechanism—elastic recoil locks joint in full extension without muscular effort\./g, "The lateral and medial collateral ligaments stabilize the joint but do not create a bovine elbow snap-lock mechanism."],
        [/<b>The cloven hoof bone<\/b>/g, "<b>The distal phalanx of one claw</b>"],
        [/Lateral Styloid belongs to RADIUS/g, "Lateral styloid is the distal ulnar remnant fused to the radius"],
        [/pure motor nerve/g, "predominantly motor nerve with small articular sensory components"],
        [/adds 3-5 cm of attachment area/g, "increases the available muscular attachment area"],
        [/Palpable groove ~10cm proximal to accessory carpal bone/g, "Palpable groove at a species-appropriate level proximal to the accessory carpal bone"],
        [/Two proximal interosseous fenestrae remain for vascular passage/g, "Proximal and distal interosseous spaces remain and transmit species-specific vessels"],
        [/Anconeal process locks into olecranon fossa during extension providing bony stability/g, "Anconeal process seats in the olecranon fossa during extension, contributing ordinary bony congruity"],
        [/fractures complicated by lack of interosseous give/g, "fracture prognosis depends on location, displacement, soft-tissue injury and patient factors"],
        [/\bvestigial\b/gi, "rudimentary"]
    ];
    function rewrite(value) {
        if (typeof value === "string") { rules.forEach(function (r) { value = value.replace(r[0], r[1]); }); return value; }
        if (Array.isArray(value)) return value.map(rewrite);
        if (value && typeof value === "object") Object.keys(value).forEach(function (k) { value[k] = rewrite(value[k]); });
        return value;
    }
    rewrite(region);
})();

// Phrase-level errata: retain the complete original lessons and change only
// the inaccurate statement itself.
(function applyForelimbPhraseErrata() {
    var region = atlasData["Forelimb"];
    var rules = [
        [/Lateral \(Costal-opposing\) surface/g, "Lateral surface"],
        [/very prominent in horse, replaces acromion/g, "very prominent in the horse; the horse lacks an acromion"],
        [/radial nerve \+ brachial artery branches/g, "radial nerve + deep brachial vessels"],
        [/the radial nerve \+ brachial artery branches/g, "the radial nerve + deep brachial vessels"],
        [/in horse it belongs to radius!/g, "in the horse it is the distal ulnar remnant fused to the radius"],
        [/Dog = SEPARATE, mobile, full pronation\/supination/g, "Dog = separate bones with limited pronation/supination; cats are generally more mobile"],
        [/Proximal Row \(4 bones, lateral → medial\):/g, "Proximal row components (radial, intermediate and ulnar from medial to lateral; accessory lies palmar to the ulnar carpal):"],
        [/full primitive/g, "complete eight-bone"],
        [/weakest area, common laminitis site/g, "junction of wall and sole horn; important in white-line disease"],
        [/P3 is 'ungual crest' = claw-shaped/g, "P3 bears an ungual process and crest that support the claw"],
        [/rotation subtle due to fused elbow joints/g, "rotation is limited chiefly by overall shoulder conformation and surrounding soft tissues"],
        [/Cleobrachialis/g, "Cleidobrachialis"],
        [/Function:<\/b> Flexes shoulder; adducts limb/g, "Function:</b> Adducts and stabilizes the shoulder and assists extension according to joint position"],
        [/true abductor of digit II/g, "abductor digiti I longus, inserting on metacarpal I and acting on digit I/carpus"],
        [/Often fused with common extensor or absent in some breeds/g, "A distinct normal muscle whose tendons commonly extend digits III-V"],
        [/Glenohumeral ligament present \(thickening of capsule\) provides stability/g, "Capsule and periarticular muscles provide stability; cattle and horses have no true collateral ligaments"],
        [/True collateral ligaments present \(medial \+ lateral\)/g, "Capsular medial and lateral glenohumeral ligaments are present; they are not robust ungulate-style collateral ligaments"],
        [/Special 'Snap-Lock' Mechanism/g, "Normal extension geometry (not a snap-lock mechanism)"],
        [/anconeal process locks into deep olecranon fossa during extension, creating passive stability/g, "the anconeal process seats in the olecranon fossa during extension and contributes ordinary joint congruity"],
        [/Similar snap mechanism/g, "No special elbow snap-lock mechanism"],
        [/Ulnaris Lateralis \(carpal extensor in flexed position\)/g, "Ulnaris Lateralis (a carpal flexor despite radial innervation)"],
        [/used for high 4-point block/g, "not the structure targeted by an equine high four-point block"],
        [/fetlock sinking due to suspensory weakness/g, "weakness of selected flexors with altered caudolateral/palmar sensation; passive suspensory support remains ligamentous"],
        [/Surgical decompression at scapular notch may be needed/g, "Surgical management, when indicated, follows the nerve around the cranial scapular border; cattle do not have the described scapular notch"],
        [/'Saturday Night Paralysis' in cattle/g, "compression neuropathy in recumbent cattle"],
        [/radial vestigial/g, "radial artery comparatively small but present"],
        [/clinically the practical 'forelimb-region' IV/g, "a neck-region vessel and the principal large-animal IV site"],
        [/tourniquet must be released SLOWLY to prevent lidocaine toxicity \(seizures\)\. Never exceed 4mg\/kg lidocaine total dose\./g, "tourniquet use, release, drug and total dose must follow a current species- and patient-specific protocol; slow release alone does not prevent local-anesthetic toxicity."],
        [/If block fails, usually due to insufficient volume \(bovine tissues require MORE than equine\) or injection too proximal \(tourniquet effect blocks diffusion\)\./g, "If a block fails, reassess anatomy, placement, tourniquet function, drug choice and patient factors rather than automatically increasing volume."],
        [/20-gauge, 1\.5-inch needle\. <b>Aspiration mandatory<\/b> to avoid intravascular injection\. Deposit 10-15mL Lidocaine\./g, "Needle, approach, drug and dose must be selected from a current bovine procedural reference and calculated for the patient."],
        [/palpable groove ~10cm proximal to accessory carpal bone/g, "palpable species-specific groove proximal to the accessory carpal bone"],
        [/groove between FCU \(medial\) and Ulnaris Lateralis \(lateral\) ~10cm proximal to accessory carpal bone/g, "groove between FCU and ulnaris lateralis at a species-appropriate level proximal to the accessory carpal bone"]
    ];
    function rewrite(value) {
        if (typeof value === "string") {
            rules.forEach(function (rule) { value = value.replace(rule[0], rule[1]); });
            return value;
        }
        if (Array.isArray(value)) return value.map(rewrite);
        if (value && typeof value === "object") {
            Object.keys(value).forEach(function (key) { value[key] = rewrite(value[key]); });
        }
        return value;
    }
    rewrite(region);
})();
