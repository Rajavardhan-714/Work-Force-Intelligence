import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';
import {
  Employee,
  Project,
  Skill,
  TrainingCourse,
  SystemAlert,
  RebalanceSuggestion,
  MatchCandidate,
  TeamCoverageInsight,
} from '../types';
import { api } from '../api';

export type NavigationView = 'overview' | 'skills' | 'project-match' | 'workload' | 'training';

export interface ProjectMatchResult {
  project: Project;
  rankedCandidates: MatchCandidate[];
  selectedMemberIds: string[];
  teamCoverageInsights: TeamCoverageInsight[];
  overallCoverageScore: number;
}

export interface WorkforceState {
  currentView: NavigationView;
  employees: Employee[];
  projects: Project[];
  skills: Skill[];
  courses: TrainingCourse[];
  alerts: SystemAlert[];
  rebalanceSuggestions: RebalanceSuggestion[];
  selectedProjectId: string;
  projectMatchResult: ProjectMatchResult | null;
  selectedEmployeeDetail: Employee | null;
  isLoading: boolean;
  isMatchingLoading: boolean;
  error: string | null;
  skillFilter: string;
  departmentFilter: string;
  searchQuery: string;
}

export interface WorkforceActions {
  loadAllData: () => Promise<void>;
  setCurrentView: (view: NavigationView) => void;
  setSelectedProjectId: (projectId: string) => Promise<void>;
  computeProjectMatch: (projectId?: string, customMemberIds?: string[]) => Promise<void>;
  toggleProjectMember: (employeeId: string) => Promise<void>;
  swapProjectMember: (removeEmployeeId: string, addEmployeeId: string) => Promise<void>;
  handleRebalanceAction: (suggestionId: string, status: 'accepted' | 'rejected' | 'pending') => Promise<void>;
  openEmployeeDrawer: (employee: Employee) => void;
  closeEmployeeDrawer: () => void;
  setSkillFilter: (skillId: string) => void;
  setDepartmentFilter: (dept: string) => void;
  setSearchQuery: (query: string) => void;
  createProject: (newProject: Omit<Project, 'id' | 'currentMemberIds'>) => Promise<void>;
  resetToScenarioSeed: () => Promise<void>;
}

export type WorkforceStore = WorkforceState & WorkforceActions;

export const useWorkforceStore = create<WorkforceStore>()(
  subscribeWithSelector((set, get) => ({
    // Initial State
    currentView: 'project-match', // Start on hero Scenario A for Hackathon judging
    employees: [],
    projects: [],
    skills: [],
    courses: [],
    alerts: [],
    rebalanceSuggestions: [],
    selectedProjectId: 'prj-analytics', // Scenario A hero project
    projectMatchResult: null,
    selectedEmployeeDetail: null,
    isLoading: true,
    isMatchingLoading: false,
    error: null,
    skillFilter: 'all',
    departmentFilter: 'all',
    searchQuery: '',

    // Actions
    loadAllData: async () => {
      set({ isLoading: true, error: null });
      try {
        const [employees, projects, skills, courses, alerts, rebalanceSuggestions] = await Promise.all([
          api.getEmployees(),
          api.getProjects(),
          api.getSkills(),
          api.getCourses(),
          api.getAlerts(),
          api.getRebalanceSuggestions(),
        ]);

        const selectedProjectId = get().selectedProjectId || projects[0]?.id || 'prj-analytics';
        set({
          employees,
          projects,
          skills,
          courses,
          alerts,
          rebalanceSuggestions,
          selectedProjectId,
          isLoading: false,
        });

        // Compute match for the selected project
        await get().computeProjectMatch(selectedProjectId);
      } catch (err: any) {
        set({ error: err.message || 'Failed to load workforce intelligence data', isLoading: false });
      }
    },

    setCurrentView: (view) => set({ currentView: view }),

    setSelectedProjectId: async (projectId) => {
      set({ selectedProjectId: projectId });
      await get().computeProjectMatch(projectId);
    },

    computeProjectMatch: async (projectIdOverride, customMemberIds) => {
      const pid = projectIdOverride || get().selectedProjectId;
      if (!pid) return;

      set({ isMatchingLoading: true, error: null });
      try {
        const matchResult = await api.computeProjectMatch(pid, customMemberIds);
        set({
          projectMatchResult: matchResult,
          isMatchingLoading: false,
        });
      } catch (err: any) {
        set({ error: err.message, isMatchingLoading: false });
      }
    },

    toggleProjectMember: async (employeeId) => {
      const currentResult = get().projectMatchResult;
      if (!currentResult) return;

      let newSelectedIds = [...currentResult.selectedMemberIds];
      if (newSelectedIds.includes(employeeId)) {
        newSelectedIds = newSelectedIds.filter((id) => id !== employeeId);
      } else {
        newSelectedIds.push(employeeId);
      }

      await get().computeProjectMatch(currentResult.project.id, newSelectedIds);
    },

    swapProjectMember: async (removeEmployeeId, addEmployeeId) => {
      const currentResult = get().projectMatchResult;
      if (!currentResult) return;

      const newSelectedIds = currentResult.selectedMemberIds
        .filter((id) => id !== removeEmployeeId)
        .concat(addEmployeeId);

      await get().computeProjectMatch(currentResult.project.id, newSelectedIds);
    },

    handleRebalanceAction: async (suggestionId, status) => {
      try {
        const { suggestion, employees } = await api.setRebalanceStatus(suggestionId, status);
        const updatedSuggestions = get().rebalanceSuggestions.map((s) => (s.id === suggestionId ? suggestion : s));
        set({
          rebalanceSuggestions: updatedSuggestions,
          employees,
        });
      } catch (err: any) {
        set({ error: err.message });
      }
    },

    openEmployeeDrawer: (employee) => set({ selectedEmployeeDetail: employee }),
    closeEmployeeDrawer: () => set({ selectedEmployeeDetail: null }),

    setSkillFilter: (skillId) => set({ skillFilter: skillId }),
    setDepartmentFilter: (dept) => set({ departmentFilter: dept }),
    setSearchQuery: (query) => set({ searchQuery: query }),

    createProject: async (newProjectData) => {
      set({ isLoading: true });
      try {
        const created = await api.createProject(newProjectData);
        const projects = await api.getProjects();
        set({ projects, selectedProjectId: created.id, isLoading: false });
        await get().computeProjectMatch(created.id);
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },

    resetToScenarioSeed: async () => {
      set({ isLoading: true });
      try {
        await api.resetToSeed();
        await get().loadAllData();
      } catch (err: any) {
        set({ error: err.message, isLoading: false });
      }
    },
  }))
);
