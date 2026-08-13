# English Tests

## Roadmap Maestro de Producto y Desarrollo

### Versión inicial: Static Web Application

### Tecnología objetivo: HTML + CSS + JavaScript + JSON + assets estáticos

### Backend: ninguno

### Base de datos: ninguna

### Frameworks: ninguno

---

# 1. Visión del producto

English Tests será una plataforma web gratuita para:

1. descubrir el nivel aproximado de inglés de una persona;
2. identificar el nivel aproximado en cada competencia;
3. realizar tests completos y formales de un nivel específico;
4. practicar vocabulario de manera independiente;
5. proporcionar información clara sobre qué significa cada nivel A1–C2;
6. evolucionar posteriormente hacia una plataforma monetizada mediante publicidad.

La arquitectura inicial debe funcionar completamente como sitio estático.

```text
Browser
   │
   ├── HTML
   ├── CSS
   ├── JavaScript
   ├── JSON
   ├── Images
   └── Audio
```

No necesitamos:

* servidor;
* API propia;
* base de datos;
* login;
* cuentas;
* framework;
* sistema de administración.

---

# 2. Arquitectura funcional definitiva

La página tendrá tres grandes productos.

## A. Diagnostic Test

Pregunta principal:

> What is my English level?

Evalúa globalmente A1–C2.

Resultado:

```text
Overall Level
B1

Overall Score
68%

Skills

Grammar       B1
Vocabulary    B1
Reading       B2
Listening     A2
Use of English B1
Writing       A2/B1
```

El diagnóstico debe ser relativamente eficiente.

Su objetivo es descubrir dónde está la persona.

---

# 3. Level Tests

Sección independiente:

```text
A1 Test
A2 Test
B1 Test
B2 Test
C1 Test
C2 Test
```

Estos tests son más formales.

Cada uno deberá evaluar las competencias correspondientes al nivel.

Ejemplo:

```text
B1 Full Test

Part 1 — Grammar
Part 2 — Vocabulary
Part 3 — Use of English
Part 4 — Reading
Part 5 — Listening
Part 6 — Writing
```

El usuario podrá obtener un resultado detallado.

---

# 4. Vocabulary Practice

Sección independiente.

```text
Vocabulary Practice

A1
A2
B1
B2
C1
C2
```

Dentro de cada nivel:

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

Aquí el objetivo no es diagnosticar.

Es practicar.

---

# 5. English Levels

Debe existir una sección explicando A1–C2.

Cada nivel tendrá:

* descripción general;
* comunicación;
* grammar;
* vocabulary;
* reading;
* listening;
* writing;
* ejemplos de situaciones que puede manejar;
* principales diferencias con el nivel anterior;
* principales objetivos para avanzar al siguiente nivel.

La referencia conceptual será el CEFR, no una lista inventada de temas gramaticales. El Consejo de Europa mantiene el Companion Volume y sus versiones lingüísticas, incluida la española.

---

# 6. Principio fundamental de arquitectura

Las preguntas NO deben estar programadas directamente dentro de la lógica de la aplicación.

La aplicación debe interpretar datos.

Ejemplo:

```json
{
  "id": "A2-GRAMMAR-027",
  "level": "A2",
  "skill": "grammar",
  "topic": "past_simple",
  "type": "multiple_choice",
  "difficulty": 2,
  "question": "Yesterday, I ___ to the supermarket.",
  "options": [
    "go",
    "went",
    "gone",
    "going"
  ],
  "answer": 1
}
```

El motor solamente interpreta:

```text
type = multiple_choice
```

y sabe cómo mostrarlo.

Esto permite añadir miles de preguntas sin modificar el motor.

---

# 7. Taxonomía de preguntas

Los tipos iniciales serán:

```text
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
```

No todos estarán disponibles inmediatamente.

Se incorporarán progresivamente.

---

# 8. Metadata obligatoria

Cada pregunta debería tener como mínimo:

```text
id
level
skill
topic
subtopic
type
difficulty
question
answer
explanation
```

Cuando corresponda:

```text
options
image
audio
passage
accepted_answers
instructions
```

