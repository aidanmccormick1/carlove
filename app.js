const cars = [
  {
    name: "Toyota RAV4 XLE",
    year: 2019,
    miles: 64000,
    price: 24900,
    type: "suv",
    fuel: "gas",
    awd: true,
    towing: 5,
    reliability: 9,
    fun: 6,
    cargo: 8,
    tech: 7,
    vibes: ["comfort", "adventure", "clean"],
    highlights: [
      "Very strong reliability history and resale value.",
      "Comfortable cabin with useful safety tech.",
      "Balanced size for city + weekend trips."
    ],
    watchouts: [
      "Confirm no hesitation during cold start acceleration.",
      "Check brakes for uneven wear on high-mile examples."
    ],
    inspect: [
      "Test lane keep and adaptive cruise on a highway stretch.",
      "Confirm AWD service intervals in maintenance records."
    ]
  },
  {
    name: "Honda CR-V EX",
    year: 2018,
    miles: 69000,
    price: 22300,
    type: "suv",
    fuel: "gas",
    awd: true,
    towing: 4,
    reliability: 9,
    fun: 5,
    cargo: 8,
    tech: 7,
    vibes: ["comfort", "clean"],
    highlights: [
      "Efficient and roomy with easy daily drivability.",
      "Great cargo layout for errands and road trips.",
      "Strong long-term ownership reputation."
    ],
    watchouts: [
      "Check A/C performance at idle and on highway.",
      "Inspect CVT service history and smoothness."
    ],
    inspect: [
      "Look for uneven tire wear and alignment drift.",
      "Check if software recalls were completed."
    ]
  },
  {
    name: "Mazda CX-5 Touring",
    year: 2017,
    miles: 74000,
    price: 20500,
    type: "suv",
    fuel: "gas",
    awd: true,
    towing: 5,
    reliability: 8,
    fun: 8,
    cargo: 7,
    tech: 6,
    vibes: ["sporty", "adventure", "comfort"],
    highlights: [
      "More engaging steering than most compact SUVs.",
      "Premium-feel interior for the price.",
      "Good reliability with proper maintenance."
    ],
    watchouts: [
      "Infotainment can feel dated compared with newer rivals.",
      "Listen for suspension clunks over rough roads."
    ],
    inspect: [
      "Check AWD engagement on a tight turn.",
      "Inspect leather/trim wear around driver's seat bolsters."
    ]
  },
  {
    name: "Subaru Outback Premium",
    year: 2016,
    miles: 91000,
    price: 16900,
    type: "suv",
    fuel: "gas",
    awd: true,
    towing: 6,
    reliability: 7,
    fun: 6,
    cargo: 8,
    tech: 5,
    vibes: ["adventure", "comfort"],
    highlights: [
      "Excellent all-weather confidence with standard AWD.",
      "Comfortable for long drives and active lifestyles.",
      "Useful roof and cargo flexibility."
    ],
    watchouts: [
      "Review CVT service records carefully.",
      "Check for oil seepage around higher mileage."
    ],
    inspect: [
      "Listen for wheel-bearing noise at highway speed.",
      "Confirm all driver-assist warnings are off."
    ]
  },
  {
    name: "Toyota Camry SE",
    year: 2018,
    miles: 62000,
    price: 21400,
    type: "sedan",
    fuel: "gas",
    awd: false,
    towing: 2,
    reliability: 9,
    fun: 6,
    cargo: 5,
    tech: 7,
    vibes: ["clean", "comfort"],
    highlights: [
      "Reliable and easy to own long term.",
      "Smooth ride quality and solid fuel economy.",
      "Good value in the midsize segment."
    ],
    watchouts: [
      "Inspect lower bumper and wheel rash from city use.",
      "Check brake life if mostly stop-and-go miles."
    ],
    inspect: [
      "Verify all safety sensors and camera calibration.",
      "Check for vibration during braking at 60+ mph."
    ]
  },
  {
    name: "Honda Accord Sport",
    year: 2019,
    miles: 58000,
    price: 24400,
    type: "sedan",
    fuel: "gas",
    awd: false,
    towing: 2,
    reliability: 8,
    fun: 7,
    cargo: 6,
    tech: 8,
    vibes: ["clean", "sporty", "comfort"],
    highlights: [
      "Spacious interior with modern infotainment.",
      "Great blend of comfort and responsive handling.",
      "Strong safety and driver-assist suite."
    ],
    watchouts: [
      "Check for tire noise on rough pavement.",
      "Confirm all software and recall updates."
    ],
    inspect: [
      "Test adaptive cruise and lane centering behavior.",
      "Inspect turbo response for smooth power delivery."
    ]
  },
  {
    name: "Ford F-150 XLT",
    year: 2016,
    miles: 98000,
    price: 22900,
    type: "truck",
    fuel: "gas",
    awd: true,
    towing: 10,
    reliability: 7,
    fun: 7,
    cargo: 10,
    tech: 6,
    vibes: ["adventure"],
    highlights: [
      "Huge utility and towing capability.",
      "Comfortable cabin for a full-size truck.",
      "Abundant parts and service availability."
    ],
    watchouts: [
      "Inspect for rust under bed and frame mounts.",
      "Check transmission shift quality under load."
    ],
    inspect: [
      "Test 4x4 engagement on loose surface.",
      "Look for signs of hard towing use."
    ]
  },
  {
    name: "Toyota Tacoma SR5",
    year: 2018,
    miles: 76000,
    price: 28800,
    type: "truck",
    fuel: "gas",
    awd: true,
    towing: 8,
    reliability: 9,
    fun: 7,
    cargo: 9,
    tech: 6,
    vibes: ["adventure"],
    highlights: [
      "Outstanding resale and reliability reputation.",
      "Strong off-road and weekend capability.",
      "Simple, durable truck ownership experience."
    ],
    watchouts: [
      "Confirm smooth transmission behavior at low speeds.",
      "Inspect bed for dents from heavy-duty work."
    ],
    inspect: [
      "Test for brake pedal pulsation on downhill runs.",
      "Check suspension wear from off-road use."
    ]
  },
  {
    name: "Honda Ridgeline RTL",
    year: 2017,
    miles: 83000,
    price: 26900,
    type: "truck",
    fuel: "gas",
    awd: true,
    towing: 7,
    reliability: 8,
    fun: 6,
    cargo: 8,
    tech: 7,
    vibes: ["comfort", "adventure", "clean"],
    highlights: [
      "Best ride comfort among midsize trucks.",
      "Smart storage features and versatile bed.",
      "Easy to live with as a daily driver."
    ],
    watchouts: [
      "Inspect tailgate and trunk seals for water entry.",
      "Check AWD differential service records."
    ],
    inspect: [
      "Test all bed electronics and power outlets.",
      "Drive on rough roads to check suspension noise."
    ]
  },
  {
    name: "Hyundai Kona SEL",
    year: 2019,
    miles: 54000,
    price: 19800,
    type: "suv",
    fuel: "gas",
    awd: true,
    towing: 3,
    reliability: 8,
    fun: 7,
    cargo: 6,
    tech: 8,
    vibes: ["clean", "sporty", "comfort"],
    highlights: [
      "Compact and easy to park in tight cities.",
      "Good tech value for the money.",
      "Efficient daily commuting option."
    ],
    watchouts: [
      "Rear seat and cargo are tighter than larger SUVs.",
      "Check infotainment responsiveness during test drive."
    ],
    inspect: [
      "Inspect tires for uneven wear from city potholes.",
      "Verify all USB/charging ports work."
    ]
  },
  {
    name: "Kia Soul EX",
    year: 2020,
    miles: 46000,
    price: 18900,
    type: "hatch",
    fuel: "gas",
    awd: false,
    towing: 2,
    reliability: 8,
    fun: 6,
    cargo: 7,
    tech: 8,
    vibes: ["clean", "comfort"],
    highlights: [
      "Roomy cabin shape with excellent visibility.",
      "Solid feature list for budget-conscious buyers.",
      "Comfortable around town and easy to maneuver."
    ],
    watchouts: [
      "Road noise can rise at highway speed.",
      "Check for recall completion and software updates."
    ],
    inspect: [
      "Inspect hatch struts and latch operation.",
      "Test camera quality in low light."
    ]
  },
  {
    name: "Tesla Model 3 Standard Range",
    year: 2018,
    miles: 71000,
    price: 24950,
    type: "sedan",
    fuel: "ev",
    awd: false,
    towing: 2,
    reliability: 7,
    fun: 9,
    cargo: 6,
    tech: 10,
    vibes: ["clean", "sporty"],
    highlights: [
      "Quick acceleration and very modern driving feel.",
      "Low fuel costs if charging setup is easy.",
      "Excellent software and navigation experience."
    ],
    watchouts: [
      "Inspect battery health report before buying.",
      "Check panel alignment and interior wear quality."
    ],
    inspect: [
      "Confirm charging speed on a fast charger.",
      "Test every camera angle and parking sensor."
    ]
  },
  {
    name: "Toyota Prius LE",
    year: 2019,
    miles: 88000,
    price: 20800,
    type: "hatch",
    fuel: "hybrid",
    awd: false,
    towing: 2,
    reliability: 9,
    fun: 4,
    cargo: 7,
    tech: 7,
    vibes: ["clean", "comfort"],
    highlights: [
      "Outstanding fuel economy for heavy commuters.",
      "Legendary low-cost ownership profile.",
      "Useful hatchback practicality."
    ],
    watchouts: [
      "Check hybrid battery health with diagnostic scan.",
      "Inspect brake system operation at low speed."
    ],
    inspect: [
      "Verify smooth engine-to-electric transition.",
      "Look for signs of rideshare-heavy wear."
    ]
  },
  {
    name: "Volkswagen Golf GTI S",
    year: 2017,
    miles: 67000,
    price: 21600,
    type: "hatch",
    fuel: "gas",
    awd: false,
    towing: 2,
    reliability: 7,
    fun: 9,
    cargo: 6,
    tech: 7,
    vibes: ["sporty", "clean"],
    highlights: [
      "One of the most fun practical cars to drive.",
      "Compact exterior with useful hatch storage.",
      "Strong community support and tuning ecosystem."
    ],
    watchouts: [
      "Confirm DSG/transmission service intervals.",
      "Check for modified software or aggressive tuning history."
    ],
    inspect: [
      "Listen for turbo and intake leaks under boost.",
      "Inspect front suspension for play over bumps."
    ]
  },
  {
    name: "Chevrolet Colorado LT",
    year: 2016,
    miles: 92000,
    price: 21200,
    type: "truck",
    fuel: "gas",
    awd: true,
    towing: 8,
    reliability: 6,
    fun: 6,
    cargo: 8,
    tech: 5,
    vibes: ["adventure"],
    highlights: [
      "Strong towing and hauling value at this price point.",
      "Midsize footprint easier than full-size trucks.",
      "Capable for mixed work and weekend use."
    ],
    watchouts: [
      "Pay close attention to transmission shudder signs.",
      "Inspect for hard-use bed and suspension wear."
    ],
    inspect: [
      "Drive at low/high speed to feel shift quality.",
      "Check 4WD system engagement and warning lights."
    ]
  },
  {
    name: "Subaru Crosstrek Premium",
    year: 2020,
    miles: 52000,
    price: 25800,
    type: "suv",
    fuel: "gas",
    awd: true,
    towing: 4,
    reliability: 8,
    fun: 6,
    cargo: 6,
    tech: 8,
    vibes: ["adventure", "comfort", "clean"],
    highlights: [
      "Excellent all-weather confidence and easy visibility.",
      "High safety ratings and solid daily practicality.",
      "Great match for mixed city and outdoor use."
    ],
    watchouts: [
      "Check CVT fluid service history.",
      "Inspect for windshield chips and camera calibration."
    ],
    inspect: [
      "Test hill descent and AWD behavior.",
      "Verify all EyeSight driver-assist features."
    ]
  },
  {
    name: "Nissan Leaf SV",
    year: 2021,
    miles: 35000,
    price: 18400,
    type: "hatch",
    fuel: "ev",
    awd: false,
    towing: 1,
    reliability: 7,
    fun: 5,
    cargo: 6,
    tech: 8,
    vibes: ["clean", "comfort"],
    highlights: [
      "Affordable entry into EV ownership.",
      "Smooth and quiet city driving experience.",
      "Low running costs with home charging."
    ],
    watchouts: [
      "Confirm battery state-of-health before purchase.",
      "Range may drop in cold-weather conditions."
    ],
    inspect: [
      "Test charging speed on both Level 2 and quick charge.",
      "Check tire wear and suspension for city curb damage."
    ]
  }
];


