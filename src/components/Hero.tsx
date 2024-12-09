import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className="relative min-h-[80vh] flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative inline-block"
          >
            <Shield className="w-24 h-24 mx-auto text-indigo-600 dark:text-indigo-400 transform -rotate-12" />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              Hash Explorer
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Discover the power of cryptographic hashing algorithms in securing digital information
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group p-6 bg-white dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-gray-200 dark:border-gray-700/50"
              >
                <div className="relative z-10">
                  <feature.icon className="w-10 h-10 text-indigo-600 dark:text-indigo-400 mb-4 transform group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const features = [
  {
    title: 'Data Integrity',
    description: 'Ensure your data remains unchanged with cryptographic proof',
    icon: Shield,
  },
  {
    title: 'One-Way Function',
    description: 'Irreversible transformation that prevents data reconstruction',
    icon: Shield,
  },
  {
    title: 'Avalanche Effect',
    description: 'Small input changes create significantly different outputs',
    icon: Shield,
  },
];

export default Hero;