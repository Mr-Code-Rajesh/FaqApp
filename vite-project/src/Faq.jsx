import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

export const Faq = () => {
  const faqdata = [
    {
      id: 1,
      question: 'What services does Saktrix provide?',
      answer: 'Saktrix offers cutting-edge UI components, SaaS support, branding strategies, and AI-based frontend solutions.',
    },
    {
      id: 2,
      question: 'How often do you release new UI kits?',
      answer: 'We release new UI kits every 2 weeks to ensure variety and freshness in all industry segments.',
    },
    {
      id: 3,
      question: 'Can I use Saktrix components for commercial projects?',
      answer: 'Absolutely! All our components are copyright-free and perfect for commercial use.',
    },
  ];

  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white overflow-hidden">
      
      {/* Decorative Glow */}
      <div className="absolute top-1/3 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full opacity-10 blur-3xl animate-spin-slow"></div>

      {/* Title */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-extrabold mb-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
      >
        Frequently Asked Questions
      </motion.h2>

      {/* FAQ List */}
      <div className="w-full max-w-3xl space-y-6 z-10">
        {faqdata.map((data) => (
          <FaqItem key={data.id} question={data.question} answer={data.answer} />
        ))}
      </div>
      <div className='font-extrabold mt-6 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'>
        Developed By &copy; Saktrix {new Date().getFullYear()}
      </div>
    </section>
  );
};

const FaqItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 0.5, type: 'spring' } }}
      className="bg-white/10 border border-white/20 backdrop-blur-md rounded-xl p-4 cursor-pointer shadow-md hover:shadow-pink-500/10 transition"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-pink-400 text-xl">
          {open ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="answer"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="mt-3 text-gray-300 text-sm leading-relaxed"
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
