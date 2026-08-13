# English Tests

## Roadmap Maestro de Desarrollo

**Proyecto:** English Tests
**Repositorio:** `MikeBoss80/english_tests`
**Arquitectura objetivo:** Static Web Application
**Frameworks:** Ninguno
**Backend:** Ninguno
**Base de datos:** Ninguna
**Estado:** En desarrollo
**Objetivo inicial:** GitHub Pages
**Objetivo futuro:** Hosting estático + monetización mediante publicidad

---

# 1. Visión del proyecto

English Tests será una plataforma web gratuita para evaluar y practicar inglés desde A1 hasta C2.

El proyecto tendrá tres productos principales:

1. **Diagnostic Test**
2. **Full Level Tests**
3. **Vocabulary Practice**

Además tendrá una sección educativa:

4. **English Levels**

La aplicación será inicialmente completamente estática:

```text
HTML
CSS
JavaScript
JSON
Images
Audio
Video (future/optional)
```

No se utilizará inicialmente:

```text
Backend
Database
Authentication
User accounts
Framework
CMS
Paid API
```

La aplicación debe poder ejecutarse directamente desde GitHub Pages y posteriormente migrarse a cualquier hosting estático sin modificar su arquitectura fundamental.

---

# 2. Objetivo educativo

El objetivo no es crear simplemente un quiz de inglés.

El objetivo es construir una herramienta de evaluación y práctica que proporcione una estimación útil del nivel de una persona y un perfil de sus principales competencias.

El proyecto utilizará el **Common European Framework of Reference for Languages (CEFR/MCER)** como marco de referencia.

El CEFR define seis niveles principales:

```text
A1
A2
B1
B2
C1
C2
```

El Companion Volume de 2020 amplía y actualiza los descriptores del CEFR, incluyendo nuevas escalas relacionadas con mediación, interacción online, fonología y otras competencias.

English Tests no debe copiar el CEFR ni presentarse como una certificación oficial.

Debe utilizarlo como referencia para:

* definir objetivos;
* diseñar contenido;
* establecer dificultad;
* estructurar competencias;
* diseñar resultados;
* describir niveles.

---

# 3. Productos definitivos

## 3.1 Diagnostic Test

Pregunta principal:

> **What is my English level?**

Objetivo:

Determinar una estimación global entre A1 y C2.

Además:

> ¿En qué nivel está cada una de mis competencias?

Ejemplo:

```text
Overall estimated level
B1

Overall performance
68%

Skills

Grammar       B1
Vocabulary    B1
Reading       B2
Listening     A2
Use of English B1
Writing       A2/B1
```

El Diagnostic debe ser relativamente corto y eficiente.

No debe intentar sustituir un examen completo.

Su propósito es:

```text
DISCOVER
```

---

# 4. Full Level Tests

Los usuarios podrán seleccionar directamente un nivel:

```text
A1
A2
B1
B2
C1
C2
```

Estos tests serán más completos y formales.

Su propósito será:

```text
EVALUATE
```

Ejemplo:

```text
B1 Full English Test

Part 1 — Grammar
Part 2 — Vocabulary
Part 3 — Use of English
Part 4 — Reading
Part 5 — Listening
Part 6 — Writing
```

La estructura exacta podrá variar por nivel.

No todos los niveles tienen que utilizar exactamente el mismo número de preguntas.

---

# 5. Vocabulary Practice

Será completamente independiente de los tests diagnósticos.

Objetivo:

```text
PRACTICE
```

El usuario podrá seleccionar:

```text
A1
A2
B1
B2
C1
C2
```

Y posteriormente temas.

Ejemplo:

```text
Daily Life
Family
Food
Travel
Work
Education
Technology
Health
Shopping
Nature
Entertainment
Phrasal Verbs
Idioms
Academic Vocabulary
```

La práctica puede utilizar actividades más dinámicas que los tests formales.

---

# 6. English Levels

La plataforma explicará detalladamente cada nivel:

```text
A1 — Beginner
A2 — Elementary
B1 — Intermediate
B2 — Upper-Intermediate
C1 — Advanced
C2 — Proficient
```

Cada página de nivel deberá explicar:

* qué puede hacer normalmente una persona en ese nivel;
* comprensión;
* comunicación;
* grammar;
* vocabulary;
* reading;
* listening;
* writing;
* principales diferencias respecto al nivel anterior;
* objetivos para alcanzar el siguiente nivel;
* ejemplos de situaciones reales.

La información se redactará originalmente para English Tests tomando el CEFR como referencia. El CEFR dispone de descriptores y escalas oficiales que podemos utilizar para orientar esta matriz.

---

# 7. Competencias

La primera versión trabajará con:

```text
Grammar
Vocabulary
Reading
Listening
Use of English
Writing
```

## Speaking

