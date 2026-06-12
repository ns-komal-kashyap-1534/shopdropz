'use client';

import { motion } from 'framer-motion';
import { workflowSteps } from '@/lib/content';
import { Card, Badge } from '@/components/ui/Card';

export const WorkflowSection = () => {
  return (
    <section id="workflow" className="relative scroll-mt-24 py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary">How It Works</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Five Steps to Digital Service Excellence
          </h2>
        </motion.div>

        {/* Desktop timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="grid grid-cols-5 gap-4">
              {workflowSteps.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center h-full">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-lime-400 flex items-center justify-center text-white font-bold text-lg mx-auto mb-4"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: 'spring', stiffness: 400 }}
                    >
                      {step.number}
                    </motion.div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {step.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile stepper */}
        <div className="lg:hidden">
          <div className="space-y-6">
            {workflowSteps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0">
                  <motion.div
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-lime-400 flex items-center justify-center text-white font-bold text-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.number}
                  </motion.div>
                </div>
                <Card className="flex-1">
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
