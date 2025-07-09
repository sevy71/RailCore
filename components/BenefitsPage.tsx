
import React from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface BenefitsPageProps {
  navigateToMain: () => void;
}

const BenefitsPage: React.FC<BenefitsPageProps> = ({ navigateToMain }) => {
  const benefitCategories = [
    { name: "Financial Rewards", icon: "💰", details: "Competitive salary, pension schemes, overtime opportunities." },
    { name: "Travel Perks", icon: "🚆", details: "Free or discounted rail travel for you and often family." },
    { name: "Work-Life Balance", icon: "⚖️", details: "Structured rostering, though involves shift work, can offer blocks of days off." },
    { name: "Job Security & Stability", icon: "🛡️", details: "Essential service with consistent demand for qualified drivers." },
    { name: "Professional Development", icon: "📈", details: "Continuous training, learning new routes and traction." },
    { name: "Health & Wellbeing", icon: "❤️", details: "Access to employee assistance programs and health benefits." },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
                Benefits of Being a Train Driver
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Discover the various perks and advantages that come with a career on the rails, from financial rewards to lifestyle benefits.
            </p>
        </section>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefitCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="p-6 text-center">
                <div className="text-5xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-brand-primary mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.details}</p>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="p-8 border border-dashed border-gray-300 rounded-lg bg-gray-50 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold text-brand-secondary mb-4">More Details Unveiling Soon!</h2>
            <p className="text-gray-600 mb-6">
                RailCore is compiling comprehensive information on typical benefit packages offered in the industry. Check back for specific examples and further details.
            </p>
            <Button variant="primary" size="md" onClick={navigateToMain}>
             Return to RailCore Home
            </Button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
