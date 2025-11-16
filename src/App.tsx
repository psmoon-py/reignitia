import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Landing } from '@/pages/Landing';
import { OnboardingWizard } from '@/pages/Onboarding';

// Temporary placeholder components
function Universe() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">3D Universe</h2>
      <p className="text-gray-400">Coming soon: Interactive mission control constellation</p>
    </div>
  );
}

function MissionsList() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">Missions List</h2>
      <p className="text-gray-400">Coming soon: Accessible 2D mission view</p>
    </div>
  );
}

function Resources() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">Resources Explorer</h2>
      <p className="text-gray-400">Coming soon: Searchable resource catalog</p>
    </div>
  );
}

function Opportunities() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">Opportunities</h2>
      <p className="text-gray-400">Coming soon: Scholarships, internships, competitions</p>
    </div>
  );
}

function Account() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">Account</h2>
      <p className="text-gray-400">Coming soon: Profile management and data export</p>
    </div>
  );
}

function About() {
  return (
    <div className="min-h-screen bg-space-dark flex flex-col items-center justify-center text-white">
      <h2 className="text-3xl font-bold mb-4">About ReIgnitia</h2>
      <p className="text-gray-400">Coming soon: Our story, mission, and credits</p>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout showNav={false} showFooter={false}><Landing /></Layout>} />
      <Route path="/launch" element={<Layout><OnboardingWizard /></Layout>} />
      <Route path="/universe" element={<Layout><Universe /></Layout>} />
      <Route path="/missions/list" element={<Layout><MissionsList /></Layout>} />
      <Route path="/resources" element={<Layout><Resources /></Layout>} />
      <Route path="/opportunities" element={<Layout><Opportunities /></Layout>} />
      <Route path="/account" element={<Layout><Account /></Layout>} />
      <Route path="/about" element={<Layout><About /></Layout>} />
    </Routes>
  );
}

export default App;
