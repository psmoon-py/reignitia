export type AgeBand = '13-15' | '16-18' | '19-24' | '25+';
export type EducationStage = 'school' | 'undergrad' | 'postgrad' | 'gap-year' | 'working';
export type RegionType = 'urban' | 'semi-urban' | 'rural';
export type DeviceType = 'phone-only' | 'shared-computer' | 'personal-laptop';
export type BandwidthLevel = 'low' | 'medium' | 'high';

export type PrimaryGoal =
  | 'finish-basics'
  | 'get-into-university'
  | 'graduate-well'
  | 'job-ready-skill'
  | 'explore';

export type PainPoint =
  | 'no-money'
  | 'overwhelmed'
  | 'no-guidance'
  | 'mental-health'
  | 'no-time';

export interface StudentProfile {
  id: string;
  createdAt: string;
  updatedAt: string;
  ageBand: AgeBand;
  educationStage: EducationStage;
  country: string;
  regionType: RegionType;
  deviceType: DeviceType;
  bandwidthLevel: BandwidthLevel;
  hoursPerWeek: number;
  primaryGoals: PrimaryGoal[];
  painPoints: PainPoint[];
  preferredLanguage: string;
}

export type RingId = 'learning' | 'money-aid' | 'food-living' | 'health' | 'opportunities' | 'curiosity';

export interface Ring {
  id: RingId;
  name: string;
  description: string;
  colorHex: string;
  icon: string;
  orderIndex: number;
}

export type GoalType = 'skill' | 'survival' | 'mental-health' | 'scholarship';
export type TimeHorizon = 'single-session' | '1-week' | '4-week' | 'ongoing';
export type StepType = 'watch' | 'read' | 'practice' | 'reflect' | 'plan' | 'apply' | 'cook' | 'budget';

export interface MissionStep {
  id: string;
  title: string;
  description: string;
  timeEstimateMinutes: number;
  resourceRefs: string[];
  type: StepType;
}

export interface Mission {
  id: string;
  ringId: RingId;
  title: string;
  shortDescription: string;
  longDescription: string;
  goalType: GoalType;
  timeEstimateMinutes: number;
  timeHorizon: TimeHorizon;
  difficulty: 1 | 2 | 3 | 4 | 5;
  prerequisites: string[];
  tags: string[];
  bandwidthProfile: BandwidthLevel;
  steps: MissionStep[];
}

export type ResourceCategory = 'education' | 'money' | 'recipes' | 'health' | 'job' | 'scholarship' | 'book' | 'misc';
export type DataIntensity = 'low' | 'medium' | 'high';

export interface Resource {
  id: string;
  title: string;
  url: string;
  category: ResourceCategory;
  sourceName: string;
  description: string;
  languages: string[];
  cost: 'free';
  dataIntensity: DataIntensity;
  regionAvailability: string;
  tags: string[];
}

export type AidType = 'scholarship' | 'grant' | 'loan' | 'work-study' | 'fee-waiver';

export interface FinancialAidResource extends Resource {
  educationLevel: EducationStage;
  aidType: AidType;
  requiresCitizenship: boolean;
  targetCountries: string[];
  deadlineCycle: 'rolling' | 'annual' | 'varies';
}

export type MissionStatus = 'not-started' | 'in-progress' | 'completed';

export interface MissionProgress {
  missionId: string;
  status: MissionStatus;
  completedSteps: string[];
  lastUpdated: string;
}

export interface DailyCheckin {
  date: string;
  mood: 1 | 2 | 3 | 4 | 5;
  hoursSlept?: number;
  stressLevel: 1 | 2 | 3 | 4 | 5;
  note?: string;
}

export interface SuggestionCard {
  id: string;
  missionId: string;
  timestamp: string;
  reason: string;
}