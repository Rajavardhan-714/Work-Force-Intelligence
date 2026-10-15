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
import {
  INITIAL_EMPLOYEES,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_COURSES,
  INITIAL_REBALANCE_SUGGESTIONS,
  INITIAL_ALERTS,
} from './mockData';

/**
 * Unified In-Memory Workforce Intelligence Repository
 * Provides fast, reactive, deterministic data access and AI recommendation matching.
 */
class WorkforceRepository {
  private employees: Employee[] = JSON.parse(JSON.stringify(INITIAL_EMPLOYEES));
  private projects: Project[] = JSON.parse(JSON.stringify(INITIAL_PROJECTS));
  private skills: Skill[] = JSON.parse(JSON.stringify(INITIAL_SKILLS));
  private courses: TrainingCourse[] = JSON.parse(JSON.stringify(INITIAL_COURSES));
  private rebalanceSuggestions: RebalanceSuggestion[] = JSON.parse(JSON.stringify(INITIAL_REBALANCE_SUGGESTIONS));
  private alerts: SystemAlert[] = JSON.parse(JSON.stringify(INITIAL_ALERTS));

  private async delay(ms = 40): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  // --- EMPLOYEES ---
  async getEmployees(): Promise<Employee[]> {
    await this.delay();
    return JSON.parse(JSON.stringify(this.employees));
  }

