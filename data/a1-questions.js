// data/a1-questions.js
// Banco de preguntas A1 (Grammar, Vocabulary, Reading, Language Use / Context)
// Combinación: banco académico (95 ítems) + tipos especiales (matching, ordering,
// error identification, lectura con pasaje).

export const A1_RAW = {
    metadata: {
        level: "A1",
        sections: {
            grammar: "Grammar",
            vocabulary: "Vocabulary",
            reading: "Reading",
            language_use: "Language Use"
        }
    },
    questions: [
        // ============================================================
        // GRAMMAR (35)
        // ============================================================

        // Verb to be (5 preguntas)
        {
            id: "A1-GRAM-001",
            section: "grammar",
            topic: "verb_to_be",
            subtopic: "present_simple",
            difficulty: 1,
            type: "multiple_choice",
            question: "She ___ a teacher.",
            options: ["am", "is", "are", "be"],
            answer: "is",
            explanation: "Use 'is' with third person singular (she/he/it)"
        },
        {
            id: "A1-GRAM-002",
            section: "grammar",
            topic: "verb_to_be",
            subtopic: "present_simple",
            difficulty: 1,
            type: "multiple_choice",
            question: "I ___ from Colombia.",
            options: ["am", "is", "are", "be"],
            answer: "am",
            explanation: "Use 'am' with the pronoun 'I'"
        },
        {
            id: "A1-GRAM-003",
            section: "grammar",
            topic: "verb_to_be",
            subtopic: "present_simple",
            difficulty: 1,
            type: "true_false",
            question: "True or False: In the sentence 'They are students', 'are' is the correct verb.",
            options: ["True", "False"],
            answer: "True",
            explanation: "Use 'are' with plural subjects like they/we/you."
        },
        {
            id: "A1-GRAM-004",
            section: "grammar",
            topic: "verb_to_be",
            subtopic: "negative",
            difficulty: 2,
            type: "multiple_choice",
            question: "He ___ at home yesterday.",
            options: ["wasn't", "weren't", "isn't", "aren't"],
            answer: "wasn't",
            explanation: "Use 'wasn't' (was not) with third person singular in past"
        },
        {
            id: "A1-GRAM-005",
            section: "grammar",
            topic: "verb_to_be",
            subtopic: "questions",
            difficulty: 2,
            type: "multiple_choice",
            question: "___ you happy?",
            options: ["Is", "Am", "Are", "Be"],
            answer: "Are",
            explanation: "Use 'Are' with the pronoun 'you' in questions"
        },

        // Present Simple (8 preguntas)
        {
            id: "A1-GRAM-006",
            section: "grammar",
            topic: "present_simple",
            subtopic: "affirmative",
            difficulty: 1,
            type: "multiple_choice",
            question: "She ___ coffee every morning.",
            options: ["drink", "drinks", "drinking", "drank"],
            answer: "drinks",
            explanation: "Add -s for third person singular in present simple"
        },
        {
            id: "A1-GRAM-007",
            section: "grammar",
            topic: "present_simple",
            subtopic: "affirmative",
            difficulty: 1,
            type: "multiple_choice",
            question: "They ___ to work by bus.",
            options: ["go", "goes", "going", "went"],
            answer: "go",
            explanation: "Use base form with plural subjects (they/we/you/I)"
        },
        {
            id: "A1-GRAM-008",
            section: "grammar",
            topic: "present_simple",
            subtopic: "negative",
            difficulty: 2,
            type: "multiple_choice",
            question: "He ___ like pizza.",
            options: ["don't", "doesn't", "isn't", "aren't"],
            answer: "doesn't",
            explanation: "Use 'doesn't' (does not) with third person singular"
        },
        {
            id: "A1-GRAM-009",
            section: "grammar",
            topic: "present_simple",
            subtopic: "negative",
            difficulty: 2,
            type: "multiple_choice",
            question: "I ___ understand this exercise.",
            options: ["don't", "doesn't", "am not", "aren't"],
            answer: "don't",
            explanation: "Use 'don't' (do not) with I/you/we/they"
        },
        {
            id: "A1-GRAM-010",
            section: "grammar",
            topic: "present_simple",
            subtopic: "questions",
            difficulty: 2,
            type: "multiple_choice",
            question: "___ she speak English?",
            options: ["Do", "Does", "Is", "Are"],
            answer: "Does",
            explanation: "Use 'Does' with third person singular in questions"
        },
        {
            id: "A1-GRAM-011",
            section: "grammar",
            topic: "present_simple",
            subtopic: "adverbs",
            difficulty: 2,
            type: "multiple_choice",
            question: "I ___ go to the gym on Mondays.",
            options: ["always", "everyday", "sometimes", "usually"],
            answer: "usually",
            explanation: "Adverbs of frequency go before the main verb"
        },

        // Present Continuous (5 preguntas)
        {
            id: "A1-GRAM-012",
            section: "grammar",
            topic: "present_continuous",
            subtopic: "affirmative",
            difficulty: 2,
            type: "multiple_choice",
            question: "She ___ reading a book right now.",
            options: ["is", "am", "are", "be"],
            answer: "is",
            explanation: "Use present continuous for actions happening now"
        },
        {
            id: "A1-GRAM-013",
            section: "grammar",
            topic: "present_continuous",
            subtopic: "affirmative",
            difficulty: 2,
            type: "multiple_choice",
            question: "They ___ playing soccer at the moment.",
            options: ["is", "am", "are", "be"],
            answer: "are",
            explanation: "Use 'are' with plural subjects in present continuous"
        },
        {
            id: "A1-GRAM-014",
            section: "grammar",
            topic: "present_continuous",
            subtopic: "negative",
            difficulty: 2,
            type: "multiple_choice",
            question: "He ___ working right now.",
            options: ["isn't", "aren't", "don't", "doesn't"],
            answer: "isn't",
            explanation: "Use 'isn't' (is not) for third person singular in present continuous"
        },
        {
            id: "A1-GRAM-015",
            section: "grammar",
            topic: "present_continuous",
            subtopic: "questions",
            difficulty: 2,
            type: "multiple_choice",
            question: "___ you watching TV?",
            options: ["Is", "Am", "Are", "Do"],
            answer: "Are",
            explanation: "Use 'Are' with 'you' in present continuous questions"
        },
        {
            id: "A1-GRAM-016",
            section: "grammar",
            topic: "present_continuous",
            subtopic: "vs_simple",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ to music every day.",
            options: ["listens", "is listening", "listen", "listening"],
            answer: "listens",
            explanation: "Use present simple for habits/routines, not present continuous"
        },

        // Past Simple (5 preguntas)
        {
            id: "A1-GRAM-017",
            section: "grammar",
            topic: "past_simple",
            subtopic: "affirmative",
            difficulty: 2,
            type: "multiple_choice",
            question: "They ___ to the park yesterday.",
            options: ["go", "goes", "went", "going"],
            answer: "went",
            explanation: "Use past simple for completed actions in the past"
        },
        {
            id: "A1-GRAM-018",
            section: "grammar",
            topic: "past_simple",
            subtopic: "affirmative",
            difficulty: 2,
            type: "multiple_choice",
            question: "I ___ my homework last night.",
            options: ["finish", "finishes", "finished", "finishing"],
            answer: "finished",
            explanation: "Regular verbs add -ed in past simple"
        },
        {
            id: "A1-GRAM-019",
            section: "grammar",
            topic: "past_simple",
            subtopic: "negative",
            difficulty: 2,
            type: "multiple_choice",
            question: "She ___ to the party last Friday.",
            options: ["not go", "didn't go", "doesn't go", "isn't go"],
            answer: "didn't go",
            explanation: "Use 'didn't' + base form for negative past simple"
        },
        {
            id: "A1-GRAM-020",
            section: "grammar",
            topic: "past_simple",
            subtopic: "questions",
            difficulty: 2,
            type: "multiple_choice",
            question: "___ you enjoy the movie?",
            options: ["Do", "Does", "Did", "Are"],
            answer: "Did",
            explanation: "Use 'Did' + subject + base form for past simple questions"
        },
        {
            id: "A1-GRAM-021",
            section: "grammar",
            topic: "past_simple",
            subtopic: "irregular",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ a beautiful dress to the wedding.",
            options: ["wear", "wore", "worn", "wearing"],
            answer: "wore",
            explanation: "'Wear' is an irregular verb - past simple is 'wore'"
        },

        // Future (4 preguntas)
        {
            id: "A1-GRAM-022",
            section: "grammar",
            topic: "future",
            subtopic: "going_to",
            difficulty: 2,
            type: "multiple_choice",
            question: "They ___ to visit us next month.",
            options: ["is going", "are going", "am going", "go"],
            answer: "are going",
            explanation: "Use 'be going to' for future plans and intentions"
        },
        {
            id: "A1-GRAM-023",
            section: "grammar",
            topic: "future",
            subtopic: "will",
            difficulty: 2,
            type: "multiple_choice",
            question: "I ___ help you with your homework.",
            options: ["will", "am", "going", "do"],
            answer: "will",
            explanation: "Use 'will' for offers and decisions made at the moment"
        },
        {
            id: "A1-GRAM-024",
            section: "grammar",
            topic: "future",
            subtopic: "will_negative",
            difficulty: 2,
            type: "multiple_choice",
            question: "He ___ be late for the meeting.",
            options: ["willn't", "won't", "not will", "will not"],
            answer: "won't",
            explanation: "Use 'won't' (will not) for negative future"
        },
        {
            id: "A1-GRAM-025",
            section: "grammar",
            topic: "future",
            subtopic: "time_expressions",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'll call you ___.",
            options: ["tomorrow", "yesterday", "now", "last week"],
            answer: "tomorrow",
            explanation: "Use future time expressions like 'tomorrow' with will"
        },

        // Present Perfect (4 preguntas)
        {
            id: "A1-GRAM-026",
            section: "grammar",
            topic: "present_perfect",
            subtopic: "affirmative",
            difficulty: 3,
            type: "multiple_choice",
            question: "I ___ visited Paris twice.",
            options: ["have", "has", "am", "did"],
            answer: "have",
            explanation: "Use 'have' with I/you/we/they in present perfect"
        },
        {
            id: "A1-GRAM-027",
            section: "grammar",
            topic: "present_perfect",
            subtopic: "affirmative",
            difficulty: 3,
            type: "multiple_choice",
            question: "She ___ never eaten sushi.",
            options: ["have", "has", "is", "does"],
            answer: "has",
            explanation: "Use 'has' with third person singular in present perfect"
        },
        {
            id: "A1-GRAM-028",
            section: "grammar",
            topic: "present_perfect",
            subtopic: "negative",
            difficulty: 3,
            type: "multiple_choice",
            question: "They ___ finished their homework yet.",
            options: ["haven't", "hasn't", "aren't", "don't"],
            answer: "haven't",
            explanation: "Use 'haven't' (have not) with plural subjects"
        },
        {
            id: "A1-GRAM-029",
            section: "grammar",
            topic: "present_perfect",
            subtopic: "ever_never",
            difficulty: 3,
            type: "multiple_choice",
            question: "Have you ___ been to London?",
            options: ["ever", "never", "already", "yet"],
            answer: "ever",
            explanation: "Use 'ever' in questions to ask about life experiences"
        },

        // Prepositions (3 preguntas)
        {
            id: "A1-GRAM-030",
            section: "grammar",
            topic: "prepositions",
            subtopic: "time",
            difficulty: 2,
            type: "multiple_choice",
            question: "I wake up ___ 7:00 AM.",
            options: ["in", "on", "at", "by"],
            answer: "at",
            explanation: "Use 'at' for specific times"
        },
        {
            id: "A1-GRAM-031",
            section: "grammar",
            topic: "prepositions",
            subtopic: "place",
            difficulty: 2,
            type: "multiple_choice",
            question: "The book is ___ the table.",
            options: ["in", "on", "at", "to"],
            answer: "on",
            explanation: "Use 'on' for surfaces"
        },
        {
            id: "A1-GRAM-032",
            section: "grammar",
            topic: "prepositions",
            subtopic: "place",
            difficulty: 2,
            type: "multiple_choice",
            question: "She lives ___ New York.",
            options: ["in", "on", "at", "to"],
            answer: "in",
            explanation: "Use 'in' for cities and countries"
        },

        // Comparatives (3 preguntas)
        {
            id: "A1-GRAM-033",
            section: "grammar",
            topic: "comparatives",
            subtopic: "adjectives",
            difficulty: 3,
            type: "multiple_choice",
            question: "This book is ___ than that one.",
            options: ["interesting", "more interesting", "most interesting", "interestinger"],
            answer: "more interesting",
            explanation: "Use 'more' for longer adjectives in comparatives"
        },
        {
            id: "A1-GRAM-034",
            section: "grammar",
            topic: "comparatives",
            subtopic: "short_adjectives",
            difficulty: 2,
            type: "multiple_choice",
            question: "My house is ___ than yours.",
            options: ["big", "bigger", "biggest", "more big"],
            answer: "bigger",
            explanation: "Add -er to short adjectives for comparatives"
        },
        {
            id: "A1-GRAM-035",
            section: "grammar",
            topic: "comparatives",
            subtopic: "irregular",
            difficulty: 3,
            type: "multiple_choice",
            question: "This exam is ___ than the previous one.",
            options: ["good", "better", "best", "more good"],
            answer: "better",
            explanation: "'Good' is irregular - comparative is 'better'"
        },

        // ============================================================
        // VOCABULARY (25 + matching)
        // ============================================================

        // Personal Information (3 preguntas)
        {
            id: "A1-VOCAB-001",
            section: "vocabulary",
            topic: "personal_info",
            subtopic: "basic",
            difficulty: 1,
            type: "image_choice",
            question: "Look at the image context and choose the missing word: 'What is your first ___?'",
            image: {
                assetId: "a1-personal-info-form",
                description: "A simple registration form with fields: First name, Last name, Age, and Country."
            },
            options: ["name", "number", "address", "age"],
            answer: "name",
            explanation: "In personal information forms, 'first name' is the correct phrase."
        },
        {
            id: "A1-VOCAB-002",
            section: "vocabulary",
            topic: "personal_info",
            subtopic: "basic",
            difficulty: 1,
            type: "multiple_choice",
            question: "I ___ 25 years old.",
            options: ["am", "is", "are", "be"],
            answer: "am",
            explanation: "Use 'am' with 'I' to describe age"
        },
        {
            id: "A1-VOCAB-003",
            section: "vocabulary",
            topic: "personal_info",
            subtopic: "occupation",
            difficulty: 1,
            type: "multiple_choice",
            question: "She works at a school. She's a ___.",
            options: ["doctor", "teacher", "engineer", "lawyer"],
            answer: "teacher",
            explanation: "People who work at schools are teachers"
        },

        // Family (4 preguntas)
        {
            id: "A1-VOCAB-004",
            section: "vocabulary",
            topic: "family",
            subtopic: "members",
            difficulty: 1,
            type: "multiple_choice",
            question: "Your mother's sister is your ___.",
            options: ["aunt", "uncle", "cousin", "grandma"],
            answer: "aunt",
            explanation: "Your mother's sister is your aunt"
        },
        {
            id: "A1-VOCAB-005",
            section: "vocabulary",
            topic: "family",
            subtopic: "members",
            difficulty: 1,
            type: "multiple_choice",
            question: "Your father's brother is your ___.",
            options: ["aunt", "uncle", "cousin", "grandpa"],
            answer: "uncle",
            explanation: "Your father's brother is your uncle"
        },
        {
            id: "A1-VOCAB-006",
            section: "vocabulary",
            topic: "family",
            subtopic: "members",
            difficulty: 1,
            type: "multiple_choice",
            question: "My mother and father are my ___.",
            options: ["parents", "siblings", "children", "relatives"],
            answer: "parents",
            explanation: "Mother and father are your parents"
        },
        {
            id: "A1-VOCAB-007",
            section: "vocabulary",
            topic: "family",
            subtopic: "relationships",
            difficulty: 2,
            type: "multiple_choice",
            question: "My brother's daughter is my ___.",
            options: ["niece", "nephew", "cousin", "aunt"],
            answer: "niece",
            explanation: "Your brother's daughter is your niece"
        },

        // Daily Routines (4 preguntas)
        {
            id: "A1-VOCAB-008",
            section: "vocabulary",
            topic: "daily_routines",
            subtopic: "actions",
            difficulty: 1,
            type: "multiple_choice",
            question: "I ___ at 6:00 AM every day.",
            options: ["wake up", "go to bed", "have dinner", "watch TV"],
            answer: "wake up",
            explanation: "We wake up in the morning to start the day"
        },
        {
            id: "A1-VOCAB-009",
            section: "vocabulary",
            topic: "daily_routines",
            subtopic: "actions",
            difficulty: 1,
            type: "multiple_choice",
            question: "I always ___ breakfast before work.",
            options: ["have", "eat", "take", "make"],
            answer: "have",
            explanation: "We 'have' or 'eat' breakfast in the morning"
        },
        {
            id: "A1-VOCAB-010",
            section: "vocabulary",
            topic: "daily_routines",
            subtopic: "time",
            difficulty: 2,
            type: "multiple_choice",
            question: "We usually ___ dinner at 7:00 PM.",
            options: ["have", "make", "cook", "eat"],
            answer: "have",
            explanation: "We 'have' dinner in the evening"
        },
        {
            id: "A1-VOCAB-011",
            section: "vocabulary",
            topic: "daily_routines",
            subtopic: "work",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm very tired. I need to ___.",
            options: ["go to bed", "wake up", "have breakfast", "go to work"],
            answer: "go to bed",
            explanation: "When you're tired at night, you go to bed"
        },

        // Food (4 preguntas)
        {
            id: "A1-VOCAB-012",
            section: "vocabulary",
            topic: "food",
            subtopic: "basic",
            difficulty: 1,
            type: "multiple_choice",
            question: "I need to buy bread. Where should I go?",
            options: ["Pharmacy", "Bakery", "Library", "Supermarket"],
            answer: "Bakery",
            explanation: "You buy bread at a bakery"
        },
        {
            id: "A1-VOCAB-013",
            section: "vocabulary",
            topic: "food",
            subtopic: "drinks",
            difficulty: 1,
            type: "multiple_choice",
            question: "I'm thirsty. I want a ___.",
            options: ["drink", "food", "meal", "snack"],
            answer: "drink",
            explanation: "When you're thirsty, you want a drink"
        },
        {
            id: "A1-VOCAB-014",
            section: "vocabulary",
            topic: "food",
            subtopic: "meals",
            difficulty: 1,
            type: "multiple_choice",
            question: "I eat three ___ a day: breakfast, lunch, dinner.",
            options: ["meals", "snacks", "dishes", "plates"],
            answer: "meals",
            explanation: "The three main meals are breakfast, lunch, and dinner"
        },
        {
            id: "A1-VOCAB-015",
            section: "vocabulary",
            topic: "food",
            subtopic: "adjectives",
            difficulty: 2,
            type: "multiple_choice",
            question: "This soup is very ___. I love the taste.",
            options: ["delicious", "expensive", "terrible", "difficult"],
            answer: "delicious",
            explanation: "'Delicious' means very tasty"
        },

        // Travel (3 preguntas)
        {
            id: "A1-VOCAB-016",
            section: "vocabulary",
            topic: "travel",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need a ___ to travel to another country.",
            options: ["passport", "wallet", "umbrella", "camera"],
            answer: "passport",
            explanation: "You need a passport for international travel"
        },
        {
            id: "A1-VOCAB-017",
            section: "vocabulary",
            topic: "travel",
            subtopic: "transport",
            difficulty: 2,
            type: "multiple_choice",
            question: "I ___ a train to the city center.",
            options: ["take", "make", "do", "go"],
            answer: "take",
            explanation: "We 'take' transport like trains or buses"
        },
        {
            id: "A1-VOCAB-018",
            section: "vocabulary",
            topic: "travel",
            subtopic: "places",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm going to the ___ to buy some medicine.",
            options: ["pharmacy", "bookstore", "shoe store", "restaurant"],
            answer: "pharmacy",
            explanation: "You buy medicine at a pharmacy"
        },

        // Clothing (3 preguntas)
        {
            id: "A1-VOCAB-019",
            section: "vocabulary",
            topic: "clothing",
            subtopic: "basic",
            difficulty: 1,
            type: "multiple_choice",
            question: "I need to put on my ___ before going outside.",
            options: ["shoes", "socks", "coat", "hat"],
            answer: "shoes",
            explanation: "We wear shoes on our feet"
        },
        {
            id: "A1-VOCAB-020",
            section: "vocabulary",
            topic: "clothing",
            subtopic: "basic",
            difficulty: 1,
            type: "multiple_choice",
            question: "It's raining. Don't forget your ___.",
            options: ["umbrella", "sunglasses", "hat", "scarf"],
            answer: "umbrella",
            explanation: "You need an umbrella when it rains"
        },
        {
            id: "A1-VOCAB-021",
            section: "vocabulary",
            topic: "clothing",
            subtopic: "colors",
            difficulty: 1,
            type: "multiple_choice",
            question: "The sky is ___ on a sunny day.",
            options: ["blue", "black", "white", "red"],
            answer: "blue",
            explanation: "The sky is blue on a sunny day"
        },

        // Health (3 preguntas)
        {
            id: "A1-VOCAB-022",
            section: "vocabulary",
            topic: "health",
            subtopic: "body",
            difficulty: 2,
            type: "multiple_choice",
            question: "My ___ hurts. I think I need a dentist.",
            options: ["tooth", "ear", "eye", "nose"],
            answer: "tooth",
            explanation: "You go to the dentist for tooth problems"
        },
        {
            id: "A1-VOCAB-023",
            section: "vocabulary",
            topic: "health",
            subtopic: "symptoms",
            difficulty: 2,
            type: "multiple_choice",
            question: "I have a ___. I need to take some medicine.",
            options: ["headache", "book", "pencil", "notebook"],
            answer: "headache",
            explanation: "A headache is a pain in your head"
        },
        {
            id: "A1-VOCAB-024",
            section: "vocabulary",
            topic: "health",
            subtopic: "feelings",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm not feeling well. I'm ___.",
            options: ["sick", "happy", "tired", "hungry"],
            answer: "sick",
            explanation: "'Sick' means not feeling well"
        },

        // Numbers and Dates (1 pregunta)
        {
            id: "A1-VOCAB-025",
            section: "vocabulary",
            topic: "numbers",
            subtopic: "basic",
            difficulty: 1,
            type: "multiple_choice",
            question: "My birthday is on the ___ of July.",
            options: ["fifth", "five", "fiveth", "fivth"],
            answer: "fifth",
            explanation: "Use ordinal numbers for dates (first, second, third, etc.)"
        },

        // Matching (tipo especial)
        {
            id: "A1-VOCAB-026",
            section: "vocabulary",
            topic: "context",
            difficulty: 1,
            type: "matching",
            question: "Match each word with its meaning.",
            pairs: [
                { left: "hungry", right: "wanting food" },
                { left: "freezing", right: "very cold" },
                { left: "exhausted", right: "very tired" }
            ],
            explanation: "hungry = wanting food, freezing = very cold, exhausted = very tired."
        },

        // ============================================================
        // READING (20 preguntas en pasajes + pasajes especiales)
        // ============================================================

        // Text 1: Ana (4 preguntas)
        {
            id: "A1-READ-001",
            section: "reading",
            topic: "reading_basic",
            subtopic: "personal_info",
            difficulty: 2,
            type: "reading",
            passageTitle: "Meet Ana",
            passage: "My name is Ana. I'm from Spain. I'm a doctor. I work in a hospital.",
            questions: [
                {
                    question: "What is Ana's profession?",
                    options: ["Teacher", "Doctor", "Engineer", "Lawyer"],
                    answer: "Doctor",
                    explanation: "The text says 'I'm a doctor'"
                },
                {
                    question: "Where is Ana from?",
                    options: ["Spain", "Italy", "France", "Germany"],
                    answer: "Spain",
                    explanation: "The text says 'I'm from Spain'"
                },
                {
                    question: "Where does Ana work?",
                    options: ["In a school", "In a hospital", "In a restaurant", "In a store"],
                    answer: "In a hospital",
                    explanation: "The text says 'I work in a hospital'"
                },
                {
                    question: "What is the text about?",
                    options: ["A student", "A doctor", "A teacher", "A nurse"],
                    answer: "A doctor",
                    explanation: "The text describes a person named Ana who is a doctor"
                }
            ]
        },

        // Text 2: Daily routine (4 preguntas)
        {
            id: "A1-READ-002",
            section: "reading",
            topic: "reading_basic",
            subtopic: "daily_life",
            difficulty: 2,
            type: "reading",
            passageTitle: "A Busy Day",
            passage: "I wake up at 6 AM. I have breakfast at 7 AM. I go to work at 8 AM. I have lunch at 12 PM.",
            questions: [
                {
                    question: "When does the person have breakfast?",
                    options: ["At 6 AM", "At 7 AM", "At 8 AM", "At 12 PM"],
                    answer: "At 7 AM",
                    explanation: "The text says 'I have breakfast at 7 AM'"
                },
                {
                    question: "What time does the person go to work?",
                    options: ["At 6 AM", "At 7 AM", "At 8 AM", "At 12 PM"],
                    answer: "At 8 AM",
                    explanation: "The text says 'I go to work at 8 AM'"
                },
                {
                    question: "When does the person have lunch?",
                    options: ["At 6 AM", "At 7 AM", "At 8 AM", "At 12 PM"],
                    answer: "At 12 PM",
                    explanation: "The text says 'I have lunch at 12 PM'"
                },
                {
                    question: "What is the person's first activity?",
                    options: ["Having breakfast", "Going to work", "Waking up", "Having lunch"],
                    answer: "Waking up",
                    explanation: "The first activity mentioned is waking up at 6 AM"
                }
            ]
        },

        // Text 3: Family (4 preguntas)
        {
            id: "A1-READ-003",
            section: "reading",
            topic: "reading_basic",
            subtopic: "family",
            difficulty: 2,
            type: "reading",
            passageTitle: "My Family",
            passage: "My family is small. There are four people: my dad, my mom, my sister, and me. We live in a house with a garden. We love spending time together.",
            questions: [
                {
                    question: "How many people are in the family?",
                    options: ["Two", "Three", "Four", "Five"],
                    answer: "Four",
                    explanation: "The text says 'There are four people'"
                },
                {
                    question: "What does the family have?",
                    options: ["A pool", "A garden", "A car", "A pet"],
                    answer: "A garden",
                    explanation: "The text says 'We live in a house with a garden'"
                },
                {
                    question: "Who are the family members?",
                    options: ["Dad, mom, brother, and me", "Dad, mom, sister, and me", "Dad, mom, grandma, and me", "Dad, mom, uncle, and me"],
                    answer: "Dad, mom, sister, and me",
                    explanation: "The text mentions dad, mom, sister, and me"
                },
                {
                    question: "What does the family love to do?",
                    options: ["Travel", "Spend time together", "Watch TV", "Go to the movies"],
                    answer: "Spend time together",
                    explanation: "The text says 'We love spending time together'"
                }
            ]
        },

        // Text 4: Pizza (4 preguntas)
        {
            id: "A1-READ-004",
            section: "reading",
            topic: "reading_basic",
            subtopic: "food",
            difficulty: 2,
            type: "reading",
            passageTitle: "I Love Pizza",
            passage: "I love pizza! It's my favorite food. I always eat pizza on Friday nights. I like it with cheese and tomatoes. Sometimes I add mushrooms too.",
            questions: [
                {
                    question: "What is the person's favorite food?",
                    options: ["Pasta", "Pizza", "Salad", "Burger"],
                    answer: "Pizza",
                    explanation: "The text says 'I love pizza! It's my favorite food'"
                },
                {
                    question: "When does the person eat pizza?",
                    options: ["On Monday nights", "On Friday nights", "On Saturday nights", "On Sunday nights"],
                    answer: "On Friday nights",
                    explanation: "The text says 'I always eat pizza on Friday nights'"
                },
                {
                    question: "What does the person put on pizza?",
                    options: ["Cheese and mushrooms only", "Cheese and tomatoes", "Tomatoes and mushrooms only", "Cheese, tomatoes, and mushrooms"],
                    answer: "Cheese and tomatoes",
                    explanation: "The text says 'I like it with cheese and tomatoes. Sometimes I add mushrooms too'"
                },
                {
                    question: "What is the person's attitude towards pizza?",
                    options: ["They hate it", "They love it", "They don't like it", "They don't care about it"],
                    answer: "They love it",
                    explanation: "The text expresses strong positive feelings about pizza"
                }
            ]
        },

        // Text 5: Sports (4 preguntas)
        {
            id: "A1-READ-005",
            section: "reading",
            topic: "reading_basic",
            subtopic: "hobbies",
            difficulty: 2,
            type: "reading",
            passageTitle: "Sports",
            passage: "I love sports. I play soccer every weekend with my friends. I also like swimming. I go to the pool on Tuesdays. I don't like basketball because it's difficult for me.",
            questions: [
                {
                    question: "What sport does the person play every weekend?",
                    options: ["Swimming", "Soccer", "Basketball", "Tennis"],
                    answer: "Soccer",
                    explanation: "The text says 'I play soccer every weekend with my friends'"
                },
                {
                    question: "When does the person go swimming?",
                    options: ["On weekends", "On Tuesdays", "On Fridays", "On Mondays"],
                    answer: "On Tuesdays",
                    explanation: "The text says 'I go to the pool on Tuesdays'"
                },
                {
                    question: "Why doesn't the person like basketball?",
                    options: ["It's too easy", "It's difficult", "It's boring", "It's expensive"],
                    answer: "It's difficult",
                    explanation: "The text says 'I don't like basketball because it's difficult for me'"
                },
                {
                    question: "Which of the following is true?",
                    options: ["The person likes all sports", "The person only likes swimming", "The person likes soccer and swimming", "The person doesn't like sports"],
                    answer: "The person likes soccer and swimming",
                    explanation: "The text shows the person likes soccer and swimming but not basketball"
                }
            ]
        },

        // Pasaje especial 1: Tom (4 preguntas)
        {
            id: "A1-READ-EXT-001",
            section: "reading",
            topic: "reading_basic",
            difficulty: 1,
            type: "reading",
            passageTitle: "Tom's Day",
            passage: "Hi! My name is Tom and I am 12 years old. I live in a small town. I wake up at 6:30 in the morning. I walk to school with my friend Sam. After school, I play football in the park. On weekends I visit my grandmother.",
            questions: [
                {
                    question: "How old is Tom?",
                    options: ["10", "12", "6", "30"],
                    answer: "12",
                    explanation: "The text says Tom is 12 years old."
                },
                {
                    question: "What time does Tom wake up?",
                    options: ["6:30", "7:30", "12:00", "6:00"],
                    answer: "6:30",
                    explanation: "Tom wakes up at 6:30 in the morning."
                },
                {
                    question: "Who does Tom walk to school with?",
                    options: ["His brother", "His friend Sam", "His mother", "His grandmother"],
                    answer: "His friend Sam",
                    explanation: "Tom walks to school with his friend Sam."
                },
                {
                    question: "When does Tom visit his grandmother?",
                    options: ["On Mondays", "After school", "On weekends", "In the morning"],
                    answer: "On weekends",
                    explanation: "The last sentence says 'On weekends I visit my grandmother.'"
                }
            ]
        },

        // Pasaje especial 2: Maria (3 preguntas)
        {
            id: "A1-READ-EXT-002",
            section: "reading",
            topic: "reading_basic",
            difficulty: 1,
            type: "reading",
            passageTitle: "Maria the Nurse",
            passage: "Maria is a nurse. She works in a big hospital. She wakes up at 5 o'clock and drives to work. She helps sick people and works very hard. She likes her job because she can help others.",
            questions: [
                {
                    question: "What is Maria's job?",
                    options: ["A doctor", "A nurse", "A teacher", "A driver"],
                    answer: "A nurse",
                    explanation: "The first sentence says Maria is a nurse."
                },
                {
                    question: "How does Maria go to work?",
                    options: ["By bus", "On foot", "She drives", "By train"],
                    answer: "She drives",
                    explanation: "The text says she drives to work."
                },
                {
                    question: "Why does Maria like her job?",
                    options: [
                        "Because it is easy",
                        "Because she can help others",
                        "Because she earns a lot of money",
                        "Because the hospital is near"
                    ],
                    answer: "Because she can help others",
                    explanation: "She likes her job because she can help others."
                }
            ]
        },

        // ============================================================
        // LANGUAGE USE / CONTEXT (15 + tipos especiales)
        // ============================================================

        // Social Context (3 preguntas)
        {
            id: "A1-LANG-001",
            section: "language_use",
            topic: "social",
            subtopic: "greetings",
            difficulty: 1,
            type: "image_context",
            question: "Use the scene to choose the best greeting.",
            image: {
                assetId: "a1-morning-greeting-scene",
                description: "Two classmates meeting at the school entrance at 8:00 a.m., both smiling and waving."
            },
            options: ["Good morning", "Good evening", "Good night", "Good afternoon"],
            answer: "Good morning",
            explanation: "The scene happens early in the day, so 'Good morning' is appropriate."
        },
        {
            id: "A1-LANG-002",
            section: "language_use",
            topic: "social",
            subtopic: "introductions",
            difficulty: 1,
            type: "multiple_choice",
            question: "What do you say when you meet someone for the first time?",
            options: ["Nice to meet you", "See you later", "Goodbye", "Thank you"],
            answer: "Nice to meet you",
            explanation: "We say 'Nice to meet you' when meeting someone for the first time"
        },
        {
            id: "A1-LANG-003",
            section: "language_use",
            topic: "social",
            subtopic: "polite",
            difficulty: 2,
            type: "multiple_choice",
            question: "What do you say when you want something?",
            options: ["Please", "Thank you", "Sorry", "Hello"],
            answer: "Please",
            explanation: "We say 'please' when making a request"
        },

        // Shopping (3 preguntas)
        {
            id: "A1-LANG-004",
            section: "language_use",
            topic: "shopping",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "I want to buy a shirt. How much is it?\n\nWhat is the person asking?",
            options: ["The size", "The color", "The price", "The brand"],
            answer: "The price",
            explanation: "'How much is it?' asks about price"
        },
        {
            id: "A1-LANG-005",
            section: "language_use",
            topic: "shopping",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "I like this shirt, but it's too ___.",
            options: ["beautiful", "expensive", "new", "clean"],
            answer: "expensive",
            explanation: "In shopping contexts, 'expensive' describes something costing a lot"
        },
        {
            id: "A1-LANG-006",
            section: "language_use",
            topic: "shopping",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need a ___ shirt. Do you have a smaller one?",
            options: ["bigger", "smaller", "longer", "shorter"],
            answer: "smaller",
            explanation: "When asking for a different size, you ask for something bigger or smaller"
        },

        // Travel (3 preguntas)
        {
            id: "A1-LANG-007",
            section: "language_use",
            topic: "travel",
            subtopic: "directions",
            difficulty: 2,
            type: "multiple_choice",
            question: "Excuse me, where is the train station?\n\nWhat is the person asking for?",
            options: ["The time", "Directions", "A price", "A drink"],
            answer: "Directions",
            explanation: "'Where is...' asks for location or directions"
        },
        {
            id: "A1-LANG-008",
            section: "language_use",
            topic: "travel",
            subtopic: "transport",
            difficulty: 2,
            type: "multiple_choice",
            question: "I want to go to the airport. How do I ___ there?",
            options: ["get", "make", "do", "have"],
            answer: "get",
            explanation: "'How do I get there?' asks about how to reach a destination"
        },
        {
            id: "A1-LANG-009",
            section: "language_use",
            topic: "travel",
            subtopic: "transport",
            difficulty: 2,
            type: "multiple_choice",
            question: "I need to ___ a taxi to the hotel.",
            options: ["take", "make", "do", "go"],
            answer: "take",
            explanation: "We 'take' taxis and other forms of transport"
        },

        // Restaurant (3 preguntas)
        {
            id: "A1-LANG-010",
            section: "language_use",
            topic: "restaurant",
            subtopic: "ordering",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'd like to ___ a table for two people.",
            options: ["book", "take", "make", "do"],
            answer: "book",
            explanation: "We 'book' or 'reserve' a table in a restaurant"
        },
        {
            id: "A1-LANG-011",
            section: "language_use",
            topic: "restaurant",
            subtopic: "ordering",
            difficulty: 2,
            type: "multiple_choice",
            question: "What would you like to ___?",
            options: ["eat", "drink", "order", "take"],
            answer: "order",
            explanation: "You 'order' food in a restaurant"
        },
        {
            id: "A1-LANG-012",
            section: "language_use",
            topic: "restaurant",
            subtopic: "check",
            difficulty: 2,
            type: "multiple_choice",
            question: "I'm ready to pay. Can I have the ___?",
            options: ["menu", "check", "fork", "plate"],
            answer: "check",
            explanation: "The 'check' or 'bill' is what you pay in a restaurant"
        },

        // Emergency (3 preguntas)
        {
            id: "A1-LANG-013",
            section: "language_use",
            topic: "emergency",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "Help! I need a ___!",
            options: ["doctor", "book", "chair", "phone"],
            answer: "doctor",
            explanation: "In an emergency, you might need a doctor"
        },
        {
            id: "A1-LANG-014",
            section: "language_use",
            topic: "emergency",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "My phone is not working. I need a ___.",
            options: ["phone", "pen", "book", "chair"],
            answer: "phone",
            explanation: "When your phone doesn't work, you need a phone"
        },
        {
            id: "A1-LANG-015",
            section: "language_use",
            topic: "emergency",
            subtopic: "basic",
            difficulty: 2,
            type: "multiple_choice",
            question: "I lost my wallet. I need to call the ___.",
            options: ["police", "restaurant", "hospital", "school"],
            answer: "police",
            explanation: "You call the police when you lose something"
        },

        // Error identification (tipo especial)
        {
            id: "A1-LANG-016",
            section: "language_use",
            topic: "error_identification",
            difficulty: 1,
            type: "error_identification",
            question: "Read the sentence. Which word is incorrect?",
            sentence: "She go to school every day.",
            options: ["She", "go", "to", "school"],
            answer: "go",
            explanation: "With 'she' we say 'goes', not 'go'."
        },

        // Ordering (tipo especial)
        {
            id: "A1-LANG-017",
            section: "language_use",
            topic: "sentence_order",
            difficulty: 1,
            type: "ordering",
            question: "Put the words in the correct order.",
            words: ["I", "have", "breakfast", "usually", "at 7:00"],
            answer: ["I", "usually", "have", "breakfast", "at 7:00"],
            explanation: "Correct order: I usually have breakfast at 7:00."
        }
    ]
};