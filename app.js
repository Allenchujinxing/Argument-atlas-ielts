const samplePrompts = [
  "Some people think that children should begin learning a foreign language at primary school rather than secondary school. Do the advantages of this outweigh the disadvantages?",
  "In many countries, young people are encouraged to work or travel for a year between finishing high school and starting university studies. Do the advantages outweigh the disadvantages?",
  "Some people believe that governments should spend more money on public transport, while others think road infrastructure is more important. Discuss both views and give your own opinion.",
  "Some people think universities should only offer subjects that are useful for future careers. To what extent do you agree or disagree?",
  "Many people believe that working from home is better than working in an office. Discuss both views and give your own opinion.",
  "In some countries, more and more people are becoming interested in finding out about the history of the house or building they live in. What are the reasons for this? How can people research this?"
];

const topicLibrary = [
  {
    matchers: ["children", "school", "education", "student", "teacher", "university", "learning", "foreign language"],
    theme: "education policy",
    support: [
      "Earlier exposure can build stronger long-term habits and confidence.",
      "Schools can reduce inequality by giving all children the same learning opportunity.",
      "Skills learned early often support later academic and career opportunities."
    ],
    oppose: [
      "Primary schools may lack specialist teachers, so quality can become inconsistent.",
      "Adding another subject too early can crowd out play, literacy, or core numeracy.",
      "Not every child benefits at the same pace, so pressure may rise without clear gains."
    ],
    middle: [
      "Introduce the subject early, but keep the content light, practical, and age-appropriate.",
      "Pilot the policy first in schools with enough trained teachers before scaling nationally.",
      "Combine early exposure with stronger support at secondary school where deeper learning happens."
    ],
    examples: [
      "Compare urban schools with access to specialist teachers and rural schools with fewer resources.",
      "Use a family example where confidence improves through songs, games, and short classroom routines.",
      "Mention labour-market benefits only after linking them to educational foundations."
    ],
    warnings: [
      "Do not turn the essay into a general discussion of all school reforms.",
      "Avoid spending too much time on bilingualism research if the prompt only asks about timing.",
      "If the task says 'outweigh', make sure your final position clearly compares both sides."
    ]
  },
  {
    matchers: ["government", "public transport", "road", "city", "traffic", "housing", "public service", "tax"],
    theme: "public policy",
    support: [
      "Public spending can improve efficiency and quality of life for a large number of citizens.",
      "Better shared infrastructure often creates wider social and environmental benefits.",
      "Government investment can correct market failures where private incentives are too weak."
    ],
    oppose: [
      "Large public projects can be expensive, slow, and vulnerable to waste.",
      "Road or transport choices affect regions differently, so one national policy may not fit all.",
      "Public money spent in one area means less funding for healthcare, housing, or education."
    ],
    middle: [
      "Governments can prioritise one area while still protecting baseline investment in the other.",
      "Policy should depend on local need rather than a single rule for every city or region.",
      "Short-term road fixes and long-term public transport upgrades can be planned together."
    ],
    examples: [
      "Use a congested city where metro expansion cuts travel time for office workers and students.",
      "Contrast commuter-heavy areas with rural regions that still depend on road connections.",
      "Refer to emissions, productivity, or access to jobs as measurable outcomes."
    ],
    warnings: [
      "Do not list every possible government responsibility; stay on the specific spending trade-off.",
      "Avoid vague claims like 'public transport is better for everyone' without explaining why.",
      "If the task asks for both views and your opinion, your own view must still be explicit."
    ]
  },
  {
    matchers: ["technology", "computer", "internet", "social media", "online", "artificial intelligence", "ai", "phone"],
    theme: "technology and society",
    support: [
      "Technology can expand access, speed, and convenience for everyday tasks.",
      "Digital tools often lower barriers for communication, learning, and work.",
      "New systems can improve efficiency when they remove repetitive manual effort."
    ],
    oppose: [
      "Convenience may come with distraction, dependence, or reduced face-to-face interaction.",
      "Not all users have equal digital access or skills, so benefits can be uneven.",
      "Privacy, misinformation, or overuse can create serious long-term costs."
    ],
    middle: [
      "The key issue is not whether technology is good or bad, but how it is governed and used.",
      "Targeted use can keep the productivity benefits while reducing the social risks.",
      "Public education and regulation can make adoption more responsible."
    ],
    examples: [
      "Use online learning, remote work, or digital payment adoption as concrete cases.",
      "Contrast productive use in work settings with distraction-heavy use on social media.",
      "Mention different age groups if it helps show uneven impact."
    ],
    warnings: [
      "Do not drift into a full history of technology unless the prompt clearly asks for it.",
      "Avoid absolute language like 'technology always harms society'.",
      "Keep your examples connected to the exact feature of technology named in the prompt."
    ]
  },
  {
    matchers: ["work", "job", "career", "salary", "employee", "employer", "retirement", "working from home"],
    theme: "work and careers",
    support: [
      "The proposal may improve flexibility, motivation, or long-term productivity.",
      "Workers often value autonomy when it helps them manage time and personal responsibilities.",
      "Career-related policies can attract talent and reduce turnover."
    ],
    oppose: [
      "Some jobs rely on direct supervision, teamwork, or physical presence.",
      "What helps one group of workers may create unfairness for another.",
      "Short-term convenience may hide weaker training, culture, or accountability."
    ],
    middle: [
      "A mixed model can preserve flexibility without removing useful structure.",
      "Employers should adapt the policy according to role, industry, and measurable outcomes.",
      "The best solution often depends on balancing worker welfare with organisational needs."
    ],
    examples: [
      "Use office jobs versus customer-facing or factory roles as a contrast.",
      "Refer to productivity, retention, or commuting time as evidence directions.",
      "Include one employer perspective and one employee perspective."
    ],
    warnings: [
      "Do not assume every job can be treated the same way.",
      "Avoid writing only about personal preference if the prompt asks about broader impact.",
      "Remember to discuss both sides before reaching your judgement."
    ]
  },
  {
    matchers: ["health", "doctor", "exercise", "diet", "hospital", "medical", "obesity", "mental health"],
    theme: "health and lifestyle",
    support: [
      "The proposal could reduce long-term health risks and lower pressure on healthcare systems.",
      "Preventive action is often cheaper and more sustainable than treating problems later.",
      "Health-focused policies may improve quality of life as well as productivity."
    ],
    oppose: [
      "Health behaviour is influenced by income, culture, and access, so simple solutions may fail.",
      "Policies that seem helpful can feel intrusive or unrealistic in daily life.",
      "A measure may help one group while barely reaching the people with the greatest need."
    ],
    middle: [
      "Strong public guidance works best when combined with practical support and personal choice.",
      "The aim should be healthier behaviour, but the method must remain realistic and fair.",
      "Education, incentives, and local access often work better together than any single policy."
    ],
    examples: [
      "Use school meals, public exercise spaces, or workplace wellbeing schemes as examples.",
      "Contrast a public health campaign with an individual lifestyle choice.",
      "Mention long-term costs to hospitals or insurers if it helps strengthen the argument."
    ],
    warnings: [
      "Do not reduce the topic to personal discipline alone if structural factors matter.",
      "Avoid overusing extreme examples unless they clearly match the prompt.",
      "Keep the essay tied to the policy or habit named in the question."
    ]
  },
  {
    matchers: ["crime", "prison", "law", "punishment", "police", "criminal", "sentence"],
    theme: "crime and punishment",
    support: [
      "A tougher or more targeted response may improve public safety and deter repeat behaviour.",
      "Clear rules can build trust if citizens believe serious harm is treated seriously.",
      "Some interventions protect potential victims more effectively than passive approaches."
    ],
    oppose: [
      "Punishment alone may not solve the social causes behind crime.",
      "Harsh responses can be costly and still fail to reduce reoffending.",
      "Policies focused only on deterrence may ignore rehabilitation and reintegration."
    ],
    middle: [
      "A credible justice system often needs both accountability and rehabilitation.",
      "The best response depends on the seriousness of the offence and the likelihood of reoffending.",
      "Preventive social support can complement formal punishment rather than replace it."
    ],
    examples: [
      "Contrast violent offences with first-time non-violent offences.",
      "Use prison education, community service, or youth intervention schemes as examples.",
      "Link arguments to public safety and long-term reoffending rates."
    ],
    warnings: [
      "Do not treat every crime as if it deserves the same response.",
      "Avoid emotional examples that do not support a broader argument.",
      "Make sure your final position answers whether the approach is effective, fair, or both."
    ]
  },
  {
    matchers: ["environment", "climate", "pollution", "energy", "waste", "recycling", "plastic"],
    theme: "environment and sustainability",
    support: [
      "Early action can prevent larger long-term environmental and economic costs.",
      "Public or corporate change at scale may achieve results that individuals alone cannot.",
      "Sustainable systems can improve both public health and future resilience."
    ],
    oppose: [
      "Environmental goals may create short-term costs for households, firms, or workers.",
      "Policies can backfire if they are too expensive or unrealistic for everyday use.",
      "Responsibility is often shared, so blaming one actor may oversimplify the issue."
    ],
    middle: [
      "Long-term sustainability matters, but policies need realistic transition plans.",
      "Shared responsibility between governments, firms, and individuals usually produces stronger results.",
      "The best approach is often to combine incentives with targeted regulation."
    ],
    examples: [
      "Use recycling systems, public transport, renewable energy, or plastic restrictions as examples.",
      "Compare a wealthy city with an area that has fewer financial resources.",
      "Mention emissions, waste reduction, or health effects as evidence directions."
    ],
    warnings: [
      "Do not write a generic essay about saving the planet if the prompt is narrower.",
      "Avoid unsupported claims about what 'everyone' should do.",
      "Tie each example back to the exact environmental measure in the prompt."
    ]
  }
];

