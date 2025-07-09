import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';

// --- Data ---
const interviewQuestions = [
  {
    id: 1,
    question: "Tell me about a time you followed safety procedures to the letter.",
    why: "To assess if you respect rules and can be trusted in a safety-critical environment.",
    example: {
      S: "In my current job, I work in a busy retail store that requires strict health and safety procedures.",
      T: "One of my tasks involves unloading and storing heavy deliveries in the stockroom.",
      A: "I always ensure I wear the correct PPE, follow the correct lifting techniques, and keep walkways clear to avoid trip hazards. Even when we’re busy, I take the time to double-check that everything is safe and nothing is blocking fire exits.",
      R: "Because of this, our manager regularly uses me as an example when training new staff on safe working practices."
    }
  },
  {
    id: 2,
    question: "How do you stay focused during long, repetitive tasks?",
    why: "Train drivers work solo and need to stay alert over long periods.",
    example: {
      S: "On some shifts, I’m on the tills for several hours at a time with limited breaks.",
      T: "It’s important to stay alert to avoid errors like scanning items twice or giving incorrect change.",
      A: "I keep myself focused by setting small mental goals, such as keeping each transaction smooth and friendly, and doing quick mental checks after each customer. I also stay hydrated and take my breaks properly to reset.",
      R: "As a result, I rarely make mistakes and have received praise from supervisors for being consistent throughout long shifts."
    }
  },
  {
    id: 3,
    question: "What would you do if a colleague wasn’t following safety procedures?",
    why: "They want to know you’ll act professionally and won’t ignore safety breaches.",
    example: {
      S: "At work, I noticed a colleague stacking boxes in front of a fire exit.",
      T: "I knew this was against safety rules and could be dangerous in an emergency.",
      A: "I reminded them politely that the fire exit needed to stay clear, and I helped move the boxes. Then I mentioned it to the supervisor, just to make sure it wouldn’t happen again.",
      R: "My manager thanked me for taking initiative, and it helped reinforce the rule with the rest of the team."
    }
  },
  {
    id: 4,
    question: "Why do you want to be a train driver?",
    why: "They want genuine motivation—not just “I like trains”.",
    example: {
      R: "I’ve always been drawn to structured, responsible work, and I’m ready for a new long-term challenge. I enjoy working independently and being trusted to do things properly. I’m well-suited to a job where safety, punctuality, and consistency matter. I’ve looked into the shift patterns and the training, and I’m prepared to fully commit. Being a train driver offers a career with progression and purpose—and I want to be part of something that keeps the country moving."
    }
  },
  {
    id: 5,
    question: "What do you understand about the safety-critical nature of the role?",
    why: "They want to know if you truly grasp the seriousness of being a driver.",
    example: {
      R: "As a train driver, every decision you make affects hundreds of people’s lives, including your own. You have to be alert, focused, and never take shortcuts. That means following all rules and procedures, staying calm under pressure, and knowing when to act and when to escalate issues. I understand this isn’t a job where you can “guess” or switch off—it’s about responsibility and precision every single day."
    }
  }
];

// --- Sub-components ---
interface PracticeCardProps {
  item: typeof interviewQuestions[0];
}

const PracticeCard: React.FC<PracticeCardProps> = ({ item }) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetFeedback = async () => {
    if (!userAnswer) {
      setError("Please write your answer before getting feedback.");
      return;
    }
    setError(null);
    setIsLoading(true);
    setFeedback(null);

    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question: item.question,
          userAnswer,
          assessment: item.why,
          tip: "The user is practicing for a structured interview. Analyze their answer for relevance, clarity, and use of the STAR method. Keep feedback encouraging but professional."
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
      setFeedback(data.text);

    } catch (e: any) {
      console.error("API call failed:", e);
      setError(`API Error: ${e.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="shadow-lg border-t-4 border-railway-yellow-green">
      <div className="p-6 md:p-8">
        <h3 className="text-xl font-bold font-condensed text-brand-primary mb-2">{item.question}</h3>
        <p className="text-sm text-gray-600 italic mb-4"><strong>Why they ask this:</strong> {item.why}</p>

        <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-6">
          <h4 className="text-base font-semibold text-brand-secondary mb-2">Expert Example (using the STAR method):</h4>
          <div className="text-sm text-gray-700 space-y-1">
            {item.example.S && <p><strong>Situation:</strong> {item.example.S}</p>}
            {item.example.T && <p><strong>Task:</strong> {item.example.T}</p>}
            {item.example.A && <p><strong>Action:</strong> {item.example.A}</p>}
            <p><strong>Result:</strong> {item.example.R}</p>
          </div>
        </div>

        <div>
          <label htmlFor={`answer-${item.id}`} className="block text-base font-semibold text-gray-800 mb-2">Your Answer:</label>
          <textarea
            id={`answer-${item.id}`}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            rows={6}
            className="w-full px-4 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-railway-green focus:border-railway-green transition-colors"
            placeholder="Write your answer here, trying to use the STAR method."
          />
        </div>
        
        <div className="mt-4">
          <Button variant="secondary" onClick={handleGetFeedback} disabled={isLoading}>
            {isLoading ? 'Getting Feedback...' : 'Get AI Feedback'}
          </Button>
        </div>

        {error && <p className="mt-4 text-sm text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}

        {feedback && (
          <div className="mt-6 p-4 border-l-4 border-blue-400 bg-blue-50 rounded-r-md">
            <h4 className="font-semibold text-blue-800 mb-2">🤖 AI Feedback:</h4>
            <div className="text-blue-900 whitespace-pre-wrap text-sm" dangerouslySetInnerHTML={{ __html: feedback.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br />') }}></div>
          </div>
        )}
      </div>
    </Card>
  );
};


// --- Main Component ---
const InterviewPracticeSection: React.FC = () => {
  return (
    <>
      <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-4 mt-16">
        AI Interview Coach: Practice Your Answers
      </h2>
      <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
        Prepare for your structured interview by practising key questions. Read the expert examples, write your own answers, and get instant feedback from our AI coach.
      </p>

      <div className="space-y-12 max-w-4xl mx-auto">
        {interviewQuestions.map((item) => (
          <PracticeCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

export default InterviewPracticeSection;