Speaking no será inicialmente una competencia con puntuación automática.

La aplicación podrá explicar que speaking forma parte de una evaluación lingüística completa, pero no debemos afirmar que estamos evaluándolo si no tenemos un mecanismo fiable para hacerlo.

En una fase futura podremos estudiar:

* grabación;
* tareas;
* evaluación manual;
* evaluación asistida.

---

# 8. Diferencia entre skill y task

Una pregunta debe distinguir:

```text
skill
task type
focus
```

Ejemplo:

```json
{
  "skill": "reading",
  "task": "multiple_choice",
  "focus": "main_idea"
}
```

Otro:

```json
{
  "skill": "grammar",
  "task": "fill_one_word",
  "focus": "past_simple"
}
```

Esto evita que todo quede reducido a:

```text
section = grammar
```

---

# 9. Arquitectura general

La arquitectura objetivo será:

```text
English Tests
│
├── HTML
├── CSS
├── JavaScript
│
├── Data
│   ├── Diagnostic
│   ├── Level Tests
│   └── Vocabulary
│
├── Assets
│   ├── Images
│   ├── Audio
│   └── Video
│
└── Documentation
```

La aplicación debe separar:

```text
CODE
CONTENT
ASSETS
CONFIGURATION
DOCUMENTATION
```

---

# 10. Regla fundamental

Las preguntas no deben estar codificadas dentro del motor.

El motor debe interpretar datos.

Ejemplo:

```json
{
  "id": "A2-GRAMMAR-027",
  "level": "A2",
  "skill": "grammar",
  "topic": "past_simple",
  "subtopic": "questions",
  "type": "multiple_choice",
  "difficulty": 2,
  "instruction": "Choose the correct answer.",
  "question": "Where ___ you go yesterday?",
  "options": [
    "do",
    "did",
    "have",
    "were"
  ],
  "answer": "did",
  "explanation": "Use did to form questions in the past simple."
}
```

La aplicación debe poder mostrar esa pregunta sin tener conocimiento específico sobre `past_simple`.

---

# 11. Estructura de una pregunta

Metadata mínima:

```text
id
version
level
skill
topic
subtopic
type
difficulty
instruction
question
answer
explanation
status
```

Opcional:

```text
options
accepted_answers
image
audio
passage
word_bank
tags
estimated_time
source
license
author
review_status
```

---

# 12. IDs

Todos los ejercicios deben utilizar IDs estables.

Ejemplo:

```text
A1-GRAMMAR-001
A1-VOCABULARY-001
A2-READING-003
B1-LISTENING-012
C2-WRITING-004
```

No utilizar:

```text
question1
question2
question3
```

---

# 13. Estados del contenido

Cada recurso debe tener un estado:

```text
draft
review
approved
published
retired
```

Una pregunta no debe aparecer en producción hasta estar:

```text
approved
```

---

# 14. Tipos de preguntas

La plataforma deberá poder soportar progresivamente:

```text
multiple_choice
true_false
fill_one_word
fill_sentence
sentence_rewrite
matching
ordering
error_identification
image_choice
image_description
reading
listening
open_answer
```

No todos se implementarán en el primer sprint.

El motor debe diseñarse para poder añadir nuevos tipos sin modificar toda la aplicación.

---

# 15. Regla para preguntas abiertas

Toda pregunta abierta debe indicar claramente:

### Qué debe escribir

```text
Write ONE word.
```

o:

```text
Write the complete sentence.
```

o:

```text
Rewrite the sentence using the past simple.
```

o:

```text
Answer in 2–3 sentences.
```

### Contexto

La pregunta debe aportar suficiente información para que el usuario pueda identificar la respuesta esperada.

### Tema

Cuando sea útil:

```text
Grammar — Present Perfect
```

No se deben utilizar preguntas donde una respuesta razonable pueda ser considerada incorrecta simplemente porque el usuario interpretó la instrucción de otra manera.

---

# 16. Principio de calidad

Cada pregunta deberá pasar una revisión:

```text
Clarity
Validity
Level
Difficulty
Context
Naturalness
Uniqueness
Distractors
Grammar
Spelling
Bias
```

---

# 17. SPRINT 0 — Product Foundation

## Objetivo

Convertir la visión actual en una especificación oficial.

## Tareas

1. Consolidar la visión.
2. Definir los tres productos.
3. Definir English Levels.
4. Definir competencias.
5. Definir diferencia entre Diagnostic y Full Tests.
6. Definir Vocabulary Practice.
7. Definir límites del MVP.
8. Documentar decisiones.

## Entregables

```text
/docs/
    PRODUCT.md
    ROADMAP.md
    SCOPE.md
```

## Criterio de aceptación

Toda funcionalidad futura debe poder responder:

> ¿A qué producto pertenece?

Si no podemos responderlo, la funcionalidad todavía no está definida correctamente.

