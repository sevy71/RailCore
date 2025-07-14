import React from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface DayInTheLifePageProps {
  navigateToMain: () => void;
}

const DayInTheLifePage: React.FC<DayInTheLifePageProps> = ({ navigateToMain }) => {

    const pageContent = {
        title: "A Day in the Life of a Train Driver",
        intro: "Hello — it’s Simon here. I’ve been a Train Driver for just over five years now, and in that time, I’ve learned a great deal about what the job truly involves beyond the obvious starting and stopping of trains. What I want to share here is an honest look at a typical day: not just the technical parts of the role, but how it feels to do the job, the routines I’ve built over time, and how I handle the unexpected things that inevitably come up. This isn’t about sugar-coating the role. It’s about giving you a real insight into what it means to do the job properly, day in and day out. You’ll also find quiz questions dotted throughout to test your knowledge. The answers are at the end — try to resist peeking!",
        sections: [
            {
                title: "The Night Before",
                content: [
                    "My shift today is diagram 900: sign-on at 05:59 and book off at 15:20. A fairly decent start by railway standards — but really, the day starts the evening before. We work all sorts of shifts, and it’s essential to be properly rested so you can stay sharp and safe. The night before, I start winding down early. My family know this routine well now and give me space to prepare mentally and physically.",
                    "<em><strong>Q1. What is the minimum required rest period between shifts, and what is the name of the rules that cover this?</strong></em>",
                    "It takes me about 30 minutes to get to the depot, and I like to give myself an hour in the morning to wake up, have a coffee and get into the right headspace. That means setting the alarm for around 04:30 and getting an early night."
                ]
            },
            {
                title: "Starting the Day",
                content: [
                    "After waking, I check I’ve got everything I need: driver’s keys, high-vis, rule book and other essentials. At work, I book on and collect my working diagram, making sure to check for any amendments. These can include diversions, extra stops, or time changes — missing them can lead to mistakes. Then it’s time to check the notice cases for any new Temporary Speed Restrictions (TSRs), Emergency Speed Restrictions (ESRs) or other updates.",
                    "After that, it’s usually a taxi ride over to Manchester Victoria to relieve the incoming driver on a Class 802 heading to Liverpool Lime Street. Sometimes, though, things don’t go to plan. Today the taxi doesn’t show up. It’s easy to panic, but as drivers we’re trained to stay calm, think ahead and act. I call Control and within five minutes a replacement taxi arrives.",
                    "When I meet the other driver, we do a quick handover so I know if there are any issues with the train. Even if everything seems fine, I always carry out my own checks to be sure the cab and train are ready. Victoria is a busy station and sometimes staff want you to move off quickly, but you must never rush. Taking your time and following your process keeps everyone safe.",
                    "Before departure, I do route commentary out loud — running through the possible routes I could be signalled for, so I’m clear which one I must take. As drivers, we need to know our routes in detail: every platform, junction, speed limit, gradient, signal, tunnel and crossing.",
                    "<em><strong>Q2. What’s the name of the official book drivers use to look up details of any section of track?</strong></em>"
                ]
            },
            {
                title: "On the Move",
                content: [
                    "Once I get the signal, I’m off to Lime Street. Today the train is in electric mode, so there are extra things to watch for: neutral sections, and the fact the acceleration is faster than diesel.",
                    "<em><strong>Q3. What do the two Neutral Section boards look like, and what do they each mean?</strong></em>",
                    "Early in the journey, I carry out a running brake test. Soon, I’m preparing for my first station stop. Many assume it’s just a matter of pressing the brakes, but there’s more to it. At shut-off, I’m still doing 90mph. I also have to manage risks like junctions, a neutral section, foot crossings — and it’s raining. Even so, the train must stop within around a metre of the stop board. Experience helps, but every stop is slightly different because conditions change all the time.",
                    "On a Class 802, the driver opens the doors. I follow the STAR method before opening them.",
                    "<em><strong>Q4. What is the STAR method, and how could it help during your application process?</strong></em>",
                    "After that, the Conductor handles the platform duties and gives me the bell buzzer signal when it’s time to leave."
                ]
            },
            {
                title: "Through the Day & The Final Leg",
                content: [
                    "This repeats across the diagram. After returning to Manchester Victoria, I get a short 20-minute break — usually just enough time to visit the loo and grab something quick. Even breaks need to be managed so you’re back on time. Later, I work another Lime Street service and take it up to Leeds. En route to Stalybridge, the train switches from electric to diesel mode. That process has to be done properly to avoid damaging the train or infrastructure.",
                    "<em><strong>Q5. What’s the name of the behavioural approach originally used at NASA that’s now widely taught in the rail industry?</strong></em>",
                    "At Leeds, I hand the train over to another driver, confirm there are no known faults, and take another short break. Then it’s back to Lime Street on another 802. This time, the service is running about 30 minutes late because of earlier disruption. When that happens, the signaller might route me into loops or less common lines to let other trains pass. Even though I’m still signed for those routes, they aren’t routine, so they need more concentration. You have to push thoughts of going home aside and stay focused. I miss my pass ride home and have to wait for the next service. Back at the depot, I file a report on the delay, then book off."
                ]
            },
            {
                title: "Quiz Answers",
                content: [
                    "<strong>1. Minimum Rest:</strong> The standard minimum rest period between shifts is <strong>12 hours</strong>. This is governed by a combination of working time regulations and company-specific policies, often referred to as 'The Hidden Rules' or 'The Hidden Regulations' in driver slang, which cover fatigue management.",
                    "<strong>2. Route Book:</strong> The official book is called the <strong>Sectional Appendix</strong>. It contains detailed information on every aspect of a route.",
                    "<strong>3. Neutral Section Boards:</strong> The first board (warning) is a <strong>white diamond with a black St. Andrew's cross</strong>, meaning 'prepare to shut off power'. The second board is a <strong>white square with a black horizontal bar</strong>, meaning 'shut off power now'.",
                    "<strong>4. STAR Method:</strong> It stands for <strong>Situation, Task, Action, Result</strong>. It's a structured way to answer competency-based interview questions by providing a clear, real-world example of your skills and experience.",
                    "<strong>5. Behavioural Approach:</strong> It's called <strong>Non-Technical Skills (NTS)</strong>. It focuses on cognitive and social skills like decision-making, communication, and workload management to improve safety and reduce human error."
                ]
            }
        ],
        conclusion: {
            title: "Closing Thoughts",
            text: "And that’s the day done — until tomorrow, when I come back and do it again. Over the years, I’ve learned what works for me: routines to stay focused, how to handle unexpected issues calmly, and a real respect for the responsibility that comes with the job. It’s not always easy, but it is genuinely rewarding — and if you take this path, you’ll find your own way too."
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