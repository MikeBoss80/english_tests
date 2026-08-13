# English Tests — Skills Specification

**Document:** Skills Specification  
**Version:** 1.0  
**Status:** Foundation  
**Project:** English Tests  

---

# 1. Purpose

This document defines the skills that English Tests will measure and practice.

The initial product uses six main skills:

1. Grammar
2. Vocabulary
3. Reading
4. Listening
5. Use of English
6. Writing

These skills are used across:

- Diagnostic Test;
- Level Tests;
- Vocabulary Practice;
- Results;
- Recommendations;
- Content classification.

The purpose of this document is to establish a consistent definition of what each skill means within the application.

---

# 2. Skill Model

The application uses the following structure:

```text
English Ability
│
├── Grammar
├── Vocabulary
├── Reading
├── Listening
├── Use of English
└── Writing

These skills are related but should not be treated as identical.

A user may have different levels in different skills.

Example:

Overall: B1

Grammar:        B1
Vocabulary:     B1
Reading:        B2
Listening:      A2
Use of English: B1
Writing:        A2

This variation is expected and is an important part of the Diagnostic Test.

3. General Principles
3.1 Skills are not isolated

Real language ability is interconnected.

For example:

Reading
    ↓
Vocabulary
    ↓
Grammar
    ↓
Understanding meaning

A reading question may therefore involve vocabulary and grammar.

However, every assessment activity should have a primary skill.

Example:

Primary skill:
Reading

Secondary knowledge:
Vocabulary
Grammar

The primary skill determines how the result is categorized.

4. Primary Skill vs Secondary Skill

Every question should have one primary skill.

Recommended metadata:

skill: reading

Optional:

secondary_skills:
  - vocabulary

This prevents the same question from artificially increasing the score of several skills.

5. Grammar
5.1 Definition

Grammar measures the user's ability to understand and use grammatical structures accurately and appropriately.

Grammar is not limited to identifying grammatical rules.

It includes the ability to select and construct language that communicates the intended meaning.

5.2 What Grammar Measures

Grammar activities may measure:

sentence structure;
word order;
verb forms;
tense usage;
auxiliary verbs;
modal verbs;
articles;
determiners;
pronouns;
prepositions;
conjunctions;
conditionals;
passive structures;
reported speech;
relative clauses;
clauses and connectors;
agreement;
comparative structures;
gerunds and infinitives;
advanced grammatical structures.
5.3 Grammar Levels
A1

Focus on fundamental structures:

be;
subject pronouns;
possessives;
basic present simple;
basic questions;
basic negatives;
articles;
singular/plural;
demonstratives;
basic prepositions;
there is / there are;
can;
basic imperatives.

Example:

She ___ a student.

Expected ability:

is
A2

Introduce broader everyday grammar:

past simple;
present continuous;
future forms;
comparatives;
superlatives;
quantifiers;
modal verbs;
basic present perfect;
frequency expressions;
basic relative clauses;
first conditional.

Tasks should increasingly require contextual understanding.

B1

Focus on independent use of grammar:

present perfect;
past forms;
future forms;
conditionals;
passive voice;
reported speech;
relative clauses;
gerunds and infinitives;
modal verbs;
linking structures;
common complex sentences.

Grammar should increasingly be tested through context.

B2

Focus on more complex and flexible structures:

advanced conditionals;
passive structures;
reported language;
modal meaning;
complex clauses;
participle structures;
advanced tense choices;
complex sentence organization;
emphasis structures.
C1

Focus on:

grammatical precision;
complex clause structures;
inversion;
emphasis;
sophisticated passive structures;
nuanced modal meaning;
participle clauses;
advanced reporting;
subtle tense choices;
grammatical variation.
C2

Focus on:

highly precise grammatical choices;
subtle differences in meaning;
complex transformations;
stylistic variation;
advanced discourse structures;
sophisticated sentence construction.

C2 grammar questions should avoid becoming artificial rule puzzles.

5.4 Grammar Question Principle

A grammar question should ideally test the user's ability to use grammar meaningfully.

Prefer:

By the time we arrived, the movie ______.

over isolated questions when context provides a better assessment.

However, controlled questions are still acceptable when the grammatical objective is specific.

6. Vocabulary
6.1 Definition

Vocabulary measures the user's knowledge and use of words, expressions and lexical relationships.

It includes both recognition and appropriate usage.

6.2 What Vocabulary Measures

Vocabulary activities may measure:

word meaning;
word recognition;
contextual meaning;
synonyms;
antonyms;
collocations;
phrasal verbs;
idioms;
word families;
word formation;
register;
connotation;
lexical precision.
6.3 Vocabulary Levels
A1

Focus on concrete everyday vocabulary:

family;
home;
food;
numbers;
colors;
school;
clothes;
jobs;
places;
transportation;
common objects;
daily activities.

Images can be highly effective.

A2

Expand into familiar everyday topics:

travel;
shopping;
work;
health;
hobbies;
weather;
education;
relationships;
transportation;
technology.

Introduce common expressions and word combinations.

B1

Expand vocabulary toward broader everyday and social topics:

environment;
education;
technology;
society;
media;
lifestyle;
relationships;
work.

Introduce more:

collocations;
phrasal verbs;
word families;
idiomatic expressions.
B2

Focus on:

abstract vocabulary;
professional contexts;
academic contexts;
collocations;
phrasal verbs;
idioms;
word formation;
register.
C1

Focus on:

advanced collocations;
academic vocabulary;
professional vocabulary;
idiomatic language;
nuanced synonyms;
connotation;
register;
lexical precision.
C2

Focus on:

highly precise vocabulary;
subtle lexical distinctions;
advanced idioms;
figurative language;
specialized vocabulary;
sophisticated collocations;
register and connotation.
6.4 Vocabulary in Context

Vocabulary should not always be tested through:

What does this word mean?

Whenever appropriate, test vocabulary inside a meaningful context.

Example:

The company decided to ______ the project because of the lack of funding.

This can evaluate whether the learner understands which word appropriately fits the context.

7. Reading
7.1 Definition

Reading measures the user's ability to understand written English.

It includes both explicit comprehension and, at higher levels, interpretation and inference.

7.2 What Reading Measures

Reading activities may measure:

main idea;
specific information;
details;
sequence;
relationships;
inference;
contextual vocabulary;
author's purpose;
tone;
attitude;
argument structure;
implied meaning;
text organization.
7.3 Reading Levels
A1

Texts should generally be:

short;
simple;
familiar;
highly predictable.

Examples:

signs;
menus;
short profiles;
labels;
schedules;
simple messages.
A2

Texts can include:

short emails;
advertisements;
simple articles;
descriptions;
instructions;
short stories.

Questions can require identification of:

main information;
details;
simple relationships.
B1

Texts can include:

articles;
blogs;
narratives;
workplace communication;
informational texts;
opinions.

Questions can require:

inference;
contextual vocabulary;
identifying attitude;
identifying supporting information.
B2

Texts can become:

longer;
more complex;
more abstract;
less predictable.

Possible content:

opinion articles;
reports;
essays;
professional communication;
detailed journalism.

Questions can test:

implied meaning;
argument;
author's attitude;
inference;
organization.
C1

Texts may include:

academic writing;
complex reports;
essays;
journalism;
professional documents;
sophisticated opinion pieces.

Tasks may require:

interpretation;
rhetorical purpose;
subtle distinctions;
tone;
attitude;
complex argument analysis.
C2

Texts may include:

literary texts;
complex academic texts;
sophisticated journalism;
highly specialized documents;
complex argumentative writing.

Tasks may require understanding:

irony;
implicit meaning;
rhetorical strategy;
subtle tone;
complex argumentation;
nuanced language.
8. Listening
8.1 Definition

Listening measures the user's ability to understand spoken English in realistic communicative situations.

Listening must not be treated as simply "reading a transcript through audio."

The audio itself is part of the difficulty.

8.2 What Listening Measures

Listening activities may measure:

general meaning;
specific information;
details;
speaker intention;
attitude;
context;
inference;
sequence;
implied meaning;
discourse organization.
8.3 Listening Difficulty Factors

Listening difficulty may depend on:

speech speed;
pronunciation;
accent;
vocabulary;
grammar;
length;
background noise;
number of speakers;
topic familiarity;
reduced forms;
pauses;
natural hesitation.

These factors should be controlled carefully.

9. Listening Levels
A1

Audio should generally contain:

short utterances;
clear pronunciation;
familiar vocabulary;
predictable situations;
slow or moderate speed.

Examples:

introductions;
basic questions;
shopping;
simple directions;
numbers and times.
A2

Audio may include:

short conversations;
simple interviews;
announcements;
everyday situations;
short narratives.

Speech can become somewhat more natural.

B1

Audio can include:

conversations;
interviews;
short talks;
narratives;
everyday discussions.

Natural pacing can increase.

B2

Audio may include:

longer conversations;
presentations;
interviews;
podcasts;
discussions.

The learner should cope with more natural speech.

C1

Audio may include:

lectures;
debates;
interviews;
professional presentations;
complex conversations.

The learner should understand:

implied meaning;
attitude;
natural pacing;
varied accents.
C2

Audio can be highly natural and complex.

Possible content:

debates;
lectures;
interviews;
complex discussions;
spontaneous conversation.

The learner should understand subtle meaning and speaker intention.

10. Writing
10.1 Definition

Writing measures the user's ability to communicate ideas in written English.

Writing is fundamentally a productive skill.

It should therefore be treated differently from automatically scored multiple-choice activities.

10.2 What Writing Measures

Writing may evaluate:

task completion;
organization;
coherence;
grammar;
vocabulary;
clarity;
register;
sentence structure;
ability to connect ideas;
precision.
11. Writing Levels
A1

Possible tasks:

personal information;
simple sentences;
short descriptions;
basic forms;
simple messages.

Example:

Write three sentences about yourself.

A2

Possible tasks:

short emails;
messages;
descriptions;
simple narratives;
familiar topics.

Example:

Write a short message to your friend about your weekend.

B1

Possible tasks:

connected paragraphs;
informal emails;
opinions;
descriptions;
narratives;
simple essays.

The learner should communicate connected ideas.

B2

Possible tasks:

essays;
reports;
reviews;
formal emails;
proposals;
argumentative writing.

The learner should organize and support ideas clearly.

C1

Possible tasks:

formal essays;
reports;
professional communication;
academic-style responses;
critical responses.

Focus should include:

precision;
register;
coherence;
lexical range;
argumentation.
C2

Possible tasks:

sophisticated arguments;
synthesis;
critical writing;
complex professional or academic communication.

Focus should include:

nuance;
precision;
style;
flexibility;
sophisticated organization.
12. Automatic Writing Scoring

The initial version should not claim fully reliable automatic CEFR scoring for open writing.

The application may initially:

store the response locally;
display writing criteria;
provide self-review guidance;
provide model answers where appropriate;
allow manual review if implemented later.

Future automatic evaluation may be considered separately.

13. Use of English
13.1 Definition

Use of English measures the learner's ability to select and manipulate language appropriately within context.

It overlaps with Grammar and Vocabulary but has a different primary purpose.

The emphasis is on:

How language works in context.

13.2 Why It Is Separate

Consider:

Grammar:
Can the learner identify the correct grammatical structure?

Vocabulary:
Does the learner know the meaning of a word?

Use of English:
Can the learner choose the appropriate language in context?
13.3 Possible Activities

Use of English may include:

contextual gap filling;
word choice;
sentence transformation;
error correction;
collocations;
word formation;
contextual grammar;
contextual vocabulary;
paraphrasing.
13.4 Use of English by Level
A1

Focus on basic contextual language.

A2

Focus on everyday grammar and vocabulary in short contexts.

B1

Introduce more contextual decision-making.

B2

Require more precise lexical and grammatical choices.

C1

Focus on register, nuance and complex contextual choices.

C2

Focus on subtle differences in meaning, style, register and sophisticated language use.

14. Skill Interaction

Skills often appear together.

Example:

Reading passage
      ↓
Vocabulary question

Primary skill:

Vocabulary

Even though the user must read a text.

Another example:

Audio
      ↓
Question about speaker attitude

Primary skill:

Listening

Another:

Text
      ↓
Choose correct tense

Primary skill:

Grammar

The content context does not automatically determine the primary skill.

15. Skill Metadata

Each question should eventually contain metadata similar to:

{
  "id": "b1_grammar_001",
  "level": "B1",
  "skill": "grammar",
  "topic": "present-perfect",
  "difficulty": "medium",
  "type": "multiple_choice"
}

Optional:

{
  "secondarySkills": [
    "vocabulary"
  ]
}
16. Skill and Level Are Independent Properties

Every question should have both:

Level
Skill

Example:

Level: B1
Skill: Reading

Another:

Level: B2
Skill: Grammar

This allows the application to build a complete matrix.

17. Skill Matrix

The long-term content structure should support:

              A1   A2   B1   B2   C1   C2

Grammar       ✓    ✓    ✓    ✓    ✓    ✓
Vocabulary    ✓    ✓    ✓    ✓    ✓    ✓
Reading       ✓    ✓    ✓    ✓    ✓    ✓
Listening     ✓    ✓    ✓    ✓    ✓    ✓
Use of English✓    ✓    ✓    ✓    ✓    ✓
Writing       ✓    ✓    ✓    ✓    ✓    ✓

The quantity of questions does not need to be identical in every cell.

The matrix exists to ensure coverage.

18. Diagnostic Coverage

The Diagnostic Test should collect evidence across multiple skills.

At minimum, the long-term diagnostic should include:

Grammar
Vocabulary
Reading
Listening
Use of English
Writing

The exact number of questions per skill will be defined by the test design and scoring model.

19. Level Test Coverage

A complete Level Test should evaluate all six primary skills:

Grammar
Vocabulary
Reading
Listening
Use of English
Writing

The distribution may vary according to the level and nature of the skill.

For example, writing may require fewer tasks because each response requires significantly more time than a multiple-choice question.

20. Vocabulary Practice Relationship

Vocabulary Practice is associated primarily with:

Vocabulary

but activities may also reinforce:

Grammar;
Reading;
Use of English.

The primary purpose remains vocabulary development.

21. Skill Balance

The application should avoid assuming:

English level = Grammar score

Grammar is only one component of language ability.

Similarly:

English level ≠ Vocabulary score

A learner may know many words but struggle to understand spoken English.

The Diagnostic Test should reflect this.

22. Recommendations

Skill results should eventually generate recommendations.

Example:

Listening: A2
Overall: B1

Possible recommendation:

Your Listening performance is below your overall estimated level. Practice A2–B1 listening activities.

Another example:

Vocabulary: B1
Reading: B2

Recommendation:

Your reading performance is strong. Expanding your vocabulary may help you understand more advanced texts.

Recommendations should be based on meaningful differences rather than small score fluctuations.

23. Skill Result Interpretation

The application should avoid over-interpreting small differences.

For example, do not automatically treat:

B1

and:

B1

with tiny score differences as a meaningful distinction.

Results should prioritize the CEFR level and broader performance pattern.

24. Skill-Specific Question Design

Each skill requires different question design.

Grammar

Prioritize:

Accuracy
Structure
Meaning
Context
Vocabulary

Prioritize:

Meaning
Context
Appropriateness
Lexical relationships
Reading

Prioritize:

Comprehension
Inference
Interpretation
Text structure
Listening

Prioritize:

Comprehension
Detail
Inference
Speaker meaning
Use of English

Prioritize:

Language choice
Context
Transformation
Appropriateness
Writing

Prioritize:

Communication
Organization
Accuracy
Range
Register
25. Avoiding Skill Contamination

A question should not become difficult only because it contains unnecessarily advanced vocabulary when the actual objective is grammar.

Example:

If the objective is:

A2 Grammar
Past Simple

do not use unnecessarily advanced vocabulary:

The archaeologist unexpectedly discovered an ancient artifact...

when the grammatical objective could be tested with:

Yesterday, Maria ______ to the supermarket.

Question difficulty should come from the intended skill whenever possible.

26. Context and Skill

Context should support the assessment rather than introduce irrelevant difficulty.

Good:

B1 Grammar
Everyday workplace context

Bad:

B1 Grammar
Extremely specialized scientific vocabulary

unless specialized vocabulary is intentionally part of the objective.

27. Multimedia and Skills

Multimedia should be associated with the appropriate primary skill.

Examples:

Image + vocabulary
→ Vocabulary

Image + situation interpretation
→ Reading / Use of English depending on task

Audio + comprehension
→ Listening

Video + comprehension
→ Listening / Reading depending on task

Image + written description
→ Writing
28. Accessibility and Skills

Every skill activity must remain accessible.

Examples:

Listening

Provide accessible controls and sufficient volume control.

Reading

Use readable typography and proper semantic structure.

Writing

Use correctly labeled text areas.

Images

Provide meaningful alternative text when the image conveys essential information.

If an image is purely decorative, it should not be required to answer the question.

29. Content Review Checklist

Before adding a question, verify:

[ ] Correct level
[ ] Correct primary skill
[ ] Appropriate topic
[ ] Clear objective
[ ] Appropriate difficulty
[ ] Clear instructions
[ ] Valid answer
[ ] No unnecessary ambiguity
[ ] Appropriate vocabulary
[ ] Appropriate grammar
[ ] Accessible presentation
30. Skill Review Checklist

When reviewing a complete test:

[ ] Grammar represented
[ ] Vocabulary represented
[ ] Reading represented
[ ] Listening represented
[ ] Use of English represented
[ ] Writing represented
[ ] No single skill dominates without reason
[ ] Question types are varied
[ ] Difficulty is appropriate
[ ] Instructions are clear
31. Future Skills

The following may be considered in future versions:

Speaking
Pronunciation
Interaction
Mediation

These are not part of the initial automatically scored skill model.

32. Speaking

Speaking is intentionally excluded from the initial skill scoring system.

The application should not estimate a user's Speaking CEFR level without an appropriate assessment method.

Future implementation could include:

Speaking Practice
      ↓
Prompt
      ↓
User recording
      ↓
Evaluation

Potential evaluation methods may include:

manual evaluation;
structured rubrics;
future automated evaluation.
33. Skill Naming Convention

Internal identifiers should use lowercase English names:

grammar
vocabulary
reading
listening
use_of_english
writing

User-facing labels may use:

Grammar
Vocabulary
Reading
Listening
Use of English
Writing
34. Relationship With Other Documents

This document defines:

What each skill means.

It does not define:

CEFR level descriptions

Those are defined in:

docs/levels.md

It does not define:

Question interaction types

Those are defined in:

docs/question-types.md

It does not define:

Score calculation

That belongs to:

docs/scoring-model.md

It does not define:

Individual test content

Test content belongs in the appropriate data files.

35. Summary

English Tests measures six primary skills:

Grammar
Vocabulary
Reading
Listening
Use of English
Writing

Each skill has a distinct purpose.

The application must recognize that English proficiency is multidimensional.

Therefore:

Overall Level
       +
Skill Profile
       =
More Useful Assessment

The Diagnostic Test uses this model to estimate the user's overall level and identify differences between skills.

The Level Tests use the same model to provide a more detailed evaluation of a specific CEFR level.

Vocabulary Practice focuses primarily on vocabulary development rather than assessment.

36. Core Principle

English ability is multidimensional.

A good English assessment should not ask only:

"How many questions did the user get right?"

It should also ask:

"What type of English ability did those questions measure?"

The purpose of this skill model is to make that distinction explicit and maintainable throughout the project.
