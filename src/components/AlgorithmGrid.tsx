import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const algorithms = [
  {
    id: 'md5',
    name: 'MD5',
    description: 'Message Digest Algorithm 5',
    status: 'deprecated',
    icon: ShieldAlert,
  },
  {
    id: 'sha224',
    name: 'SHA-224',
    description: 'Secure Hash Algorithm 2 (224-bit)',
    status: 'recommended',
    icon: ShieldCheck,
  },
  {
    id: 'sha256',
    name: 'SHA-256',
    description: 'Secure Hash Algorithm 2 (256-bit)',
    status: 'recommended',
    icon: ShieldCheck,
  },
  {
    id: 'sha384',
    name: 'SHA-384',
    description: 'Secure Hash Algorithm 2 (384-bit)',
    status: 'recommended',
    icon: ShieldCheck,
  },
  {
    id: 'sha512',
    name: 'SHA-512',
    description: 'Secure Hash Algorithm 2 (512-bit)',
    status: 'recommended',
    icon: ShieldCheck,
  },
  {
    id: 'sha3-224',
    name: 'SHA3-224',
    description: 'Secure Hash Algorithm 3 (224-bit)',
    status: 'recommended',
    icon: Shield,
  },
  {
    id: 'sha3-256',
    name: 'SHA3-256',
    description: 'Secure Hash Algorithm 3 (256-bit)',
    status: 'recommended',
    icon: Shield,
  },
  {
    id: 'sha3-384',
    name: 'SHA3-384',
    description: 'Secure Hash Algorithm 3 (384-bit)',
    status: 'recommended',
    icon: Shield,
  },
  {
    id: 'sha3-512',
    name: 'SHA3-512',
    description: 'Secure Hash Algorithm 3 (512-bit)',
    status: 'recommended',
    icon: Shield,
  },
];

const AlgorithmGrid = () => {
  const navigate = useNavigate();

  return (
    <div id="algorithms" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400"
        >
          Available Algorithms
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {algorithms.map((algo, index) => (
            <motion.button
              key={algo.id}
              onClick={() => navigate(`/algorithm/${algo.id}`)}
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <div className="relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 transition-shadow duration-200 group-hover:shadow-lg">
                <div className="flex items-center space-x-4">
                  <algo.icon
                    className={`h-8 w-8 ${
                      algo.status === 'deprecated'
                        ? 'text-red-500'
                        : 'text-indigo-600 dark:text-indigo-400'
                    }`}
                  />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white transition-colors">
                      {algo.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {algo.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlgorithmGrid;