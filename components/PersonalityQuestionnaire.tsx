import React, { useState, useMemo } from 'react';
import Card from './common/Card';
import Button from './common/Button';

// --- Data ---
const questionnaireContent = {
  title: "Interactive Personality Questionnaire",
  instructions: "For each statement, rate how much you agree or disagree. This is a practice tool to help you understand the types of questions asked in real assessments. Answer honestly to get the most useful feedback.",
  scale: [
    { value: 1, label: "Strongly Disagree" },
    { value: 2, label: "Disagree" },
    { value: 3, label: "Neutral / Unsure" },
    { value: 4, label: "Agree" },
    { value: 5, label: "Strongly Agree" },
  ],
  categories: [
    { name: "Work Ethic & Responsibility", icon: "🛠️", questions: [
        { id: 1, text: "I always follow rules, even when no one is watching.", reverse: false },
        { id: 2, text: "I take pride in doing my job accurately.", reverse: false },
        { id: 3, text: "I prefer work where I can be trusted to manage tasks on my own.", reverse: false },
        { id: 4, text: "I never cut corners, even when I’m under pressure.", reverse: false },
        { id: 5, text: "I keep calm when unexpected problems occur at work.", reverse: false },
    ]},
    { name: "Concentration & Routine", icon: "🎯", questions: [
        { id: 6, text: "I enjoy tasks that are structured and routine.", reverse: false },
        { id: 7, text: "I can stay focused for long periods without supervision.", reverse: false },
        { id: 8, text: "I get easily distracted when doing repetitive work.", reverse: true },
        { id: 9, text: "I find satisfaction in completing detailed tasks correctly.", reverse: false },
        { id: 10, text: "I rarely lose track of what I’m doing, even when tired.", reverse: false },
    ]},
    { name: "Teamwork & Communication", icon: "🤝", questions: [
        { id: 11, text: "I find it easy to get along with different types of people.", reverse: false },
        { id: 12, text: "I stay professional even if others around me are frustrated.", reverse: false },
        { id: 13, text: "I prefer to solve problems myself before asking for help.", reverse: false },
        { id: 14, text: "I find it difficult to speak up if I think something is wrong.", reverse: true },
        { id: 15, text: "I remain polite and respectful even under stress.", reverse: false },
    ]},
    { name: "Stress Tolerance & Pressure", icon: "🧘", questions: [
        { id: 16, text: "I stay calm in emergencies or unexpected situations.", reverse: false },
        { id: 17, text: "I can keep working efficiently even under time pressure.", reverse: false },
        { id: 18, text: "I’m good at keeping my emotions in check at work.", reverse: false },
        { id: 19, text: "I panic when things go wrong unexpectedly.", reverse: true },
        { id: 20, text: "I don’t let frustration affect my work performance.", reverse: false },
    ]},
  ],
};
const allQuestions = questionnaireContent.categories.flatMap(c => c.questions);
const totalQuestions = allQuestions.length;

// --- Helper Functions ---
const generateFeedback = (answers: { [key: number]: number }) => {
    const getScore = (id: number) => {
        const question = allQuestions.find(q => q.id === id);
        if (!question) return 0;
        const answer = answers[id] || 0;
        return question.reverse ? 6 - answer : answer;
    };

    const categoryScores = questionnaireContent.categories.map(category => {
        const scores = category.questions.map(q => getScore(q.id));
        const avg = scores.reduce((sum, score) => sum + score, 0) / scores.length;
        return { name: category.name, avg, questions: category.questions, icon: category.icon };
    });

    const overallAvg = categoryScores.reduce((sum, cat) => sum + cat.avg, 0) / categoryScores.length;

    return { overallAvg, categoryScores, answers };
};

const getOverallSummary = (overallAvg: number) => {
    if (overallAvg >= 4.2) return { text: "Excellent performance!", advice: "Your answers suggest you have the key personality traits suited for a safety-critical, focused, and independent role like train driving." };
    if (overallAvg >= 3.5) return { text: "Strong performance.", advice: "You show a solid foundation of the traits rail companies look for. Pay attention to the specific feedback to refine your strengths." };
    if (overallAvg >= 2.8) return { text: "Mixed results.", advice: "You have some key strengths, but also areas that require self-reflection before an interview. Use this feedback to prepare." };
    return { text: "Area for development.", advice: "Your profile suggests some traits may not align with a typical safety-critical role. It's crucial to understand these areas and reflect on whether this career is the right fit." };
};

