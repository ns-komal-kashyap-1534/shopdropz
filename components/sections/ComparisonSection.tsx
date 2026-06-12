'use client';

import { motion } from 'framer-motion';
import { comparison, whyShopDropz } from '@/lib/content';
import { Card, Badge } from '@/components/ui/Card';
import { Check, X } from 'lucide-react';

export const ComparisonSection = () => {
  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.05, duration: 0.4 },
    }),
  };

  return (
    <section id="comparison" className="relative scroll-mt-24 py-20 sm:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="default">Comparison</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            ShopDropz vs. Traditional Methods
          </h2>
        </motion.div>

        <div className="overflow-x-auto">
          <div className="inline-block w-full min-w-max">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="text-left px-4 py-4 font-bold text-gray-900 dark:text-white">
                    Feature
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-gray-900 dark:text-white">
                    Traditional Methods
                  </th>
                  <th className="text-center px-4 py-4 font-bold text-blue-600 dark:text-blue-400">
                    ShopDropz Platform
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((item, i) => (
                  <motion.tr
                    key={i}
                    custom={i}
                    variants={rowVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800/50"
                  >
                    <td className="px-4 py-4 font-semibold text-gray-900 dark:text-white">
                      {item.name}
                    </td>
                    <td className="text-center px-4 py-4">
                      {item.traditional ? (
                        <Check className="w-5 h-5 text-green-600 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-600 mx-auto" />
                      )}
                    </td>
                    <td className="text-center px-4 py-4">
                      <motion.div
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      >
                        {item.shopDropz ? (
                          <Check className="w-5 h-5 text-green-600 mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-red-600 mx-auto" />
                        )}
                      </motion.div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export const WhyShopDropzSection = () => {
  return (
    <section className="relative py-20 sm:py-32 bg-gray-900 dark:bg-black overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ y: [0, 50, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-0 w-96 h-96 bg-lime-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 50, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary">Why ShopDropz</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-white">
            The Reasons Shops Choose ShopDropz
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {whyShopDropz.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-gray-800 dark:bg-gray-800 border-gray-700 dark:border-gray-700 h-full">
                <div className="flex items-start gap-4">
                  <motion.div
                    className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-lime-400 flex items-center justify-center text-white"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {i === 0 && <span className="text-xl">👥</span>}
                    {i === 1 && <span className="text-xl">⚡</span>}
                    {i === 2 && <span className="text-xl">📈</span>}
                    {i === 3 && <span className="text-xl">🚀</span>}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="font-bold text-black mb-2">{reason.title}</h3>
                    <p className="text-sm text-gray-400">{reason.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
