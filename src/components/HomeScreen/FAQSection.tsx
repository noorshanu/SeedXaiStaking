/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Dummy FAQ data
  const faqs = [
    {
      question: "What is Seed AI?",
      answer:
        "Seed AI is a comprehensive platform that integrates a decentralized app store, AI agent launchpad, and developer tools, enabling users and developers to discover, deploy, and manage AI agents seamlessly within the Web3 ecosystem.",
    },
    {
      question: "How does Seed AI's marketplace ensure the quality of AI agents?",
      answer:
        "Seed AI implements a strict vetting process and quality assurance protocols to ensure that all AI agents meet industry standards.",
    },
    {
      question: "What is the Initial Agent Offering (IAO) Pad?",
      answer:
        "The IAO Pad is a launchpad for AI agents, enabling developers to launch and market their AI solutions effectively.",
    },
    {
      question:
        "How can developers benefit from Seed AI’s Developer SDK?",
      answer:
        "Seed AI's Developer SDK provides tools and APIs that simplify the development and deployment of AI agents.",
    },
    {
      question: "What is the Agent SeedVerse?",
      answer:
        "The Agent SeedVerse is a curated library where AI agents can interact and collaborate for enhanced functionality.",
    },
    {
      question: "How does Seed AI ensure security and transparency?",
      answer:
        "Seed AI employs blockchain technology and advanced encryption techniques to maintain the highest levels of security and transparency.",
    },
    {
      question: "Who can use Seed AI’s platform?",
      answer:
        "Anyone interested in exploring, developing, or deploying AI solutions within the Web3 ecosystem can use Seed AI’s platform.",
    },
    {
      question: "How can I get involved with Seed AI?",
      answer:
        "You can get involved by joining the Seed AI community, exploring the platform, and collaborating on AI projects.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className=" text-white py-16 relative">
      <img src="images/faq.png" alt="" className=" absolute top-0 left-0 right-0 h-full w-full overflow-hidden"/>
      <img src="images/faqleft.png" alt="" className=" absolute bottom-0 left-0 h-[500px]"/>
      <img src="images/faqright.png" alt="" className=" absolute top-0 right-0 h-[500px]"/>
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-12">
        Deploy agents and agentic vaults
        </h2>

        {/* FAQ List */}
        <div className="space-y-4 relative z-50">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-500/10 to-black/30 rounded-lg p-6 border border-purple-600 shadow-lg"
            >
              {/* Question */}
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg md:text-xl font-semibold">
                  {faq.question}
                </h3>
                {activeIndex === index ? (
                  <FiChevronUp size={24} className="text-purple-400" />
                ) : (
                  <FiChevronDown size={24} className="text-purple-400" />
                )}
              </div>

              {/* Answer */}
              {activeIndex === index && (
                <p className="mt-4 text-gray-300">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;