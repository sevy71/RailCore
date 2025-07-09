import React from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface DayInTheLifePageProps {
  navigateToMain: () => void;
}

const DayInTheLifePage: React.FC<DayInTheLifePageProps> = ({ navigateToMain }) => {

  const pageContent = {
    title: "A Day in the Life of a Train Driver",
    intro: "Working as a train driver is far more than just sitting behind a desk with a view. It demands physical readiness, mental sharpness, and a commitment to safety every single day.",
    sections: [
      {
        title: "Before the Day Begins: Fitness for Duty",
        content: [
          "Being fit for duty isn’t just about turning up on time—it starts long before you arrive. You need to be well-rested, alert, and free from the influence of drugs or alcohol.",
          "Random drug and alcohol testing is in place, and a positive result usually means instant dismissal. <strong>Self-preservation and following the rules</strong> are key in this job—it’s about protecting yourself, your passengers, and everyone else around you by following the rules without compromise."
        ]
      },
      {
        title: "Signing On and Getting Briefed",
        content: [
          "Depending on your roster, you might be waking up in the early hours or heading out late at night. You sign on at your depot, check for any safety notices or route changes, and familiarise yourself with weather updates and planned works.",
          "This briefing ensures you're informed before even stepping onto a train."
        ]
      },
      {
        title: "Preparing the Train",
        content: [
          "Before any journey, you'll carry out pre-departure checks. These include brake tests, safety system checks, lighting and communication tests, and ensuring the cab is set up properly.",
          "You don’t leave the depot until you're satisfied everything is in order."
        ]
      },
      {
        title: "Driving the Train",
        content: [
          "This is the part most people imagine—but it’s not just “driving.” You’re monitoring signals, adjusting speed, observing the track, managing station stops precisely, and keeping in constant contact with control.",
          "Every movement you make must be deliberate and within the rules. Route knowledge is critical—knowing every gradient, signal, and potential hazard like the back of your hand."
        ]
      },
      {
        title: "Turnarounds, Breaks, and Unexpected Situations",
        content: [
          "Turnarounds might mean switching cabs at the end of a route or prepping the train for the return trip. During longer shifts, you’ll take scheduled breaks to stay fresh.",
          "But railways are unpredictable—signal failures, track obstructions, or onboard issues can arise. When they do, it's on you to remain calm, follow procedures, and make safe decisions."
        ]
      },
      {
        title: "Signing Off",
        content: [
          "Once your duties are complete, you'll secure the train, hand over to the next crew or depot, and log any issues or incidents.",
          "Then it's time to sign off and recharge for the next day."
        ]
      },
      {
        title: "Beyond the Cab",
        content: [
          "Being a train driver involves ongoing training and reassessment. Whether it’s learning new rolling stock, additional routes, or updating your safety knowledge—learning never stops.",
          "The shift work can be tough on personal life, but it also offers blocks of time off and a structure many find appealing. Most importantly, it's a job with real responsibility and real pride."
        ]
      }
    ],
    conclusion: {
      title: "Is this role for you?",
      text: "If you're safety-driven, disciplined, and up for a challenge with real purpose, the railway might just be the place for you."
    }
  };


  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
            {pageContent.title}
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {pageContent.intro}
          </p>
        </section>

        <div className="space-y-10 md:space-y-12">
          {pageContent.sections.map((section, index) => (
            <Card key={index} className="shadow-lg">
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-semibold font-condensed text-brand-secondary mb-4">{section.title}</h2>
                <div className="space-y-3 text-gray-700 leading-relaxed">
                  {section.content.map((paragraph, pIndex) => (
                    <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }}></p>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <section className="mt-16 md:mt-24 text-center py-10 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold font-condensed text-brand-primary mb-4">{pageContent.conclusion.title}</h2>
          <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: pageContent.conclusion.text }}></p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              variant="primary" 
              size="lg" 
              onClick={() => {
                navigateToMain();
                setTimeout(() => {
                  const journeySection = document.querySelector('section:nth-of-type(3)'); 
                  if (journeySection) journeySection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              aria-label="Explore our program"
            >
              Learn How We Can Help
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => {
                navigateToMain();
                 setTimeout(() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }}
              aria-label="Contact us for more information"
            >
              Ask Us More
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DayInTheLifePage;