const defaultLibrary = {
  theme: "general social issue",
  support: [
    "The idea may create clear benefits for efficiency, access, or long-term outcomes.",
    "Supporters can argue that broad social gains justify the change.",
    "If implemented well, the proposal could solve an existing weakness in the current system."
  ],
  oppose: [
    "Critics may argue that the policy creates new costs, inequalities, or practical difficulties.",
    "Benefits in theory do not always translate into fair or effective results in practice.",
    "The proposal may oversimplify a complex issue with different stakeholder needs."
  ],
  middle: [
    "A conditional or limited version of the idea may capture the benefits while reducing the risks.",
    "The strongest response is often to support the goal but challenge the method.",
    "A balanced thesis can recognise both the potential value and the implementation limits."
  ],
  examples: [
    "Compare how two different groups would experience the same policy.",
    "Use one everyday example and one broader social consequence.",
    "Mention a measurable outcome such as cost, access, health, learning, or productivity."
  ],
  warnings: [
    "Do not paraphrase the prompt for the whole essay without adding analysis.",
    "Avoid examples that are interesting but unrelated to the exact question.",
    "Make sure your conclusion directly answers the task type."
  ]
};

const promptInput = document.querySelector("#prompt-input");
const stanceSelect = document.querySelector("#stance-select");
const generateButton = document.querySelector("#generate-map");
const sampleButton = document.querySelector("#load-sample");
const clearButton = document.querySelector("#clear-form");
const copyButton = document.querySelector("#copy-result");
const questionTypeLabel = document.querySelector("#question-type");
const recommendedStance = document.querySelector("#recommended-stance");
const thesisMove = document.querySelector("#thesis-move");
const paragraphPath = document.querySelector("#paragraph-path");
const promptLens = document.querySelector("#prompt-lens");
const scoreFocus = document.querySelector("#score-focus");
const sampleChips = document.querySelector("#sample-chips");

