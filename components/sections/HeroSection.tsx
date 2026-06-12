'use client';

import { motion } from 'framer-motion';
import { heroContent } from '@/lib/content';
import { Button } from '@/components/ui/Button';
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
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden scroll-mt-24 bg-gradient-to-br from-blue-50 via-white to-lime-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 pt-20 pb-20 sm:pt-32 sm:pb-32">
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
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left content */}
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

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button size="lg" variant="primary">
                {heroContent.cta.primary}
              </Button>
              <Button size="lg" variant="outline">
                {heroContent.cta.secondary}
              </Button>
            </motion.div>

            <motion.div className="flex gap-8 pt-4" variants={itemVariants}>
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

          {/* Right visual */}
          <motion.div
            className="relative h-96 lg:h-full flex items-center justify-center"
            variants={itemVariants}
          >
            <motion.div
              className="relative w-full max-w-sm"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {/* Phone mockup container */}
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-blue-600 to-blue-900 p-2 shadow-2xl">
                  <div className="h-full rounded-3xl bg-gradient-to-b from-blue-50 to-white dark:from-gray-100 dark:to-gray-200 flex items-center justify-center overflow-hidden">
                    <div className="space-y-4 p-4 w-full text-center">
                      <div className="h-12 bg-blue-200 dark:bg-blue-300 rounded-lg animate-pulse" />
                      <div className="space-y-2">
                        <div className="h-8 bg-blue-100 dark:bg-blue-200 rounded-lg animate-pulse" />
                        <div className="h-8 bg-blue-100 dark:bg-blue-200 rounded-lg animate-pulse w-4/5 mx-auto" />
                      </div>
                      <div className="h-20 bg-gradient-to-r from-lime-200 to-blue-200 dark:from-lime-300 dark:to-blue-300 rounded-lg" />
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded-full animate-pulse" />
                        <div className="h-2 bg-gray-300 rounded-full animate-pulse w-5/6 mx-auto" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* Decorative vehicle element */}
                <motion.div
                  className="absolute -bottom-10 -right-10 w-40 h-20 bg-gradient-to-r from-lime-400 to-blue-400 rounded-2xl opacity-30 blur-2xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          <svg className="w-5 h-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </section>
  );
};
