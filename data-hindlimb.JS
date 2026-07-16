// =========================================================
// HINDLIMB & PELVIS DATA MODULE
// Covers: Pelvic girdle + entire hindlimb + pelvic clinical sites
// Systems: Osteology, Myology, Arthrology, Neurology, Angiology
// Syllabus: VCI Unit-6 (UG B.V.Sc 1st Year)
// Status: All Sections [Complete - Refined for UG]
// =========================================================

if (typeof atlasData === 'undefined') {
    var atlasData = {};
}

atlasData["Hindlimb & Pelvis"] = {

    // =====================================================
    // OSTEOLOGY
    // =====================================================
    "Osteology": [
        {
            title: "Os Coxae (Hip Bone)",
            desc: "Large irregular bone of the pelvic girdle.<br><br><b>Ox standard:</b> ilium, ischium and pubis unite around the acetabulum; a small acetabular bone also contributes during development before fusion.<br><br><b>Palpable landmarks:</b> tuber coxae (hook), tuber sacrale and tuber ischiadicum (pin).<br><br><b>Other features:</b><br>- <b>Acetabulum</b>: socket for the femoral head, with lunate surface, fossa and notch.<br>- <b>Obturator foramen</b>: largely closed by the obturator membrane/muscles; the obturator nerve and vessels leave through the obturator canal at its cranial margin.<br>- <b>Pelvic symphysis</b>: union of right and left pubis and ischium.",
            eliteDesc: "<b>THE HIP BONE — OS COXAE</b><br><br>Each os coxae consists principally of ilium, ischium and pubis, which unite around the acetabulum; a small acetabular bone contributes during development. The paired hip bones meet at the pelvic symphysis and articulate with the sacrum at the sacroiliac joints.<br><br><b>Palpable bovine landmarks:</b> tuber coxae, tuber sacrale and tuber ischiadicum.<br><br><b>Acetabulum:</b> Its lunate surface articulates with the femoral head; the acetabular fossa is non-articular and the notch interrupts the rim.<br><br><b>Obturator region:</b> The large foramen is occupied mainly by obturator membrane and muscles. The obturator nerve and vessels pass through the obturator canal at the cranial margin rather than freely through the entire opening.<br><br><b>Sex differences:</b> Female pelvic dimensions are generally more favorable for parturition, but shape varies with breed and individual.",
            comparative: [
                { species: "Horse", note: "Pelvis narrower; acetabulum deeper. Tuber coxae very prominent (point of hip)." },
                { species: "Dog", note: "Smaller, more horizontal pelvis. Common site of HIP DYSPLASIA — shallow acetabulum + loose hip → arthritis." },
                { species: "Pig", note: "Wide flat ilium; tuber coxae less obvious." },
                { species: "Fowl", note: "Os coxae fused with synsacrum (sacrum + lumbar + caudal vertebrae). Pubic symphysis OPEN in females (allows large egg passage). Renal fossa lodges kidneys." }
            ],
            clinical: "<b>Pelvimetry:</b> Measuring pelvic inlet in heifers before first calving — narrow inlet predicts dystocia.<br><b>Calving paralysis (downer cow):</b> Compression of the obturator nerve as it crosses the floor of pelvis during difficult calf delivery → cow cannot rise; legs splay sideways.<br><b>Hip Dysplasia (Dog):</b> Shallow acetabulum → loose hip joint → painful arthritis in large breeds.",
            imgCode: "os_coxae"
        },
        {
            title: "Sacrum & Coccygeal (Tail) Vertebrae",
            desc: "<b>Sacrum (Ox):</b><br>- <b>5 sacral vertebrae</b> fused into a single triangular bone.<br>- Forms the roof of the pelvis.<br>- Articulates with ilium (sacroiliac joint).<br>- <b>Sacral foramina</b> (4 dorsal + 4 ventral pairs) for sacral nerves.<br>- <b>Sacral canal</b> continues spinal canal — site for CAUDAL EPIDURAL.<br><br><b>Coccygeal (Caudal) Vertebrae:</b><br>- Number variable: <b>~18-20 in ox</b>, ~18 in horse, 20-23 in dog, 20-23 in pig.<br>- First few resemble lumbar; rest become simple rod-like bones.<br>- Lose spines, transverse processes, and arches caudally.<br>- <b>Hemal arches/processes</b> on ventral surface of cranial coccygeal vertebrae (Cy3-Cy4 in ox) — protect ventral coccygeal artery (used to feel pulse in cattle).",
            eliteDesc: "<b>SACRUM</b><br><br>In cattle the sacrum is normally formed by five fused sacral vertebrae and transmits weight between the vertebral column and ilia. Its base bears the promontory; its apex joins the first caudal vertebra; auricular surfaces articulate with the ilia; dorsal and ventral sacral foramina transmit branches of sacral nerves.<br><br>The <b>sacral canal</b> continues the vertebral canal and contains meninges and cauda-equina nerve roots. The cauda equina is not the caudal end of the spinal cord; it is the bundle of roots caudal to the conus medullaris. In adult cattle the conus may extend to the lumbosacral/S1 region, which is clinically important.<br><br>Caudal vertebral number and reduction vary. Hemal processes/arches protect ventral caudal vessels in proximal tail segments. Standard bovine caudal epidural access is at the sacrocaudal or first intercoccygeal space, identified by careful palpation and performed using species-appropriate technique.",
            comparative: [
                { species: "Horse", note: "Sacrum has 5 vertebrae too, but spinous processes are SEPARATE (median crest is interrupted). Coccygeal ~18." },
                { species: "Dog", note: "Sacrum has 3 fused vertebrae only. Coccygeal vertebrae 20-23 (long tail)." },
                { species: "Pig", note: "Sacrum 4 vertebrae. Coccygeal ~20-23." },
                { species: "Fowl", note: "Sacrum + last thoracics + lumbars + first coccygeals all fuse into a single bone called the <b>SYNSACRUM</b>. Last 4-6 caudal vertebrae fuse into <b>PYGOSTYLE</b> (supports tail feathers)." }
            ],
            clinical: "<b>Caudal Epidural Anaesthesia (cattle):</b> Local anaesthetic injected into the epidural space at the S5-Cy1 or Cy1-Cy2 junction. Used for: obstetric procedures, vaginal/rectal/perineal surgery, prolapse correction. The injection blocks the last sacral and all coccygeal nerves — anus, vulva and tail become numb but the cow stays standing.<br><b>Cranial Epidural:</b> Higher dose at L6-S1 — paralyses the hindlimbs (animal must be cast). Used for major hindlimb/udder surgery.<br><b>Tail bleeding (coccygeal venipuncture):</b> Standard route to draw blood from cattle — needle inserted on the ventral midline of tail at Cy3-Cy4 level into the ventral coccygeal vessel.",
            imgCode: "sacrum_coccyx"
        },
        {
            title: "Femur (Thigh Bone)",
            desc: "The femur is the bone of the thigh. Proximally it has a head with fovea, neck, greater and lesser trochanters and trochanteric fossa. Distally it bears medial/lateral condyles, intercondylar fossa and the femoral trochlea. The equine third trochanter is exceptionally prominent; a small or poorly developed third trochanter is also present in the dog.",
            eliteDesc: "<b>FEMUR — THIGH BONE</b><br><br>The femur transmits weight from hip to stifle. The head articulates with the acetabulum and bears a fovea for the ligament of the femoral head. The greater trochanter receives gluteal insertions; iliopsoas inserts on the lesser trochanter. Distally, the condyles articulate with the tibia and menisci, while the trochlea guides the patella. In the horse the medial trochlear ridge is enlarged for the passive stay apparatus. The third trochanter is a large plate in the horse but a much smaller prominence in the dog; it should not be called exclusively equine.",
            comparative: [
                { species: "Horse", note: "<b>Third trochanter PRESENT</b> on lateral shaft. Medial trochlear ridge very tall & hooked at top — patella locks over it (stay apparatus)." },
                { species: "Dog", note: "Third trochanter present but poorly developed. Trochlear ridges are less asymmetric than in the horse. Hip dysplasia is clinically important." },
                { species: "Pig", note: "Short, robust femur; no third trochanter." },
                { species: "Fowl", note: "Short, light femur; no third trochanter. Held nearly horizontal under body." }
            ],
            clinical: "<b>Femoral Head Fracture / Capital Femoral Fracture:</b> Common in puppies/calves after road accidents.<br><b>Upward Fixation of Patella (Horse):</b> The medial patellar ligament catches over the tall medial trochlear ridge → leg is locked in extension; the horse drags the toe.",
            imgCode: "femur"
        },
        {
            title: "Patella (Knee Cap)",
            desc: "Largest <b>sesamoid bone</b> of the body.<br><br><b>Lies in:</b> Tendon of insertion of QUADRICEPS FEMORIS muscle.<br><br><b>Articulates with:</b> Trochlea (patellar groove) of femur.<br><br><b>Shape (Ox):</b> Rounded, somewhat 4-sided; thick.<br><br><b>Functions:</b><br>- Increases the leverage of quadriceps for stifle extension.<br>- Protects the front of the stifle joint.<br><br><b>3 Patellar Ligaments hold it down to the tibia (in horse, ox):</b> Medial, Middle, Lateral patellar ligaments.<br><br><b>Special: Parapatellar fibrocartilages</b> on medial and lateral sides — extend the patellar surface.",
            eliteDesc: "<b>PATELLA — THE KNEE CAP</b><br><br>The patella is the <b>largest sesamoid bone</b> in the body. It develops within the tendon of the <b>quadriceps femoris</b> muscle and acts like a pulley — it lifts the line of pull of the quadriceps away from the joint, giving the muscle better leverage to extend the stifle.<br><br><b>SHAPE in OX:</b> Roughly four-sided (rhomboidal) with a thick cranial face and a smooth caudal face that glides over the trochlea of femur.<br><br><b>SUPPORTING LIGAMENTS:</b><br>In horse and ox there are <b>three patellar ligaments</b> that anchor the lower end of the patella to the tibial tuberosity:<br>• Medial Patellar Ligament<br>• Middle (Intermediate) Patellar Ligament<br>• Lateral Patellar Ligament<br>(In dog & pig there is essentially one — 'patellar ligament' or 'straight patellar tendon'.)<br><br><b>PARAPATELLAR FIBROCARTILAGES:</b> On either side of the patella in horse and ox, projecting downward — they extend the contact surface and are crucial in the equine 'stay apparatus' (the medial parapatellar fibrocartilage hooks over the medial trochlear ridge).<br><br><b>FUNCTION:</b><br>1. Improves leverage of quadriceps → strong stifle extension.<br>2. Protects the front of the stifle.<br>3. In horse — used for the <b>stifle lock</b> (the medial patellar ligament + medial parapatellar fibrocartilage catches over the medial trochlear ridge so the horse can stand and sleep without muscular effort).",
            comparative: [
                { species: "Horse", note: "Triangular; carries large parapatellar fibrocartilage medially — basis of stay apparatus." },
                { species: "Dog", note: "Single patellar ligament; small patella. Medial luxation common in toy breeds." },
                { species: "Pig", note: "Small, rounded patella." },
                { species: "Fowl", note: "Patella small or absent." }
            ],
            clinical: "<b>Upward Fixation of Patella (Horse):</b> Medial patellar ligament gets stuck over the medial trochlear ridge → leg locked straight, toe drags. Treatment = <b>Medial Patellar Desmotomy</b> (cutting the medial patellar ligament) — relieves the stuck ligament.<br><b>Patellar Luxation (Dog):</b> Small toy breeds — patella slips MEDIALLY off the trochlea → 'skipping' lameness.",
            imgCode: "patella"
        },
        {
            title: "Tibia & Fibula",
            desc: "Bones of the leg (between stifle and hock).<br><br><b>TIBIA — Ox Standard:</b><br>- Main weight-bearing bone of leg.<br>- <b>Proximal end:</b> Medial & Lateral condyles; <b>Tibial Tuberosity</b> (insertion of patellar ligaments); intercondylar eminence.<br>- <b>Shaft:</b> Triangular in cross-section.<br>- <b>Distal end:</b> Cochlea tibiae — has 2 grooves & 2 ridges that fit the talus (forms the hock).<br>- <b>Medial malleolus</b> (medial bony bump at hock).<br><br><b>FIBULA — Ox Standard:</b><br>- Greatly REDUCED.<br>- Proximal part: small bony nodule fused to lateral condyle of tibia.<br>- Distal part: small <b>'Os Malleolare'</b> (lateral malleolus bone) at lateral side of hock — articulates with talus.<br>- Shaft is ABSENT in ox.",
            eliteDesc: "<b>TIBIA — main bone of the leg (crus)</b><br><br>The tibia is a long bone running from the stifle to the hock. It is the major weight-bearing bone of the leg.<br><br><b>PROXIMAL END:</b><br>• <b>Medial & Lateral Condyles:</b> Large flat surfaces that meet the femoral condyles at the stifle. Between them lies the <b>intercondylar eminence</b> with attachment for cruciate ligaments and menisci.<br>• <b>Tibial tuberosity:</b> Cranial bony prominence — the patellar ligaments insert here. Easily palpable below the stifle.<br>• <b>Extensor groove:</b> Lateral to the tuberosity; holds the tendon of the long digital extensor at its origin.<br><br><b>SHAFT:</b> Triangular in cross-section. Cranial border (the 'shin') is sharp and palpable just under the skin (= tibial crest).<br><br><b>DISTAL END:</b><br>• <b>Cochlea tibiae:</b> Pulley-shaped articular surface with 2 ridges and 2 grooves that interlock with the talus → makes the hock a hinge joint.<br>• <b>Medial Malleolus:</b> Bony bump on the medial side of the hock.<br><br><b>FIBULA in OX:</b><br>The fibula is greatly reduced (because the leg only flexes-extends, no twisting needed).<br>• Proximal — small nodule fused to the lateral condyle of tibia.<br>• Shaft — ABSENT.<br>• Distal — represented by a separate small bone called the <b>os malleolare (lateral malleolus bone)</b>, which articulates with the talus on the lateral side of the hock.<br><br><b>UG MEMORY:</b> 'Ox fibula = head + tip only, shaft missing'.",
            comparative: [
                { species: "Horse", note: "Tibia robust. Fibula has SHAFT but only on upper half — fades distally. Lateral malleolus is part of TIBIA." },
                { species: "Dog", note: "Tibia and Fibula BOTH COMPLETE and separate. Both bones contribute to the hock. Allows slight rotation." },
                { species: "Pig", note: "Both tibia and fibula complete and separate (like dog)." },
                { species: "Fowl", note: "Tibia fuses with proximal tarsals → <b>TIBIOTARSUS</b> (a single long bone). Fibula present as a thin spike on the lateral side, not full length." }
            ],
            clinical: "<b>Tibial Crest Fracture:</b> Direct trauma. Avulsion fractures of the tibial tuberosity in young calves at the growth plate.<br><b>Hock Injuries:</b> The medial malleolus + os malleolare form the bony pillars of the hock — fractures here cause severe lameness.",
            imgCode: "tibia_fibula"
        },
        {
            title: "Tarsus (Hock)",
            desc: "Complex joint between leg and metatarsus. <b>Hock</b> = clinical name.<br><br><b>Ox Standard — 5 bones in 3 rows:</b><br><b>Proximal row:</b><br>- <b>Talus (Tibial tarsal)</b> — pulley with 2 trochleae (proximal & distal).<br>- <b>Calcaneus (Fibular tarsal)</b> — has long lever (Tuber Calcanei = 'point of the hock').<br><b>Middle row:</b><br>- <b>Central tarsal + 4th tarsal FUSED</b> = 'Centroquartal' (unique to ruminants).<br><b>Distal row:</b><br>- <b>1st tarsal</b> (small, separate)<br>- <b>2nd + 3rd tarsals FUSED</b><br><br><b>Tuber Calcanei:</b> caudal projection of calcaneus; tendon of <b>GASTROCNEMIUS</b> attaches here ('Achilles tendon').<br><br><b>Total: 5 bones</b> in ox (vs. 6 in horse, 7 in dog).",
            eliteDesc: "<b>TARSUS / HOCK — the ankle of the hindlimb</b><br><br>The hock is a complex joint made of multiple small bones (tarsals) arranged in 3 rows. It works mainly as a hinge.<br><br><b>BONES OF OX HOCK (5 total):</b><br><b>Proximal row (2 bones):</b><br>1. <b>Talus (Tibial tarsal):</b> Has TWO pulleys (proximal trochlea articulates with tibia, distal trochlea with central tarsal). The double pulley is unique to ruminants.<br>2. <b>Calcaneus (Fibular tarsal):</b> Largest tarsal bone. Sticks up behind as a lever — its top is the <b>tuber calcanei (point of hock)</b>. The big <b>gastrocnemius tendon ('Achilles tendon')</b> attaches here.<br><br><b>Middle row (1 bone in ox):</b><br>3. <b>Centroquartal:</b> A FUSION of central tarsal + 4th tarsal — characteristic of ruminants.<br><br><b>Distal row (2 bones in ox):</b><br>4. <b>1st tarsal:</b> Small, separate bone on the medial side.<br>5. <b>Fused 2nd+3rd tarsal:</b> Single bone — fuses for greater weight-bearing.<br><br>So total in OX = 5 bones.<br><br><b>POINT OF HOCK</b> = tuber calcanei. Bursa over it can become inflamed → <b>'capped hock'</b>.<br><br><b>CHESTNUT in horse hindlimb</b> = horny remnant on medial side of tarsus, considered vestige of carpal/tarsal pad.",
            comparative: [
                { species: "Horse", note: "<b>6 bones</b> — talus, calcaneus, central, 1st, 2nd+3rd fused, 4th. Single trochlea on talus." },
                { species: "Dog", note: "<b>7 bones</b> — talus, calcaneus, central, 1st, 2nd, 3rd, 4th (all separate)." },
                { species: "Pig", note: "<b>7 bones</b> (like dog) — complete pattern." },
                { species: "Fowl", note: "Proximal tarsals fuse with the tibia to form the tibiotarsus; distal tarsals fuse with metatarsals to form the tarsometatarsus. The functional ankle is the intertarsal joint between these bones." }
            ],
            clinical: "<b>Capped Hock:</b> Bursitis over the tuber calcanei from kicks against walls or trailers — visible swelling on the back of the hock.<br><b>Bone Spavin:</b> Osteoarthritis of the lower hock joints (between distal tarsals and metatarsus) — common cause of hindlimb lameness in horses.<br><b>Curb:</b> Strain of the long plantar ligament behind the hock.",
            imgCode: "tarsus"
        },
        {
            title: "Metatarsus & Digits (Cannon, Pastern, Hoof)",
            desc: "<b>Ox Metatarsus:</b><br>- <b>Cannon Bone</b> = fused Mt III + Mt IV (just like forelimb cannon).<br>- Slightly LONGER and more 4-sided than metacarpal cannon (way to tell front from back!).<br>- Vestigial Mt II + Mt V usually small or absent.<br><br><b>Digits (Ox):</b><br>- <b>2 functional digits</b> (III & IV) — cloven hoof.<br>- <b>2 dewclaws</b> (digits II & V) — non-weight-bearing.<br>- Each functional digit has 3 phalanges (P1-P2-P3) + proximal sesamoids (2) + distal sesamoid (navicular) (1).<br>- <b>P3</b> is the cloven hoof bone (<b>os ungulare</b>).<br><br><b>Hindfoot vs Forefoot of Ox:</b><br>- Hind cannon LONGER & more square in cross-section.<br>- Front cannon shorter & rounder.",
            eliteDesc: "<b>METATARSUS — CANNON BONE OF HINDLIMB</b><br><br>Like the forelimb, the bovine metatarsus is the <b>fused Mt III + Mt IV</b> = 'cannon bone'. The fused bone has a dorsal longitudinal groove showing where the two original bones met. Distally it splits into two trochleae for the two digits.<br><br><b>How to tell hindlimb cannon from forelimb cannon:</b><br>• Hindlimb (metatarsal) cannon: LONGER, more SQUARE in cross-section.<br>• Forelimb (metacarpal) cannon: SHORTER, more ROUNDED.<br><br>Vestigial Mt II and Mt V (the splint-like bones) are usually small buttons or absent.<br><br><b>DIGITS — same plan as forelimb:</b><br>• 2 functional digits (III, IV) — together they form the cloven hoof.<br>• 2 dewclaws (II, V) — small, non-weight-bearing nubs above and behind the fetlock.<br>• Each functional digit has:<br>  – <b>P1</b> = proximal phalanx (long pastern bone)<br>  – <b>P2</b> = middle phalanx (short pastern bone)<br>  – <b>P3</b> = distal phalanx (coffin bone / os ungulare) — encased in the hoof horn<br>  – 2 proximal sesamoids at the fetlock<br>  – 1 distal sesamoid (navicular) behind P3<br><br><b>HOOF:</b> The horn capsule covering P3. Each functional digit has its own claw → bovine 'cloven hoof'.",
            comparative: [
                { species: "Horse", note: "<b>1 functional digit</b> (Mt III). Mt II + Mt IV are SPLINT BONES. P3 is the coffin bone with retrossal processes; navicular bone present behind it." },
                { species: "Dog", note: "<b>4 functional digits</b> (II-V). Hind dewclaws (digit I) often present in some breeds and may be removed surgically. P3 = ungual crest (claw)." },
                { species: "Pig", note: "<b>4 digits</b> on hindlimb — III & IV main, II & V smaller but reach the ground on soft surfaces." },
                { species: "Fowl", note: "<b>TARSOMETATARSUS</b> = single fused bone (distal tarsals + Mt II, III, IV). Usually 4 toes (3 forward + 1 back = anisodactyl). Spur present in cocks on medial side of tarsometatarsus." }
            ],
            clinical: "<b>Foot rot (interdigital phlegmon) in cattle:</b> Acute bacterial infection of interdigital skin and deeper soft tissues.<br><b>Sole ulcer:</b> A circumscribed sole-horn lesion associated with corium damage; it is not a synonym for laminitis.<br><b>Laminitis:</b> Diffuse laminar/corium disease with multifactorial pathogenesis.<br><b>Navicular disease (horse):</b> A podotrochlear syndrome most often affecting forelimbs.<br><b>IV regional anesthesia:</b> Local anesthetic is placed in a superficial distal limb vein under a tourniquet using aseptic clinical technique.",
            imgCode: "metatarsus_digits"
        }
    ],

    // =====================================================
    // MYOLOGY
    // =====================================================
    "Myology": [
        {
            title: "Gluteal Muscles (Superficial, Middle, Deep, Accessory)",
            desc: "<b>Type:</b> Muscles of the rump/croup — main extensors of the hip.<br><br><b>4 Gluteals in Ox:</b><br>1. <b>Superficial Gluteus</b> — small in ox; often partly fused with biceps femoris (<b>'gluteobiceps'</b>).<br>2. <b>Middle Gluteus</b> — LARGEST and most powerful; on top of croup.<br>3. <b>Deep Gluteus</b> — under middle gluteus.<br>4. <b>Accessory Gluteus</b> — slip of middle gluteus.<br><br><b>Insertion:</b> Greater Trochanter of femur (Middle gluteus to top, deep to a separate facet).<br><br><b>Function:</b> EXTEND the hip joint = propel the body forward (powerful kick / jump).<br><br><b>Nerve:</b> Cranial & Caudal Gluteal nerves.",
            eliteDesc: "<b>GLUTEAL MUSCLES</b><br><br>The superficial, middle, deep and accessory gluteal components vary by species. In cattle the superficial gluteus blends with biceps femoris as gluteobiceps. Middle gluteus is a powerful hip extensor inserting on the greater trochanter; deep gluteus is chiefly an abductor and may act according to limb position. Cranial gluteal nerve supplies middle/deep gluteal and tensor fasciae latae; caudal gluteal branches supply superficial gluteal/gluteobiceps as appropriate. Intramuscular injection sites must follow current species-specific clinical and food-animal guidance; the gluteal region should not be presented as a universally preferred site.",
            comparative: [
                { species: "Horse", note: "Middle gluteus is HUGE in horses (extends forward over lumbar region) — the most powerful extensor for galloping." },
                { species: "Dog", note: "Middle gluteus moderate; superficial gluteus small. All 3 are present." }
            ],
            clinical: "<b>IM injection in cattle/horse rump:</b> Middle gluteus is preferred for intramuscular injection (large muscle mass). Avoid the sciatic nerve which lies caudal to greater trochanter.",
            imgCode: "gluteals"
        },
        {
            title: "Quadriceps Femoris",
            desc: "<b>Type:</b> Big muscle group on the front of thigh.<br><br><b>4 Heads:</b><br>1. <b>Rectus Femoris</b> (only one from ilium — biarticular, crosses both hip & stifle).<br>2. <b>Vastus Lateralis</b> (lateral side of femur).<br>3. <b>Vastus Medialis</b> (medial side of femur).<br>4. <b>Vastus Intermedius</b> (front of femur, deep).<br><br><b>Common Insertion:</b> Tibial tuberosity, via PATELLA + 3 patellar ligaments (in horse/ox) or single patellar ligament (dog).<br><br><b>Function:</b> The MAIN extensor of the STIFLE joint. Rectus femoris also flexes the hip.<br><br><b>Nerve:</b> Femoral nerve.",
            eliteDesc: "<b>QUADRICEPS — 'FOUR HEADS' OF THE FRONT THIGH</b><br><br>The quadriceps femoris is a big muscle group on the front of the thigh. It is the MAIN extensor of the stifle (knee).<br><br><b>FOUR HEADS:</b><br>• <b>Rectus Femoris:</b> Only head originating from the ilium (above the hip). Therefore it crosses TWO joints (hip + stifle) → it can also flex the hip in addition to extending the stifle. Forms the topmost belly of the front thigh.<br>• <b>Vastus Lateralis:</b> From the lateral surface of femur.<br>• <b>Vastus Medialis:</b> From the medial surface of femur.<br>• <b>Vastus Intermedius:</b> From the front (cranial) surface of femur — deepest head.<br><br>All four heads converge to form a strong common tendon, which contains the <b>patella</b> (largest sesamoid). From the patella, the patellar ligaments transmit the force to the tibial tuberosity.<br><br><b>FUNCTION:</b> Strong extension of the stifle — keeps the leg straight under body weight. Without quadriceps, the animal cannot stand because the stifle would buckle.<br><br><b>NERVE:</b> Femoral nerve (from lumbar plexus). Damage to femoral nerve = quadriceps paralysis = animal cannot bear weight on that limb (the limb buckles forward at every step).",
            comparative: [
                { species: "Horse", note: "Quadriceps + medial patellar ligament + medial parapatellar fibrocartilage = key components of stay apparatus (stifle lock)." },
                { species: "Dog", note: "Same 4 heads. Single patellar ligament inserts on tibial tuberosity." }
            ],
            clinical: "<b>Femoral Nerve Paralysis:</b> Quadriceps cannot contract → cannot extend the stifle → the limb buckles when bearing weight → 'dropped hind quarter'.<br><b>IM injection sites:</b> Vastus lateralis is a safe IM site in dogs and cats — large mass, away from sciatic nerve.",
            imgCode: "quadriceps"
        },
        {
            title: "Hamstring Group (Caudal Thigh Muscles)",
            desc: "<b>3 Big muscles on caudal thigh:</b><br><br>1. <b>Biceps Femoris</b> — most LATERAL; from tuber ischiadicum & sacrum.<br>2. <b>Semitendinosus</b> — middle, longer & rope-like.<br>3. <b>Semimembranosus</b> — most MEDIAL; broader.<br><br><b>Common origin:</b> Mostly from <b>tuber ischiadicum</b> (in ox, biceps also from sacrum → 'gluteobiceps').<br><br><b>Insertion:</b> Patella + tibial crest + calcaneus (via crural fascia).<br><br><b>Function:</b> Extend the hip; flex the stifle; extend the hock — essentially PROPEL the body forward.<br><br><b>Nerve:</b> Tibial part of Sciatic nerve.",
            eliteDesc: "<b>CAUDAL THIGH (HAMSTRING) MUSCLES</b><br><br><b>Biceps femoris</b>, <b>semitendinosus</b> and <b>semimembranosus</b> share important ischial origins but have distinct insertions. Biceps femoris spreads to patellar/crural fascia, tibia and calcaneal structures; semitendinosus inserts on the tibia and contributes to the common calcaneal tendon; semimembranosus inserts on the caudomedial femur and medial tibia and does not join the common calcaneal tendon. Their actions on hip and stifle depend on limb position and weight bearing. They receive branches derived mainly from the tibial component of the sciatic nerve.",
            comparative: [
                { species: "Horse", note: "Same 3 muscles, very powerful — drive the gallop." },
                { species: "Dog", note: "Same; well-developed; visible easily in lean dogs." }
            ],
            clinical: "<b>Sciatic Nerve Injury:</b> Damages tibial portion → hamstrings cannot contract → animal cannot extend hip or flex stifle properly.<br><b>Penetrating injuries</b> of caudal thigh can damage hamstrings → severe lameness.",
            imgCode: "hamstrings"
        },
        {
            title: "Adductor Group (Medial Thigh)",
            desc: "<b>Function as a group:</b> Adduct the limb (pull leg toward body midline).<br><br><b>Main muscles (Ox):</b><br>1. <b>Sartorius</b> — narrow band on medial side of thigh; forms part of femoral triangle.<br>2. <b>Gracilis</b> — flat sheet on medial thigh.<br>3. <b>Pectineus</b> — short; from pubis to femur.<br>4. <b>Adductor</b> — large; from pelvic floor to caudal femur.<br><br><b>Nerve:</b> <b>OBTURATOR nerve</b> (mainly).<br><br><b>Femoral Triangle:</b> Bounded by Sartorius (cranial), Pectineus (caudal), abdominal wall (above) — contains FEMORAL ARTERY (pulse site in dog/cat).",
            eliteDesc: "<b>ADDUCTORS — MEDIAL THIGH MUSCLES</b><br><br>This group of muscles lies on the inner side of the thigh. Their job is to pull the limb TOWARD the body midline (= adduction) — preventing the legs from splaying outward.<br><br><b>MUSCLES (all on medial thigh):</b><br>• <b>Sartorius:</b> A long narrow strap muscle. Forms the cranial border of the femoral triangle.<br>• <b>Gracilis:</b> Broad, thin sheet of muscle covering most of the medial thigh.<br>• <b>Pectineus:</b> Short, strong muscle from the pubic bone to the femur.<br>• <b>Adductor:</b> The biggest of this group — broad muscle from the pelvic floor to the caudo-medial femur.<br><br><b>NERVE SUPPLY:</b> Mainly the <b>OBTURATOR NERVE</b> (which exits via the obturator foramen). Sartorius is mostly femoral; pectineus may have dual supply.<br><br><b>FEMORAL TRIANGLE (clinical landmark):</b><br>A triangular space on the medial thigh:<br>• Cranial border: Sartorius<br>• Caudal border: Pectineus<br>• Above: Abdominal wall<br>It contains the <b>femoral artery, vein and nerve</b>. The femoral artery here is used to feel the pulse in DOG and CAT.<br><br><b>OBSTETRIC NERVE PARALYSIS:</b> During difficult calving, the obturator nerve can be crushed against the pelvic floor by the calf's body. Result → adductor muscles paralyse → cow's legs splay outward when she tries to stand → 'downer cow' / 'splay leg'.",
            comparative: [
                { species: "Horse", note: "Same plan; adductor very strong in stallions." },
                { species: "Dog", note: "Femoral pulse easily felt in femoral triangle medial to thigh." }
            ],
            clinical: "<b>Obturator Nerve Paralysis (Calving paralysis / Downer Cow):</b> Bilateral adductor weakness — cow goes down with hindlegs splayed sideways. Hobbles applied above hocks to keep legs together until nerve recovers.<br><b>Femoral Triangle:</b> Site to feel femoral artery pulse in DOG.",
            imgCode: "adductors"
        },
        {
            title: "Iliopsoas, Tensor Fasciae Latae & Hip Flexors",
            desc: "<b>Iliopsoas (psoas major + iliacus):</b> arises from lumbar vertebral and iliac regions and inserts on the lesser trochanter; it flexes the hip.<br><br><b>Tensor fasciae latae:</b> arises near the tuber coxae, inserts into fascia lata and acts on hip/stifle through the fascia.<br><br><b>Psoas minor:</b> lies ventral to lumbar vertebrae and inserts on the iliopubic eminence/psoas minor tubercle; it flexes the lumbosacral region/pelvis.",
            eliteDesc: "<b>HIP FLEXORS</b><br><br>These muscles bring the limb FORWARD (= flexion of hip = protraction).<br><br><b>1. ILIOPSOAS:</b><br>The combined muscle of two parts:<br>• <b>Psoas major</b> — from bodies and transverse processes of last thoracic + lumbar vertebrae.<br>• <b>Iliacus</b> — from ventral surface of ilium.<br>Both join into a single tendon and insert on the <b>lesser trochanter of femur</b>.<br><b>Function:</b> The MAIN flexor of the hip. Pulls the femur forward → essential for advancing the limb in walking/running. Also flexes the lumbar spine.<br><br><b>2. TENSOR FASCIAE LATAE:</b><br>From the tuber coxae (hook bone), runs down the side of the thigh, and inserts into the broad fascia of the thigh (<b>fascia lata</b>). When it contracts, it tenses the fascia and indirectly extends the stifle (because the fascia connects to the patella). It also helps flex the hip.<br><br><b>3. PSOAS MINOR:</b><br>A smaller, more medial muscle. From bodies of last thoracic + first lumbar vertebrae, inserting on the body of ilium. Functionally minor — flexes pelvis on the spine.<br><b>Note:</b> In butchery, the psoas major + minor + iliacus together make the 'tenderloin/fillet' — the most tender meat (because it never bears weight, it stays soft).<br><br><b>UG MEMORY:</b> Iliopsoas → 'lesser trochanter, hip flexor, lumbar plexus'.",
            comparative: [
                { species: "Horse", note: "Iliopsoas powerful — needed for swinging the heavy hindlimb forward." },
                { species: "Dog", note: "Psoas minor very small; psoas major large." }
            ],
            clinical: "<b>Clinical topography:</b> Psoas major and iliacus lie along the sublumbar region and may be involved in retroperitoneal or iliopsoas injury; assess them using species-appropriate examination and imaging.",
            imgCode: "iliopsoas"
        },
        {
            title: "Cranial Crural (Front of Leg) Muscles",
            desc: "<b>Cranial crural group:</b> tibialis cranialis flexes the tarsus; long and lateral digital extensors extend digits and assist tarsal flexion; fibularis tertius is fully tendinous in the horse and forms the cranial component of the equine reciprocal apparatus; extensor digitorum brevis is small. These muscles are supplied by branches of the common fibular nerve.",
            eliteDesc: "<b>CRANIAL CRURAL MUSCLES</b><br><br><b>Tibialis cranialis</b> arises from the proximal lateral tibia and adjacent structures, not from the tibial tuberosity, and inserts on proximal metatarsal/tarsal structures to flex the tarsus. <b>Long and lateral digital extensors</b> extend the digits and assist tarsal flexion. In the horse, <b>fibularis tertius</b> is entirely tendinous and links stifle and tarsal motion as part of the reciprocal apparatus; its structure and role must not be generalized unchanged to cattle or dogs. Common fibular nerve branches supply the group.",
            comparative: [
                { species: "Horse", note: "Peroneus tertius is fully tendinous → reciprocal apparatus. Rupture causes 'dropped hock'." },
                { species: "Dog", note: "Peroneus tertius is muscular (not tendinous); no reciprocal apparatus." }
            ],
            clinical: "<b>Peroneal Nerve Paralysis:</b> Animal cannot lift the foot → toe drags on the ground (knuckling at the fetlock). Common after recumbency on hard ground (cattle, horses).<br><b>Rupture of Peroneus Tertius (Horse):</b> Hock can be extended while stifle is flexed — abnormal independent movement.",
            imgCode: "cranial_crural"
        },
        {
            title: "Caudal Crural (Calf) Muscles",
            desc: "<b>Back of leg — extensors of hock + flexors of digits:</b><br><br>1. <b>Gastrocnemius</b> (2 heads — medial & lateral) — biggest; tendon = <b>'Achilles tendon'</b> → tuber calcanei.<br>2. <b>Superficial Digital Flexor (SDF)</b> — wraps around the tuber calcanei (forms 'cap'); flexes digits.<br>3. <b>Deep Digital Flexor (DDF)</b> — has 3 heads; tendon goes around the medial side of hock; flexes digits.<br>4. <b>Popliteus</b> — small triangular muscle behind stifle.<br><br><b>Function:</b> EXTEND the hock + FLEX the digits → 'push-off' in walking.<br><br><b>Nerve:</b> <b>TIBIAL nerve</b> — branch of sciatic.",
            eliteDesc: "<b>CAUDAL CRURAL MUSCLES</b><br><br>Gastrocnemius extends the tarsus; superficial and deep digital flexors flex the digits and may act on the tarsus; popliteus flexes/rotates the stifle slightly. The <b>common calcaneal tendon</b> is not formed by only gastrocnemius and superficial digital flexor: depending on species it also receives contributions from biceps femoris, semitendinosus and gracilis. The equine superficial digital flexor is the caudal component of the reciprocal apparatus. The tibial nerve supplies the caudal crural group.",
            comparative: [
                { species: "Horse", note: "Calcaneal tendon and SDF cap on tuber calcanei extremely strong; part of stay apparatus." },
                { species: "Dog", note: "Same plan; common rupture of Achilles tendon in working dogs." }
            ],
            clinical: "<b>Tibial Nerve Paralysis:</b> Animal cannot extend the hock → 'dropped hock' posture; fetlock knuckles forward.<br><b>Rupture of the Achilles tendon (Gastrocnemius rupture):</b> Common in dairy cattle around calving; the hock drops to the ground (plantigrade stance).",
            imgCode: "caudal_crural"
        }
    ],

    // =====================================================
    // ARTHROLOGY
    // =====================================================
    "Arthrology": [
        {
            title: "Sacroiliac Joint",
            desc: "<b>Sacroiliac joint:</b> A very low-motion articulation with a ventral synovial component and strong dorsal fibrous/ligamentous support. It transmits axial load to the pelvis. Dorsal and ventral sacroiliac ligaments and the sacrosciatic ligament stabilize the region. Greater and lesser sciatic openings and their contents differ among domestic species and must be listed species-specifically.",
            eliteDesc: "<b>SACROILIAC JOINT</b><br><br>The auricular surfaces of ilium and sacrum form a joint with a ventral synovial portion and a strongly reinforced dorsal fibrous portion. Dorsal/ventral sacroiliac and sacrosciatic ligaments transmit weight and restrict motion. In the horse the broad sacrosciatic ligament helps define greater and lesser sciatic foramina; in cattle the arrangement and structures crossing the notches differ, so one shared contents list is misleading. Prominent or asymmetric tubera sacrale ('hunter's bump') may reflect conformation or prior sacroiliac-region injury and is not by itself proof of subluxation.",
            comparative: [
                { species: "Horse", note: "Subluxation common in racehorses & jumpers — asymmetric tuber sacrale ('hunter's bump')." },
                { species: "Cattle", note: "Sacroiliac and sacrosciatic soft tissues become more lax near calving under hormonal influence; the adult fused pelvic symphysis does not reopen." }
            ],
            clinical: "<b>Pelvic Ligament Relaxation (Cattle):</b> Just before calving, sacroiliac and sacrosciatic ligaments soften under hormone (relaxin) → tail head sinks → important sign of imminent parturition.",
            imgCode: "sacroiliac_joint"
        },
        {
            title: "Pelvic Symphysis & Inguinal Canal (with Spermatic Cord & Prepubic Tendon)",
            desc: "<b>Pelvic symphysis:</b> Cartilaginous in young animals and progressively ossifies; the fused adult symphysis does not loosen before parturition.<br><br><b>Inguinal canal:</b> Oblique caudoventral passage. Its deep ring is bounded mainly by the caudal internal abdominal oblique and inguinal ligament; its superficial ring is in the external abdominal-oblique aponeurosis.<br><br><b>Spermatic cord contents:</b> ductus deferens, testicular artery, pampiniform venous plexus, lymphatics and autonomic nerves. Cremaster and vaginal tunics are associated coverings, not vascular contents.<br><br><b>Prepubic tendon:</b> Strong attachment of abdominal wall structures to the cranial pubic brim.",
            eliteDesc: "<b>PELVIC SYMPHYSIS, INGUINAL CANAL AND PREPUBIC TENDON</b><br><br>The pelvic symphysis unites the paired pubis and ischium. It ossifies with age and does not physiologically reopen at calving; increased pelvic compliance comes from ligaments and soft tissues.<br><br>The inguinal canal extends between a deep ring bounded mainly by the caudal internal abdominal oblique and inguinal ligament and a superficial ring in the external abdominal-oblique aponeurosis. Contents vary with sex and species and include the spermatic cord in males, vaginal process/round ligament in females, external pudendal vessels and genitofemoral nerve.<br><br>The spermatic cord contains ductus deferens, testicular artery, pampiniform venous plexus, lymphatics and nerves. Cremaster and vaginal tunics are associated coverings. The prepubic tendon anchors the abdominal floor to the cranial pubis and can rupture in late-gestation mares.",
            comparative: [
                { species: "Stallion", note: "Wide inguinal canal — INGUINAL HERNIA more common." },
                { species: "Mare", note: "Prepubic tendon RUPTURE risk near foaling, especially with twins." },
                { species: "Bull", note: "Symphysis ossifies early — rigid pelvis (hence dystocia common in heifers)." }
            ],
            clinical: "<b>Castration:</b> Scrotal incision → spermatic cord identified → emasculator crushes & cuts cord above testis. Bloodless (Burdizzo) method crushes cord externally without cutting skin.<br><b>Vasectomy:</b> Small skin incision over cord → ductus deferens isolated and a section removed → animal sterile but retains testosterone (used for 'teaser' bulls).<br><b>Inguinal Hernia (stallion, boar):</b> Loop of intestine slips through internal inguinal ring → emergency surgery if strangulated.<br><b>Prepubic Tendon Rupture:</b> Pregnant mare's belly drops dramatically; medical emergency.",
            imgCode: "pelvic_symphysis_inguinal"
        },
        {
            title: "Hip (Coxofemoral) Joint",
            desc: "<b>Type:</b> Synovial BALL-and-SOCKET (multiaxial).<br><br><b>Articulation:</b> Head of femur in acetabulum.<br><br><b>Movements:</b> Flexion, extension, slight abduction, adduction, rotation.<br><br><b>Ligaments:</b><br>1. <b>Joint capsule</b> — encloses the joint.<br>2. <b>Round Ligament (Lig. capitis femoris)</b> — from fovea capitis of femur to acetabular fossa. Holds head in socket.<br>3. <b>Accessory Ligament</b> (HORSE only!) — extra ligament from prepubic tendon to fovea capitis. Prevents abduction → that's why horses can't kick sideways like dogs.<br><br><b>Acetabular Labrum:</b> fibrocartilage rim that deepens the socket.",
            eliteDesc: "<b>HIP / COXOFEMORAL JOINT</b><br><br>The hip is a true ball-and-socket joint — it allows movement in all directions but its main movement is flexion/extension in the sagittal plane.<br><br><b>BONES:</b> Head of femur (ball) + acetabulum of os coxae (socket).<br><br><b>JOINT-DEEPENING:</b> The acetabular labrum is a ring of fibrocartilage that increases the depth of the socket and improves stability.<br><br><b>LIGAMENTS:</b><br>• <b>Joint capsule:</b> Strong fibrous sleeve enclosing the joint.<br>• <b>Ligament of head of femur (Round ligament):</b> Inside the joint — runs from the <i>fovea capitis</i> on the femoral head to the <i>acetabular fossa</i>. It carries a small artery to the femoral head in young animals.<br>• <b>Accessory Ligament — UNIQUE TO HORSE:</b> An extra strong band running from the prepubic tendon, through the acetabular notch, to the fovea capitis. It limits ABDUCTION (sideways movement) of the limb. This is why a horse cannot abduct its hindlimb much (cannot 'kick sideways' like a dog can). In other species this ligament is absent.<br><br><b>MOVEMENTS:</b><br>• Flexion-extension (main range of motion).<br>• Some abduction-adduction (limited in horse by accessory ligament).<br>• Some rotation.<br><br><b>CLINICAL — HIP DYSPLASIA (DOG):</b><br>Inherited condition in large dogs (German Shepherd, Labrador, Saint Bernard) where the acetabulum is shallow + femoral head is loose → joint instability → secondary arthritis. Diagnosed by X-ray hip score; managed by weight control, anti-inflammatories, or surgery (Triple Pelvic Osteotomy or Total Hip Replacement).",
            comparative: [
                { species: "Horse", note: "Has the unique ACCESSORY ligament → limited abduction." },
                { species: "Dog", note: "No accessory ligament → wide range of abduction (allows the dog to lift its leg). Hip dysplasia common." }
            ],
            clinical: "<b>Hip Dysplasia (Dog):</b> Most common orthopaedic problem in large breeds.<br><b>Coxofemoral Luxation (Dog):</b> Dorso-cranial dislocation of femoral head after road accident — limb shortened, toe touches ground, leg held adducted.",
            imgCode: "hip_joint"
        },
        {
            title: "Stifle (Knee) Joint",
            desc: "<b>Stifle joint:</b> A compound synovial joint comprising the femoropatellar articulation and medial and lateral femorotibial compartments. The proximal tibiofibular joint is anatomically separate and is not a third stifle compartment. Menisci, cranial/caudal cruciate ligaments, collateral ligaments and species-variable patellar ligaments stabilize the joint. Movement is chiefly flexion-extension with limited rotation when flexed.",
            eliteDesc: "<b>STIFLE</b><br><br>The stifle contains a femoropatellar articulation plus medial and lateral femorotibial compartments. The proximal tibiofibular joint is separate. Medial and lateral menisci improve congruity and distribute load; cranial and caudal cruciate ligaments limit abnormal translation/rotation; collateral ligaments stabilize the sides. Horses and cattle have three patellar ligaments, while carnivores have one. Synovial communication between compartments varies by species, so arthrocentesis and interpretation must use species-specific anatomy.",
            comparative: [
                { species: "Horse", note: "Has the medial patellar ligament and parapatellar fibrocartilage that lock the stifle in extension (stay apparatus)." },
                { species: "Dog", note: "Has only ONE patellar ligament. Cranial Cruciate Ligament rupture (CCL rupture) is the most common stifle injury." }
            ],
            clinical: "<b>Cranial cruciate ligament disease (dog):</b> Often degenerative and may produce cranial drawer/tibial thrust; meniscal injury may accompany it.<br><b>Upward fixation of the patella:</b> Begin with diagnosis and appropriate conservative management. Medial patellar desmotomy is reserved for selected persistent cases because complications can occur.<br><b>Meniscal injury:</b> Requires orthopedic assessment; an audible click is suggestive but not diagnostic alone.",
            imgCode: "stifle_joint"
        },
        {
            title: "Hock (Tarsal) Joint",
            desc: "<b>Tarsus:</b> Compound joint complex with tarsocrural, proximal intertarsal, distal intertarsal and tarsometatarsal levels. Most flexion-extension occurs at the tarsocrural joint; lower joints normally have limited motion but are not fused. Collateral, plantar and intertarsal ligaments stabilize the region. The common calcaneal tendon inserts at the tuber calcanei; superficial and deep digital flexor tendons cross the region in species-specific channels.",
            eliteDesc: "<b>HOCK / TARSAL JOINT</b><br><br>The tarsocrural joint accounts for most movement; proximal/distal intertarsal and tarsometatarsal joints permit limited motion and may communicate in species-specific patterns. They are not normally fused. Collateral and plantar ligaments stabilize the complex. The sustentaculum tali supports the deep digital flexor tendon, while the tarsal sheath surrounds the tendon at the hock. <b>Thoroughpin</b> is distension of this sheath, not simply friction at the sustentaculum. Bog spavin is tarsocrural distension; bone spavin affects lower tarsal joints; capped hock involves the calcaneal bursa; curb involves plantar soft tissues.",
            comparative: [
                { species: "Horse", note: "The hock is a common source of hindlimb lameness; important disorders include osteoarthritis of lower tarsal joints, synovial distension and plantar soft-tissue injury." },
                { species: "Dog", note: "Hock fractures common in racing greyhounds." }
            ],
            clinical: "<b>Capped hock, curb, bog/bone spavin</b> — all are clinical conditions of the hock. Each has a specific anatomical structure as origin.",
            imgCode: "hock_joint"
        }
    ],

    // =====================================================
    // NEUROLOGY
    // =====================================================
    "Neurology": [
        {
            title: "Lumbosacral Plexus (overview)",
            desc: "<b>Formation:</b> Ventral branches of last few lumbar + first 2 sacral spinal nerves.<br><br><b>In ox:</b> L4, L5, L6, S1, S2 mainly.<br><br><b>Major nerves of hindlimb (from this plexus):</b><br>1. <b>Femoral nerve</b> (L4-L6) → quadriceps; sensation to medial leg.<br>2. <b>Obturator nerve</b> (L4-L6) → adductors.<br>3. <b>Sciatic nerve</b> (L6-S2) → biggest nerve of body; supplies all hamstrings + everything below stifle (via tibial + peroneal branches).<br>4. <b>Cranial Gluteal nerve</b> → middle/deep gluteus + tensor fasciae latae.<br>5. <b>Caudal Gluteal nerve</b> → superficial gluteus.<br>6. <b>Pudendal nerve</b> (S2-S4) → perineum, external genitalia.",
            eliteDesc: "<b>LUMBOSACRAL PLEXUS — root supply of hindlimb</b><br><br>The lumbosacral plexus is a network of nerves formed by the ventral branches of the last few lumbar and first two sacral spinal nerves. In ox it is mainly L4-L6 + S1-S2. From this plexus all the nerves of the hindlimb arise.<br><br><b>MAJOR BRANCHES — what each does:</b><br>• <b>Femoral Nerve</b> (L4-L6): exits the abdomen via the muscular lacuna; supplies the iliopsoas + the QUADRICEPS FEMORIS. Damage = inability to bear weight (stifle collapses).<br>• <b>Obturator Nerve</b> (L4-L6): runs along medial pelvis, exits via obturator foramen; supplies the ADDUCTORS. Damage in calving = downer cow with splayed legs.<br>• <b>Cranial Gluteal Nerve:</b> Through greater sciatic foramen → middle gluteus + deep gluteus + tensor fasciae latae.<br>• <b>Caudal Gluteal Nerve:</b> → superficial gluteus.<br>• <b>SCIATIC NERVE</b> (L6-S2): The biggest nerve in the body. Exits via greater sciatic foramen, runs caudal to greater trochanter. Splits at level of stifle into:<br>  – <b>Tibial nerve</b> (caudal branch).<br>  – <b>Common Peroneal (Fibular) nerve</b> (cranial branch).<br>• <b>Pudendal Nerve</b> (S2-S4): To perineum and external genitalia. Site for the <b>Pudic / Pudendal nerve block</b>.<br>• <b>Caudal Cutaneous Femoral Nerve:</b> Skin of caudal thigh.",
            comparative: [
                { species: "Horse", note: "Same general plan; sciatic vulnerable behind greater trochanter to IM injection." },
                { species: "Dog", note: "Sciatic nerve damage common after pelvic fractures and hind-limb IM injections in the wrong site." }
            ],
            clinical: "<b>Site for IM injection in dogs:</b> AVOID the caudo-lateral thigh (sciatic nerve!). Prefer the quadriceps (cranial thigh) or lumbar epaxial muscles.",
            imgCode: "lumbosacral_plexus"
        },
        {
            title: "Femoral & Obturator Nerves",
            desc: "<b>FEMORAL NERVE (L4-L6):</b><br>- Exits abdomen between psoas muscles into femoral triangle on medial thigh.<br>- Supplies: iliopsoas + <b>QUADRICEPS FEMORIS</b> (extensor of stifle).<br>- Sensory: medial side of thigh and leg (via saphenous nerve).<br>- <b>Damage</b> → <b>cannot extend stifle</b> → leg buckles → 'dropped haunch'.<br><br><b>OBTURATOR NERVE (L4-L6):</b><br>- Runs along medial wall of pelvis on shaft of ilium.<br>- Exits through obturator foramen.<br>- Supplies: ADDUCTORS of thigh.<br>- <b>Damage during difficult calving</b> → adductors paralyse → cow's hind legs splay sideways = '<b>Calving Paralysis / Downer Cow</b>'.",
            eliteDesc: "<b>FEMORAL & OBTURATOR NERVES</b><br><br><b>FEMORAL NERVE:</b><br>Origin: Lumbar plexus (L4-L6).<br>Course: Runs through the substance of the iliopsoas, exits the abdomen on the medial side of the thigh in the <b>femoral triangle</b> with the femoral artery.<br>Supplies:<br>• Motor — iliopsoas, sartorius, the <b>quadriceps femoris</b> (the main stifle extensor).<br>• Sensory — terminates as <b>saphenous nerve</b> for skin of medial thigh, leg, and hock.<br>Clinical importance: If this nerve is damaged (calving paralysis, hip injury, prolonged dorsal recumbency on a hard table), the quadriceps cannot fire → the stifle CANNOT extend → the limb buckles forward when the animal tries to bear weight ('dropped quarter' in calves).<br><br><b>OBTURATOR NERVE:</b><br>Origin: Lumbar plexus (L4-L6).<br>Course: The nerve descends along the medial side of the shaft of ilium, then crosses the floor of the bony pelvis directly above the obturator foramen, and finally exits via that foramen onto the medial thigh.<br>Supplies: All the adductor muscles of the thigh — pectineus, gracilis, adductor, obturator externus.<br><br><b>CALVING PARALYSIS — IMPORTANT UG TOPIC:</b><br>During difficult calving, the calf's body crushes the obturator nerve against the pelvic floor. After parturition, the cow tries to stand but the adductors fail → both hind legs slide outward to either side ('splay leg' / 'do the splits') → cow falls = <b>downer cow</b>.<br>Treatment: Apply HOBBLES above hocks to keep legs together until nerve recovers; soft bedding; lift cow regularly. May take days-weeks to recover.",
            comparative: [
                { species: "Cattle", note: "Most commonly affected by calving paralysis (obturator)." },
                { species: "Dog", note: "Femoral nerve injury (rare) → quadriceps paralysis after iliopsoas injury." }
            ],
            clinical: "<b>Calving Paralysis (Downer Cow):</b> Bilateral obturator nerve damage during dystocia. Hobbles + soft bedding are key.<br><b>Femoral Pulse:</b> Felt in the femoral triangle medial to thigh in DOG — used to check pulse and to do femoral venipuncture.",
            imgCode: "femoral_obturator"
        },
        {
            title: "Sciatic Nerve & its Branches: Tibial + Peroneal",
            desc: "<b>SCIATIC NERVE (L6-S2):</b> LARGEST nerve of the body.<br>- Exits pelvis via greater sciatic foramen, passes caudal to greater trochanter, runs down caudal thigh.<br>- Splits at stifle into:<br><br><b>1. TIBIAL NERVE</b> (caudal branch):<br>- Runs down BACK of leg (with gastrocnemius).<br>- Supplies: hamstrings + GASTROCNEMIUS + SDF + DDF.<br>- Damage → cannot extend hock; 'dropped hock'.<br>- <b>BLOCK SITE:</b> Medial side of the hock just above the calcaneus.<br><br><b>2. PERONEAL (FIBULAR) NERVE</b> (cranial branch):<br>- Wraps around lateral side of stifle (head of fibula) — VULNERABLE!<br>- Runs down FRONT of leg.<br>- Supplies: tibialis cranialis + long digital extensor (hock flexors).<br>- Damage → cannot lift foot; toe drags → '<b>knuckling</b>'.<br>- <b>BLOCK SITE:</b> Lateral side of leg, just below head of fibula.",
            eliteDesc: "<b>SCIATIC, TIBIAL AND COMMON FIBULAR NERVES</b><br><br>The sciatic nerve courses caudal to the hip and divides at a species-variable level into tibial and common fibular nerves. The tibial nerve supplies caudal crural muscles and continues through plantar branches; the common fibular nerve divides into superficial and deep branches for cranial/lateral crural structures. Injury patterns differ accordingly. In equine diagnostic analgesia, a <b>high four-point block</b> targets the medial/lateral plantar nerves and plantar metatarsal nerves in the proximal metatarsus; it is not a tibial nerve block at the hock. Distal plantar blocks are described by their exact nerve and level.",
            comparative: [
                { species: "Horse", note: "Tibial and Peroneal nerve blocks are part of the diagnostic anaesthesia for hindlimb lameness." },
                { species: "Cattle", note: "Peroneal nerve compression on hard concrete floors causes knuckling — common 'downer cow' complication." },
                { species: "Dog", note: "Sciatic damage from pelvic fractures or wrong-site IM injection in caudal thigh." }
            ],
            clinical: "<b>UG SYLLABUS NERVE BLOCKS — hindlimb sites:</b><br>• <b>Tibial Block:</b> Medial hock, above calcaneus (anterior to Achilles tendon).<br>• <b>Peroneal Block:</b> Lateral leg, just below head of fibula.<br>• <b>Plantar Block:</b> Plantar surface of fetlock (medial + lateral plantar nerves).<br><b>Peroneal Paralysis (cattle):</b> Cow recumbent on concrete → toe drags when trying to walk. Pad floors well.",
            imgCode: "sciatic_branches"
        },
        {
            title: "Pudendal (Pudic) Nerve & Epidural Anaesthesia",
            desc: "<b>Pudendal nerve:</b> Sacral nerve contribution supplying perineal and external-genital structures through several branches.<br><br><b>Pudendal block:</b> A specialist large-animal technique requiring species-specific landmarks and asepsis; it must not be taught as one universal needle point or fixed volume.<br><br><b>Caudal epidural:</b> Commonly performed at the sacrocaudal or first intercoccygeal space in cattle to desensitize tail/perineum while preserving standing ability when correctly dosed.<br><br><b>Cranial epidural:</b> Produces more cranial spread and possible hindlimb motor blockade. Drug, concentration and volume must be calculated for species, body weight, desired spread and patient status.",
            eliteDesc: "<b>PUDENDAL NERVE AND EPIDURAL ANESTHESIA</b><br><br>The pudendal nerve and its perineal, caudal rectal and dorsal genital branches supply the perineum and external genitalia. Pudendal blockade in the bull is an advanced technique; landmarks, approach, agent and volume vary and require a veterinary procedural reference.<br><br>Epidural anesthesia places drug in the epidural space. A correctly dosed caudal epidural at the sacrocaudal/first intercoccygeal space can desensitize the tail and perineum while preserving stance. Greater cranial spread can cause hindlimb weakness or recumbency. Never substitute a blanket volume: calculate drug and volume from species, body weight, concentration, desired segmental spread and patient condition. Lumbosacral access also carries species-specific spinal-cord risk, particularly in adult cattle where the conus may extend caudally.",
            comparative: [
                { species: "Bull", note: "Pudic nerve block is the standard way to relax penis for examination/surgery." },
                { species: "Mare", note: "Caudal epidural analgesia can be used for selected obstetric/perineal procedures; agent and volume are calculated for the individual mare and desired spread." },
                { species: "Dog", note: "Lumbosacral epidural anesthesia may be used for selected caudal procedures by trained clinicians with weight-based dosing and monitoring." }
            ],
            clinical: "<b>UG SYLLABUS — Hindlimb/Pelvic Surgical Sites:</b><br>• <b>Pudic Block:</b> Per-rectal at lesser sciatic notch — extrudes penis in bull.<br>• <b>Caudal Epidural:</b> S5-Cy1 small dose — cow stands; for obstetric work.<br>• <b>Cranial Epidural:</b> S5-Cy1 large dose OR L6-S1 — cow recumbent; for major surgery.<br>• <b>Patellar Desmotomy:</b> Cut medial patellar ligament for upward fixation of patella in horse.<br>• <b>Urethrotomy:</b> Open the urethra surgically to remove uroliths (calculi) — usually at sigmoid flexure in male cattle (where stones lodge).<br>• <b>Castration / Vasectomy:</b> Performed via scrotal/inguinal approach.",
            imgCode: "pudendal_epidural"
        }
    ],

    // =====================================================
    // ANGIOLOGY
    // =====================================================
    "Angiology": [
        {
            title: "Major Arteries of Hindlimb",
            desc: "<b>General hindlimb pathway:</b> external iliac → femoral → popliteal → cranial/caudal tibial pathways → dorsal and plantar vessels of the pes. Branching at the aortic termination varies by species, so do not depict both external and internal iliacs as one universal simultaneous division. Use <b>plantar</b>, not palmar, for hindlimb vessels. The internal iliac system supplies pelvic viscera and gluteal/perineal regions. The femoral artery is a pulse site in dogs and cats.",
            eliteDesc: "<b>ARTERIES OF HINDLIMB AND PELVIS</b><br><br>The external iliac continues as femoral after entering the thigh; femoral continues as popliteal, which supplies cranial and caudal tibial pathways. Distally these contribute dorsal pedal and plantar metatarsal/digital vessels. Exact origins and branching vary by species. Internal iliac branches supply pelvic viscera, gluteal and perineal structures. Intravenous regional anesthesia is performed through a suitable <b>vein</b> under tourniquet—not through the dorsal common digital artery.",
            comparative: [
                { species: "Horse", note: "External iliac → Femoral → Popliteal → continues. Femoral pulse felt at femoral triangle for emergency monitoring." },
                { species: "Dog", note: "Femoral artery is the standard PULSE SITE in dogs and cats. Also used for arterial blood gas sampling." },
                { species: "Cattle", note: "Ventral coccygeal artery (under tail) is the easy pulse site." }
            ],
            clinical: "<b>Pulse Sites:</b><br>• Cattle → ventral coccygeal artery (under tail) or facial artery.<br>• Horse → facial artery (cheek).<br>• Dog & Cat → <b>femoral artery</b> (medial thigh, in femoral triangle).<br><b>Iliac thrombosis (Horse):</b> Clot at iliac artery → exercise intolerance, hindlimb cramping after exercise.",
            imgCode: "arteries_hindlimb"
        },
        {
            title: "Major Veins of Hindlimb (Saphenous & Recurrent Tarsal)",
            desc: "<b>Deep veins:</b> Run with arteries (femoral vein, popliteal vein, etc.) → drain into <b>External Iliac vein</b> → caudal vena cava.<br><br><b>Superficial Veins (clinically important):</b><br>1. <b>Medial Saphenous Vein</b> — medial side of leg & thigh.<br>2. <b>Lateral Saphenous Vein</b> = <b>RECURRENT TARSAL VEIN</b> in dog — courses along lateral side of leg above hock. <b>STANDARD IV INJECTION SITE in DOG.</b><br>3. <b>Cephalic-like Tributaries</b> in dog → drain into femoral vein.<br><br><b>Pelvic veins:</b> Internal Iliac vein drains pelvic viscera.<br><br><b>VENIPUNCTURE SITES:</b><br>- DOG: <b>Lateral Saphenous (Recurrent Tarsal) vein</b> for IV injection above the hock.<br>- HORSE/COW: Saphenous veins are not commonly used; jugular preferred.<br>- HORSE: 'Spur vein' (lateral thoracic) sometimes accessible.",
            eliteDesc: "<b>VEINS OF HINDLIMB — clinically the SUPERFICIAL ones matter most</b><br><br>Veins of the hindlimb run in two layers — DEEP veins go alongside the arteries (femoral vein, popliteal vein, tibial vein), and SUPERFICIAL veins run just under the skin. Both ultimately drain into the EXTERNAL ILIAC VEIN → caudal vena cava.<br><br><b>DEEP SYSTEM:</b><br>Tibial veins → Popliteal vein → Femoral vein → External Iliac vein → Caudal Vena Cava → Right Atrium.<br><br><b>SUPERFICIAL VEINS (the IV sites):</b><br><br><b>1. MEDIAL SAPHENOUS VEIN:</b> Runs up the medial side of the leg and thigh. Drains into the femoral vein. Used for venipuncture in cats and small animals.<br><br><b>2. LATERAL SAPHENOUS / RECURRENT TARSAL VEIN:</b> Runs upward along the lateral aspect of the leg, just above the hock, on the back-and-side surface. Easily visible & raisable in DOGS by applying pressure above the hock.<br><b>This is the STANDARD intravenous injection site in dogs</b> (along with the cephalic vein in the forelimb).<br><br><b>3. PUDENDOEPIGASTRIC TRUNK / CRANIAL EPIGASTRIC VEIN:</b> Drains the udder + caudal abdominal wall in lactating cows. The 'milk vein' in dairy cows runs along the ventral abdomen (subcutaneously) and ends at the milk well — visible huge tortuous superficial vein.<br><br><b>VENOUS BLOOD COLLECTION SITES — UG MEMORY:</b><br>• Cattle/buffalo → JUGULAR vein (or coccygeal/tail vein for small samples).<br>• Horse → JUGULAR vein.<br>• Dog/Cat → Cephalic vein (forelimb) or LATERAL SAPHENOUS / Recurrent tarsal vein (hindlimb).<br>• Pig → cranial vena cava (jugular fossa) or ear vein.",
            comparative: [
                { species: "Dog", note: "<b>RECURRENT TARSAL (lateral saphenous) vein</b> = standard IV injection site above the hock." },
                { species: "Cow (Lactating)", note: "MILK vein (subcutaneous abdominal vein) very prominent — was used for IV in old practice but now jugular is preferred." }
            ],
            clinical: "<b>IV Injection Sites — UG must-know:</b><br>• Dog → Lateral saphenous (recurrent tarsal) above hock OR cephalic in forelimb.<br>• Cattle → Jugular OR coccygeal vein.<br>• Horse → Jugular vein.<br><b>Bier Block / IVRA in cattle hindlimb:</b> Tourniquet above hock + injection into a superficial dorsal vein → entire foot anaesthetised. Used for foot surgery.",
            imgCode: "veins_hindlimb"
        },
        {
            title: "Lymph Nodes of Hindlimb & Pelvis",
            desc: "<b>Important Lymph Nodes (palpable / clinical):</b><br><br>1. <b>Subiliac LN (= Prefemoral LN)</b>: <br>- Largest external LN of hindlimb.<br>- Located in front of thigh, in the fold of flank.<br>- <b>EASILY PALPABLE</b> in cattle.<br>- Drains: skin of thigh, abdominal wall, flank.<br><br>2. <b>Popliteal LN</b>:<br>- Behind stifle (in popliteal fossa).<br>- Drains: distal hindlimb (foot, leg).<br>- Palpable in dogs and large animals.<br><br>3. <b>Superficial Inguinal LN</b>:<br>- In groin region.<br>- In males: <b>scrotal LN</b> (drain scrotum & testis).<br>- In females: <b>supramammary (mammary) LN</b> (drain udder) — <b>Very important in mastitis and udder cancer!</b><br><br>4. <b>Deep Inguinal / Iliac LN</b>: along iliac arteries; drain pelvic viscera & deep hindlimb.<br><br>5. <b>Sacral / Internal Iliac LN</b>: pelvic floor; drain rectum, vagina, bladder.",
            eliteDesc: "<b>LYMPH NODES OF HINDLIMB AND PELVIS</b><br><br>The subiliac node is readily palpable in cattle and drains superficial flank/thigh regions. The popliteal node drains the distal limb and is palpable in dogs and cats but normally deep and not routinely palpable in cattle. Superficial inguinal nodes drain superficial inguinal, scrotal or mammary tissues according to sex; <b>the testes drain to lumbar (aortic) lymph nodes, not scrotal nodes</b>. Mammary lymph drainage is species- and gland-dependent: canine glands can drain toward axillary or superficial inguinal pathways. Deep inguinal, iliac and sacral nodes drain deeper pelvic/hindlimb structures. Node enlargement supports localization but is not disease-specific.",
            comparative: [
                { species: "Cattle", note: "Subiliac and supramammary LNs are routinely examined. Persistent enlargement → lymphosarcoma (BLV)." },
                { species: "Dog", note: "Popliteal & superficial inguinal LN are palpable in standard physical exam — enlargement = lymphoma." }
            ],
            clinical: "<b>Mastitis:</b> Supramammary-node enlargement or tenderness may support inflammation but does not confirm mastitis; combine udder examination with milk testing/culture as indicated.<br><b>Bovine lymphoma:</b> Generalized lymphadenopathy may involve subiliac and mammary nodes.<br><b>Distal limb infection:</b> Regional lymph nodes can react, but absence or presence of enlargement is not diagnostic alone.",
            imgCode: "lymph_nodes_hindlimb"
        }
    ],

    // =====================================================
    // SPLANCHNOLOGY (pelvic viscera populated in data-splanchnology.JS)
    // =====================================================
    "Splanchnology": []
};

