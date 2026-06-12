'use client';

import { motion } from 'framer-motion';
import { problemSolution } from '@/lib/content';
import {  Badge } from '@/components/ui/Card';

export const ProblemSolutionSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="problem-solution" className="relative scroll-mt-24 py-20 sm:py-32 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Angled background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 -skew-y-3 origin-top-right" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="default">{problemSolution.problem.title}</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            {problemSolution.problem.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-3xl mx-auto">
            {problemSolution.problem.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Problem side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Current Challenges
            </h3>
            {problemSolution.problem.painPoints.map((point, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold text-sm">
                  ✕
                </div>
                <span className="text-gray-800 dark:text-gray-200">{point}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {problemSolution.solution.title}
            </h3>
            {problemSolution.solution.benefits.map((benefit, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="flex items-start gap-4 p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white font-bold text-sm">
                  ✓
                </div>
                <span className="text-gray-800 dark:text-gray-200">{benefit}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Center divider with arrow */}
        <motion.div
          className="flex justify-center mt-12"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="hidden lg:flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center text-white font-bold text-xl">
              →
            </div>
            <span className="text-gray-600 dark:text-gray-400 font-semibold">ShopDropz Transforms Your Business</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
