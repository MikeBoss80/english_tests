# English Tests — Product Specification

**Document:** Product Specification  
**Version:** 1.0  
**Status:** Draft / Foundation  
**Project:** English Tests  
**Architecture:** Static Web Application  
**Primary deployment:** GitHub Pages  
**Future deployment:** Static hosting  
**Database:** None  
**Backend:** None  
**Framework:** None  

---

# 1. Purpose

English Tests is a lightweight, free web application designed to help users:

1. Estimate their English level.
2. Understand their strengths and weaknesses.
3. Take more detailed tests for a specific CEFR level.
4. Practice English vocabulary independently.
5. Learn what each CEFR level means.
6. Identify areas that require additional practice.

The application is intended to support learners from:

```text
A1
A2
B1
B2
C1
C2


The project uses the Common European Framework of Reference for Languages (CEFR/MCER) as its primary reference framework.

English Tests is not an official CEFR certification system and must never present its results as an official certification.

2. Product Vision

The long-term vision is to provide a simple and accessible platform where a user can enter the website and immediately answer one of three questions:

"What is my English level?"

"I already know my level. Can I take a complete test?"

"I want to practice my English."

These questions correspond to the three main product areas:

                ENGLISH TESTS
                      │
          ┌───────────┼───────────┐
          │           │           │
      Diagnostic   Level Tests   Practice
          │           │           │
       A1 → C2      A1 → C2    Vocabulary

The product should remain simple enough to understand immediately.

3. Core Product Principles

The following principles must guide all future development.

3.1 Lightweight

The application must remain fast and lightweight.

Avoid unnecessary:

frameworks;
libraries;
dependencies;
large JavaScript bundles;
unoptimized images;
unnecessary video;
external APIs.

The application should work as a static website.

3.2 Content and code must remain separated

Questions, tests, vocabulary and multimedia assets must not be tightly coupled to application logic.

The application should interpret structured data.

For example:

Question data
      ↓
Question engine
      ↓
Renderer
      ↓
User interaction
      ↓
Scoring
      ↓
Results

Adding a new question should normally require adding content rather than modifying the engine.

3.3 Educational quality over quantity

A large question bank is not useful if questions are:

ambiguous;
incorrectly classified;
unnatural;
poorly written;
inappropriate for the level;
technically broken.

Quality must take priority over the number of questions.

3.4 Clear instructions

Users must never need to guess what a question expects.

Especially for open-ended questions, instructions must explicitly explain:

what to write;
how much to write;
whether to write one word or a complete sentence;
whether punctuation matters;
what grammar or task is being practiced when appropriate.

Example:

Complete the sentence with ONE word.

instead of:

Complete the sentence.
3.5 Variety

Tests should use different activity types when pedagogically appropriate.

The product must avoid creating tests that feel like:

Question
Question
Question
Question
Question
...

using the same interaction repeatedly.

Variety can include:

multiple choice;
matching;
ordering;
fill-in-the-blank;
image-based activities;
reading;
listening;
sentence transformation;
contextual language tasks.

However, variety must never be introduced only for visual effect.

Each activity must have a pedagogical purpose.

3.6 Mobile first

The application must work well on:

mobile phones;
tablets;
laptops;
desktop computers.

Mobile usability is a core requirement, not a later enhancement.

3.7 No unnecessary account system

The initial product will not require:

registration;
login;
passwords;
user accounts;
cloud profiles.

Progress and preferences may be stored locally using browser storage when appropriate.

3.8 Privacy by default

The initial product should not require collecting personal information.

The application should be capable of operating without sending test answers to a server.

Any future analytics or advertising system must be introduced carefully and transparently.

4. Target Users

The primary users are people who want to understand or improve their English level.

Possible user groups include:

4.1 Self-learners

Users studying English independently.

Typical goal:

"I want to know my level."

4.2 Students

Students who want additional practice outside formal classes.

Typical goal:

"I need to practice vocabulary or prepare for my next level."

4.3 Teachers

Teachers may use the tests as an informal diagnostic or classroom support tool.

The platform should not claim that its results replace professional assessment.

4.4 Job seekers

Users who want an informal indication of their current English ability.

The result should clearly state that it is an estimate and not an official certification.

4.5 Casual learners

Users who simply want to practice English through short activities.

This is particularly relevant to Vocabulary Practice.

5. Main Product Areas

English Tests consists of four main areas:

1. Diagnostic Test
2. Level Tests
3. Vocabulary Practice
4. English Levels
6. Diagnostic Test
6.1 Purpose

The Diagnostic Test answers:

"What is my approximate English level?"

Its primary purpose is to estimate the user's overall level between A1 and C2.

It should also provide a profile of the user's performance across available skills.

6.2 Diagnostic output

The result should eventually provide information such as:

Estimated Overall Level

B1

and:

Skill Profile

Grammar          B1
Vocabulary       B1
Reading          B2
Listening        A2
Use of English   B1
Writing          A2/B1

The exact scoring methodology will be defined separately in the scoring specification.

6.3 Diagnostic is an estimate

The Diagnostic Test must not present itself as a formal certification.

The interface should use terminology such as:

Estimated level
Approximate level
Your current performance suggests...

Avoid statements such as:

You are officially B1.
6.4 Diagnostic should be efficient

The Diagnostic Test should provide useful information without requiring the user to complete a very long examination.

The initial version should prioritize:

level discrimination;
skill coverage;
question quality;
useful results.

Later versions may introduce adaptive testing.

6.5 Diagnostic coverage

The Diagnostic should progressively cover:

A1
A2
B1
B2
C1
C2

and the defined skills:

Grammar
Vocabulary
Reading
Listening
Use of English
Writing

Not every question needs to evaluate every skill.

The test must instead provide sufficient evidence to estimate the user's performance.

6.6 Diagnostic flow

Expected user flow:

Home
  ↓
Diagnostic Test
  ↓
Instructions
  ↓
Questions
  ↓
Review
  ↓
Submit
  ↓
Results
7. Level Tests
7.1 Purpose

Level Tests are more detailed and formal assessments for users who already know or suspect their level.

The user selects one specific level:

A1
A2
B1
B2
C1
C2

The test then focuses specifically on that level.

7.2 Difference from Diagnostic
Diagnostic Test	Level Test
Estimates user's level	Evaluates a selected level
A1 → C2	One selected level
Relatively efficient	More comprehensive
Designed for discovery	Designed for detailed evaluation
Produces overall estimate	Produces detailed level results
Skill profile	Skill-by-skill evaluation
7.3 Full Test concept

A Full Level Test should eventually cover the main available competencies:

Grammar
Vocabulary
Use of English
Reading
Listening
Writing

The exact number of questions and time allocation may vary according to the level.

7.4 Level-specific difficulty

A B1 test should not simply be an A2 test containing more questions.

Each level must have its own:

language objectives;
vocabulary expectations;
grammar expectations;
reading difficulty;
listening difficulty;
writing expectations;
task complexity.

The level framework will be defined separately.

7.5 Formality

Level Tests should feel more formal than Vocabulary Practice.

The interface should prioritize:

clear instructions;
progress;
consistency;
serious presentation;
meaningful results.

Gamification should be limited in formal tests.

8. Vocabulary Practice
8.1 Purpose

Vocabulary Practice exists to help users study and reinforce vocabulary.

It is not an exam.

The primary objective is:

Practice
Repeat
Learn
Improve
8.2 Vocabulary levels

Practice should eventually support:

A1
A2
B1
B2
C1
C2
8.3 Vocabulary topics

Possible topics include:

A1
Family
Home
Food
Numbers
Colors
School
Daily routines
Basic activities
A2
Travel
Shopping
Work
Health
Weather
Hobbies
Transportation
B1
Education
Technology
Environment
Relationships
Work
Society
Phrasal verbs
B2
Collocations
Abstract vocabulary
Professional vocabulary
Idioms
Phrasal verbs
C1/C2
Academic vocabulary
Advanced collocations
Idiomatic language
Register
Nuance
Formal and informal language

This list is an initial content direction and must be validated against the level framework before large-scale content creation.

8.4 Practice modes

Possible activities include:

Multiple choice
Matching
Fill in the blank
Image selection
Definition matching
Contextual vocabulary
Ordering

Additional game-like activities may be introduced later.

9. English Levels
9.1 Purpose

The English Levels section explains what the different CEFR levels generally represent.

Available levels:

A1
A2
B1
B2
C1
C2
9.2 Level page structure

Each level should eventually explain:

Overview
Communication
Grammar
Vocabulary
Reading
Listening
Writing
Typical abilities
Examples
How to improve
Next level
9.3 Educational purpose

The section should help users answer:

"What does B1 actually mean?"

and:

"What should I learn to move from B1 to B2?"

It should not simply list grammar topics.

10. Skills

The initial product defines six main skills:

Grammar
Vocabulary
Reading
Listening
Use of English
Writing

Detailed definitions are maintained separately in:

docs/skills.md
10.1 Grammar

Focuses on the user's understanding and use of grammatical structures.

Examples may include:

verb forms;
tense usage;
sentence structure;
articles;
prepositions;
conditionals;
modal verbs;
clauses;
advanced grammatical structures.

The exact expectations vary by CEFR level.

10.2 Vocabulary

Measures knowledge and appropriate use of words and expressions.

This may include:

meaning;
word choice;
collocations;
word formation;
contextual vocabulary;
phrasal verbs;
idiomatic language.
10.3 Reading

Measures the user's ability to understand written English.

Possible tasks include:

main idea;
specific information;
inference;
contextual meaning;
attitude;
purpose;
organization;
detail.
10.4 Listening

Measures the user's ability to understand spoken English.

Possible tasks include:

general meaning;
specific information;
speaker intention;
inference;
attitude;
context;
detail.

Listening content should eventually include appropriately selected audio assets.

10.5 Use of English

Measures the user's ability to use language appropriately within context.

Possible activities include:

contextual completion;
word choice;
sentence transformation;
error identification;
collocations;
grammar in context.

This category should complement Grammar rather than duplicate it.

10.6 Writing

Measures written language production.

Initial implementation may provide:

writing prompts;
clear instructions;
text areas;
word counts;
self-review criteria.

Automatic scoring should not be claimed unless a reliable evaluation methodology is implemented.

11. Speaking

Speaking is not part of the initial automatically scored assessment.

The application must not claim:

Speaking: B1

unless speaking has actually been evaluated using an appropriate methodology.

Future possibilities may include:

Speaking Practice
Pronunciation Practice
Recorded Responses
Manual Evaluation
Automated Evaluation

These are outside the initial scope.

12. Question Types

The application should eventually support:

multiple_choice
true_false
fill_one_word
fill_sentence
sentence_rewrite
matching
ordering
image_choice
image_description
reading
listening
open_answer

Detailed definitions are maintained in:

docs/question-types.md
13. Question Instructions

Every activity must communicate exactly what the user needs to do.

Examples:

One-word answer
Complete the sentence with ONE word.
Complete sentence
Write the complete sentence.
Rewrite
Rewrite the sentence using the past simple.
Open response
Answer in 2–3 sentences.
Listening
Listen to the audio and choose the best answer.

The instruction should appear before the activity.

14. Open-Ended Questions

Open-ended questions require special care.

The system must clearly define:

Expected response type.
Expected response length.
Whether the entire sentence is required.
Whether multiple answers may be accepted.
What is being evaluated.

Questions should not be ambiguous because the user interprets the expected response differently.

15. Context Requirement

Questions must provide enough context to support a valid answer.

Avoid questions where multiple interpretations are reasonably possible unless the activity intentionally tests interpretation.

For example, instead of:

Complete:
"I was surprised because..."

without additional context, provide an explicit task:

Write ONE possible reaction to the situation.

or use a controlled exercise where the expected answer is clearly constrained.

16. Topic Visibility

For certain activities, especially grammar exercises, the relevant topic may be displayed.

Example:

Grammar — Present Perfect

This should be used when it improves clarity or when the activity is explicitly educational.

For formal diagnostic tests, the topic may be hidden when revealing it could influence the assessment.

This distinction must be configurable.

17. Question Variety

Question variety is a product requirement.

A test should not place all non-standard activities at the very end.

Example of acceptable distribution:

Multiple Choice
Fill in the Blank
Reading
Matching
Multiple Choice
Image Activity
Ordering
Listening
Grammar
Reading

The exact distribution will depend on the test specification.

18. Multimedia

The platform should support:

Images
Audio
Video

However, multimedia should only be used when it contributes to the task.

18.1 Images

Possible uses:

Vocabulary
Context
Identification
Reading support
Visual comprehension
Description

Images should not be decorative content inside questions unless there is a clear UX reason.

18.2 Audio

Audio will primarily support Listening.

Audio should be:

optimized;
locally hosted;
appropriately licensed;
associated with metadata;
matched to the target level.
18.3 Video

Video is a future capability.

Because video files can significantly increase page size, videos should not be used by default.

When used, they should be:

short;
compressed;
optimized;
lazy loaded;
appropriately licensed.
19. Content Licensing

Every external asset must have known usage rights.

The project should maintain an asset registry containing:

Asset ID
Filename
Type
Source
Original URL
Creator
License
Download date
Modification information
Notes

The fact that an asset is available online does not mean it is free to reuse.

This is particularly important because the project may eventually display advertising.

20. Results

Results must be informative but not misleading.

A result may contain:

Overall estimated level
Overall performance
Skill profile
Strengths
Areas for improvement
Recommended practice
20.1 Example
Your estimated level

B1

Overall performance

68%

Then:

Your skill profile

Reading        B2
Grammar        B1
Vocabulary     B1
Use of English B1
Listening      A2
Writing        A2/B1
20.2 No false precision

Avoid:

B1.37

The system should communicate an appropriate level and, when relevant, a confidence or range.

21. Result Interpretation

The results should explain what the user can do next.

Example:

Your strongest area is Reading.

Your Listening performance is currently lower than your other skills.

Recommended practice:

1. Listening — A2/B1
2. Vocabulary — B1

The result should lead naturally to another part of the product.

22. Test Review

After completing a test, users should eventually be able to review:

questions;
their answers;
correct answers where appropriate;
explanations;
mistakes.

However, diagnostic tests may intentionally limit certain feedback if showing the answer could undermine the assessment design.

The behavior should therefore be configurable per test.

23. Progress Persistence

The application may use localStorage to preserve:

test progress;
completed tests;
previous results;
practice history;
user preferences.

This must remain local to the user's browser in the initial architecture.

24. Offline Considerations

The application should be designed so that core functionality does not depend on a backend.

A future Progressive Web App/offline mode may be considered, but it is not part of the initial MVP.

25. Performance Requirements

The application must prioritize performance.

Avoid:

unnecessary JavaScript;
unnecessary network requests;
large unoptimized images;
large audio files;
automatic video loading;
heavy UI frameworks.

Multimedia should be loaded only when necessary.

26. Accessibility Requirements

The application should progressively support:

semantic HTML;
keyboard navigation;
visible focus;
proper labels;
readable typography;
sufficient contrast;
accessible form controls;
accessible audio controls;
meaningful alternative text;
non-color-only feedback.

Accessibility must be considered during feature development rather than added only at the end.

27. Responsive Design

The application must work across:

Mobile
Tablet
Desktop

Critical interactions must remain usable on small screens.

Examples:

answer buttons;
text inputs;
navigation;
reading passages;
audio controls;
results;
progress indicators.
28. Architecture Requirements

The application should maintain separation between:

Content
Presentation
Application Logic
Scoring
Storage
Configuration
Assets

The question engine must not contain individual question content.

29. Static Hosting

The initial deployment target is GitHub Pages.

The application must not require:

Server-side rendering
Database
Backend API
Node server
PHP
Python backend

The project should also be deployable later to other static hosts without major architectural changes.

30. Browser Compatibility

The application should target modern browsers supporting:

ES Modules;
modern JavaScript;
modern CSS;
HTML5 audio;
standard browser storage.

Primary targets:

Chrome
Edge
Firefox
Safari
Mobile browsers
31. MVP Scope

The MVP should eventually contain:

✓ Home
✓ Diagnostic Test
✓ A1 Level Test
✓ A2 Level Test
✓ B1 Level Test
✓ B2 Level Test
✓ C1 Level Test
✓ C2 Level Test
✓ Grammar
✓ Vocabulary
✓ Reading
✓ Listening
✓ Use of English
✓ Writing tasks
✓ Vocabulary Practice
✓ Images
✓ English Levels
✓ Results
✓ Local storage
✓ Responsive UI
✓ GitHub Pages deployment
✓ Basic SEO
32. MVP Exclusions

The following are intentionally excluded from the initial MVP:

✗ User accounts
✗ Authentication
✗ Backend
✗ Database
✗ Payments
✗ Subscription system
✗ Automatic speaking evaluation
✗ Advanced AI evaluation
✗ Social network features
✗ Multiplayer
✗ Complex gamification
✗ Advertising

These may be evaluated in future phases.

33. Advertising

Advertising is a future monetization strategy.

It must not drive the core product design.

The product must first establish:

Quality
Usability
Content
Traffic
Retention

Only then should advertising be introduced.

Advertisements must never:

block questions;
obscure answers;
interfere with navigation;
create accidental clicks;
significantly degrade performance;
make the product difficult to use.
34. Analytics

Analytics may be introduced after the core product is stable.

Potential aggregate metrics include:

Page visits
Test starts
Test completion
Practice sessions
Popular levels
Popular activities
Device type
General geographic distribution

Analytics must not collect unnecessary personal information.

35. Future Adaptive Diagnostic

An adaptive diagnostic may be implemented in a future phase.

Concept:

Initial questions
       ↓
Estimate
       ↓
Select appropriate difficulty
       ↓
More evidence
       ↓
Update estimate
       ↓
Stop when sufficient evidence exists

This should only be implemented after the question bank and scoring model have been validated.

36. Future Speaking

Potential future functionality:

Speaking prompts
Audio recording
Pronunciation exercises
Speaking practice
Manual assessment
Automated assessment

This is not part of the current product scope.

37. Future Accounts

Accounts may eventually allow:

Cloud progress
Multiple devices
Long-term history
Personalized recommendations

This requires reconsideration of the current privacy and infrastructure model.

It is intentionally outside the MVP.

38. Product Quality Principles

Every feature should satisfy the following questions:

Educational

Does it help measure or improve English?

Clear

Will the user immediately understand what to do?

Useful

Does the feature provide meaningful value?

Lightweight

Can it be implemented without unnecessarily increasing application size?

Maintainable

Can another developer understand and modify it?

Scalable

Can the same architecture support A1–C2?

Accessible

Can different users interact with it successfully?

39. Definition of Done

A product feature is not considered complete simply because it works technically.

A feature is complete when:

✓ Functional requirements implemented
✓ UX reviewed
✓ Mobile reviewed
✓ Accessibility considered
✓ Error states handled
✓ Content validated
✓ Performance considered
✓ Existing features still work
✓ Documentation updated
40. Development Philosophy

English Tests should grow incrementally.

The preferred development cycle is:

Define
  ↓
Design
  ↓
Implement
  ↓
Test
  ↓
Review
  ↓
Document
  ↓
Release

Avoid large uncontrolled rewrites.

Existing functionality should be preserved when it is compatible with the new architecture.

41. Product Evolution

The expected evolution is:

Current Project
      ↓
Foundation
      ↓
Validated Content Model
      ↓
Improved Assessment Engine
      ↓
Diagnostic A1–C2
      ↓
Complete Level Tests
      ↓
Vocabulary Practice
      ↓
Multimedia
      ↓
UX Improvements
      ↓
Public Launch
      ↓
User Feedback
      ↓
Calibration
      ↓
Growth
      ↓
Monetization
42. Success Criteria

The project should eventually be considered successful when users can:

Visit the website without creating an account.
Understand the available options immediately.
Take a diagnostic test.
Receive a useful estimated level.
See how their skills compare.
Take a detailed test for a specific level.
Practice vocabulary independently.
Understand what each CEFR level represents.
Use the platform comfortably on mobile.
Complete activities without confusing instructions.
