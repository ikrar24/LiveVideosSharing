import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How can i use?",
    answer:
      "Frist of All you can crate a room for geting the room code then you share the code with your partner. "
  },
  {
    question: "What is the code?",
    answer:
      " It is the key of Room Withoute code you can't enter in any room."
  },
  {
    question: "How can create Room?",
    answer:
      "Click the create button then fill the requried filed then you got the room."
  },
  {
    question: "How can join the Room?",
    answer:
      "Its so easy if have you Room Code thne Click the join button and enter the code."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full flex justify-center mt-10 py-10 bg-gray-800">
      <div className="w-[90%] md:w-[70%]">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-400">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left font-medium text-gray-700"
              >
                <span>{faq.question}</span>
                {openIndex === index ? (
                  <FaMinus className="text-gray-600" />
                ) : (
                  <FaPlus className="text-gray-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