---

# 18. SPRINT 1 — CEFR / Level Framework

## Objetivo

Crear la matriz pedagógica A1–C2.

## Tareas

Para cada nivel:

```text
A1
A2
B1
B2
C1
C2
```

definir:

```text
Communication
Grammar
Vocabulary
Reading
Listening
Writing
Use of English
```

Para cada competencia definir:

* objetivos;
* dificultad;
* tipos de tareas;
* vocabulario esperado;
* estructuras;
* comprensión;
* producción.

El CEFR debe ser la referencia metodológica. El Consejo de Europa proporciona escalas y descriptores estructurados por niveles y actividades.

## Entregables

```text
/docs/CEFR.md
/docs/LEVELS.md
/docs/SKILLS.md
```

## Criterio de aceptación

Podemos tomar cualquier pregunta y explicar:

> por qué pertenece a ese nivel y competencia.

---

# 19. SPRINT 2 — Question Specification

## Objetivo

Definir exactamente cómo se representa una pregunta.

## Tareas

Crear schema oficial.

Definir:

* campos obligatorios;
* campos opcionales;
* tipos;
* respuestas;
* respuestas múltiples;
* contenido multimedia;
* explicaciones;
* metadata;
* estados;
* versionado.

## Entregables

```text
/docs/QUESTION-SPEC.md
/data/schema/question.schema.json
```

Aunque no usemos una librería de validación en producción, el schema servirá como documentación y referencia.

## Criterio de aceptación

Cualquier colaborador debería poder crear una pregunta sin tener que preguntarnos cómo estructurarla.

---

# 20. SPRINT 3 — Content Guidelines

## Objetivo

Crear un manual para producir preguntas consistentes.

## Tareas

Definir reglas para:

* Grammar;
* Vocabulary;
* Reading;
* Listening;
* Writing;
* Use of English.

Definir:

* dificultad;
* longitud;
* distractores;
* contexto;
* instrucciones;
* errores comunes;
* respuestas alternativas.

## Entregable

```text
/docs/CONTENT-GUIDELINES.md
```

## Criterio de aceptación

Dos personas diferentes deberían poder crear preguntas con calidad y estructura similares.

---

# 21. SPRINT 4 — Audit A1/A2/B1 Existing Content

## Objetivo

No crear más contenido todavía.

Primero limpiar lo existente.

Cada pregunta será clasificada:

```text
KEEP
REVISE
MOVE
REPLACE
RETIRE
```

## Revisar

* nivel;
* skill;
* topic;
* difficulty;
* claridad;
* ambigüedad;
* respuesta;
* distractores;
* explicación;
* naturalidad;
* duplicados.

## Entregable

```text
/docs/CONTENT-AUDIT.md
```

## Criterio de aceptación

Los bancos actuales deben estar suficientemente limpios para utilizarlos como base del nuevo motor.

---

# 22. SPRINT 5 — Technical Refactor

## Objetivo

Preparar el código actual para crecer.

No rehacer por rehacer.

Conservar lo que funciona.

Refactorizar solamente donde sea necesario.

## Revisar

```text
app.js
modules/
data/
styles.css
index.html
```

## Separar responsabilidades

```text
test-engine
question-renderer
scoring
results
storage
content-loader
navigation
```

## Criterio de aceptación

Ningún módulo debería encargarse simultáneamente de:

* cargar contenido;
* renderizar;
* calcular scoring;
* manejar navegación;
* construir resultados.

---

# 23. SPRINT 6 — Question Engine 2.0

## Objetivo

Crear el motor central.

Debe poder:

1. cargar configuración;
2. cargar preguntas;
3. seleccionar preguntas;
4. mezclar preguntas;
5. mostrar instrucciones;
6. renderizar;
7. registrar respuestas;
8. validar;
9. avanzar;
10. retroceder;
11. finalizar;
12. entregar resultados.

## Criterio de aceptación

El motor debe funcionar independientemente del contenido.

---

# 24. SPRINT 7 — Question Renderer

## Objetivo

Separar visualización y lógica.

Implementar primero:

```text
multiple_choice
true_false
fill_one_word
fill_sentence
matching
ordering
error_identification
reading
```

Posteriormente:

```text
image_choice
listening
open_answer
```

Cada renderer tendrá una responsabilidad.

---

# 25. SPRINT 8 — Test Configuration

## Objetivo

No hardcodear la estructura de cada test.

Crear configuraciones:

```json
{
  "id": "a2-full",
  "type": "level_test",
  "level": "A2",
  "sections": [
    "grammar",
    "vocabulary",
    "use_of_english",
    "reading",
    "listening",
    "writing"
  ]
}
```

Así podemos construir:

```text
a1-full
a2-full
b1-full
b2-full
c1-full
c2-full
diagnostic
```

