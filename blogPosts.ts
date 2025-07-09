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
  }
];
