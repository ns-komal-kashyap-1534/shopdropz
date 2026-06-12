'use client';

import { motion } from 'framer-motion';
import React from 'react';
import * as Icons from 'lucide-react';
import { customerBenefits, businessBenefits } from '@/lib/content';
import { Card, Badge } from '@/components/ui/Card';
import { Benefit } from '@/lib/types';

interface BenefitsSectionProps {
  title: string;
  subtitle: string;
  benefits: Benefit[];
  variant?: 'light' | 'dark';
}

const renderIcon = (iconName: string) => {
  const IconComponent = Icons[iconName as keyof typeof Icons] as React.ComponentType<{ size: number }>;
  if (!IconComponent) return null;
  return <IconComponent size={24} />;
};

const BenefitCard = ({ benefit, index }: { benefit: Benefit; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full">
        <div className="flex items-start gap-4">
          <motion.div
            className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-lime-400 flex items-center justify-center text-white"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {renderIcon(benefit.icon)}
          </motion.div>
          <div className="flex-1">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{benefit.description}</p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export const BenefitsSection = ({
  title,
  subtitle,
  benefits,
  variant = 'light',
}: BenefitsSectionProps) => {
  return (
    <section
      className={`relative py-12 sm:py-20 ${
        variant === 'dark'
          ? 'bg-gray-900 dark:bg-black'
          : 'bg-white dark:bg-gray-900'
      } overflow-hidden`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge variant={variant === 'dark' ? 'secondary' : 'default'}>{subtitle}</Badge>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 ${
              variant === 'dark' ? 'text-white' : 'text-gray-900 dark:text-white'
            }`}
          >
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <BenefitCard key={i} benefit={benefit} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export const CustomerBenefitsSection = () => (
  <BenefitsSection
    title="Benefits for Customers"
    subtitle="Customer Experience"
    benefits={customerBenefits}
  />
);

export const BusinessBenefitsSection = () => (
  <BenefitsSection
    title="Benefits for Automotive Businesses"
    subtitle="Business Transformation"
    benefits={businessBenefits}
    variant="dark"
  />
);
