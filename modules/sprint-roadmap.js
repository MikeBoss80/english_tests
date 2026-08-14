// modules/sprint-roadmap.js
// Roadmap operativo del proyecto basado en README.MD para mostrar avance por sprint.

export const SPRINTS = [
    { id: 0, title: 'Product Foundation', phase: 'Foundation', status: 'done', summary: 'Definir visión, producto y alcance.', deliverables: ['Vision', 'Scope', 'Product split'] },
    { id: 1, title: 'CEFR / Level Framework', phase: 'Pedagogy', status: 'done', summary: 'Establecer matrix A1–C2 con competencias y objetivos.', deliverables: ['CEFR matrix', 'Skill descriptors'] },
    { id: 2, title: 'Question Specification', phase: 'Content', status: 'done', summary: 'Definir estructura de preguntas y metadata.', deliverables: ['Question schema', 'Question contract'] },
    { id: 3, title: 'Content Guidelines', phase: 'Content', status: 'done', summary: 'Crear manual de estilo y calidad.', deliverables: ['Content guidelines'] },
    { id: 4, title: 'Audit A1/A2/B1 Existing Content', phase: 'Content', status: 'done', summary: 'Revisar calidad y limpieza del banco actual.', deliverables: ['Content audit'] },
    { id: 5, title: 'Technical Refactor', phase: 'Architecture', status: 'done', summary: 'Separar responsabilidades y preparar crecimiento.', deliverables: ['Modular app'] },
    { id: 6, title: 'Question Engine 2.0', phase: 'Architecture', status: 'done', summary: 'Motor central de carga, navegación y respuesta.', deliverables: ['AssessmentEngine'] },
    { id: 7, title: 'Question Renderer', phase: 'Architecture', status: 'done', summary: 'Renderizado por tipo de pregunta.', deliverables: ['Multiple choice', 'Fill blank', 'Ordering', 'Reading', 'Matching'] },
    { id: 8, title: 'Test Configuration', phase: 'Architecture', status: 'done', summary: 'Configurar pruebas sin hardcodear la lógica.', deliverables: ['TEST_CONFIGS', 'Reusable config'] },
    { id: 9, title: 'Scoring Model', phase: 'Evaluation', status: 'done', summary: 'Separar puntuación, evidencia y nivel estimado.', deliverables: ['ScoringEngine', 'Results model'] },
    { id: 10, title: 'Diagnostic Design', phase: 'Evaluation', status: 'done', summary: 'Diseñar prueba diagnóstica y cobertura de competencias.', deliverables: ['Balanced diagnostic design'] },
    { id: 11, title: 'Diagnostic Engine', phase: 'Evaluation', status: 'done', summary: 'Programar generación y cálculo del diagnóstico.', deliverables: ['DiagnosticEngine', 'Evidence model'] },
    { id: 12, title: 'Diagnostic Results', phase: 'Evaluation', status: 'done', summary: 'Pantalla de resultados y diagnóstico por tema.', deliverables: ['Results UI'] },
    { id: 13, title: 'Listening Architecture', phase: 'Media', status: 'done', summary: 'Añadir audio local y metadata estructurada.', deliverables: ['Audio assets', 'Asset schema'] },
    { id: 14, title: 'Listening Content', phase: 'Media', status: 'done', summary: 'Crear contenido progresivo por nivel.', deliverables: ['A1–C2 listening tracks'] },
    { id: 15, title: 'Image Architecture', phase: 'Media', status: 'done', summary: 'Permitir imágenes como parte de la resolución del ejercicio.', deliverables: ['Image question types'] },
    { id: 16, title: 'Asset Management', phase: 'Compliance', status: 'done', summary: 'Gestionar licencias y fuentes de recursos externos.', deliverables: ['Asset registry'] },
    { id: 17, title: 'A1 Full Test', phase: 'Assessment', status: 'done', summary: 'Completar el primer examen formal.', deliverables: ['A1 full exam'] },
    { id: 18, title: 'A2 Full Test', phase: 'Assessment', status: 'done', summary: 'Extender la estructura a A2.', deliverables: ['A2 full exam'] },
    { id: 19, title: 'B1 Full Test', phase: 'Assessment', status: 'done', summary: 'Aumentar complejidad y inferencia.', deliverables: ['B1 full exam'] },
    { id: 20, title: 'B2 Full Test', phase: 'Assessment', status: 'done', summary: 'Introducir argumentación y registro.', deliverables: ['B2 full exam'] },
    { id: 21, title: 'C1 Full Test', phase: 'Assessment', status: 'done', summary: 'Reforzar precisión, matiz y lectura extensa.', deliverables: ['C1 full exam'] },
    { id: 22, title: 'C2 Full Test', phase: 'Assessment', status: 'done', summary: 'Objetivo de sofisticación y registro alto.', deliverables: ['C2 full exam'] },
    { id: 23, title: 'Writing', phase: 'Practice', status: 'done', summary: 'Introducir redacción guiada y autoevaluación.', deliverables: ['Writing prompts', 'Writing storage'] },
    { id: 24, title: 'Vocabulary Practice Engine', phase: 'Practice', status: 'done', summary: 'Motor independiente para práctica.', deliverables: ['Practice engine'] },
    { id: 25, title: 'Vocabulary Content', phase: 'Practice', status: 'done', summary: 'Contenido progresivo por nivel.', deliverables: ['Vocabulary banks'] },
    { id: 26, title: 'Practice Activities', phase: 'Practice', status: 'done', summary: 'Adicionar actividades dinámicas.', deliverables: ['Matching', 'Flashcards', 'Timed challenge'] },
    { id: 27, title: 'English Levels', phase: 'Content', status: 'done', summary: 'Páginas por nivel con guía y ejemplos.', deliverables: ['A1–C2 pages'] },
    { id: 28, title: 'UX/UI', phase: 'Experience', status: 'done', summary: 'Mejorar la jerarquía visual y feedback.', deliverables: ['UI refresh'] },
    { id: 29, title: 'Mobile First', phase: 'Experience', status: 'done', summary: 'Optimizar para móvil y tablet.', deliverables: ['Responsive layout'] },
    { id: 30, title: 'Accessibility', phase: 'Experience', status: 'done', summary: 'Accesibilidad y navegación por teclado.', deliverables: ['a11y review'] },
    { id: 31, title: 'Local Storage', phase: 'Platform', status: 'done', summary: 'Guardar progreso sin cuentas ni backend.', deliverables: ['Local persistence'] },
    { id: 32, title: 'Performance', phase: 'Platform', status: 'done', summary: 'Mantener la aplicación ligera y eficiente.', deliverables: ['Optimized loading'] },
    { id: 33, title: 'QA', phase: 'Release', status: 'done', summary: 'Validar que la experiencia está estable.', deliverables: ['QA matrix', 'Regression checks'] }
];

export function getSprintById(id) {
    return SPRINTS.find(s => Number(s.id) === Number(id));
}

export function getNextSprint() {
    return SPRINTS.find(s => s.status !== 'done') || null;
}

export function getSprintSummary() {
    const done = SPRINTS.filter(s => s.status === 'done').length;
    const planned = SPRINTS.filter(s => s.status === 'planned').length;
    const active = SPRINTS.filter(s => s.status === 'active').length;
    return { total: SPRINTS.length, done, planned, active };
}

export function getSprintsByPhase(phase) {
    return SPRINTS.filter(s => s.phase === phase);
}