sin duplicar lógica.

---

# 26. SPRINT 9 — Scoring Model

## Objetivo

Crear el nuevo modelo de evaluación.

Separar:

```text
raw score
skill score
level evidence
skill estimate
overall estimate
confidence
```

No utilizar solamente:

```text
correct / total
```

para decidir A1–C2.

Cada pregunta deberá aportar evidencia asociada a:

```text
level
skill
difficulty
```

## Entregable

```text
/docs/SCORING.md
```

## Criterio de aceptación

Podemos explicar matemáticamente cómo una respuesta contribuye al resultado.

---

# 27. SPRINT 10 — Diagnostic Design

## Objetivo

Diseñar el nuevo Diagnostic A1→C2.

Debe evaluar suficiente evidencia de diferentes niveles y competencias.

Primera versión:

```text
Core questions
+
Level-discriminating questions
+
Skill coverage
```

No será todavía un sistema adaptativo avanzado.

## Resultado

```text
Overall estimated level
+
Skill estimates
+
Overall percentage
+
Confidence
```

---

# 28. SPRINT 11 — Diagnostic Engine

## Objetivo

Programar el diagnóstico.

Debe:

* seleccionar preguntas;
* evitar excesivas repeticiones;
* cubrir niveles;
* cubrir competencias;
* registrar evidencia;
* calcular resultados.

## Criterio de aceptación

Una persona puede realizar un único test y obtener:

```text
Overall: B1

Grammar: B1
Vocabulary: B1
Reading: B2
Listening: A2
Writing: A2/B1
Use of English: B1
```

---

# 29. SPRINT 12 — Diagnostic Results

## Objetivo

Crear una página de resultados útil.

Debe mostrar:

```text
Estimated level
Overall performance
Skill profile
Strongest areas
Areas to improve
Recommended practice
```

No mostrar una falsa precisión.

Ejemplo:

```text
Estimated level: B1
```

en lugar de:

```text
B1.37
```

---

# 30. SPRINT 13 — Listening Architecture

## Objetivo

Añadir listening manteniendo la arquitectura estática.

Estructura:

```text
/assets/audio/
    a1/
    a2/
    b1/
    b2/
    c1/
    c2/
```

Los audios serán assets locales.

No dependeremos de una API externa.

## Metadata

```text
audio id
file
duration
level
accent
speakers
topic
license/source
```

---

# 31. SPRINT 14 — Listening Content

## Objetivo

Crear contenido progresivo.

### A1

* introductions;
* family;
* shopping;
* directions;
* daily routines.

### A2

* travel;
* appointments;
* work;
* school;
* everyday conversations.

### B1

* interviews;
* discussions;
* stories;
* presentations.

### B2

* debates;
* reports;
* natural conversations;
* more implicit meaning.

### C1/C2

* lectures;
* complex discussions;
* abstract topics;
* different registers;
* nuanced meaning.

---

# 32. SPRINT 15 — Image Architecture

## Objetivo

Permitir imágenes como parte real del ejercicio.

Tipos:

```text
image_choice
image_description
image_context
image_vocabulary
```

No utilizar imágenes solamente como decoración.

Cada imagen debe aportar información relevante para resolver la actividad.

---

# 33. SPRINT 16 — Asset Management

## Objetivo

Controlar legalmente todos los recursos externos.

Crear:

```text
/docs/ASSETS.md
/docs/assets-registry.csv
```

Registrar:

```text
asset_id
filename
type
source
original_url
creator
license
download_date
modifications
notes
```

Fuentes posibles:

* contenido propio;
* Pexels;
* Unsplash;
* Pixabay;
* otras fuentes con licencia claramente compatible.

Pexels, Unsplash y Pixabay tienen condiciones de uso específicas; no debemos tratar "gratis" como sin restricciones.

Para un proyecto que posteriormente tendrá publicidad, conservar la información de licencia desde el primer día.

---

# 34. SPRINT 17 — A1 Full Test

## Objetivo

Crear el primer examen formal completo.

Debe incluir:

```text
Grammar
Vocabulary
Use of English
Reading
Listening
Writing
```

No tiene que ser enorme.

Primero queremos validar la arquitectura.

## Criterio

Debe sentirse claramente diferente al Diagnostic.

---

# 35. SPRINT 18 — A2 Full Test

Aplicar la misma arquitectura.

Incrementar:

* complejidad;
* longitud;
* variedad;
* listening;
* reading;
* writing.

---

# 36. SPRINT 19 — B1 Full Test

Aumentar:

* textos;
* comprensión;
* inferencia;
* producción escrita;
* listening;
* vocabulario contextual.

---

# 37. SPRINT 20 — B2 Full Test

Incorporar:

* textos argumentativos;
* inferencias;
* collocations;
* phrasal verbs;
* estructuras complejas;
* mayor variedad de registro.

