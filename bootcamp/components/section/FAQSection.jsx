'use client'
import React, { useState } from 'react';

const faqs = [
    {
      question: "Is this bootcamp really for beginners?",
      answer: "Yes! We designed Hokage Bootcamp so that even if you've never written a line of code, you can still follow along, learn, and grow fast."
    },
    {
      question: "What will I learn during the program?",
      answer: "You’ll go through the fundamentals of web development, version control with Git/GitHub, UI/UX principles, and how to build real-world projects with HTML, CSS, and JavaScript."
    },
    {
      question: "Is this completely free?",
      answer: "Yes, the upcoming cohort's bootcamp in August 2025 is completely free. But we offer a Premium track with added perks like mentor support, immunity, mock interviews, and career reviews."
    },
    {
      question: "Can I switch from Free to Premium mid-way?",
      answer: "Absolutely. If you start with the Free track and want access to more resources, you can upgrade to Premium anytime — no penalty, no loss of progress."
    },
    {
      question: "What happens after the bootcamp ends?",
      answer: "You'll get a certificate of completion, access to our alumni community, job boards, and even personal project showcases. We don’t ghost you — we groom you."
    }
  ];
  

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-20 px-2 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-vastago font-black text-[#21083F] mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-700 font-nohemi leading-relaxed max-w-2xl mx-auto">
            Everything you need to know about HNG Premium
          </p>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full text-left px-6 py-5 font-nohemi text-lg text-[#21083F] font-medium flex justify-between items-center focus:outline-none"
              >
                <span>{faq.question}</span>
                <svg
                  className={`w-5 h-5 transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180 text-[#7FF41A]' : 'rotate-0'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div className="px-6 pb-5 text-gray-700 text-base font-nohemi">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
