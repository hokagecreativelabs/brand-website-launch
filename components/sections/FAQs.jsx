"use client";

import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { motion } from "framer-motion";

const qnas = [
  { question: "What types of services do you offer?", answer: "We offer full brand identity design, Web Design & Web Developmemnt Services, Performance Optimizations, Web Developemtnt training and more." },
  { question: "How do you ensure the quality of your projects?", answer: "We follow best practices, code reviews, and testing protocols. You can visit our projects page and see how some of our websites are performing online." },
  { question: "What is your development process like?", answer: "We follow agile methodologies, keeping you updated at every step - from the inital contact to handover." },
  { question: "Can you work with existing platforms?", answer: "Yes, we can seamlessly upgrade or build newly with client's preferrerd platforms even tho we still give our professional input." },
  { question: "How do you handle project timelines?", answer: "After understanding the client's needs, we set realistic deadlines and ensure timely communication and updates." },
  { question: "How often will I receive updates on the project?", answer: "We provide regular updates through your preferred communication channel." },
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
        <span className="text-lg font-semibold">{qna.question}</span>
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