const getCategoryFeedback = (category: any, answers: { [key: number]: number }) => {
    let text = '';
    if (category.avg >= 4.2) text = `✅ Excellent scores here. This indicates a strong alignment with the requirements for this area.`;
    else if (category.avg >= 3.5) text = `✅ Good scores. You demonstrate a solid capability in this area.`;
    else if (category.avg >= 2.8) text = `🔸 Mixed scores. This is an area to focus on. Review your answers and prepare examples to discuss your approach.`;
    else text = `❗️ Area for development. Your answers suggest this might be a challenging area for you. It's important to reflect on this.`;
    
    let advice = '';
    if (category.name === "Work Ethic & Responsibility" && answers[3] < 4) {
        advice = "You didn't strongly agree with preferring to work alone. In an interview, frame this as enjoying teamwork but being fully confident and responsible when working independently, which is the primary nature of driving.";
    }
    if (category.name === "Teamwork & Communication" && answers[13] < 4) {
        advice = "Your response on solving problems alone wasn't a strong 'agree'. This can be a strength. Emphasize that you're self-reliant but understand the critical importance of communicating with control and asking for help when procedure requires it.";
    }
    return { text, advice };
};


// --- Sub-components ---
const FeedbackReport: React.FC<{ feedbackData: any, onReset: () => void, onGenerateAIReport: () => void, aiReport: string | null, isLoadingAI: boolean, aiError: string | null }> = ({ feedbackData, onReset, onGenerateAIReport, aiReport, isLoadingAI, aiError }) => {
    
    const { overallAvg, categoryScores, answers } = feedbackData;
    const overallSummary = getOverallSummary(overallAvg);

    return (
        <div className="space-y-8">
            <Card className="text-center bg-gray-50 shadow-xl border-t-4 border-railway-green">
                <div className="p-6">
                    <h3 className="text-2xl md:text-3xl font-bold font-condensed text-brand-primary mb-2">{overallSummary.text}</h3>
                    <p className="text-gray-700 max-w-2xl mx-auto">{overallSummary.advice}</p>
                </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
                {categoryScores.map((cat: any) => {
                    const feedback = getCategoryFeedback(cat, answers);
                    return (
                        <Card key={cat.name} className="flex flex-col h-full shadow-lg">
                            <div className="p-6 flex-grow">
                                <h4 className="text-xl font-semibold font-condensed text-brand-secondary mb-3 flex items-center">
                                    <span className="text-2xl mr-3" aria-hidden="true">{cat.icon}</span> {cat.name}
                                </h4>
                                <p className="text-gray-700 text-sm mb-2">{feedback.text}</p>
                                {feedback.advice && <p className="mt-3 text-sm p-3 bg-blue-50 border-l-4 border-blue-400 text-blue-800 rounded-r-md"><strong>Interview Tip:</strong> {feedback.advice}</p>}
                            </div>
                            <div className="bg-gray-50 px-6 py-2 text-right">
                                <span className="text-sm font-semibold text-gray-600">Avg Score: <span className="font-bold text-brand-primary">{cat.avg.toFixed(2)}</span> / 5</span>
                            </div>
                        </Card>
                    )
                })}
            </div>

            <Card className="shadow-xl bg-gray-50 border-t-4 border-brand-primary">
                 <div className="p-6">
                     <h3 className="text-2xl font-semibold font-condensed text-brand-primary mb-4">🤖 Generate Interview Prep Notes with AI</h3>
                     <p className="text-gray-600 mb-4">Use your results to generate personalized talking points for your interview. Click the button below to get an AI-powered summary of your strengths and how to present them.</p>
                     
                     <Button variant="secondary" onClick={onGenerateAIReport} disabled={isLoadingAI}>
                         {isLoadingAI ? 'Generating...' : 'Generate with Gemini AI'}
                     </Button>

                     {aiError && <p className="mt-4 text-sm text-red-600 bg-red-100 p-3 rounded-md">{aiError}</p>}

                     {aiReport && (
                        <div className="mt-6 p-4 border border-gray-200 rounded-lg bg-white">
                             <h4 className="text-lg font-semibold text-brand-secondary mb-2">Your AI-Generated Prep Notes:</h4>
                             <div className="text-gray-700 whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: aiReport.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }}></div>
                        </div>
                     )}
                 </div>
            </Card>

            <div className="text-center mt-8">
                 <Button variant="outline" onClick={onReset}>Take the Questionnaire Again</Button>
            </div>
        </div>
    );
};


