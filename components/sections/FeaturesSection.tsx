'use client';

import { motion } from 'framer-motion';
import { platformFeatures } from '@/lib/content';
import { Card, Badge } from '@/components/ui/Card';

export const FeaturesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="features" className="relative scroll-mt-24 py-20 sm:py-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="default">Platform Features</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Complete Platform Suite
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Everything you need for modern automotive service operations
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {platformFeatures.map((feature, i) => (
            <motion.div key={i} variants={itemVariants}>
              <Card className="h-full">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                  {feature.category}
                </h3>
                <ul className="space-y-3">
                  {feature.items.map((item, j) => (
                    <motion.li
                      key={j}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: j * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-lime-400 flex items-center justify-center text-xs font-bold text-gray-900 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
