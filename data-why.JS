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
    }
];