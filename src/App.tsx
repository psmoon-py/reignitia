import React from 'react';
import { Routes, Route } from 'react-router-dom';

function Landing() {
  return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h1 className="text-4xl font-bold mb-2">ReIgnitia</h1><p>Mission control for students, anywhere in the world.</p></div>;
}
function Onboarding() {
  return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2 className="text-2xl font-bold">Launch Your Universe</h2><p>Onboarding wizard coming soon…</p></div>;
}
function Universe() {
  return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2 className="text-2xl font-bold">3D Universe</h2><p>Main mission control will appear here.</p></div>;
}
// Add more placeholders as needed
function MissionsList() { return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2>Missions List</h2></div>; }
function Resources() { return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2>Resources Explorer</h2></div>; }
function Opportunities() { return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2>Opportunities</h2></div>; }
function Account() { return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2>Account</h2></div>; }
function About() { return <div className="min-h-screen bg-[#050816] flex flex-col items-center justify-center text-white"><h2>About</h2></div>; }

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/launch" element={<Onboarding />} />
      <Route path="/universe" element={<Universe />} />
      <Route path="/missions/list" element={<MissionsList />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/opportunities" element={<Opportunities />} />
      <Route path="/account" element={<Account />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