Opcionalmente:

```text
tags
estimated_time
source
license
author
review_status
```

---

# 9. Regla de oro para preguntas abiertas

Nunca debemos depender de que el usuario adivine qué queremos.

Toda pregunta abierta debe especificar:

### Qué debe responder

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

### Tema

Cuando sea útil:

```text
Grammar — Present Perfect
```

### Contexto

La frase debe proporcionar suficiente información para que exista una respuesta claramente esperada.

---

# 10. FASE 0 — Product Specification

## Sprint 0.1 — Definición funcional

### Objetivos

Documentar:

* Diagnostic Test;
* Level Tests;
* Vocabulary Practice;
* English Levels;
* resultados;
* competencias;
* tipos de preguntas.

### Entregables

```text
/docs
    product-specification.md
    levels.md
    skills.md
    question-types.md
    scoring.md
```

### Criterio de finalización

No debe existir ninguna funcionalidad importante sin definir.

---

# 11. Sprint 0.2 — Modelo CEFR

Crear una matriz interna:

```text
Level
│
├── Communication
├── Grammar
├── Vocabulary
├── Reading
├── Listening
├── Writing
└── Use of English
```

Para:

```text
A1
A2
B1
B2
C1
C2
```

Importante:

No copiar grandes cantidades de texto del CEFR.

Utilizarlo como referencia y redactar nuestras propias explicaciones.

### Entregable

```text
/docs/cefr-level-matrix.md
```

---

# 12. Sprint 0.3 — Definición de scoring

Antes de crear cientos de preguntas debemos decidir:

```text
¿Cómo se transforma una respuesta en una medición?
```

Debemos diferenciar:

```text
raw score
skill score
level estimate
overall estimate
```

No usar simplemente:

```text
correct answers / total questions
```

para determinar automáticamente A1–C2.

La dificultad y el nivel objetivo de cada pregunta deben formar parte del modelo.

### Entregable

```text
/docs/scoring-model.md
```

---

# 13. FASE 1 — Arquitectura técnica

## Sprint 1.1 — Reorganización del proyecto

Propuesta:

```text
/
├── index.html
├── styles.css
├── app.js
│
├── pages/
│
├── modules/
│   ├── router.js
│   ├── test-engine.js
│   ├── question-renderer.js
│   ├── scoring.js
│   ├── results.js
│   ├── storage.js
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
│
└── tests/
```

---

# 14. Sprint 1.2 — Question Engine

Crear el motor que:

1. carga preguntas;
2. selecciona preguntas;
3. muestra instrucciones;
4. renderiza el tipo correspondiente;
5. guarda respuesta;
6. valida;
7. calcula resultado;
8. pasa a la siguiente pregunta.

El motor no debe conocer el contenido específico.

---

# 15. Sprint 1.3 — Question Renderer

Crear componentes JavaScript pequeños:

```text
renderMultipleChoice()
renderTrueFalse()
renderFillOneWord()
renderFillSentence()
renderMatching()
renderOrdering()
renderImageChoice()
renderListening()
renderReading()
```

Sin framework.

Cada función debe tener una responsabilidad clara.

---

# 16. FASE 2 — Banco de preguntas

Aquí comienza una de las partes más importantes del proyecto.

No debemos crear preguntas directamente en masa.

Primero debemos crear una matriz.

Ejemplo:

| Level | Skill      | Topic            | Quantity |
| ----- | ---------- | ---------------- | -------: |
| A1    | Grammar    | Present simple   |       20 |
| A1    | Vocabulary | Daily life       |       20 |
| A1    | Reading    | Short texts      |       10 |
| A1    | Listening  | Basic situations |       10 |

Y así sucesivamente.

---

# 17. Sprint 2.1 — Question Guidelines

Crear reglas para redactar preguntas.

Cada pregunta debe pasar:

### Clarity

¿Se entiende exactamente qué debe hacer?

### Validity

¿Realmente mide la habilidad objetivo?

### Uniqueness

¿Existe una respuesta claramente correcta?

### Difficulty

¿Corresponde al nivel?

