import { BlogPost } from './types';

export const BLOG_POSTS_DATA: BlogPost[] = [
  {
    id: 'mastering-the-driver-manager-interview',
    title: 'Mastering the Driver Manager Interview',
    author: 'Dave Evans',
    date: 'June 16, 2025',
    excerpt: 'A complete breakdown of common interview questions, what managers are looking for, and how to answer effectively using proven techniques.',
    content: [
      {
        type: 'paragraph',
        content: "When interviewing for a train driver job, the Driver Manager will typically ask questions to assess your suitability for a safety-critical role, your understanding of the responsibilities, and your personal qualities such as concentration, reliability, and professionalism. Here’s a breakdown of common questions, grouped by category, with tips on how to answer them effectively:"
      },
      {
        type: 'heading',
        content: '1. Safety & Rules'
      },
      {
        type: 'paragraph',
        content: "These questions aim to assess your commitment to working safely and following procedures."
      },
      {
        type: 'list',
        content: [
          "<strong>“Tell me about a time you followed safety procedures to the letter.”</strong> 👉 Use the STAR technique. Highlight your understanding of why rules are there.",
          "<strong>“What would you do if you saw a colleague not following the rules?”</strong> 👉 Say you’d challenge the behaviour appropriately and report if necessary.",
          "<strong>“Why do you think safety is important in a train driver’s role?”</strong> 👉 Emphasise responsibility, public safety, and being alert at all times."
        ]
      },
      {
        type: 'heading',
        content: '2. Working Alone & Responsibility'
      },
      {
        type: 'paragraph',
        content: "They need to know you can work independently and stay alert."
      },
      {
        type: 'list',
        content: [
          "<strong>“How do you stay focused during long, repetitive tasks?”</strong> 👉 Mention strategies like routines, mental checklists, breaks (where appropriate), and strong personal discipline.",
          "<strong>“Have you ever had a job where you worked alone?”</strong> 👉 Use retail, stockroom, delivery, or night shift roles as examples."
        ]
      },
      {
        type: 'heading',
        content: '3. Decision-Making & Judgement'
      },
      {
        type: 'paragraph',
        content: "Train drivers must make calm, rational decisions—even under pressure."
      },
      {
        type: 'list',
        content: [
          "<strong>“Tell me about a time you had to make a quick decision under pressure.”</strong> 👉 Show that you stayed calm, followed procedure, and thought logically.",
          "<strong>“What would you do if an indicator light came on but the train seemed to be running fine?”</strong> 👉 You’d follow protocol: check the meaning, alert the control centre, and act based on guidance."
        ]
      },
       {
        type: 'heading',
        content: '4. Motivation & Commitment'
      },
      {
        type: 'paragraph',
        content: "They want drivers who are serious, committed, and aware of what the job involves."
      },
      {
        type: 'list',
        content: [
            "<strong>“Why do you want to be a train driver?”</strong> 👉 Focus on responsibility, interest in rail, long-term career, shift work tolerance, and desire for routine/safety.",
            "<strong>“What do you know about the lifestyle and shifts?”</strong> 👉 Talk about early starts, weekends, bank holidays—show you’ve researched it.",
            "<strong>“Are you willing to relocate or commute for this role?”</strong> 👉 Be honest but flexible. Mention your travel readiness or plans if applicable."
        ]
      },
      {
        type: 'heading',
        content: '5. Personal Qualities'
      },
      {
        type: 'paragraph',
        content: "These questions assess if you’re the kind of person they can rely on."
      },
      {
        type: 'list',
        content: [
          "<strong>“How would your previous employer describe you?”</strong> 👉 Focus on being punctual, trustworthy, and responsible.",
          "<strong>“Tell me about a time you went above and beyond at work.”</strong>",
          "<strong>“What do you do if you’re unsure about something at work?”</strong> 👉 Say you’d seek clarification or ask a supervisor rather than guess."
        ]
      },
      {
        type: 'tip',
        content: "<strong>Know the STAR technique</strong> (Situation, Task, Action, Result). Focus on safety, alertness, responsibility, calmness, and teamwork. Be honest, self-aware, and composed—they observe your behaviour as much as your answers. Expect questions based on the job profile and competencies like concentration, reliability, and rule-following."
      }
    ]
  },
  {
    id: 'a-guide-to-uk-train-operators-in-2025',
    title: 'Who Runs the Rails? A Guide to UK Train Operators in 2025',
    author: 'Dave Evans',
    date: 'July 10, 2025',
    excerpt: 'A detailed breakdown of the different types of train operating companies in Great Britain, who owns them, and what the future holds with the transition to Great British Railways.',
    content: [
      {
        type: 'paragraph',
        content: "As of mid-2025 in Great Britain (England, Scotland & Wales), passenger services are run by a mix of private companies and government-controlled bodies. Understanding who's who can help you target your applications. Here’s the breakdown:"
      },
      {
        type: 'heading',
        content: 'Franchised & Concession Operators'
      },
      {
        type: 'paragraph',
        content: "These are private companies contracted by the government or Transport for London (TfL) to run services."
      },
      {
        type: 'list',
        content: [
          "Arriva Rail London (London Overground)", "Avanti West Coast", "c2c (Essex Thameside)", "Chiltern Railways", "CrossCountry", "East Midlands Railway", "Elizabeth line (MTR for TfL)", "Gatwick Express / GTR", "Great Western Railway", "Southeastern", "South Western Railway", "TransPennine Express", "West Midlands Trains"
        ]
      },
      {
        type: 'heading',
        content: 'State-Owned / Government-Operated TOCs'
      },
      {
        type: 'paragraph',
        content: "These services are currently managed directly by the Department for Transport (DfT) Operator, ScotRail, or Transport for Wales (TfW)."
      },
      {
        type: 'list',
        content: ["LNER", "Northern Trains", "Southeastern", "TransPennine Express", "Caledonian Sleeper", "ScotRail", "Transport for Wales"]
      },
      {
        type: 'heading',
        content: 'Open-Access Operators'
      },
      {
        type: 'paragraph',
        content: "These operators run services on a purely commercial basis without a government franchise."
      },
      {
        type: 'list',
        content: ["Eurostar", "Grand Central", "Hull Trains", "Lumo", "Heathrow Express"]
      },
      {
        type: 'tip',
        content: "<strong>The Future is Changing:</strong> Between 2025 and 2027, several franchised operators will transition to public ownership under new government contracts. This includes South Western Railway (May ’25), c2c (July ’25), and Greater Anglia, with more to follow. The landscape is constantly evolving as the industry moves towards the Great British Railways model."
      },
      {
        type: 'heading',
        content: 'Confirmed Nationalisation Timeline'
      },
      {
        type: 'list',
        content: [
          "<strong>May 2025:</strong> South Western Railway transitions to public ownership.",
          "<strong>July 2025:</strong> c2c follows suit.",
          "<strong>Autumn 2025:</strong> Greater Anglia is scheduled for transition.",
          "<strong>2025-2027:</strong> Other operators will follow approximately every 3 months through October 2027 under the Great British Railways model."
        ]
      },
      {
        type: 'heading',
        content: 'Quick Takeaways'
      },
      {
        type: 'list',
        content: [
          "<strong>Operator Landscape:</strong> The market consists of over 20 franchised/concession operators, around 5 open-access operators, and 7 currently state-owned entities.",
          "<strong>Driver Pay:</strong> The typical annual salary range is £50k–£70k, with senior and high-speed roles exceeding £80k. London-based roles are often among the highest paid.",
          "<strong>Core Benefits:</strong> Expect strong pension schemes, generous leave, shift premiums, free family travel, and robust union support.",
          "<strong>Market Shift:</strong> While nationalisation is increasing, it's important to note that pay and benefits generally remain constant after the transition."
        ]
      }
    ]
  }
];
