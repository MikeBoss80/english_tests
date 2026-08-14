// data/b1-questions.js
// Banco de preguntas B1 COMPLETO (Grammar, Vocabulary, Reading, Language Use / Context)

export const B1_RAW = {
    metadata: {
        level: "B1",
        sections: {
            grammar: "Grammar",
            vocabulary: "Vocabulary",
            reading: "Reading",
            language_use: "Language Use"
        }
    },
    questions: [
        // ============================================================
        // GRAMMAR (40 preguntas)
        // ============================================================
        
        // Past Perfect (4 preguntas)
        {
            id: "B1-GRAM-001",
            section: "grammar",
            topic: "past_perfect",
            difficulty: 3,
            type: "true_false",
            question: "True or False: 'When I arrived, the meeting had already started' uses past perfect correctly.",
            options: ["True", "False"],
            answer: "True",
            explanation: "Past perfect (had started) marks the action completed before another past action."
        },
        {
            id: "B1-GRAM-002",
            section: "grammar",
            topic: "past_perfect",
            difficulty: 3,
            type: "multiple_choice",
            question: "I realized I ___ my keys at home.",
            options: ["left", "had left", "have left", "was leaving"],
            answer: "had left",
            explanation: "Past perfect for an action completed before another past action."
        },
        {
            id: "B1-GRAM-003",
            section: "grammar",
            topic: "past_perfect",
            difficulty: 3,
            type: "fill_blank",
            question: "By the time we arrived, the movie _____ (already / start).",
            answer: "had already started",
            explanation: "Past perfect: had + past participle."
        },
        {
            id: "B1-GRAM-004",
            section: "grammar",
            topic: "past_perfect",
            difficulty: 3,
            type: "multiple_choice",
            question: "She was tired because she ___ all day.",
            options: ["worked", "had worked", "was working", "has worked"],
            answer: "had worked",
            explanation: "Past perfect for a completed action that caused a past result."
        },

        // Reported Speech (4 preguntas)
        {
            id: "B1-GRAM-005",
            section: "grammar",
            topic: "reported_speech",
            difficulty: 3,
            type: "multiple_choice",
            question: "She said she ___ working very hard.",
            options: ["is", "am", "was", "be"],
            answer: "was",
            explanation: "In reported speech, present simple usually becomes past simple."
        },
        {
            id: "B1-GRAM-006",
            section: "grammar",
            topic: "reported_speech",
            difficulty: 3,
            type: "multiple_choice",
            question: "He told me he ___ to London the following week.",
            options: ["will go", "would go", "went", "goes"],
            answer: "would go",
            explanation: "'Will' becomes 'would' in reported speech."
        },
        {
            id: "B1-GRAM-007",
            section: "grammar",
            topic: "reported_speech",
            difficulty: 3,
            type: "fill_blank",
            question: "She asked me where I _____ (live).",
            answer: "lived",
            explanation: "Reported questions have subject + verb order."
        },
        {
            id: "B1-GRAM-008",
            section: "grammar",
            topic: "reported_speech",
            difficulty: 3,
            type: "multiple_choice",
            question: "They said they ___ a great time at the party.",
            options: ["have", "had", "having", "were"],
            answer: "had",
            explanation: "Present perfect becomes past perfect in reported speech."
        },

        // Third Conditional (4 preguntas)
        {
            id: "B1-GRAM-009",
            section: "grammar",
            topic: "third_conditional",
            difficulty: 3,
            type: "multiple_choice",
            question: "If I had studied harder, I ___ the exam.",
            options: ["would pass", "would have passed", "will pass", "passed"],
            answer: "would have passed",
            explanation: "Third conditional: If + past perfect, would have + past participle."
        },
        {
            id: "B1-GRAM-010",
            section: "grammar",
            topic: "third_conditional",
            difficulty: 3,
            type: "multiple_choice",
            question: "If she had known, she ___ the job offer.",
            options: ["would take", "would have taken", "will take", "took"],
            answer: "would have taken",
            explanation: "Third conditional for unreal past situations."
        },
        {
            id: "B1-GRAM-011",
            section: "grammar",
            topic: "third_conditional",
            difficulty: 4,
            type: "fill_blank",
            question: "If we _____ (not / miss) the bus, we wouldn't have been late.",
            answer: "hadn't missed",
            explanation: "Third conditional: past perfect in the if-clause."
        },
        {
            id: "B1-GRAM-012",
            section: "grammar",
            topic: "third_conditional",
            difficulty: 3,
            type: "select_correct",
            question: "Choose the correct sentence.",
            options: [
                "If I would have known, I would have come.",
                "If I had known, I would have come.",
                "If I knew, I would have come.",
                "If I have known, I would have come."
            ],
            answer: "If I had known, I would have come.",
            explanation: "Correct third conditional structure."
        },

        // Future Continuous and Future Perfect (4 preguntas)
        {
            id: "B1-GRAM-013",
            section: "grammar",
            topic: "future_continuous",
            difficulty: 3,
            type: "multiple_choice",
            question: "This time next week, we ___ in Madrid.",
            options: ["will fly", "will be flying", "fly", "are flying"],
            answer: "will be flying",
            explanation: "Future continuous: will be + -ing for an action in progress at a future time."
        },
        {
            id: "B1-GRAM-014",
            section: "grammar",
            topic: "future_perfect",
            difficulty: 3,
            type: "multiple_choice",
            question: "By 2025, she ___ here for 10 years.",
            options: ["will work", "will have worked", "works", "has worked"],
            answer: "will have worked",
            explanation: "Future perfect: will have + past participle for an action completed by a future time."
        },
        {
            id: "B1-GRAM-015",
            section: "grammar",
            topic: "future_perfect",
            difficulty: 3,
            type: "fill_blank",
            question: "They _____ (finish) the project by Friday.",
            answer: "will have finished",
            explanation: "Future perfect for completion by a specific future time."
        },
        {
            id: "B1-GRAM-016",
            section: "grammar",
            topic: "future_continuous",
            difficulty: 3,
            type: "multiple_choice",
            question: "Don't call me at 8 PM. I ___ dinner.",
            options: ["will have", "will be having", "have", "am having"],
            answer: "will be having",
            explanation: "Future continuous for an action in progress at a specific future time."
        },

        // Present Perfect Continuous (4 preguntas)
        {
            id: "B1-GRAM-017",
            section: "grammar",
            topic: "present_perfect_continuous",
            difficulty: 3,
            type: "fill_blank",
            question: "He has been ___ French for two years.",
            answer: "learning",
            explanation: "Present perfect continuous: has/have been + verb-ing."
        },
        {
            id: "B1-GRAM-018",
            section: "grammar",
            topic: "present_perfect_continuous",
            difficulty: 3,
            type: "multiple_choice",
            question: "I ___ here since 8 AM.",
            options: ["have waited", "have been waiting", "wait", "am waiting"],
            answer: "have been waiting",
            explanation: "Present perfect continuous for an action that started in the past and continues."
        },
        {
            id: "B1-GRAM-019",
            section: "grammar",
            topic: "present_perfect_continuous",
            difficulty: 3,
            type: "multiple_choice",
            question: "You look tired. ___ you ___ all day?",
            options: ["Have / been working", "Have / worked", "Did / work", "Are / working"],
            answer: "Have / been working",
            explanation: "Present perfect continuous for an action with visible results."
        },
        {
            id: "B1-GRAM-020",
            section: "grammar",
            topic: "present_perfect_continuous",
            difficulty: 3,
            type: "fill_blank",
            question: "She _____ (study) English since she was a child.",
            answer: "has been studying",
            explanation: "Use present perfect continuous with 'since' for ongoing actions."
        },

        // Modal Perfects (4 preguntas)
        {
            id: "B1-GRAM-021",
            section: "grammar",
            topic: "modals_perfect",
            difficulty: 3,
            type: "multiple_choice",
            question: "You ___ have called me. I waited for an hour.",
            options: ["should", "shouldn't", "must", "can"],
            answer: "should",
            explanation: "Modal perfect: should have + past participle to criticize a past action."
        },
        {
            id: "B1-GRAM-022",
            section: "grammar",
            topic: "modals_perfect",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ have told him. It was a secret.",
            options: ["shouldn't", "mustn't", "couldn't", "wouldn't"],
            answer: "shouldn't",
            explanation: "Shouldn't have + past participle for criticism of a past action."
        },
        {
            id: "B1-GRAM-023",
            section: "grammar",
            topic: "modals_perfect",
            difficulty: 4,
            type: "multiple_choice",
            question: "He ___ have been at the party. I saw his car.",
            options: ["must", "should", "could", "would"],
            answer: "must",
            explanation: "Must have + past participle for a strong deduction about the past."
        },
        {
            id: "B1-GRAM-024",
            section: "grammar",
            topic: "modals_perfect",
            difficulty: 4,
            type: "multiple_choice",
            question: "She ___ have left already. Her keys are still here.",
            options: ["can't", "mustn't", "shouldn't", "won't"],
            answer: "can't",
            explanation: "Can't have + past participle for a negative deduction about the past."
        },

        // Passive - All Tenses (4 preguntas)
        {
            id: "B1-GRAM-025",
            section: "grammar",
            topic: "passive",
            difficulty: 3,
            type: "multiple_choice",
            question: "A new supermarket is ___ built near my house.",
            options: ["been", "being", "be", "was"],
            answer: "being",
            explanation: "Passive continuous: to be + being + past participle."
        },
        {
            id: "B1-GRAM-026",
            section: "grammar",
            topic: "passive",
            difficulty: 3,
            type: "multiple_choice",
            question: "The letter ___ sent yesterday.",
            options: ["was", "is", "will be", "has been"],
            answer: "was",
            explanation: "Past simple passive: was/were + past participle."
        },
        {
            id: "B1-GRAM-027",
            section: "grammar",
            topic: "passive",
            difficulty: 3,
            type: "fill_blank",
            question: "The report _____ (write) by the manager.",
            answer: "was written",
            explanation: "Passive: be + past participle."
        },
        {
            id: "B1-GRAM-028",
            section: "grammar",
            topic: "passive",
            difficulty: 4,
            type: "multiple_choice",
            question: "The house ___ since 2010.",
            options: ["hasn't been painted", "wasn't painted", "isn't painted", "won't be painted"],
            answer: "hasn't been painted",
            explanation: "Present perfect passive: have/has been + past participle."
        },

        // Wish Structures (4 preguntas)
        {
            id: "B1-GRAM-029",
            section: "grammar",
            topic: "wish_structures",
            difficulty: 3,
            type: "multiple_choice",
            question: "I wish I ___ more time to travel.",
            options: ["have", "had", "will have", "having"],
            answer: "had",
            explanation: "I wish + past simple for situations that are not real now."
        },
        {
            id: "B1-GRAM-030",
            section: "grammar",
            topic: "wish_structures",
            difficulty: 3,
            type: "multiple_choice",
            question: "I wish I ___ English better.",
            options: ["speak", "spoke", "spoken", "speaking"],
            answer: "spoke",
            explanation: "I wish + past simple for unreal present situations."
        },
        {
            id: "B1-GRAM-031",
            section: "grammar",
            topic: "wish_structures",
            difficulty: 4,
            type: "multiple_choice",
            question: "I wish I ___ studied harder for the exam.",
            options: ["have", "had", "will", "would"],
            answer: "had",
            explanation: "I wish + past perfect for regret about the past."
        },
        {
            id: "B1-GRAM-032",
            section: "grammar",
            topic: "wish_structures",
            difficulty: 3,
            type: "fill_blank",
            question: "I wish she _____ (be) here with us now.",
            answer: "were",
            explanation: "Use 'were' (not 'was') with wish for all subjects (formal)."
        },

        // Gerunds and Infinitives - Advanced (4 preguntas)
        {
            id: "B1-GRAM-033",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 3,
            type: "multiple_choice",
            question: "I remember ___ the door before leaving.",
            options: ["locking", "to lock", "locked", "lock"],
            answer: "locking",
            explanation: "'Remember' + gerund for a past memory."
        },
        {
            id: "B1-GRAM-034",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 3,
            type: "multiple_choice",
            question: "Please remember ___ the door when you leave.",
            options: ["locking", "to lock", "locked", "lock"],
            answer: "to lock",
            explanation: "'Remember' + infinitive for a future obligation."
        },
        {
            id: "B1-GRAM-035",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 4,
            type: "multiple_choice",
            question: "He stopped ___ a cigarette before entering.",
            options: ["to smoke", "smoking", "smoked", "smoke"],
            answer: "to smoke",
            explanation: "'Stop' + infinitive means to pause an action to do something else."
        },
        {
            id: "B1-GRAM-036",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 4,
            type: "multiple_choice",
            question: "I've been meaning ___ you for ages.",
            options: ["call", "calling", "to call", "called"],
            answer: "to call",
            explanation: "'Mean' + infinitive for an intention."
        },

        // Phrasal Verbs - Grammar (4 preguntas)
        {
            id: "B1-GRAM-037",
            section: "grammar",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "multiple_choice",
            question: "I need to ___ up my room. It's a mess.",
            options: ["clean", "tidy", "clear", "wash"],
            answer: "tidy",
            explanation: "'Tidy up' means to organize and clean."
        },
        {
            id: "B1-GRAM-038",
            section: "grammar",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "multiple_choice",
            question: "The meeting was ___ off until next week.",
            options: ["put", "taken", "called", "held"],
            answer: "put",
            explanation: "'Put off' means to postpone."
        },
        {
            id: "B1-GRAM-039",
            section: "grammar",
            topic: "phrasal_verbs",
            difficulty: 4,
            type: "fill_blank",
            question: "Can you _____ (look) after my cat while I'm away?",
            answer: "look",
            explanation: "'Look after' means to take care of."
        },
        {
            id: "B1-GRAM-040",
            section: "grammar",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ up a new hobby to meet people.",
            options: ["took", "gave", "made", "went"],
            answer: "took",
            explanation: "'Take up' means to start a new activity."
        },

        // ============================================================
        // VOCABULARY (30 preguntas)
        // ============================================================
        
        // Idioms (4 preguntas)
        {
            id: "B1-VOC-001",
            section: "vocabulary",
            topic: "idioms",
            difficulty: 3,
            type: "image_context",
            question: "Use the image context to complete the idiom: 'He's under the ___.'",
            image: {
                assetId: "b1-sick-at-office",
                description: "An office worker looking pale, wrapped in a blanket, with a thermometer and tissues on the desk."
            },
            options: ["weather", "table", "rain", "moon"],
            answer: "weather",
            explanation: "'Under the weather' means feeling ill."
        },
        {
            id: "B1-VOC-002",
            section: "vocabulary",
            topic: "idioms",
            difficulty: 3,
            type: "multiple_choice",
            question: "It's raining cats and ___ outside!",
            options: ["dogs", "birds", "fish", "horses"],
            answer: "dogs",
            explanation: "'Raining cats and dogs' means raining heavily."
        },
        {
            id: "B1-VOC-003",
            section: "vocabulary",
            topic: "idioms",
            difficulty: 3,
            type: "multiple_choice",
            question: "I'm so busy. I have a lot on my ___ right now.",
            options: ["plate", "table", "chair", "floor"],
            answer: "plate",
            explanation: "'Have a lot on your plate' means having many responsibilities."
        },
        {
            id: "B1-VOC-004",
            section: "vocabulary",
            topic: "idioms",
            difficulty: 4,
            type: "multiple_choice",
            question: "Don't worry, it's just a storm in a ___.",
            options: ["teacup", "glass", "cup", "pot"],
            answer: "teacup",
            explanation: "'Storm in a teacup' means making a big deal out of nothing."
        },

        // Personality Traits (4 preguntas)
        {
            id: "B1-VOC-005",
            section: "vocabulary",
            topic: "personality",
            difficulty: 3,
            type: "multiple_choice",
            question: "She always helps others. She's very ___.",
            options: ["generous", "selfish", "lazy", "strict"],
            answer: "generous",
            explanation: "'Generous' means giving and kind."
        },
        {
            id: "B1-VOC-006",
            section: "vocabulary",
            topic: "personality",
            difficulty: 3,
            type: "multiple_choice",
            question: "He never gives up. He's very ___.",
            options: ["persistent", "lazy", "shy", "pessimistic"],
            answer: "persistent",
            explanation: "'Persistent' means determined and not giving up."
        },
        {
            id: "B1-VOC-007",
            section: "vocabulary",
            topic: "personality",
            difficulty: 3,
            type: "multiple_choice",
            question: "She makes decisions easily. She's very ___.",
            options: ["decisive", "indecisive", "careful", "uncertain"],
            answer: "decisive",
            explanation: "'Decisive' means making decisions quickly."
        },
        {
            id: "B1-VOC-008",
            section: "vocabulary",
            topic: "personality",
            difficulty: 3,
            type: "multiple_choice",
            question: "He always sees the good side of things. He's ___.",
            options: ["optimistic", "pessimistic", "realistic", "neutral"],
            answer: "optimistic",
            explanation: "'Optimistic' means expecting good outcomes."
        },

        // Workplace Vocabulary (4 preguntas)
        {
            id: "B1-VOC-009",
            section: "vocabulary",
            topic: "work",
            difficulty: 2,
            type: "multiple_choice",
            question: "I work as a software ___ for a tech company.",
            options: ["developer", "driver", "cashier", "chef"],
            answer: "developer",
            explanation: "A software developer writes computer programs."
        },
        {
            id: "B1-VOC-010",
            section: "vocabulary",
            topic: "work",
            difficulty: 3,
            type: "multiple_choice",
            question: "She got a ___ in marketing from a top university.",
            options: ["degree", "grade", "credit", "course"],
            answer: "degree",
            explanation: "A 'degree' is a qualification from a university."
        },
        {
            id: "B1-VOC-011",
            section: "vocabulary",
            topic: "office_language",
            difficulty: 3,
            type: "multiple_choice",
            question: "Please ___ the documents to the email before sending it.",
            options: ["attach", "detach", "delete", "lose"],
            answer: "attach",
            explanation: "You attach files to an email."
        },
        {
            id: "B1-VOC-012",
            section: "vocabulary",
            topic: "office_language",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need to ___ my English before the job interview.",
            options: ["improve", "worsen", "ignore", "spend"],
            answer: "improve",
            explanation: "'To improve' means to make something better."
        },

        // Problem Solving (4 preguntas)
        {
            id: "B1-VOC-013",
            section: "vocabulary",
            topic: "problem_solving",
            difficulty: 3,
            type: "multiple_choice",
            question: "We need to ___ this problem before it gets worse.",
            options: ["solve", "ignore", "create", "delay"],
            answer: "solve",
            explanation: "'To solve' means to find a solution."
        },
        {
            id: "B1-VOC-014",
            section: "vocabulary",
            topic: "problem_solving",
            difficulty: 3,
            type: "multiple_choice",
            question: "The software has a few ___ that need fixing.",
            options: ["bugs", "features", "updates", "versions"],
            answer: "bugs",
            explanation: "'Bugs' are errors or problems in software."
        },
        {
            id: "B1-VOC-015",
            section: "vocabulary",
            topic: "problem_solving",
            difficulty: 3,
            type: "multiple_choice",
            question: "We need to find a ___ to this problem.",
            options: ["solution", "problem", "question", "issue"],
            answer: "solution",
            explanation: "'Solution' is the answer to a problem."
        },
        {
            id: "B1-VOC-016",
            section: "vocabulary",
            topic: "problem_solving",
            difficulty: 3,
            type: "multiple_choice",
            question: "Let's ___ this issue step by step.",
            options: ["approach", "avoid", "delay", "forget"],
            answer: "approach",
            explanation: "To 'approach' a problem means to start dealing with it."
        },

        // Education (4 preguntas)
        {
            id: "B1-VOC-017",
            section: "vocabulary",
            topic: "education",
            difficulty: 3,
            type: "multiple_choice",
            question: "She's ___ for her final exams this week.",
            options: ["studying", "working", "playing", "sleeping"],
            answer: "studying",
            explanation: "You 'study' for exams."
        },
        {
            id: "B1-VOC-018",
            section: "vocabulary",
            topic: "education",
            difficulty: 3,
            type: "multiple_choice",
            question: "I need to ___ the material before the test.",
            options: ["review", "ignore", "throw", "copy"],
            answer: "review",
            explanation: "'Review' means to look over material again."
        },
        {
            id: "B1-VOC-019",
            section: "vocabulary",
            topic: "education",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ her degree in 2019.",
            options: ["completed", "started", "failed", "quit"],
            answer: "completed",
            explanation: "You 'complete' or 'finish' a degree."
        },
        {
            id: "B1-VOC-020",
            section: "vocabulary",
            topic: "education",
            difficulty: 3,
            type: "multiple_choice",
            question: "The professor ___ the assignment in detail.",
            options: ["explained", "ignored", "copied", "lost"],
            answer: "explained",
            explanation: "Professors 'explain' assignments to students."
        },

        // Technology (4 preguntas)
        {
            id: "B1-VOC-021",
            section: "vocabulary",
            topic: "technology",
            difficulty: 3,
            type: "multiple_choice",
            question: "You need to ___ your software regularly.",
            options: ["update", "delete", "forget", "hide"],
            answer: "update",
            explanation: "You 'update' software to get the latest version."
        },
        {
            id: "B1-VOC-022",
            section: "vocabulary",
            topic: "technology",
            difficulty: 3,
            type: "multiple_choice",
            question: "I forgot my password and can't ___ to my account.",
            options: ["access", "find", "look", "see"],
            answer: "access",
            explanation: "To 'access' means to enter or use a system."
        },
        {
            id: "B1-VOC-023",
            section: "vocabulary",
            topic: "technology",
            difficulty: 3,
            type: "multiple_choice",
            question: "I need to ___ some files for my project.",
            options: ["download", "upload", "delete", "copy"],
            answer: "download",
            explanation: "You 'download' files from the internet to your device."
        },
        {
            id: "B1-VOC-024",
            section: "vocabulary",
            topic: "technology",
            difficulty: 3,
            type: "multiple_choice",
            question: "The computer is ___ slowly today.",
            options: ["running", "walking", "talking", "reading"],
            answer: "running",
            explanation: "Computers 'run' programs and processes."
        },

        // Environment (3 preguntas)
        {
            id: "B1-VOC-025",
            section: "vocabulary",
            topic: "environment",
            difficulty: 3,
            type: "multiple_choice",
            question: "We need to reduce our ___ footprint.",
            options: ["carbon", "water", "air", "earth"],
            answer: "carbon",
            explanation: "A 'carbon footprint' is the amount of CO2 we produce."
        },
        {
            id: "B1-VOC-026",
            section: "vocabulary",
            topic: "environment",
            difficulty: 3,
            type: "multiple_choice",
            question: "Many countries are investing in ___ energy.",
            options: ["renewable", "traditional", "old", "new"],
            answer: "renewable",
            explanation: "Renewable energy comes from sources like solar and wind."
        },
        {
            id: "B1-VOC-027",
            section: "vocabulary",
            topic: "environment",
            difficulty: 3,
            type: "multiple_choice",
            question: "Air ___ is a major problem in big cities.",
            options: ["pollution", "cleanliness", "freshness", "clarity"],
            answer: "pollution",
            explanation: "'Pollution' is the contamination of the environment."
        },

        // Money (3 preguntas)
        {
            id: "B1-VOC-028",
            section: "vocabulary",
            topic: "money",
            difficulty: 3,
            type: "multiple_choice",
            question: "I need to ___ money for a new car.",
            options: ["save", "spend", "waste", "lose"],
            answer: "save",
            explanation: "To 'save' money means to keep it for future use."
        },
        {
            id: "B1-VOC-029",
            section: "vocabulary",
            topic: "money",
            difficulty: 3,
            type: "multiple_choice",
            question: "The ___ of living has increased this year.",
            options: ["cost", "price", "value", "worth"],
            answer: "cost",
            explanation: "'Cost of living' refers to the amount needed to live."
        },
        {
            id: "B1-VOC-030",
            section: "vocabulary",
            topic: "money",
            difficulty: 3,
            type: "multiple_choice",
            question: "I got a ___ from the bank to buy a house.",
            options: ["loan", "gift", "card", "account"],
            answer: "loan",
            explanation: "A 'loan' is money you borrow from a bank."
        },

        // ============================================================
        // READING (30 preguntas - 6 textos con 5 preguntas cada uno)
        // ============================================================
        
        // Reading 1: Working from Home (5 preguntas)
        {
            id: "B1-READ-001",
            section: "reading",
            topic: "reading_b1",
            difficulty: 3,
            type: "reading",
            passageTitle: "Working from Home",
            passage: "Working from home has become very popular in recent years. Many companies now let their employees work remotely for part of the week. There are clear benefits: people save time on their commute and can manage their own schedule. However, working from home also has disadvantages. Some workers feel isolated and find it hard to switch off after work. Experts say the ideal solution is a balance between going to the office and working from home, so employees get the best of both worlds.",
            questions: [
                {
                    question: "What is a benefit of working from home mentioned in the text?",
                    options: [
                        "You earn more money",
                        "You save time on your commute",
                        "You meet more colleagues",
                        "You work fewer hours"
                    ],
                    answer: "You save time on your commute",
                    explanation: "The text says people save time on their commute."
                },
                {
                    question: "What disadvantage do some workers feel?",
                    options: ["They feel isolated", "They sleep a lot", "They travel too much", "They earn less"],
                    answer: "They feel isolated",
                    explanation: "Some workers feel isolated and find it hard to switch off."
                },
                {
                    question: "What is the recommended solution?",
                    options: [
                        "Work from home every day",
                        "Never work from home",
                        "A balance between office and home",
                        "Move to a new city"
                    ],
                    answer: "A balance between office and home",
                    explanation: "Experts recommend a balance between office and home."
                },
                {
                    question: "According to the text, what do companies let employees do?",
                    options: [
                        "Work fewer hours",
                        "Work remotely for part of the week",
                        "Take more vacation",
                        "Change their job"
                    ],
                    answer: "Work remotely for part of the week",
                    explanation: "Many companies let employees work remotely for part of the week."
                },
                {
                    question: "What is the main idea of the text?",
                    options: [
                        "Working from home is only positive",
                        "Working from home has both advantages and disadvantages",
                        "Working from home should be banned",
                        "Everyone should work from home"
                    ],
                    answer: "Working from home has both advantages and disadvantages",
                    explanation: "The text discusses both benefits and disadvantages."
                }
            ]
        },

        // Reading 2: Digital Detox (5 preguntas)
        {
            id: "B1-READ-002",
            section: "reading",
            topic: "reading_b1",
            difficulty: 3,
            type: "reading",
            passageTitle: "The Digital Detox Movement",
            passage: "More and more people are taking 'digital detoxes' - periods of time when they disconnect from their phones, computers, and social media. The constant notifications and endless scrolling can be overwhelming and harmful to mental health. A digital detox allows people to be more present in the moment and sleep better. Some people try to limit screen time to one hour before bed. Others take a full weekend offline every month. While it's difficult at first, many people report feeling calmer and more focused after a digital detox.",
            questions: [
                {
                    question: "What is a 'digital detox'?",
                    options: [
                        "A new type of phone",
                        "A period of disconnecting from technology",
                        "A new social media app",
                        "A type of digital camera"
                    ],
                    answer: "A period of disconnecting from technology",
                    explanation: "A digital detox is a period of disconnecting from phones and computers."
                },
                {
                    question: "What is a benefit of a digital detox?",
                    options: [
                        "You can use more apps",
                        "You can sleep better",
                        "You can post more photos",
                        "You can work more"
                    ],
                    answer: "You can sleep better",
                    explanation: "A digital detox allows people to sleep better."
                },
                {
                    question: "How do some people limit screen time?",
                    options: [
                        "Use screens 24/7",
                        "Limit screen time to one hour before bed",
                        "Never use screens",
                        "Use screens only at work"
                    ],
                    answer: "Limit screen time to one hour before bed",
                    explanation: "Some people try to limit screen time to one hour before bed."
                },
                {
                    question: "How do people feel after a digital detox?",
                    options: [
                        "More stressed",
                        "Calmer and more focused",
                        "More tired",
                        "More confused"
                    ],
                    answer: "Calmer and more focused",
                    explanation: "People feel calmer and more focused after a digital detox."
                },
                {
                    question: "What is the main reason people take a digital detox?",
                    options: [
                        "To use more social media",
                        "To improve their mental health",
                        "To buy new technology",
                        "To work less"
                    ],
                    answer: "To improve their mental health",
                    explanation: "The text mentions digital detox helps mental health."
                }
            ]
        },

        // Reading 3: Volunteering (5 preguntas)
        {
            id: "B1-READ-003",
            section: "reading",
            topic: "reading_b1",
            difficulty: 3,
            type: "reading",
            passageTitle: "The Benefits of Volunteering",
            passage: "Volunteering is an excellent way to give back to your community while developing new skills. Many people volunteer at local charities, hospitals, or schools. Benefits include gaining new experiences, meeting new people, and improving your resume. Studies show that volunteers are generally happier and healthier than non-volunteers. There are many types of volunteering available, from working with animals to teaching English to immigrants. Even a few hours a month can make a real difference.",
            questions: [
                {
                    question: "What is the main benefit of volunteering mentioned?",
                    options: [
                        "Earning more money",
                        "Gaining new experiences",
                        "Getting a promotion",
                        "Travelling more"
                    ],
                    answer: "Gaining new experiences",
                    explanation: "Volunteering helps gain new experiences."
                },
                {
                    question: "Where do people volunteer?",
                    options: [
                        "Only at hospitals",
                        "At local charities, hospitals, or schools",
                        "Only at schools",
                        "Only at charities"
                    ],
                    answer: "At local charities, hospitals, or schools",
                    explanation: "People volunteer at charities, hospitals, or schools."
                },
                {
                    question: "How do volunteers compare to non-volunteers?",
                    options: [
                        "They are poorer",
                        "They are happier and healthier",
                        "They are busier",
                        "They are sadder"
                    ],
                    answer: "They are happier and healthier",
                    explanation: "Volunteers are generally happier and healthier."
                },
                {
                    question: "What types of volunteering are mentioned?",
                    options: [
                        "Only working with animals",
                        "Working with animals and teaching English",
                        "Only teaching English",
                        "Only helping the elderly"
                    ],
                    answer: "Working with animals and teaching English",
                    explanation: "The text mentions working with animals and teaching English."
                },
                {
                    question: "How much time do you need to volunteer?",
                    options: [
                        "A full-time job",
                        "Even a few hours a month",
                        "At least 40 hours a week",
                        "One year minimum"
                    ],
                    answer: "Even a few hours a month",
                    explanation: "Even a few hours a month can make a difference."
                }
            ]
        },

        // Reading 4: The Future of Work (5 preguntas)
        {
            id: "B1-READ-004",
            section: "reading",
            topic: "reading_b1",
            difficulty: 4,
            type: "reading",
            passageTitle: "The Future of Work",
            passage: "The world of work is changing rapidly. Automation and artificial intelligence are replacing many routine jobs. At the same time, new jobs are being created in technology and green energy. Experts predict that people will need to change careers several times during their lives. Lifelong learning will become essential. Soft skills like problem-solving, creativity, and emotional intelligence will be increasingly valuable. Employers are looking for people who can adapt quickly to change and work well in diverse teams.",
            questions: [
                {
                    question: "What is replacing many routine jobs?",
                    options: [
                        "More workers",
                        "Automation and AI",
                        "Smaller companies",
                        "Government programs"
                    ],
                    answer: "Automation and AI",
                    explanation: "Automation and AI are replacing routine jobs."
                },
                {
                    question: "What new job areas are mentioned?",
                    options: [
                        "Only technology",
                        "Technology and green energy",
                        "Only green energy",
                        "Healthcare and education"
                    ],
                    answer: "Technology and green energy",
                    explanation: "New jobs are being created in technology and green energy."
                },
                {
                    question: "What skills will be increasingly valuable?",
                    options: [
                        "Only technical skills",
                        "Soft skills like problem-solving and creativity",
                        "Only administrative skills",
                        "Only language skills"
                    ],
                    answer: "Soft skills like problem-solving and creativity",
                    explanation: "Soft skills like problem-solving and creativity will be valuable."
                },
                {
                    question: "What will people need to do several times in their lives?",
                    options: [
                        "Change jobs",
                        "Change careers",
                        "Change cities",
                        "Change countries"
                    ],
                    answer: "Change careers",
                    explanation: "People will need to change careers several times."
                },
                {
                    question: "What will become essential according to the text?",
                    options: [
                        "Lifelong learning",
                        "Working harder",
                        "Finding a stable job",
                        "Retiring early"
                    ],
                    answer: "Lifelong learning",
                    explanation: "Lifelong learning will become essential."
                }
            ]
        },

        // Reading 5: Sustainable Living (5 preguntas)
        {
            id: "B1-READ-005",
            section: "reading",
            topic: "reading_b1",
            difficulty: 3,
            type: "reading",
            passageTitle: "Living Sustainably",
            passage: "Many people are trying to live more sustainably by reducing their environmental impact. Simple changes can make a big difference. Using reusable bags, reducing water waste, and recycling are small but important steps. Some people are also choosing to eat less meat and buy local products. Sustainable living isn't just about the environment - it can also save money. For example, using less energy at home reduces electricity bills. Governments are supporting sustainable living through tax breaks and subsidies for green energy.",
            questions: [
                {
                    question: "What is the main idea of the text?",
                    options: [
                        "Living sustainably is difficult",
                        "Living sustainably is only for rich people",
                        "Living sustainably involves simple changes that help the environment",
                        "Living sustainably is a new trend"
                    ],
                    answer: "Living sustainably involves simple changes that help the environment",
                    explanation: "The text discusses simple changes that help the environment."
                },
                {
                    question: "What are small steps mentioned in the text?",
                    options: [
                        "Using reusable bags, reducing water waste, and recycling",
                        "Buying expensive cars",
                        "Eating more meat",
                        "Using more plastic"
                    ],
                    answer: "Using reusable bags, reducing water waste, and recycling",
                    explanation: "These are small steps mentioned in the text."
                },
                {
                    question: "What are some people choosing to do?",
                    options: [
                        "Eat more meat",
                        "Eat less meat and buy local products",
                        "Buy more imported products",
                        "Eat more processed food"
                    ],
                    answer: "Eat less meat and buy local products",
                    explanation: "Some people are choosing to eat less meat and buy local."
                },
                {
                    question: "What is an extra benefit of sustainable living?",
                    options: [
                        "It makes you rich",
                        "It can save you money",
                        "It makes you famous",
                        "It takes less time"
                    ],
                    answer: "It can save you money",
                    explanation: "Sustainable living can save money."
                },
                {
                    question: "How are governments supporting sustainable living?",
                    options: [
                        "By making it more expensive",
                        "Through tax breaks and subsidies for green energy",
                        "By banning it",
                        "By ignoring it"
                    ],
                    answer: "Through tax breaks and subsidies for green energy",
                    explanation: "Governments support sustainable living through tax breaks and subsidies."
                }
            ]
        },

        // Reading 6: Social Media's Impact (5 preguntas)
        {
            id: "B1-READ-006",
            section: "reading",
            topic: "reading_b1",
            difficulty: 4,
            type: "reading",
            passageTitle: "The Impact of Social Media on Relationships",
            passage: "Social media has dramatically changed how we form and maintain relationships. While it can help people stay connected across long distances, it also has downsides. Critics argue that online interactions are often superficial and don't replace real face-to-face connection. There's also the phenomenon of 'FOMO' (fear of missing out), where seeing others' perfect lives online creates anxiety. However, some studies suggest social media can strengthen relationships when used moderately. The key is to use it as a tool, not let it become your primary form of communication.",
            questions: [
                {
                    question: "What is the main topic of the text?",
                    options: [
                        "How to use social media",
                        "The impact of social media on relationships",
                        "How to make friends online",
                        "The benefits of social media"
                    ],
                    answer: "The impact of social media on relationships",
                    explanation: "The text discusses how social media affects relationships."
                },
                {
                    question: "What is 'FOMO' according to the text?",
                    options: [
                        "A new social media app",
                        "Fear of missing out caused by seeing others' lives online",
                        "A type of online game",
                        "A social media platform"
                    ],
                    answer: "Fear of missing out caused by seeing others' lives online",
                    explanation: "'FOMO' is fear of missing out from seeing others' lives online."
                },
                {
                    question: "What do critics say about online interactions?",
                    options: [
                        "They are as good as real interactions",
                        "They are often superficial",
                        "They are better than real interactions",
                        "They don't exist"
                    ],
                    answer: "They are often superficial",
                    explanation: "Critics say online interactions are often superficial."
                },
                {
                    question: "What does the text suggest about using social media?",
                    options: [
                        "Don't use it at all",
                        "Use it as a tool, not a primary form of communication",
                        "Use it all the time",
                        "Only use it for work"
                    ],
                    answer: "Use it as a tool, not a primary form of communication",
                    explanation: "The key is to use it as a tool, not let it become primary communication."
                },
                {
                    question: "What can social media do according to the text?",
                    options: [
                        "Only hurt relationships",
                        "Only help relationships",
                        "Help and hurt relationships",
                        "Doesn't affect relationships"
                    ],
                    answer: "Help and hurt relationships",
                    explanation: "Social media can both help and hurt relationships."
                }
            ]
        },

        // ============================================================
        // LANGUAGE USE / CONTEXT (25 preguntas)
        // ============================================================
        
        // Professional Communication (5 preguntas)
        {
            id: "B1-LU-001",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "open_answer",
            question: "You need to reschedule a meeting. Write one polite sentence using 'Could we...'.",
            answer: "Could we move the meeting to Friday?",
            explanation: "Professional requests are clearer and more polite with forms like 'Could we...'."
        },
        {
            id: "B1-LU-002",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "fill_blank",
            question: "I'm looking forward to ___ from you.",
            answer: "hearing",
            explanation: "'Look forward to' + gerund (-ing)."
        },
        {
            id: "B1-LU-003",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "I wanted to ___ about the project status.",
            options: ["follow up", "follow down", "follow through", "follow over"],
            answer: "follow up",
            explanation: "'Follow up' means to get more information or check progress."
        },
        {
            id: "B1-LU-004",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "We need to ___ a solution to this problem.",
            options: ["come up with", "come up for", "come up to", "come up at"],
            answer: "come up with",
            explanation: "'Come up with' means to think of or produce an idea or solution."
        },
        {
            id: "B1-LU-005",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "fill_blank",
            question: "I'll get back to you as soon as _____ (possible).",
            answer: "possible",
            explanation: "'As soon as possible' is a common professional phrase."
        },

        // Phrasal Verbs - Context (5 preguntas)
        {
            id: "B1-LU-006",
            section: "language_use",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "matching",
            question: "Match each phrasal verb with its meaning.",
            pairs: [
                { left: "put off", right: "to postpone" },
                { left: "take up", right: "to start a new activity" },
                { left: "get over", right: "to recover from something" },
                { left: "look into", right: "to investigate" },
                { left: "make up", right: "to invent or create" }
            ],
            explanation: "put off = to postpone, take up = to start a new activity, get over = to recover, look into = to investigate, make up = to invent."
        },
        {
            id: "B1-LU-007",
            section: "language_use",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "multiple_choice",
            question: "I've been trying to ___ smoking, but it's difficult.",
            options: ["give up", "give in", "give out", "give off"],
            answer: "give up",
            explanation: "'Give up' means to stop doing something."
        },
        {
            id: "B1-LU-008",
            section: "language_use",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ his behavior as a joke.",
            options: ["played off", "played over", "played under", "played down"],
            answer: "played off",
            explanation: "'Play off' means to treat something as less serious."
        },
        {
            id: "B1-LU-009",
            section: "language_use",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "fill_blank",
            question: "I need to _____ (go) my notes before the exam.",
            answer: "go over",
            explanation: "'Go over' means to review or examine."
        },
        {
            id: "B1-LU-010",
            section: "language_use",
            topic: "phrasal_verbs",
            difficulty: 3,
            type: "multiple_choice",
            question: "They ___ out of the party when no one was looking.",
            options: ["slipped", "walked", "ran", "came"],
            answer: "slipped",
            explanation: "'Slip out' means to leave quietly."
        },

        // Sentence Order (5 preguntas)
        {
            id: "B1-LU-011",
            section: "language_use",
            topic: "sentence_order",
            difficulty: 3,
            type: "ordering",
            question: "Put the words in the correct order.",
            words: ["sunset", "never", "I", "have", "such", "a", "beautiful", "seen"],
            answer: ["I", "have", "never", "seen", "such", "a", "beautiful", "sunset"],
            explanation: "Correct order: I have never seen such a beautiful sunset."
        },
        {
            id: "B1-LU-012",
            section: "language_use",
            topic: "sentence_order",
            difficulty: 4,
            type: "ordering",
            question: "Put the words in the correct order.",
            words: ["the", "she", "most", "is", "interesting", "person", "met", "I've", "ever"],
            answer: ["She", "is", "the", "most", "interesting", "person", "I've", "ever", "met"],
            explanation: "Correct order: She is the most interesting person I've ever met."
        },
        {
            id: "B1-LU-013",
            section: "language_use",
            topic: "sentence_order",
            difficulty: 3,
            type: "ordering",
            question: "Put the words in the correct order.",
            words: ["to", "it", "I", "find", "difficult", "new", "learn", "languages"],
            answer: ["I", "find", "it", "difficult", "to", "learn", "new", "languages"],
            explanation: "Correct order: I find it difficult to learn new languages."
        },
        {
            id: "B1-LU-014",
            section: "language_use",
            topic: "sentence_order",
            difficulty: 4,
            type: "ordering",
            question: "Put the words in the correct order.",
            words: ["I've", "to", "been", "looking", "meeting", "forward", "you"],
            answer: ["I've", "been", "looking", "forward", "to", "meeting", "you"],
            explanation: "Correct order: I've been looking forward to meeting you."
        },
        {
            id: "B1-LU-015",
            section: "language_use",
            topic: "sentence_order",
            difficulty: 3,
            type: "ordering",
            question: "Put the words in the correct order.",
            words: ["for", "they", "the", "waiting", "hours", "have", "been"],
            answer: ["They", "have", "been", "waiting", "for", "hours"],
            explanation: "Correct order: They have been waiting for hours."
        },

        // Error Identification (5 preguntas)
        {
            id: "B1-LU-016",
            section: "language_use",
            topic: "error_identification",
            difficulty: 3,
            type: "error_identification",
            question: "Read the sentence. Which word is incorrect?",
            sentence: "He don't have enough experience for the job.",
            options: ["He", "don't", "have", "enough"],
            answer: "don't",
            explanation: "With 'he' we say 'doesn't', not 'don't'."
        },
        {
            id: "B1-LU-017",
            section: "language_use",
            topic: "error_identification",
            difficulty: 3,
            type: "error_identification",
            question: "Read the sentence. Which word is incorrect?",
            sentence: "She is more happier than her sister.",
            options: ["She", "is", "more", "happier"],
            answer: "more",
            explanation: "'Happier' already means 'more happy', so 'more' is redundant."
        },
        {
            id: "B1-LU-018",
            section: "language_use",
            topic: "error_identification",
            difficulty: 4,
            type: "error_identification",
            question: "Read the sentence. Which word is incorrect?",
            sentence: "I wish I was a bird.",
            options: ["I", "wish", "was", "bird"],
            answer: "was",
            explanation: "With 'I wish', use 'were' (not 'was') for all subjects."
        },
        {
            id: "B1-LU-019",
            section: "language_use",
            topic: "error_identification",
            difficulty: 3,
            type: "error_identification",
            question: "Read the sentence. Which word is incorrect?",
            sentence: "We've already finished our homework, haven't we?",
            options: ["we've", "already", "finished", "haven't we?"],
            answer: "No error",
            explanation: "The sentence is correct. 'Haven't we?' is a correct question tag."
        },
        {
            id: "B1-LU-020",
            section: "language_use",
            topic: "error_identification",
            difficulty: 3,
            type: "error_identification",
            question: "Read the sentence. Which word is incorrect?",
            sentence: "She said that she will come to the party.",
            options: ["She", "said", "will", "come"],
            answer: "will",
            explanation: "In reported speech, 'will' should become 'would'."
        },

        // Everyday Situations - Advanced (5 preguntas)
        {
            id: "B1-LU-021",
            section: "language_use",
            topic: "everyday",
            difficulty: 2,
            type: "multiple_choice",
            question: "It's very cold in here. Would you mind ___ the window?",
            options: ["closing", "to close", "close", "closed"],
            answer: "closing",
            explanation: "'Would you mind' + gerund (-ing)."
        },
        {
            id: "B1-LU-022",
            section: "language_use",
            topic: "everyday",
            difficulty: 3,
            type: "multiple_choice",
            question: "I'm ___ for my flight. Is the gate open?",
            options: ["checking in", "checking out", "checking up", "checking over"],
            answer: "checking in",
            explanation: "'Check in' is the process before a flight."
        },
        {
            id: "B1-LU-023",
            section: "language_use",
            topic: "everyday",
            difficulty: 3,
            type: "multiple_choice",
            question: "I want to ___ a complaint about this product.",
            options: ["make", "do", "take", "give"],
            answer: "make",
            explanation: "You 'make' a complaint."
        },
        {
            id: "B1-LU-024",
            section: "language_use",
            topic: "everyday",
            difficulty: 3,
            type: "fill_blank",
            question: "I'll pick you ___ at the airport at 3 PM.",
            answer: "up",
            explanation: "'Pick up' means to collect someone."
        },
        {
            id: "B1-LU-025",
            section: "language_use",
            topic: "everyday",
            difficulty: 3,
            type: "multiple_choice",
            question: "I need to ___ a doctor's appointment for next week.",
            options: ["make", "do", "take", "give"],
            answer: "make",
            explanation: "You 'make' an appointment."
        }
    ]
};