### Context

¿Tiene suficiente contexto?

### Language quality

¿Suena natural?

### Bias

¿Depende innecesariamente de conocimientos culturales?

---

# 18. Sprint 2.2 — A1 Question Bank

Crear inicialmente:

```text
30–50 preguntas
```

No intentar crear 300 todavía.

Distribución aproximada:

```text
Grammar
Vocabulary
Reading
Listening
Use of English
```

Añadir algunas preguntas visuales.

---

# 19. Sprint 2.3 — A2 Question Bank

Repetir el proceso.

Pero incrementar:

* complejidad;
* variedad;
* longitud;
* listening;
* reading;
* producción escrita.

---

# 20. Sprint 2.4 — B1 Question Bank

Aquí el nivel de exigencia aumenta significativamente.

Incluir:

* textos;
* situaciones reales;
* opiniones;
* narraciones;
* gramática contextualizada;
* listening con mayor naturalidad.

---

# 21. Sprint 2.5 — B2 Question Bank

Mayor complejidad:

* textos argumentativos;
* inferencias;
* vocabulario contextual;
* collocations;
* phrasal verbs;
* estructuras gramaticales avanzadas.

---

# 22. Sprint 2.6 — C1 Question Bank

Mayor énfasis en:

* precisión;
* matices;
* registro;
* inferencia;
* vocabulario menos frecuente;
* estructuras complejas;
* comprensión de textos extensos.

---

# 23. Sprint 2.7 — C2 Question Bank

C2 no debe ser simplemente:

> "B2 pero más difícil."

Debe medir:

* precisión;
* flexibilidad;
* comprensión de matices;
* registro;
* inferencia;
* lenguaje complejo;
* producción sofisticada.

---

# 24. FASE 3 — Diagnostic Engine

## Sprint 3.1 — Diagnóstico inicial

Crear una versión funcional del Diagnostic Test.

Primera versión:

```text
A1 → A2 → B1 → B2 → C1 → C2
```

Pero la selección debe diseñarse para proporcionar información eficiente.

---

# 25. Sprint 3.2 — Skill Scoring

Cada pregunta tendrá:

```text
skill
```

Por ejemplo:

```text
grammar
vocabulary
reading
listening
writing
use_of_english
```

El resultado se agrega por competencia.

---

# 26. Sprint 3.3 — Overall Level

Calcular:

```text
overall level
overall confidence
skill levels
```

Ejemplo:

```text
Overall: B1

Grammar: B1
Vocabulary: B1
Reading: B2
Listening: A2
Writing: B1
```

No mostrar falsa precisión.

Mejor:

```text
Estimated level: B1
```

que:

```text
Your CEFR level is exactly B1.37
```

---

# 27. Sprint 3.4 — Diagnostic Result

Diseñar:

```text
Your English Level

B1
Intermediate

Overall performance: 68%
```

Después:

```text
Your Skills

Reading       B2
Grammar       B1
Vocabulary    B1
Writing       B1
Listening     A2
```

Y:

```text
Recommended practice

Focus on:
Listening
Vocabulary
```

---

# 28. FASE 4 — Full Level Tests

Crear seis tests independientes.

```text
A1 Full Test
A2 Full Test
B1 Full Test
B2 Full Test
C1 Full Test
C2 Full Test
```

Cada uno debe evaluar todas las competencias definidas.

---

# 29. Estructura de un Full Test

Ejemplo:

```text
PART 1
Grammar

PART 2
Vocabulary

PART 3
Use of English

PART 4
Reading

PART 5
Listening

PART 6
Writing
```

La cantidad de preguntas crecerá progresivamente.

No es necesario que todos los niveles tengan exactamente el mismo número.

---

# 30. Sprint 4.1 — A1 Full Test

Crear una experiencia completa.

Debe sentirse diferente del Diagnostic.

Más formal.

Introducción:

```text
A1 English Test

This test evaluates your English at A1 level.

Estimated time:
30–40 minutes
```

---

# 31. Sprint 4.2 — A2 Full Test

Repetir arquitectura.