const listTargets = {
  support: document.querySelector("#support-list"),
  oppose: document.querySelector("#oppose-list"),
  middle: document.querySelector("#middle-list"),
  examples: document.querySelector("#example-list"),
  warnings: document.querySelector("#warning-list")
};

function normalizePrompt(prompt) {
  return prompt.trim().replace(/\s+/g, " ");
}

function detectQuestionType(prompt) {
  const lower = prompt.toLowerCase();

  if (lower.includes("discuss both views")) {
    return "Discuss both views + opinion";
  }

  if (
    lower.includes("what are the reasons") ||
    lower.includes("what problems does this cause") ||
    lower.includes("what effects does this have") ||
    lower.includes("what can be done") ||
    lower.includes("how can this be solved")
  ) {
    return "Two-part question";
  }

  if (lower.includes("advantages outweigh the disadvantages")) {
    return "Advantages vs disadvantages";
  }

  if (lower.includes("advantages and disadvantages")) {
    return "Advantages and disadvantages";
  }

  if (lower.includes("agree or disagree")) {
    return "Agree or disagree";
  }

  if (lower.includes("problems and solutions")) {
    return "Problems and solutions";
  }

  const multiQuestionMarks = (prompt.match(/\?/g) || []).length;
  if (multiQuestionMarks >= 2) {
    return "Two-part question";
  }

  return "Opinion / mixed analysis";
}

