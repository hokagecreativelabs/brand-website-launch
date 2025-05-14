"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const qnas = [
  {
    question: "What services do you offer?",
    answer: "We provide complete brand identity design, custom web design and development, performance optimization, and training for individuals or teams looking to upskill in modern web development."
  },
  {
    question: "How do you ensure quality in your projects?",
    answer: "We stick to industry best practices; our work goes through code reviews, testing, and ongoing optimization. You can check out our Projects page to see real-world examples performing live."
  },
  {
    question: "What does your development process look like?",
    answer: "We work in agile cycles and keep you in the loop throughout; from discovery and strategy to design, development, and handoff."
  },
  {
    question: "Can you work with an existing website or platform?",
    answer: "Absolutely. Whether you’re looking to upgrade or rebuild from scratch, we can work with your current tech stack or recommend a better fit for your goals."
  },
  {
    question: "How do you manage timelines?",
    answer: "Once we understand the scope and goals, we set clear, realistic timelines—and stick to them. You’ll always be kept informed with progress updates."
  },
  {
    question: "How often will I get updates during the project?",
    answer: "As often as you’d like. We typically provide daily, weekly or milestone-based updates via your preferred communication method—email, Slack, Notion, or otherwise."
  },
];

export default function QnASection() {
  const [activeIndex, setActiveIndex] = useState(null); // Track the single open QnA

  const toggleQnA = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Close if same, else open new one
  };

  return (
    <section className="w-full px-4 md:py-32 py-12 md:px-8 lg:px-16 flex justify-center items-center">
      <div className="max-w-[1088px] flex flex-col items-center gap-8">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold">
          <span className="text-black">Common</span>{" "}
          <span className="text-gray-500">Questions</span>
        </h2>

        {/* Two-column layout on desktop, single-column on mobile */}
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          {/* Left Column */}
          <div className="flex flex-col gap-4">
            {qnas.slice(0, 3).map((qna, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`w-full p-6 md:p-8 border rounded-3xl cursor-pointer transition-all duration-300 ${
                    isActive ? "bg-gray-100" : "h-auto"
                  }`}
                  onClick={() => toggleQnA(index)}
                >
                  {/* Question */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-md  ">{qna.question}</span>
                    {isActive ? <FiMinus /> : <FiPlus />}
                  </div>

                  {/* Animated Answer */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <hr className="my-4 border-gray-300" />
                    <p className="mt-2 text-gray-600">{qna.answer}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-4">
          {qnas.slice(3, 6).map((qna, index) => {
  const realIndex = index + 3; // Ensure unique index for the second column
  const isActive = activeIndex === realIndex;

  return (
    <div
      key={realIndex} // Use realIndex to ensure unique keys
      className={`w-full p-6 md:p-8 border rounded-3xl cursor-pointer transition-all duration-300 ${
        isActive ? "bg-gray-100" : "h-auto"
      }`}
      onClick={() => toggleQnA(realIndex)} // Use realIndex for toggle
    >
      {/* Question */}
      <div className="flex justify-between items-center">
        <span className="text-lg">{qna.question}</span>
        {isActive ? <FiMinus /> : <FiPlus />}
      </div>

      {/* Animated Answer */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <hr className="my-4 border-gray-300" />
        <p className="mt-2 text-gray-600">{qna.answer}</p>
      </motion.div>
    </div>
  );
})}

          </div>
        </div>
      </div>
    </section>
  );
}