const form = document.getElementById("quiz-form");
const screens = Array.from(document.querySelectorAll(".question-screen"));
const nextButtons = Array.from(document.querySelectorAll("[data-next]"));
const prevButtons = Array.from(document.querySelectorAll("[data-prev]"));
const progressBar = document.getElementById("progress-bar");
const weeklyMilesInput = document.getElementById("weeklyMiles");
const weeklyMilesValue = document.getElementById("weeklyMilesValue");
const resultSection = document.getElementById("result");
const matchCard = document.getElementById("match-card");
const topThreeContainer = document.getElementById("top-three");
const topThreeButton = document.getElementById("show-top-three");
const playAgainButton = document.getElementById("play-again");

let latestMatches = [];
let currentScreen = 0;

weeklyMilesInput.addEventListener("input", () => {
  weeklyMilesValue.textContent = `${weeklyMilesInput.value} miles`;
});

nextButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (!validateScreen(currentScreen)) return;
    showScreen(currentScreen + 1);
  });
});

prevButtons.forEach((button) => {
  button.addEventListener("click", () => {
    showScreen(currentScreen - 1);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!validateScreen(currentScreen)) return;

  const preferences = collectPreferences();
  const matches = cars
    .map((car) => scoreCar(car, preferences))
    .sort((a, b) => b.score - a.score);

  latestMatches = matches;
  renderMainMatch(matches[0], preferences);
  topThreeContainer.classList.add("hidden");
  topThreeButton.textContent = "Show top 3 matches";
  resultSection.classList.remove("hidden");
  resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
});

topThreeButton.addEventListener("click", () => {
  if (!latestMatches.length) return;
  if (topThreeContainer.classList.contains("hidden")) {
    renderTopThree(latestMatches);
    topThreeContainer.classList.remove("hidden");
    topThreeButton.textContent = "Hide top 3";
  } else {
    topThreeContainer.classList.add("hidden");
    topThreeButton.textContent = "Show top 3 matches";
  }
});

playAgainButton.addEventListener("click", () => {
  resultSection.classList.add("hidden");
  showScreen(0);
  screens[0].scrollIntoView({ behavior: "smooth", block: "start" });
});

showScreen(0);

function showScreen(index) {
  const boundedIndex = clamp(index, 0, screens.length - 1);
  currentScreen = boundedIndex;
  screens.forEach((screen, idx) => {
    screen.classList.toggle("active", idx === boundedIndex);
  });
  const progress = ((boundedIndex + 1) / screens.length) * 100;
  progressBar.style.width = `${progress}%`;
  screens[boundedIndex].scrollIntoView({ behavior: "smooth", block: "start" });
}

function validateScreen(index) {
  const screen = screens[index];
  const requiredFields = Array.from(screen.querySelectorAll("[required]"));
  return requiredFields.every((field) => field.reportValidity());
}

function collectPreferences() {
  const formData = new FormData(form);
  return {
    budget: Number(formData.get("budget")),
    bodyStyle: formData.get("bodyStyle"),
    truckMood: formData.get("truckMood"),
    fuel: formData.get("fuel"),
    chargeAccess: formData.get("chargeAccess"),
    weeklyMiles: Number(formData.get("weeklyMiles")),
    needs: new Set(formData.getAll("needs")),
    riskTolerance: formData.get("riskTolerance"),
    ownershipYears: formData.get("ownershipYears"),
    weather: formData.get("weather"),
    parking: formData.get("parking"),
    passengers: formData.get("passengers"),
    lifestyle: formData.get("lifestyle"),
    vibe: formData.get("vibe"),
    musicEnergy: formData.get("musicEnergy"),
    mileageComfort: formData.get("mileageComfort"),
    ageComfort: formData.get("ageComfort")
  };
}

function scoreCar(car, prefs) {
  let score = 50;
  const reasons = [];
  const budgetGap = prefs.budget - car.price;

  if (budgetGap >= 0) {
    const closeness = 1 - Math.min(budgetGap / Math.max(prefs.budget, 1), 1);
    const budgetScore = 18 + closeness * 12;
    score += budgetScore;
    reasons.push(`Within budget by ${toCurrency(budgetGap)}.`);
  } else {
    const overshoot = Math.abs(budgetGap);
    const penalty = (overshoot / Math.max(prefs.budget, 1)) * 70;
    score -= penalty;
    reasons.push(`Over budget by ${toCurrency(overshoot)}.`);
  }

  if (prefs.bodyStyle !== "any") {
    if (car.type === prefs.bodyStyle) {
      score += 14;
      reasons.push("Body style matches your type.");
    } else {
      score -= 12;
    }
  }

  if (prefs.truckMood === "yes") {
    score += car.type === "truck" ? 18 : -8;
  } else if (prefs.truckMood === "no") {
    score += car.type === "truck" ? -12 : 5;
  } else {
    score += car.type === "truck" ? 7 : 3;
  }

  if (prefs.fuel !== "any") {
    if (car.fuel === prefs.fuel) {
      score += 10;
      reasons.push(`Fuel choice lines up (${car.fuel.toUpperCase()}).`);
    } else {
      score -= 8;
    }
  }

  if (prefs.chargeAccess === "none" && car.fuel === "ev") score -= 18;
  if (prefs.chargeAccess === "home" && car.fuel === "ev") score += 14;
  if (prefs.chargeAccess === "public" && car.fuel === "ev") score += 7;

  const annualMiles = prefs.weeklyMiles * 52;
  if (annualMiles > 15000) {
    if (car.fuel === "hybrid" || car.fuel === "ev") score += 12;
    if (car.reliability >= 8) score += 6;
  } else if (annualMiles < 8000 && car.fun >= 7) {
    score += 5;
  }

  if (prefs.needs.has("towing")) {
    if (car.towing >= 8) {
      score += 12;
      reasons.push("Strong towing fit.");
    } else if (car.towing >= 6) {
      score += 5;
    } else {
      score -= 15;
    }
  }

  if (prefs.needs.has("awd")) {
    score += car.awd ? 10 : -13;
    if (car.awd) reasons.push("AWD box checked.");
  }

  if (prefs.needs.has("lowMaint")) {
    if (car.reliability >= 8) score += 12;
    else if (car.reliability >= 7) score += 5;
    else score -= 14;
  }

  if (prefs.needs.has("fun")) {
    if (car.fun >= 8) score += 11;
    else if (car.fun >= 6) score += 5;
    else score -= 9;
  }

  if (prefs.needs.has("cargo")) {
    if (car.cargo >= 8) score += 10;
    else if (car.cargo >= 6) score += 5;
    else score -= 8;
  }

  if (prefs.needs.has("tech")) {
    if (car.tech >= 8) score += 9;
    else if (car.tech >= 6) score += 4;
    else score -= 7;
  }

  if (prefs.riskTolerance === "low") {
    if (car.miles > 90000) score -= 14;
    if (car.reliability < 7) score -= 12;
  } else if (prefs.riskTolerance === "high") {
    if (car.fun >= 8) score += 4;
    if (car.year <= 2017) score += 3;
  }

  if (prefs.ownershipYears === "long") {
    if (car.reliability >= 8) score += 10;
    if (car.miles > 85000) score -= 6;
  } else if (prefs.ownershipYears === "short" && car.fun >= 7) {
    score += 4;
  }

  if ((prefs.weather === "snow" || prefs.weather === "rain") && car.awd) {
    score += 9;
  }
  if (prefs.weather === "snow" && !car.awd) score -= 8;

  if (prefs.parking === "tight") {
    if (car.type === "truck") score -= 10;
    if (car.type === "hatch" || car.type === "sedan") score += 5;
  }

  if (prefs.passengers === "family" && car.cargo >= 7) score += 7;
  if (prefs.passengers === "solo" && car.fun >= 7) score += 4;

  if (prefs.lifestyle === "outdoors") {
    if (car.type === "truck" || car.awd) score += 8;
  } else if (prefs.lifestyle === "city") {
    if (car.type === "truck") score -= 6;
    if (car.type === "hatch" || car.type === "sedan") score += 5;
  } else if (prefs.lifestyle === "roadtrip" && car.cargo >= 7) {
    score += 6;
  }

  if (prefs.musicEnergy === "premium") {
    if (car.tech >= 8) score += 8;
    else score -= 4;
  } else if (prefs.musicEnergy === "basic" && car.tech <= 7) {
    score += 2;
  }

  if (prefs.mileageComfort === "low") {
    if (car.miles <= 60000) score += 10;
    else score -= 12;
  } else if (prefs.mileageComfort === "mid") {
    if (car.miles <= 85000) score += 6;
    else score -= 6;
  } else if (prefs.mileageComfort === "high" && car.miles > 85000) {
    score += 3;
  }

  if (prefs.ageComfort === "newer") {
    if (car.year >= 2019) score += 10;
    else score -= 8;
  } else if (prefs.ageComfort === "balanced") {
    if (car.year >= 2017) score += 5;
  } else if (prefs.ageComfort === "older" && car.year <= 2017) {
    score += 4;
  }

  if (car.vibes.includes(prefs.vibe)) {
    score += 10;
    reasons.push("Personality vibe match detected.");
  } else {
    score -= 6;
  }

  const confidence = clamp(Math.round((score / 170) * 100), 35, 99);
  return { car, score, reasons: reasons.slice(0, 5), confidence };
}

function renderMainMatch(match, prefs) {
  const { car, confidence } = match;
  const strengths = buildStrengths(car, prefs);
  const watchouts = buildWatchouts(car, prefs);
  const checklist = buildChecklist(car);
  const sparkLine = makeSparkLine(car, prefs, confidence);

  matchCard.innerHTML = `
    <header class="match-header">
      <div>
        <h3 class="match-title">${car.year} ${car.name}</h3>
        <p class="love-note">${sparkLine}</p>
      </div>
      <span class="badge">${confidence}% match</span>
    </header>

    <dl class="meta">
      <div><dt>Price</dt><dd>${toCurrency(car.price)}</dd></div>
      <div><dt>Mileage</dt><dd>${car.miles.toLocaleString()} mi</dd></div>
      <div><dt>Body</dt><dd>${capitalize(car.type)}</dd></div>
      <div><dt>Fuel</dt><dd>${car.fuel.toUpperCase()}</dd></div>
    </dl>

    <section class="facts">
      <div>
        <h3>Why this is good</h3>
        <ul>${strengths.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>What to watch out for</h3>
        <ul>${watchouts.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
      <div>
        <h3>First-date inspection checklist</h3>
        <ul>${checklist.map((item) => `<li>${item}</li>`).join("")}</ul>
      </div>
    </section>
  `;
}

function renderTopThree(matches) {
  const top = matches.slice(0, 3);
  topThreeContainer.innerHTML = top
    .map(
      (match, index) => `
      <article class="top-three-item">
        <strong>${index + 1}. ${match.car.year} ${match.car.name}</strong>
        <p>Score: ${Math.round(match.score)} | ${toCurrency(match.car.price)} | ${match.car.miles.toLocaleString()} mi</p>
        <p>${match.reasons.join(" ")}</p>
      </article>
    `
    )
    .join("");
}

function buildStrengths(car, prefs) {
  const strengths = [...car.highlights];

  if (prefs.budget - car.price > 3000) {
    strengths.push("Leaves room in your budget for tax, fees, and repairs.");
  }
  if ((prefs.needs.has("awd") || prefs.weather !== "mild") && car.awd) {
    strengths.push("AWD confidence for weather and weekend plans.");
  }
  if (prefs.weeklyMiles > 250 && (car.fuel === "hybrid" || car.fuel === "ev")) {
    strengths.push("Could save meaningful money on fuel for your commute.");
  }
  if (prefs.parking === "tight" && (car.type === "hatch" || car.type === "sedan")) {
    strengths.push("Easy to park in tight city spots.");
  }
  return uniqueTake(strengths, 4);
}

function buildWatchouts(car, prefs) {
  const watchouts = [...car.watchouts];

  if (car.miles > 85000) {
    watchouts.push("Ask for proof of major fluid services at this mileage.");
  }
  if (car.year <= 2017) {
    watchouts.push("Confirm tire age and battery age before closing the deal.");
  }
  if (prefs.riskTolerance === "low" && car.reliability <= 7) {
    watchouts.push("Do a full pre-purchase inspection before committing.");
  }
  if (prefs.chargeAccess === "none" && car.fuel === "ev") {
    watchouts.push("Charging convenience may be a daily headache without home access.");
  }
  return uniqueTake(watchouts, 4);
}

function buildChecklist(car) {
  const checklist = [
    ...car.inspect,
    "Run a VIN history report and check for accident records.",
    "Scan for pending OBD-II trouble codes."
  ];
  return uniqueTake(checklist, 4);
}

function makeSparkLine(car, prefs, confidence) {
  const intro = {
    comfort: "This one feels like a calm, reliable relationship.",
    adventure: "This match wants snacks, maps, and weird weekend plans.",
    clean: "This pairing gives modern, polished, no-drama energy.",
    sporty: "This one is flirty, quick, and ready for fun drives."
  };

  const truckNote =
    car.type === "truck"
      ? "It brings utility without pretending to be delicate."
      : "It keeps daily life easy while still having personality.";

  const weatherNote = prefs.weather === "mild" ? "" : " It also fits your weather reality.";

  return `${intro[prefs.vibe]} AI chemistry score: ${confidence}%. ${truckNote}${weatherNote}`;
}

function uniqueTake(list, count) {
  return [...new Set(list)].slice(0, count);
}

function toCurrency(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(value);
}

function capitalize(value) {
  if (!value) return value;
  return value[0].toUpperCase() + value.slice(1);
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}
