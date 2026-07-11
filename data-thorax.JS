// =========================================================
// THORAX DATA MODULE
// Contains: Osteology, Myology, Arthrology, Neurology, Angiology, Splanchnology
// Status: All Sections [Complete]
// Syllabus: VCI Unit-4 (UG B.V.Sc 1st Year)
// =========================================================

if (typeof atlasData === 'undefined') {
    var atlasData = {};
}

atlasData["Thorax"] = {
    "Osteology": [
        {
            title: "Thoracic Vertebrae",
            desc: "Thoracic vertebrae form the dorsal thoracic wall and articulate with ribs.<br><br><b>Ox:</b> Usually 13. Cranial spinous processes contribute to the withers. The anticlinal vertebra varies, commonly T11-T13 in cattle rather than being fixed at T13. Typical vertebrae bear costal foveae for rib heads and transverse costal foveae for rib tubercles; first and last ribs have modified articulations.",
            eliteDesc: "<b>THORACIC VERTEBRAE</b><br><br>Cattle usually have 13 thoracic vertebrae. Typical bodies carry cranial/caudal costal foveae for rib heads and transverse processes carry foveae for rib tubercles, with modifications at the first and last ribs. Cranial spinous processes form the withers. The <b>anticlinal vertebra is variable in cattle (about T11-T13)</b>; it is commonly about T16 in the horse and T11 in dog/cat. Do not use T13 as an invariant bovine landmark.",
            comparative: [
                { species: "Horse", note: "<b>18</b> thoracic vertebrae. Anticlinal = T16. Withers very prominent." },
                { species: "Dog", note: "<b>13</b>. Anticlinal = T11. Spines shorter, more uniform." },
                { species: "Pig", note: "<b>14-15</b> (variable). Spines flat and broad." },
                { species: "Fowl", note: "T1-T5 fused into NOTARIUM. Last thoracic fused with synsacrum. No flexible thoracic spine." }
            ],
            clinical: "<b>Fistulous Withers (Cattle/Horse):</b> Infection of the supraspinous bursa over T2-T5 spines from yoke/saddle pressure. Causes a draining wound on top of shoulders.",
            imgCode: "thoracic_vertebrae"
        },
        {
            title: "Ribs (Costae)",
            desc: "Cattle normally have 13 rib pairs: usually 8 sternal and 5 asternal. The asternal cartilages contribute to the costal arch. The normal 13th bovine rib is asternal, not usually floating; a supernumerary rib may end freely. Typical ribs have head, neck, tubercle, body and costal cartilage, with an intercostal neurovascular bundle near the caudal border.",
            eliteDesc: "<b>RIBS</b><br><br>A typical rib has head, neck, tubercle, angle, body and costal cartilage. Cattle usually have 8 sternal and 5 asternal pairs. The 13th normally contributes to the caudal costal arch and should not be labelled a routine floating rib. The first and last ribs have modified vertebral articulations. Intercostal vessels and nerve lie near the caudal rib border; procedural needle placement must follow the exact intervention and species rather than a slogan alone.",
            comparative: [
                { species: "Horse", note: "<b>18 pairs</b> (8 sternal + 10 asternal). Ribs are narrower." },
                { species: "Dog", note: "<b>13 pairs</b> (9 sternal + 4 asternal). Ribs more rounded, very mobile." },
                { species: "Pig", note: "<b>14-15 pairs</b> (7 sternal + rest asternal). Long thoracic cage." },
                { species: "Fowl", note: "<b>7 pairs</b>. Each rib has a backward-pointing <b>UNCINATE PROCESS</b> that overlaps the next rib (gives strength for flight). Cervical ribs may also be present." }
            ],
            clinical: "<b>Rib Fractures:</b> Common after trauma (cattle pushing through gates, road accidents in dogs). May puncture pleura → <i>pneumothorax</i> (air in chest cavity).<br><b>Needle placement rule:</b> Always cranial border of rib to avoid blood vessels and nerve in costal groove.",
            imgCode: "ribs"
        },
        {
            title: "Sternum",
            desc: "Floor of thoracic cavity (breastbone).<br><br><b>Ox Standard:</b><br>- Made of <b>7 sternebrae</b>.<br>- Three parts: <b>Manubrium</b> (cranial), <b>Body</b> (middle), <b>Xiphoid process + cartilage</b> (caudal).<br>- Shape: dorso-ventrally <b>FLATTENED</b> (boat-shaped).<br>- Manubrium projects cranially as 'Brisket' — palpable in front of forelimbs.<br>- 7 pairs of costal cartilages articulate on its sides.",
            eliteDesc: "<b>THE FLOOR OF THE CHEST</b><br><br>The sternum is an unpaired bone forming the ventral floor of the thoracic cavity. It is segmented into bony pieces called <b>sternebrae</b>, joined by cartilage.<br><br><b>PARTS:</b><br>• <b>Manubrium (Presternum):</b> First sternebra. Projects forward as the <b>brisket</b> in cattle (a fatty, palpable point in front of the chest).<br>• <b>Body (Mesosternum):</b> Middle sternebrae (2nd-6th). Bears facets on its sides for the costal cartilages.<br>• <b>Xiphoid Process + Cartilage (Metasternum):</b> Last segment, ends in a flat cartilage plate (xiphoid cartilage).<br><br><b>SHAPE:</b> In ruminants, the sternum is <b>flat from above to below</b> (boat-shaped); this gives them a wide, floor-like brisket. In horses it is <b>compressed side-to-side</b> (keeled), and in birds it forms a deep <b>keel/carina</b> for flight muscle attachment.<br><br><b>FUNCTION:</b><br>• Floor of thorax — protects heart from below.<br>• Anchor for costal cartilages of true (sternal) ribs.<br>• Origin for pectoral muscles (which attach the forelimb to the chest).<br><br><b>CLINICAL POINT:</b> The brisket and xiphoid are surface landmarks. The xiphoid marks the caudal end of the thorax and the start of the diaphragm.",
            comparative: [
                { species: "Horse", note: "<b>6-8 sternebrae</b>. Compressed side-to-side (keeled). Has a ventral 'cariniform cartilage'." },
                { species: "Dog", note: "<b>8 sternebrae</b>. Cylindrical and rod-like." },
                { species: "Pig", note: "<b>6 sternebrae</b>. Manubrium pointed and projects forward." },
                { species: "Fowl", note: "Single large plate with deep ventral keel/<b>CARINA</b> for attachment of huge flight muscles (pectoralis & supracoracoideus)." }
            ],
            clinical: "<b>Brisket Disease (High-altitude disease, Cattle):</b> Right-sided heart failure causes oedema (fluid swelling) in the brisket — visible as a sagging chest in front of the forelimbs.<br><b>Sternal recumbency:</b> Normal resting position of cattle; weight rests on the wide flat sternum.",
            imgCode: "sternum"
        }
    ],

    "Myology": [
        {
            title: "External Intercostal Muscles",
            desc: "<b>Type:</b> Inspiratory muscles of thoracic wall<br><br><b>Origin:</b> Caudal border of each rib<br><br><b>Insertion:</b> Cranial border of next (caudal) rib<br><br><b>Fibre Direction:</b> Caudo-VENTRAL (downwards & backwards — like fingers in pocket)<br><br><b>Function:</b> Pull ribs forward and outward → ENLARGE thorax → INSPIRATION.<br><br><b>Extent:</b> Fill the intercostal spaces from vertebrae to costochondral junction.",
            eliteDesc: "<b>EXTERNAL INTERCOSTAL MUSCLES</b><br><br>External intercostals occupy the interosseous spaces and generally elevate ribs during inspiration. Fibers run caudoventrally and do not extend through the interchondral region to the sternum. Segmental thoracic ventral branches supply them; T1 also contributes to the brachial plexus and the last thoracic ventral branch is subcostal/costoabdominal rather than a typical intercostal nerve.",
            comparative: [
                { species: "Horse", note: "Same arrangement; very important during exercise breathing." },
                { species: "Dog", note: "Less developed; diaphragm does most of the breathing work." }
            ],
            clinical: "<b>Intercostal nerve block:</b> Local anaesthetic placed at the caudal border of the rib (where vessels & nerve run) blocks pain from rib fractures or from chest wall surgery.",
            imgCode: "external_intercostal"
        },
        {
            title: "Internal Intercostal Muscles",
            desc: "Internal intercostals have interosseous and interchondral portions whose respiratory actions differ. The interosseous portion can depress ribs during forced expiration, whereas interchondral fibers may assist inspiration. Quiet expiration is predominantly passive. Describe fiber direction and attachments by portion rather than calling the whole muscle uniformly expiratory.",
            eliteDesc: "<b>THE BREATHING-OUT MUSCLES OF THE WALL</b><br><br>The <b>internal intercostal</b> is the deep layer, lying just beneath the external intercostal. Its fibres cross those of the external at a right angle.<br><br><b>FIBRE DIRECTION:</b> Fibres run cranio-ventrally — opposite to the external intercostals. Together the two layers form a strong cross-hatched wall that resists the suction of breathing.<br><br><b>HOW IT BREATHES OUT:</b> When it contracts, it pulls the upper rib down toward the lower rib. The chest narrows and the lung air is pushed out (expiration). Quiet breathing-out is mostly passive, but during exercise/heavy breathing, internal intercostals are strongly active.<br><br><b>EXTENT:</b> Reaches further forward than the external intercostal — its <i>intersternal</i> part lies between the cartilages of the true ribs, attaching to the sternum.<br><br><b>NERVE SUPPLY:</b> Intercostal nerves.",
            comparative: [
                { species: "Horse", note: "Strong development for forced breathing during running." },
                { species: "Dog", note: "Important during panting (active expiration through small bursts)." }
            ],
            clinical: "<b>Flail Chest:</b> If 2 or more adjacent ribs fracture in 2 places, that segment moves opposite to the rest of the chest during breathing — paradoxical breathing — and intercostal action is lost.",
            imgCode: "internal_intercostal"
        },
        {
            title: "Diaphragm",
            desc: "<b>Type:</b> The MAIN muscle of breathing (chief inspiratory muscle).<br><br><b>Shape:</b> Dome-shaped sheet between thorax and abdomen.<br><br><b>Parts:</b><br>- <b>Muscular periphery</b>: Costal, Sternal, Lumbar (Crura) parts.<br>- <b>Tendinous Centre (Centrum tendineum)</b>: Y-shaped central tendon.<br><br><b>Three Holes (very important):</b><br>1. <b>Aortic hiatus</b> (most dorsal, in lumbar part) — passes Aorta, Azygos vein, Thoracic duct.<br>2. <b>Oesophageal hiatus</b> (middle) — passes Oesophagus + Vagus trunks.<br>3. <b>Caval foramen</b> (most ventral, in tendinous centre) — passes Caudal Vena Cava.<br><br><b>Function:</b> Contracts → flattens → enlarges thorax → INSPIRATION.<br><br><b>Nerve:</b> <b>Phrenic nerve</b> (C5-C7).",
            eliteDesc: "<b>DIAPHRAGM</b><br><br>The diaphragm is the principal inspiratory muscle. Its costal, sternal and lumbar parts converge on a central tendon. Contraction flattens the dome and enlarges the thorax. The aortic hiatus transmits the aorta and associated structures, the oesophageal hiatus transmits oesophagus and vagal trunks, and the caval foramen transmits the caudal vena cava. Phrenic nerves provide motor supply. Avoid unsourced fixed percentages for its contribution, which varies with species, posture and respiratory state.",
            comparative: [
                { species: "Horse", note: "Very strong; right crus is huge and partly attached to last ribs (helps in galloping rhythm — feet hit ground in time with diaphragm push)." },
                { species: "Dog", note: "The diaphragm is the principal inspiratory muscle; relative contribution varies with posture and respiratory demand." },
                { species: "Pig", note: "Right crus very large; oesophageal hiatus relatively narrow." },
                { species: "Fowl", note: "No mammalian muscular diaphragm. Coordinated sternocostal and body-wall movements ventilate air sacs, which drive airflow through rigid lungs." }
            ],
            clinical: "<b>Diaphragmatic Hernia:</b> A tear in the diaphragm (e.g. after road accident in dog, or after calving in cattle) lets abdominal organs slip into the chest — causes severe breathing difficulty.<br><b>Phrenic nerve injury:</b> Paralyses one half of the diaphragm — that side moves up instead of down during breathing (paradoxical movement). 'Hiccups' = repeated jerky contractions of the diaphragm.",
            imgCode: "diaphragm"
        },
        {
            title: "Other Thoracic Wall Muscles",
            desc: "<b>Accessory breathing muscles:</b><br><br>• <b>Serratus Dorsalis Cranialis</b> — Origin: thoracolumbar fascia; Insertion: caudal border of cranial ribs. <b>INSPIRATORY</b> (pulls ribs forward).<br><br>• <b>Serratus Dorsalis Caudalis</b> — Origin: thoracolumbar fascia; Insertion: cranial border of caudal ribs. <b>EXPIRATORY</b> (pulls ribs backward).<br><br>• <b>Transversus Thoracis</b> — Lies on inside of sternum; depresses ribs in expiration.<br><br>• <b>Scalenus</b> — Cervical to first ribs; fixes first ribs during forced inspiration.<br><br>• <b>Rectus Thoracis</b> — Small muscle from 1st rib to costochondral junctions of cranial ribs; assists inspiration.",
            eliteDesc: "<b>HELPER MUSCLES OF BREATHING</b><br><br>When the animal breathes hard (running, fever, dyspnoea), the diaphragm and intercostals get help from <b>accessory respiratory muscles</b>. These act on the rib cage from outside.<br><br><b>SERRATUS DORSALIS CRANIALIS (Inspiratory):</b><br>Triangular muscle in the dorsal thoracic wall. Origin from the thoracolumbar fascia near the withers; fibres run downward and backward to insert on the cranial ribs. Pulls the ribs forward and outward — helps inspiration.<br><br><b>SERRATUS DORSALIS CAUDALIS (Expiratory):</b><br>Lies more caudally; fibres run downward and forward (opposite direction). Pulls the caudal ribs backward — helps forced expiration. Easy to remember: <i>cranialis pulls forward = inspiration; caudalis pulls backward = expiration</i>.<br><br><b>TRANSVERSUS THORACIS:</b><br>Thin sheet on the deep (inside) face of the sternum and costal cartilages. Pulls ribs ventrally → expiration.<br><br><b>SCALENUS:</b><br>Runs from transverse processes of last cervical vertebrae to the 1st (and sometimes 2nd-4th) ribs. Fixes the first rib so the intercostals have a stable anchor to pull against during deep breathing.<br><br><b>RECTUS THORACIS:</b><br>Small strap-like muscle on the ventral chest wall, from 1st rib to costal cartilages of cranial ribs. Minor inspiratory role.<br><br><b>CLINICAL TIP:</b> A sick animal in respiratory distress shows visible 'pumping' of the flanks and 'flaring' of the nostrils — this is recruitment of accessory muscles. It is a sign of severe breathing trouble.",
            comparative: [
                { species: "Horse", note: "Serrati and scalenus are very developed — racehorses depend on them for fast deep breathing." },
                { species: "Dog", note: "Scalenus very prominent in barrel-chested breeds." }
            ],
            clinical: "<b>Heaves (Equine COPD/RAO):</b> Chronic difficulty in expiration in horses. Strong contraction of abdominal muscles + serratus dorsalis caudalis creates a visible 'heave line' along the lower flank.",
            imgCode: "accessory_resp_muscles"
        }
    ],

    "Arthrology": [
        {
            title: "Intervertebral Joints (Thoracic)",
            desc: "Intervertebral discs unite vertebral bodies; zygapophyseal joints are synovial. Supraspinous, interspinous and flaval ligaments reinforce the column. The <b>dorsal longitudinal ligament</b> lies inside the vertebral canal on the dorsal surfaces of vertebral bodies, whereas the <b>ventral longitudinal ligament</b> lies outside the canal on their ventral surfaces.",
            eliteDesc: "<b>HOW THORACIC VERTEBRAE ARE LINKED</b><br><br>Each thoracic vertebra is connected to the next by joints at <b>three sites</b>: between bodies, between articular processes (left and right), and reinforced by ligaments along the spines.<br><br><b>1. INTERVERTEBRAL DISC:</b> A pad of fibrocartilage between the bodies of two vertebrae.<br>• Outer ring = <b>annulus fibrosus</b> (tough fibres in layers).<br>• Inner core = <b>nucleus pulposus</b> (soft jelly-like).<br>The disc absorbs shock and allows a small amount of bending.<br><br><b>2. ZYGAPOPHYSEAL JOINTS:</b> Small synovial joints between the cranial articular process of one vertebra and the caudal articular process of the next. In the thoracic region these surfaces are nearly flat and lie almost vertical, which strongly limits twisting — important because the rib cage needs a stable spine.<br><br><b>3. LIGAMENTS:</b><br>• <b>Supraspinous ligament:</b> Long fibrous band along the tips of all the spinous processes (continuation of the nuchal ligament from the neck). Resists over-flexion of the back.<br>• <b>Interspinous ligaments:</b> Short fibres filling spaces between adjacent spines.<br>• <b>Ligamentum flavum (yellow ligament):</b> Elastic, joins adjacent vertebral arches; closes the gap in the dorsal wall of the vertebral canal between vertebrae. Used as a landmark when doing epidural injections (needle 'pops' through it).<br>• <b>Dorsal longitudinal ligament:</b> Runs inside the vertebral canal along backs of vertebral bodies.<br>• <b>Ventral longitudinal ligament:</b> Runs along ventral surfaces of bodies.<br><br><b>MOVEMENTS PERMITTED:</b> Very limited in the thoracic region — small flexion-extension; almost no rotation. This rigidity protects heart and lungs.",
            comparative: [
                { species: "Horse", note: "Withers region (T2-T9) very rigid; that's why horses cannot turn their back like a cat." },
                { species: "Dog", note: "More flexibility, especially at the anticlinal vertebra (T11) — allows the back to arch when running." },
                { species: "Fowl", note: "Most thoracic vertebrae fused (notarium) — no movement at all." }
            ],
            clinical: "<b>Intervertebral Disc Disease (IVDD, especially in dogs):</b> The soft nucleus pulposus bulges or ruptures and presses on the spinal cord — causes pain, weakness, paralysis. More common in dachshunds.",
            imgCode: "intervertebral_joints"
        },
        {
            title: "Costovertebral Joints",
            desc: "Costovertebral articulations include the joint of the rib head and the costotransverse joint. Where present, the intercapital ligament connects opposite rib heads across the floor of the vertebral canal and passes <b>dorsal to/over</b> the intervertebral disc; it does not pass through the disc. Rib excursions vary along the thorax and by species.",
            eliteDesc: "<b>HOW RIBS HOOK ONTO THE SPINE</b><br><br>Each rib is attached to the vertebral column by <b>two small synovial joints</b> working as a unit:<br><br><b>1. CAPITULAR JOINT (head of rib):</b><br>The head of the rib sits in a 'socket' formed by the demi-facets of two consecutive vertebrae (one in front + one behind) plus the intervertebral disc between them. So one rib head touches TWO vertebrae.<br><br><b>2. COSTOTRANSVERSE JOINT (tubercle of rib):</b><br>The tubercle of the rib articulates with the transverse process facet of its own (caudal) vertebra.<br><br>These two joints share a common axis, and the rib swings around this axis like a door on hinges. The result is a combined <b>'pump-handle' + 'bucket-handle'</b> motion: cranial ribs lift the sternum forward (pump-handle), caudal ribs swing outward (bucket-handle). Together, this is what enlarges the chest in inspiration.<br><br><b>SPECIAL: INTERCAPITAL (CONJUGAL) LIGAMENT</b><br>This is a <b>unique ligament</b> in the thoracic region. It is a strong fibrous band that runs across the floor of the vertebral canal, joining the head of the right rib to the head of the left rib of the SAME pair, passing OVER the intervertebral disc.<br>• Present from the 2nd rib to about the 10th-11th rib.<br>• Function: Holds the disc firmly in place from above and prevents the disc from bulging up into the spinal canal.<br>• <b>Clinical importance:</b> This is why disc problems (slipped disc) are <b>very rare</b> between T2 and T10/11 in animals — the disc is locked down by this ligament.<br><br><b>OTHER LIGAMENTS:</b><br>• <i>Radiate ligament:</i> Fan-shaped, around the head of rib, holds it in the socket.<br>• <i>Costotransverse ligament:</i> Between neck of rib and transverse process.",
            comparative: [
                { species: "Horse", note: "Same arrangement; intercapital ligament is well developed." },
                { species: "Dog", note: "Intercapital ligament present from 2nd to 10th rib — disc disease almost never occurs in this zone." },
                { species: "Pig", note: "Some ribs articulate with only one vertebra (single-headed) — a basic feature." }
            ],
            clinical: "<b>Why thoracic discs rarely 'slip' (T2-T10):</b> The intercapital ligament guards the disc. Disc disease is therefore most common in the neck and lumbar spine, and in the last (caudal) thoracic discs where this ligament is missing.",
            imgCode: "costovertebral_joints"
        },
        {
            title: "Costochondral & Sternal Joints",
            desc: "Costochondral junctions are cartilaginous. At the sternum, the first sternocostal articulation is typically cartilaginous/synchondrotic, whereas more caudal sternal ribs form synovial sternocostal joints. Intersternebral joints change with age, and interchondral unions contribute to the costal arch.",
            eliteDesc: "<b>THORACIC-WALL JOINTS</b><br><br>The costochondral junction is a synchondrosis. The first sternocostal joint is generally cartilaginous; subsequent sternocostal joints are synovial and permit limited respiratory motion. Intersternebral joints are cartilaginous when young and may ossify with age. Interchondral unions link asternal cartilages into the costal arch. Do not describe all eight bovine sternocostal articulations as identical synovial joints.",
            comparative: [
                { species: "Horse", note: "Sternebrae fuse early; sternum becomes a solid keel-like bone." },
                { species: "Dog", note: "Sternebrae stay distinct longer; cartilage joints persist." },
                { species: "Fowl", note: "All sternebrae fused into one large plate (sternal plate) with the keel/carina." }
            ],
            clinical: "<b>Costochondritis:</b> Painful inflammation at the bone-cartilage junction (often after trauma).<br><b>Costal arch:</b> Important surface landmark — marks the boundary between thorax and abdomen on the side wall.",
            imgCode: "sternal_joints"
        }
    ],

    "Neurology": [
        {
            title: "Intercostal Nerves",
            desc: "Ventral branches of thoracic spinal nerves supply the thoracic wall. Typical intercostal nerves accompany intercostal vessels near caudal rib borders; the last thoracic ventral branch is termed the subcostal/costoabdominal nerve, and T1 also contributes to the brachial plexus. Intercostal blockade targets the nerve at a defined level using procedure-specific landmarks.",
            eliteDesc: "<b>INTERCOSTAL NERVES</b><br><br>Most ventral branches of thoracic spinal nerves run with intercostal vessels near caudal rib borders and give muscular and cutaneous branches. T1 also contributes to the brachial plexus, and the last thoracic ventral branch is subcostal/costoabdominal rather than a typical intercostal nerve. Intercostal blocks place anesthetic near the target nerve at the selected level; safe needle trajectory depends on the specific procedure and anatomy.",
            comparative: [
                { species: "Horse", note: "18 pairs — same arrangement; commonly blocked for rib fracture pain." },
                { species: "Dog", note: "13 pairs; intercostal block is routine analgesia after thoracotomy." }
            ],
            clinical: "<b>Needle safety:</b> The principal intercostal neurovascular bundle is near the caudal rib border. Select the exact rib border, depth and direction for the intended block, thoracocentesis or surgical approach rather than applying one rule without procedural context.",
            imgCode: "intercostal_nerves"
        },
        {
            title: "Vagus Nerve in Thorax (Cranial Nerve X)",
            desc: "Right and left vagus nerves enter the thorax, contribute cardiac and pulmonary branches and form dorsal/ventral vagal trunks on the esophagus. The <b>right recurrent laryngeal</b> loops around the right subclavian artery, whereas the <b>left</b> loops around the aortic arch. Vagal trunks pass through the oesophageal hiatus to species-specific abdominal distributions; the human 'two-thirds of transverse colon' landmark is not appropriate veterinary teaching.",
            eliteDesc: "<b>THE WANDERING NERVE IN THE CHEST</b><br><br>The vagus (CN X) is the longest cranial nerve. After leaving the head and travelling down the neck inside the carotid sheath, both right and left vagi enter the thorax beside the trachea.<br><br><b>STAGE 1 — At the heart base:</b><br>Each vagus gives off its <b>recurrent laryngeal nerve</b>, which loops underneath a big artery and runs back up to the larynx (see separate entry).<br><br><b>STAGE 2 — At the lung roots (hilus):</b><br>Each vagus sends small branches to the <i>cardiac plexus</i> (around the heart) and the <i>pulmonary plexus</i> (around the bronchi). Then the vagus itself splits into a dorsal and a ventral branch.<br><br><b>STAGE 3 — Formation of vagal trunks:</b><br>The dorsal branch of the right vagus joins the dorsal branch of the left vagus to form the <b>Dorsal Vagal Trunk</b>. Similarly, the two ventral branches form the <b>Ventral Vagal Trunk</b>. These two trunks lie on top and bottom of the oesophagus.<br><br><b>STAGE 4 — Exit to abdomen:</b><br>Both trunks travel with the oesophagus through the <b>oesophageal hiatus</b> of the diaphragm and reach the rumen and other abdominal organs.<br><br><b>PARASYMPATHETIC ACTIONS in thorax:</b><br>• Heart: SLOWS the rate (opposite of sympathetic).<br>• Bronchi: CONSTRICTS smooth muscle, increases mucus secretion.<br>• Oesophagus: Drives swallowing waves.<br>• In ruminants the abdominal vagal supply is especially important for forestomach motility (rumen contractions).",
            comparative: [
                { species: "Horse", note: "Vagal trunks well defined on the oesophagus." },
                { species: "Ruminant", note: "<b>Vagal Indigestion (Hoflund's syndrome)</b> — damage to vagal branches around reticulum/abomasum causes failure of forestomach motility." },
                { species: "Dog", note: "Vagal arrhythmias common — strong vagal tone normally slows heart rate during expiration." }
            ],
            clinical: "<b>Vagal indigestion in cattle:</b> Functional failure of forestomach or abomasal outflow can follow several lesions, including adhesions associated with traumatic reticuloperitonitis. It should not be reduced to direct injury of a single ventral vagal branch.",
            imgCode: "vagus_thorax"
        },
        {
            title: "Recurrent Laryngeal Nerve",
            desc: "The left recurrent laryngeal nerve loops around the aortic arch and the right around the right subclavian artery; both ascend in the tracheoesophageal region and continue as caudal laryngeal nerves. They supply all intrinsic laryngeal muscles except cricothyroid, including both abductors and adductors. Equine recurrent laryngeal neuropathy most often affects the left side and impairs arytenoid abduction during exercise.",
            eliteDesc: "<b>RECURRENT LARYNGEAL NERVES</b><br><br>The right nerve loops around the right subclavian artery and the left around the aortic arch before both ascend to the larynx. This recurrent course develops because the heart and aortic arches descend relative to the neck while the nerves remain associated with the arches—not because the larynx migrates forward from the chest. Each recurrent laryngeal nerve supplies intrinsic laryngeal muscles for both abduction and adduction except cricothyroid. Equine recurrent laryngeal neuropathy commonly affects the left side, but its pathogenesis is more complex than length alone.",
            comparative: [
                { species: "Horse", note: "Most clinically affected — ROARING is a major performance disease of racehorses." },
                { species: "Dog", note: "Laryngeal paralysis common in old large breeds (Labrador, retriever) — both nerves can be affected." },
                { species: "Cattle", note: "Rarely affected; roaring is uncommon." }
            ],
            clinical: "<b>Roaring (Laryngeal Hemiplegia) — HORSE:</b><br>• Cause: Idiopathic damage of the LEFT recurrent laryngeal nerve (long course makes it vulnerable).<br>• Sign: Loud roaring/whistling noise during inspiration when galloping; exercise intolerance.<br>• Test: Endoscopy shows left vocal fold not abducting.<br>• Treatment: Laryngoplasty ('tie-back surgery').",
            imgCode: "recurrent_laryngeal"
        },
        {
            title: "Phrenic Nerve & Sympathetic Trunk",
            desc: "<b>Phrenic Nerve:</b><br>- Origin: Ventral branches of <b>C5, C6, C7</b> cervical spinal nerves.<br>- Course: Runs down through the thorax on the side of the mediastinum.<br>- Supply: <b>SOLE motor nerve to the DIAPHRAGM</b>.<br>- Memory: <i>'C3-4-5 keeps the diaphragm alive'</i> (in ox more like C5-6-7).<br><br><b>Sympathetic Trunk in Thorax:</b><br>- Chain of ganglia along the necks of the ribs.<br>- Receives white rami from thoracic spinal nerves.<br>- Forms <b>Cardiac plexus</b> around the heart base (with vagus).<br>- Contributes to the <b>Greater Splanchnic Nerve</b> → goes to abdomen → coeliac ganglion.<br>- Sympathetic effect: SPEEDS the heart, DILATES bronchi (opposite of vagus).",
            eliteDesc: "<b>NERVE TO THE DIAPHRAGM + SYMPATHETIC SUPPLY OF CHEST</b><br><br><b>PHRENIC NERVE — THE 'BREATHING NERVE':</b><br>The phrenic is a special nerve because it travels far from its origin. It is formed in the neck from the ventral branches of cervical spinal nerves <b>C5, C6 and C7</b> (in ox; C5-C7 in horse and dog as well, sometimes C4 contributes).<br><br><b>COURSE:</b> The phrenic runs down the side of the neck → enters the thoracic inlet → passes through the cranial mediastinum on the side of the pericardium (covering of the heart) → continues caudally and ends by spreading into the diaphragm.<br><br><b>SUPPLY:</b> The phrenic is the <b>only motor nerve</b> to the diaphragm. Without it, the diaphragm cannot contract.<br><br><b>WHY CERVICAL ORIGIN?</b> Embryologically, the diaphragm starts as a sheet of muscle in the neck region; it then migrates back to its adult position, dragging its nerve supply along with it. That is why a 'belly muscle' is supplied by 'neck nerves'.<br><br><b>SYMPATHETIC TRUNK IN THORAX:</b><br>This is a chain of small swellings (ganglia) and connecting cords lying along the heads/necks of the ribs, just under the parietal pleura.<br>• Receives <b>white communicating rami</b> from each thoracic spinal nerve (carrying preganglionic sympathetic fibres).<br>• Sends <b>grey communicating rami</b> back to all spinal nerves (carrying postganglionic fibres for blood vessels and sweat glands of the body wall).<br>• Sends branches forward to form the <b>cardiac plexus</b> around the heart base, working together with vagus branches there.<br>• Sends branches caudally that gather into the <b>greater splanchnic nerve</b>, which pierces the diaphragm and goes to the coeliac ganglion in the abdomen.<br><br><b>SYMPATHETIC EFFECTS in chest:</b><br>• Heart: speeds up rate, increases force of contraction.<br>• Bronchi: dilates them (open airways) — opposite of vagus.<br>This is why drugs that mimic sympathetic action (like adrenaline) are used in shock or asthma-like conditions.",
            comparative: [
                { species: "Dog", note: "Phrenic from C5-C7. Cervical disc disease in front of C5 can paralyse the diaphragm." },
                { species: "Horse", note: "Phrenic injury is rare but devastating — animal cannot breathe properly." }
            ],
            clinical: "<b>Phrenic Paralysis:</b> If only one phrenic is damaged → that half of the diaphragm rises during breathing instead of falling (paradoxical movement) → mild breathing difficulty.<br>If both are damaged → fatal respiratory failure unless ventilator support is given.<br><b>Hiccups</b> = sudden involuntary contractions of the diaphragm caused by phrenic nerve irritation.",
            imgCode: "phrenic_sympathetic"
        }
    ],

    "Angiology": [
        {
            title: "Heart (Gross Anatomy)",
            desc: "The heart lies in the middle mediastinum, mostly left of the median plane in cattle. It has four chambers, four valves, a coronary groove and paraconal/subsinuosal interventricular grooves. The bovine fibrous cardiac skeleton commonly contains one or two ossa cordis, but number and ossification vary and the feature is not exclusive to all ruminants. Fibrous and serous pericardial layers enclose it.",
            eliteDesc: "<b>HEART</b><br><br>The bovine heart occupies chiefly the third to sixth intercostal region and lies more to the left. Right atrium/ventricle handle systemic venous return and pulmonary output; left atrium/ventricle handle pulmonary venous return and systemic output. Paraconal and subsinuosal grooves mark the interventricular septum externally. The fibrous skeleton in cattle often ossifies as one or two ossa cordis; number, size and ossification vary, and similar structures may occur in other mammals. The pericardium has fibrous and serous components.",
            comparative: [
                { species: "Horse", note: "Both paraconal and subsinuosal interventricular grooves are present. The cardiac skeleton is principally fibrous/cartilaginous rather than having the prominent bovine ossa cordis." },
                { species: "Dog", note: "Almost ovoid; apex more pointed. No ossa cordis." },
                { species: "Pig", note: "Similar to ox but smaller; ossa cordis usually absent." },
                { species: "Fowl", note: "Right AV valve is a single MUSCULAR FLAP (not membranous). No coronary sinus. 4 chambers but architecture different." }
            ],
            clinical: "<b>Traumatic Reticulopericarditis ('Hardware Disease', cattle):</b> A swallowed nail or wire pierces the reticulum (forward part of stomach) and travels through the diaphragm into the pericardium → infection of the heart sac → fluid accumulation → heart failure.<br><b>Cardiac auscultation:</b> Best heard on the LEFT side, low on chest, in the 3rd-5th intercostal space.",
            imgCode: "heart_gross"
        },
        {
            title: "Aorta and Branches in Thorax",
            desc: "<b>Path:</b> Left ventricle → Aortic semilunar valve → Ascending Aorta → Aortic Arch → Descending Thoracic Aorta → through aortic hiatus → Abdominal Aorta.<br><br><b>From the Aortic Arch — branches in OX:</b><br>1. <b>Brachiocephalic Trunk</b> (only one branch in ox — short).<br>   It gives off:<br>   - <b>Left Subclavian artery</b> (to left forelimb)<br>   - <b>Bicarotid Trunk</b> → splits into Right & Left Common Carotid arteries (to head)<br>   - Continues as <b>Right Subclavian artery</b> (to right forelimb).<br><br><b>Descending Thoracic Aorta — branches:</b><br>- <b>Bronchoesophageal artery</b> (to bronchi & oesophagus).<br>- <b>Dorsal Intercostal arteries</b> (one pair per intercostal space, from about 4th to 13th).",
            eliteDesc: "<b>THE BIG ARTERY OF THE BODY — AORTA</b><br><br>The aorta is the largest artery. It carries oxygen-rich blood from the left ventricle to the entire body.<br><br><b>PARTS:</b><br>• <b>Ascending Aorta:</b> Short part rising from the left ventricle; gives off the LEFT and RIGHT coronary arteries (which supply the heart muscle itself).<br>• <b>Aortic Arch:</b> Curves backward over the base of heart at the level of the 4th-5th rib; here it gives off the brachiocephalic trunk.<br>• <b>Descending Thoracic Aorta:</b> Runs caudally on the LEFT side of the vertebral column (slightly off midline) until it pierces the diaphragm through the <b>aortic hiatus</b>.<br><br><b>BRANCHES OF THE ARCH IN OX (very important):</b><br>The ox has a unique pattern — only ONE big artery comes off the arch: the <b>Brachiocephalic Trunk</b>. It then branches like this:<br>1. Gives off the <b>Left Subclavian artery</b> (to the left forelimb and chest wall).<br>2. Then gives off the <b>Bicarotid Trunk</b> — a short common stem that quickly splits into the right and left <b>Common Carotid Arteries</b> (one to each side of the head).<br>3. Continues forward as the <b>Right Subclavian artery</b> (to right forelimb and right side of neck).<br><br>Compare with horse/dog: there the brachiocephalic trunk gives off the carotids and right subclavian, while the LEFT subclavian comes directly off the arch (two branches off the arch).<br><br><b>BRANCHES OF DESCENDING THORACIC AORTA:</b><br>• <b>Bronchoesophageal artery:</b> Single small artery — supplies bronchi and thoracic oesophagus.<br>• <b>Dorsal Intercostal arteries:</b> Pair for each intercostal space, from approximately the 4th to the 13th. Runs in the costal groove with the intercostal vein and nerve (V-A-N order). The first 2-3 spaces are supplied by the costocervical trunk (from subclavian) instead.<br><br><b>END OF THORACIC AORTA:</b> Passes through the aortic hiatus along with azygos vein and thoracic duct, then becomes the abdominal aorta.",
            comparative: [
                { species: "Horse", note: "TWO branches from the arch: Brachiocephalic trunk + Left Subclavian directly. (Brachiocephalic gives bicarotid + right subclavian.)" },
                { species: "Dog", note: "Same as horse — Brachiocephalic + Left Subclavian off arch. Carotids come off the brachiocephalic separately (no bicarotid trunk)." },
                { species: "Pig", note: "Usually two aortic-arch branches: brachiocephalic trunk and left subclavian artery." },
                { species: "Fowl", note: "Aortic arch curves to the RIGHT (not left as in mammals)." }
            ],
            clinical: "<b>Aortic Rupture (Horse):</b> Rare but fatal — typically near the ligamentum arteriosum at the arch. Sudden death.<br><b>Persistent Right Aortic Arch (PRAA, dog):</b> Birth defect where right (not left) arch persists; forms a vascular ring around the oesophagus → calf/puppy regurgitates solid food.",
            imgCode: "aorta_thorax"
        },
        {
            title: "Major Veins of Thorax",
            desc: "Cranial and caudal venae cavae return systemic venous blood to the right atrium; pulmonary veins return oxygenated blood to the left atrium. Important azygos patterns are species-specific: cattle and sheep commonly retain a <b>left azygos</b> draining to the coronary sinus, pigs also commonly retain a left azygos, while horses and dogs commonly retain a <b>right azygos</b> draining toward the cranial vena cava.",
            eliteDesc: "<b>MAJOR THORACIC VEINS</b><br><br>The cranial vena cava drains head, neck, forelimbs and cranial trunk; the caudal vena cava passes through the caval foramen to the right atrium. Azygos veins drain the dorsal thoracic wall. Cattle/sheep and pigs commonly have a left azygos entering the coronary sinus; horses and dogs commonly have a right azygos entering the cranial vena cava. Pulmonary veins return oxygenated blood to the left atrium; the coronary sinus drains the heart wall to the right atrium.",
            comparative: [
                { species: "Ox", note: "Commonly a <b>left azygos</b> draining into the coronary sinus." },
                { species: "Horse", note: "<b>RIGHT azygos</b> only." },
                { species: "Dog", note: "Commonly a <b>right azygos</b> draining into the cranial vena cava." },
                { species: "Pig", note: "<b>LEFT azygos</b> only." },
                { species: "Fowl", note: "Two cranial venae cavae (right & left) — both open separately into right atrium." }
            ],
            clinical: "<b>Cranial vena-cava obstruction:</b> May cause venous distension and edema of the head, neck, forelimbs or brisket. <b>Bottle jaw</b> specifically means submandibular edema and is classically associated with hypoproteinemia; it is not a synonym for brisket edema.",
            imgCode: "veins_thorax"
        },
        {
            title: "Lymph Nodes & Thoracic Duct",
            desc: "Thoracic lymph centers include mediastinal, tracheobronchial, intercostal and sternal nodes, with presence and drainage varying by species. The thoracic duct begins from abdominal lymphatic channels/cisterna chyli, enters through the aortic hiatus and terminates at a major vein near the thoracic inlet in a species-variable pattern. Right-sided head/neck/forelimb drainage may reach the venous system through right tracheal/jugular/subclavian lymphatic trunks; a single constant 'right lymphatic duct' should not be assumed in every domestic species.",
            eliteDesc: "<b>THORACIC LYMPHATICS</b><br><br>Mediastinal and tracheobronchial lymph centers drain thoracic viscera; intercostal and sternal nodes drain corresponding body-wall regions. Their number and exact territories vary by species. The thoracic duct carries most body lymph from abdominal lymphatic channels through the aortic hiatus to a large vein near the thoracic inlet. Its side, crossings and terminal vein vary. Right cranial drainage is conveyed by lymphatic trunks that may unite variably, so human-style fixed-quarter rules should be avoided.",
            comparative: [
                { species: "Horse", note: "Caudal mediastinal LN smaller; tracheobronchial nodes prominent." },
                { species: "Dog", note: "Mediastinal nodes can become hugely enlarged in lymphoma → 'cranial mediastinal mass syndrome'." },
                { species: "Cattle", note: "Bronchial and mediastinal LNs are the standard sites for inspection in bovine TB." }
            ],
            clinical: "<b>Bovine Tuberculosis:</b> Bronchial and mediastinal lymph nodes show typical caseous (cheese-like) lesions. These nodes are routinely cut and inspected at meat inspection.<br><b>Chylothorax:</b> Rupture of the thoracic duct → leakage of milky chyle into the chest cavity → severe breathing difficulty (more common in dogs and cats).",
            imgCode: "lymph_thorax"
        }
    ],

    "Splanchnology": [
        {
            title: "Trachea (Windpipe)",
            desc: "<b>Structure:</b> Tube of <b>C-shaped cartilage rings</b>, open dorsally; gap closed by <b>Trachealis muscle</b> + fibrous membrane.<br><br><b>Number of rings (Ox):</b> About 48-60.<br><br><b>Course:</b> Larynx → through neck (cervical part) → enters thorax → bifurcates at <b>5th-6th intercostal space (T5)</b> → Right & Left Principal Bronchi.<br><br><b>Special in OX & PIG:</b> An extra <b>TRACHEAL BRONCHUS</b> (Bronchus trachealis / eparterial bronchus) leaves the RIGHT side of trachea BEFORE the bifurcation, supplying the cranial (apical) lobe of the right lung.<br><br><b>Lining:</b> Pseudostratified ciliated columnar epithelium with goblet cells (mucociliary escalator).",
            eliteDesc: "<b>THE WINDPIPE — TRACHEA</b><br><br>The trachea is a flexible tube that carries air between the larynx and the lungs. It must stay open at all times, so its wall is supported by a series of cartilage rings.<br><br><b>SHAPE OF THE RINGS:</b> Each ring is shaped like the letter 'C', open on the dorsal (back) side. The open part faces the oesophagus and is closed by:<br>• A smooth muscle band — the <b>trachealis</b> muscle.<br>• A fibroelastic membrane.<br>This soft dorsal wall lets the oesophagus expand into the trachea when a food bolus passes — a clever space-saving design.<br><br><b>COURSE & DIVISIONS:</b><br>• <b>Cervical part:</b> Runs down the neck, just below the oesophagus, easily palpable.<br>• <b>Thoracic part:</b> Enters chest at the thoracic inlet, runs in the cranial mediastinum.<br>• <b>Bifurcation (Carina):</b> At about the level of the <b>5th-6th rib</b> (T5 vertebra) in ox, the trachea splits into the right and left <b>principal bronchi</b>, which go to the lungs.<br><br><b>SPECIAL — THE TRACHEAL BRONCHUS:</b><br>In ox, sheep and pig there is an EXTRA bronchus that leaves the trachea on the <b>right side BEFORE</b> the main bifurcation. It is called the <b>tracheal bronchus</b> (also <i>eparterial bronchus</i>) and it goes to the <b>cranial (apical) lobe of the right lung</b>. This is a unique ruminant/pig feature — horse and dog do NOT have it; in them all bronchi come off the bifurcation.<br><br><b>WALL STRUCTURE (microscopic, brief):</b> Inside lined by <i>pseudostratified ciliated columnar epithelium</i> with mucus-producing <b>goblet cells</b>. Together they form the <b>'mucociliary escalator'</b> that constantly moves dust and germs upward to be swallowed or coughed out.<br><br><b>BLOOD/NERVE SUPPLY:</b> Bronchial arteries; vagal (parasympathetic — constricts) and sympathetic (dilates) nerves.",
            comparative: [
                { species: "Horse", note: "About 48-60 rings; NO tracheal bronchus. Bifurcation at 5th-6th rib." },
                { species: "Dog", note: "About 35-45 rings; rounded shape. NO tracheal bronchus." },
                { species: "Pig", note: "Has TRACHEAL BRONCHUS (like ox). Rings tend to overlap." },
                { species: "Fowl", note: "Rings are COMPLETE (closed circles) — not C-shaped. Trachea ends in SYRINX (voice organ) at bifurcation, not larynx." }
            ],
            clinical: "<b>Tracheotomy:</b> Performed on the ventral midcervical trachea using species- and patient-specific surgical landmarks; do not prescribe one universal ring count.<br><b>Tracheal collapse (small dogs):</b> Weakening/deformation of cartilaginous rings with abnormal dorsal membrane contributes to dynamic airway narrowing.",
            imgCode: "trachea"
        },
        {
            title: "Oesophagus",
            desc: "The oesophagus has cervical, thoracic and short abdominal portions. In cattle it deviates left in the neck and returns toward the median plane; vagal trunks accompany it through the oesophageal hiatus. Bovine oesophageal muscle is striated throughout, but rumination and regurgitation are coordinated reflex activities, not simply voluntary because the muscle is striated. Constrictions relevant to choke include the pharyngoesophageal region, thoracic inlet, heart-base region and diaphragm.",
            eliteDesc: "<b>OESOPHAGUS</b><br><br>The cervical oesophagus begins dorsal to the trachea and deviates left in cattle before returning toward the median plane. It traverses cranial/middle/caudal mediastinal regions and has a short abdominal part. The mucosa is stratified squamous epithelium. Muscular composition differs by species: it is striated throughout in cattle and dogs, while the equine caudal part is smooth. Swallowing and rumination are neurally coordinated reflexes; striated muscle does not make cud regurgitation simply voluntary. Choke commonly occurs at anatomical constrictions and requires prompt clinical management.",
            comparative: [
                { species: "Ox", note: "Striated muscle THROUGHOUT — supports cud regurgitation." },
                { species: "Horse", note: "Cranial muscle is striated and the caudal portion smooth. The horse's inability to vomit is multifactorial and is not explained by this transition alone; choke is clinically important." },
                { species: "Dog", note: "All striated (like ox); easy regurgitation possible." },
                { species: "Pig", note: "Mostly striated; widely uses pharyngeal swallowing." },
                { species: "Fowl", note: "Has a CROP (large dilation of cervical oesophagus) for storing food; opens into proventriculus." }
            ],
            clinical: "<b>CHOKE (Oesophageal obstruction):</b> Common in cattle (potato/turnip pieces) and horses (dry pellets, apples). Animal cannot swallow, drools saliva, may bloat (cattle cannot eructate gas → <b>bloat</b>). Common sites = thoracic inlet & heart base.<br><b>Megaoesophagus (dog):</b> Loss of oesophageal motility → food stagnates → regurgitation of solid food.",
            imgCode: "oesophagus"
        },
        {
            title: "Thymus",
            desc: "<b>Type:</b> Primary lymphoid (immune) organ + endocrine.<br><br><b>Position:</b><br>- Two parts in young calf: <b>Cervical thymus</b> (in the neck along trachea) + <b>Thoracic thymus</b> (in cranial mediastinum, in front of heart).<br>- Connected by an isthmus.<br><br><b>Function:</b> Site of T-lymphocyte (T-cell) maturation.<br><br><b>Age changes:</b><br>- LARGEST around birth & in young animal.<br>- Begins to shrink (involute) after puberty.<br>- In adult, replaced almost entirely by fat — only small remnants remain.",
            eliteDesc: "<b>THE TRAINING SCHOOL FOR T-CELLS — THYMUS</b><br><br>The thymus is a soft, pinkish-grey organ that is huge in the newborn but slowly disappears with age. Its job is to make and 'train' T-lymphocytes that defend the body against germs.<br><br><b>POSITION (especially well-developed in calf):</b><br>• <b>Cervical thymus:</b> A long lobe lying along the trachea in the neck (sometimes reaching as far up as the larynx).<br>• <b>Thoracic thymus:</b> A larger lobe in the cranial mediastinum, in front of the heart, between the two lungs.<br>• A narrow <b>isthmus</b> connects the two parts at the thoracic inlet.<br><br>This 'two-piece' arrangement is typical of ruminants and pigs. In horses and dogs, the thymus is mostly thoracic.<br><br><b>STRUCTURE:</b> Made of many small lobules. Each lobule has:<br>• An outer <b>cortex</b> — packed with rapidly dividing immature T-cells.<br>• An inner <b>medulla</b> — fewer cells, contains <i>Hassall's corpuscles</i> (whorls of degenerating epithelial cells, characteristic of thymus).<br><br><b>FUNCTION:</b><br>• Site where T-lymphocytes are 'educated' — they learn to recognize the body's own tissues vs. foreign material. T-cells that would attack self are killed; survivors are released into the blood.<br>• Also produces hormones (thymosin, thymopoietin) that further support immune cell development.<br><br><b>AGE INVOLUTION:</b><br>• At birth and in young calf — VERY LARGE (relative to body size).<br>• Reaches maximum at puberty.<br>• Then steadily shrinks; replaced by fat.<br>• In old animal — only a tiny fatty remnant.<br><br><b>CLINICAL/MEAT NOTE:</b> The cervical thymus of calves is sold as <b>'sweetbread'</b> in the meat trade.",
            comparative: [
                { species: "Horse", note: "Mainly thoracic; cervical part minimal. Involutes after puberty." },
                { species: "Dog", note: "Almost entirely thoracic; small cervical extension." },
                { species: "Pig", note: "Like ox — both cervical and thoracic parts well developed." },
                { species: "Fowl", note: "<b>7 pairs of separate thymic lobes</b> arranged in a row down each side of the neck (cervical only). No thoracic thymus." }
            ],
            clinical: "<b>Thymic Lymphoma (calves & young dogs):</b> Massive enlargement of the thymus → cranial mediastinal mass → presses on trachea & cranial vena cava → coughing, breathing difficulty, brisket oedema.",
            imgCode: "thymus"
        },
        {
            title: "Lungs",
            desc: "<b>Bovine lungs:</b> The right lung has cranial (cranial and caudal parts), middle, caudal and accessory lobes. The left lung has cranial (cranial and caudal parts) and caudal lobes. The tracheal bronchus supplies the right cranial lobe. Cattle and pigs show prominent interlobular septa; horse lungs are poorly lobated externally. Each lung has costal, mediastinal and diaphragmatic surfaces and a hilus/root.",
            eliteDesc: "<b>LUNGS</b><br><br>The bovine right lung consists of cranial, middle, caudal and accessory lobes; the cranial lobe has cranial and caudal parts. The left lung has cranial and caudal lobes, with the cranial lobe divided into two parts. Parts should not be counted as five separate right lobes. The tracheal bronchus supplies the right cranial lobe. Lung surfaces meet at borders and the hilus conveys bronchi, vessels, nerves and lymphatics. Airway branching proceeds through bronchi and bronchioles to gas-exchange units, but respiratory-bronchiole development varies among domestic species. Pulmonary and bronchial circulations have different functions.",
            comparative: [
                { species: "Horse", note: "Right lung has cranial, caudal and accessory lobes; there is no right middle lobe. Left lung has cranial and caudal lobes. External lobation is indistinct and there is no tracheal bronchus." },
                { species: "Dog", note: "Most lobulated arrangement clinically. Right: 4 lobes (Cranial, Middle, Caudal, Accessory). Left: 2 lobes (Cranial — split into cranial & caudal parts, and Caudal). Surface smooth. NO tracheal bronchus." },
                { species: "Pig", note: "Like ox — heavily lobulated surface; HAS tracheal bronchus." },
                { species: "Fowl", note: "Rigid, dorsally fixed lungs connect to air sacs. Coordinated sternocostal and body-wall movements ventilate the air sacs and maintain largely unidirectional airflow through parabronchi; there is no mammalian diaphragm." }
            ],
            clinical: "<b>Pneumonia in calves (right cranial lobe):</b> Most cases involve the cranial part of the right cranial lobe — because the tracheal bronchus is short and wide, inhaled material drops directly into it.<br><b>Auscultation of lungs:</b> Listen over lateral chest wall in the triangle behind the elbow up to about the 11th rib dorsally. Crackles = fluid; wheezes = airway narrowing.",
            imgCode: "lungs"
        },
        {
            title: "Pleura, Pleural Reflections & Mediastinum",
            desc: "Parietal pleura lines the thoracic wall, diaphragm and mediastinum; visceral pleura covers the lungs. The pleural cavity is a lubricated potential space. The costodiaphragmatic reflection marks the caudal pleural sac, while the basal lung border lies cranial to it and defines the normal auscultation/percussion field. Mediastinal completeness and communication vary by species and individual; these differences influence, but do not guarantee, unilateral or bilateral disease.",
            eliteDesc: "<b>PLEURA AND MEDIASTINUM</b><br><br>Costal, diaphragmatic and mediastinal parietal pleura line the thorax; visceral pleura covers the lungs and reflects at the root. The costodiaphragmatic recess lies between the caudal lung border and pleural reflection. The mediastinum contains the thoracic viscera other than lungs and is divided into cranial, middle and caudal portions. Cattle and small ruminants generally have a more complete mediastinum than horses and dogs, but communications, fenestrations and disease behavior vary. A complete mediastinum may limit contralateral spread; it does not guarantee that the opposite lung remains normal.",
            comparative: [
                { species: "Ox", note: "Mediastinum is generally complete; unilateral pneumothorax is possible, but contralateral involvement cannot be excluded clinically." },
                { species: "Horse", note: "<b>Mediastinum FENESTRATED.</b> Pneumothorax usually bilateral and rapidly fatal." },
                { species: "Dog", note: "<b>Mediastinum FENESTRATED.</b> Bilateral effusion seen with unilateral disease." },
                { species: "Pig", note: "Complete (like ox)." }
            ],
            clinical: "<b>Pneumothorax:</b> Air in pleural cavity (after rib fracture, lung puncture). In ox/pig — usually unilateral; in horse/dog — bilateral and very serious.<br><b>Pleurisy:</b> Inflammation of pleura → 'rubbing' sound (pleural friction rub) on auscultation.<br><b>Pleural effusion:</b> Fluid in pleural cavity → muffled heart/lung sounds, dull on percussion → drained by paracentesis.",
            imgCode: "pleura_mediastinum"
        },
        {
            title: "Auscultation, Percussion & Paracentesis Thoracis",
            desc: "<b>Bovine cardiac auscultation:</b> Pulmonary—left 3rd intercostal space; aortic—left 4th; mitral—left 5th; tricuspid—right 4th, adjusted for the animal.<br><br><b>Lung field:</b> Use the palpable basal lung border, not the more caudal pleural reflection, together with the triceps and epaxial boundaries.<br><br><b>Thoracocentesis:</b> Select side and intercostal space from examination and preferably ultrasonography. Air is approached dorsally and free fluid ventrally. Avoid heart, lung and the intercostal neurovascular bundle; there is no universal left 7th-8th low site for every indication.",
            eliteDesc: "<b>CLINICAL EXAMINATION OF THE THORAX</b><br><br>Standard bovine valve foci are pulmonary left 3rd, aortic left 4th, mitral left 5th and tricuspid right 4th intercostal spaces. Examine the lung over its basal field rather than using the caudal pleural reflection as the auscultation border. Percussion and auscultation findings must be interpreted with the full examination and imaging. For thoracocentesis, ultrasonography should identify a safe fluid pocket whenever possible. Air is removed from a dorsal location and fluid from a ventral location; side and space depend on pathology. The mostly left-sided bovine heart makes the claim that a left approach 'avoids the heart' incorrect.",
            comparative: [
                { species: "Horse", note: "Lung field extends further caudally (up to 17th rib at top); heart auscultation site smaller because of larger triceps mass." },
                { species: "Dog", note: "Heart sounds clearest in 4-5th ICS left; lung field smaller. Paracentesis at 7-8th ICS." },
                { species: "Cattle", note: "Choose thoracocentesis site from the target (air versus fluid), examination and preferably ultrasound; do not use a fixed side or intercostal space for every case." }
            ],
            clinical: "<b>Thoracocentesis indications:</b> Diagnostic sampling or drainage of pleural fluid, pus, blood or air. Use asepsis, appropriate restraint/analgesia, ultrasound when available and a site selected for the individual lesion. Air and fluid require different vertical approaches, and either side may be indicated.",
            imgCode: "auscultation_paracentesis"
        }
    ]
};