Incrementar dificultad.

---

# 32. Sprint 4.3 — B1 Full Test

Mayor cantidad de reading/listening.

Incorporar writing con instrucciones claras.

---

# 33. Sprint 4.4 — B2 Full Test

Mayor longitud y complejidad.

---

# 34. Sprint 4.5 — C1 Full Test

Mayor énfasis en:

* precisión;
* registro;
* inferencia;
* vocabulary;
* reading.

---

# 35. Sprint 4.6 — C2 Full Test

Test de mayor complejidad.

---

# 36. FASE 5 — Listening

Esta fase es crítica.

Para un producto estático podemos guardar:

```text
assets/audio/a1/
assets/audio/a2/
assets/audio/b1/
assets/audio/b2/
assets/audio/c1/
assets/audio/c2/
```

Cada audio debe tener metadata.

Ejemplo:

```json
{
  "id": "A2-LISTEN-001",
  "file": "a2-listen-001.mp3",
  "duration": 42,
  "accent": "British English",
  "speakers": 2
}
```

---

# 37. Fuentes de audio

Mi primera recomendación para el **audio principal de los tests** es:

### Opción 1 — Crear nuestros propios audios

Es la mejor opción.

Podemos escribir un script:

```text
A2 conversation
Speaker A
Speaker B
```

y grabarlo nosotros o mediante colaboradores.

Ventajas:

* control absoluto;
* contenido creado específicamente para el test;
* podemos controlar vocabulario;
* podemos controlar velocidad;
* podemos controlar acento;
* evitamos depender de terceros.

### Opción 2 — TTS

También podemos generar audio con un servicio de Text-to-Speech, pero debemos guardar evidencia de los términos comerciales del servicio utilizado.

### Opción 3 — repositorios externos

Para sonidos ambientales o efectos podemos estudiar Pixabay/Freesound y revisar **la licencia de cada recurso** antes de incorporarlo.

No asumir que "gratis" significa automáticamente "sin restricciones".

---

# 38. Sprint 5.1 — Listening A1/A2

Crear audios cortos.

Ejemplos:

```text
introductions
shopping
family
daily routine
directions
food
school
weather
```

---

# 39. Sprint 5.2 — Listening B1/B2

Situaciones más naturales:

```text
interviews
travel
work
news-like reports
discussions
phone conversations
presentations
```

---

# 40. Sprint 5.3 — Listening C1/C2

Mayor naturalidad:

```text
debates
lectures
interviews
complex discussions
abstract topics
different registers
```

---

# 41. FASE 6 — Images

Las imágenes serán un recurso complementario, no decoración.

Deben tener una función pedagógica.

Ejemplos:

```text
Image → vocabulary
Image → identify action
Image → describe situation
Image → infer meaning
Image → contextual grammar
```

---

# 42. Fuentes de imágenes

### Pexels

Muy útil porque ofrece fotografías y vídeos. Su licencia permite uso gratuito, incluyendo uso comercial, aunque existen restricciones sobre personas identificables, marcas, redistribución y otros usos.

