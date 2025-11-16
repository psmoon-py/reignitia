import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useProfileStore } from '@/store/useProfileStore';
import type { StudentProfile, AgeBand, EducationStage, RegionType, DeviceType, BandwidthLevel, PrimaryGoal, PainPoint } from '@/types';

export const steps = [
  'Who are you?',
  'Where are you learning from?',
  'What do you have access to?',
  'What hurts the most right now?',
  'What’s your next big horizon?',
  'How much time can you honestly give?',
];

const ageBands: AgeBand[] = ['13-15', '16-18', '19-24', '25+'];
const educationStages: EducationStage[] = ['school', 'undergrad', 'postgrad', 'gap-year', 'working'];
const regionTypes: RegionType[] = ['urban', 'semi-urban', 'rural'];
const deviceTypes: DeviceType[] = ['phone-only', 'shared-computer', 'personal-laptop'];
const bandwidthLevels: BandwidthLevel[] = ['low', 'medium', 'high'];
const primaryGoals: PrimaryGoal[] = ['finish-basics', 'get-into-university', 'graduate-well', 'job-ready-skill', 'explore'];
const painPoints: PainPoint[] = ['no-money', 'overwhelmed', 'no-guidance', 'mental-health', 'no-time'];

export const OnboardingWizard: React.FC = () => {
  const [step, setStep] = useState(0);
  const [profile, setProfile] = useState<Partial<StudentProfile>>({});
  const [selectedPainPoints, setPainPoints] = useState<PainPoint[]>([]);
  const [selectedGoals, setGoals] = useState<PrimaryGoal[]>([]);

  const handleStep1 = (field: keyof StudentProfile, value: any) => setProfile((p) => ({ ...p, [field]: value }));

  const handlePainPointToggle = (pt: PainPoint) =>
    setPainPoints((prev) => prev.includes(pt) ? prev.filter(v => v !== pt) : [...prev, pt]);

  const handleGoalToggle = (g: PrimaryGoal) =>
    setGoals((prev) => prev.includes(g) ? prev.filter(v => v !== g) : [...prev, g]);

  const handleStep6 = (hours: number) => setProfile((p) => ({ ...p, hoursPerWeek: hours }));

  const { setProfile: storeSetProfile } = useProfileStore();
  const finishWizard = () => {
    const fullProfile: StudentProfile = {
      ...(profile as StudentProfile),
      painPoints: selectedPainPoints,
      primaryGoals: selectedGoals,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      id: Math.random().toString(36).slice(2),
      preferredLanguage: 'en',
    };
    storeSetProfile(fullProfile);
    setStep(step + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-space-dark">
      <Card className="w-full max-w-xl">
        <CardHeader>
          <CardTitle className="text-3xl text-white mb-1">Onboarding</CardTitle>
          <CardDescription className="text-lg text-gray-400 mb-4">{steps[step]}</CardDescription>
          <div className="w-full h-2 mb-6 bg-space-purple/20 rounded-full overflow-hidden">
            <motion.div className="bg-accent-cyan h-2 rounded-full" initial={{ width: 0 }} animate={{ width: `${((step+1)/steps.length)*100}%` }} />
          </div>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="flex flex-col gap-4 text-white">
              <div>
                <div className="mb-2 font-semibold">Choose your age band:</div>
                <div className="flex gap-2 flex-wrap">
                  {ageBands.map((band) => (
                    <Button key={band} variant="outline" size="lg" onClick={() => handleStep1('ageBand', band)}>{band}</Button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold">Education Stage:</div>
                <div className="flex gap-2 flex-wrap">
                  {educationStages.map((stage) => (
                    <Button key={stage} variant="outline" size="lg" onClick={() => handleStep1('educationStage', stage)}>{stage}</Button>
                  ))}
                </div>
              </div>
              <Button variant="primary" className="mt-6" onClick={() => setStep(step + 1)}>Next</Button>
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-col gap-4 text-white">
              <div>
                <div className="mb-2 font-semibold">Country:</div>
                <input className="border px-2 py-2 rounded bg-space-dark/70 w-full" placeholder="Country" onChange={e => handleStep1('country', e.target.value)} />
              </div>
              <div>
                <div className="mb-2 font-semibold">Region Type:</div>
                <div className="flex gap-2 flex-wrap">
                  {regionTypes.map((r) => (
                    <Button key={r} variant="outline" size="lg" onClick={() => handleStep1('regionType', r)}>{r}</Button>
                  ))}
                </div>
              </div>
              <Button variant="primary" className="mt-6" onClick={() => setStep(step + 1)}>Next</Button>
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-4 text-white">
              <div>
                <div className="mb-2 font-semibold">Device Type:</div>
                <div className="flex gap-2 flex-wrap">
                  {deviceTypes.map((d) => (
                    <Button key={d} variant="outline" size="lg" onClick={() => handleStep1('deviceType', d)}>{d}</Button>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold">Bandwidth Level:</div>
                <div className="flex gap-2 flex-wrap">
                  {bandwidthLevels.map((b) => (
                    <Button key={b} variant="outline" size="lg" onClick={() => handleStep1('bandwidthLevel', b)}>{b}</Button>
                  ))}
                </div>
              </div>
              <Button variant="primary" className="mt-6" onClick={() => setStep(step + 1)}>Next</Button>
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-4 text-white">
              <div className="mb-2 font-semibold">Select pain points (multi-select):</div>
              <div className="flex gap-2 flex-wrap">
                {painPoints.map((pt) => (
                  <Button key={pt} variant={selectedPainPoints.includes(pt)? 'primary':'outline'} size="lg" onClick={() => handlePainPointToggle(pt)}>{pt}</Button>
                ))}
              </div>
              <Button variant="primary" className="mt-6" onClick={() => setStep(step + 1)}>Next</Button>
            </div>
          )}
          {step === 4 && (
            <div className="flex flex-col gap-4 text-white">
              <div className="mb-2 font-semibold">What's your next big horizon? (multi-select goals)</div>
              <div className="flex gap-2 flex-wrap">
                {primaryGoals.map((g) => (
                  <Button key={g} variant={selectedGoals.includes(g)? 'primary':'outline'} size="lg" onClick={() => handleGoalToggle(g)}>{g}</Button>
                ))}
              </div>
              <Button variant="primary" className="mt-6" onClick={() => setStep(step + 1)}>Next</Button>
            </div>
          )}
          {step === 5 && (
            <div className="flex flex-col gap-8 text-white">
              <div className="mb-2 font-semibold">How many hours per week can you give?</div>
              <input type="range" min={1} max={30} step={1} className="w-full" value={profile.hoursPerWeek || 8} onChange={e => handleStep6(Number(e.target.value))} />
              <div className="text-sm">{profile.hoursPerWeek || 8} hours/week</div>
              <Button variant="primary" size="xl" onClick={finishWizard}>Finish & Generate My Universe</Button>
            </div>
          )}
          {step > 5 && (
            <div className="flex flex-col gap-4 text-white">
              <CardTitle className="mb-2">Profile Snapshot</CardTitle>
              <div className="text-base">
                <b>Age Band:</b> {profile.ageBand}<br />
                <b>Education Stage:</b> {profile.educationStage}<br />
                <b>Country:</b> {profile.country}<br />
                <b>Region:</b> {profile.regionType}<br />
                <b>Device:</b> {profile.deviceType}, <b>Bandwidth:</b> {profile.bandwidthLevel}<br />
                <b>Pain Points:</b> {selectedPainPoints.join(', ')}<br />
                <b>Goals:</b> {selectedGoals.join(', ')}<br />
                <b>Hours/Week:</b> {profile.hoursPerWeek || 8}
              </div>
              <Button variant="primary" className="mt-6" onClick={() => window.location.href = '/universe'}>Go to Your Universe</Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="justify-end">
          <div className="text-sm text-gray-400">Step {step+1} of {steps.length + 1}</div>
        </CardFooter>
      </Card>
    </div>
  );
};