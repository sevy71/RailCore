import React from 'react';
import Card from './common/Card';

const medicalChecks = [
  {
    icon: "👁️",
    title: "Vision Test (Eyesight)",
    points: [
      "Distance vision: You must meet minimum visual acuity standards (with or without glasses/lenses).",
      "Colour vision: You’ll take the Ishihara Test to check for red/green colour blindness.",
      "Peripheral vision: Checked to ensure you can spot hazards at the edge of your view."
    ],
    important: "If you wear glasses or contact lenses, bring them. You can still pass if your corrected vision meets the standard."
  },
  {
    icon: "👂",
    title: "Hearing Test",
    points: [
      "Audiometry test using headphones and beeps at various frequencies.",
      "You’ll press a button when you hear a sound in either ear."
    ],
    important: "You don’t need perfect hearing, but you must meet the threshold needed to detect alarms, radio messages, etc."
  },
  {
    icon: "⚖️",
    title: "Height & Weight / BMI",
    points: [
        "Your Body Mass Index (BMI) is recorded.",
        "High BMI alone won’t disqualify you, but it may raise concerns if linked to other health issues (e.g. sleep apnoea)."
    ],
    important: null
  },
  {
    icon: "❤️",
    title: "Blood Pressure & Heart Rate",
    points: [
        "Checked to ensure your cardiovascular system is stable.",
        "Very high blood pressure may need treatment before proceeding."
    ],
    important: null
  },
  {
    icon: "🤸",
    title: "Mobility & Coordination",
    points: [
        "Climb a set of steps (like getting into a cab).",
        "Perform simple balance or coordination movements.",
        "Demonstrate range of motion (e.g. neck turning, shoulder flexibility)."
    ],
    important: "You don’t need to be athletic—just mobile enough to safely operate the train and evacuate if needed."
  },
  {
    icon: "📋",
    title: "Medical History Review",
    points: [
        "You’ll be asked about past or current medical conditions, including: Diabetes, Epilepsy, Sleep disorders, Heart conditions, Mental health concerns.",
        "You may need to provide GP or specialist reports."
    ],
    important: null
  },
  {
    icon: "🧪",
    title: "Drugs & Alcohol Screening",
    points: [
        "Urine or saliva test for prohibited substances and alcohol.",
        "Failing this will disqualify you immediately (zero-tolerance policy).",
        "Random tests may also be done once employed."
    ],
    important: null
  },
  {
    icon: "🧠",
    title: "Psychological Readiness",
    points: [
        "Some operators include a basic mental health screening or stress resilience check, often via a questionnaire."
    ],
    important: "This varies by operator."
  }
];

const MedicalAssessmentSection: React.FC = () => {
    return (
        <>
            <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-4 mt-16">
                Train Driver Medical Assessment: What to Expect
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-10">
                The medical is a crucial, safety-focused step. Here’s a detailed breakdown of what the assessment typically includes, based on UK rail industry standards.
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {medicalChecks.map((check, index) => (
                    <Card key={index} className="shadow-lg h-full flex flex-col">
                        <div className="p-6 flex-grow">
                            <div className="flex items-start">
                                <span className="text-4xl mr-4" aria-hidden="true">{check.icon}</span>
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-primary mb-2">{check.title}</h3>
                                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                                        {check.points.map((point, pIndex) => (
                                            <li key={pIndex}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            {check.important && (
                                <div className="mt-4 p-3 bg-railway-yellow/20 border-l-4 border-railway-yellow rounded">
                                    <p className="text-sm text-gray-800"><strong className="font-semibold text-railway-orange">Important:</strong> {check.important}</p>
                                </div>
                            )}
                        </div>
                    </Card>
                ))}
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mt-12">
                 <Card className="shadow-xl bg-gray-50 border-t-4 border-brand-primary">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold font-condensed text-brand-primary mb-4 flex items-center">
                            <span className="text-3xl mr-3" aria-hidden="true">🎒</span> What to Bring & Prepare
                        </h3>
                         <ul className="list-disc list-inside space-y-2 text-gray-700">
                            <li>Glasses/contact lenses (if used)</li>
                            <li>Medication list (if you take any)</li>
                            <li>GP contact details</li>
                            <li>Comfortable clothing</li>
                            <li>Be honest—hidden conditions can cause disqualification later if discovered</li>
                        </ul>
                    </div>
                 </Card>
                 <Card className="shadow-xl bg-gray-50 border-t-4 border-railway-red">
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold font-condensed text-railway-red mb-4 flex items-center">
                             <span className="text-3xl mr-3" aria-hidden="true">🚦</span> Final Tips
                        </h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                           <li><strong className="text-gray-800">Don’t panic:</strong> This isn’t a fitness test. It’s to confirm you’re medically safe to drive.</li>
                           <li><strong className="text-gray-800">Be truthful:</strong> It’s better to declare things early than risk later disqualification.</li>
                           <li><strong className="text-gray-800">Be proactive:</strong> If you have a known condition, ask your GP about it and get supporting letters if needed.</li>
                        </ul>
                    </div>
                 </Card>
            </div>
        </>
    )
}

export default MedicalAssessmentSection;
