'use client';

import { motion } from 'framer-motion';
import { contact, siteConfig } from '@/lib/content';
import { Phone } from 'lucide-react';
import Image from 'next/image';

export const CTASection = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 py-12 sm:py-20 bg-gradient-to-b from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950 overflow-hidden">
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
  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-400 dark:text-gray-500 border-t border-gray-800 dark:border-gray-700">
      <div className="mx-auto w-full px-3 sm:px-4 lg:px-6 py-6">
        <motion.div
          className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.4 },
            },
          }}
        >
          <div className="flex items-center gap-2">
            <Image
              src="/images/image%20(1).jpg"
              alt="ShopDropz logo"
              width={36}
              height={36}
              className="h-9 w-9 rounded-xl object-cover shadow-md"
              priority
            />
            <span className="font-bold text-white text-lg">{siteConfig.name}</span>
          </div>

          <p className="text-sm">© 2026 {siteConfig.name}. All Rights Reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};
