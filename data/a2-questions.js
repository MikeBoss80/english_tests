// data/a2-questions.js
// Banco de preguntas A2 completo (Grammar, Vocabulary, Reading, Language Use / Context)

export const A2_RAW = {
    metadata: {
        level: "A2",
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
        
        // Present Perfect (4 preguntas)
        {
            id: "A2-GRAM-001",
            section: "grammar",
            topic: "present_perfect",
            difficulty: 2,
            type: "multiple_choice",
            question: "She ___ here since 2022.",
            options: ["lives", "lived", "has lived", "is living"],
            answer: "has lived",
            explanation: "Present perfect with 'since' + point in time."
        },
        {
            id: "A2-GRAM-002",
            section: "grammar",
            topic: "present_perfect",
            difficulty: 2,
            type: "fill_blank",
            question: "I _____ (never / see) that movie.",
            answer: "have never seen",
            explanation: "Have / has + never + past participle."
        },
        {
            id: "A2-GRAM-003",
            section: "grammar",
            topic: "present_perfect",
            difficulty: 2,
            type: "true_false",
            question: "True or False: 'They has already finished their homework' is correct English.",
            options: ["True", "False"],
            answer: "False",
            explanation: "With 'they', use 'have', not 'has'."
        },
        {
            id: "A2-GRAM-004",
            section: "grammar",
            topic: "present_perfect",
            difficulty: 3,
            type: "multiple_choice",
            question: "I ___ her since we were in school.",
            options: ["have known", "has known", "knew", "know"],
            answer: "have known",
            explanation: "Use present perfect with 'since' for actions that continue."
        },

        // Past Continuous (4 preguntas)
        {
            id: "A2-GRAM-005",
            section: "grammar",
            topic: "past_continuous",
            difficulty: 2,
            type: "multiple_choice",
            question: "I was ___ TV when you called.",
            options: ["watch", "watched", "watching", "watches"],
            answer: "watching",
            explanation: "Past continuous: was/were + verb-ing."
        },
        {
            id: "A2-GRAM-006",
            section: "grammar",
            topic: "past_continuous",
            difficulty: 2,
            type: "multiple_choice",
            question: "While I ___ dinner, the phone rang.",
            options: ["have", "had", "was having", "am having"],
            answer: "was having",
            explanation: "'While' + past continuous for an action in progress."
        },
        {
            id: "A2-GRAM-007",
            section: "grammar",
            topic: "past_continuous",
            difficulty: 3,
            type: "multiple_choice",
            question: "They ___ when the accident happened.",
            options: ["were driving", "was driving", "drove", "drive"],
            answer: "were driving",
            explanation: "Use past continuous for an action in progress when another happened."
        },
        {
            id: "A2-GRAM-008",
            section: "grammar",
            topic: "past_continuous",
            difficulty: 2,
            type: "fill_blank",
            question: "I _____ (read) a book when you called.",
            answer: "was reading",
            explanation: "Past continuous: was/were + verb-ing."
        },

        // Future Forms (4 preguntas)
        {
            id: "A2-GRAM-009",
            section: "grammar",
            topic: "future_forms",
            difficulty: 2,
            type: "multiple_choice",
            question: "I think it ___ tomorrow.",
            options: ["rains", "will rain", "is raining", "rained"],
            answer: "will rain",
            explanation: "'Will' for predictions about the future."
        },
        {
            id: "A2-GRAM-010",
            section: "grammar",
            topic: "future_forms",
            difficulty: 2,
            type: "fill_blank",
            question: "Look at those clouds! It ___ (rain).",
            answer: "is going to rain",
            explanation: "'Be going to' for plans/evidence in the present."
        },
        {
            id: "A2-GRAM-011",
            section: "grammar",
            topic: "future_forms",
            difficulty: 2,
            type: "multiple_choice",
            question: "We ___ visit our grandmother next weekend.",
            options: ["going", "are going to", "go to", "will to"],
            answer: "are going to",
            explanation: "Use 'be going to' for future plans."
        },
        {
            id: "A2-GRAM-012",
            section: "grammar",
            topic: "future_forms",
            difficulty: 3,
            type: "multiple_choice",
            question: "The train ___ at 6 PM. Don't be late.",
            options: ["leaves", "is leaving", "will leave", "leave"],
            answer: "leaves",
            explanation: "Use present simple for scheduled events (timetables)."
        },

        // Comparatives and Superlatives (4 preguntas)
        {
            id: "A2-GRAM-013",
            section: "grammar",
            topic: "comparatives_superlatives",
            difficulty: 2,
            type: "multiple_choice",
            question: "This book is ___ than that one.",
            options: ["more interesting", "most interesting", "interesting", "more interestingly"],
            answer: "more interesting",
            explanation: "Long adjectives: more + adjective + than."
        },
        {
            id: "A2-GRAM-014",
            section: "grammar",
            topic: "comparatives_superlatives",
            difficulty: 2,
            type: "multiple_choice",
            question: "This is the ___ movie I have ever seen.",
            options: ["best", "better", "good", "well"],
            answer: "best",
            explanation: "Superlative of 'good' is 'best'."
        },
        {
            id: "A2-GRAM-015",
            section: "grammar",
            topic: "comparatives_superlatives",
            difficulty: 2,
            type: "multiple_choice",
            question: "My house is ___ than yours.",
            options: ["bigger", "biggest", "big", "more big"],
            answer: "bigger",
            explanation: "Short adjectives: add -er for comparatives."
        },
        {
            id: "A2-GRAM-016",
            section: "grammar",
            topic: "comparatives_superlatives",
            difficulty: 3,
            type: "fill_blank",
            question: "This is the _____ (expensive) restaurant in the city.",
            answer: "most expensive",
            explanation: "Use 'most' with long adjectives in superlatives."
        },

        // Modals (6 preguntas)
        {
            id: "A2-GRAM-017",
            section: "grammar",
            topic: "modals",
            difficulty: 2,
            type: "multiple_choice",
            question: "You ___ wear a helmet when you ride a bike.",
            options: ["can", "must", "may", "might"],
            answer: "must",
            explanation: "'Must' expresses obligation."
        },
        {
            id: "A2-GRAM-018",
            section: "grammar",
            topic: "modals",
            difficulty: 2,
            type: "multiple_choice",
            question: "You look tired. You ___ sleep early tonight.",
            options: ["should", "shouldn't", "can't", "mustn't"],
            answer: "should",
            explanation: "'Should' gives advice."
        },
        {
            id: "A2-GRAM-019",
            section: "grammar",
            topic: "modals",
            difficulty: 2,
            type: "multiple_choice",
            question: "___ I use your phone?",
            options: ["Can", "Must", "Should", "Will"],
            answer: "Can",
            explanation: "Use 'can' or 'could' to ask for permission."
        },
        {
            id: "A2-GRAM-020",
            section: "grammar",
            topic: "modals",
            difficulty: 2,
            type: "multiple_choice",
            question: "I ___ play the piano very well.",
            options: ["can", "could", "should", "would"],
            answer: "can",
            explanation: "Use 'can' to express ability."
        },
        {
            id: "A2-GRAM-021",
            section: "grammar",
            topic: "modals",
            difficulty: 3,
            type: "multiple_choice",
            question: "It ___ rain later. Take an umbrella.",
            options: ["might", "must", "should", "will"],
            answer: "might",
            explanation: "Use 'might' to express possibility."
        },
        {
            id: "A2-GRAM-022",
            section: "grammar",
            topic: "modals",
            difficulty: 3,
            type: "multiple_choice",
            question: "You ___ eat so much sugar. It's bad for you.",
            options: ["shouldn't", "mustn't", "can't", "won't"],
            answer: "shouldn't",
            explanation: "Use 'shouldn't' for negative advice."
        },

        // Conditionals (4 preguntas)
        {
            id: "A2-GRAM-023",
            section: "grammar",
            topic: "conditionals",
            difficulty: 2,
            type: "multiple_choice",
            question: "If it rains, I ___ stay at home.",
            options: ["will", "would", "won't", "am"],
            answer: "will",
            explanation: "First conditional: If + present, will + verb."
        },
        {
            id: "A2-GRAM-024",
            section: "grammar",
            topic: "conditionals",
            difficulty: 2,
            type: "select_correct",
            question: "Choose the correct sentence.",
            options: [
                "If I am rich, I would travel the world.",
                "If I was rich, I will travel the world.",
                "If I were rich, I would travel the world.",
                "If I were rich, I will travel the world."
            ],
            answer: "If I were rich, I would travel the world.",
            explanation: "Second conditional: If + past (were), would + verb."
        },
        {
            id: "A2-GRAM-025",
            section: "grammar",
            topic: "conditionals",
            difficulty: 3,
            type: "multiple_choice",
            question: "If you heat water, it ___.",
            options: ["boils", "boil", "boiled", "would boil"],
            answer: "boils",
            explanation: "Zero conditional for general truths."
        },
        {
            id: "A2-GRAM-026",
            section: "grammar",
            topic: "conditionals",
            difficulty: 3,
            type: "multiple_choice",
            question: "If I had more money, I ___ buy a new car.",
            options: ["will", "would", "can", "could"],
            answer: "would",
            explanation: "Second conditional for unreal situations."
        },

        // Countable/Uncountable (3 preguntas)
        {
            id: "A2-GRAM-027",
            section: "grammar",
            topic: "countable_uncountable",
            difficulty: 2,
            type: "multiple_choice",
            question: "How ___ milk do you need?",
            options: ["many", "much", "more", "most"],
            answer: "much",
            explanation: "'Much' with uncountable nouns (milk)."
        },
        {
            id: "A2-GRAM-028",
            section: "grammar",
            topic: "countable_uncountable",
            difficulty: 2,
            type: "multiple_choice",
            question: "There are ___ apples in the basket.",
            options: ["some", "any", "much", "a lot"],
            answer: "some",
            explanation: "Use 'some' for affirmative sentences with countable nouns."
        },
        {
            id: "A2-GRAM-029",
            section: "grammar",
            topic: "countable_uncountable",
            difficulty: 2,
            type: "multiple_choice",
            question: "I don't have ___ money left.",
            options: ["many", "any", "some", "much"],
            answer: "any",
            explanation: "Use 'any' for negative sentences."
        },

        // Relative Clauses (3 preguntas)
        {
            id: "A2-GRAM-030",
            section: "grammar",
            topic: "relative_clauses",
            difficulty: 2,
            type: "multiple_choice",
            question: "The man ___ lives next door is a doctor.",
            options: ["which", "who", "what", "where"],
            answer: "who",
            explanation: "'Who' for people in relative clauses."
        },
        {
            id: "A2-GRAM-031",
            section: "grammar",
            topic: "relative_clauses",
            difficulty: 2,
            type: "multiple_choice",
            question: "The book ___ I read is interesting.",
            options: ["who", "which", "whose", "whom"],
            answer: "which",
            explanation: "'Which' for things in relative clauses."
        },
        {
            id: "A2-GRAM-032",
            section: "grammar",
            topic: "relative_clauses",
            difficulty: 3,
            type: "multiple_choice",
            question: "The woman ___ car is parked outside is my neighbor.",
            options: ["who", "which", "whose", "whom"],
            answer: "whose",
            explanation: "'Whose' shows possession in relative clauses."
        },

        // Passive Voice (3 preguntas)
        {
            id: "A2-GRAM-033",
            section: "grammar",
            topic: "passive",
            difficulty: 3,
            type: "multiple_choice",
            question: "The house ___ by my grandfather.",
            options: ["built", "was built", "is built", "builds"],
            answer: "was built",
            explanation: "Passive: be + past participle."
        },
        {
            id: "A2-GRAM-034",
            section: "grammar",
            topic: "passive",
            difficulty: 3,
            type: "multiple_choice",
            question: "English ___ in many countries.",
            options: ["speaks", "is spoken", "spoke", "spoken"],
            answer: "is spoken",
            explanation: "Present passive: is/am/are + past participle."
        },
        {
            id: "A2-GRAM-035",
            section: "grammar",
            topic: "passive",
            difficulty: 3,
            type: "multiple_choice",
            question: "The project ___ next week.",
            options: ["will finish", "will be finished", "is finished", "finishes"],
            answer: "will be finished",
            explanation: "Future passive: will be + past participle."
        },

        // Gerunds and Infinitives (3 preguntas)
        {
            id: "A2-GRAM-036",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 3,
            type: "multiple_choice",
            question: "I enjoy ___ books.",
            options: ["read", "reading", "to read", "reads"],
            answer: "reading",
            explanation: "Use gerund after 'enjoy'."
        },
        {
            id: "A2-GRAM-037",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 3,
            type: "multiple_choice",
            question: "I want ___ a new car.",
            options: ["buy", "buying", "to buy", "bought"],
            answer: "to buy",
            explanation: "Use infinitive after 'want'."
        },
        {
            id: "A2-GRAM-038",
            section: "grammar",
            topic: "gerunds_infinitives",
            difficulty: 3,
            type: "multiple_choice",
            question: "She's good at ___ French.",
            options: ["speak", "speaking", "to speak", "spoken"],
            answer: "speaking",
            explanation: "Use gerund after prepositions."
        },

        // Articles and Prepositions (2 preguntas)
        {
            id: "A2-GRAM-039",
            section: "grammar",
            topic: "articles",
            difficulty: 2,
            type: "multiple_choice",
            question: "I visited ___ Eiffel Tower yesterday.",
            options: ["a", "an", "the", "no article"],
            answer: "the",
            explanation: "Use 'the' for unique or well-known things."
        },
        {
            id: "A2-GRAM-040",
            section: "grammar",
            topic: "prepositions",
            difficulty: 2,
            type: "multiple_choice",
            question: "I usually wake up ___ 7 o'clock.",
            options: ["in", "on", "at", "by"],
            answer: "at",
            explanation: "Use 'at' for specific times."
        },

        // ============================================================
        // VOCABULARY (25 preguntas)
        // ============================================================
        {
            id: "A2-VOC-001",
            section: "vocabulary",
            topic: "travel",
            difficulty: 2,
            type: "image_choice",
            question: "Look at the travel desk scene. Which document is required to travel to another country?",
            image: {
                assetId: "a2-airport-checkin",
                description: "A traveler at an airport check-in counter showing a booklet document to an airline agent."
            },
            options: ["wallet", "passport", "receipt", "ticket"],
            answer: "passport",
            explanation: "A passport is required to travel abroad."
        },
        {
            id: "A2-VOC-002",
            section: "vocabulary",
            topic: "travel",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need to ___ a hotel room for two nights.",
            options: ["book", "take", "make", "do"],
            answer: "book",
            explanation: "You book a hotel room."
        },
        {
            id: "A2-VOC-003",
            section: "vocabulary",
            topic: "work",
            difficulty: 2,
            type: "multiple_choice",
            question: "A person who works in a hospital and takes care of patients is a ___.",
            options: ["lawyer", "nurse", "mechanic", "chef"],
            answer: "nurse",
            explanation: "Nurses care for patients in hospitals."
        },
        {
            id: "A2-VOC-004",
            section: "vocabulary",
            topic: "work",
            difficulty: 2,
            type: "multiple_choice",
            question: "He designs buildings. He's an ___.",
            options: ["architect", "engineer", "doctor", "lawyer"],
            answer: "architect",
            explanation: "An architect designs buildings."
        },
        {
            id: "A2-VOC-005",
            section: "vocabulary",
            topic: "health",
            difficulty: 2,
            type: "multiple_choice",
            question: "When you feel sick, you should see a ___.",
            options: ["doctor", "teacher", "pilot", "cashier"],
            answer: "doctor",
            explanation: "You see a doctor when you are sick."
        },
        {
            id: "A2-VOC-006",
            section: "vocabulary",
            topic: "health",
            difficulty: 2,
            type: "multiple_choice",
            question: "I have a ___ and a cough.",
            options: ["fever", "headache", "stomach ache", "earache"],
            answer: "fever",
            explanation: "A fever is a high temperature."
        },
        {
            id: "A2-VOC-007",
            section: "vocabulary",
            topic: "education",
            difficulty: 2,
            type: "multiple_choice",
            question: "You read books and study quietly in a ___.",
            options: ["library", "market", "station", "restaurant"],
            answer: "library",
            explanation: "A library is a quiet place to study."
        },
        {
            id: "A2-VOC-008",
            section: "vocabulary",
            topic: "education",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm studying ___ because I want to be a doctor.",
            options: ["medicine", "history", "music", "art"],
            answer: "medicine",
            explanation: "Doctors study medicine."
        },
        {
            id: "A2-VOC-009",
            section: "vocabulary",
            topic: "food",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm on a diet, so I eat more ___.",
            options: ["vegetables", "chocolate", "candy", "chips"],
            answer: "vegetables",
            explanation: "Vegetables are healthy food."
        },
        {
            id: "A2-VOC-010",
            section: "vocabulary",
            topic: "food",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need to buy bread. Where should I go?",
            options: ["Pharmacy", "Bakery", "Library", "Supermarket"],
            answer: "Bakery",
            explanation: "You buy bread at a bakery."
        },
        {
            id: "A2-VOC-011",
            section: "vocabulary",
            topic: "technology",
            difficulty: 2,
            type: "multiple_choice",
            question: "You use this to click on the computer screen.",
            options: ["keyboard", "mouse", "printer", "speaker"],
            answer: "mouse",
            explanation: "A mouse controls the cursor on screen."
        },
        {
            id: "A2-VOC-012",
            section: "vocabulary",
            topic: "technology",
            difficulty: 2,
            type: "multiple_choice",
            question: "I use the ___ to find information.",
            options: ["internet", "telephone", "television", "radio"],
            answer: "internet",
            explanation: "The internet is used for finding information."
        },
        {
            id: "A2-VOC-013",
            section: "vocabulary",
            topic: "feelings",
            difficulty: 2,
            type: "multiple_choice",
            question: "When you get a nice gift, you feel ___.",
            options: ["happy", "sad", "tired", "angry"],
            answer: "happy",
            explanation: "A nice gift makes you happy."
        },
        {
            id: "A2-VOC-014",
            section: "vocabulary",
            topic: "feelings",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm very tired. I need to ___.",
            options: ["go to bed", "wake up", "have breakfast", "go to work"],
            answer: "go to bed",
            explanation: "When you're tired at night, you go to bed."
        },
        {
            id: "A2-VOC-015",
            section: "vocabulary",
            topic: "environment",
            difficulty: 2,
            type: "multiple_choice",
            question: "We ___ paper and plastic to help the planet.",
            options: ["recycle", "throw", "burn", "drop"],
            answer: "recycle",
            explanation: "Recycling paper and plastic helps the environment."
        },
        {
            id: "A2-VOC-016",
            section: "vocabulary",
            topic: "environment",
            difficulty: 2,
            type: "multiple_choice",
            question: "The city has a lot of ___ pollution.",
            options: ["air", "water", "noise", "light"],
            answer: "air",
            explanation: "Air pollution is a common problem in cities."
        },
        {
            id: "A2-VOC-017",
            section: "vocabulary",
            topic: "money",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need to ___ money at the bank to pay my rent.",
            options: ["withdraw", "borrow", "spend", "save"],
            answer: "withdraw",
            explanation: "You withdraw money from the bank."
        },
        {
            id: "A2-VOC-018",
            section: "vocabulary",
            topic: "money",
            difficulty: 2,
            type: "multiple_choice",
            question: "This phone is too ___. I can't afford it.",
            options: ["expensive", "cheap", "new", "old"],
            answer: "expensive",
            explanation: "'Expensive' means costing a lot of money."
        },
        {
            id: "A2-VOC-019",
            section: "vocabulary",
            topic: "phrasal_verbs",
            difficulty: 2,
            type: "multiple_choice",
            question: "Before you go to sleep, ___ the lights.",
            options: ["turn on", "turn off", "turn down", "turn up"],
            answer: "turn off",
            explanation: "You turn the lights off before sleeping."
        },
        {
            id: "A2-VOC-020",
            section: "vocabulary",
            topic: "phrasal_verbs",
            difficulty: 2,
            type: "multiple_choice",
            question: "Don't ___ up! You can do it.",
            options: ["give", "take", "make", "put"],
            answer: "give",
            explanation: "'Give up' means to stop trying."
        },
        {
            id: "A2-VOC-021",
            section: "vocabulary",
            topic: "phrasal_verbs",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need to ___ after my little sister.",
            options: ["look", "see", "watch", "take"],
            answer: "look",
            explanation: "'Look after' means to take care of someone."
        },
        {
            id: "A2-VOC-022",
            section: "vocabulary",
            topic: "family",
            difficulty: 2,
            type: "multiple_choice",
            question: "Your mother's sister is your ___.",
            options: ["aunt", "uncle", "cousin", "grandma"],
            answer: "aunt",
            explanation: "Your mother's sister is your aunt."
        },
        {
            id: "A2-VOC-023",
            section: "vocabulary",
            topic: "family",
            difficulty: 2,
            type: "multiple_choice",
            question: "My brother's daughter is my ___.",
            options: ["niece", "nephew", "cousin", "aunt"],
            answer: "niece",
            explanation: "Your brother's daughter is your niece."
        },
        {
            id: "A2-VOC-024",
            section: "vocabulary",
            topic: "clothing",
            difficulty: 1,
            type: "multiple_choice",
            question: "I need to put on my ___ before going outside.",
            options: ["shoes", "socks", "coat", "hat"],
            answer: "shoes",
            explanation: "We wear shoes on our feet."
        },
        {
            id: "A2-VOC-025",
            section: "vocabulary",
            topic: "clothing",
            difficulty: 2,
            type: "multiple_choice",
            question: "It's raining. Don't forget your ___.",
            options: ["umbrella", "sunglasses", "hat", "scarf"],
            answer: "umbrella",
            explanation: "You need an umbrella when it rains."
        },

        // ============================================================
        // READING (25 preguntas)
        // ============================================================
        {
            id: "A2-READ-001",
            section: "reading",
            topic: "reading_intermediate",
            difficulty: 2,
            type: "reading",
            passageTitle: "A Holiday in Italy",
            passage: "Last summer, Laura went on holiday to Italy with her family. They stayed in a small hotel near the beach. Every morning they had breakfast on the terrace and then went swimming. They also visited Rome and saw the Colosseum. Laura loved the food, especially the pizza. She took lots of photos to show her friends.",
            questions: [
                {
                    question: "Where did Laura stay in Italy?",
                    options: ["In a big hotel in Rome", "In a small hotel near the beach", "At her cousin's house", "In a tent"],
                    answer: "In a small hotel near the beach",
                    explanation: "They stayed in a small hotel near the beach."
                },
                {
                    question: "What did Laura love the most about Italy?",
                    options: ["The trains", "The weather", "The food, especially the pizza", "The museums"],
                    answer: "The food, especially the pizza",
                    explanation: "Laura loved the food, especially the pizza."
                },
                {
                    question: "Why did Laura take lots of photos?",
                    options: ["To sell them", "To show her friends", "For her homework", "To post online"],
                    answer: "To show her friends",
                    explanation: "She took photos to show her friends."
                }
            ]
        },
        {
            id: "A2-READ-002",
            section: "reading",
            topic: "reading_intermediate",
            difficulty: 2,
            type: "reading",
            passageTitle: "Tips for Studying",
            passage: "Many students find it difficult to study for long periods of time. Experts recommend studying in short sessions of about 25 minutes and taking a five-minute break after each session. It is also important to study in a quiet place and to review new words the next day. With this method, called the Pomodoro Technique, students remember more and feel less tired.",
            questions: [
                {
                    question: "How long should each study session be?",
                    options: ["5 minutes", "25 minutes", "50 minutes", "One hour"],
                    answer: "25 minutes",
                    explanation: "Experts recommend sessions of about 25 minutes."
                },
                {
                    question: "What is the name of this study method?",
                    options: ["The Focus Method", "The Pomodoro Technique", "The Break System", "The Timer Study"],
                    answer: "The Pomodoro Technique",
                    explanation: "This method is called the Pomodoro Technique."
                },
                {
                    question: "Why is it useful to study in a quiet place?",
                    options: ["Because it is more comfortable", "Because there is more light", "So you can concentrate better", "Because it is cold"],
                    answer: "So you can concentrate better",
                    explanation: "A quiet place helps you concentrate."
                }
            ]
        },
        {
            id: "A2-READ-003",
            section: "reading",
            topic: "reading_intermediate",
            difficulty: 2,
            type: "reading",
            passageTitle: "A Day in the Life of a Student",
            passage: "Emma is a university student. She wakes up at 7 AM and has breakfast before going to class. Her first class starts at 9 AM and finishes at 11 AM. After class, she goes to the library to study. She has lunch at 1 PM in the cafeteria. In the afternoon, she has a part-time job at a bookstore. She works from 3 PM to 7 PM. In the evening, she does her homework and watches TV. She goes to bed at 11 PM.",
            questions: [
                {
                    question: "What time does Emma have her first class?",
                    options: ["7 AM", "9 AM", "11 AM", "1 PM"],
                    answer: "9 AM",
                    explanation: "Her first class starts at 9 AM."
                },
                {
                    question: "Where does Emma work in the afternoon?",
                    options: ["At a hospital", "At a bookstore", "At a restaurant", "At a school"],
                    answer: "At a bookstore",
                    explanation: "She has a part-time job at a bookstore."
                },
                {
                    question: "What does Emma do in the evening?",
                    options: ["She goes to the library", "She does homework and watches TV", "She goes to the gym", "She meets her friends"],
                    answer: "She does homework and watches TV",
                    explanation: "In the evening, she does homework and watches TV."
                }
            ]
        },
        {
            id: "A2-READ-004",
            section: "reading",
            topic: "reading_intermediate",
            difficulty: 3,
            type: "reading",
            passageTitle: "The Benefits of Exercise",
            passage: "Regular exercise has many benefits for our health. It helps us stay fit and reduces the risk of many diseases. Exercise also improves our mental health and helps reduce stress. The best types of exercise include walking, running, swimming, and cycling. Doctors recommend at least 30 minutes of exercise every day. It is important to choose an activity that you enjoy so you can stick with it. Even small changes like walking instead of taking the bus can make a big difference.",
            questions: [
                {
                    question: "How many minutes of exercise do doctors recommend?",
                    options: ["15 minutes", "30 minutes", "45 minutes", "One hour"],
                    answer: "30 minutes",
                    explanation: "Doctors recommend at least 30 minutes of exercise every day."
                },
                {
                    question: "Which of these is NOT mentioned as a benefit of exercise?",
                    options: ["Reduces the risk of diseases", "Improves mental health", "Helps lose weight", "Reduces stress"],
                    answer: "Helps lose weight",
                    explanation: "The text doesn't specifically mention losing weight."
                },
                {
                    question: "Why is it important to choose an activity you enjoy?",
                    options: ["Because it's cheaper", "Because you can stick with it", "Because it's easier", "Because it takes less time"],
                    answer: "Because you can stick with it",
                    explanation: "Choose an activity you enjoy so you can stick with it."
                }
            ]
        },
        {
            id: "A2-READ-005",
            section: "reading",
            topic: "reading_intermediate",
            difficulty: 3,
            type: "reading",
            passageTitle: "Social Media and Teenagers",
            passage: "Social media has become a big part of teenagers' lives. It allows them to connect with friends and share their experiences. However, there are some concerns about the amount of time teenagers spend on social media. Studies show that too much time on social media can lead to anxiety and sleep problems. Experts suggest limiting screen time and taking regular breaks. They also recommend that teenagers talk to their parents about what they see online.",
            questions: [
                {
                    question: "What is a benefit of social media for teenagers?",
                    options: ["It helps them sleep better", "It allows them to connect with friends", "It reduces anxiety", "It makes them more active"],
                    answer: "It allows them to connect with friends",
                    explanation: "Social media allows teenagers to connect with friends."
                },
                {
                    question: "What can too much social media cause?",
                    options: ["Better grades", "More friends", "Anxiety and sleep problems", "More exercise"],
                    answer: "Anxiety and sleep problems",
                    explanation: "Too much social media can lead to anxiety and sleep problems."
                },
                {
                    question: "What do experts suggest teenagers do?",
                    options: ["Spend more time on social media", "Limit screen time and take breaks", "Don't use social media at all", "Only use social media on weekends"],
                    answer: "Limit screen time and take breaks",
                    explanation: "Experts suggest limiting screen time and taking regular breaks."
                }
            ]
        },

        // ============================================================
        // LANGUAGE USE / CONTEXT (20 preguntas)
        // ============================================================
        
        // Social Interactions (5 preguntas)
        {
            id: "A2-LU-001",
            section: "language_use",
            topic: "social",
            difficulty: 2,
            type: "open_answer",
            question: "Your friend looks sick. Write one short sentence giving advice with 'should'.",
            answer: "You should see a doctor.",
            explanation: "Use 'should' to give polite advice in social situations."
        },
        {
            id: "A2-LU-002",
            section: "language_use",
            topic: "social",
            difficulty: 2,
            type: "fill_blank",
            question: "Polite request: \"Would you mind ___ the window?\"",
            answer: "opening",
            explanation: "'Would you mind' + verb-ing."
        },
        {
            id: "A2-LU-003",
            section: "language_use",
            topic: "social",
            difficulty: 2,
            type: "multiple_choice",
            question: "You want to express your point of view. You say:",
            options: [
                "In my opinion, the movie was great.",
                "The movie is a great opinion.",
                "I opinion the movie great.",
                "The opinion movie was great."
            ],
            answer: "In my opinion, the movie was great.",
            explanation: "We use 'In my opinion' to express a point of view."
        },
        {
            id: "A2-LU-004",
            section: "language_use",
            topic: "social",
            difficulty: 2,
            type: "multiple_choice",
            question: "What do you say when you meet someone for the first time?",
            options: ["Nice to meet you", "See you later", "Goodbye", "Thank you"],
            answer: "Nice to meet you",
            explanation: "We say 'Nice to meet you' when meeting someone for the first time."
        },
        {
            id: "A2-LU-005",
            section: "language_use",
            topic: "social",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm sorry for being late. I ___ to get stuck in traffic.",
            options: ["happened", "used", "tried", "attempted"],
            answer: "happened",
            explanation: "Use 'happened' to explain an unexpected situation."
        },

        // Everyday Situations (5 preguntas)
        {
            id: "A2-LU-006",
            section: "language_use",
            topic: "everyday",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'd like to ___ this sweater, please.",
            options: ["buy", "sell", "take", "give"],
            answer: "buy",
            explanation: "Use 'buy' when you want to purchase something."
        },
        {
            id: "A2-LU-007",
            section: "language_use",
            topic: "everyday",
            difficulty: 2,
            type: "multiple_choice",
            question: "Do you have this ___ in a larger size?",
            options: ["shirt", "shoe", "hat", "bag"],
            answer: "shirt",
            explanation: "'Shirt' is a clothing item that comes in different sizes."
        },
        {
            id: "A2-LU-008",
            section: "language_use",
            topic: "everyday",
            difficulty: 2,
            type: "multiple_choice",
            question: "What would you like to ___ for dinner?",
            options: ["have", "take", "make", "do"],
            answer: "have",
            explanation: "Use 'have' for meals."
        },
        {
            id: "A2-LU-009",
            section: "language_use",
            topic: "everyday",
            difficulty: 2,
            type: "multiple_choice",
            question: "How do I ___ to the train station?",
            options: ["get", "go", "come", "arrive"],
            answer: "get",
            explanation: "Use 'get' to ask about reaching a destination."
        },
        {
            id: "A2-LU-010",
            section: "language_use",
            topic: "everyday",
            difficulty: 2,
            type: "fill_blank",
            question: "I need to ___ a reservation at the restaurant.",
            answer: "make",
            explanation: "You 'make' a reservation."
        },

        // Professional Contexts (5 preguntas)
        {
            id: "A2-LU-011",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "Let's ___ the meeting at 3 PM.",
            options: ["start", "begin", "open", "go"],
            answer: "start",
            explanation: "Use 'start' or 'begin' for beginning a meeting."
        },
        {
            id: "A2-LU-012",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "Hello, can I ___ to Mr. Smith, please?",
            options: ["speak", "talk", "say", "tell"],
            answer: "speak",
            explanation: "Use 'speak to' on the telephone."
        },
        {
            id: "A2-LU-013",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "I'm ___ you about the project.",
            options: ["writing to", "talking to", "speaking to", "saying to"],
            answer: "writing to",
            explanation: "Use 'writing to' for emails or letters."
        },
        {
            id: "A2-LU-014",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "Could you ___ me the report by Friday?",
            options: ["send", "take", "give", "show"],
            answer: "send",
            explanation: "Use 'send' for documents."
        },
        {
            id: "A2-LU-015",
            section: "language_use",
            topic: "professional",
            difficulty: 3,
            type: "multiple_choice",
            question: "I'll get back to you ___ I have the information.",
            options: ["when", "while", "during", "until"],
            answer: "when",
            explanation: "Use 'when' to indicate the time something will happen."
        },

        // Emergency Situations (5 preguntas)
        {
            id: "A2-LU-016",
            section: "language_use",
            topic: "emergency",
            difficulty: 3,
            type: "multiple_choice",
            question: "I need a ___ immediately!",
            options: ["doctor", "nurse", "dentist", "surgeon"],
            answer: "doctor",
            explanation: "In a medical emergency, you need a doctor."
        },
        {
            id: "A2-LU-017",
            section: "language_use",
            topic: "emergency",
            difficulty: 3,
            type: "multiple_choice",
            question: "My bag was stolen. I need to call the ___.",
            options: ["police", "hospital", "fire department", "ambulance"],
            answer: "police",
            explanation: "You call the police about theft."
        },
        {
            id: "A2-LU-018",
            section: "language_use",
            topic: "emergency",
            difficulty: 3,
            type: "multiple_choice",
            question: "___! I need help!",
            options: ["Help", "Stop", "Go", "Wait"],
            answer: "Help",
            explanation: "You shout 'Help!' in an emergency."
        },
        {
            id: "A2-LU-019",
            section: "language_use",
            topic: "emergency",
            difficulty: 3,
            type: "multiple_choice",
            question: "Where is the nearest ___?",
            options: ["hospital", "school", "library", "shopping mall"],
            answer: "hospital",
            explanation: "In an emergency, you need to know where the nearest hospital is."
        },
        {
            id: "A2-LU-020",
            section: "language_use",
            topic: "emergency",
            difficulty: 3,
            type: "fill_blank",
            question: "Please call an ___ immediately!",
            answer: "ambulance",
            explanation: "In a medical emergency, you call an ambulance."
        }
    ]
};