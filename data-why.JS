// =========================================================
// WHY SECTION DATA - Biomechanical Engineering Comparisons
// Functional anatomy explained through engineering principles
// =========================================================

if (typeof anatomyData === 'undefined') {
    var anatomyData = [];
}

anatomyData = [
    {
        id: 1,
        title: "Clavicle",
        category: "forelimb",
        comparison: "Tiger vs. Horse/Ox",
        why: "The Tiger possesses a rudimentary clavicle to stabilize the shoulder for grappling and climbing (scansorial) while allowing some flexibility. The Horse and Ox completely lack a bony clavicle, relying on the 'Synsarcosis' (muscular sling). This absence removes the bony connection to the trunk, allowing the scapula to glide craniocaudally to increase stride length.",
        clinical: "In cats, the clavicle is often mistaken for a bone sequestrum or esophageal foreign body on radiographs. In horses, it is completely non-existent.",
        img: "https://s3-us-west-2.amazonaws.com/courses-images/wp-content/uploads/sites/3442/2018/07/17191952/Full-cat-skeleton.jpg",
        analogy: "Think of the Tiger's clavicle like a strut bar in a rally car—it keeps the wheels aligned for rough handling. The Horse lacks the strut bar to let the suspension (scapula) travel freely back and forth, turning the whole front end into a shock absorber.",
        quiz: {
            question: "Why does the horse lack a clavicle?",
            options: ["To prevent shoulder dislocation", "To allow the scapula to slide for longer stride length", "To reduce weight", "To allow for digit movement"],
            correctIndex: 1,
            explanation: "Without a bony connection to the sternum, the scapula is free to slide forward and back, significantly increasing the length of the stride."
        }
    },
    {
        id: 2,
        title: "Acromion Process",
        category: "forelimb",
        comparison: "Ox vs. Horse",
        why: "The Acromion serves as a lever arm for the deltoid muscle to aid in abduction (moving limb away from body). The Horse, specialized for speed, moves strictly in the sagittal plane; lateral movement is a liability. Thus, the horse lacks the acromion, resulting in a streamlined shoulder. The Ox possesses it for stability on uneven terrain.",
        clinical: "Palpation landmark: The acromion is palpable in the ox and dog but absent in the horse. This changes the location of the palpable 'point of the shoulder'.",
        img: "https://scontent.fdel25-3.fna.fbcdn.net/v/t1.6435-9/31841852_1976979379298331_8399290339579396096_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=ZQqb8bRtoJYQ7kNvwHCfn4K&_nc_oc=Adlv2BiHI8M7MOrV6s9tr7Plija9e5Pze3lSXKU0tmGFvCt35ZDjy33Df2H3TynfGWde0tgEM4zrZrJITEZqwIa8&_nc_zt=23&_nc_ht=scontent.fdel25-3.fna&_nc_gid=F3P4vAhLJRQNx8c4YUcC2w&oh=00_Afq_TuEVHl4Gc-HnKFmCPYMYzCcCJrzn8d3baaFulMa_Rw&oe=699442FC",
        analogy: "The Acromion is like a side-handle on a machine; it gives you leverage to pull things sideways. The Horse is a drag racer—it only goes straight. The design omits the side-handle to reduce drag and weight.",
        quiz: {
            question: "Which species lacks an acromion process on the scapula?",
            options: ["Ox", "Dog", "Horse", "Cat"],
            correctIndex: 2,
            explanation: "The horse lacks the acromion because it does not need powerful abduction (lateral movement); it is optimized for sagittal (forward) speed."
        }
    },
    {
        id: 3,
        title: "Intermediate Tubercle",
        category: "forelimb",
        comparison: "Horse vs. Ox/Dog",
        why: "Unique to the Horse. This tubercle divides the bicipital groove and acts as a locking mechanism for the fibrous internal tendon of the Biceps Brachii. It is the critical proximal anchor for the 'Passive Stay Apparatus', allowing the horse to lock its shoulder in extension and sleep standing up.",
        clinical: "Bicipital bursitis is common in horses due to high friction over this tubercle. Radiographic 'skyline' views must account for the double groove shape.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/55a5278023ceee664caa404fcdf8c3743f91e873ab1e21d765ec4d9835d28e76?ar=640:670&bg=FFFFFF&fit=crop&p64=NjE2LDIy&t=SW50ZXJtZWRpYXRlIHR1YmVyY2xl&tx=616&ty=22&w=350&wk=1&s=c3899846a64487b58f821096c66504af",
        analogy: "Imagine a parking pawl in an automatic transmission. The Intermediate Tubercle is the physical pin that locks the gear (biceps tendon) in place, so the car (horse) doesn't roll away (collapse) when parked.",
        quiz: {
            question: "What is the primary function of the intermediate tubercle in the horse?",
            options: ["To increase muscle power", "To protect the joint", "To lock the biceps tendon for the passive stay apparatus", "To separate muscles"],
            correctIndex: 2,
            explanation: "It acts as a locking pin for the biceps tendon, allowing the horse to fix the shoulder joint in extension with zero muscle effort."
        }
    },
    {
        id: 4,
        title: "Supratrochlear Foramen",
        category: "forelimb",
        comparison: "Dog vs. Horse",
        why: "A hole in the distal humerus found in Dogs. It allows the anconeal process of the ulna to snap deeply into the humerus, permitting extreme elbow extension required for the long stride of a sprinting predator. In Horses, this area is solid bone to support the massive vertical weight of the column.",
        clinical: "Radiographic interpretation: The foramen appears as a lucent (dark) zone in dogs which is normal, but a similar look in large animals would suggest a cyst or fracture.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/dog-arthrology-illustrations/images/v6/7faf624bda0e1b29ecfdbde0695f0c60279882f0cc3726c82a84eb12a68dc242?ar=640:670&bg=FFFFFF&fit=crop&p64=NjY0LDYwMA&t=U3VwcmF0cm9jaGxlYXIgZm9yYW1lbg&tx=664&ty=600&w=350&wk=1&s=6906607bc6479d1e7443237636f1cb7f",
        analogy: "The Dog's elbow is like a folding knife with a notch cut out so the blade can open 180 degrees. The Horse's elbow is like a solid steel pillar—it can't fold as far, but it can hold up a building.",
        quiz: {
            question: "Why does the dog have a supratrochlear foramen?",
            options: ["To allow passage of arteries", "To reduce weight", "To allow the anconeal process to fit during hyperextension", "To prevent dislocation"],
            correctIndex: 2,
            explanation: "The hole allows the 'beak' of the ulna (anconeal process) to tuck inside the humerus, allowing the arm to straighten fully."
        }
    },
    {
        id: 5,
        title: "Radius & Ulna Fusion",
        category: "forelimb",
        comparison: "Horse/Ox vs. Dog",
        why: "In Cursorial ungulates (Horse/Ox), the radius and ulna are fused to prevent pronation and supination (rotation). This locks the limb into a rigid, energy-efficient column for forward motion. The Dog possesses separate bones to allow rotation, which is essential for grappling prey and grooming.",
        clinical: "Fracture repair: In dogs, both bones may need plating. In horses, the distal ulna is fused and is not a separate surgical entity; ulnar fractures are usually proximal (olecranon).",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/031a3f027c5453d4a0d61f05d22deb73729e90be76777a50774a577aca5e43f9?ar=640:670&bg=FFFFFF&fit=crop&w=200&wk=1&s=8c2f1097d2ad3f26aa6adb3e5ed3494f",
        analogy: "The Dog's forearm is like a complex robot arm that can twist and turn. The Horse's forearm is welded shut into a single I-beam. You lose the ability to twist, but you gain immense strength for supporting weight.",
        quiz: {
            question: "What functional trade-off occurs with the fusion of the radius and ulna in ungulates?",
            options: ["Agility vs Speed", "Loss of rotation (pronation/supination) for increased stability", "Weight vs Strength", "Flexion vs Extension"],
            correctIndex: 1,
            explanation: "Fusion eliminates the ability to rotate the forearm (twist), which stabilizes the limb as a weight-bearing column for efficient running."
        }
    },
    {
        id: 6,
        title: "Pronator Teres",
        category: "forelimb",
        comparison: "Horse vs. Dog",
        why: "In the Dog, this is a fleshy muscle used to actively rotate the forearm. In the Horse, where rotation is impossible due to fusion, the structure exists as a fibrous ligament that reinforces the medial collateral ligament of the elbow, providing passive stability.",
        clinical: "In the horse, it serves as a landmark for the medial collateral ligament but has no contractile function.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/dog-myology-illustrations/images/v4/247e11de1d8c95736495c694fc688b2f833b481daefe9f59d58722f200612305?ar=640:670&bg=FFFFFF&fit=crop&p64=NjIwLDI2Ng&w=200&wk=1&s=12feca2f1f176988f083b11f453c80c5",
        analogy: "In the Dog, this is the motor that spins the wheel. In the Horse, the motor is absent; instead, there is a steel cable (ligament) to just hold the wheel straight.",
        quiz: {
            question: "How does the Pronator Teres differ in the horse compared to the dog?",
            options: ["It is a flexor of the carpus", "It is absent", "It is present as a fibrous ligament", "It is fused with the biceps"],
            correctIndex: 2,
            explanation: "Since the horse cannot pronate (rotate) its arm, the tissue exists as fibrous tissue to act as a passive stabilizer."
        }
    },
    {
        id: 7,
        title: "Interosseous Muscle",
        category: "forelimb",
        comparison: "Horse vs. Dog",
        why: "In the Dog, these are fleshy muscles for digit flexion. In the Horse, the structure is entirely tendinous, known as the 'Suspensory Ligament'. It acts as a powerful spring, storing elastic energy during the stance phase and returning it for propulsion, while preventing fetlock hyperextension.",
        clinical: "Desmitis (inflammation) of the Suspensory Ligament is a major cause of lameness in sport horses. In dogs, interosseous atrophy is rare.",
        img: "https://s3.amazonaws.com/wp-s3-dressagetoday.com/wp-content/uploads/2025/01/15190521/Inner_structures_of_a_horses_lower_leg-copy-787x1024.jpg",
        analogy: "The Dog uses a hydraulic piston (muscle) to move the toes. The Horse uses a heavy-duty bungee cord (ligament). When the horse lands, the bungee stretches and snaps back, flinging the horse forward for free.",
        quiz: {
            question: "What is the primary function of the Suspensory Ligament in the horse?",
            options: ["To actively flex the digit", "To store elastic energy and support the fetlock", "To extend the carpus", "To rotate the phalanges"],
            correctIndex: 1,
            explanation: "It acts as a spring, capturing energy when the foot hits the ground and preventing the fetlock from collapsing."
        }
    },
    {
        id: 8,
        title: "Distal Check Ligament",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "A robust safety cable in the Horse connecting the carpus to the Deep Digital Flexor Tendon. It protects the muscle belly from tearing under the massive load of a single digit and assists in the Stay Apparatus. It is rudimentary or absent in the Ox, which splits the load over two digits.",
        clinical: "'Check Ligament Desmotomy' is a surgical procedure performed in horses to treat club foot (flexural deformity); this is not performed in cattle.",
        img: "https://open.lib.umn.edu/app/uploads/sites/208/2019/03/labeled-anatomy-distal-limb-1024x633.png",
        analogy: "Think of a tow truck cable. The Check Ligament is a secondary safety chain attached to the main cable. If the load gets too heavy, the safety chain takes the strain so the winch motor (muscle) doesn't burn out.",
        quiz: {
            question: "Why is the Distal Check Ligament so developed in the horse?",
            options: ["To allow independent toe movement", "To protect the deep digital flexor muscle from overstretching", "To assist in carpal flexion", "To provide lubrication"],
            correctIndex: 1,
            explanation: "It mechanically transfers the load from the tendon directly to the bone, bypassing the muscle belly to prevent tearing under high loads."
        }
    },
    {
        id: 9,
        title: "Digit Number",
        category: "forelimb",
        comparison: "Horse vs. Ox",
        why: "The Horse possesses a single digit (III) which minimizes distal mass, reducing the inertia required to swing the leg at high speeds. The Ox possesses two digits (cloven hoof) to provide a wider base and independent movement for traction on muddy, uneven terrain.",
        clinical: "Amputation of a digit is a viable salvage procedure in cattle (due to the paired digit). It is catastrophic and generally impossible in the horse.",
        img: "https://cdn-5d2e57e3f911c80ef4a235f4.closte.com/wp-content/uploads/2025/07/C21-Horse-Hoof-vs-Cow-Hoof-A.jpg",
        analogy: "The Horse is a road bike with one thin, high-pressure tire for maximum speed and low weight. The Ox is an ATV with wide, dual tires for grip in the mud.",
        quiz: {
            question: "Biomechanically, why does the horse have a single digit?",
            options: ["To improve balance", "To increase traction", "To reduce distal limb mass and inertia for speed", "To allow for sharper turning"],
            correctIndex: 2,
            explanation: "Lightening the end of the limb (pendulum) requires less energy to swing it back and forth, allowing for a faster stride rate."
        }
    },
    {
        id: 10,
        title: "Sacrosciatic Ligament",
        category: "hindlimb",
        comparison: "Ox/Horse vs. Dog",
        why: "In large animals, this is a broad sheet forming the lateral wall of the pelvis. It provides a massive surface area for the attachment of the propulsion muscles (gluteals/hamstrings) and supports the heavy pelvic viscera. In the Dog, it is merely a cord (Sacrotuberous ligament).",
        clinical: "In the Ox, this ligament softens visibly prior to parturition (calving) under hormonal influence; checking its relaxation is a standard way to predict labor.",
        img: "https://i.pinimg.com/736x/ab/ff/b3/abffb37325830d1fdf94693fb8be438f.jpg",
        analogy: "The Dog uses a rope to tie the tail bone to the hip. The Horse/Ox uses a sheet of plywood (broad ligament). The plywood is needed to hold up the heavy guts and provide a wall for the huge engine muscles to bolt onto.",
        quiz: {
            question: "What functional role does the broad Sacrosciatic Ligament play in large animals?",
            options: ["It allows for tail wagging", "It forms the lateral pelvic wall for muscle attachment and visceral support", "It connects the femur to the tibia", "It prevents the bladder from expanding"],
            correctIndex: 1,
            explanation: "It turns the open pelvis into a closed box, supporting the internal organs and offering a huge surface for the gluteal muscles to attach."
        }
    },
    {
        id: 11,
        title: "Third Trochanter",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "A massive bony prominence on the femur found ONLY in the Horse. It serves as a lever arm for the Superficial Gluteal muscle, providing the explosive power required for the equine gallop. It is absent in the Ox and Dog.",
        clinical: "Fracture of the third trochanter in horses leads to disruption of the gluteal apparatus and significant lameness. This anatomical landmark does not exist in cattle exams.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/19355a5f55a04729d73cf65a20a62f3dc18384097c7512390d277770efd66f5c?ar=640:670&bg=FFFFFF&fit=crop&p64=ODA4LDU0NA&w=200&wk=1&s=52b3b7ccb0f1e282c3b8aee43d2019b8",
        analogy: "The Third Trochanter is like a turbocharger mount found only on the race car (Horse). It gives the main engine (gluteal muscle) a mechanical advantage to crank the wheels (legs) faster.",
        quiz: {
            question: "Which species possesses a Third Trochanter on the femur?",
            options: ["Ox", "Dog", "Horse", "Pig"],
            correctIndex: 2,
            explanation: "The Third Trochanter is unique to the horse among domestic species, serving as a massive lever for the superficial gluteal muscle."
        }
    },
    {
        id: 12,
        title: "Accessory Ligament",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "Unique to Equids. An extra ligament that anchors the femur to the prepubic tendon. It restricts abduction (limiting kicking range to straight back) and acts as an 'anti-kick device' to prevent hip dislocation during violent motion.",
        clinical: "Its presence makes hip luxation (dislocation) extremely rare in horses compared to dogs/cattle. However, if luxation does occur, the tissue damage is usually catastrophic.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/horse-osteology-illustrations/images/v5/2f8b1c6624b36e5dccfc864ee3a2b83546a40afb7501eef527ccc465f0d249b3?ar=640:670&bg=FFFFFF&fit=crop&p64=NjEyLDEwNDA&t=R3Jvb3ZlIGZvciBhY2Nlc3NvcnkgbGlnYW1lbnQgb2YgZmVtdXI&tx=612&ty=1040&w=350&wk=1&s=8c4a6094001e1b7c0443934b2d4a571f",
        analogy: "Most hips are held in by one screw. The Horse has a second, heavy-duty safety chain bolted to the belly. This stops the leg from flying sideways when it kicks, but also makes it almost impossible to pop the joint back in if it breaks.",
        quiz: {
            question: "What is the clinical significance of the Accessory Ligament of the Femoral Head?",
            options: ["Greater range of motion", "It makes hip dislocation rare but difficult to reduce", "It is a site of infection", "It aids in urination"],
            correctIndex: 1,
            explanation: "This extra ligament holds the hip so tightly that dislocation is rare; however, if force is sufficient to dislocate it, the damage is severe."
        }
    },
    {
        id: 13,
        title: "Gluteobiceps Muscle",
        category: "hindlimb",
        comparison: "Ox vs. Horse",
        why: "In the Ox, the Superficial Gluteal and Biceps Femoris are fused into one massive sheet (Gluteobiceps). This reflects the ruminant need for sustained, low-velocity power efficiency. In the Horse, they are separate to allow the range of motion needed for high-speed running.",
        clinical: "Intramuscular injections in the rump of cattle enter this fused mass; deep injections risk hitting the sciatic nerve which runs beneat<it.",
        img: "https://cdn1.imaios.com/i/imaios-images/web/images/vetanatomy/modules/bull-general-anatomy-illustrations/images/v1/9890dbe314ad6291e2d2a4a3fbdcb8aaff5fdf0d3947dde974a9c174ea64b8a8?ar=640:670&bg=FFFFFF&fit=crop&p64=MTE0NCw1MzA&t=R2x1dGVvYmljZXBzIG11c2NsZQ&tx=1144&ty=530&w=350&wk=1&s=7c2f50a66e6d0ea10e3be51070b37792",
        analogy: "The Horse has separate gears for speed and torque. The Ox has the gears fused into one giant 'Super-Gear'. It's simpler and stronger for hauling heavy loads, but it can't shift quickly.",
        quiz: {
            question: "Why are the superficial gluteal and biceps femoris fused in the Ox?",
            options: ["For higher speed sprinting", "To create a single efficient unit for low-velocity weight bearing", "To protect the femoral artery", "For independent leg movement"],
            correctIndex: 1,
            explanation: "Ruminants prioritize sustained, efficient power for carrying a heavy gut over the high-speed independent articulation required by a horse."
        }
    },
    {
        id: 14,
        title: "Patellar Locking Mechanism",
        category: "hindlimb",
        comparison: "Horse vs. Dog",
        why: "Critical for the Equine Stay Apparatus. The medial trochlear ridge of the femur is enlarged with a hook. The patella can be pulled over this hook to mechanically lock the stifle in extension, allowing the horse to sleep standing up.",
        clinical: "'Upward Fixation of the Patella' (Locked Stifle) is a common condition where the ligament gets stuck on the hook, locking the leg in extension.",
        img: "https://www.americanfarriers.com/ext/resources/images/2021/1121/Stifle/F12_Stifle-Bennett.jpg",
        analogy: "Imagine a folding table with that little metal ring that slides over the joint to keep it straight. The Horse has a built-in metal ring (patella hook) that slides over the knee, so it can stand forever without its muscles getting tired.",
        quiz: {
            question: "What structure allows the horse to lock its stifle joint?",
            options: ["Lateral meniscus", "Enlarged medial trochlear ridge of the femur", "Cruciate ligaments", "Gastrocnemius tendon"],
            correctIndex: 1,
            explanation: "The medial patellar ligament hooks over the enlarged medial trochlear ridge, mechanically fixing the joint in extension."
        }
    },
    {
        id: 15,
        title: "Fibula Reduction",
        category: "hindlimb",
        comparison: "Ox vs. Dog",
        why: "In the Dog, the fibula is a complete bone for stability and muscle attachment. In the Ox, the shaft is absent to save weight, but the distal end persists as the 'Malleolar Bone'. This separate bone acts as a pulley block for the hock.",
        clinical: "The os malleolare in cattle can be mistaken for a chip fracture on radiographs if the vet is not familiar with ruminant anatomy.",
        img: "https://www.vetscraft.com/wp-content/uploads/Rudimentary-Fibula-Bone-in-Ox.jpg",
        analogy: "The Dog uses a full second beam (fibula) alongside the main one (tibia). The Ox design omits the middle of the beam as useless weight, keeping only the end-cap (malleolar bone) to hold the joint together.",
        quiz: {
            question: "What is the 'os malleolare' in the Ox?",
            options: ["A sesamoid bone", "The separate distal end of the fibula", "A fractured piece", "A bone in the ear"],
            correctIndex: 1,
            explanation: "The shaft of the fibula is absent, but the distal end remains as a separate bone to articulate with the hock."
        }
    },
    {
        id: 16,
        title: "Peroneus Tertius",
        category: "hindlimb",
        comparison: "Horse vs. Ox",
        why: "In the Ox, this is a fleshy muscle flexing the hock. In the Horse, it exists as a tendinous cord (Reciprocal Apparatus). It mechanically links the stifle and hock: if the stifle flexes, the hock MUST flex.",
        clinical: "Rupture of the peroneus tertius in the horse is pathognomonic: the hock can be extended while the stifle is flexed, which is mechanically impossible in a healthy horse.",
        img: "https://www.science-equine.com/images/articles/p3/f1866/happyhorsemassage.jpg",
        analogy: "In the Ox, the ankle is moved by a motor. In the Horse, the ankle is connected to the knee by a solid steel rod. You cannot bend the knee without the rod pushing the ankle.",
        quiz: {
            question: "If a horse can extend its hock while the stifle is flexed, what has ruptured?",
            options: ["Superficial Digital Flexor", "Gastrocnemius", "Peroneus Tertius", "Achilles Tendon"],
            correctIndex: 2,
            explanation: "The Peroneus Tertius is the tendinous cord that forces the hock to flex when the stifle flexes. If it breaks, this mechanical link is lost."
        }
    },
    {
        id: 17,
        title: "Soleus Muscle",
        category: "hindlimb",
        comparison: "Horse vs. Cat",
        why: "Rudimentary or absent in the Horse. The horse relies on the gastrocnemius and the mechanical stay apparatus for stance. In the Cat, the Soleus is an active postural muscle aiding in jumping and stealthy movement.",
        clinical: "In surgical dissection of the equine crus, this muscle is negligible or hard to identify, unlike in small animals where it is prominent.",
        img: "https://d1kvkzjpuym02z.cloudfront.net/552d56fde4b0372690af458d.jpg?Expires=1992586390&Signature=So7MrIBqhKgq8c-GrxdzNaJVLXsNjJkJSaeIg7Nyk6D58F29pX00Alg6SI0ugAhJYhAaRAkUU3tYrgQ~7vD2s99HHrTTzmq~nSdMCeeMd5poFMIuWBWcn3b-7YnAXv5sX~ZPhbB~oi2GRTuhHCzS4dHipQyCf8~IatUPwd-CNKE_&Key-Pair-Id=APKAJXYWFXCDTRLR3EFA",
        analogy: "The Soleus is a fine-tuning stabilizer, like the traction control system on a sports car (Cat). The Horse is a freight train; it relies on heavy springs and momentum, so the design excludes the traction control system entirely.",
        quiz: {
            question: "Why is the soleus muscle rudimentary in the horse?",
            options: ["It is not needed for the horse's locomotion", "The horse relies on mechanical stay mechanisms", "The horse has no calcaneus", "Fused with the deep flexor"],
            correctIndex: 1,
            explanation: "The horse supports its weight using the passive stay apparatus, rendering the slow-twitch postural function of the soleus unnecessary."
        }
    },
    {
        id: 18,
        title: "Nuchal Ligament",
        category: "axial",
        comparison: "Dog vs. Horse/Ox",
        why: "Herbivores have heavy heads on long necks. They possess a massive 'Lamellar Sheet' portion of the nuchal ligament to passively support the head during grazing. The Dog, with a lighter head carried closer to the body, only possesses the cord (funicular) portion.",
        clinical: "Nuchal bursitis ('Poll Evil' or 'Fistulous Withers') occurs in horses due to infection or trauma of the bursae associated with this massive ligament system.",
        img: "https://scontent.fdel25-1.fna.fbcdn.net/v/t39.30808-6/492071289_1107956834706317_6623511566263310522_n.jpg?stp=dst-jpg_s640x640_tt6&_nc_cat=105&ccb=1-7&_nc_sid=127cfc&_nc_ohc=dXhIdmdcoZgQ7kNvwHsUhpm&_nc_oc=AdlH28RmlHnJ5CRrShE64znTeasFLYsOFegRXf9p5R3Ge3n4Z6G3VOg2s7sywnph1T7ZEH6ugV0-48BheGzOqNaz&_nc_zt=23&_nc_ht=scontent.fdel25-1.fna&_nc_gid=dnT7pvWXdl4M_ZX4qomPhA&oh=00_Afq3K7_9ZQ3g3VY6C2VPZvNVJUVkWJ95Tx8aLX3qrYI4-Q&oe=6972C3ED",
        analogy: "The Dog uses a leash to hold its head up. The Horse uses a massive suspension bridge cable system (Lamellar sheet). Without it, the horse would burn huge amounts of energy just trying to keep its nose off the ground.",
        quiz: {
            question: "What part of the nuchal ligament is present in the Horse but absent in the Dog?",
            options: ["Funicular part (Cord)", "Laminar part (Sheet)", "Supraspinous part", "Atlantal part"],
            correctIndex: 1,
            explanation: "The laminar sheet provides the extra support needed for the long, heavy neck of the grazer, which the short-necked dog does not need."
        }
    },
    {
        id: 19,
        title: "Omotransversarius",
        category: "axial",
        comparison: "Ox vs. Horse",
        why: "In the Ox, this is a separate muscle allowing independent neck/shoulder movement. In the Horse, it is fused to the Brachiocephalicus muscle. This creates a single, powerful 'neck-to-arm' chain that protracts the limb efficiently for the rhythmic oscillation of the gallop.",
        clinical: "In neck dissections, students will fail to find a separate omotransversarius in the horse, causing confusion if they are used to canine/bovine anatomy.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWbsk_hOrlFG7U4lGtPoS38ahl2vluSNw_Q&s",
        analogy: "The Ox has a separate steering linkage and suspension arm. The Horse has them welded together. This means when it throws its head forward, the leg AUTOMATICALLY flies forward. It trades independent steering for drag-racing speed.",
        quiz: {
            question: "In the horse, the Omotransversarius muscle is fused to which other muscle?",
            options: ["Trapezius", "Brachiocephalicus", "Sternocephalicus", "Latissimus Dorsi"],
            correctIndex: 1,
            explanation: "It fuses with the Brachiocephalicus to form a seamless protraction chain for the forelimb."
        }
    },
    {
        id: 20,
        title: "Gall Bladder",
        category: "axial",
        comparison: "Horse vs. Ox",
        why: "Absent in the Horse. The Gall Bladder stores bile for bolus release during meals. The Horse is a 'trickle feeder' (grazing constantly), so it requires a continuous trickle of bile from liver to gut, rendering the storage organ unnecessary. Ox/Dogs are meal feeders and possess it.",
        clinical: "Horses cannot get cholecystitis (gall bladder inflammation) or gallstones, but they can suffer from bile duct blockages.",
        img: "https://pressbooks.umn.edu/app/uploads/sites/103/2021/08/liver.png",
        analogy: "The Gall Bladder is a storage tank for a burst of fuel. The Ox eats big meals, so it needs the tank. The Horse is a pipeline—it eats non-stop, so the fuel (bile) flows directly from the refinery (liver) to the engine, no tank needed.",
        quiz: {
            question: "Why does the horse lack a gall bladder?",
            options: ["It does not digest fat", "It is a continuous grazer requiring continuous bile secretion", "It has a second stomach instead", "It produces bile in the pancreas"],
            correctIndex: 1,
            explanation: "Gall bladders store bile for distinct meals. Since horses eat continuously, they do not need to store bile; they secrete it constantly."
        }
    },

    // ==========================================================
    // WILDLIFE vs DOMESTIC ANIMAL — BIOMECHANICAL COMPARISONS
    // ==========================================================
    {
        id: 21,
        title: "Cheetah Spine",
        category: "wildlife",
        comparison: "Cheetah vs. Horse",
        why: "The Cheetah possesses an extremely flexible thoracolumbar spine that flexes and extends like a coiled spring during the gallop, adding ~40% to stride length and propelling speeds of 110 km/h. The Horse possesses a near-rigid back (locked withers, strong supraspinous ligament) for energy-efficient sustained galloping but loses the explosive spinal-spring boost.",
        clinical: "Cheetah autopsies show extreme wear of intervertebral discs by mid-life. In horses, hyperflexible 'roach' or 'sway' backs are pathological — the equine design demands rigidity.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/TheCheethcat.jpg/640px-TheCheethcat.jpg",
        analogy: "The Cheetah's spine is a bow-and-arrow — it loads and releases elastic energy with each stride. The Horse's spine is a steel I-beam — it doesn't bend, it just transmits the engine's power directly to the wheels.",
        quiz: {
            question: "How does the cheetah achieve its extraordinary stride length?",
            options: ["Longer leg bones than the horse", "Extreme flexion-extension of the thoracolumbar spine", "Hollow pneumatic bones", "Shorter neck for forward thrust"],
            correctIndex: 1,
            explanation: "Each gallop cycle involves dramatic spinal flexion (compression) and extension (recoil), adding nearly half a stride length per bound."
        }
    },
    {
        id: 22,
        title: "Giraffe Neck & Rete Mirabile",
        category: "wildlife",
        comparison: "Giraffe vs. Horse/Ox",
        why: "Despite a 2-metre neck, the Giraffe has only 7 cervical vertebrae — the same as horse, ox and human — but each is hugely elongated. To prevent blackouts when the head drops 5 m to drink, it has a thickened left ventricle, valves in the jugular vein, and a 'rete mirabile' (vascular sponge) at the skull base that buffers cerebral blood pressure swings.",
        clinical: "Anaesthesia of giraffes is high-risk: positional changes cause dramatic BP shifts. No comparable vascular braking system exists in horse or ox.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Giraffe_standing.jpg/480px-Giraffe_standing.jpg",
        analogy: "The Giraffe is a tower crane with a built-in pressure-relief valve at the top. The Horse is a normal car — bring its head up and down quickly and it gets a head-rush. The Giraffe's rete mirabile is the surge protector that lets it operate over a 5-metre vertical range without fainting.",
        quiz: {
            question: "How many cervical vertebrae does a giraffe have?",
            options: ["7 (same as most mammals)", "12", "20", "It varies between individuals"],
            correctIndex: 0,
            explanation: "Almost all mammals — mouse, human, horse, giraffe — have exactly 7 cervical vertebrae. The giraffe simply has VERY LONG ones."
        }
    },
    {
        id: 23,
        title: "Elephant Foot Pad",
        category: "wildlife",
        comparison: "Elephant vs. Horse",
        why: "The Elephant stands on the tips of its toes (digitigrade-unguligrade hybrid) supported by a massive subcutaneous fibro-fatty 'cushion' that distributes 5+ tonnes of body weight. There are no springs or stay apparatus — it is a pure hydraulic column. The Horse uses the suspensory ligament and frog as elastic shock absorbers.",
        clinical: "Captive elephants on hard concrete develop foot abscesses and chronic arthritis because the fat pad cannot compensate for unnatural surfaces. The horse hoof is, by contrast, designed for impact.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/640px-African_Bush_Elephant.jpg",
        analogy: "The Horse's hoof is a high-tech sneaker with airbags. The Elephant's foot is a stack of telephone books inside a leather slipper — it doesn't bounce, it just absorbs and squashes flat under enormous load.",
        quiz: {
            question: "What absorbs concussive force in the elephant foot?",
            options: ["Frog and digital cushion", "A massive fibro-fatty subcutaneous pad", "Hollow pneumatic bones", "Long synovial bursae"],
            correctIndex: 1,
            explanation: "Elephants have no spring system. A thick fat-and-fibre cushion under the bones spreads the weight. They walk on tiptoes resting on this pad."
        }
    },
    {
        id: 24,
        title: "Kangaroo Hindlimb Tendons",
        category: "wildlife",
        comparison: "Kangaroo vs. Dog",
        why: "The Kangaroo's gastrocnemius and plantaris tendons are massively elongated and elastic, storing 70% of the energy of each hop and releasing it on the next bound — the most efficient gait in mammals. The thick muscular tail acts as a fifth limb and counterbalance during pentapedal walking. The Dog uses muscle-driven flexor-extensor cycles instead.",
        clinical: "Achilles tendon ruptures in kangaroos are immediately fatal. In dogs, surgical repair is feasible because the system is muscle-redundant.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Kangaroo_and_joey03.jpg/640px-Kangaroo_and_joey03.jpg",
        analogy: "The Kangaroo's leg is a pogo stick — the spring (tendon) does most of the work and the muscle just resets it. The Dog's leg is a regular piston engine that has to fire muscle every step.",
        quiz: {
            question: "What makes the kangaroo's hop so energy-efficient?",
            options: ["Strong hip extensors only", "Elastic energy stored in the gastrocnemius and plantaris tendons", "Light hollow bones", "Backward-pointing hindlimbs"],
            correctIndex: 1,
            explanation: "The huge spring-like tendons capture 70% of landing energy and release it on the next bound — like a pogo stick."
        }
    },
    {
        id: 25,
        title: "Retractable Claws",
        category: "wildlife",
        comparison: "Tiger/Lion vs. Dog",
        why: "Big cats (Felidae) possess elastic dorsal ligaments that hold the distal phalanx (P3) bearing the claw RETRACTED at rest, sparing the claw point from wear. Active flexor tendons protrude the claws for grappling prey. The Dog's claw is non-retractable and always exposed, blunting on the ground — a trade-off for traction during pursuit.",
        clinical: "Onychectomy ('declawing') in cats severs P3 itself — biomechanically equivalent to amputating a human fingertip. Dogs only need claw trimming.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Walking_tiger_female.jpg/640px-Walking_tiger_female.jpg",
        analogy: "Cat claws are switchblades — sharp, hidden until needed, deployed by a flick of mechanism. Dog claws are like the cleats on football boots — always out, providing grip but blunted by every step.",
        quiz: {
            question: "What mechanism keeps a tiger's claws retracted?",
            options: ["Active muscle contraction", "Elastic dorsal ligaments pulling P3 back", "Skin folds covering the claw", "Bone fusion locking the joint"],
            correctIndex: 1,
            explanation: "At rest, elastic dorsal ligaments hold P3 retracted. Active flexor tendons override this to deploy claws for hunting."
        }
    },
    {
        id: 26,
        title: "Camel Foot Pad",
        category: "wildlife",
        comparison: "Camel vs. Horse",
        why: "The Camel walks on a broad, soft, splayed footpad shared between two digits — extremely wide surface area to prevent sinking into sand. The horn is reduced; weight is borne by the dermal pad. The Horse hoof is a hard, narrow capsule built for hard ground impact, useless on dunes.",
        clinical: "Camels in stony terrain wear pad ulcers (hoof rot equivalent). Horse hooves crack and chip on soft sandy ground because they need a firm base.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg/640px-07._Camel_Profile%2C_near_Silverton%2C_NSW%2C_07.07.2007.jpg",
        analogy: "The Horse hoof is a stiletto heel — concentrates force, perfect on a hardwood floor (savanna). The Camel foot is a snowshoe — spreads load wide, perfect for soft sand.",
        quiz: {
            question: "Why does the camel have a wide soft footpad instead of a hoof?",
            options: ["It cannot grow horn", "To distribute weight on soft sand without sinking", "To regulate temperature", "To allow swimming"],
            correctIndex: 1,
            explanation: "Wide, splayed digits with a fibro-fatty pad spread the body weight over a large surface — the same principle as a snowshoe."
        }
    },
    {
        id: 27,
        title: "Antlers vs. Horns",
        category: "wildlife",
        comparison: "Deer vs. Ox/Goat",
        why: "Antlers (deer family — Cervidae) are pure BONE, branched, shed and regrown ANNUALLY, and grow encased in nourishing 'velvet' skin. Horns (cattle, sheep, goats — Bovidae) are PERMANENT bony cores covered in keratin sheath that grows continuously. Antlers are the fastest growing bone known (up to 2.5 cm/day).",
        clinical: "Dehorning (cattle) cuts living horn-and-bone — bleeding and pain. Velvet harvesting from deer is also invasive; antlers later shed naturally without any wound.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hjort_p%C3%A5_Dyrehaven.jpg/640px-Hjort_p%C3%A5_Dyrehaven.jpg",
        analogy: "Horns are like a permanent steel helmet — slow, permanent, always on. Antlers are like seasonal tournament armour — grown for one rutting season, then discarded and rebuilt fresh next year.",
        quiz: {
            question: "What is the key biological difference between antlers and horns?",
            options: ["Antlers are keratin, horns are bone", "Antlers are bone shed annually; horns are bony cores covered in permanent keratin", "Antlers grow only in females", "Horns are made of cartilage"],
            correctIndex: 1,
            explanation: "Antlers (deer) = pure bone, branched, shed every year. Horns (cattle, goat) = permanent bone core with a keratin sheath."
        }
    },
    {
        id: 28,
        title: "Bat Wing Skeleton",
        category: "wildlife",
        comparison: "Bat vs. Dog",
        why: "The Bat's forelimb is radically modified for flight: digits II–V are massively elongated to support a thin double-layered skin membrane (patagium) that forms the wing. The thumb (digit I) remains short with a claw. The dog forelimb retains the standard 5 short digits for ground locomotion.",
        clinical: "Wing-membrane tears in bats compromise thermoregulation and flight; healing is poor. Canine paw injuries are routine to repair.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Pteropus_giganteus_-Kolkata%2C_West_Bengal%2C_India-8.jpg/640px-Pteropus_giganteus_-Kolkata%2C_West_Bengal%2C_India-8.jpg",
        analogy: "The Dog's forelimb is a normal hand. The Bat took the same hand, stretched the fingers to umbrella-spoke length, and pulled a kite skin between them. Same parts — radically different function.",
        quiz: {
            question: "Which structures of the bat forelimb are most modified for flight?",
            options: ["The radius and ulna only", "The carpal bones", "Digits II to V (greatly elongated)", "The clavicle"],
            correctIndex: 2,
            explanation: "Digits II–V are stretched to many times their original length to support the patagium (wing membrane). The thumb stays short and clawed."
        }
    },
    {
        id: 29,
        title: "Whale Vestigial Pelvis",
        category: "wildlife",
        comparison: "Whale/Dolphin vs. Dog",
        why: "Cetaceans (whales, dolphins) have lost their hindlimbs entirely and retain only a pair of small 'floating' pelvic bones suspended in muscle, with NO connection to the vertebral column. They serve only as anchor points for reproductive musculature. The dog pelvis, in contrast, is the fixed weight-bearing platform of the hindlimb.",
        clinical: "Vestigial pelvic bones can be felt on dissection of stranded cetaceans. These bones serve as anchor points for reproductive musculature and are a notable example of structural variation across species.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Bottlenose_Dolphin_KSC04pd0178.jpg/640px-Bottlenose_Dolphin_KSC04pd0178.jpg",
        analogy: "The Dog's pelvis is the chassis of a car. The Whale kept the chassis bolts but threw away the wheels, axle and frame — leaving just two stubs floating uselessly inside the body.",
        quiz: {
            question: "What is the role of the cetacean pelvic bone?",
            options: ["It supports the tail flukes", "It is fused to the spine for stability", "It floats free in muscle and anchors reproductive muscles only", "It supports vestigial limbs that emerge in old age"],
            correctIndex: 2,
            explanation: "The whale pelvis is non-articulated — completely free-floating in soft tissue — and serves only as muscle attachment for reproductive structures."
        }
    },
    {
        id: 30,
        title: "Ostrich Two-Toed Foot",
        category: "wildlife",
        comparison: "Ostrich vs. Fowl",
        why: "The Ostrich is the ONLY living bird with just 2 toes (digits III and IV) — digit III bears most of the weight on a thick keratin pad, like a hoof. Reduced toe number means lower distal limb mass, lower swing inertia, and top running speeds of 70 km/h. Common fowl retain 4 toes for perching and grasping.",
        clinical: "Ostriches in captivity are prone to nail and footpad injuries because all weight passes through one digit. A nail crack is a major welfare concern.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Ostrich_Ngorongoro_05.jpg/640px-Ostrich_Ngorongoro_05.jpg",
        analogy: "Fowl have a typical four-prong garden fork foot — good grip on a perch. The Ostrich shaved that down to a hoof-like 2-prong claw foot — useless for perching, but sprints across the savanna like a feathered horse.",
        quiz: {
            question: "How many toes does an ostrich have on each foot?",
            options: ["1", "2", "3", "4"],
            correctIndex: 1,
            explanation: "Ostriches are uniquely DIDACTYL among birds. Digit III bears most weight (with a hoof-like nail); digit IV is small and lateral."
        }
    },
    {
        id: 31,
        title: "Snake Skull Kinesis",
        category: "wildlife",
        comparison: "Python vs. Lizard",
        why: "Snake skulls have multiple movable joints between the bones (cranial kinesis) and the lower jaw halves are joined ONLY by an elastic ligament — not a fused symphysis. This lets a snake swallow prey wider than its head. Lizards (and most reptiles) have rigid jaw symphyses limiting gape.",
        clinical: "When examining a snake post-mortem, the loose mandibular symphysis allows easy oral examination but also makes jaw fractures common when handled roughly.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Boa_constrictor_in_zoo_Cameron_Park_in_Waco%2C_TX_2024.jpg/640px-Boa_constrictor_in_zoo_Cameron_Park_in_Waco%2C_TX_2024.jpg",
        analogy: "A Lizard's jaw is a one-piece nutcracker. A Snake's jaw is a stretchy sock-puppet — every joint can pop, slide and walk independently around the prey, dragging it inward bit by bit.",
        quiz: {
            question: "Why can a snake swallow prey wider than its head?",
            options: ["The skull is made of cartilage", "The lower jaw halves are joined by elastic ligament, not fused bone", "The skull stretches like rubber", "Snakes regurgitate and re-swallow"],
            correctIndex: 1,
            explanation: "Snake mandibles are joined ventrally only by an elastic ligament — they spread apart, allowing each side to 'walk' the prey down separately."
        }
    },
    {
        id: 32,
        title: "Frog Urostyle",
        category: "wildlife",
        comparison: "Frog vs. Dog",
        why: "Frogs have fused all their post-sacral vertebrae into a single rigid rod called the UROSTYLE that extends caudally from the sacrum. Together with the elongated ilia and fused tibiofibula, this turns the entire body into a launch catapult, transferring all hindlimb thrust into a single forward leap. The dog has separate caudal vertebrae for tail flexibility.",
        clinical: "Urostyle fractures in pet frogs (calcium deficiency / metabolic bone disease) cause complete loss of jumping ability — a guarded prognosis.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Litoria_chloris02.jpg/640px-Litoria_chloris02.jpg",
        analogy: "The Dog has a flexible chain of tail vertebrae for steering. The Frog welded them all into a single steel push-rod that channels every drop of leg power forward, like the spear behind a slingshot.",
        quiz: {
            question: "What is the urostyle in frogs?",
            options: ["A jaw bone", "A fused rod of post-sacral vertebrae", "An ear ossicle", "A skin gland"],
            correctIndex: 1,
            explanation: "All post-sacral (caudal) vertebrae fuse into one rigid bony rod that channels hindlimb power into the jump."
        }
    },
    {
        id: 33,
        title: "Bear Plantigrade Stance",
        category: "wildlife",
        comparison: "Bear vs. Dog",
        why: "Bears are PLANTIGRADE — they walk on the entire sole of the foot (carpus to digit), like humans. This gives stability for standing upright and digging but limits running speed. Dogs are DIGITIGRADE — they walk only on their toes, raising the heel — gaining stride length and speed at the cost of stability.",
        clinical: "Bears develop sole pad lesions and arthritis on hard zoo flooring. Dog footpads are designed for repeated impact.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/2010-kodiak-bear-1.jpg/640px-2010-kodiak-bear-1.jpg",
        analogy: "Bear walking = wearing flat sandals — comfortable, stable, but slow. Dog walking = wearing high-heels (toe-walking) — fast and graceful, but less stable on rough ground.",
        quiz: {
            question: "How do bears walk compared to dogs?",
            options: ["Bears are digitigrade like dogs", "Bears are plantigrade — using the whole sole of the foot", "Bears are unguligrade — walking on hoof tips", "Bears walk on knuckles"],
            correctIndex: 1,
            explanation: "Bears press the entire sole (heel + foot + toes) on the ground — plantigrade. This trades speed for stability and is what lets them stand upright easily."
        }
    },
    {
        id: 34,
        title: "Hare/Rabbit Tibiofibula Fusion",
        category: "wildlife",
        comparison: "Hare vs. Dog",
        why: "Hares and rabbits have a FUSED tibia + fibula in the lower leg, like a horse — eliminating rotation but locking the limb into a stiff, lightweight, energy-efficient column for explosive sprinting and zig-zag escape. Dogs retain separate tibia and fibula for some rotation.",
        clinical: "Tibial fractures in rabbits often involve the fused fibular spike, complicating repair. Pet rabbits also have very thin cortical bone — easily fractured during rough handling.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Lepus_californicus_2.jpg/640px-Lepus_californicus_2.jpg",
        analogy: "The Dog's lower leg is two separate sticks — flexible, can rotate. The Hare's lower leg is a single welded pole — rigid, light, ready to fire like an arrow when the predator strikes.",
        quiz: {
            question: "Why is the rabbit/hare tibia and fibula fused?",
            options: ["For better fat storage", "To create a rigid lightweight column for sprinting", "To allow rotation of the foot", "To house the bone marrow"],
            correctIndex: 1,
            explanation: "Fusion produces a stiff, light leg that won't twist or absorb energy uselessly — perfect for explosive escape sprints."
        }
    },
    {
        id: 35,
        title: "Crocodile 'High Walk'",
        category: "wildlife",
        comparison: "Crocodile vs. Lizard",
        why: "Unlike most reptiles, crocodilians can switch from a sprawling 'belly-slide' posture to a fully UPRIGHT 'high walk' where the limbs are positioned vertically beneath the body — like a mammal. This allows them to walk overland with elevated trunk clearance. Lizards remain sprawling, with limbs splayed laterally.",
        clinical: "In crocodile veterinary handling, the high-walk capability means escape speed on land is significantly higher than expected (~17 km/h short bursts).",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Saltwater_crocodile.jpg/640px-Saltwater_crocodile.jpg",
        analogy: "Lizards crawl like a sliding push-up. Crocodiles can stand UP and walk like a dog when needed — they're a reptile capable of the mammalian stance of putting the legs underneath.",
        quiz: {
            question: "What is the crocodilian 'high walk'?",
            options: ["A swimming motion", "A fully upright limb posture similar to mammals", "A defensive display", "Climbing using forelimbs only"],
            correctIndex: 1,
            explanation: "Crocodiles can rotate their limbs to a parasagittal (vertical, under-the-body) posture for fast overland travel — unique among living reptiles."
        }
    },
    {
        id: 36,
        title: "Hippopotamus Bone Density",
        category: "wildlife",
        comparison: "Hippopotamus vs. Pig",
        why: "Hippos have PACHYOSTOTIC bones — abnormally dense, heavy cortical bone — that act as natural ballast, allowing them to walk along riverbeds underwater (negative buoyancy) instead of swimming. The Pig (their closest terrestrial relative biomechanically) has normal-density bones and floats easily.",
        clinical: "Hippo skeletons are unusually heavy in dissection. The dense bone means fractures are uncommon but, if they occur, are devastating because of poor bone vascularity.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Hipopotame.JPG/640px-Hipopotame.JPG",
        analogy: "Most animals are like inflatable rafts — they float. The Hippo is a submarine with lead in its hull — naturally heavy enough to walk along the river bottom without effort.",
        quiz: {
            question: "Why do hippos walk along riverbeds rather than swim?",
            options: ["They cannot swim", "Pachyostotic (abnormally dense) bones make them negatively buoyant", "Their lungs are very small", "They breathe through their skin"],
            correctIndex: 1,
            explanation: "Their bones are unusually dense — natural ballast that makes them sink and walk underwater rather than float."
        }
    },
    {
        id: 37,
        title: "Owl Silent Flight",
        category: "wildlife",
        comparison: "Owl vs. Fowl",
        why: "Owls have SERRATED (comb-like) leading edges on their primary flight feathers and a soft velvety surface that breaks up the airflow into micro-turbulence — silencing wing-flap noise so prey cannot hear them coming. Domestic fowl have smooth-edged feathers; their flight is loud and inefficient.",
        clinical: "Damage to the leading-edge serrations (e.g. captive owls hitting cage wire) impairs hunting success significantly.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Bubo_virginianus_06.jpg/640px-Bubo_virginianus_06.jpg",
        analogy: "Fowl wings are like a sheet of paper flapped through the air — noisy buffeting. Owl wings are like that paper with a frilly comb glued onto the edge — the comb breaks the airflow into tiny silent eddies. Stealth bombers borrowed this design.",
        quiz: {
            question: "What makes owl flight nearly silent?",
            options: ["Smaller wing area", "Serrated leading edge feathers and velvety wing surface", "Hollow feather shafts", "Flapping in slow motion only"],
            correctIndex: 1,
            explanation: "The serrated leading edge plus velvety surface texture eliminates the turbulent whoosh that other birds make in flight — letting owls hunt by stealth."
        }
    },
    {
        id: 38,
        title: "Squirrel Reversible Hindfoot",
        category: "wildlife",
        comparison: "Squirrel vs. Dog",
        why: "Tree squirrels can rotate their HINDFEET 180° at the ankle joint, gripping a tree trunk with the toes pointing UPWARD. This lets them descend headfirst — feet act like grappling hooks. The Dog's ankle is a hinge joint with no rotation, so dogs cannot climb down a tree headfirst.",
        clinical: "Pet squirrels with arthritis of the ankle lose the ability to descend trees and must be re-housed at ground level.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Sciurus-vulgaris_hernandeangelis_stockholm_2008-06-04.jpg/480px-Sciurus-vulgaris_hernandeangelis_stockholm_2008-06-04.jpg",
        analogy: "The Dog's ankle is a hinge — it only flexes-extends. The Squirrel's ankle is a swivel mount — the foot can rotate completely backward, so the toes point UP the trunk while the body climbs DOWN. Like climbing crampons that flip over on demand.",
        quiz: {
            question: "How can a squirrel descend a tree headfirst?",
            options: ["It uses its tail as a grip", "It rotates its hindfeet 180° at the ankle so toes point upward", "It glides down with skin flaps", "It hops down in jumps"],
            correctIndex: 1,
            explanation: "Tree squirrels have a uniquely mobile tarsal joint — the foot rotates 180°, so claws can grip the bark while the body points downward."
        }
    },
    {
        id: 39,
        title: "Bison Thoracic Hump",
        category: "wildlife",
        comparison: "Bison vs. Ox",
        why: "The American/Indian Bison has dramatically ELONGATED spinous processes on T2–T8 (some over 30 cm long), forming the famous shoulder hump. They serve as a long lever arm for the powerful nuchal-supraspinous ligament that supports the massive head used to plough snow for grazing. Domestic ox has short, normal-length spines.",
        clinical: "In bison, head-injury / wither-region trauma is more dangerous because of the extensive ligamentous attachments along these tall spines.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/American_bison_k5680-1.jpg/640px-American_bison_k5680-1.jpg",
        analogy: "The Ox has a regular roof beam over its shoulders. The Bison has a CRANE TOWER built up there — the long spines provide the leverage needed to swing a massive head through deep snow without exhausting the neck muscles.",
        quiz: {
            question: "What forms the bison's prominent shoulder hump?",
            options: ["Fat deposit only", "Greatly elongated thoracic spinous processes (T2–T8)", "Hypertrophied muscle alone", "Fused thoracic vertebrae"],
            correctIndex: 1,
            explanation: "The hump is built on a scaffold of dramatically tall T2–T8 spinous processes — needed to anchor the powerful neck ligaments that swing the heavy head."
        }
    },
    {
        id: 40,
        title: "Rhinoceros Tridactyl Foot",
        category: "wildlife",
        comparison: "Rhinoceros vs. Horse",
        why: "Despite its 2-tonne weight, the Rhinoceros walks on THREE toes per foot (digits II, III, IV) — the standard perissodactyl configuration. The Horse, classified in the same order (Perissodactyla), has a SINGLE toe (digit III) optimized for high-speed running. The rhino retains three toes for stability under massive load on soft ground.",
        clinical: "Rhino foot disease (cracked nails, abscesses) typically affects the central digit III — the largest weight-bearer — but the lateral toes can compensate temporarily, unlike a horse where catastrophic lameness follows.",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Rhinoceros-Wilhelma-2.jpg/640px-Rhinoceros-Wilhelma-2.jpg",
        analogy: "The Horse is a sports car on a single high-performance tyre — fast but fragile. The Rhino is a forklift on a triple-tyre cluster — slow, stable, and built to carry the load without sinking.",
        quiz: {
            question: "How many functional toes does a rhinoceros have on each foot?",
            options: ["1 (like the horse)", "2 (cloven, like the ox)", "3 (digits II, III, IV)", "5"],
            correctIndex: 2,
            explanation: "Rhinos have the standard perissodactyl 3-toe foot. The Horse — same order — has a single digit. The Rhino's 3 toes spread the enormous weight."
        }
    }
];