function detectPromptKeywords(prompt) {
  const lower = prompt.toLowerCase();
  const terms = lower.match(/[a-z][a-z-]+/g) || [];
  const filtered = terms.filter(
    (term) =>
      term.length > 4 &&
      !["should", "would", "could", "therefore", "people", "think", "their", "which"].includes(term)
  );

  return [...new Set(filtered)].slice(0, 3);
}

function detectTheme(prompt) {
  const lower = prompt.toLowerCase();

  for (const topic of topicLibrary) {
    if (topic.matchers.some((matcher) => lower.includes(matcher))) {
      return topic;
    }
  }

  return defaultLibrary;
}

function tweakForQuestionType(questionType, library) {
  const support = [...library.support];
  const oppose = [...library.oppose];
  const middle = [...library.middle];
  const examples = [...library.examples];
  const warnings = [...library.warnings];

  if (questionType === "Discuss both views + opinion") {
    middle.unshift("Keep both sides equally developed before revealing your own judgement.");
    warnings.unshift("Do not spend the whole essay on only one side if the prompt asks for both views.");
  }

  if (questionType === "Advantages vs disadvantages" || questionType === "Advantages and disadvantages") {
    support.unshift("Frame each point as a clear benefit with a direct impact on people or systems.");
    oppose.unshift("Treat disadvantages as concrete costs, not just vague concerns.");
    warnings.unshift("Your thesis should say which side is stronger, not just that both exist.");
  }

  if (questionType === "Agree or disagree") {
    middle.unshift("A partial-agreement thesis can work well if you clearly show where you draw the line.");
    warnings.unshift("Do not hide your position until the conclusion; IELTS rewards a clear line.");
  }

  if (questionType === "Two-part question") {
    support.unshift("Treat the first half of the prompt as a direct analytical question, not just background.");
    oppose.unshift("Use the second half to test whether your proposed answer is realistic, limited, or uneven.");
    middle.unshift("Plan the essay as two clear tasks: answer the first question fully, then answer the second with equal weight.");
    examples.unshift("Separate your planning into question one and question two before writing body paragraphs.");
    warnings.unshift("Answer both questions fully; many essays lose marks by ignoring the second part.");
  }

  if (questionType === "Problems and solutions") {
    support.unshift("Name the problem clearly, then explain one or two practical consequences before offering solutions.");
    oppose.unshift("Challenge weak solutions by showing why they may be expensive, unrealistic, or too narrow.");
    middle.unshift("The highest-scoring structure usually links each solution back to a specific cause or problem.");
    examples.unshift("Use one example to show the problem in real life and another to illustrate a practical solution.");
    warnings.unshift("Do not spend the entire essay describing problems if the prompt also asks for solutions.");
  }

  return { support, oppose, middle, examples, warnings };
}

