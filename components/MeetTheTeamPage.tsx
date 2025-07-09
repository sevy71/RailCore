
import React from 'react';
import Button from './common/Button';
import Card from './common/Card';

const ProfilePlaceholderIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className || "w-24 h-24 text-gray-400"}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </svg>
);

interface TeamMember {
  name: string;
  title: string;
  bio: React.ReactNode;
  imageUrl?: string; 
}

interface MeetTheTeamPageProps {
  navigateToMain: () => void;
}

const MeetTheTeamPage: React.FC<MeetTheTeamPageProps> = ({ navigateToMain }) => {
  const teamMembers: TeamMember[] = [
    {
      name: "Antonio ‘Tony’ Sirignano", 
      title: "Train Driver & Industry Mentor",
      bio: (
        <>
          <p className="mb-3">Tony began his railway career in 1995 as a conductor before becoming a driver in 1998. He’s driven routes across the north and Scotland, and has worked closely with new drivers in his role as an instructor.</p>
          <p className="mb-3">A qualified assessor (TAQA), Tony has also held a management role overseeing driver assessments, rules-based exams, and safety investigations. While management wasn’t his long-term path, he remains passionate about safety and mentoring, firmly believing that <strong>self-preservation and following the rules</strong> are key to protecting lives on the railway.</p>
          <p>With nearly 30 years of experience, Tony continues to support route learners and share insights with those entering the industry.</p>
        </>
      ),
      // imageUrl: "path/to/tony.jpg" 
    },
    {
      name: "David Evans",
      title: "Driver Assessor & Railway Professional",
      bio: (
        <>
          <p className="mb-3">David Evans began his railway career in 1995, joining British Rail as a conductor. In 1998, he progressed into the driving grade, marking the beginning of a long and varied career across several train operating companies.</p>
          <p className="mb-3">With a deep passion for the railway industry and a commitment to high standards, David became a qualified Driving Instructor, a role he held for over a decade. During this time, he supported numerous trainee drivers from their very first cab experience through to successful final assessments, building their confidence and competence across a wide range of traction.</p>
          <p className="mb-3">For the past six years, David has worked as a Driver Assessor, combining his instructional expertise with an eye for professional standards. In this role, he works closely with both new and experienced drivers, as well as Driver Managers, to ensure safe and effective operations. His experience spans many different types of traction, and he remains committed to helping drivers perform at their best through thorough and supportive assessments.</p>
          <p>David’s approach is based on experience, professionalism, and a real passion for rail, making him a trusted figure in driver development and operational safety.</p>
        </>
      ),
      // imageUrl: "path/to/david.jpg" 
    },
    {
      name: "Simon Thomas", 
      title: "Co-founder & Head of Product",
      bio: (
         <>
          <p className="mb-3">As a co-founder of RailCore, Simon Thomas is the architect behind our educational platform. With a deep background in designing and developing online learning systems, he is passionate about making expert knowledge accessible, engaging, and effective.</p>
          <p>Simon works tirelessly with Tony and David to translate their decades of real-world railway experience into the structured e-learning modules, interactive tools, and comprehensive resources that form the core of our program. His mission is to ensure that every aspiring driver has a clear and supportive digital-first pathway to achieving their career goals.</p>
        </>
      ),
      // imageUrl: "path/to/simon.jpg" 
    },
  ];

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-16 md:mb-20">
          <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
            Meet the Team at Rail<span className="text-railway-green">Core</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The driving force behind RailCore, combining decades of railway experience to guide your career.
          </p>
        </section>

        <section className="space-y-12 md:space-y-16 mb-16 md:mb-20">
          {teamMembers.map((member, index) => (
            <Card key={index} className="shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl">
              <div className="md:flex">
                <div className="md:flex-shrink-0 md:w-1/3 flex items-center justify-center p-6 bg-gray-50">
                  {member.imageUrl ? (
                    <img src={member.imageUrl} alt={`Photo of ${member.name}`} className="w-40 h-40 rounded-full shadow-md object-cover" />
                  ) : (
                    <div className="w-40 h-40 rounded-full shadow-md bg-gray-200 flex items-center justify-center">
                      <ProfilePlaceholderIcon className="w-24 h-24 text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="p-6 md:p-8 flex-grow">
                  <h2 className="text-2xl md:text-3xl font-semibold text-brand-primary mb-1">{member.name}</h2>
                  <p className="text-md text-railway-green font-medium mb-4">{member.title}</p>
                  <div className="text-gray-700 text-sm md:text-base leading-relaxed space-y-3">{member.bio}</div>
                </div>
              </div>
            </Card>
          ))}
        </section>
        
        <section className="text-center py-10 bg-brand-primary text-white rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold font-condensed mb-4">Our Collective Commitment</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            With a combined experience of over 60 years in active railway roles including driving, training, and management, our team at RailCore is uniquely positioned to provide you with practical, current, and comprehensive guidance. We are dedicated to helping you navigate every step towards a successful train driving career.
          </p>
          <Button 
            variant="primary" 
            size="lg" 
            onClick={() => {
              navigateToMain();
              setTimeout(() => {
                const journeySection = document.querySelector('section:nth-of-type(3)'); // Assuming Journey section is the third
                if (journeySection) journeySection.scrollIntoView({ behavior: 'smooth' });
                else { // Fallback to contact if Journey section isn't found
                    const contactSection = document.getElementById('contact');
                    if (contactSection) contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }, 100);
            }}
            aria-label="Explore the RailCore Program"
          >
            Explore the RailCore Program
          </Button>
        </section>
      </div>
    </div>
  );
};

export default MeetTheTeamPage;
