import { create } from 'zustand';

interface UIStore {
  isOnboardingComplete: boolean;
  currentView: '3d' | '2d';
  selectedRing: string | null;
  selectedMission: string | null;
  setOnboardingComplete: (complete: boolean) => void;
  setCurrentView: (view: '3d' | '2d') => void;
  setSelectedRing: (ringId: string | null) => void;
  setSelectedMission: (missionId: string | null) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isOnboardingComplete: false,
  currentView: '3d',
  selectedRing: null,
  selectedMission: null,
  setOnboardingComplete: (complete) => set({ isOnboardingComplete: complete }),
  setCurrentView: (view) => set({ currentView: view }),
  setSelectedRing: (ringId) => set({ selectedRing: ringId }),
  setSelectedMission: (missionId) => set({ selectedMission: missionId }),
}));