function adjustForStance(result, focusMode) {
  if (focusMode === "support") {
    result.support.unshift("If you choose a supportive thesis, make the strongest benefit your first body paragraph.");
    result.middle[0] = "You can still acknowledge limits briefly, but keep the essay clearly weighted toward the benefits.";
  }

  if (focusMode === "oppose") {
    result.oppose.unshift("If you take a critical stance, focus on the most convincing practical drawback first.");
    result.middle[0] = "You can recognise possible benefits, but your overall judgement should remain clearly cautious.";
  }

  return result;
}

function buildStrategy(prompt, questionType, library, focusMode) {
  const keywords = detectPromptKeywords(prompt);
  const keywordLabel = keywords.length ? keywords.join(", ") : library.theme;

  const stanceMap = {
    "Advantages vs disadvantages": "Take a comparative thesis and decide clearly which side is stronger.",
    "Advantages and disadvantages": "Show both sides, then signal whether the positives or negatives matter more.",
    "Discuss both views + opinion": "Stay balanced in body paragraphs, but let your conclusion lean clearly.",
    "Agree or disagree": "Choose a firm line or partial agreement, then defend the exact limit of your agreement.",
    "Problems and solutions": "Split the essay cleanly: causes or problems first, realistic solutions second.",
    "Two-part question": "Treat each question as a separate promise to the examiner and answer both fully.",
    "Opinion / mixed analysis": "Build a direct position early and use one counterpoint to sound more mature."
  };

  const thesisMap = {
    balanced: "Use a thesis that recognises one clear benefit, one meaningful drawback, and your final judgement.",
    support: "Write a thesis that acknowledges a limitation in one clause, then clearly defends the stronger benefit.",
    oppose: "Write a thesis that recognises the attraction of the idea, then explains why the risk matters more."
  };

  const paragraphMap = {
    balanced: "Body 1: strongest case in favour. Body 2: strongest counterargument plus your final weighing.",
    support: "Body 1: your most persuasive advantage. Body 2: acknowledge the downside, then explain why it is limited.",
    oppose: "Body 1: the most convincing drawback. Body 2: recognise one benefit, then show why it is not decisive."
  };

  if (questionType === "Problems and solutions") {
    thesisMap.balanced = "Write a thesis that names the main problem and signals that targeted, realistic solutions are possible.";
    thesisMap.support = "Write a thesis that admits the problem is serious but argues it can be reduced with practical action.";
    thesisMap.oppose = "Write a thesis that explains why simple solutions are not enough without deeper structural change.";
    paragraphMap.balanced = "Body 1: define the main cause or problem. Body 2: present one or two solutions directly linked to it.";
    paragraphMap.support = "Body 1: explain why the problem matters. Body 2: defend the most workable solution with a concrete mechanism.";
    paragraphMap.oppose = "Body 1: show why the surface-level solution is weak. Body 2: propose a deeper or broader response.";
  }

  if (questionType === "Two-part question") {
    thesisMap.balanced = "Use a thesis that answers both questions in one sentence pair so the examiner sees full coverage immediately.";
    thesisMap.support = "If one answer is stronger, show that clearly, but still answer the second question with equal care.";
    thesisMap.oppose = "Even with a critical stance, make sure your thesis promises a direct answer to both task parts.";
    paragraphMap.balanced = "Body 1: answer question one directly. Body 2: answer question two with a connected but distinct idea.";
    paragraphMap.support = "Body 1: explain the main reason or cause. Body 2: present the strongest response, outcome, or solution.";
    paragraphMap.oppose = "Body 1: challenge the common explanation. Body 2: show why the obvious answer to part two may be incomplete.";
  }

  return {
    stance: stanceMap[questionType] || stanceMap["Opinion / mixed analysis"],
    thesis: thesisMap[focusMode],
    path: paragraphMap[focusMode],
    lens: `Theme detected: ${library.theme}. Strong planning keywords: ${keywordLabel}.`,
    score: "Highest scoring essays stay tightly tied to the exact wording of the task and compare ideas instead of listing them."
  };
}

