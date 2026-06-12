'use client';

import { motion } from 'framer-motion';
import React from 'react';
import * as Icons from 'lucide-react';
import { targetCustomers } from '@/lib/content';
import { Card, Badge } from '@/components/ui/Card';
import { TargetCustomer } from '@/lib/types';

const renderIcon = (iconName: string) => {
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number }>;
  if (!IconComponent) return null;
  return <IconComponent size={32} />;
};

const CustomerCard = ({ customer, index }: { customer: TargetCustomer; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
    >
      <Card className="h-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-lime-400 flex items-center justify-center text-white mb-4"
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
          >
            {renderIcon(customer.icon)}
          </motion.div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
            {customer.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{customer.description}</p>
        </div>
      </Card>
    </motion.div>
  );
};

export const TargetCustomersSection = () => {
  return (
    <section id="customers" className="relative scroll-mt-24 pt-8 pb-12 sm:pt-10 sm:pb-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant="secondary">Built for You</Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 text-gray-900 dark:text-white">
            Designed for Every Automotive Service Business
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {targetCustomers.map((customer, i) => (
            <CustomerCard key={i} customer={customer} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
