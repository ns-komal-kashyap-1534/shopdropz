'use client';

import { motion } from 'framer-motion';
import { contact, siteConfig } from '@/lib/content';
import { Button } from '@/components/ui/Button';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export const CTASection = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 py-20 sm:py-32 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 -right-20 w-96 h-96 bg-lime-400 rounded-full mix-blend-screen filter blur-3xl opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Modernize Your Automotive Service Business?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Join the next generation of automotive service providers delivering 24/7 convenience
            and exceptional customer experiences.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Button size="lg" variant="secondary">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className='bg-white'>
              Schedule a Demo
            </Button>
          </motion.div>

          {/* Contact info */}
          <motion.div
            className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center sm:text-left">
                <p className="text-white font-semibold text-lg">{contact.name}</p>
                <p className="text-blue-100">{contact.role}</p>
              </div>
              <div className="h-12 w-px bg-white/20 hidden sm:block" />
              <motion.a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-2 text-white hover:text-lime-400 transition-colors"
                whileHover={{ scale: 1.05 }}
              >
                <Phone size={20} />
                <span className="font-semibold">{contact.phone}</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 border-t border-gray-800 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl py-12 sm:py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/images/image.jpg"
                alt="ShopDropz logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-xl object-cover shadow-md"
                priority
                />
              <span className="font-bold text-white text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-sm">{siteConfig.description}</p>
          </motion.div>

          {/* Product */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="hover:text-white transition-colors">
                  Careers
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Connect */}
          <motion.div variants={itemVariants}>
            <h3 className="font-semibold text-white mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <motion.a
                href="https://linkedin.com/company/shopdropz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-lime-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://twitter.com/shopdropz"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="hover:text-lime-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7a10.6 10.6 0 01-9 5" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="border-t border-gray-800 dark:border-gray-700 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ originX: 0 }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm">
            <p>© 2026 {siteConfig.name}. All Rights Reserved.</p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#privacy" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#cookies" className="hover:text-white transition-colors">
                Cookie Settings
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