function renderList(element, items) {
  element.innerHTML = "";
  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

function buildOutlineText(prompt, questionType, result) {
  return [
    `Prompt: ${prompt}`,
    `Question type: ${questionType}`,
    "",
    "Supporting side:",
    ...result.support.map((item) => `- ${item}`),
    "",
    "Opposing side:",
    ...result.oppose.map((item) => `- ${item}`),
    "",
    "Compromise angle:",
    ...result.middle.map((item) => `- ${item}`),
    "",
    "Example directions:",
    ...result.examples.map((item) => `- ${item}`),
    "",
    "Off-topic traps:",
    ...result.warnings.map((item) => `- ${item}`)
  ].join("\n");
}

function generateArgumentMap() {
  const prompt = normalizePrompt(promptInput.value);
  if (!prompt) {
    promptInput.focus();
    return;
  }

  const questionType = detectQuestionType(prompt);
  const library = detectTheme(prompt);
  const refined = tweakForQuestionType(questionType, library);
  const result = adjustForStance(refined, stanceSelect.value);
  const strategy = buildStrategy(prompt, questionType, library, stanceSelect.value);

  questionTypeLabel.textContent = `${questionType} · ${library.theme}`;
  recommendedStance.textContent = strategy.stance;
  thesisMove.textContent = strategy.thesis;
  paragraphPath.textContent = strategy.path;
  promptLens.textContent = strategy.lens;
  scoreFocus.textContent = strategy.score;

  renderList(listTargets.support, result.support);
  renderList(listTargets.oppose, result.oppose);
  renderList(listTargets.middle, result.middle);
  renderList(listTargets.examples, result.examples);
  renderList(listTargets.warnings, result.warnings);

  copyButton.dataset.outline = buildOutlineText(prompt, questionType, result);
}

async function copyOutline() {
  const outline = copyButton.dataset.outline;
  if (!outline) {
    return;
  }

  try {
    await navigator.clipboard.writeText(outline);
    copyButton.textContent = "Copied";
    window.setTimeout(() => {
      copyButton.textContent = "Copy outline";
    }, 1400);
  } catch (_error) {
    copyButton.textContent = "Copy failed";
    window.setTimeout(() => {
      copyButton.textContent = "Copy outline";
    }, 1400);
  }
}

sampleButton.addEventListener("click", () => {
  const randomPrompt =
    samplePrompts[Math.floor(Math.random() * samplePrompts.length)];
  promptInput.value = randomPrompt;
  generateArgumentMap();
});

clearButton.addEventListener("click", () => {
  promptInput.value = "";
  questionTypeLabel.textContent = "Waiting for a prompt";
  recommendedStance.textContent = "Generate a prompt first";
  thesisMove.textContent = "Your thesis framing will appear here.";
  paragraphPath.textContent = "Use the map below to choose two strong body paragraphs.";
  promptLens.textContent = "The app will detect the main topic and planning lens.";
  scoreFocus.textContent = "Task response guidance will appear here.";
  Object.values(listTargets).forEach((element) => {
    element.innerHTML = "<li>Start with a prompt to generate ideas.</li>";
  });
  delete copyButton.dataset.outline;
});

generateButton.addEventListener("click", generateArgumentMap);
copyButton.addEventListener("click", copyOutline);

promptInput.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key === "Enter") {
    generateArgumentMap();
  }
});

samplePrompts.forEach((prompt, index) => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "sample-chip";
  chip.textContent = `Sample ${index + 1}`;
  chip.addEventListener("click", () => {
    promptInput.value = prompt;
    generateArgumentMap();
  });
  sampleChips.appendChild(chip);
});
