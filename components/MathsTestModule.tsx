
import React, { useState, useEffect, useRef } from 'react';
import Card from './common/Card';
import Button from './common/Button';

const mathsQuestions = [
  {
    question: "A train travels 120 km in 1 hour 30 minutes. What is its average speed in km/h?",
    options: ["80 km/h", "90 km/h", "100 km/h", "180 km/h"],
    correctAnswer: "80 km/h",
    explanation: "1 hour 30 minutes is 1.5 hours. Speed = Distance / Time. So, 120 km / 1.5 hours = 80 km/h."
  },
  {
    question: "A train departs at 14:37 and takes 2 hours 48 minutes. What time does it arrive?",
    options: ["16:25", "17:15", "17:25", "18:25"],
    correctAnswer: "17:25",
    explanation: "Add the hours: 14 + 2 = 16. Add the minutes: 37 + 48 = 85 minutes. 85 minutes is 1 hour and 25 minutes. Add this to 16:00, which gives 17:25."
  },
  {
    question: "If a train travels at 80 mph, how long does it take to travel 100 miles?",
    options: ["1 hour 15 minutes", "1 hour 20 minutes", "1 hour 25 minutes", "1 hour 30 minutes"],
    correctAnswer: "1 hour 15 minutes",
    explanation: "Time = Distance / Speed. 100 miles / 80 mph = 1.25 hours. 0.25 hours is a quarter of an hour, which is 15 minutes. So, the total time is 1 hour and 15 minutes."
  },
  {
    question: "Estimate the result of 298 × 49.",
    options: ["12,000", "13,500", "15,000", "16,000"],
    correctAnswer: "15,000",
    explanation: "Round 298 up to 300 and 49 up to 50. Then multiply: 300 × 50 = 15,000. This is a quick and effective estimation."
  },
  {
    question: "A journey is 45 miles long. How many minutes will it take if the train's average speed is 60 mph?",
    options: ["30 minutes", "45 minutes", "60 minutes", "75 minutes"],
    correctAnswer: "45 minutes",
    explanation: "At 60 mph, the train travels 1 mile per minute. Therefore, a 45-mile journey will take 45 minutes."
  }
];

const TOTAL_TIME = 5 * 60; // 5 minutes for the quiz

const MathsTestModule: React.FC = () => {
    const [status, setStatus] = useState<'not_started' | 'active' | 'finished'>('not_started');
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState<(string | null)[]>(new Array(mathsQuestions.length).fill(null));
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const timerRef = useRef<number | null>(null);

    useEffect(() => {
        if (status === 'active') {
            timerRef.current = window.setInterval(() => {
                setTimeLeft(prev => {
                    if (prev <= 1) {
                        clearInterval(timerRef.current!);
                        setStatus('finished');
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, [status]);

    const startQuiz = () => {
        setStatus('active');
        setCurrentQuestionIndex(0);
        setAnswers(new Array(mathsQuestions.length).fill(null));
        setTimeLeft(TOTAL_TIME);
    };
    
    const restartQuiz = () => {
        startQuiz();
    }

    const handleAnswerSelect = (answer: string) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = answer;
        setAnswers(newAnswers);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < mathsQuestions.length - 1) {
            setCurrentQuestionIndex(prev => prev + 1);
        } else {
            setStatus('finished');
            if (timerRef.current) clearInterval(timerRef.current);
        }
    };

    const finishQuiz = () => {
        setStatus('finished');
        if (timerRef.current) clearInterval(timerRef.current);
    }
    
    const score = answers.reduce((acc, answer, index) => {
        return acc + (answer === mathsQuestions[index].correctAnswer ? 1 : 0);
    }, 0);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    if (status === 'not_started') {
        return (
            <div className="text-center">
                <Button variant="primary" size="lg" onClick={startQuiz}>
                    Start Timed Maths Test
                </Button>
            </div>
        );
    }

    if (status === 'finished') {
        return (
            <Card className="shadow-2xl border-t-4 border-brand-primary">
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold font-condensed text-center text-brand-secondary mb-4">Quiz Complete!</h3>
                    <div className="text-center bg-gray-100 p-6 rounded-lg mb-8">
                        <p className="text-lg text-gray-700">Your Score:</p>
                        <p className="text-5xl font-bold text-railway-green">{score} <span className="text-3xl font-normal text-gray-600">/ {mathsQuestions.length}</span></p>
                    </div>
                    
                    <h4 className="text-xl font-semibold font-condensed text-brand-primary mb-4">Answer Review:</h4>
                    <div className="space-y-6">
                        {mathsQuestions.map((q, index) => {
                            const userAnswer = answers[index];
                            const isCorrect = userAnswer === q.correctAnswer;
                            return (
                                <div key={index} className={`p-4 rounded-lg border-l-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                                    <p className="font-semibold text-gray-800 mb-2">{index + 1}. {q.question}</p>
                                    <p className={`text-sm ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>Your answer: <span className="font-bold">{userAnswer || "Not answered"}</span></p>
                                    {!isCorrect && <p className="text-sm text-green-800">Correct answer: <span className="font-bold">{q.correctAnswer}</span></p>}
                                    <p className="text-sm text-gray-600 mt-2"><strong>Explanation:</strong> {q.explanation}</p>
                                </div>
                            );
                        })}
                    </div>
                    
                    <div className="mt-8 text-center">
                        <Button variant="outline" onClick={restartQuiz}>
                            Try Again
                        </Button>
                    </div>
                </div>
            </Card>
        );
    }
    
    // Active status
    const currentQuestion = mathsQuestions[currentQuestionIndex];

    return (
        <Card className="shadow-2xl border-t-4 border-railway-yellow">
            <div className="p-6 md:p-8">
                <div className="flex justify-between items-center mb-4">
                    <p className="text-sm font-semibold text-gray-600">Question {currentQuestionIndex + 1} of {mathsQuestions.length}</p>
                    <p className="text-lg font-bold text-railway-red bg-gray-100 px-3 py-1 rounded-md">{formatTime(timeLeft)}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="text-lg font-semibold text-gray-800">{currentQuestion.question}</p>
                </div>
                
                <div className="space-y-3">
                    {currentQuestion.options.map(option => (
                        <label key={option} className={`block p-4 border rounded-md cursor-pointer transition-all text-left ${answers[currentQuestionIndex] === option ? 'bg-railway-yellow-green border-railway-green ring-2 ring-railway-green' : 'border-gray-300 hover:border-railway-yellow hover:bg-yellow-50'}`}>
                            <input
                                type="radio"
                                name={`question-${currentQuestionIndex}`}
                                value={option}
                                checked={answers[currentQuestionIndex] === option}
                                onChange={() => handleAnswerSelect(option)}
                                className="sr-only"
                            />
                            {option}
                        </label>
                    ))}
                </div>
                
                <div className="mt-8 text-right">
                    <Button variant="primary" onClick={currentQuestionIndex < mathsQuestions.length - 1 ? nextQuestion : finishQuiz} disabled={!answers[currentQuestionIndex]}>
                        {currentQuestionIndex < mathsQuestions.length - 1 ? 'Next Question' : 'Finish Quiz'}
                    </Button>
                </div>
            </div>
        </Card>
    );
};

export default MathsTestModule;
