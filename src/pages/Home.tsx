import React from 'react';
import Hero from '../components/Hero';
import AlgorithmGrid from '../components/AlgorithmGrid';
import TeamSection from '../components/TeamSection';

const Home = () => {
  return (
    <div className="space-y-12">
      <Hero />
      <AlgorithmGrid />
      <TeamSection />
    </div>
  );
};

export default Home;