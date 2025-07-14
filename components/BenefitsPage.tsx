
import React from 'react';
import Button from './common/Button';
import Card from './common/Card';

interface BenefitsPageProps {
  navigateToMain: () => void;
}

const BenefitsPage: React.FC<BenefitsPageProps> = ({ navigateToMain }) => {
  const salaryData = [
    { company: "LNER", range: "£30k – £70k (cap)", region: "National" },
    { company: "Great Western Railway", range: "£49.8k – £67.3k", region: "West/South West" },
    { company: "East Midlands Railway", range: "£54.4k – £61.5k", region: "East Midlands" },
    { company: "Northern Rail", range: "£40.1k – £57.5k", region: "North of England" },
    { company: "ScotRail", range: "£50.7k – £56.2k", region: "Scotland" },
    { company: "Merseyrail", range: "£50.6k – £55.4k", region: "Merseyside" },
    { company: "Southeastern", range: "£37.3k – £58.5k", region: "South East" },
    { company: "TfL (London)", range: "£57.2k – £61.6k", region: "London" },
  ];

  const benefitsData = [
    { icon: "🏦", title: "Pensions", description: "Public sector-style final salary or multi-banded schemes." },
    { icon: "✈️", title: "Paid Leave", description: "Generous allowance, around 43 days p.a. including bank holidays." },
    { icon: "⏰", title: "Shift Premiums", description: "Enhanced pay rates for night, weekend, and bank holiday work." },
    { icon: "🎟️", title: "Travel Perks", description: "Free or heavily discounted rail travel for you and your family." },
    { icon: "🧑‍🏫", title: "Career Progression", description: "Opportunities to become a trainer or senior driver, earning up to £80k+." },
    { icon: "🤝", title: "Union Representation", description: "Strong unions like ASLEF and RMT negotiate regular pay raises." },
  ];

  const universalPerks = {
    title: "Universal Rail-Wide Perks (Rail Staff Travel Framework)",
    items: [
      "<strong>TOC Privilege Card:</strong> Free travel on your own operator’s services (duty, commuting, leisure).",
      "<strong>Nationwide Discount:</strong> 75% off leisure travel across other UK TOCs (off-peak & anytime).",
      "<strong>Family Benefits:</strong> Free access for partners and children on leisure travel.",
      "<strong>Reduced-Rate Season Ticket:</strong> 75% discount on season tickets for commuting.",
      "<strong>International Travel:</strong> After 1 year, access to 50% off many European rail fares via a FIP card."
    ]
  };

  const operatorSpecificPerks = [
    { operator: "LNER", details: ["Free travel for driver + family on all LNER services.", "50% off international rail fares after one year."] },
    { operator: "GTR (Thameslink, Southern, etc.)", details: ["Free travel on all GTR services.", "Free TfL travel via Priv-to-Oyster PAYG card."] },
    { operator: "TransPennine Express (TPE)", details: ["Free travel on TPE services (plus 50% off for friends/family).", "10 free journeys on other FirstGroup TOCs annually."] },
    { operator: "Southeastern", details: ["Free travel from day one on SE services.", "After 6 months, free Croydon Tramlink travel and ferry discounts."] },
    { operator: "Northern, WMT, Merseyrail, etc.", details: ["Generally offer free travel on their own networks for staff and family, plus the standard 75% discount elsewhere."] }
  ];

  const limitsAndFlexibility = {
      title: "Important Notes: Flexibilities & Limits",
      items: [
          "<strong>First-Class:</strong> Privilege cards are typically for standard class only; upgrades are not usually discounted.",
          "<strong>TfL Access:</strong> Only GTR staff currently get integrated Oyster card benefits for TfL travel.",
          "<strong>Sleeper Services:</strong> The 75% discount applies to Caledonian and GWR sleepers.",
          "<strong>Penalty Risk:</strong> Misuse of travel cards can lead to penalties or card revocation."
      ]
  };

  return (
    <div className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold font-condensed text-brand-primary mb-4">
            Salary & Benefits of a Train Driver
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A detailed look at the financial rewards and lifestyle perks that come with a career on the rails, based on 2025 industry data.
          </p>
        </section>

        <section id="salaries" className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-10">Train Driver Salary Breakdown (2025)</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-xl bg-gray-50 border-t-4 border-railway-green p-6">
              <h3 className="text-2xl font-semibold font-condensed text-brand-primary mb-4">UK Averages & Key Figures</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start"><strong className="w-32 shrink-0">Base Salary:</strong> <span>£47,000 – £66,000</span></li>
                <li className="flex items-start"><strong className="w-32 shrink-0">Median (inc. bonus):</strong> <span>~£58,500</span></li>
                <li className="flex items-start"><strong className="w-32 shrink-0">Trainee Driver:</strong> <span>£24,000 – £32,000</span></li>
                <li className="flex items-start"><strong className="w-32 shrink-0">Senior/High-Speed:</strong> <span>£70,000 – £80,000+</span></li>
                <li className="flex items-start"><strong className="w-32 shrink-0">London Drivers:</strong> <span>Can reach £62k – £85k+ p.a.</span></li>
              </ul>
            </Card>
            <Card className="shadow-xl border-t-4 border-brand-primary p-6">
              <h3 className="text-2xl font-semibold font-condensed text-brand-primary mb-4">Median Salaries by Operator</h3>
              <div className="space-y-2 text-sm">
                {salaryData.map(item => (
                  <div key={item.company} className="flex justify-between items-center border-b border-gray-200 py-2">
                    <span className="font-semibold text-gray-800">{item.company}</span>
                    <span className="text-gray-600">{item.range}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>

        <section id="benefits" className="mb-16 md:mb-20">
          <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-10">Beyond the Paycheck: Common Benefits</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefitsData.map((benefit) => (
              <Card key={benefit.title} className="shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="p-6">
                  <div className="text-5xl mb-4" aria-hidden="true">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="travel-perks" className="mb-16 md:mb-20">
            <h2 className="text-3xl font-bold font-condensed text-center text-brand-secondary mb-10">Travel Perks: A Detailed Breakdown</h2>
            <div className="max-w-5xl mx-auto space-y-10">
                <Card className="shadow-xl bg-gray-50 border-t-4 border-brand-primary">
                    <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-semibold font-condensed text-brand-primary mb-4 flex items-center">
                            <span className="text-3xl mr-3" aria-hidden="true">🌍</span> {universalPerks.title}
                        </h3>
                        <ul className="list-disc list-outside space-y-2 pl-5 text-gray-700">
                            {universalPerks.items.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>
                </Card>

                <Card className="shadow-xl">
                    <div className="p-6 md:p-8">
                        <h3 className="text-2xl font-semibold font-condensed text-brand-secondary mb-6">Operator-Specific Highlights</h3>
                        <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                            {operatorSpecificPerks.map(op => (
                                <div key={op.operator}>
                                    <h4 className="font-semibold text-brand-primary">{op.operator}</h4>
                                    <ul className="list-disc list-outside space-y-1 pl-5 text-sm text-gray-600 mt-1">
                                        {op.details.map((detail, i) => <li key={i}>{detail}</li>)}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </Card>

                <Card className="shadow-xl bg-yellow-50 border-l-4 border-railway-orange">
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-railway-orange mb-3">{limitsAndFlexibility.title}</h3>
                        <ul className="list-disc list-outside space-y-2 pl-5 text-sm text-gray-800">
                            {limitsAndFlexibility.items.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
                            ))}
                        </ul>
                    </div>
                </Card>
            </div>
        </section>

        <div className="mt-20 text-center">
          <Button variant="primary" size="lg" onClick={navigateToMain}>
            Return to Homepage
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsPage;
