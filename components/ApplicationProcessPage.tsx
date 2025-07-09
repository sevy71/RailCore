import React, { useState } from 'react';
import Button from './common/Button';
import Card from './common/Card';
import MedicalAssessmentSection from './MedicalAssessmentSection';
import PersonalityQuestionnaire from './PersonalityQuestionnaire';
import InterviewPracticeSection from './InterviewPracticeSection.tsx';

interface ApplicationProcessPageProps {
  navigateToMain: () => void;
}

const ApplicationProcessPage: React.FC<ApplicationProcessPageProps> = ({ navigateToMain }) => {
  type Tab = 'cv' | 'questionnaire' | 'interview' | 'medical';
  const [activeTab, setActiveTab] = useState<Tab>('cv');

  const tabs = [
    { id: 'cv', title: "CV & Application Form", icon: "📝" },
    { id: 'questionnaire', title: "Personality Questionnaire", icon: "💻" },
    { id: 'interview', title: "AI Interview Coach", icon: "🗣️" },
    { id: 'medical', title: "Medical Assessment", icon: "🩺" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'cv':
        return (
          <div className="space-y-16">
            <section id="cv-content">
                <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-4">Crafting Your CV: A Real-World Example</h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
                    Here’s a sample CV tailored for a career changer moving from retail to train driving. It highlights transferable skills—a key strategy when you don't have direct experience.
                </p>
                <Card className="shadow-2xl border-t-4 border-brand-primary max-w-4xl mx-auto">
                    <div className="p-6 md:p-10 bg-gray-50/50">
                        <div className="text-center border-b pb-4 mb-6">
                            <h3 className="text-2xl font-bold text-gray-800">Joe Bloggs</h3>
                            <p className="text-sm text-gray-600">45 High Street, Leeds, LS1 3AB</p>
                            <p className="text-sm text-gray-600">📞 07901 234 567 | ✉️ joebloggs@email.com</p>
                        </div>

                        <div className="space-y-6 text-left">
                            <div>
                                <h4 className="font-condensed text-xl font-semibold text-brand-primary mb-2">Personal Profile</h4>
                                <p className="text-gray-700">Reliable and safety-conscious individual with a strong work ethic and a passion for transport and rail operations. With over 5 years of experience in customer-facing retail roles, I’ve developed excellent communication, timekeeping, and problem-solving skills—qualities essential for a successful train driver. Calm under pressure, committed to learning, and eager to bring my focus and discipline to a new challenge in the rail industry.</p>
                            </div>
                            <div>
                                <h4 className="font-condensed text-xl font-semibold text-brand-primary mb-2">Key Skills</h4>
                                <ul className="list-disc list-inside grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1 text-gray-700">
                                    <li>Strong attention to detail and safety awareness</li>
                                    <li>Calm and focused in high-pressure situations</li>
                                    <li>Excellent verbal communication and teamwork</li>
                                    <li>Punctual, dependable, and professional</li>
                                    <li>Able to follow procedures and regulations precisely</li>
                                    <li>Experienced with shift work, including early mornings and weekends</li>
                                    <li>Customer service and conflict resolution</li>
                                    <li>Quick learner with a positive attitude</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-condensed text-xl font-semibold text-brand-primary mb-2">Work Experience</h4>
                                <div className="mb-4">
                                    <p className="font-semibold text-gray-800">Retail Assistant</p>
                                    <p className="text-sm text-gray-600">Tesco, Leeds City Centre | August 2018 – Present</p>
                                    <ul className="list-disc list-inside text-gray-700 mt-1 ml-4 space-y-1">
                                        <li>Consistently deliver excellent customer service in a busy store environment</li>
                                        <li>Trusted to open/close the store and manage tills accurately</li>
                                        <li>Resolve customer issues professionally, maintaining a calm approach</li>
                                        <li>Restock and manage inventory following safety and security procedures</li>
                                        <li>Recognised for reliability and flexibility during shift changes and holiday periods</li>
                                    </ul>
                                </div>
                                <div>
                                    <p className="font-semibold text-gray-800">Customer Team Member (Part-Time)</p>
                                    <p className="text-sm text-gray-600">Co-op Food, Headingley | June 2016 – July 2018</p>
                                     <ul className="list-disc list-inside text-gray-700 mt-1 ml-4 space-y-1">
                                        <li>Balanced working hours with study commitments while building strong communication skills</li>
                                        <li>Handled deliveries and managed store presentation to high standards</li>
                                        <li>Assisted customers with enquiries and refunds, even during peak hours</li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <h4 className="font-condensed text-xl font-semibold text-brand-primary mb-2">Education</h4>
                                <p className="font-semibold text-gray-800">GCSEs</p>
                                <p className="text-sm text-gray-600">Leeds Secondary School, 2011 – 2016</p>
                                <p className="text-gray-700 mt-1">Maths (B), English Language (B), English Literature (C), Science (C), Geography (B)</p>
                            </div>
                             <div>
                                <h4 className="font-condensed text-xl font-semibold text-brand-primary mb-2">Relevant Training & Interests</h4>
                                <ul className="list-disc list-inside text-gray-700 mt-1 ml-4 space-y-1">
                                    <li>Full UK Driving Licence – Clean</li>
                                    <li>Strong interest in rail transport and operations</li>
                                    <li>Regularly travel by rail; passionate about safety, efficiency, and service standards</li>
                                    <li>Committed to completing all required training and assessments to become a qualified driver</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-condensed text-xl font-semibold text-brand-primary mb-2">References</h4>
                                <p className="text-gray-700">Available on request.</p>
                            </div>
                        </div>
                    </div>
                </Card>
            </section>

            <section>
                <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-4">Anatomy of a Train Driver Application Form</h2>
                <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
                    While forms vary between companies, most follow a standard structure. Knowing what to expect helps you prepare thorough and effective answers.
                </p>
                <Card className="shadow-2xl border-t-4 border-railway-green max-w-4xl mx-auto">
                    <div className="p-6 md:p-10">
                        <h3 className="text-2xl font-bold font-condensed text-center mb-6">Typical Application Form Sections</h3>
                        <ol className="list-decimal list-outside space-y-5 text-gray-700 ml-4">
                           <li><span className="font-semibold text-gray-800">Personal Details:</span> Standard contact and identification information.</li>
                           <li><span className="font-semibold text-gray-800">Eligibility & Declaration:</span> Confirming your right to work, declaring criminal convictions, and GDPR consent.</li>
                           <li><span className="font-semibold text-gray-800">Employment History:</span> A detailed record of previous jobs. Be sure to highlight relevant duties involving safety, shift work, and customer interaction.</li>
                           <li><span className="font-semibold text-gray-800">Education & Qualifications:</span> List your academic achievements, especially core subjects like Maths and English.</li>
                           <li>
                                <span className="font-semibold text-gray-800">Competency-Based Questions:</span> This is a critical section. Expect questions like:
                                <ul className="list-disc list-inside mt-2 ml-6 space-y-1 bg-gray-50 p-4 rounded-md border-l-2 border-railway-orange">
                                    <li>“Why are you applying?”</li>
                                    <li>“Describe a time you used initiative to solve a problem.”</li>
                                    <li>“Provide an example of working under pressure.”</li>
                                    <li>“Tell us about your experience following strict procedures.”</li>
                                    <li className="mt-2">
                                        <strong className="text-brand-primary">Pro Tip:</strong> Answer these using the <strong className="text-brand-primary">STAR method</strong> (Situation, Task, Action, Result) to structure your examples clearly.
                                    </li>
                                </ul>
                           </li>
                           <li><span className="font-semibold text-gray-800">Motivation & Interests:</span> Show your genuine interest in the role and company. Connect your hobbies to relevant skills if possible.</li>
                           <li><span className="font-semibold text-gray-800">Health & Medical:</span> Basic questions about your fitness for a safety-critical role. Honesty is crucial.</li>
                           <li><span className="font-semibold text-gray-800">Right to Work & References:</span> Final confirmation and contacts for your referees.</li>
                           <li><span className="font-semibold text-gray-800">Declaration & Consent:</span> Your final sign-off, confirming the information is accurate.</li>
                        </ol>
                    </div>
                </Card>
            </section>
          </div>
        );
      case 'questionnaire':
        return <PersonalityQuestionnaire />;
      case 'interview':
        return <InterviewPracticeSection />;
      case 'medical':
        return <MedicalAssessmentSection />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
                Navigating the Application Process
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A step-by-step guide to successfully manage each stage of your application, from initial submission to final offer, with RailCore insights.
            </p>
        </section>

        <div className="border-b border-gray-200 mb-10">
          <nav className="-mb-px flex space-x-2 sm:space-x-4 justify-center" aria-label="Tabs">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as Tab)}
                className={`${
                  activeTab === tab.id
                    ? 'border-railway-green text-railway-green'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                } whitespace-nowrap flex py-4 px-2 sm:px-4 border-b-4 font-medium text-sm sm:text-base items-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary rounded-t-md`}
                aria-current={activeTab === tab.id ? 'page' : undefined}
              >
                <span className="text-xl sm:text-2xl mr-2">{tab.icon}</span>
                <span className="hidden sm:inline">{tab.title}</span>
                <span className="sm:hidden">{tab.title.split(' ')[0]}</span>
              </button>
            ))}
          </nav>
        </div>
        
        <div className="mt-8">
            {renderTabContent()}
        </div>

        <div className="mt-20 text-center">
            <Button variant="primary" size="lg" onClick={navigateToMain}>
             Return to Homepage
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationProcessPage;
