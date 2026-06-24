// ─── Question Bank ────────────────────────────────────────────────────────────
export const BANK = {
  quants: [
    { q: "What is 15% of 240?", options: ["36","43","46","26"], answer: 0, expl: "15/100 × 240 = 36", category: "Quantitative Aptitude" },
    { q: "What is 35% of 180?", options: ["76","58","73","63"], answer: 3, expl: "35/100 × 180 = 63", category: "Quantitative Aptitude" },
    { q: "What is 40% of 650?", options: ["286","270","255","260"], answer: 3, expl: "40/100 × 650 = 260", category: "Quantitative Aptitude" },
    { q: "What is 12% of 150?", options: ["28","18","8","23"], answer: 1, expl: "12/100 × 150 = 18", category: "Quantitative Aptitude" },
    { q: "What is 28% of 500?", options: ["126","135","168","140"], answer: 3, expl: "28/100 × 500 = 140", category: "Quantitative Aptitude" },
    { q: "An item bought for ₹400 is sold at a profit of 25%. Find the selling price.", options: ["₹550","₹575","₹500","₹450"], answer: 2, expl: "SP = 400 × 1.25 = ₹500", category: "Quantitative Aptitude" },
    { q: "An item bought for ₹600 is sold at a profit of 15%. Find the selling price.", options: ["₹695","₹680","₹700","₹690"], answer: 3, expl: "SP = 600 × 1.15 = ₹690", category: "Quantitative Aptitude" },
    { q: "A product costing ₹500 is sold for ₹650. Find the profit percentage.", options: ["27%","34%","30%","25%"], answer: 2, expl: "(650-500)/500 × 100 = 30%", category: "Quantitative Aptitude" },
    { q: "Find the simple interest on ₹5000 at 8% per annum for 3 years.", options: ["₹1190","₹1205","₹1080","₹1200"], answer: 3, expl: "5000×8×3/100 = ₹1200", category: "Quantitative Aptitude" },
    { q: "Find the simple interest on ₹12000 at 6% per annum for 2 years.", options: ["₹1450","₹1584","₹1296","₹1440"], answer: 3, expl: "12000×6×2/100 = ₹1440", category: "Quantitative Aptitude" },
    { q: "Find the average of 12, 18, 24, 30.", options: ["21","24","16","31"], answer: 0, expl: "84/4 = 21", category: "Quantitative Aptitude" },
    { q: "Find the average of 45, 55, 60, 40.", options: ["45","50","40","60"], answer: 1, expl: "200/4 = 50", category: "Quantitative Aptitude" },
    { q: "₹900 is divided in ratio 4:5. First person's share?", options: ["₹400","₹360","₹390","₹480"], answer: 0, expl: "4/9×900=₹400", category: "Quantitative Aptitude" },
    { q: "A can do work in 10 days, B in 15 days. Together?", options: ["6 days","5 days","16 days","7 days"], answer: 0, expl: "10×15/25=6 days", category: "Quantitative Aptitude" },
    { q: "A car covers 240 km in 4 hours. Find its speed.", options: ["69 km/h","60 km/h","55 km/h","50 km/h"], answer: 1, expl: "240/4=60 km/h", category: "Quantitative Aptitude" },
    { q: "A shirt marked at ₹800 is sold at 25% discount. Selling price?", options: ["₹690","₹660","₹595","₹600"], answer: 3, expl: "800×0.75=₹600", category: "Quantitative Aptitude" },
    { q: "Find HCF of 12 and 18.", options: ["12","6","8","7"], answer: 1, expl: "HCF(12,18)=6", category: "Quantitative Aptitude" },
    { q: "A value rises from 200 to 250. Percentage increase?", options: ["20%","28%","30%","25%"], answer: 3, expl: "50/200×100=25%", category: "Quantitative Aptitude" },
    { q: "What is 3/4 of 120?", options: ["80","81","95","90"], answer: 3, expl: "3/4×120=90", category: "Quantitative Aptitude" },
    { q: "A town's population is 8000. It grows by 10%. New population?", options: ["8800","8790","9680","8810"], answer: 0, expl: "8000×1.1=8800", category: "Quantitative Aptitude" },
  ],
  logical: [
    { q: "Find the next number: 2, 5, 8, 11, 14, ?", options: ["17","20","14","18"], answer: 0, expl: "Add 3 → 17", category: "Logical Reasoning" },
    { q: "Find the next number: 5, 9, 13, 17, 21, ?", options: ["29","21","25","26"], answer: 2, expl: "Add 4 → 25", category: "Logical Reasoning" },
    { q: "Find the next number: 3, 9, 27, 81, ?", options: ["243","486","246","240"], answer: 0, expl: "×3 → 243", category: "Logical Reasoning" },
    { q: "Find the next number: 1, 4, 9, 16, 25, ?", options: ["37","49","42","36"], answer: 3, expl: "6²=36", category: "Logical Reasoning" },
    { q: "Find the next number: 1, 1, 2, 3, 5, ?", options: ["11","6","8","9"], answer: 2, expl: "Fibonacci: 3+5=8", category: "Logical Reasoning" },
    { q: "Find the next letter: A, C, E, G, ?", options: ["I","H","K","J"], answer: 0, expl: "Skip 1 letter → I", category: "Logical Reasoning" },
    { q: "Find the next letter: B, E, H, K, ?", options: ["N","P","O","M"], answer: 0, expl: "Skip 2 → N", category: "Logical Reasoning" },
    { q: "A man walks 3 km North, then 4 km East. Distance from start?", options: ["1 km","7 km","12 km","5 km"], answer: 3, expl: "√(9+16)=5 km", category: "Logical Reasoning" },
    { q: "Odd one out: 4, 9, 16, 20, 25", options: ["4","25","20","16"], answer: 2, expl: "20 is not a perfect square", category: "Logical Reasoning" },
    { q: "Odd one out: Rose, Lily, Jasmine, Mango", options: ["Jasmine","Lily","Mango","Rose"], answer: 2, expl: "Mango is a fruit; rest are flowers", category: "Logical Reasoning" },
    { q: "Doctor : Hospital :: Teacher : ?", options: ["School","Garden","Library","Office"], answer: 0, expl: "Teacher works in school", category: "Logical Reasoning" },
    { q: "Bird : Nest :: Bee : ?", options: ["Burrow","Den","Hive","Web"], answer: 2, expl: "Bee lives in a hive", category: "Logical Reasoning" },
    { q: "All cats are animals. All animals are living beings. Therefore:", options: ["All living beings are cats","All cats are living beings","No cats are living beings","Some animals are cats only"], answer: 1, expl: "Transitive conclusion", category: "Logical Reasoning" },
    { q: "In a row of 5, A left of B, B left of C, C left of D, D left of E. Who is in the middle?", options: ["D","B","C","A"], answer: 2, expl: "Order A B C D E → C", category: "Logical Reasoning" },
    { q: "How many months have 28 days?", options: ["2","1","4","All 12"], answer: 3, expl: "Every month has at least 28 days", category: "Logical Reasoning" },
    { q: "If PINK is coded as QJOL, how is BLUE coded?", options: ["DNWG","CMVF","CMWF","AKTD"], answer: 1, expl: "+1 each letter → CMVF", category: "Logical Reasoning" },
    { q: "A cube has how many faces?", options: ["8","4","12","6"], answer: 3, expl: "6 faces", category: "Logical Reasoning" },
    { q: "Which is heaviest if A>B, B>C, C>D?", options: ["C","A","D","B"], answer: 1, expl: "A is largest", category: "Logical Reasoning" },
    { q: "Complete: AB, DE, GH, ?", options: ["IJ","HI","JL","JK"], answer: 3, expl: "Skip one letter between pairs", category: "Logical Reasoning" },
    { q: "Find next: 2, 6, 12, 20, 30, ?", options: ["44","42","40","36"], answer: 1, expl: "Differences +2 each time → 42", category: "Logical Reasoning" },
  ],
  verbal: [
    { q: "Synonym of ABUNDANT:", options: ["Scarce","Empty","Rare","Plentiful"], answer: 3, expl: "Plentiful", category: "Verbal Ability" },
    { q: "Synonym of DILIGENT:", options: ["Lazy","Hardworking","Careless","Slow"], answer: 1, expl: "Hardworking", category: "Verbal Ability" },
    { q: "Synonym of CANDID:", options: ["Shy","Secretive","Frank","Dull"], answer: 2, expl: "Frank", category: "Verbal Ability" },
    { q: "Synonym of ELOQUENT:", options: ["Silent","Articulate","Vague","Clumsy"], answer: 1, expl: "Articulate", category: "Verbal Ability" },
    { q: "Synonym of JOVIAL:", options: ["Sad","Serious","Cheerful","Gloomy"], answer: 2, expl: "Cheerful", category: "Verbal Ability" },
    { q: "Antonym of VICTORY:", options: ["Success","Triumph","Win","Defeat"], answer: 3, expl: "Defeat", category: "Verbal Ability" },
    { q: "Antonym of HUMBLE:", options: ["Simple","Arrogant","Meek","Modest"], answer: 1, expl: "Arrogant", category: "Verbal Ability" },
    { q: "Antonym of TRANSPARENT:", options: ["Plain","Glassy","Clear","Opaque"], answer: 3, expl: "Opaque", category: "Verbal Ability" },
    { q: "Antonym of PERMANENT:", options: ["Fixed","Lasting","Stable","Temporary"], answer: 3, expl: "Temporary", category: "Verbal Ability" },
    { q: "Antonym of BOLD:", options: ["Fearless","Brave","Daring","Timid"], answer: 3, expl: "Timid", category: "Verbal Ability" },
    { q: "'A piece of cake' means:", options: ["Very hard","Very easy","Very tasty","A dessert"], answer: 1, expl: "Very easy", category: "Verbal Ability" },
    { q: "'Once in a blue moon' means:", options: ["Very rarely","Every night","At noon","Often"], answer: 0, expl: "Very rarely", category: "Verbal Ability" },
    { q: "'Break the ice' means:", options: ["To break glass","To start a conversation","To fight","To feel cold"], answer: 1, expl: "Start a conversation", category: "Verbal Ability" },
    { q: "'Cost an arm and a leg' means:", options: ["Very expensive","Painful","Free","Cheap"], answer: 0, expl: "Very expensive", category: "Verbal Ability" },
    { q: "One who cannot read or write:", options: ["Idle","Innocent","Ignorant","Illiterate"], answer: 3, expl: "Illiterate", category: "Verbal Ability" },
    { q: "A government by the people:", options: ["Anarchy","Monarchy","Oligarchy","Democracy"], answer: 3, expl: "Democracy", category: "Verbal Ability" },
    { q: "A person who can use both hands equally well:", options: ["Ambidextrous","Clumsy","Skilled","Dexterous"], answer: 0, expl: "Ambidextrous", category: "Verbal Ability" },
    { q: "One who travels on foot:", options: ["Passenger","Driver","Pedestrian","Tourist"], answer: 2, expl: "Pedestrian", category: "Verbal Ability" },
    { q: "The teacher ___ the students for their excellent work.", options: ["commended","commanded","condemned","commenced"], answer: 0, expl: "'commended' fits", category: "Verbal Ability" },
    { q: "Choose the grammatically correct sentence:", options: ["She had work here since 2019.","She works here since 2019.","She is working here since 2019.","She has been working here since 2019."], answer: 3, expl: "Present perfect continuous", category: "Verbal Ability" },
  ],
  english: [
    { q: "Fill in: He is ___ honest man.", options: ["the","no article","a","an"], answer: 3, expl: "'an' before vowel sound", category: "English Communication" },
    { q: "Fill in: She bought ___ umbrella yesterday.", options: ["a","some","the","an"], answer: 3, expl: "'an' before vowel sound", category: "English Communication" },
    { q: "Fill in: ___ sun rises in the east.", options: ["No article","A","The","An"], answer: 2, expl: "'The' for unique nouns", category: "English Communication" },
    { q: "Fill in: She is good ___ mathematics.", options: ["for","in","at","on"], answer: 2, expl: "'at' is correct", category: "English Communication" },
    { q: "Fill in: He has been waiting ___ two hours.", options: ["from","for","since","by"], answer: 1, expl: "'for' with duration", category: "English Communication" },
    { q: "Fill in: The book is ___ the table.", options: ["in","at","on","over"], answer: 2, expl: "'on' the table", category: "English Communication" },
    { q: "Fill in: She is afraid ___ dogs.", options: ["of","from","for","with"], answer: 0, expl: "'afraid of'", category: "English Communication" },
    { q: "Fill in: By next year, she ___ her degree.", options: ["completes","will have completed","has completed","will complete"], answer: 1, expl: "Future perfect tense", category: "English Communication" },
    { q: "Fill in: They ___ football when it started to rain.", options: ["play","were playing","are playing","played"], answer: 1, expl: "Past continuous", category: "English Communication" },
    { q: "Passive voice of 'The chef cooks the meal.'", options: ["The meal cooks the chef.","The meal was cooked by the chef.","The meal is cooked by the chef.","The chef is cooked by the meal."], answer: 2, expl: "Present passive", category: "English Communication" },
    { q: "Indirect speech of: He said, 'I am busy.'", options: ["He said that he is busy.","He said that he was busy.","He says that he was busy.","He said that I was busy."], answer: 1, expl: "Backshift: am→was", category: "English Communication" },
    { q: "Best way to begin a formal email to unknown recipient:", options: ["Dear Sir/Madam,","Yo,","Hey there,","Hi buddy,"], answer: 0, expl: "Professional greeting", category: "English Communication" },
    { q: "A polite way to decline a request at work:", options: ["I'm afraid I won't be able to take this on right now.","No way.","That's not my job.","Forget it."], answer: 0, expl: "Professional and polite", category: "English Communication" },
    { q: "Fill in: Mathematics ___ my favourite subject.", options: ["is","are","were","have"], answer: 0, expl: "Singular verb", category: "English Communication" },
    { q: "Choose the correct sentence:", options: ["If I am you, I would apologise.","If I were you, I would apologise.","If I was you, I will apologise.","If I were you, I will apologised."], answer: 1, expl: "Subjunctive mood", category: "English Communication" },
    { q: "Fill in: You ___ wear a helmet while riding. (obligation)", options: ["must","might","may","could"], answer: 0, expl: "'must' for obligation", category: "English Communication" },
    { q: "Add the correct question tag: She is coming, ___?", options: ["is she","won't she","isn't she","does she"], answer: 2, expl: "Negative tag for positive clause", category: "English Communication" },
    { q: "Pick the sentence with correct parallel structure:", options: ["She likes to read, writing, and paint.","She likes reading, to write, and painting.","She likes reading, writing, and painting.","She likes read, write, and to paint."], answer: 2, expl: "All gerunds", category: "English Communication" },
    { q: "Choose the correctly formed question:", options: ["Do you completed the assignment?","Did you complete the assignment?","Did you completed the assignment?","You did complete the assignment?"], answer: 1, expl: "Simple past question", category: "English Communication" },
    { q: "Fill in: It ___ rain later, so take an umbrella. (possibility)", options: ["might","ought","shall","must"], answer: 0, expl: "'might' for possibility", category: "English Communication" },
  ],
  "Engineering|Other / General": [
    { q: "Which data structure uses LIFO?", options: ["Tree","Queue","Array","Stack"], answer: 3, expl: "Stack = LIFO", category: "Engineering (General)" },
    { q: "Time complexity of binary search:", options: ["O(1)","O(n)","O(log n)","O(n²)"], answer: 2, expl: "O(log n)", category: "Engineering (General)" },
    { q: "SQL command to retrieve data:", options: ["UPDATE","SELECT","INSERT","DELETE"], answer: 1, expl: "SELECT", category: "Engineering (General)" },
    { q: "Which OSI layer handles routing?", options: ["Transport","Network","Data link","Physical"], answer: 1, expl: "Network layer", category: "Engineering (General)" },
    { q: "IPv4 address length:", options: ["128 bits","64 bits","16 bits","32 bits"], answer: 3, expl: "32 bits", category: "Engineering (General)" },
    { q: "Encapsulation in OOP means:", options: ["Hiding internal details","Inheriting","Overloading","Recursion"], answer: 0, expl: "Hides internals", category: "Engineering (General)" },
    { q: "Which gate is universal?", options: ["XOR","AND","OR","NAND"], answer: 3, expl: "NAND", category: "Engineering (General)" },
    { q: "Binary 1101 in decimal:", options: ["14","11","12","13"], answer: 3, expl: "8+4+1=13", category: "Engineering (General)" },
    { q: "First stage of SDLC:", options: ["Testing","Coding","Requirement analysis","Deployment"], answer: 2, expl: "Requirements first", category: "Engineering (General)" },
    { q: "Cache memory is used to:", options: ["Store permanently","Speed up frequent data access","Backup data","Replace CPU"], answer: 1, expl: "Speeds up access", category: "Engineering (General)" },
    { q: "A compiler converts source code into:", options: ["Machine code","HTML","A flowchart","A database"], answer: 0, expl: "Machine code", category: "Engineering (General)" },
    { q: "Big-O notation describes:", options: ["Time/space complexity","Memory address","Output value","Syntax"], answer: 0, expl: "Algorithm complexity", category: "Engineering (General)" },
  ],
  "Polytechnic|Other / General": [
    { q: "SI unit of electric current:", options: ["Ampere","Ohm","Watt","Volt"], answer: 0, expl: "Ampere", category: "Polytechnic (General)" },
    { q: "Ohm's law: V = ?", options: ["I × R","I + R","I / R","R / I"], answer: 0, expl: "V = I × R", category: "Polytechnic (General)" },
    { q: "A transformer works on:", options: ["Chemical reaction","Self heating","Friction","Mutual induction"], answer: 3, expl: "Mutual induction", category: "Polytechnic (General)" },
    { q: "Most common semiconductor:", options: ["Silicon","Copper","Aluminium","Iron"], answer: 0, expl: "Silicon", category: "Polytechnic (General)" },
    { q: "The hardest natural material:", options: ["Iron","Gold","Diamond","Quartz"], answer: 2, expl: "Diamond", category: "Polytechnic (General)" },
    { q: "Standard AC frequency in India:", options: ["220 Hz","60 Hz","100 Hz","50 Hz"], answer: 3, expl: "50 Hz", category: "Polytechnic (General)" },
    { q: "Ductility allows metal to be:", options: ["Hammered into sheets","Drawn into wires","Melted easily","Corroded"], answer: 1, expl: "Drawn into wires", category: "Polytechnic (General)" },
    { q: "A diode allows current in:", options: ["All directions","No direction","Both directions","One direction only"], answer: 3, expl: "One direction", category: "Polytechnic (General)" },
    { q: "Binary 1010 equals decimal:", options: ["20","8","12","10"], answer: 3, expl: "8+2=10", category: "Polytechnic (General)" },
    { q: "Fuse is used for:", options: ["Increasing current","Measuring voltage","Protection from overcurrent","Storing charge"], answer: 2, expl: "Overcurrent protection", category: "Polytechnic (General)" },
    { q: "Which is a renewable energy source?", options: ["Petrol","Diesel","Coal","Solar"], answer: 3, expl: "Solar", category: "Polytechnic (General)" },
    { q: "A lathe machine is used for:", options: ["Turning operations","Welding","Drilling only","Grinding only"], answer: 0, expl: "Turning", category: "Polytechnic (General)" },
  ],
  "Arts & Science|Other / General": [
    { q: "Powerhouse of the cell:", options: ["Golgi body","Ribosome","Nucleus","Mitochondria"], answer: 3, expl: "Mitochondria", category: "Arts & Science (General)" },
    { q: "Gas plants absorb in photosynthesis:", options: ["Hydrogen","Oxygen","Carbon dioxide","Nitrogen"], answer: 2, expl: "CO₂", category: "Arts & Science (General)" },
    { q: "Chemical symbol for gold:", options: ["Gd","Au","Ag","Go"], answer: 1, expl: "Au", category: "Arts & Science (General)" },
    { q: "Speed of light:", options: ["3×10⁸ m/s","3×10⁴ m/s","3×10¹⁰ m/s","3×10⁶ m/s"], answer: 0, expl: "3×10⁸ m/s", category: "Arts & Science (General)" },
    { q: "CPU stands for:", options: ["Central Program Unit","Computer Personal Unit","Central Processing Unit","Control Processing Unit"], answer: 2, expl: "Central Processing Unit", category: "Arts & Science (General)" },
    { q: "1 Kilobyte equals:", options: ["512 bytes","1000 bytes","1024 bytes","100 bytes"], answer: 2, expl: "1024 bytes", category: "Arts & Science (General)" },
    { q: "pH of neutral solution:", options: ["14","1","0","7"], answer: 3, expl: "7", category: "Arts & Science (General)" },
    { q: "Most abundant gas in atmosphere:", options: ["Oxygen","Carbon dioxide","Hydrogen","Nitrogen"], answer: 3, expl: "Nitrogen ~78%", category: "Arts & Science (General)" },
    { q: "HTML is used to create:", options: ["Web pages","Spreadsheets","Databases","Operating systems"], answer: 0, expl: "Web pages", category: "Arts & Science (General)" },
    { q: "Chemical formula of common salt:", options: ["KCl","CaCl₂","NaOH","NaCl"], answer: 3, expl: "NaCl", category: "Arts & Science (General)" },
    { q: "Which vitamin is produced from sunlight?", options: ["Vitamin D","Vitamin A","Vitamin C","Vitamin B12"], answer: 0, expl: "Vitamin D", category: "Arts & Science (General)" },
    { q: "DNA stands for:", options: ["Diribonucleic acid","Dinucleic acid","Deoxyribonucleic acid","Deoxyribose nuclear acid"], answer: 2, expl: "Deoxyribonucleic acid", category: "Arts & Science (General)" },
  ],
};