---

# 38. SPRINT 21 — C1 Full Test

Enfatizar:

* precisión;
* matices;
* registro;
* inferencia;
* vocabulario avanzado;
* textos extensos;
* producción escrita.

---

# 39. SPRINT 22 — C2 Full Test

C2 no será simplemente:

> B2 + palabras difíciles.

Debe exigir:

* precisión;
* flexibilidad;
* matiz;
* registro;
* comprensión profunda;
* lenguaje complejo;
* producción sofisticada.

---

# 40. SPRINT 23 — Writing

## Objetivo

Introducir tareas de escritura.

Primera versión:

```text
prompt
instructions
minimum/maximum guidance
text area
word count
```

El sistema podrá registrar la respuesta localmente.

Pero:

**no debemos afirmar que estamos puntuando automáticamente Writing de forma fiable.**

Primera versión:

* guardar;
* mostrar;
* permitir autoevaluación guiada;
* proporcionar criterios.

Posteriormente podremos estudiar evaluación asistida.

---

# 41. SPRINT 24 — Vocabulary Practice Engine

## Objetivo

Crear un motor independiente para práctica.

Debe permitir:

```text
level
topic
question type
practice mode
```

No utilizar el scoring del Diagnostic como si fuera práctica.

---

# 42. SPRINT 25 — Vocabulary Content

Crear contenido progresivo.

### A1

```text
family
food
numbers
colors
home
school
daily routine
```

### A2

```text
travel
shopping
work
health
weather
hobbies
```

### B1

```text
work
education
technology
environment
relationships
phrasal verbs
```

### B2

```text
collocations
idioms
abstract vocabulary
professional vocabulary
```

### C1/C2

```text
academic vocabulary
nuance
register
idiomatic language
advanced collocations
```

---

# 43. SPRINT 26 — Practice Activities

Implementar:

```text
multiple choice
matching
image choice
fill in the blank
ordering
```

Posteriormente:

```text
timed challenge
flashcards
definition matching
context challenge
```

La gamificación se aplicará principalmente aquí.

---

# 44. SPRINT 27 — English Levels

Crear páginas:

```text
A1
A2
B1
B2
C1
C2
```

Cada una debe incluir:

```text
Overview
What you can generally do
Grammar
Vocabulary
Reading
Listening
Writing
Examples
How to progress
```

El objetivo es que el usuario entienda el nivel antes de realizar un test.

---

# 45. SPRINT 28 — UX/UI

## Objetivo

Hacer que la aplicación deje de sentirse como un formulario.

Introducir:

* mejor jerarquía;
* progreso;
* instrucciones;
* estados visuales;
* feedback;
* cards;
* imágenes;
* ejercicios variados.

Pero:

**sin sacrificar velocidad.**

---

# 46. SPRINT 29 — Mobile First

Revisar completamente:

```text
320px+
mobile
tablet
desktop
```

Comprobar:

* botones;
* inputs;
* audio;
* lectura;
* imágenes;
* navegación;
* resultados.

---

# 47. SPRINT 30 — Accessibility

Revisar:

* keyboard navigation;
* focus;
* labels;
* semantic HTML;
* contrast;
* screen readers;
* form errors;
* audio controls.

No depender únicamente de color para comunicar estados.

---

# 48. SPRINT 31 — Local Storage

Mantener la filosofía sin cuentas.

Guardar localmente:

```text
last diagnostic
completed tests
practice history
preferences
```

No almacenar información sensible.

No enviar datos a un servidor.

---

# 49. SPRINT 32 — Performance

## Objetivo

Mantener la aplicación extremadamente ligera.

Reglas:

```text
No unnecessary dependencies
No huge JavaScript bundle
No huge images
No unnecessary video
No load-all-content
```

Aplicar:

```text
WebP/AVIF
compressed audio
lazy loading
deferred assets
small modules
```

Cargar solamente el contenido necesario.

---

# 50. SPRINT 33 — QA

Crear matriz de pruebas:

```text
Feature
Chrome
Firefox
Safari
Edge

Desktop
Tablet
Mobile
```

Probar:

```text
Start
Next
Previous
Review
Submit
Refresh
Incomplete test
Audio
Images
Results
LocalStorage
```

---

# 51. SPRINT 34 — Content QA

Revisar todos los contenidos.

Cada pregunta debe pasar:

```text
Language review
Level review
Difficulty review
Answer review
UX review
Technical validation
```

No publicar preguntas dudosas.

---

# 52. SPRINT 35 — Security / Robustness

Aunque no tengamos backend:

revisar:

* datos externos;
* HTML generado dinámicamente;
* inputs;
* URLs;
* assets;
* errores;
* fallos de carga.

No insertar contenido del usuario directamente como HTML.

---

# 53. SPRINT 36 — SEO Foundation

