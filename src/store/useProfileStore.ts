import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StudentProfile, MissionProgress, DailyCheckin } from '@/types';

interface ProfileStore {
  profile: StudentProfile | null;
  missionProgress: MissionProgress[];
  dailyCheckins: DailyCheckin[];
  setProfile: (profile: StudentProfile) => void;
  updateProfile: (updates: Partial<StudentProfile>) => void;
  addMissionProgress: (progress: MissionProgress) => void;
  updateMissionProgress: (missionId: string, updates: Partial<MissionProgress>) => void;
  addDailyCheckin: (checkin: DailyCheckin) => void;
  clearProfile: () => void;
}

export const useProfileStore = create<ProfileStore>()()
  persist(
    (set) => ({
      profile: null,
      missionProgress: [],
      dailyCheckins: [],
      setProfile: (profile) => set({ profile }),
      updateProfile: (updates) =>
        set((state) => ({
          profile: state.profile ? { ...state.profile, ...updates, updatedAt: new Date().toISOString() } : null,
        })),
      addMissionProgress: (progress) =>
        set((state) => ({
          missionProgress: [...state.missionProgress.filter((p) => p.missionId !== progress.missionId), progress],
        })),
      updateMissionProgress: (missionId, updates) =>
        set((state) => ({
          missionProgress: state.missionProgress.map((p) =>
            p.missionId === missionId ? { ...p, ...updates, lastUpdated: new Date().toISOString() } : p
          ),
        })),
      addDailyCheckin: (checkin) =>
        set((state) => ({
          dailyCheckins: [...state.dailyCheckins, checkin],
        })),
      clearProfile: () => set({ profile: null, missionProgress: [], dailyCheckins: [] }),
    }),
    {
      name: 'reignitia-profile-storage',
    }
  );
);