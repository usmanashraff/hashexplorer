import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Copy, AlertTriangle } from 'lucide-react';
import { calculateHash } from '../utils/hashUtils';

const AlgorithmPage = () => {
  const { id } = useParams<{ id: string }>();
  const [input, setInput] = useState('');
  const [hash, setHash] = useState('');
  const [copied, setCopied] = useState(false);

  const isDeprecated = id === 'md5';

  const handleGenerateHash = () => {
    if (!input.trim()) return;
    const result = calculateHash(input, id || '');
    setHash(result);
  };

  const handleCopy = async () => {
    await navigator.clipboard.writeText(hash);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {isDeprecated && (
        <div className="bg-red-50 dark:bg-red-900/30 border-l-4 border-red-500 p-4 rounded-lg backdrop-blur-sm">
          <div className="flex items-center space-x-3">
            <AlertTriangle className="h-6 w-6 text-red-500" />
            <p className="text-red-700 dark:text-red-300">
              Warning: This algorithm has been broken and is not recommended for secure applications.
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
          {id?.toUpperCase()} Hash Generator
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Enter your text below to generate a {id?.toUpperCase()} hash.
        </p>
      </div>

      <div className="space-y-6">
        <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700/50">
          <label
            htmlFor="input"
            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
          >
            Input Text
          </label>
          <textarea
            id="input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full rounded-lg border border-gray-300 dark:border-gray-600 p-4 shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400 bg-white dark:bg-gray-700/50 text-gray-900 dark:text-white transition-colors duration-200"
            rows={4}
            placeholder="Enter text to hash..."
          />
        </div>

        <button
          onClick={handleGenerateHash}
          className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white rounded-lg shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-all duration-300 font-medium"
        >
          Generate Hash
        </button>

        {hash && (
          <div className="bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700/50 space-y-3">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Hash Output
            </label>
            <div className="relative">
              <div className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg font-mono text-sm break-all text-gray-900 dark:text-white">
                {hash}
              </div>
              <button
                onClick={handleCopy}
                className="absolute top-2 right-2 p-2 text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                title="Copy to clipboard"
              >
                <Copy className="h-5 w-5" />
              </button>
            </div>
            {copied && (
              <p className="text-sm text-green-600 dark:text-green-400">
                Copied to clipboard!
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AlgorithmPage;