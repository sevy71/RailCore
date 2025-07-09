
import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

const sjtData = {
  instructions: "This assessment evaluates your ability to make sound decisions and exercise good judgement in workplace-related situations. The test is untimed but typically takes around 25 minutes to complete. You will be given a scenario followed by a series of possible actions in response to that situation. For each action, you’ll need to rate how effective you believe it would be in dealing with the situation.",
  note: "This is a practice example designed to help you understand the format of the test. It is not one of the actual assessments used in the selection process. For information about the real tests, please contact: info@testpartnership.com",
  scenario: "You are 20 minutes into a solo journey when you notice a fault indicator light has come on. You are unsure what it means, but the train is operating normally.",
  ratingScale: [
    { value: 1, label: "Very Ineffective" },
    { value: 2, label: "Ineffective" },
    { value: 3, label: "Fairly Ineffective" },
    { value: 4, label: "Fairly Effective" },
    { value: 5, label: "Effective" },
    { value: 6, label: "Very Effective" },
  ],
  options: [
    { 
      id: 'A', 
      text: "Continue driving and report it after your shift.",
      correctRating: 1, // Very Ineffective
      explanation: "This action is extremely dangerous. Ignoring a potential fault demonstrates a severe lack of safety awareness and is a critical failure in professional conduct."
    },
    { 
      id: 'B', 
      text: "Stop the train immediately, even without knowing the light’s meaning.",
      correctRating: 3, // Fairly Ineffective
      explanation: "While born from a sense of caution, this is an overreaction. Stopping a train without cause can introduce new risks (e.g., blocking junctions, risk of being struck). Procedure must be followed before taking such a disruptive action."
    },
    { 
      id: 'C', 
      text: "Check the onboard manual or alert protocol and contact the control centre.",
      correctRating: 6, // Very Effective
      explanation: "This is the correct, professional response. It follows procedure by first gathering information safely and then escalating to the appropriate authority for guidance. It prioritizes safety without causing unnecessary disruption."
    },
    { 
      id: 'D', 
      text: "Ignore it unless the train starts malfunctioning.",
      correctRating: 1, // Very Ineffective
      explanation: "Ignoring a warning light until a secondary symptom appears is a critical safety breach. This reactive approach is dangerous and shows a poor understanding of a safety-critical environment."
    },
  ],
};


const SituationalJudgementModule: React.FC = () => {
    const [answers, setAnswers] = useState<{ [key: string]: number | null }>({ A: null, B: null, C: null, D: null });
    const [showFeedback, setShowFeedback] = useState(false);

    const handleRatingChange = (optionId: string, ratingValue: number) => {
        if (showFeedback) return;
        setAnswers(prev => ({...prev, [optionId]: ratingValue }));
    };

    const allAnswered = Object.values(answers).every(answer => answer !== null);

    const handleSubmit = () => {
        if (allAnswered) {
            setShowFeedback(true);
        }
    };

    const handleReset = () => {
        setAnswers({ A: null, B: null, C: null, D: null });
        setShowFeedback(false);
    };
  
    return (
        <Card className="shadow-2xl border-t-4 border-railway-orange max-w-4xl mx-auto">
            <div className="p-6 md:p-8">
                <Card className="bg-gray-100 p-4 mb-8 border-l-4 border-gray-300">
                    <p className="font-semibold text-gray-800">Instructions:</p>
                    <p className="text-gray-700 text-sm mb-4">{sjtData.instructions}</p>
                    <p className="font-semibold text-gray-800 mt-4">Scenario:</p>
                    <p className="text-gray-700">{sjtData.scenario}</p>
                </Card>
                
                <div className="space-y-8">
                    {sjtData.options.map(option => (
                        <div key={option.id}>
                            <p className="font-semibold text-gray-800 mb-3">{option.id}. {option.text}</p>
                            
                            {!showFeedback ? (
                                <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={`Rating for option ${option.id}`}>
                                    {sjtData.ratingScale.map(rating => (
                                        <button 
                                            key={rating.value}
                                            onClick={() => handleRatingChange(option.id, rating.value)}
                                            className={`px-3 py-2 text-xs sm:text-sm rounded-md border-2 transition-all duration-200 ${answers[option.id] === rating.value ? 'bg-brand-primary text-white border-brand-primary font-bold scale-105' : 'bg-white text-gray-700 border-gray-300 hover:border-brand-primary'}`}
                                            aria-pressed={answers[option.id] === rating.value}
                                        >
                                            {rating.label}
                                        </button>
                                    ))}
                                </div>
                            ) : (
                                <div className={`p-4 rounded-lg border-l-4 ${answers[option.id] === option.correctRating ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                                    <p className={`text-sm font-semibold ${answers[option.id] === option.correctRating ? 'text-green-800' : 'text-red-800'}`}>
                                        Your rating: {sjtData.ratingScale.find(r => r.value === answers[option.id])?.label || 'Not answered'}
                                    </p>
                                    <p className="text-sm font-semibold text-gray-800 mt-1">
                                        Correct rating: <span className="font-bold text-green-800">{sjtData.ratingScale.find(r => r.value === option.correctRating)?.label}</span>
                                    </p>
                                    <p className="text-sm text-gray-700 mt-2"><strong>Explanation:</strong> {option.explanation}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t text-center">
                    {showFeedback ? (
                        <Button variant="outline" onClick={handleReset}>Try Again</Button>
                    ) : (
                        <Button variant="primary" onClick={handleSubmit} disabled={!allAnswered}>
                            {allAnswered ? 'Submit Ratings' : 'Please rate all options'}
                        </Button>
                    )}
                </div>
                
                {showFeedback && (
                    <div className="mt-8 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                        <p className="text-xs text-gray-600 text-center italic">{sjtData.note}</p>
                    </div>
                )}

            </div>
        </Card>
    );
};

export default SituationalJudgementModule;