// Verified regional audit (2026-07): correct legacy errors and complete nerve/vessel coverage.
(function applyVerifiedHindlimbPelvisAudit() {
    var region = atlasData["Hindlimb & Pelvis"];
    function entry(section, title) {
        return (region[section] || []).find(function (item) { return item.title === title; });
    }
    function replace(section, title, fields) {
        var item = entry(section, title);
        // Preserve the original detailed Standard and Elite text. Corrections are
        // applied non-destructively below instead of replacing whole fields.
        if (false && item) Object.assign(item, fields);
    }

    replace("Osteology", "Sacrum & Coccygeal (Tail) Vertebrae", {
        desc: "<b>Sacrum:</b> In cattle five sacral vertebrae normally fuse to transmit weight from the vertebral column to the pelvis. Dorsal and ventral sacral foramina transmit branches of sacral nerves; the sacral canal continues the vertebral canal.<br><br><b>Caudal vertebrae:</b> Number varies. Proximal segments retain recognizable arches and processes, while distal segments become simpler. Hemal processes/arches protect ventral caudal vessels. Routine caudal epidural access is at the sacrocaudal or first intercoccygeal space, not simply anywhere in the sacral canal.",
        eliteDesc: "<b>SACRUM AND CAUDAL VERTEBRAE</b><br><br>The bovine sacrum is normally formed by five fused vertebrae and articulates with the ilia at auricular surfaces. The sacral canal contains meninges and cauda-equina roots; the cauda equina is a root bundle, not the caudal end of the spinal cord. The conus medullaris in adult cattle can extend to the lumbosacral/S1 region, which is relevant to neuraxial procedures. Caudal-vertebral counts and hemal-process development vary among animals.",
        clinical: "<b>Clinical relevance:</b> Caudal epidural anesthesia is commonly approached at the sacrocaudal or first intercoccygeal space using calculated dosing. Tail blood collection targets the coccygeal vein on the ventral midline; the accompanying artery may also be entered, so vessel identity should not be assumed from location alone."
    });

    replace("Osteology", "Patella (Knee Cap)", {
        desc: "<b>Patella:</b> The largest sesamoid bone, developed in the quadriceps tendon and articulating with the femoral trochlea. It improves quadriceps leverage and protects the cranial stifle. Cattle and horses have medial, middle and lateral patellar ligaments; carnivores have one. Parapatellar fibrocartilage is species-specific and is especially important medially in the equine locking mechanism.",
        eliteDesc: "<b>PATELLA</b><br><br>The patella transmits quadriceps force to the tibial tuberosity through patellar ligament(s). Cattle and horses possess three patellar ligaments. The equine medial parapatellar fibrocartilage and medial patellar ligament can engage the enlarged medial trochlear ridge as part of the passive stay apparatus. Do not generalize identical medial and lateral fibrocartilage development or an equine locking mechanism to every species.",
        comparative: [
            { species: "Ox", note: "Three patellar ligaments; no equine-style obligatory locking mechanism." },
            { species: "Horse", note: "Three patellar ligaments and prominent medial parapatellar fibrocartilage participate in the stay apparatus." },
            { species: "Dog", note: "One patellar ligament; medial or lateral luxation can occur." },
            { species: "Pig", note: "One principal patellar ligament." },
            { species: "Fowl", note: "Chicken has a patella associated with the extensor mechanism; avian shape and articulation differ from mammals." }
        ],
        clinical: "<b>Upward fixation of the patella:</b> Usually managed first by diagnosis, conditioning and correction of contributing factors. Medial patellar desmotomy is reserved for selected persistent cases because complications can occur."
    });

    replace("Osteology", "Tibia & Fibula", {
        desc: "<b>Tibia:</b> Principal weight-bearing bone of the crus, with proximal condyles and tibial tuberosity and a distal cochlea articulating with the talus.<br><br><b>Fibula in cattle:</b> Greatly reduced. A proximal fibular head is fused to the lateral tibial condyle, the shaft is absent or represented by fibrous tissue, and the distal remnant is a separate malleolar bone (os malleolare) forming the lateral malleolus.",
        eliteDesc: "<b>TIBIA AND FIBULA</b><br><br>The tibial plateau supports the femoral condyles through the menisci; the intercondylar area anchors cruciate ligaments and menisci. The extensor groove lies lateral to the tibial tuberosity. Distally the tibial cochlea articulates with the talus. In cattle the fibula is represented by a proximal head and distal malleolar bone with no complete bony shaft. The horse retains only a proximal fibular shaft and incorporates the lateral malleolus into the tibia; dog and pig retain complete fibulae."
    });

    replace("Osteology", "Metatarsus & Digits (Cannon, Pastern, Hoof)", {
        desc: "<b>Ox metatarsus:</b> Metatarsals III and IV fuse to form the cannon bone, which is generally longer and more angular than the metacarpal cannon. Metatarsals II and V are absent or reduced. Digits III and IV are functional; II and V form dewclaws. Each functional digit has three phalanges, paired proximal sesamoids and one distal sesamoid and is enclosed distally by its own claw capsule.",
        eliteDesc: "<b>BOVINE METATARSUS AND DIGITS</b><br><br>Metatarsals III and IV fuse to form the hind cannon bone, which is generally longer and more angular than the metacarpal cannon. A longitudinal vascular groove/canal marks the fusion and distal paired trochleae articulate with digits III and IV. Each functional digit contains three phalanges, paired proximal sesamoids and one distal sesamoid and has its own claw capsule. Digits II and V form variable dewclaws. The two claws together form the cloven foot; P3 itself should not be called one 'cloven bone'."
    });

    replace("Osteology", "Tarsus (Hock)", {
        desc: "<b>Ox tarsus:</b> Five bones are arranged in three rows. Proximally are talus and calcaneus. The central and fourth tarsal bones fuse as the centroquartal bone. Distally, tarsal I is separate and tarsals II+III are fused. The talus has proximal and distal trochleae; the tuber calcanei receives the common calcaneal tendon.",
        eliteDesc: "<b>TARSUS / HOCK</b><br><br>The bovine tarsus normally contains talus, calcaneus, fused central+fourth (centroquartal), tarsal I and fused tarsals II+III. Most movement occurs at the tarsocrural joint. The calcaneal tuber is the point of the hock and receives gastrocnemius plus other contributors to the <b>common calcaneal tendon</b>. Capped hock involves a bursa over this region. Equine chestnuts are keratinized skin structures; speculative origin stories are not required for anatomy teaching.",
        comparative: [
            { species: "Ox", note: "Five tarsal bones; central+fourth and second+third are fused." },
            { species: "Horse", note: "Six tarsal bones; central and fourth are separate, while second+third are fused." },
            { species: "Dog", note: "Seven tarsal bones with separate central and numbered distal bones." },
            { species: "Pig", note: "Seven tarsal bones with limited fusion." }
        ]
    });

    replace("Myology", "Gluteal Muscles (Superficial, Middle, Deep, Accessory)", {
        desc: "<b>Gluteal region:</b> In cattle superficial gluteus blends with biceps femoris as gluteobiceps. Middle gluteus is a powerful hip extensor; deep gluteus chiefly abducts and stabilizes the hip, and actions vary with limb position. The accessory gluteal part is associated with middle gluteus. Cranial gluteal nerve supplies middle/deep gluteal and tensor fasciae latae; caudal gluteal branches supply superficial components.",
        clinical: "<b>Clinical relevance:</b> The sciatic nerve lies deep and caudal to the hip. Intramuscular injection sites in food animals must follow current product, residue and species guidance; the rump should not be taught as a universally preferred injection site."
    });

    replace("Myology", "Adductor Group (Medial Thigh)", {
        desc: "<b>Medial thigh:</b> Gracilis, adductor, pectineus and obturator externus are major adductors supplied predominantly by the obturator nerve. Sartorius lies cranially, helps bound the femoral triangle and is supplied mainly by the femoral nerve. Pectineus may receive dual innervation. The femoral triangle is bounded by sartorius, pectineus and abdominal wall and contains femoral vessels and nerve.",
        eliteDesc: "<b>MEDIAL THIGH AND FEMORAL TRIANGLE</b><br><br>Obturator-nerve injury weakens adduction because it affects gracilis, adductor, obturator externus and usually pectineus. Sartorius must not be grouped as an obturator-supplied adductor; it is a femoral-nerve muscle. In the femoral triangle, the neurovascular bundle is clinically important and the femoral artery is a routine pulse site in dogs and cats."
    });

    replace("Myology", "Hamstring Group (Caudal Thigh Muscles)", {
        desc: "<b>Caudal thigh group:</b> Biceps femoris/gluteobiceps, semitendinosus and semimembranosus arise largely from sacral/ischial regions but have distinct insertions. Biceps spreads through patellar and crural fascia toward tibial and calcaneal attachments; semitendinosus inserts on tibia and contributes to the common calcaneal tendon; semimembranosus inserts on caudomedial femur and medial tibia and does not join that tendon. Actions on hip and stifle vary with limb position.",
        eliteDesc: "<b>CAUDAL THIGH MUSCLES</b><br><br>The hamstring group is not one muscle with one insertion. Biceps femoris is broad and lateral; semitendinosus is caudal; semimembranosus is medial and deep. They extend the hip when the limb is weight bearing and have different flexor/extensor effects on the stifle according to insertion and phase of stride. Sciatic branches, predominantly from its tibial component, supply them.",
        clinical: "<b>Clinical relevance:</b> Sciatic injury can weaken the caudal thigh and all structures distal to the stifle. Isolated muscle injury causes deficits according to the affected insertion and should not be reduced to loss of one universal 'hamstring action'."
    });

    replace("Myology", "Iliopsoas, Tensor Fasciae Latae & Hip Flexors", {
        eliteDesc: "<b>HIP FLEXORS</b><br><br>Psoas major and iliacus unite as iliopsoas and insert on the lesser trochanter, strongly flexing the hip. Tensor fasciae latae arises near the tuber coxae and inserts through fascia lata, flexing the hip and assisting stifle extension. Psoas minor lies ventral to the lumbar vertebrae and inserts on the iliopubic eminence/psoas-minor tubercle; it flexes the lumbosacral region or pelvis rather than the hip. Origins and development vary among species."
    });

    replace("Myology", "Caudal Crural (Calf) Muscles", {
        desc: "<b>Caudal crural group:</b> Gastrocnemius extends the tarsus through the common calcaneal tendon. Superficial and deep digital flexors flex the digits and also act on the tarsus; popliteus acts on the stifle. The common calcaneal tendon includes gastrocnemius and contributions from superficial digital flexor and, depending on species, biceps femoris, semitendinosus and gracilis. The tibial nerve supplies this compartment.",
        comparative: [
            { species: "Horse", note: "Superficial digital flexor forms the caudal component of the reciprocal apparatus and caps the calcaneal tuber." },
            { species: "Dog", note: "The common calcaneal tendon has several muscular contributions and can be partially or completely disrupted." },
            { species: "Ox", note: "Gastrocnemius and digital flexors are strong tarsal/digital actuators; common-fibular and tibial lesions produce distinct postures." }
        ],
        clinical: "<b>Clinical relevance:</b> Tibial-nerve injury weakens tarsal extension and digital flexion and produces a characteristic abnormal stance. Gastrocnemius or common-calcaneal-tendon disruption causes a dropped/plantigrade hock; causes vary with species and age and should not be assigned universally to the periparturient dairy cow."
    });

    replace("Myology", "Cranial Crural (Front of Leg) Muscles", {
        desc: "<b>Craniolateral crural group:</b> Tibialis cranialis flexes the tarsus. Long digital extensor (with bovine medial/lateral heads) and lateral digital extensor extend the digits and assist tarsal flexion. Fibularis longus is present in cattle and acts on the tarsus. Fibularis tertius is muscular in cattle but entirely tendinous in the horse, where it forms the cranial component of the reciprocal apparatus. Common fibular nerve branches supply the group.",
        eliteDesc: "<b>CRANIOLATERAL CRURAL MUSCLES</b><br><br>Tibialis cranialis, long and lateral digital extensors, fibularis longus and fibularis tertius have species-specific arrangements. The bovine long digital extensor has two heads and the bovine fibularis longus is a distinct muscle. Only the equine fibularis tertius is a fully tendinous component of the reciprocal apparatus; this architecture must not be transferred to cattle or dogs."
    });

    replace("Arthrology", "Sacroiliac Joint", {
        comparative: [
            { species: "Horse", note: "A strong, low-motion joint; asymmetric tubera sacrale may reflect conformation or prior injury and do not prove subluxation." },
            { species: "Cattle", note: "Sacroiliac and sacrosciatic soft tissues become more compliant near parturition; the adult pelvic symphysis does not reopen." }
        ]
    });

    replace("Arthrology", "Hip (Coxofemoral) Joint", {
        desc: "<b>Hip joint:</b> A synovial ball-and-socket joint between femoral head and acetabulum. The joint capsule, acetabular labrum and ligament of the femoral head stabilize it. The horse additionally has an accessory ligament from the prepubic tendon through the acetabular notch to the femoral head, markedly limiting abduction.",
        eliteDesc: "<b>COXOFEMORAL JOINT</b><br><br>The hip permits flexion, extension, abduction, adduction and rotation, although sagittal motion predominates in large ungulates. The acetabular labrum deepens the socket and the transverse acetabular ligament bridges the notch. The ligament of the femoral head is present in domestic mammals; the equine accessory ligament provides additional stability and limits abduction. It is inaccurate to claim that a horse cannot kick laterally at all.",
        comparative: [
            { species: "Horse", note: "Accessory ligament strongly limits abduction and makes luxation uncommon, but lateral kicking remains possible." },
            { species: "Dog", note: "No accessory ligament; hip dysplasia and traumatic luxation are clinically important." },
            { species: "Cattle", note: "No equine accessory ligament; coxofemoral luxation can occur." }
        ]
    });

    replace("Neurology", "Lumbosacral Plexus (overview)", {
        desc: "<b>Lumbosacral plexus:</b> Formed by ventral branches of caudal lumbar and cranial sacral nerves, with exact roots varying by species. Major branches include femoral, obturator, cranial and caudal gluteal, sciatic, caudal cutaneous femoral, pudendal and pelvic nerves. The sciatic divides into tibial and common fibular nerves; the pudendal nerve serves somatic perineal/external-genital structures, while pelvic nerves carry parasympathetic fibers to pelvic viscera.",
        eliteDesc: "<b>LUMBOSACRAL PLEXUS</b><br><br>In cattle the principal contributions commonly involve L4-L6 and S1-S2, with more caudal sacral contributions to pelvic and pudendal pathways. Femoral nerve supplies quadriceps; obturator supplies major adductors; cranial/caudal gluteal nerves supply gluteal groups; sciatic supplies caudal thigh and, through tibial/common fibular branches, most of the limb distal to the stifle. Pudendal and pelvic nerves must not be conflated: pudendal is chiefly somatic, whereas pelvic nerves are parasympathetic."
    });

    replace("Neurology", "Femoral & Obturator Nerves", {
        desc: "<b>Femoral nerve:</b> Traverses iliopsoas and enters the medial thigh to supply quadriceps and sartorius; its saphenous branch supplies medial crural/hock skin. Injury prevents effective stifle extension and weight bearing.<br><br><b>Obturator nerve:</b> Crosses the pelvic floor and exits through the obturator canal/foramen to supply major adductors. Dystocia can compress it against pelvic bone, causing hindlimb splaying. Pectineus innervation may be mixed.",
        eliteDesc: "<b>FEMORAL AND OBTURATOR NERVES</b><br><br>The femoral nerve supplies iliopsoas branches, sartorius and quadriceps and continues as the sensory saphenous nerve. The obturator nerve supplies obturator externus, gracilis, adductor and usually pectineus. Obstetric injury may affect obturator alone or multiple lumbosacral nerves; 'downer cow' is a clinical syndrome with many possible causes and is not synonymous with obturator paralysis.",
        clinical: "<b>Clinical relevance:</b> Femoral injury causes stifle collapse; obturator injury causes inadequate adduction and splaying. Supportive care and prognosis depend on whether additional nerves, muscles or systemic disease are involved."
    });

    replace("Neurology", "Sciatic Nerve & its Branches: Tibial + Peroneal", {
        desc: "<b>Sciatic nerve:</b> Leaves the pelvis and supplies caudal thigh before dividing at a species-variable level into tibial and common fibular nerves.<br><b>Tibial nerve:</b> Supplies caudal crural muscles and continues as medial/lateral plantar nerves; injury weakens tarsal extension and digital flexion.<br><b>Common fibular nerve:</b> Divides into superficial/deep branches to craniolateral crural muscles; injury produces tarsal overextension, distal flexion and dorsal knuckling. Diagnostic blocks use exact species-specific nerve and level names.",
        eliteDesc: "<b>SCIATIC, TIBIAL AND COMMON FIBULAR NERVES</b><br><br>The tibial nerve continues near the hock into medial and lateral plantar nerves; the lateral plantar nerve gives a deep branch to plantar metatarsal nerves. The common fibular nerve divides into superficial and deep branches and contributes dorsal metatarsal/digital sensation. Equine high four-point anesthesia targets medial/lateral plantar and plantar metatarsal nerves in the proximal metatarsus; it is not a tibial block at the hock. Bovine and equine block landmarks are not interchangeable.",
        clinical: "<b>Clinical relevance:</b> Localize injury from joint posture, motor loss and cutaneous sensation. Tibial, common-fibular and plantar blocks are advanced procedures requiring current species-specific landmarks, calculated dosing and asepsis; fixed one-line needle sites are unsafe."
    });

    replace("Neurology", "Pudendal (Pudic) Nerve & Epidural Anaesthesia", {
        comparative: [
            { species: "Bull", note: "Pudendal blockade may facilitate selected penile examinations or procedures, but approach and effectiveness are technique-dependent." },
            { species: "Mare", note: "Caudal epidural analgesia can support selected obstetric/perineal procedures using calculated agent and spread." },
            { species: "Dog", note: "Lumbosacral epidural anesthesia is performed with weight-based dosing and monitoring by trained clinicians." }
        ],
        clinical: "<b>Clinical applications:</b> Pudendal block, caudal or cranial epidural anesthesia, patellar desmotomy, urethrotomy, castration and vasectomy each require separate species-specific anatomy and procedural training. Do not define cranial epidural merely as a larger caudal dose or publish one universal interspace/volume. In cattle, urethral obstruction commonly occurs at the sigmoid-flexure/distal urethral region, but surgical approach depends on case and species."
    });

    if (!entry("Neurology", "Gluteal, Cutaneous and Pelvic Nerves")) {
        region.Neurology.splice(1, 0, {
            title: "Gluteal, Cutaneous and Pelvic Nerves",
            desc: "<b>Cranial gluteal nerve:</b> Supplies middle/deep gluteal muscles and tensor fasciae latae.<br><b>Caudal gluteal nerve:</b> Supplies superficial gluteal/gluteobiceps components according to species.<br><b>Caudal cutaneous femoral nerve:</b> Sensory to caudal thigh/perineal-adjacent skin.<br><b>Pelvic nerves:</b> Parasympathetic supply to distal colon, rectum, bladder and genital organs; distinct from the somatic pudendal nerve.",
            eliteDesc: "<b>GLUTEAL AND PELVIC NERVES</b><br><br>Gluteal nerves pass through the greater sciatic region to their muscle groups and are important in hip stability and propulsion. Caudal cutaneous femoral and cluneal branches map the rump/caudal-thigh skin. Pelvic splanchnic nerves carry parasympathetic fibers to pelvic plexuses, whereas hypogastric nerves carry sympathetic fibers and pudendal nerves provide somatic perineal motor and sensory supply. This autonomic-somatic distinction is essential for bladder, rectal and genital function.",
            comparative: [
                { species: "Cattle", note: "Obstetric trauma can affect several lumbosacral branches, not only the obturator nerve." },
                { species: "Horse", note: "Gluteal and sciatic-region topography is important for injections and pelvic trauma." },
                { species: "Dog", note: "Pelvic fractures and surgical approaches can injure gluteal, sciatic or autonomic pathways." }
            ],
            clinical: "<b>Localization:</b> Combine gait, muscle atrophy, perineal reflexes, tail tone and bladder function to distinguish somatic from autonomic injury.",
            imgCode: "pelvic_nerves"
        });
    }

    if (!entry("Neurology", "Distal Dorsal and Plantar Nerves")) {
        region.Neurology.splice(region.Neurology.length - 1, 0, {
            title: "Distal Dorsal and Plantar Nerves",
            desc: "<b>Plantar side:</b> Tibial nerve divides into medial and lateral plantar nerves. Their common/proper digital branches supply the plantar foot; a deep branch contributes plantar metatarsal nerves.<br><b>Dorsal side:</b> Superficial and deep fibular branches contribute dorsal metatarsal and digital nerves. Branching differs between the single equine digit and paired bovine digits.",
            eliteDesc: "<b>DISTAL HINDLIMB INNERVATION</b><br><br>Near the hock the tibial nerve divides into plantar nerves, while the common fibular system supplies dorsal territories. In cattle, dorsal and plantar common-digital nerves divide into axial and abaxial proper-digital branches for digits III and IV. In horses, medial/lateral plantar nerves and plantar metatarsal nerves are targeted at defined levels in diagnostic analgesia. Always name the nerve and level rather than using 'plantar block' without qualification.",
            comparative: [
                { species: "Ox", note: "Paired digits require axial and abaxial digital-nerve terminology." },
                { species: "Horse", note: "Single functional digit has medial/lateral plantar digital nerves and plantar metatarsal branches." },
                { species: "Dog", note: "Dorsal and plantar metatarsal/digital branches serve multiple digits." }
            ],
            clinical: "<b>Blocks:</b> Use species-appropriate anatomy, calculated dose and sterile technique. A high four-point block is an equine metatarsal-level block, not a generic tibial block.",
            imgCode: "distal_hindlimb_nerves"
        });
    }

    replace("Angiology", "Major Arteries of Hindlimb", {
        desc: "<b>Main pathway:</b> External iliac becomes femoral after entering the thigh; femoral becomes popliteal caudal to the stifle, then divides into cranial and caudal tibial pathways. Cranial tibial continues as dorsal pedal and dorsal metatarsal arteries; perforating and plantar anastomoses supply the foot. Internal iliac branches supply gluteal, perineal and pelvic-visceral regions. Distal hindlimb terminology is <b>plantar</b>, not palmar.",
        eliteDesc: "<b>HINDLIMB ARTERIES</b><br><br>The external iliac gives deep femoral and associated proximal branches and continues as femoral. Important femoral branches include saphenous and caudal femoral arteries. Popliteal divides into cranial and caudal tibial arteries. Cranial tibial passes to the dorsal tarsus as dorsal pedal and continues into dorsal metatarsal pathways; perforating branches connect with plantar arches and digital arteries. Exact dominance and branching differ between cattle and horses. Internal iliac, caudal gluteal/internal pudendal and related branches supply pelvis and perineum.",
        clinical: "<b>Clinical relevance:</b> Femoral pulse is readily assessed in dogs/cats; coccygeal and facial pulse sites are more practical in cattle. Intravenous regional anesthesia uses a vein, not a distal artery."
    });

    replace("Angiology", "Major Veins of Hindlimb (Saphenous & Recurrent Tarsal)", {
        desc: "<b>Deep system:</b> Tibial and popliteal veins drain to femoral and external iliac veins.<br><b>Superficial system:</b> Medial and lateral saphenous veins drain the limb in species-specific patterns. In the dog the lateral saphenous/recurrent-tarsal region is a common venous access site; it should not be described as a 'cephalic-like' tributary. In cattle a prominent cranial tributary of the lateral saphenous crosses the hock region.",
        eliteDesc: "<b>HINDLIMB VEINS</b><br><br>Deep veins accompany arteries. Superficial medial and lateral saphenous systems communicate with deep veins and differ in prominence by species. The canine recurrent tarsal/saphenous vein is clinically accessible on the lateral distal limb. In cattle, a cranial tributary of the lateral saphenous is prominent around the hock; joint approaches must avoid superficial vessels. The subcutaneous abdominal ('milk') vein drains the ventral abdominal wall/udder region and is not a routine hindlimb vein or preferred emergency catheter site.",
        clinical: "<b>Venous access:</b> Canine lateral saphenous/recurrent tarsal access and bovine distal-limb IV regional anesthesia use trained restraint, asepsis and appropriate vessels. Cattle and horses generally use the jugular for routine systemic access."
    });

    replace("Angiology", "Lymph Nodes of Hindlimb & Pelvis", {
        desc: "<b>Subiliac node:</b> Readily palpable in cattle and drains superficial flank/thigh regions.<br><b>Popliteal node:</b> Drains distal limb; routinely palpable in dogs/cats but deep and not normally palpable in cattle.<br><b>Superficial inguinal nodes:</b> Drain scrotal or mammary and adjacent superficial tissues. The testes themselves drain to lumbar (aortic) nodes.<br><b>Deep inguinal, iliac and sacral nodes:</b> Drain deep hindlimb and pelvic territories.",
        eliteDesc: "<b>HINDLIMB AND PELVIC LYMPHATICS</b><br><br>Lymphatic drainage follows superficial and deep vascular pathways. Subiliac nodes are major bovine surface landmarks. Popliteal nodes are useful palpation sites in carnivores but not normally in cattle. Scrotal nodes drain scrotal coverings, while testicular lymph follows gonadal vessels to lumbar nodes. Mammary drainage varies by gland and species; node enlargement supports localization but does not identify a specific disease."
    });

    if (!entry("Angiology", "Pelvic and Gluteal Arterial Supply")) {
        region.Angiology.splice(1, 0, {
            title: "Pelvic and Gluteal Arterial Supply",
            desc: "<b>Internal iliac system:</b> Supplies pelvic walls, pelvic viscera, gluteal region, perineum and external genital structures through species-variable caudal gluteal, internal pudendal, umbilical and urogenital branches. External pudendal vessels instead arise through the deep-femoral/pudendoepigastric pathway and pass through the inguinal region.",
            eliteDesc: "<b>PELVIC ARTERIES</b><br><br>In cattle the internal iliac commonly continues through a caudal gluteal/internal pudendal pattern. Urogenital branches supply bladder, rectum and reproductive organs; internal pudendal supplies perineal and genital structures. Cranial gluteal supply has a species-specific origin. External pudendal vessels arise from the deep femoral/pudendoepigastric system and accompany the inguinal canal, so they must not be merged with internal-pudendal supply.",
            comparative: [
                { species: "Cattle", note: "Long common caudal gluteal/internal pudendal pattern is characteristic." },
                { species: "Horse", note: "Obturator and genital arterial contributions differ from cattle." },
                { species: "Dog", note: "Internal iliac branching differs and should be learned from canine-specific maps." }
            ],
            clinical: "<b>Application:</b> Pelvic surgery, castration and perineal procedures require identification of internal versus external pudendal pathways.",
            imgCode: "pelvic_arteries"
        });
    }

    if (!entry("Angiology", "Distal Hindlimb Arteries and Digital Supply")) {
        region.Angiology.splice(2, 0, {
            title: "Distal Hindlimb Arteries and Digital Supply",
            desc: "<b>Distal pathway:</b> Cranial tibial becomes dorsal pedal at the tarsus and continues into dorsal metatarsal arteries. Perforating tarsal/metatarsal branches join plantar arches. In cattle, common digital arteries divide into axial and abaxial proper digital arteries for digits III and IV.",
            eliteDesc: "<b>DISTAL HINDLIMB VASCULATURE</b><br><br>Dorsal pedal and dorsal metatarsal vessels communicate with medial/lateral plantar and plantar-metatarsal systems through perforating branches. Bovine terminal vessels serve two principal digits, while the equine pattern supplies a single digit through medial and lateral plantar digital arteries and an intraosseous terminal arch. Use bovine axial/abaxial terminology rather than copying the equine map.",
            comparative: [
                { species: "Ox", note: "Two functional digits receive axial and abaxial proper digital arteries." },
                { species: "Horse", note: "Dorsal metatarsal and plantar systems supply the single digit and terminal arch." },
                { species: "Dog", note: "Dorsal and plantar metatarsal branches supply multiple digits." }
            ],
            clinical: "<b>Clinical relevance:</b> Digital perfusion and pulse findings must be interpreted with species-specific anatomy and the lesion site.",
            imgCode: "hindlimb_distal_arteries"
        });
    }
})();

