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
const copyThesisButton = document.querySelector("#copy-thesis");
const questionTypeLabel = document.querySelector("#question-type");
const recommendedStance = document.querySelector("#recommended-stance");
const thesisMove = document.querySelector("#thesis-move");
const paragraphPath = document.querySelector("#paragraph-path");
const promptLens = document.querySelector("#prompt-lens");
const scoreFocus = document.querySelector("#score-focus");
const sampleChips = document.querySelector("#sample-chips");
const thesisList = document.querySelector("#thesis-list");

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

function buildThesisSuggestions(questionType, focusMode) {
  const templates = {
    "Discuss both views + opinion": {
      balanced: [
        "Although both sides of this debate raise valid concerns, I believe the stronger argument is the one that delivers the more sustainable long-term outcome.",
        "This essay will examine both perspectives before explaining why one side is ultimately more convincing in practice.",
        "While each position has merit, I would argue that the better view is the one that balances practicality with long-term benefit."
      ],
      support: [
        "Although the opposing view deserves consideration, I believe the arguments in favour are more persuasive because their benefits are broader and more lasting.",
        "After considering both sides, I would argue that the supportive position is stronger because it produces clearer overall advantages.",
        "While critics raise some valid concerns, I ultimately support this view because its positive outcomes are more significant."
      ],
      oppose: [
        "Although the idea appears attractive at first glance, I believe the opposing view is stronger because its risks are more immediate and serious.",
        "This essay will consider both sides, but I would argue that the drawbacks make the critical position more convincing overall.",
        "Despite the potential benefits, I believe the case against this idea is ultimately more persuasive because it reflects real-world consequences more accurately."
      ]
    },
    "Advantages vs disadvantages": {
      balanced: [
        "Although this development brings several clear benefits, I believe its disadvantages are slightly more significant overall.",
        "This essay argues that while both sides deserve attention, the advantages are ultimately more substantial in the long term.",
        "In my view, the positive effects of this trend outweigh the negative ones, provided it is managed carefully."
      ],
      support: [
        "Although there are some drawbacks, I believe the advantages clearly outweigh them because the long-term gains are more important.",
        "In my opinion, the benefits are more significant than the disadvantages, mainly because they affect more people in a positive way.",
        "While the negative aspects should not be ignored, I would argue that the overall impact is more beneficial than harmful."
      ],
      oppose: [
        "Despite a few obvious benefits, I believe the disadvantages are more serious because they create deeper practical and social costs.",
        "Although this trend may seem positive in some respects, its drawbacks outweigh its benefits overall.",
        "In my view, the negative consequences are more significant than the advantages, especially when long-term effects are considered."
      ]
    },
    "Advantages and disadvantages": {
      balanced: [
        "This issue presents both notable advantages and clear disadvantages, and both should be examined carefully.",
        "There are convincing arguments on both sides of this development, with meaningful benefits as well as real drawbacks.",
        "Although this trend offers some valuable opportunities, it also creates serious concerns that deserve equal attention."
      ],
      support: [
        "This development involves both benefits and drawbacks, but the advantages appear more convincing overall.",
        "Although there are real disadvantages, the positive effects are stronger and more widely felt.",
        "While both sides deserve discussion, the advantages are ultimately more significant than the disadvantages."
      ],
      oppose: [
        "Although this trend has certain benefits, its disadvantages are more serious and should not be overlooked.",
        "There are advantages to this development, but the drawbacks are more substantial overall.",
        "While some positive outcomes are possible, I believe the disadvantages carry greater weight."
      ]
    },
    "Agree or disagree": {
      balanced: [
        "I partly agree with this statement because, although it is valid in some situations, it overlooks important practical limitations.",
        "While I accept the logic behind this view to some extent, I do not believe it is fully convincing in every context.",
        "I agree with this idea only in part, since its value depends heavily on how it is applied in real life."
      ],
      support: [
        "I largely agree with this statement because its benefits are both practical and long-lasting.",
        "In my view, this opinion is convincing because it addresses an important real-world need more effectively than the alternatives.",
        "I agree with this position because the overall advantages clearly outweigh the possible limitations."
      ],
      oppose: [
        "I disagree with this statement because it oversimplifies a more complex issue.",
        "In my view, this argument is unconvincing because its practical drawbacks are too serious to ignore.",
        "I do not agree with this opinion, largely because it fails to reflect how people and institutions function in reality."
      ]
    },
    "Problems and solutions": {
      balanced: [
        "This problem is driven by several identifiable causes, and it can be reduced through practical, targeted solutions.",
        "Although this issue is serious, it is not unavoidable, and effective action can still address its main causes.",
        "This essay argues that the problem stems from clear factors and that realistic intervention can reduce its impact."
      ],
      support: [
        "This issue is serious, but I believe it can be addressed successfully through focused and realistic action.",
        "Although the problem has become more visible, effective solutions are available if governments and individuals respond early enough.",
        "In my view, the causes of this issue are clear, and well-designed solutions can make a real difference."
      ],
      oppose: [
        "Although solutions are often proposed for this issue, I believe many of them are too narrow to solve the deeper problem.",
        "This problem is more complex than it first appears, which is why simple solutions are unlikely to be enough.",
        "While action is necessary, the most common responses fail to address the underlying causes effectively."
      ]
    },
    "Two-part question": {
      balanced: [
        "This essay will first explain the main reasons behind this trend and then suggest the most effective way to respond to it.",
        "In my view, this issue can be understood by examining why it happens and by identifying the most realistic way to deal with it.",
        "This topic requires a two-step response: explaining the cause clearly and then evaluating the best solution."
      ],
      support: [
        "The main cause of this trend is clear, and I believe the most practical response is both achievable and effective.",
        "This essay argues that the reasons behind this issue are largely structural and that a focused solution can address them successfully.",
        "Although the causes are varied, the strongest response is the one that tackles the most important factor directly."
      ],
      oppose: [
        "Although one explanation may appear obvious, I believe the issue is driven by deeper factors and therefore needs a broader response.",
        "This trend cannot be explained by a single cause alone, and any effective answer must reflect that complexity.",
        "While common solutions may seem attractive, they are unlikely to work unless the deeper causes are fully addressed."
      ]
    },
    "Opinion / mixed analysis": {
      balanced: [
        "This is a complex issue, but I believe the strongest response is the one that balances practical benefits with long-term consequences.",
        "Although there are several ways to approach this question, the most convincing position is the one that remains realistic and sustainable.",
        "In my view, a balanced judgement is needed because the issue involves both clear opportunities and meaningful risks."
      ],
      support: [
        "I believe this development is broadly positive because its practical benefits are more significant than its potential drawbacks.",
        "In my view, the strongest argument is the supportive one because it leads to wider and more lasting advantages.",
        "Although some concerns exist, I would argue that the overall impact of this idea is beneficial."
      ],
      oppose: [
        "Although the idea has some appeal, I believe its drawbacks are too serious to ignore.",
        "In my view, this issue should be approached more cautiously because the risks outweigh the likely gains.",
        "While the proposal may offer some benefits, I would argue that its negative consequences are ultimately more significant."
      ]
    }
  };

  const bank = templates[questionType] || templates["Opinion / mixed analysis"];
  return bank[focusMode] || bank.balanced;
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
  const theses = buildThesisSuggestions(questionType, stanceSelect.value);

  questionTypeLabel.textContent = `${questionType} · ${library.theme}`;
  recommendedStance.textContent = strategy.stance;
  thesisMove.textContent = strategy.thesis;
  paragraphPath.textContent = strategy.path;
  promptLens.textContent = strategy.lens;
  scoreFocus.textContent = strategy.score;

  renderList(thesisList, theses);
  renderList(listTargets.support, result.support);
  renderList(listTargets.oppose, result.oppose);
  renderList(listTargets.middle, result.middle);
  renderList(listTargets.examples, result.examples);
  renderList(listTargets.warnings, result.warnings);

  copyButton.dataset.outline = buildOutlineText(prompt, questionType, result);
  copyThesisButton.dataset.theses = theses.join("\n");
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

async function copyTheses() {
  const theses = copyThesisButton.dataset.theses;
  if (!theses) {
    return;
  }

  try {
    await navigator.clipboard.writeText(theses);
    copyThesisButton.textContent = "Copied";
    window.setTimeout(() => {
      copyThesisButton.textContent = "Copy theses";
    }, 1400);
  } catch (_error) {
    copyThesisButton.textContent = "Copy failed";
    window.setTimeout(() => {
      copyThesisButton.textContent = "Copy theses";
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
  thesisList.innerHTML = "<li>Generate a prompt first to see thesis sentence suggestions.</li>";
  Object.values(listTargets).forEach((element) => {
    element.innerHTML = "<li>Start with a prompt to generate ideas.</li>";
  });
  delete copyButton.dataset.outline;
  delete copyThesisButton.dataset.theses;
});

generateButton.addEventListener("click", generateArgumentMap);
copyButton.addEventListener("click", copyOutline);
copyThesisButton.addEventListener("click", copyTheses);

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
