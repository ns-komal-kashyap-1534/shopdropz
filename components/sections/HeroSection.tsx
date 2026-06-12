'use client';

import { motion } from 'framer-motion';
import { heroContent } from '@/lib/content';
import { Badge } from '@/components/ui/Card';

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section id="home" className="relative pt-24 pb-12 sm:pt-28 sm:pb-20 flex items-center justify-center overflow-hidden scroll-mt-24 bg-gradient-to-br from-blue-50 via-white to-lime-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-72 h-72 bg-lime-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 dark:opacity-10"
          animate={{ x: [0, 30, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        />
      </div>

      <motion.div
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <Badge variant="secondary">{heroContent.subtitle}</Badge>

          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            {heroContent.title}
          </motion.h1>

          <motion.p
            className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            variants={itemVariants}
          >
            {heroContent.description}
          </motion.p>

          <motion.div className="flex flex-col sm:flex-row gap-8 justify-center pt-4" variants={itemVariants}>
            {[
              { label: '24/7 Service', value: 'Always Available' },
              { label: 'Digital First', value: 'Mobile App' },
              { label: 'Scalable', value: '1 to 100 Locations' },
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {stat.label}
                </p>
                <p className="text-gray-600 dark:text-gray-400">{stat.value}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

    </section>
  );
};