// Phrase-level errata: preserve the complete original lessons while correcting
// only the specific inaccurate claim.
(function applyHindlimbPelvisPhraseErrata() {
    var region = atlasData["Hindlimb & Pelvis"];
    var rules = [
        [/Sacral canal<\/b> continues spinal canal — site for CAUDAL EPIDURAL/g, "Sacral canal</b> continues the vertebral canal; routine bovine caudal epidural access is at the sacrocaudal or first intercoccygeal space"],
        [/The injection blocks the last sacral and all coccygeal nerves/g, "A correctly selected caudal epidural desensitizes caudal sacral/coccygeal territories according to its segmental spread"],
        [/Higher dose at L6-S1 — paralyses the hindlimbs \(animal must be cast\)/g, "More cranial epidural spread can weaken the hindlimbs; approach and dose require patient-specific calculation and monitoring"],
        [/Common in puppies\/calves after road accidents/g, "Can occur after trauma or physeal injury, with age- and species-specific patterns"],
        [/Parapatellar fibrocartilages<\/b> on medial and lateral sides/g, "Parapatellar fibrocartilage</b> is species-specific and especially developed medially in the horse"],
        [/Patella small or absent/g, "Patella present with avian-specific morphology"],
        [/'Achilles tendon'/g, "common calcaneal tendon"],
        [/Achilles tendon/g, "common calcaneal tendon"],
        [/considered vestige of carpal\/tarsal pad/g, "a keratinized skin structure whose speculative origin is not required for anatomical description"],
        [/P3<\/b> is the cloven hoof bone/g, "Each P3</b> lies within one of the two claws; together the claws form the cloven hoof"],
        [/P3 is the cloven hoof bone/g, "each P3 lies within one claw of the cloven foot"],
        [/main extensors of the hip/g, "muscles with species- and position-dependent actions on the hip"],
        [/Middle gluteus is preferred for intramuscular injection \(large muscle mass\)/g, "Intramuscular injection sites must follow current species, product and food-animal guidance; the gluteal region is not universally preferred"],
        [/Common origin:<\/b> Mostly from <b>tuber ischiadicum<\/b> \(in ox, biceps also from sacrum → 'gluteobiceps'\)\.<br><br><b>Insertion:<\/b> Patella \+ tibial crest \+ calcaneus \(via crural fascia\)\.<br><br><b>Function:<\/b> Extend the hip; flex the stifle; extend the hock — essentially PROPEL the body forward/g, "Origins are chiefly ischial/sacral, but insertions differ: biceps spreads to patellar/crural fascia, tibia and calcaneal structures; semitendinosus reaches tibia and the common calcaneal tendon; semimembranosus reaches caudomedial femur and medial tibia. Actions on hip and stifle depend on limb position"],
        [/From bodies of last thoracic \+ first lumbar vertebrae, inserting on the body of ilium/g, "From ventral lumbar vertebral bodies, inserting on the iliopubic eminence/psoas-minor tubercle"],
        [/In butchery, the psoas major \+ minor \+ iliacus together make the 'tenderloin\/fillet' — the most tender meat \(because it never bears weight, it stays soft\)/g, "Psoas and iliacus occupy the sublumbar region and have clinically important relations to lumbar nerves and retroperitoneal structures"],
        [/tibialis cranialis flexes the tarsus; long and lateral digital extensors extend digits and assist tarsal flexion;/g, "tibialis cranialis flexes the tarsus; bovine long digital extensor has medial and lateral heads, while long and lateral digital extensors extend the digits and assist tarsal flexion; fibularis longus is also present in cattle;"],
        [/Common in dairy cattle around calving/g, "Occurs with species- and age-specific trauma or musculotendinous injury"],
        [/Subluxation common in racehorses & jumpers — asymmetric tuber sacrale \('hunter's bump'\)/g, "Asymmetric tubera sacrale ('hunter's bump') may reflect conformation or prior sacroiliac-region injury and do not by themselves prove subluxation"],
        [/that's why horses can't kick sideways like dogs/g, "therefore equine hip abduction is markedly limited, although lateral kicking remains possible"],
        [/This is why a horse cannot abduct its hindlimb much \(cannot 'kick sideways' like a dog can\)/g, "This markedly limits equine abduction, but does not make lateral kicking impossible"],
        [/Tibial and Peroneal nerve blocks are part of the diagnostic anaesthesia for hindlimb lameness/g, "Tibial, common-fibular and distal plantar blocks are distinct techniques performed at defined species-specific levels"],
        [/Medial hock, above calcaneus \(anterior to common calcaneal tendon\)/g, "a species-specific medial crural/hock landmark selected from a current procedural reference"],
        [/Lateral leg, just below head of fibula/g, "a species-specific lateral proximal-crural landmark selected from a current procedural reference"],
        [/Plantar surface of fetlock \(medial \+ lateral plantar nerves\)/g, "the exact medial/lateral plantar or plantar-metatarsal nerves at the intended level"],
        [/Pudic Block:<\/b> Per-rectal at lesser sciatic notch — extrudes penis in bull/g, "Pudendal block:</b> An advanced bovine technique whose approach and effectiveness require current species-specific guidance"],
        [/Caudal Epidural:<\/b> S5-Cy1 small dose — cow stands; for obstetric work/g, "Caudal epidural:</b> Usually sacrocaudal or first intercoccygeal, with drug and spread calculated to preserve standing when intended"],
        [/Cranial Epidural:<\/b> S5-Cy1 large dose OR L6-S1 — cow recumbent; for major surgery/g, "Cranial epidural:</b> Greater cranial spread can produce hindlimb motor blockade and requires a separate patient-specific plan"],
        [/Lateral Saphenous Vein<\/b> = <b>RECURRENT TARSAL VEIN<\/b> in dog/g, "Lateral saphenous/recurrent-tarsal venous region</b> in the dog"],
        [/Cephalic-like Tributaries<\/b> in dog → drain into femoral vein/g, "Superficial saphenous tributaries</b> communicate with the deep femoral system"],
        [/Palpable in dogs and large animals/g, "Routinely palpable in dogs and cats but deep and not normally palpable in cattle"],
        [/scrotal LN<\/b> \(drain scrotum & testis\)/g, "scrotal lymph nodes</b> drain scrotal coverings; the testes drain to lumbar (aortic) nodes"],
        [/Very important in mastitis and udder cancer!/g, "clinically important in mammary inflammation and neoplasia, though enlargement is not disease-specific"],
        [/the testes drain to lumbar \(aortic\) lymph nodes, not scrotal nodes/g, "the testes drain to lumbar (aortic) lymph nodes, not scrotal nodes"]
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
