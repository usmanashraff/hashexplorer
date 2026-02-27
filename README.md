# 🔐 Hash Explorer

A modern, interactive web application for exploring and understanding cryptographic hashing algorithms. Visualize how different hash functions work, compare algorithms, and generate hashes in real-time.

![React](https://img.shields.io/badge/React-18.3+-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5+-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4+-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4+-06B6D4?logo=tailwindcss&logoColor=white)

## ✨ Features

- **Interactive Algorithm Explorer** - Explore 9 different cryptographic hashing algorithms
- **Real-time Hash Generation** - Generate hashes instantly as you type
- **Algorithm Comparison** - Understand the differences between MD5, SHA-2, and SHA-3 families
- **Dark/Light Theme** - Seamless theme switching with persistent preferences
- **Responsive Design** - Beautiful UI that works on desktop, tablet, and mobile devices
- **Educational Content** - Detailed information about each algorithm's use cases and security status
- **Modern UI Animations** - Smooth transitions and engaging interactions using Framer Motion
- **Zero Dependencies Overhead** - Lightweight implementation with optimized performance

## 🎯 Available Algorithms

### SHA-2 Family (Recommended)
- **SHA-224** - Secure Hash Algorithm producing 224-bit output
- **SHA-256** - Industry standard with 256-bit output
- **SHA-384** - Extended version with 384-bit output
- **SHA-512** - Maximum security with 512-bit output

### SHA-3 Family (Latest Standard)
- **SHA3-224** - NIST's latest standard (224-bit)
- **SHA3-256** - Modern hashing algorithm (256-bit)
- **SHA3-384** - Extended version (384-bit)
- **SHA3-512** - Maximum security (512-bit)

### Legacy Algorithms
- **MD5** - ⚠️ Deprecated (included for historical reference only)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd hashexplorer

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Production Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
hashexplorer/
├── src/
│   ├── components/          # React components
│   │   ├── AlgorithmGrid.tsx    # Algorithm showcase grid
│   │   ├── Hero.tsx             # Landing hero section
│   │   ├── Navbar.tsx           # Navigation bar
│   │   ├── Footer.tsx           # Footer component
│   │   ├── TeamSection.tsx      # Team information
│   │   ├── ThemeToggle.tsx      # Dark/light mode toggle
│   │   └── 3d/                  # 3D visual components
│   │       ├── Background.tsx
│   │       ├── FloatingCube.tsx
│   │       └── Scene.tsx
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   └── AlgorithmPage.tsx # Individual algorithm detail
│   ├── hooks/               # Custom React hooks
│   │   └── useTheme.tsx     # Theme management
│   ├── utils/               # Utility functions
│   │   └── hashUtils.ts     # Hash algorithm implementations
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── package.json             # Project dependencies
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

## 🛠 Tech Stack

**Frontend Framework**
- [React 18](https://react.dev) - UI library
- [TypeScript](https://www.typescriptlang.org) - Type-safe development
- [React Router DOM](https://reactrouter.com) - Client-side routing

**Styling & Animation**
- [Tailwind CSS](https://tailwindcss.com) - Utility-first CSS framework
- [Framer Motion](https://www.framer.com/motion) - Animation library
- [Lucide React](https://lucide.dev) - Modern icon library

**Cryptography**
- [crypto-js](https://cryptojs.gitbook.io) - JavaScript cryptographic library

**Build & Development**
- [Vite](https://vitejs.dev) - Next-generation build tool
- [ESLint](https://eslint.org) - Code quality
- [PostCSS](https://postcss.org) - CSS processing
- [Autoprefixer](https://autoprefixer.github.io) - CSS vendor prefixes

## 📖 How to Use

### Generating a Hash

1. Navigate to the desired algorithm from the home page
2. Enter your text in the input field
3. The hash is generated instantly
4. Copy the hash with the one-click copy button

### Exploring Algorithms

- **Grid View** - See all available algorithms at a glance with their status
- **Detailed View** - Click on an algorithm to learn more about it and generate hashes
- **Comparisons** - Review security status and use case recommendations for each algorithm

### Theme Management

Click the theme toggle button in the navigation bar to switch between light and dark modes. Your preference is automatically saved.

## 🔒 Security Notes

- **Client-side Processing** - All hashing is done in your browser; no data is sent to servers
- **Educational Purpose** - This tool is designed for learning and demonstration
- **Algorithm Status**:
  - ✅ SHA-2, SHA-3: Recommended for production use
  - ⚠️ MD5: Deprecated - avoid for security-critical operations

## 🎓 Learning Resources

Each algorithm includes information about:
- How it works conceptually
- Output size and characteristics
- Recommended use cases
- Security considerations
- Historical context and evolution

## 🤝 Contributing

Contributions are welcome! Whether it's bug fixes, feature additions, or documentation improvements:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run lint     # Run ESLint checks
npm run preview  # Preview production build locally
```

## 📄 License

This project is open source and available under the MIT License.

## 🌟 Show Your Support

If you find Hash Explorer useful, please consider giving it a star on GitHub!

---

<div align="center">

**Explore cryptography. Understand hashing. Learn security.**

Built with ❤️ for developers and security enthusiasts

</div>
