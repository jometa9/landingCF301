import React from 'react';
import HeroSection from '../components/home/HeroSection';
import { WhyDifferent } from '../components/home/sections/WhyDifferent';
import ChallengeOptions from '../components/home/ChallengeOptions';
import { HowItWorks } from '../components/home/sections/HowItWorks';
import { OpenFinancesSection } from '../components/home/sections/OpenFinancesSection';
import { Testimonials } from '../components/home/sections/Testimonials';
import { FAQ } from '../components/home/sections/FAQ';
import DiscoverSection from '../components/home/DiscoverSection';

const Home = () => {
  return (
    <div className="bg-[#202020]">
      <HeroSection />
      <WhyDifferent />
      <ChallengeOptions />
      <HowItWorks />
      <OpenFinancesSection />
      <Testimonials />
      <FAQ />
      <DiscoverSection />
    </div>
  );
};

export default Home;