// --- Main Component ---
const PersonalityQuestionnaire: React.FC = () => {
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    const [feedbackData, setFeedbackData] = useState<any | null>(null);
    const [aiReport, setAiReport] = useState<string | null>(null);
    const [isLoadingAI, setIsLoadingAI] = useState(false);
    const [aiError, setAiError] = useState<string | null>(null);

    const answeredCount = Object.keys(answers).length;
    const isComplete = answeredCount === totalQuestions;

    const handleAnswerChange = (questionId: number, value: number) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleGetFeedback = () => {
        if (isComplete) {
            const feedback = generateFeedback(answers);
            setFeedbackData(feedback);
        }
    };
    
    const handleGenerateAIReport = async () => {
        if (!feedbackData) return;
        setIsLoadingAI(true);
        setAiError(null);
        setAiReport(null);

        try {
            // Locally generated summary to be sent as context for the AI
            const summary = getOverallSummary(feedbackData.overallAvg);
            let fullReportText = `Overall Summary: ${summary.text} ${summary.advice}\n\n`;
            feedbackData.categoryScores.forEach((cat: any) => {
                const feedback = getCategoryFeedback(cat, feedbackData.answers);
                fullReportText += `${cat.name} (Avg Score: ${cat.avg.toFixed(2)}/5):\n- ${feedback.text}\n`;
                if (feedback.advice) fullReportText += `- Advice: ${feedback.advice}\n`;
            });
            fullReportText += `\nFinal Advice: Use this feedback to prepare real-life examples for your interview that demonstrate these traits. For any areas that weren't top-scoring, be ready to discuss your perspective honestly.`;

            const response = await fetch('/api/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    assessment: "PersonalityQuestionnaire",
                    personalityResponses: feedbackData.answers,
                    question: "User requested feedback on their personality questionnaire.", // context
                    userAnswer: fullReportText, // context
                    tip: "Analyze the provided personality scores and summary to generate interview talking points.", // context
                }),
            });

            if (!response.ok) {
                const errorText = await response.text();
                try {
                    const errorJson = JSON.parse(errorText);
                    throw new Error(errorJson.error || `Server responded with status ${response.status}`);
                } catch (e) {
                    throw new Error(`Server responded with status ${response.status}. The API endpoint might not be available. Response: ${errorText.substring(0, 100)}...`);
                }
            }

            const data = await response.json();
            setAiReport(data.text);

        } catch (e: any) {
            console.error("API call failed:", e);
            setAiError(`API Error: ${e.message}`);
        } finally {
            setIsLoadingAI(false);
        }
    };

    const handleReset = () => {
        setAnswers({});
        setFeedbackData(null);
        setAiReport(null);
        setAiError(null);
    };

    if (feedbackData) {
        return <FeedbackReport feedbackData={feedbackData} onReset={handleReset} onGenerateAIReport={handleGenerateAIReport} aiReport={aiReport} isLoadingAI={isLoadingAI} aiError={aiError} />;
    }

    return (
        <Card className="shadow-2xl border-t-4 border-railway-orange max-w-5xl mx-auto">
            <div className="p-6 md:p-10">
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-2">
                        {questionnaireContent.title}
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">{questionnaireContent.instructions}</p>
                </div>

                <div className="space-y-8">
                    {questionnaireContent.categories.map(category => (
                        <div key={category.name}>
                            <h3 className="text-xl font-semibold font-condensed text-brand-primary mb-4 pb-2 border-b-2 border-gray-200 flex items-center">
                                <span className="text-2xl mr-3" aria-hidden="true">{category.icon}</span> {category.name}
                            </h3>
                            <div className="space-y-6">
                                {category.questions.map(q => (
                                    <div key={q.id}>
                                        <p className="font-medium text-gray-800 mb-2">{q.id}. {q.text}</p>
                                        <div className="flex flex-wrap justify-between items-center gap-2" role="radiogroup" aria-labelledby={`question-${q.id}`}>
                                            <span className="text-xs text-gray-500">{questionnaireContent.scale[0].label}</span>
                                            <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                                                {questionnaireContent.scale.map(s => (
                                                    <label key={s.value} className="cursor-pointer">
                                                        <input type="radio" name={`question-${q.id}`} value={s.value} checked={answers[q.id] === s.value} onChange={() => handleAnswerChange(q.id, s.value)} className="sr-only" />
                                                        <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center border-2 transition-all duration-200 ${answers[q.id] === s.value ? 'bg-railway-green border-railway-green text-white font-bold scale-110' : 'bg-gray-100 border-gray-300 hover:border-railway-green'}`}>
                                                            {s.value}
                                                        </div>
                                                    </label>
                                                ))}
                                            </div>
                                            <span className="text-xs text-gray-500">{questionnaireContent.scale[4].label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="mt-10 pt-6 border-t text-center">
                    <p className="mb-4 font-semibold text-gray-700">Progress: {answeredCount} / {totalQuestions} answered</p>
                    <Button variant="primary" size="lg" onClick={handleGetFeedback} disabled={!isComplete}>
                        {isComplete ? 'Get My Feedback' : 'Answer All Questions to Continue'}
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default PersonalityQuestionnaire;