// ─── Sections config ──────────────────────────────────────────────────────────
export const SECTIONS = [
  { id: "apt",  name: "Aptitude",      color: "#2F5BEA", soft: "#ECF0FE", chip: "apt",
    subs: [{ key: "quants", label: "Quantitative Aptitude", n: 10 }, { key: "logical", label: "Logical Reasoning", n: 10 }] },
  { id: "comm", name: "Communication", color: "#159B5C", soft: "#E6F4ED", chip: "comm",
    subs: [{ key: "verbal", label: "Verbal Ability", n: 10 }, { key: "english", label: "English Communication", n: 10 }] },
  { id: "tech", name: "Technical",     color: "#E8821E", soft: "#FCF0E2", chip: "tech",
    subs: [{ key: "__STREAM__", label: "Technical", n: 10 }] },
];

export const KEYS = ["A", "B", "C", "D"];

// ─── Helpers ──────────────────────────────────────────────────────────────────
export function shuffle(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function pick(arr, n) {
  return shuffle(arr || []).slice(0, Math.min(n, (arr || []).length));
}

export function fmtTime(s) {
  return String(Math.floor(s / 60)).padStart(2, "0") + ":" + String(s % 60).padStart(2, "0");
}

export function buildQuiz(techKey) {
  const quiz = [];
  const secRanges = {};
  SECTIONS.forEach((sec) => {
    const start = quiz.length;
    sec.subs.forEach((sub) => {
      const key  = sub.key === "__STREAM__" ? techKey : sub.key;
      const pool = BANK[key] || BANK["Engineering|Other / General"] || [];
      pick(pool, sub.n).forEach((orig) => {
        const correctText = orig.options[orig.answer];
        const opts = shuffle(orig.options.slice());
        quiz.push({
          q: orig.q,
          options: opts,
          answer: opts.indexOf(correctText),
          expl: orig.expl || "",
          category: orig.category || sub.label,
          sectionId: sec.id,
          chosen: null,
        });
      });
    });
    secRanges[sec.id] = {
      start, end: quiz.length,
      color: sec.color, soft: sec.soft,
      name: sec.name,   chip: sec.chip,
    };
  });
  return { quiz, secRanges };
}

export function deptsFor(study) {
  const list = Object.keys(BANK)
    .filter((k) => k.startsWith(study + "|"))
    .map((k) => k.split("|")[1]);
  list.sort((a, b) => {
    const ao = a === "Other / General", bo = b === "Other / General";
    if (ao !== bo) return ao ? 1 : -1;
    return a.localeCompare(b);
  });
  return list.length ? list : ["Other / General"];
}

// ─── Session storage helpers ──────────────────────────────────────────────────
export const Session = {
  save:  (key, value) => sessionStorage.setItem(key, JSON.stringify(value)),
  load:  (key)        => { try { return JSON.parse(sessionStorage.getItem(key)); } catch { return null; } },
  clear: ()           => sessionStorage.clear(),
};