  async getEmployeeById(id: string): Promise<Employee | null> {
    const list = await this.getEmployees();
    const found = list.find((e) => e.id === id);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  // --- PROJECTS ---
  async getProjects(): Promise<Project[]> {
    await this.delay();
    return JSON.parse(JSON.stringify(this.projects));
  }

  async getProjectById(id: string): Promise<Project | null> {
    const list = await this.getProjects();
    const found = list.find((p) => p.id === id);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  async createProject(newProject: Omit<Project, 'id' | 'currentMemberIds'>): Promise<Project> {
    await this.delay();
    const project: Project = {
      ...newProject,
      id: `proj-${Date.now().toString(36)}`,
      currentMemberIds: [],
    };
    this.projects.push(project);
    return JSON.parse(JSON.stringify(project));
  }

  async updateProjectMembers(projectId: string, currentMemberIds: string[]): Promise<Project> {
    await this.delay();
    const idx = this.projects.findIndex((p) => p.id === projectId);
    if (idx !== -1) {
      this.projects[idx].currentMemberIds = currentMemberIds;
    }
    const updated = this.projects.find((p) => p.id === projectId);
    if (!updated) throw new Error('Project not found');
    return JSON.parse(JSON.stringify(updated));
  }

  // --- SKILLS ---
  async getSkills(): Promise<Skill[]> {
    await this.delay();
    return JSON.parse(JSON.stringify(this.skills));
  }

  // --- COURSES ---
  async getCourses(): Promise<TrainingCourse[]> {
    await this.delay();
    return JSON.parse(JSON.stringify(this.courses));
  }

  // --- ALERTS ---
  async getAlerts(): Promise<SystemAlert[]> {
    await this.delay();
    return JSON.parse(JSON.stringify(this.alerts));
  }

  // --- REBALANCE SUGGESTIONS ---
  async getRebalanceSuggestions(): Promise<RebalanceSuggestion[]> {
    await this.delay();
    return JSON.parse(JSON.stringify(this.rebalanceSuggestions));
  }

  async setRebalanceStatus(
    suggestionId: string,
    status: 'accepted' | 'rejected' | 'pending'
  ): Promise<{ suggestion: RebalanceSuggestion; employees: Employee[] }> {
    await this.delay();
    const idx = this.rebalanceSuggestions.findIndex((s) => s.id === suggestionId);
    if (idx === -1) throw new Error('Suggestion not found');

    this.rebalanceSuggestions[idx].status = status;
    const sug = this.rebalanceSuggestions[idx];

    if (status === 'accepted') {
      const fromEmp = this.employees.find((e) => e.id === sug.fromEmployeeId);
      const toEmp = this.employees.find((e) => e.id === sug.toEmployeeId);

      if (fromEmp) {
        fromEmp.totalAssignedHours = Math.max(0, fromEmp.totalAssignedHours - sug.hoursToTransfer);
        fromEmp.utilizationRate = parseFloat((fromEmp.totalAssignedHours / fromEmp.weeklyCapacity).toFixed(2));
        fromEmp.status = fromEmp.utilizationRate > 1.0 ? 'overloaded' : fromEmp.utilizationRate < 0.6 ? 'underutilized' : 'healthy';
      }

      if (toEmp) {
        toEmp.totalAssignedHours += sug.hoursToTransfer;
        toEmp.utilizationRate = parseFloat((toEmp.totalAssignedHours / toEmp.weeklyCapacity).toFixed(2));
        toEmp.status = toEmp.utilizationRate > 1.0 ? 'overloaded' : toEmp.utilizationRate < 0.6 ? 'underutilized' : 'healthy';
      }
    }

    return {
      suggestion: JSON.parse(JSON.stringify(this.rebalanceSuggestions[idx])),
      employees: JSON.parse(JSON.stringify(this.employees)),
    };
  }

  async updateRebalanceStatus(
    suggestionId: string,
    status: 'accepted' | 'rejected' | 'pending'
  ): Promise<RebalanceSuggestion> {
    const res = await this.setRebalanceStatus(suggestionId, status);
    return res.suggestion;
  }

  // --- AI CANDIDATE MATCHING & TEAM COMPOSITION ENGINE ---
  async computeTeamMatching(projectId: string, customMemberIds?: string[]): Promise<{
    project: Project;
    rankedCandidates: MatchCandidate[];
    selectedMemberIds: string[];
    teamCoverageInsights: TeamCoverageInsight[];
    overallCoverageScore: number;
  }> {
    await this.delay(40);

    const project = await this.getProjectById(projectId);
    if (!project) throw new Error(`Project ${projectId} not found`);

    const allEmployees = await this.getEmployees();
    const allCourses = await this.getCourses();

    const selectedMemberIds = customMemberIds || [...project.currentMemberIds];

    const rankedCandidates: MatchCandidate[] = allEmployees.map((emp) => {
      let matchedSkillCount = 0;
      let totalSkillPoints = 0;
      const matchingSkills: MatchCandidate['matchingSkills'] = [];
      const missingSkills: string[] = [];

      project.requiredSkills.forEach((req) => {
        const empSkill = (emp.skills || []).find((s) => {
          if (s.skillId && req.skillId && s.skillId === req.skillId) return true;
          if (s.skillName && req.skillName && s.skillName.toLowerCase() === req.skillName.toLowerCase()) return true;
          return false;
        });

        if (empSkill) {
          matchedSkillCount++;
          const scoreDelta = Math.min(100, Math.round((empSkill.proficiency / req.minProficiency) * 100));
          totalSkillPoints += scoreDelta * (req.weight / 10);

          matchingSkills.push({
            skillName: req.skillName,
            proficiency: empSkill.proficiency,
            required: req.minProficiency,
          });
        } else {
          missingSkills.push(req.skillName);
        }
      });

      const totalWeight = project.requiredSkills.reduce((acc, r) => acc + r.weight / 10, 0);
      const skillScore = project.requiredSkills.length > 0 && totalWeight > 0
        ? Math.min(100, Math.round(totalSkillPoints / totalWeight))
        : 50;

      const capacity = emp.weeklyCapacity || 40;
      const assigned = emp.totalAssignedHours || 0;
      const availableHours = Math.max(0, capacity - assigned);
      const availabilityScore = Math.min(100, Math.round((availableHours / capacity) * 100));

      const experienceScore = Math.min(100, (emp.experienceYears || 2) * 12);

      const matchScore = Math.round(
        skillScore * 0.55 + experienceScore * 0.25 + availabilityScore * 0.20
      );

      const explanationParts: string[] = [];
      if (matchedSkillCount === project.requiredSkills.length && project.requiredSkills.length > 0) {
        explanationParts.push(`100% skill match across all ${matchedSkillCount} required competencies`);
      } else if (matchedSkillCount > 0) {
        explanationParts.push(`Matches ${matchedSkillCount}/${project.requiredSkills.length} required competencies`);
      } else {
        explanationParts.push('Adjacent profile without direct competency overlap');
      }

      if (emp.status === 'underutilized') {
        explanationParts.push('high availability with latent capacity');
      } else if (emp.status === 'healthy') {
        explanationParts.push('balanced workload with available capacity');
      } else {
        explanationParts.push('currently at peak workload capacity');
      }

      const whyExplanation = explanationParts.join(', ') + '.';
      const isRecommended = matchScore >= 70 && emp.status !== 'overloaded';

      return {
        employee: emp,
        matchScore,
        breakdown: {
          skillScore,
          experienceScore,
          availabilityScore,
        },
        matchingSkills,
        missingSkills,
        whyExplanation,
        isRecommended,
      };
    });

    rankedCandidates.sort((a, b) => b.matchScore - a.matchScore);

    const activeTeamMembers = allEmployees.filter((e) => selectedMemberIds.includes(e.id));

    let totalTeamScore = 0;
    let totalReqWeight = 0;

    const teamCoverageInsights: TeamCoverageInsight[] = project.requiredSkills.map((req) => {
      totalReqWeight += req.weight;

      const coveredBy: string[] = [];
      let bestProf = 0;

      activeTeamMembers.forEach((member) => {
        const foundSkill = (member.skills || []).find((s) => {
          if (s.skillId && req.skillId && s.skillId === req.skillId) return true;
          if (s.skillName && req.skillName && s.skillName.toLowerCase() === req.skillName.toLowerCase()) return true;
          return false;
        });

        if (foundSkill) {
          coveredBy.push(member.name);
          if (foundSkill.proficiency > bestProf) {
            bestProf = foundSkill.proficiency;
          }
        }
      });

      const coverageLevel = Math.min(100, Math.round((bestProf / req.minProficiency) * 100));
      totalTeamScore += coverageLevel * req.weight;

      const isSatisfied = bestProf >= req.minProficiency;
      let gapSeverity: TeamCoverageInsight['gapSeverity'] = 'None';
      if (!isSatisfied) {
        gapSeverity = bestProf === 0 ? 'Critical' : 'Moderate';
      }

      const matchingCourse = allCourses.find((c) => c.targetProjectId === project.id);

      return {
        skillName: req.skillName,
        coverageLevel,
        isSatisfied,
        bestProficiency: bestProf,
        requiredProficiency: req.minProficiency,
        coveredByEmployeeNames: coveredBy,
        gapSeverity,
        linkedCourseId: matchingCourse ? matchingCourse.id : undefined,
      };
    });

    const overallCoverageScore = totalReqWeight > 0 ? Math.round(totalTeamScore / totalReqWeight) : 0;

    return {
      project: JSON.parse(JSON.stringify(project)),
      rankedCandidates,
      selectedMemberIds,
      teamCoverageInsights,
      overallCoverageScore,
    };
  }

  async computeProjectMatch(projectId: string, customMemberIds?: string[]) {
    return this.computeTeamMatching(projectId, customMemberIds);
  }

  // Reset to initial baseline state (great for demo testing)
  async resetToSeed(): Promise<void> {
    await this.delay(30);
    this.employees = JSON.parse(JSON.stringify(INITIAL_EMPLOYEES));
    this.projects = JSON.parse(JSON.stringify(INITIAL_PROJECTS));
    this.rebalanceSuggestions = JSON.parse(JSON.stringify(INITIAL_REBALANCE_SUGGESTIONS));
  }
}

export const api = new WorkforceRepository();