Crear:

```text
title
description
canonical
robots.txt
sitemap.xml
Open Graph
structured metadata
```

Crear contenido indexable:

```text
English Level Test
A1 English Test
A2 English Test
B1 English Test
B2 English Test
C1 English Test
C2 English Test
Vocabulary Practice
```

---

# 54. SPRINT 37 — GitHub Pages Release

## Objetivo

Publicar una V1 funcional.

Checklist:

```text
✓ HTTPS
✓ favicon
✓ responsive
✓ 404
✓ robots
✓ sitemap
✓ audio
✓ images
✓ tests
✓ results
✓ performance
```

La aplicación debe funcionar sin servicios externos obligatorios.

---

# 55. SPRINT 38 — Real User Testing

## Objetivo

Conseguir usuarios reales.

Recoger feedback sobre:

```text
clarity
difficulty
UX
instructions
questions
length
listening
results
mobile
```

Especial atención a preguntas ambiguas.

---

# 56. SPRINT 39 — Question Analytics

Cuando tengamos suficiente tráfico:

analizar:

```text
question completion
correct rate
incorrect rate
skip rate
time
```

Detectar:

```text
too easy
too difficult
ambiguous
misleading
broken
```

No eliminar automáticamente una pregunta por estadística.

Utilizar los datos como señal para revisión humana.

---

# 57. SPRINT 40 — Diagnostic Calibration

Con suficientes resultados reales:

revisar si:

```text
A1 questions behave as A1
A2 questions behave as A2
...
C2 questions behave as C2
```

Revisar especialmente preguntas que no discriminan adecuadamente.

El objetivo es que la medición sea cada vez más consistente.

---

# 58. SPRINT 41 — Adaptive Diagnostic

Solo después de validar el diagnóstico básico.

Crear una versión adaptativa:

```text
Start
↓
initial questions
↓
estimate
↓
select next difficulty
↓
estimate
↓
stop when enough evidence
```

Objetivos:

* menos preguntas;
* mayor eficiencia;
* mejor estimación.

No implementar antes de tener un banco suficientemente grande.

---

# 59. SPRINT 42 — Content Expansion

Expandir progresivamente:

```text
A1 → 200+
A2 → 250+
B1 → 300+
B2 → 300+
C1 → 300+
C2 → 300+
```

Estos números son objetivos de crecimiento, no requisitos para el primer lanzamiento.

---

# 60. SPRINT 43 — Asset Expansion

Crear biblioteca propia de:

```text
images
audio
illustrations
video
```

Prioridad:

```text
Own content
↓
Properly licensed stock
↓
Open licensed content
```

Cada recurso debe tener registro de licencia.

---

# 61. SPRINT 44 — SEO Content Expansion

Crear artículos/páginas útiles:

```text
What is A1 English?
What is A2 English?
How to know your English level
B1 English explained
B2 English explained
C1 English explained
C2 English explained
How to improve vocabulary
```

El contenido debe ser útil por sí mismo, no creado únicamente para posicionamiento.

---

# 62. SPRINT 45 — Analytics

Implementar analítica únicamente cuando la experiencia principal esté estable.

Medir, de forma agregada y respetando privacidad:

```text
visits
test starts
test completion
practice usage
popular levels
popular pages
device
country
```

No recopilar datos personales innecesarios.

---

# 63. SPRINT 46 — Monetization Preparation

Todavía no activar publicidad.

Preparar:

```text
ad locations
layout
responsive ad containers
performance considerations
privacy requirements
```

La publicidad nunca debe bloquear el test.

---

# 64. SPRINT 47 — Advertising

Activar publicidad únicamente después de:

```text
stable product
real traffic
good UX
analytics
privacy compliance
```

Posibles ubicaciones:

```text
Home
Level information
Practice
Results
```

Evitar:

```text
advertisement
question
advertisement
question
```

---

# 65. SPRINT 48 — Revenue Optimization

Una vez haya tráfico:

analizar:

```text
RPM
CTR
page views
session duration
bounce rate
test completion
```

La prioridad seguirá siendo:

```text
User experience
>
Educational value
>
Traffic
>
Revenue
```

---

# 66. SPRINT 49 — Future Speaking

Investigar:

```text
audio recording
speaking prompts
pronunciation
manual evaluation
automated evaluation
```

No implementar hasta tener un modelo fiable.

---

# 67. SPRINT 50 — Future Advanced Features

Solo si existe una necesidad real:

```text
adaptive tests
personalized practice
progress tracking
accounts
cloud synchronization
AI-assisted feedback
```

Estas funcionalidades no forman parte del MVP estático.

---

# 68. Estructura final esperada del proyecto

```text
/
├── index.html
├── styles.css
├── app.js
│
├── modules/
│   ├── test-engine.js
│   ├── question-renderer.js
│   ├── content-loader.js
│   ├── scoring-engine.js
│   ├── diagnostic-engine.js
│   ├── results.js
│   ├── storage.js
│   ├── navigation.js
│   └── accessibility.js
│
├── data/
│   ├── diagnostic/
│   ├── levels/
│   │   ├── a1/
│   │   ├── a2/
│   │   ├── b1/
│   │   ├── b2/
│   │   ├── c1/
│   │   └── c2/
│   └── vocabulary/
│
├── assets/
│   ├── images/
│   ├── audio/
│   └── video/
│
├── docs/
│   ├── PRODUCT.md
│   ├── ROADMAP.md
│   ├── CEFR.md
│   ├── LEVELS.md
│   ├── SKILLS.md
│   ├── QUESTION-SPEC.md
│   ├── CONTENT-GUIDELINES.md
│   ├── SCORING.md
│   ├── DIAGNOSTIC.md
│   ├── LEVEL-TESTS.md
│   ├── VOCABULARY.md
│   └── ASSETS.md
│
└── tests/
```

---

# 69. Criterios globales de arquitectura

Durante todo el proyecto se deben respetar estas reglas:

### Regla 1

No introducir frameworks salvo una razón técnica demostrable.

### Regla 2

No introducir backend mientras no exista una necesidad real.

### Regla 3

No introducir base de datos mientras el producto pueda funcionar con contenido estático.

### Regla 4

No introducir dependencias grandes para resolver problemas pequeños.

### Regla 5

El contenido debe estar separado del código.

### Regla 6

Los assets deben estar registrados.

### Regla 7

Los tests deben ser configurables.

### Regla 8

El Diagnostic no es un Full Test.

### Regla 9

Vocabulary Practice no es un examen.

### Regla 10

No afirmar certificación oficial.

---

# 70. Definición de MVP

El MVP estará terminado cuando exista:

```text
✓ Home
✓ English Levels
✓ Diagnostic A1–C2
✓ Overall estimated level
✓ Skill profile
✓ A1 Full Test
✓ A2 Full Test
✓ B1 Full Test
✓ B2 Full Test
✓ C1 Full Test
✓ C2 Full Test
✓ Grammar
✓ Vocabulary
✓ Reading
✓ Listening
✓ Use of English
✓ Writing tasks
✓ Vocabulary Practice
✓ Images
✓ Mobile UI
✓ Local storage
✓ GitHub Pages
✓ SEO básico
✓ Performance aceptable
```

---

# 71. Lo que NO forma parte del MVP

```text
✗ Accounts
✗ Login
✗ Database
✗ Backend
✗ Payments
✗ AI API
✗ Automatic speaking evaluation
✗ Advanced gamification
✗ Social features
✗ Complex dashboards
✗ Advertising
```

---

# 72. Definición de calidad del MVP

No basta con que:

> "funcione".

Debe cumplir:

```text
Educationally coherent
Technically stable
Mobile friendly
Fast
Accessible
Maintainable
Scalable
License-aware
```

---

# 73. Estrategia de contenido

El contenido será una parte fundamental del proyecto.

Cada nueva pregunta debe seguir:

```text
Idea
↓
Draft
↓
Level assignment
↓
Skill assignment
↓
Difficulty assignment
↓
Answer validation
↓
Language review
↓
Technical validation
↓
Approved
↓
Published
```

---

# 74. Estrategia de assets

Para cada imagen/audio/video:

```text
Find
↓
Verify license
↓
Record source
↓
Download
↓
Optimize
↓
Rename
↓
Register
↓
Use
```

Nunca utilizar un asset externo sin conocer su procedencia y condiciones de uso.

---

# 75. Filosofía de rendimiento

English Tests debe sentirse como una página web, no como una aplicación pesada.

Objetivo:

```text
Fast initial load
Small JS
Small CSS
Optimized images
Compressed audio
Minimal dependencies
Lazy multimedia
```

No cargar contenido que el usuario no necesita.

---

# 76. Filosofía de monetización

La monetización será una consecuencia del producto.

```text
Useful product
↓
Quality content
↓
Organic traffic
↓
Returning users
↓
Analytics
↓
Advertising
↓
Revenue
```

No se diseñará la aplicación alrededor de los anuncios.

Los anuncios se diseñarán alrededor de la aplicación.

---

# 77. Roadmap de alto nivel

```text
PHASE 0
Foundation
Sprints 0–4

PHASE 1
Technical Architecture
Sprints 5–8

PHASE 2
Scoring + Diagnostic
Sprints 9–12

PHASE 3
Multimedia
Sprints 13–16

PHASE 4
Full Level Tests
Sprints 17–22

PHASE 5
Writing + Vocabulary
Sprints 23–26

PHASE 6
UX + Accessibility
Sprints 27–30

PHASE 7
Performance + QA
Sprints 31–35

PHASE 8
Launch
Sprints 36–37

PHASE 9
Validation
Sprints 38–41

PHASE 10
Growth
Sprints 42–45

PHASE 11
Monetization
Sprints 46–48

PHASE 12
Future Features
Sprints 49–50
```

