// modules/ui-controller.js
// Renderiza todas las pantallas de la aplicación en el contenedor #app.

import { QUESTION_BANK, SECTION_LABELS, TOPIC_LABELS } from '../data/question-bank.js';
import { getSavedProgress, buildDiagnosticQuestions, MODES, MODE_LABELS } from './assessment-engine.js';

export class UIController {
    constructor(container, actions) {
        this.container = container;
        this.actions = actions || {};
        this.currentView = null;
    }

    // ------------------------------------------------------------
    // Helper: escape básico para evitar HTML injection
    // ------------------------------------------------------------
    esc(str = '') {
        return str.replace(/[&<>"']/g, c => ({
            '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
        })[c]);
    }

    // ------------------------------------------------------------
    // PANTALLA 1: Bienvenida
    // ------------------------------------------------------------
    renderWelcome() {
        this.currentView = 'welcome';
        const levels = ['A1', 'A2', 'B1'];
        const subs = { A1: 'Beginner', A2: 'Elementary', B1: 'Intermediate' };

        this.container.innerHTML = `
            <div class="welcome-screen">
                <div class="welcome-badge"><span class="dot"></span> ENGLISH ASSESSMENT</div>
                <h1>Measure your English level</h1>
                <p class="welcome-sub">A comprehensive, self-contained A1 / A2 / B1 diagnostic test. No sign-up, no server, no data collected. Everything runs in your browser.</p>

                <div class="stats-row">
                    <div class="stat-item"><div class="stat-number">3</div><div class="stat-label">Levels</div></div>
                    <div class="stat-item"><div class="stat-number">${QUESTION_BANK.A1.length + QUESTION_BANK.A2.length + QUESTION_BANK.B1.length}</div><div class="stat-label">Questions</div></div>
                    <div class="stat-item"><div class="stat-number">6</div><div class="stat-label">Question types</div></div>
                </div>

                <div class="level-selection">
                    ${levels.map(level => {
                        const count = QUESTION_BANK[level].length;
                        const progress = this.getAnyProgress(level);
                        return this.levelCard(level, subs[level], `${count} questions · Grammar · Vocabulary · Reading · Language Use`, progress);
                    }).join('')}
                </div>

                <div class="instructions">
                    <h3>What to expect</h3>
                    <ul>
                        <li><span class="icon">📝</span> <strong>A1: ${QUESTION_BANK.A1.length} · A2: ${QUESTION_BANK.A2.length} · B1: ${QUESTION_BANK.B1.length} questions</strong> covering grammar, vocabulary, reading and real-life language use.</li>
                        <li><span class="icon">⚡</span> <strong>Two test types per level:</strong> a quick <strong>Diagnostic</strong> (balanced sample) or the complete <strong>Full Test</strong> with a detailed topic-by-topic diagnosis.</li>
                        <li><span class="icon">🧩</span> <strong>Multiple question types:</strong> multiple choice, fill in the blank, matching, ordering and error identification.</li>
                        <li><span class="icon">⏱️</span> Suggested time: <strong>10–15 minutes</strong> for diagnostic, <strong>35–50 minutes</strong> for the full test.</li>
                        <li><span class="icon">💾</span> Your progress is <strong>saved automatically</strong> in this browser.</li>
                        <li><span class="icon">📊</span> At the end: overall score, level badge and a <strong>detailed topic-by-topic diagnosis</strong> with study recommendations.</li>
                        <li><span class="icon">🖨️</span> You can <strong>print or save the result as PDF</strong>.</li>
                    </ul>
                </div>

                <p class="privacy-note">🔒 Your answers never leave this device.</p>
            </div>
        `;

        this.container.querySelectorAll('[data-action="start"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.actions.selectLevel(btn.dataset.level);
            });
        });
        this.container.querySelectorAll('.level-card').forEach(card => {
            card.addEventListener('click', () => this.actions.selectLevel(card.dataset.level));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.actions.selectLevel(card.dataset.level);
                }
            });
        });
    }

    getAnyProgress(level) {
        for (const mode of [MODES.DIAGNOSTIC, MODES.FULL]) {
            const p = getSavedProgress(level, mode);
            if (p && p.answers && Object.keys(p.answers).length > 0) return p;
        }
        return null;
    }

    levelCard(level, subtitle, desc, savedProgress) {
        const saved = !!savedProgress;
        const answered = saved ? Object.keys(savedProgress.answers || {}).length : 0;
        const count = QUESTION_BANK[level].length;
        const time = level === 'B1' ? '40–50 min' : '35–45 min';
        return `
            <div class="level-card ${saved ? 'has-progress' : ''}" data-level="${level}" tabindex="0" role="button" aria-label="Level ${level}: start assessment">
                <div class="level-card-head">
                    <span class="level-letter">${level}</span>
                    <div>
                        <h2>Level ${level}</h2>
                        <span class="level-subtitle">${subtitle}</span>
                    </div>
                </div>
                <p class="level-desc">${desc}</p>
                <div class="level-stats">
                    <span>📝 ${count} questions</span>
                    <span>⏱️ ~${time}</span>
                </div>
                ${saved ? `<div class="saved-box">Progress saved: <strong>${answered} answers</strong>.</div>` : ''}
                <button class="btn btn-primary btn-block" data-action="start" data-level="${level}">
                    ${saved ? 'Choose Test & Continue' : 'Choose Test'}
                </button>
            </div>
        `;
    }

    // ------------------------------------------------------------
    // PANTALLA 1.5: Selección de tipo de test (diagnóstico / completo)
    // ------------------------------------------------------------
    renderModeSelect(level) {
        this.currentView = 'mode_select';
        const fullCount = QUESTION_BANK[level].length;
        const diag = buildDiagnosticQuestions(QUESTION_BANK[level]);

        this.container.innerHTML = `
            <div class="instructions-screen">
                <div class="instruction-head">
                    <span class="section-tag">Level ${level}</span>
                    <h1>Choose your test</h1>
                    <p class="welcome-sub">The <strong>Diagnostic Test</strong> is a quick balanced sample to estimate your level. The <strong>Full Test</strong> covers every question for a deep, topic-by-topic diagnosis.</p>
                </div>

                <div class="mode-selection">
                    ${this.modeCard(level, MODES.DIAGNOSTIC, '⚡', 'Diagnostic Test', `${diag.length} questions · ~10–15 min`, 'A quick, balanced sample across all topics for a fast level estimate.', getSavedProgress(level, MODES.DIAGNOSTIC))}
                    ${this.modeCard(level, MODES.FULL, '🎯', 'Full Test', `${fullCount} questions · ~35–50 min`, 'The complete bank with the most detailed topic-by-topic diagnosis.', getSavedProgress(level, MODES.FULL))}
                </div>

                <div class="nav-actions">
                    <button class="btn btn-secondary" id="mode-back-home-btn">← Home</button>
                </div>
            </div>
        `;

        this.container.querySelectorAll('[data-action="begin"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.actions.beginMode(btn.dataset.level, btn.dataset.mode);
            });
        });
        this.container.querySelectorAll('[data-action="continue"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.actions.continueMode(btn.dataset.level, btn.dataset.mode);
            });
        });
        this.container.querySelectorAll('[data-action="startOver"]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                this.actions.startOver(btn.dataset.level, btn.dataset.mode);
            });
        });
        this.container.querySelectorAll('.level-card[data-mode]').forEach(card => {
            card.addEventListener('click', () => this.actions.beginMode(card.dataset.level, card.dataset.mode));
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.actions.beginMode(card.dataset.level, card.dataset.mode);
                }
            });
        });
        document.getElementById('mode-back-home-btn').addEventListener('click', () => this.actions.goHome());
    }

    modeCard(level, mode, icon, title, meta, desc, savedProgress) {
        const saved = savedProgress && savedProgress.answers && Object.keys(savedProgress.answers).length > 0;
        const answered = saved ? Object.keys(savedProgress.answers).length : 0;
        const modeCount = mode === MODES.DIAGNOSTIC
            ? buildDiagnosticQuestions(QUESTION_BANK[level]).length
            : QUESTION_BANK[level].length;
        const isCompleted = saved && answered >= modeCount;
        let actions = '';
        if (saved) {
            actions = `
                <div class="saved-box">
                    ${isCompleted ? 'Result ready to view.' : `Progress saved: <strong>${answered} answers</strong>.`}
                    <div class="saved-actions">
                        <button class="btn btn-secondary btn-sm" data-action="continue" data-level="${level}" data-mode="${mode}">${isCompleted ? 'View / Resubmit' : 'Continue'}</button>
                        <button class="btn btn-ghost btn-sm" data-action="startOver" data-level="${level}" data-mode="${mode}">Start Over</button>
                    </div>
                </div>
            `;
        }
        return `
            <div class="level-card ${saved ? 'has-progress' : ''}" data-level="${level}" data-mode="${mode}" tabindex="0" role="button" aria-label="${title}">
                <div class="level-card-head">
                    <span class="level-letter mode-icon">${icon}</span>
                    <div>
                        <h2>${title}</h2>
                        <span class="level-subtitle">${meta}</span>
                    </div>
                </div>
                <p class="level-desc">${desc}</p>
                ${actions}
                <button class="btn btn-primary btn-block" data-action="begin" data-level="${level}" data-mode="${mode}">
                    ${saved ? 'Start Over & Take' : 'Begin'} ${title} →
                </button>
            </div>
        `;
    }

    // ------------------------------------------------------------
    // PANTALLA 2: Instrucciones del nivel
    // ------------------------------------------------------------
    renderInstructions(level, mode, totalQuestions) {
        this.currentView = 'instructions';
        const modeLabel = MODE_LABELS[mode] || mode;
        this.container.innerHTML = `
            <div class="instructions-screen">
                <div class="instruction-head">
                    <span class="section-tag">Level ${level} · ${modeLabel}</span>
                    <h1>Let's get ready</h1>
                </div>
                <div class="instructions">
                    <h3>Before you start</h3>
                    <ul>
                        <li><span class="icon">📝</span> This test has <strong>${totalQuestions} questions</strong> organized in sections.</li>
                        <li><span class="icon">⬅️➡️</span> Use <strong>Previous / Next</strong> to move between questions. Change any answer before submitting.</li>
                        <li><span class="icon">⚠️</span> Unanswered questions count as incorrect, but you can review before you submit.</li>
                        <li><span class="icon">💾</span> Your progress is auto-saved so you can leave and come back later.</li>
                        <li><span class="icon">⏱️</span> There is no time limit, but avoid pauses of more than a few seconds between answers if possible.</li>
                    </ul>
                </div>
                <div class="nav-actions">
                    <button class="btn btn-primary" id="begin-btn">Begin Assessment →</button>
                    <button class="btn btn-secondary" id="back-home-btn">← Home</button>
                </div>
            </div>
        `;
        document.getElementById('begin-btn').addEventListener('click', () => this.actions.beginAssessment());
        document.getElementById('back-home-btn').addEventListener('click', () => this.actions.goHome());
    }

    // ------------------------------------------------------------
    // PANTALLA 3: Pregunta
    // ------------------------------------------------------------
    renderQuestion(question, index, progress, selectedAnswer) {
        this.currentView = 'question';
        const total = progress.total;
        const answered = progress.answered;
        const sectionLabel = SECTION_LABELS[question.section] || question.section;
        const topicLabel = TOPIC_LABELS[question.topic] || question.topic;
        const isLast = index === total - 1;

        this.container.innerHTML = `
            <div class="question-container">
                <div class="progress-section">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress.percentage}%"></div>
                    </div>
                    <div class="progress-stats">
                        <span>Answered <strong>${progress.answered}</strong> of <strong>${progress.total}</strong></span>
                        <span class="progress-text">${progress.percentage}% complete</span>
                    </div>
                </div>

                <div class="question-meta">
                    <div class="meta-tags">
                        <span class="section-tag">${sectionLabel}</span>
                        <span class="topic-tag">${topicLabel}</span>
                    </div>
                    <span class="question-counter">Question ${index + 1} of ${total}</span>
                </div>

                <div class="question-content">
                    ${this.renderQuestionBody(question, selectedAnswer)}
                </div>

                <div class="nav-actions nav-actions-question">
                    <button class="btn btn-secondary" id="prev-btn" ${index === 0 ? 'disabled' : ''}>← Previous</button>
                    ${isLast
                        ? `<button class="btn btn-primary" id="review-btn">Review & Submit ✓</button>`
                        : `<button class="btn btn-primary" id="next-btn">Next →</button>`}
                </div>

                <button class="btn btn-ghost btn-submit" id="submit-early-btn">Submit Assessment</button>
            </div>
        `;

        this.attachQuestionListeners(question);
    }

    renderQuestionBody(question, selectedAnswer) {
        switch (question.type) {
            case 'reading':
                return this.renderReading(question, selectedAnswer);
            case 'fill_blank':
                return this.renderFillBlank(question, selectedAnswer);
            case 'matching':
                return this.renderMatching(question, selectedAnswer);
            case 'ordering':
                return this.renderOrdering(question, selectedAnswer);
            case 'error_identification':
                return this.renderErrorIdentification(question, selectedAnswer);
            default:
                return this.renderMultipleChoice(question, selectedAnswer);
        }
    }

    renderMultipleChoice(question, selectedAnswer) {
        return `
            <h3 class="question-text">${this.esc(question.question)}</h3>
            <div class="options">
                ${question.options.map((opt, i) => `
                    <label class="option ${selectedAnswer === opt ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${i}"
                            ${selectedAnswer === opt ? 'checked' : ''}>
                        <span class="letter">${String.fromCharCode(65 + i)}</span>
                        <span class="text">${this.esc(opt)}</span>
                        <span class="checkmark">✓</span>
                    </label>
                `).join('')}
            </div>
        `;
    }

    renderFillBlank(question, selectedAnswer) {
        return `
            <h3 class="question-text">Complete the sentence.</h3>
            <p class="sentence-preview">${this.esc(question.question)}</p>
            <div class="fill-blank">
                <input type="text"
                    class="text-input"
                    id="fill-answer"
                    placeholder="Type your answer…"
                    value="${this.esc(selectedAnswer || '')}"
                    autocomplete="off" autocorrect="off" spellcheck="false">
            </div>
        `;
    }

    renderErrorIdentification(question, selectedAnswer) {
        return `
            <h3 class="question-text">${this.esc(question.question)}</h3>
            <div class="sentence-box">${this.esc(question.sentence || '')}</div>
            <div class="options">
                ${question.options.map((opt, i) => `
                    <label class="option ${selectedAnswer === opt ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${i}"
                            ${selectedAnswer === opt ? 'checked' : ''}>
                        <span class="letter">${String.fromCharCode(65 + i)}</span>
                        <span class="text">${this.esc(opt)}</span>
                        <span class="checkmark">✓</span>
                    </label>
                `).join('')}
            </div>
        `;
    }

    renderMatching(question, selectedAnswer = {}) {
        return `
            <h3 class="question-text">${this.esc(question.question)}</h3>
            <div class="matching-list">
                ${question.pairs.map((pair, i) => `
                    <div class="matching-row" data-pair-index="${i}">
                        <span class="matching-left">${this.esc(pair.left)}</span>
                        <select class="matching-select" data-left="${this.esc(pair.left)}">
                            <option value="">— choose —</option>
                            ${question.pairs.map(p => `
                                <option value="${this.esc(p.right)}"
                                    ${selectedAnswer[pair.left] === p.right ? 'selected' : ''}>
                                    ${this.esc(p.right)}
                                </option>
                            `).join('')}
                        </select>
                    </div>
                `).join('')}
            </div>
        `;
    }

    renderOrdering(question, selectedAnswer) {
        const used = (selectedAnswer || []);
        const remaining = question.words.filter(w => !used.includes(w));
        return `
            <h3 class="question-text">${this.esc(question.question)}</h3>
            <p class="sentence-preview">Tap the words in the correct order.</p>
            <div class="ordering-answer" id="ordering-answer" data-question="${this.esc(question.id)}">
                ${used.map(w => `<span class="chip chip-used" data-word="${this.esc(w)}">${this.esc(w)} <span class="remove-icon">✕</span></span>`).join('') || '<span class="ordering-placeholder">↓ your sentence appears here</span>'}
            </div>
            <button class="btn btn-ghost btn-sm" id="ordering-clear">Clear</button>
            <div class="ordering-bank" id="ordering-bank">
                ${remaining.map(w => `<span class="chip chip-available" data-word="${this.esc(w)}">${this.esc(w)}</span>`).join('')}
            </div>
        `;
    }

    renderReading(question, selectedAnswer) {
        return `
            <div class="reading-passage">
                <div class="reading-title">${this.esc(question.passageTitle || 'Reading')}</div>
                <p>${this.esc(question.passage)}</p>
            </div>
            <h3 class="question-text">${this.esc(question.question)}</h3>
            <div class="options">
                ${question.options.map((opt, i) => `
                    <label class="option ${selectedAnswer === opt ? 'selected' : ''}">
                        <input type="radio" name="answer" value="${i}"
                            ${selectedAnswer === opt ? 'checked' : ''}>
                        <span class="letter">${String.fromCharCode(65 + i)}</span>
                        <span class="text">${this.esc(opt)}</span>
                        <span class="checkmark">✓</span>
                    </label>
                `).join('')}
            </div>
        `;
    }

    attachQuestionListeners(question) {
        // Opciones (radio)
        this.container.querySelectorAll('input[name="answer"]').forEach(input => {
            input.addEventListener('change', () => {
                const opt = question.options[Number(input.value)];
                this.actions.setAnswer(question.id, opt);
                this.container.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
                input.closest('.option').classList.add('selected');
            });
        });

        // Fill blank
        const fillInput = this.container.querySelector('#fill-answer');
        if (fillInput) {
            const save = () => this.actions.setAnswer(question.id, fillInput.value.trim());
            fillInput.addEventListener('input', save);
        }

        // Matching
        this.container.querySelectorAll('.matching-select').forEach(select => {
            select.addEventListener('change', () => {
                const current = this.actions.getAnswer(question.id) || {};
                const left = select.dataset.left;
                current[left] = select.value;
                this.actions.setAnswer(question.id, current);
            });
        });

        // Ordering
        this.container.querySelector('#ordering-bank')?.addEventListener('click', e => {
            const chip = e.target.closest('.chip-available');
            if (!chip) return;
            this.actions.orderingAdd(wordToValue(chip));
        });
        this.container.querySelector('#ordering-answer')?.addEventListener('click', e => {
            const chip = e.target.closest('.chip-used');
            if (!chip) return;
            this.actions.orderingRemove(wordToValue(chip));
        });
        this.container.querySelector('#ordering-clear')?.addEventListener('click', () => {
            this.actions.orderingClear(question.id);
        });

        function wordToValue(chip) {
            // los elementos arrastrables llevan data-word raw; en browsers los atributos NO se escapan para lectura aquí
            return chip.getAttribute('data-word') || chip.textContent;
        }

        // Navegación
        document.getElementById('prev-btn')?.addEventListener('click', () => this.actions.previous(true));
        document.getElementById('next-btn')?.addEventListener('click', () => this.actions.next());
        document.getElementById('review-btn')?.addEventListener('click', () => this.actions.review());
        document.getElementById('submit-early-btn')?.addEventListener('click', () => this.actions.review());
    }

    // ------------------------------------------------------------
    // PANTALLA 4: Confirmación de envío
    // ------------------------------------------------------------
    renderReview(totalProgress, unanswered) {
        this.currentView = 'review';
        this.container.innerHTML = `
            <div class="confirm-screen">
                <div class="confirm-icon">${unanswered === 0 ? '✅' : '📋'}</div>
                <h1>Submit Assessment?</h1>
                <p>
                    ${totalProgress.answered === totalProgress.total
                        ? 'You have answered <strong>all</strong> the questions.'
                        : `You have answered <strong>${totalProgress.answered} of ${totalProgress.total}</strong> questions.`}
                    ${unanswered > 0 ? `<br>${unanswered} question${unanswered > 1 ? 's' : ''} ${unanswered > 1 ? 'are' : 'is'} still unanswered.` : ''}
                </p>
                <p class="confirm-sub">Unanswered questions count as incorrect. You can go back and review them before submitting.</p>

                <div class="review-nav">
                    <button class="btn btn-secondary" id="back-to-test-btn">← Back to test</button>
                    <button class="btn btn-primary" id="confirm-submit-btn">Submit Assessment ✓</button>
                </div>
            </div>
        `;

        document.getElementById('back-to-test-btn').addEventListener('click', () => this.actions.backToTest());
        document.getElementById('confirm-submit-btn').addEventListener('click', () => this.actions.submit());
    }

    // ------------------------------------------------------------
    // PANTALLA 5: Resultados
    // ------------------------------------------------------------
    renderResults(level, mode, scores, diagnostic, levelInfo) {
        this.currentView = 'results';

        // Assessment ID ejemplo: A2-2026-XXXX
        const assessmentId = this.makeAssessmentId(level);
        const modeLabel = MODE_LABELS[mode] || mode;
        const isDiag = mode === MODES.DIAGNOSTIC;

        const sectionRows = Object.entries(scores.bySection).map(([sec, data]) => {
            const label = SECTION_LABELS[sec] || sec;
            const cls = data.percentage >= 80 ? 'high' : data.percentage >= 60 ? 'medium' : 'low';
            return `
                <div class="section-bar">
                    <span class="section-bar-label">${label}</span>
                    <div class="section-bar-track">
                        <div class="section-bar-fill ${cls}" style="width: ${data.percentage}%"></div>
                    </div>
                    <span class="section-bar-pct">${data.percentage}% <small>(${data.correct}/${data.total})</small></span>
                </div>
            `;
        }).join('');

        const topicRows = diagnostic.topicAnalysis.map(t => `
            <tr>
                <td>${t.label}</td>
                <td>
                    <div class="topic-bar-track">
                        <div class="topic-bar-fill ${t.percentage >= 80 ? 'high' : t.percentage >= 60 ? 'medium' : 'low'}"
                            style="width: ${t.percentage}%"></div>
                    </div>
                    <span class="topic-pct">${t.percentage}%</span>
                </td>
                <td><span class="status-pill ${t.key}">${t.emoji} ${t.label}</span></td>
            </tr>
        `).join('');

        // Known / Developing / Needs practice
        const strongList = diagnostic.strong.map(t => `<li>${t.label}</li>`).join('');
        const developingList = diagnostic.developing.map(t => `<li>${t.label}</li>`).join('');
        const needsWorkList = diagnostic.needsWork.map(t => `<li>${t.label}</li>`).join('');

        // Recomendaciones priorizadas
        const recList = diagnostic.recommendations.map((r, i) => `
            <li class="rec-item">
                <div class="rec-head"><span class="rec-num">${i + 1}</span> <strong>${r.label}</strong> <em>(${r.percentage}%)</em></div>
                <p>${this.esc(r.text)}</p>
            </li>
        `).join('');

        this.container.innerHTML = `
            <div class="results-container">
                <div class="results-head">
                    <span class="section-tag">Level ${level} Result · ${modeLabel}</span>
                    <h2>Your English Assessment Result</h2>
                    <div class="assessment-id">Assessment ID: <strong>${assessmentId}</strong></div>
                </div>

                <div class="overall-result">
                    <div class="score-circle" style="background: conic-gradient(var(--primary) ${scores.overall * 3.6}deg, var(--gray-200) ${scores.overall * 3.6}deg);">
                        <div class="score-inner">
                            <span class="score-number">${scores.overall}%</span>
                            <span class="score-label">Overall</span>
                        </div>
                    </div>
                    <div class="level-result">
                        <span class="level-badge ${levelInfo.value.toLowerCase()}">${levelInfo.label}</span>
                        <p class="level-desc">
                            Overall score: <strong>${scores.overall}%</strong>
                            (${scores.totalCorrect} / ${scores.totalQuestions} correct)
                        </p>
                    </div>
                </div>

                <div class="section-scores">
                    <h3>Performance by Section</h3>
                    ${sectionRows}
                </div>

                <div class="diagnostic-sections">
                    <h3>Topic Diagnosis</h3>
                    <div class="topic-table-wrap">
                        <table class="topic-table">
                            <thead>
                                <tr><th>Topic</th><th>Score</th><th>Status</th></tr>
                            </thead>
                            <tbody>${topicRows}</tbody>
                        </table>
                    </div>
                </div>

                <div class="diagnostic-feedback">
                    <div class="strengths">
                        <h4>🟢 Strong</h4>
                        <ul>${strongList || '<li class="muted">No strong areas yet.</li>'}</ul>
                    </div>
                    <div class="developing-list">
                        <h4>🟡 Developing</h4>
                        <ul>${developingList || '<li class="muted">No developing areas.</li>'}</ul>
                    </div>
                    <div class="weaknesses">
                        <h4>🔴 Needs practice</h4>
                        <ul>${needsWorkList || '<li class="muted">Nothing flagged.</li>'}</ul>
                    </div>
                </div>

                <div class="recommendations">
                    <h3>Recommended study priorities</h3>
                    ${recList ? `<ul class="rec-list">${recList}</ul>` : '<p class="muted">Great job! Keep practicing to consolidate what you know.</p>'}
                </div>

                <div class="actions no-print">
                    <button class="btn btn-primary" id="print-btn">🖨 Print / Save as PDF</button>
                    <button class="btn btn-secondary" id="again-btn">Take Another Test</button>
                    <button class="btn btn-ghost" id="home-btn">Home</button>
                </div>
            </div>
        `;

        document.getElementById('print-btn').addEventListener('click', () => window.print());
        document.getElementById('again-btn').addEventListener('click', () => this.actions.restart());
        document.getElementById('home-btn').addEventListener('click', () => this.actions.goHome());
    }

    makeAssessmentId(level) {
        const letters = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
        const rand = Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * letters.length)]).join('');
        return `${level}-${new Date().getFullYear()}-${rand}`;
    }

    // ------------------------------------------------------------
    // Pantalla de error / carga
    // ------------------------------------------------------------
    renderLoading() {
        this.container.innerHTML = `<div class="loading-screen"><div class="spinner"></div><p>Loading assessment…</p></div>`;
    }
}