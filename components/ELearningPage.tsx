
import React from 'react';
import Button from './common/Button';
import Card from './common/Card';
import { CompetencyQuestionModule } from './CompetencyQuestionModule';
import SituationalJudgementModule from './SituationalJudgementModule';
import MathsTestModule from './MathsTestModule';

interface ELearningPageProps {
  navigateToMain: () => void;
}

const ELearningPage: React.FC<ELearningPageProps> = ({ navigateToMain }) => {

  const competencyQuestions = [
    { 
      id: 1, 
      question: "Tell me about a time you followed a strict safety procedure.",
      assessment: "Safety awareness, rule-following, risk awareness",
      tip: "Mention the procedure, why it mattered, and what would have gone wrong if ignored."
    },
    { 
      id: 2, 
      question: "Give an example of when you worked independently for a long period.",
      assessment: "Ability to focus, independence, responsibility",
      tip: "Use a task where staying alert mattered, e.g., stocktaking, security, driving."
    },
    {
      id: 3,
      question: "Describe a situation where something unexpected happened and you had to make a quick decision.",
      assessment: "Judgement under pressure, calmness",
      tip: "Avoid impulsiveness; show structured thinking and safe choices."
    },
  ];

  const motivationQuestions = [
    {
      id: 4,
      question: "Why do you want to be a train driver?",
      assessment: "Genuine motivation, understanding of the role",
      tip: "Mention shift work, responsibility, safety, and long-term interest."
    },
    {
      id: 5,
      question: "What do you understand about the safety-critical nature of this role?",
      assessment: "Awareness of how lives depend on your judgement",
      tip: "Talk about decision-making, alertness, rules, and consequences."
    }
  ];
  
  const assessmentModes = [
      { mode: "Competency-Based Questions", involves: "STAR-format questions about past behaviour", tests: "Safety awareness, teamwork, decision-making" },
      { mode: "Situational Judgement Scenarios", involves: "Hypothetical “what would you do if…” style questions", tests: "Problem-solving, professionalism" },
      { mode: "Knowledge/Information Recall", involves: "Questions about the role, procedures, or company", tests: "Motivation and role awareness" },
      { mode: "Behavioural Observations", involves: "How you present yourself, react under pressure", tests: "Attitude, focus, reliability" },
      { mode: "Follow-up Probing Questions", involves: "Clarification or deeper questions based on your answers", tests: "Honesty, insight, depth of thinking" },
  ];

  const feedbackCriteria = [
      { trait: "Safety Awareness", shows: "Prioritises rules, checks before acting, escalates responsibly" },
      { trait: "Focus/Independence", shows: "Comfortable working alone, alertness during routine work" },
      { trait: "Decision-Making", shows: "Calm, thought-through, considers safety and consequences" },
      { trait: "Motivation", shows: "Well-informed, realistic expectations, long-term commitment" },
      { trait: "Communication", shows: "Clear, structured, calm answers using STAR" },
  ];

  return (
    <div className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-6">
            Interactive E-Learning Centre
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Experience a simulated train driver interview and test your numerical skills with our interactive modules.
          </p>
        </section>

        <div id="mock-interview-module">
            <Card className="max-w-5xl mx-auto mb-16 shadow-xl border-t-4 border-brand-primary">
                <div className="p-6 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-bold font-condensed text-brand-primary mb-4">What is a Multi-Modal Interview?</h2>
                    <p className="text-gray-700 mb-6">
                        A multi-modal interview is a structured job interview that uses multiple methods or “modes” of assessment within the same session to evaluate a candidate’s suitability for a role. It’s often used in safety-critical roles like train driving, where a broad range of skills must be assessed beyond just verbal answers.
                    </p>

                    <div className="overflow-x-auto mb-6">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-3 font-semibold uppercase text-gray-600 border border-gray-300">Mode</th>
                                    <th className="p-3 font-semibold uppercase text-gray-600 border border-gray-300">What it Involves</th>
                                    <th className="p-3 font-semibold uppercase text-gray-600 border border-gray-300">What It Tests</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {assessmentModes.map(item => (
                                    <tr key={item.mode} className="hover:bg-gray-50">
                                        <td className="p-3 font-medium text-gray-800 border border-gray-300">{item.mode}</td>
                                        <td className="p-3 text-gray-700 border border-gray-300">{item.involves}</td>
                                        <td className="p-3 text-gray-700 border border-gray-300">{item.tests}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-semibold font-condensed text-brand-secondary mb-3">Why Is It Used for Train Drivers?</h3>
                    <p className="text-gray-700 mb-6">
                        Driving a train involves safety-critical judgement, strict procedures, and the ability to stay calm under pressure. Operators need to assess both your technical understanding and your psychological suitability—especially your ability to work alone, focus for long periods, and follow instructions without fail.
                    </p>

                    <div className="p-4 bg-yellow-50 border-l-4 border-railway-orange rounded-r-md">
                        <h4 className="font-bold text-lg text-railway-orange mb-2">💡 Tips to Succeed</h4>
                        <ul className="list-disc list-outside space-y-2 pl-5 text-gray-800">
                            <li><strong>Use the STAR technique:</strong> Situation, Task, Action, Result.</li>
                            <li><strong>Think like a rail professional:</strong> Safety, reliability, and concentration are key.</li>
                            <li><strong>Be honest, self-aware, and calm:</strong> Your behaviour is being observed as much as your answers.</li>
                        </ul>
                    </div>
                </div>
            </Card>

            <div className="space-y-16 max-w-4xl mx-auto">
              {/* Section 1 */}
              <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary">Practice Section 1: Competency-Based Questions</h2>
              <div className="space-y-8">
                {competencyQuestions.map(q => (
                    <CompetencyQuestionModule 
                        key={q.id}
                        question={q.question}
                        assessment={q.assessment}
                        tip={q.tip}
                    />
                ))}
              </div>

              {/* Section 2 */}
              <div className="pt-8">
                <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-8">Practice Section 2: Situational Judgement Test</h2>
                <SituationalJudgementModule />
              </div>


              {/* Section 3 */}
              <div className="pt-8">
                <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary">Practice Section 3: Knowledge & Motivation</h2>
                 <div className="space-y-8 mt-8">
                  {motivationQuestions.map(q => (
                      <CompetencyQuestionModule 
                          key={q.id}
                          question={q.question}
                          assessment={q.assessment}
                          tip={q.tip}
                      />
                  ))}
                </div>
              </div>


              {/* Section 4 */}
              <Card className="shadow-2xl border-t-4 border-brand-primary">
                  <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold font-condensed text-brand-primary mb-4">Informational Section: Behavioural Observation</h2>
                    <p className="text-gray-700 mb-4">During a real interview, an assessor observes your behaviour as much as your answers. Key areas include:</p>
                    <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700">
                        <li><strong>Punctuality and professionalism:</strong> How you present yourself.</li>
                        <li><strong>Tone:</strong> Remaining calm and composed, even when discussing challenging situations.</li>
                        <li><strong>Listening skills:</strong> Ensuring you fully understand the question before answering.</li>
                        <li><strong>Structured answers:</strong> Not rambling or being vague. Showing clear, logical thought.</li>
                        <li><strong>Consistency:</strong> Your behaviour should match the qualities you describe in your answers.</li>
                    </ul>
                  </div>
              </Card>

              {/* Feedback Criteria */}
              <Card className="shadow-2xl bg-gray-50">
                <div className="p-6 md:p-8">
                    <h2 className="text-2xl font-bold font-condensed text-center text-brand-secondary mb-6">Self-Evaluation: Feedback Criteria</h2>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="p-3 font-semibold uppercase bg-gray-200 text-gray-600 border border-gray-300">Trait</th>
                                    <th className="p-3 font-semibold uppercase bg-gray-200 text-gray-600 border border-gray-300">An Excellent Response Shows:</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                {feedbackCriteria.map(item => (
                                    <tr key={item.trait} className="hover:bg-gray-100">
                                        <td className="p-3 font-medium text-gray-800 border border-gray-300">{item.trait}</td>
                                        <td className="p-3 text-gray-700 border border-gray-300">{item.shows}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
              </Card>
            </div>
        </div>

        <section id="maths-test-section" className="mt-20 pt-16 border-t-2 border-gray-300">
            <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold font-condensed text-brand-primary">Practice Maths Test</h2>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto mt-4">
                    Assess your numerical reasoning and accuracy under timed conditions—essential skills for a train driver.
                </p>
            </div>
            
            <Card className="max-w-5xl mx-auto mb-12 shadow-xl border-t-4 border-railway-yellow">
                <div className="p-6 md:p-8">
                    <h3 className="text-2xl md:text-3xl font-bold font-condensed text-brand-primary mb-4">About the Train Driver Maths Test</h3>
                    <p className="text-gray-700 mb-6">
                        The maths test is designed to assess your numerical reasoning and accuracy—essential skills for interpreting schedules, reading gauges, and calculating times or distances.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-xl font-semibold font-condensed text-brand-secondary mb-3">Typical Content</h4>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700">
                                <li><strong>Basic Arithmetic:</strong> Addition, subtraction, multiplication, division, fractions, and percentages.</li>
                                <li><strong>Time & Timetables:</strong> Reading schedules and calculating time differences.</li>
                                <li><strong>Speed, Distance & Time:</strong> Using and rearranging the core formula.</li>
                                <li><strong>Estimation & Rounding:</strong> Making quick, logical estimates.</li>
                                <li><strong>Interpreting Charts & Graphs:</strong> Drawing conclusions from data.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold font-condensed text-brand-secondary mb-3">Format & Tips</h4>
                            <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700">
                                <li>Usually multiple choice and timed (10–30 mins).</li>
                                <li>Can be paper-based or computerised.</li>
                                <li>Taken at a test centre or assessment day.</li>
                                <li className="mt-4">
                                    <div className="p-3 bg-yellow-50 border-l-4 border-railway-orange rounded-r-md">
                                        <strong className="font-bold text-lg text-railway-orange">🔧 Prep Tip:</strong> Practice GCSE-level, non-calculator maths. Focus on rail-themed questions involving time, distance, and speed.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Card>
            
            <div className="max-w-2xl mx-auto">
                <MathsTestModule />
            </div>
        </section>
        
        <div className="mt-20 text-center">
            <Button variant="primary" size="lg" onClick={navigateToMain}>
             Back to Homepage
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ELearningPage;
