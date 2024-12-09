import CryptoJS from 'crypto-js';

export const calculateHash = (input: string, algorithm: string): string => {
  switch (algorithm.toLowerCase()) {
    case 'md5':
      return CryptoJS.MD5(input).toString();
    case 'sha224':
      return CryptoJS.SHA224(input).toString();
    case 'sha256':
      return CryptoJS.SHA256(input).toString();
    case 'sha384':
      return CryptoJS.SHA384(input).toString();
    case 'sha512':
      return CryptoJS.SHA512(input).toString();
    case 'sha3-224':
      return CryptoJS.SHA3(input, { outputLength: 224 }).toString();
    case 'sha3-256':
      return CryptoJS.SHA3(input, { outputLength: 256 }).toString();
    case 'sha3-384':
      return CryptoJS.SHA3(input, { outputLength: 384 }).toString();
    case 'sha3-512':
      return CryptoJS.SHA3(input, { outputLength: 512 }).toString();
    default:
      throw new Error('Unsupported hash algorithm');
  }
};