[Pexels](https://www.pexels.com/?utm_source=chatgpt.com)

### Unsplash

Excelente para fotografías.

Su licencia permite descargar y utilizar las imágenes gratuitamente, incluso con fines comerciales, aunque tiene restricciones específicas y no debemos asumir que los elementos representados —por ejemplo marcas o personas— carecen de derechos adicionales.

[Unsplash](https://unsplash.com/?utm_source=chatgpt.com)

### Pixabay

Puede ser especialmente útil porque dispone de imágenes, vídeos y audio. Su licencia permite utilizar y modificar contenido gratuitamente, pero tiene usos prohibidos y restricciones que debemos revisar.

[Pixabay](https://pixabay.com/?utm_source=chatgpt.com)

---

# 43. Regla para assets

Nunca hacer esto:

```text
download image
rename image
put into project
```

sin registrar de dónde salió.

Crear:

```text
/docs/assets-registry.csv
```

Ejemplo:

```text
asset_id
type
filename
source
original_url
creator
license
date_downloaded
modifications
notes
```

Esto será extremadamente útil cuando el proyecto empiece a generar dinero.

---

# 44. FASE 7 — Video

No necesitamos vídeos en la primera versión del Diagnostic.

Primero:

```text
Images
Audio
```

Después podemos incorporar vídeo en ejercicios específicos.

Pexels permite utilizar sus vídeos gratuitamente, incluso para sitios web y proyectos comerciales, sujeto a sus restricciones de licencia.

Pixabay también dispone de vídeo bajo su licencia de contenido.

La recomendación técnica para mantener la página ligera:

**no descargar vídeos enormes si simplemente podemos usar una imagen o un audio.**

---

# 45. FASE 8 — Vocabulary Practice

## Sprint 8.1

Crear:

```text
A1 Vocabulary
A2 Vocabulary
B1 Vocabulary
B2 Vocabulary
C1 Vocabulary
C2 Vocabulary
```

---

# 46. Sprint 8.2 — Vocabulary Topics

Crear categorías.

Ejemplo:

```text
A1
├── Family
├── Food
├── Numbers
├── Colors
├── Home
├── School
└── Daily routines
```

B1:

```text
├── Work
├── Travel
├── Relationships
├── Technology
├── Environment
├── Education
├── Society
└── Phrasal verbs
```

C1/C2:

```text
├── Academic
├── Professional
├── Abstract concepts
├── Collocations
├── Idioms
├── Nuance
└── Register
```

---

# 47. Sprint 8.3 — Practice Modes

Primera versión:

```text
Multiple choice
Matching
Image choice
Fill in the blank
```

Posteriormente:

```text
Flashcards
Timed challenge
Word ordering
Definition matching
Context challenge
```

---

# 48. FASE 9 — UX/UI

## Sprint 9.1

Mobile first.

La mayoría de usuarios debe poder realizar el test cómodamente desde:

```text
phone
tablet
desktop
```

---

# 49. Sprint 9.2 — Test Experience

Cada pregunta debe mostrar:

```text
Question 12 of 40

Grammar
Past Simple

[ question ]

[ answer ]

          NEXT →
```

Evitar pantallas saturadas.

---

# 50. Sprint 9.3 — Feedback

En Practice:

```text
Correct!
```

y explicación.

En Diagnostic:

evitar revelar constantemente la respuesta porque puede afectar la evaluación.

---

# 51. Sprint 9.4 — Results

Diseñar resultados visuales pero ligeros.

No necesitamos gráficos gigantes.

CSS puede hacer:

```text
████████░░ 80%
```

o barras sencillas.

---

# 52. FASE 10 — Accessibility

Revisar:

* teclado;
* contraste;
* labels;
* focus;
* screen readers;
* tamaños de texto;
* botones;
* audio controls;
* errores de formularios.

No debe depender únicamente del color.

---

# 53. FASE 11 — Performance

Objetivo:

> La página debe sentirse instantánea.

Reglas:

### Images

Usar:

```text
WebP
AVIF
```

cuando sea conveniente.

Evitar:

```text
5 MB JPG
```

para una imagen de 300 KB.

### Audio

Preferentemente:

```text
MP3 / OGG
```

con bitrate razonable.

No utilizar audio de alta fidelidad innecesario.

### JavaScript

Sin librerías pesadas.

### Data

No cargar los 5.000 ejercicios cuando el usuario solamente está haciendo A2.

---

# 54. FASE 12 — Testing

Crear una matriz:

```text
Feature
Desktop
Mobile
Chrome
Firefox
Safari
Edge
```

Y además pruebas:

```text
Question rendering
Scoring
Navigation
Back button
Refresh
Incomplete test
Audio
Results
LocalStorage
```

---

# 55. FASE 13 — Local Storage

Sin cuentas.

Podemos guardar localmente:

```text
last diagnostic
practice scores
completed tests
preferences
```

mediante `localStorage`.

No necesitamos base de datos.

---

# 56. FASE 14 — SEO

Crear páginas indexables:

```text
/english-levels
/a1-english-test
/a2-english-test
/b1-english-test
/b2-english-test
/c1-english-test
/c2-english-test
/vocabulary-practice
```

Y contenido útil:

```text
What is A2 English?
What can a B1 English speaker do?
B2 English level explained
```

Esto puede ser importante para conseguir tráfico orgánico.

---

# 57. FASE 15 — GitHub Pages

Primera publicación real.

Checklist:

```text
HTTPS
404 page
favicon
robots.txt
sitemap.xml
mobile
performance
audio
images
tests
```

---

# 58. FASE 16 — Hosting alternativo

Una vez que la aplicación funcione:

La arquitectura debería permitir copiar:

```text
HTML
CSS
JS
JSON
assets
```

a otro hosting estático sin modificar prácticamente nada.

La aplicación no debe depender de:

```text
GitHub API
GitHub database
GitHub Actions
```

para funcionar.

GitHub Pages será simplemente:

> el primer servidor estático.

---

# 59. FASE 17 — Analytics

Solo después de tener el producto estable.

Medir:

```text
visits
test starts
test completions
completion rate
most popular level
most popular practice
device
country
```

Evitar recopilar información personal innecesaria.

---

# 60. FASE 18 — Monetization

La publicidad entra **después** de que el producto funcione.

Primero:

```text
Product
↓
Quality
↓
Traffic
↓
Retention
↓
Analytics
↓
Ads
```

Nunca:

```text
Ads
↓
User experience
```

---

# 61. Diseño publicitario futuro

Reservar espacios conceptualmente:

```text
[ Advertisement ]
```

pero no cargar publicidad durante el desarrollo inicial.

Posiciones futuras:

```text
Home
Results
Practice
Level information
```

Evitar:

```text
ad between every question
```

Especialmente en móvil.

---

# 62. FASE 19 — Content Expansion

Una vez validado el sistema:

```text
A1: 200+ questions
A2: 250+ questions
B1: 300+ questions
B2: 300+ questions
C1: 300+ questions
C2: 300+ questions
```

No son objetivos obligatorios iniciales.

Son una meta de crecimiento.

---

# 63. Content pipeline

Cada pregunta debe pasar por:

```text
Draft
 ↓
Self-review
 ↓
Level review
 ↓
Answer validation
 ↓
Language review
 ↓
Technical validation
 ↓
Published
```

Metadata:

```text
status:
draft
review
approved
published
retired
```

---

# 64. Content IDs

Nunca usar:

```text
question1
question2
question3
```

Preferir:

```text
A1-GRAMMAR-001
A1-GRAMMAR-002

B1-READING-014

C2-VOCAB-087
```

Esto facilita mantenimiento.

---

# 65. Versionado

Si una pregunta cambia:

```text
A2-GRAMMAR-027
version: 2
```

No eliminar inmediatamente el historial.

Esto será importante cuando haya muchos tests y resultados.

---

# 66. FASE 20 — Question Quality Review

Cuando tengamos usuarios reales, revisar:

```text
Questions with unusually high failure
Questions with unusually high success
Questions frequently skipped
Questions with ambiguous answers
Questions with multiple accepted answers
```

Una pregunta que estadísticamente se comporta mal debe revisarse.

---

# 67. Futuro: Adaptive Diagnostic

No implementarlo al principio.

Pero diseñar la arquitectura para poder hacerlo.

Conceptualmente:

```text
Start
 ↓
A1/A2 questions
 ↓
performance
 ↓
B1 questions
 ↓
performance
 ↓
B2 questions
 ↓
performance
 ↓
estimate
```

Esto podría hacer que el diagnóstico sea:

* más corto;
* más preciso;
* más interesante.

---

# 68. Futuro: Speaking

También debe quedar fuera del MVP.

Pero reservar la posibilidad.

Más adelante:

```text
Speaking
```

podría utilizar:

* grabación de audio;
* tareas;
* prompts;
* evaluación manual o asistida.

No debemos prometer una evaluación automática fiable de speaking simplemente porque el navegador pueda grabar audio.

---

# 69. Roadmap resumido por sprints

```text
SPRINT 0
Product specification

SPRINT 1
CEFR + skills + levels

SPRINT 2
Question schema + architecture

SPRINT 3
Question engine

SPRINT 4
A1/A2 content

SPRINT 5
B1/B2 content

SPRINT 6
C1/C2 content

SPRINT 7
Diagnostic engine

SPRINT 8
Diagnostic results

SPRINT 9
A1/A2 full tests

SPRINT 10
B1/B2 full tests

SPRINT 11
C1/C2 full tests

SPRINT 12
Listening

SPRINT 13
Images + multimedia

SPRINT 14
Vocabulary Practice

SPRINT 15
UX/UI

SPRINT 16
Accessibility

SPRINT 17
Performance

SPRINT 18
Testing / QA

SPRINT 19
SEO

SPRINT 20
GitHub Pages launch

SPRINT 21
Analytics

SPRINT 22
Content expansion

SPRINT 23
Traffic optimization

SPRINT 24
Advertising preparation

SPRINT 25
Monetization
```

---

# 70. Qué NO debemos construir todavía

Para mantener el proyecto ligero:

```text
NO React
NO Vue
NO Angular
NO Node backend
NO SQL
NO Firebase
NO authentication
NO user accounts
NO payment system
NO complicated CMS
NO AI API
NO unnecessary libraries
```

Todo eso puede llegar posteriormente si realmente lo necesitamos.

---

# 71. MVP recomendado

El primer lanzamiento no debe intentar tener todo.

El MVP debería ser:

```text
Home
│
├── Diagnostic Test
│
├── A1 Test
├── A2 Test
├── B1 Test
├── B2 Test
├── C1 Test
├── C2 Test
│
├── Vocabulary Practice
│
└── English Levels
```

Con:

```text
✓ Grammar
✓ Vocabulary
✓ Reading
✓ Listening
✓ Use of English
✓ Writing
✓ Images
✓ Results
✓ Mobile
✓ GitHub Pages
```

Pero con una cantidad inicial de contenido controlada.

---

# 72. Estrategia de contenido

Tú puedes encargarte manualmente de:

```text
questions
audio
images
videos
```

Pero debemos darte una plantilla muy estricta.

Por ejemplo:

```text
Question ID:
Level:
Skill:
Topic:
Difficulty:
Type:

Instruction:

Question:

Options:

Correct answer:

Accepted answers:

Explanation:

Image:

Audio:

Source:

License:

Reviewer:

Status:
```

Así el contenido puede crecer independientemente del código.

---

# 73. Política de assets

Crear una carpeta:

```text
/assets/
```

pero mantener un registro:

```text
assets-registry.csv
```

Ejemplo:

```text
IMG-A2-014
image
travel-airport-01.webp
Pexels
original-url
Pexels License
2026-08-13
cropped/resized
A2 vocabulary
```

Para cada recurso externo debemos conservar la información de licencia que corresponda.

Esto es especialmente importante porque el proyecto pretende eventualmente tener publicidad.

---

# 74. Mi recomendación para las imágenes

Prioridad:

```text
1. Imágenes propias
2. Pexels
3. Unsplash
4. Pixabay
```

Pexels y Unsplash son excelentes para fotografía. Pixabay es particularmente interesante porque también ofrece vídeo y audio. Siempre hay que respetar las condiciones concretas de cada licencia y las restricciones sobre marcas, personas y redistribución.

---

# 75. Mi recomendación para los audios

Prioridad:

```text
1. Audio creado específicamente para English Tests
2. TTS con derechos comerciales claramente compatibles
3. Audio con licencia abierta apropiada
4. Bibliotecas de sonidos para ambientes/efectos
```

Para listening educativo prefiero muchísimo la opción 1.

Por ejemplo:

```text
A2-LISTEN-001

Context:
At a coffee shop

Speaker 1:
...

Speaker 2:
...

Questions:
1.
2.
3.
```

Así controlamos perfectamente:

* vocabulario;
* gramática;
* velocidad;
* duración;
* acento;
* dificultad.

---

# 76. Una regla importante para el contenido

No utilizar vídeos de YouTube de terceros simplemente porque:

> "están disponibles en YouTube".

Para un proyecto que queremos monetizar, debemos tener mucho cuidado con derechos y licencias.

Es preferible:

```text
video propio
```

o:

```text
stock con licencia adecuada
```

o:

```text
contenido con licencia abierta compatible
```

---

# 77. Objetivo técnico final

La arquitectura ideal será:

```text
                  ENGLISH TESTS
                       │
            ┌──────────┴──────────┐
            │                     │
       APPLICATION             CONTENT
            │                     │
     HTML/CSS/JS             JSON/Assets
            │                     │
     ┌──────┼──────┐        ┌─────┼─────┐
     │      │      │        │     │     │
  Engine  Scoring Results  Questions Audio Images
     │
     └──────────────┐
                    │
             Local Storage
```

Sin backend.

Sin base de datos.

Sin framework.

---

# 78. Objetivo de escalabilidad

La aplicación debe poder pasar de:

```text
180 questions
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

sin que el código principal se vuelva inmanejable.

La diferencia debe estar principalmente en:

```text
/data
```

y:

```text
/assets
```

no en `app.js`.

---

# 79. Objetivo de negocio

La evolución ideal sería:

```text
FASE 1
Free static website

        ↓

FASE 2
Useful diagnostic tool

        ↓

FASE 3
Large question bank

        ↓

FASE 4
SEO + organic traffic

        ↓

FASE 5
Returning users through practice

        ↓

FASE 6
Analytics

        ↓

FASE 7
Advertising

        ↓

FASE 8
Revenue

        ↓

FASE 9
Reinvest into content
```

El objetivo no es simplemente poner anuncios.

El objetivo es crear una página que la gente **quiera volver a utilizar**.

---

# 80. Criterio para considerar terminado el proyecto

No considero que English Tests esté "terminado" cuando tengamos seis tests.

Lo consideraría listo para una primera versión sólida cuando:

```text
✓ Diagnostic funciona
✓ A1–C2 funcionan
✓ Todas las competencias están contempladas
✓ Listening funciona
✓ Preguntas tienen instrucciones claras
✓ No hay preguntas ambiguas conocidas
✓ Resultados son comprensibles
✓ Vocabulary Practice funciona
✓ Level information funciona
✓ Mobile funciona
✓ Accesibilidad básica funciona
✓ Página carga rápido
✓ No depende de backend
✓ Se puede desplegar en GitHub Pages
✓ Assets tienen registro de licencia
✓ El banco de preguntas puede crecer sin modificar el motor
✓ Hay pruebas manuales y técnicas
```

---

# 81. El principio que debería guiar todo el proyecto

**Separar código, contenido y recursos.**

```text
CODE
    Cómo funciona.

CONTENT
    Qué pregunta hacemos.

ASSETS
    Qué imagen/audio/video utilizamos.

CONFIGURATION
    Cómo construimos cada test.
```

Si mantenemos esta separación desde ahora, podremos cambiar completamente el contenido de English Tests durante años sin tener que reconstruir la aplicación.

---

# 82. Orden real de ejecución

No empezaría creando A1–C2 completos inmediatamente.

Haría:

```text
1. Arquitectura
2. Question schema
3. Question engine
4. Scoring prototype
5. 10–20 preguntas A1
6. 10–20 preguntas A2
7. Diagnostic prototype
8. Results
9. Listening prototype
10. Image prototype
11. Validar UX
12. Recién entonces escalar contenido
```

Esto evita uno de los errores más costosos:

> crear 1.000 preguntas y descubrir después que el motor o el modelo de scoring estaba mal diseñado.

---

# 83. Meta del primer gran milestone

El primer objetivo serio debería ser:

## English Tests V1 — Functional Core

```text
Diagnostic A1–C2
+
Skill scoring
+
A1–C2 Full Tests
+
Listening
+
Basic images
+
Vocabulary Practice
+
Results
+
Mobile
+
GitHub Pages
```

No necesitamos todavía:

```text
accounts
AI
speaking
gamification avanzada
ads
database
backend
```

