export type SkillProficiency = 1 | 2 | 3 | 4 | 5;

export interface Skill {
  id: string;
  name: string;
  category: 'Engineering' | 'Data & AI' | 'Cloud & Ops' | 'Product & Strategy';
  description: string;
}

export interface EmployeeSkill {
  skillId: string;
  skillName: string;
  proficiency: SkillProficiency; // 1 to 5
  yearsExperience: number;
}

export interface ProjectAssignment {
  projectId: string;
  projectName: string;
  role: string;
  hoursPerWeek: number;
}

export type UtilizationStatus = 'overloaded' | 'healthy' | 'underutilized';

export interface Employee {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  avatar: string;
  skills: EmployeeSkill[];
  assignments: ProjectAssignment[];
  weeklyCapacity: number; // typically 40 hrs
  totalAssignedHours: number;
  utilizationRate: number; // e.g. 1.25 for 125%
  status: UtilizationStatus;
  experienceYears: number;
  timezone: string;
}

export interface RequiredSkillRequirement {
  skillId: string;
  skillName: string;
  minProficiency: SkillProficiency;
  weight: number; // 1 to 5
}

export interface Project {
  id: string;
  name: string;
  description: string;
  clientOrDept: string;
  priority: 'Critical' | 'High' | 'Medium';
  deadline: string;
  headcountNeeded: number;
  requiredSkills: RequiredSkillRequirement[];
  currentMemberIds: string[];
}

export interface MatchCandidate {
  employee: Employee;
  matchScore: number; // 0 - 100
  breakdown: {
    skillScore: number; // 0 - 100
    experienceScore: number; // 0 - 100
    availabilityScore: number; // 0 - 100
  };
  matchingSkills: {
    skillName: string;
    proficiency: SkillProficiency;
    required: SkillProficiency;
  }[];
  missingSkills: string[];
  whyExplanation: string;
  isRecommended: boolean;
}

export interface TeamCoverageInsight {
  skillName: string;
  coverageLevel: number; // 0 to 100
  isSatisfied: boolean;
  bestProficiency: number;
  requiredProficiency: number;
  coveredByEmployeeNames: string[];
  gapSeverity?: 'Critical' | 'Moderate' | 'None';
  linkedCourseId?: string;
}

export interface RebalanceSuggestion {
  id: string;
  fromEmployeeId: string;
  fromEmployeeName: string;
  fromAvatar: string;
  fromInitialHours: number;
  toEmployeeId: string;
  toEmployeeName: string;
  toAvatar: string;
  toInitialHours: number;
  projectId: string;
  projectName: string;
  taskTitle: string;
  hours: number;
  matchedSkill: string;
  rationale: string;
  status: 'pending' | 'accepted' | 'rejected';
}

export interface TrainingCourse {
  id: string;
  title: string;
  skillId: string;
  skillName: string;
  provider: string;
  duration: string;
  level: 'Intermediate' | 'Advanced' | 'Mastery';
  rating: number;
  associatedGapReason: string;
  priority: 'Critical' | 'High' | 'Medium';
  enrolledEmployeeIds: string[];
  targetProjectId?: string;
}

export interface SystemAlert {
  id: string;
  type: 'danger' | 'warning' | 'info';
  title: string;
  description: string;
  timestamp: string;
  targetView: 'project-match' | 'workload' | 'skills' | 'training';
}