---

# 78. Punto de partida actual

El repositorio ya dispone de una base funcional de aplicación estática y módulos separados. La estructura actual incluye `data`, `modules`, `app.js`, `index.html`, `styles.css` y documentación de despliegue.

Por lo tanto:

**NO se debe empezar desde cero.**

La estrategia será:

```text
Existing project
       ↓
Audit
       ↓
Refactor where necessary
       ↓
New architecture
       ↓
New scoring
       ↓
New diagnostic
       ↓
Full tests
       ↓
Practice
       ↓
Launch
```

---

# 79. Primer sprint oficial

El siguiente trabajo será:

## SPRINT 0 — PRODUCT FOUNDATION

### Objetivo

Establecer la especificación definitiva antes de modificar significativamente el código.

### Orden de ejecución

```text
0.1 Product specification
0.2 CEFR level matrix
0.3 Skills definition
0.4 Question taxonomy
0.5 Question schema
0.6 Content guidelines
0.7 Existing content audit
0.8 Scoring requirements
0.9 Diagnostic requirements
0.10 Full test requirements
0.11 Documentation restructure
```

### Resultado esperado

Al terminar Sprint 0 debemos tener una respuesta clara para:

```text
¿Qué estamos construyendo?
¿Qué mide?
¿Cómo lo mide?
¿Qué significa A1–C2?
¿Qué competencias mide?
¿Cómo se estructura una pregunta?
¿Cómo se crea contenido?
¿Cómo se calcula el resultado?
¿Cómo se diferencia Diagnostic de Full Test?
¿Cómo crecerá el banco?
¿Cómo se incorporan assets?
¿Qué pertenece al MVP?
¿Qué queda fuera?
```

**Solo después de responder esas preguntas comenzaremos a cambiar el motor de la aplicación.**

---

# 80. Regla final del proyecto

La meta no es crear rápidamente muchas funcionalidades.

La meta es construir una base pequeña, limpia y sólida que permita crecer durante años.

```text
Simple architecture
+
Strong content model
+
Good assessment methodology
+
Quality questions
+
Fast UX
=
Scalable English Tests
```

El proyecto debe poder pasar de:

```text
100 questions
```

a:

```text
500
```

a:

```text
1,000
```

a:

```text
5,000+
```

sin convertir el código en un sistema difícil de mantener.

Y debe poder pasar de:

```text
GitHub Pages
```

a:

```text
Any static hosting
```

sin reconstruir la aplicación.

---

# 81. Estado objetivo final

```text
                 ENGLISH TESTS
                       │
          ┌────────────┼────────────┐
          │            │            │
      DIAGNOSTIC    LEVEL TESTS   PRACTICE
          │            │            │
        A1–C2        A1–C2       Vocabulary
          │            │            │
          └────────────┼────────────┘
                       │
                  RESULTS
                       │
              ┌────────┴────────┐
              │                 │
         Overall Level       Skill Profile
              │                 │
             B1          Reading → B2
                         Grammar → B1
                         Listening → A2
                         etc.
```

La plataforma seguirá siendo:

```text
Free
Static
Fast
Lightweight
Mobile
Scalable
Educational
```

y posteriormente:

```text
Traffic
+
Returning Users
+
Advertising
=
Sustainable Free Product
```

---

# 82. Principio de implementación

A partir de este roadmap, cada sprint debe desarrollarse de la misma manera:

```text
1. Objective
2. Current state
3. Files affected
4. Technical changes
5. Content changes
6. Acceptance criteria
7. Manual tests
8. Regression tests
9. Commit
10. Next sprint
```

Nunca se debe saltar directamente a:

> "modifica todo el código".

Cada sprint debe dejar el repositorio en un estado funcional.

---

# 83. Regla de commits

Cada sprint importante debe producir un commit identificable.

Ejemplo:

```text
feat: complete sprint 0 product foundation
feat: implement question schema
refactor: separate question rendering
feat: implement diagnostic scoring
feat: add listening engine
content: revise A1 question bank
content: add B1 listening questions
fix: improve open answer instructions
```

Esto permitirá volver atrás fácilmente si una modificación genera problemas.

---

# 84. Próximo paso

El siguiente paso después de incorporar este roadmap al README será comenzar **SPRINT 0.1 — Product Specification**.

No debemos modificar todavía el motor de evaluación.

Primero crearemos la documentación base que servirá como contrato para todo el desarrollo posterior.

Cuando Sprint 0 esté terminado, podremos comenzar a tocar código con mucha más seguridad.
