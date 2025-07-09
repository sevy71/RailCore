
import React from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface ProsConsPageProps {
  navigateToMain: () => void;
}

const ProsConsPage: React.FC<ProsConsPageProps> = ({ navigateToMain }) => {
  const pros = [
    { title: "Job Security", description: "Often a stable career with consistent demand." },
    { title: "Good Salary & Pension", description: "Competitive remuneration and benefits packages." },
    { title: "Sense of Responsibility", description: "Playing a vital role in public transport." },
    { title: "Unique Work Environment", description: "Not your typical office job." },
  ];
  const cons = [
    { title: "Shift Work & Unsocial Hours", description: "Early starts, late finishes, weekends, and holidays." },
    { title: "High Level of Responsibility & Concentration", description: "Can be mentally demanding." },
    { title: "Lone Working", description: "Much of the driving time is spent alone." },
    { title: "Impact on Lifestyle", description: "Shift patterns can affect social and family life." },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
                The Role of a Train Driver: Pros & Cons
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                A balanced look at the advantages and disadvantages of a career as a train driver to help you make an informed decision.
            </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-16">
          <Card className="shadow-lg border-l-4 border-railway-green">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-railway-green mb-6 font-condensed">The Upsides (Pros)</h2>
              <ul className="space-y-4">
                {pros.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-railway-green mr-3 text-xl font-bold">✓</span>
                    <div>
                        <h3 className="font-semibold text-brand-secondary">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>

          <Card className="shadow-lg border-l-4 border-railway-red">
            <div className="p-6 md:p-8">
              <h2 className="text-2xl font-semibold text-railway-red mb-6 font-condensed">The Challenges (Cons)</h2>
              <ul className="space-y-4">
                {cons.map((item, index) => (
                  <li key={index} className="flex items-start">
                     <span className="text-railway-red mr-3 text-xl font-bold">✗</span>
                     <div>
                        <h3 className="font-semibold text-brand-secondary">{item.title}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Card>
        </div>
        
        <div className="p-8 border border-dashed border-gray-300 rounded-lg bg-gray-50 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-4">In-Depth Analysis Coming Soon</h2>
            <p className="text-gray-600 mb-6">
                We're working on providing more detailed explanations and real-world examples for each point. RailCore aims to give you the full picture.
            </p>
            <Button variant="primary" size="md" onClick={navigateToMain}>
             Explore More on RailCore
            </Button>
        </div>
      </div>
    </div>
  );
};

export default ProsConsPage;
