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
import { isFirebaseConfigured } from '../lib/firebase';
import { firebaseService } from './firebaseService';

/**
 * Unified Workforce Repository
 * Seamlessly interfaces with Firestore when credentials are provided in .env.local,
 * or gracefully falls back to the local in-memory dataset when keys are pending.
 */
class WorkforceRepository {
  private employees: Employee[] = JSON.parse(JSON.stringify(INITIAL_EMPLOYEES));
  private projects: Project[] = JSON.parse(JSON.stringify(INITIAL_PROJECTS));
  private skills: Skill[] = JSON.parse(JSON.stringify(INITIAL_SKILLS));
  private courses: TrainingCourse[] = JSON.parse(JSON.stringify(INITIAL_COURSES));
  private rebalanceSuggestions: RebalanceSuggestion[] = JSON.parse(JSON.stringify(INITIAL_REBALANCE_SUGGESTIONS));
  private alerts: SystemAlert[] = JSON.parse(JSON.stringify(INITIAL_ALERTS));

  private async delay(ms = 80): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  get isFirebaseActive(): boolean {
    return isFirebaseConfigured();
  }

  // --- SEED FIRESTORE ---
  async seedFirebase(): Promise<{ success: boolean; count: number }> {
    if (!this.isFirebaseActive) {
      throw new Error('Firebase is not configured. Add credentials in .env.local first.');
    }
    const result = await firebaseService.seedFirestore();
    // Reload local cache from Firestore
    await this.getEmployees();
    await this.getProjects();
    return result;
  }

  // --- EMPLOYEES ---
  async getEmployees(): Promise<Employee[]> {
    if (this.isFirebaseActive) {
      try {
        const firestoreEmps = await firebaseService.getEmployees();
        if (firestoreEmps.length > 0) {
          this.employees = firestoreEmps;
          return firestoreEmps;
        }
      } catch (err) {
        console.warn('[Firebase] Error loading employees, using fallback:', err);
      }
    }
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
    if (this.isFirebaseActive) {
      try {
        const firestoreProjs = await firebaseService.getProjects();
        if (firestoreProjs.length > 0) {
          this.projects = firestoreProjs;
          return firestoreProjs;
        }
      } catch (err) {
        console.warn('[Firebase] Error loading projects, using fallback:', err);
      }
    }
    await this.delay();
    return JSON.parse(JSON.stringify(this.projects));
  }

  async getProjectById(id: string): Promise<Project | null> {
    const list = await this.getProjects();
    const found = list.find((p) => p.id === id);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  async createProject(newProject: Omit<Project, 'id' | 'currentMemberIds'>): Promise<Project> {
    const project: Project = {
      ...newProject,
      id: `proj-${Date.now().toString(36)}`,
      currentMemberIds: [],
    };

    if (this.isFirebaseActive) {
      try {
        await firebaseService.createProject(project);
      } catch (err) {
        console.warn('[Firebase] Error writing project to Firestore:', err);
      }
    }

    this.projects.push(project);
    return project;
  }

  async updateProjectMembers(projectId: string, currentMemberIds: string[]): Promise<Project> {
    const idx = this.projects.findIndex((p) => p.id === projectId);
    if (idx !== -1) {
      this.projects[idx].currentMemberIds = currentMemberIds;
    }

    if (this.isFirebaseActive) {
      try {
        await firebaseService.updateProjectMembers(projectId, currentMemberIds);
      } catch (err) {
        console.warn('[Firebase] Error updating project members:', err);
      }
    }

    const updated = this.projects.find((p) => p.id === projectId);
    if (!updated) throw new Error('Project not found');
    return JSON.parse(JSON.stringify(updated));
  }

  // --- SKILLS ---
  async getSkills(): Promise<Skill[]> {
    if (this.isFirebaseActive) {
      try {
        const firestoreSkills = await firebaseService.getSkills();
        if (firestoreSkills.length > 0) {
          this.skills = firestoreSkills;
          return firestoreSkills;
        }
      } catch (err) {
        console.warn('[Firebase] Error loading skills:', err);
      }
    }
    await this.delay();
    return JSON.parse(JSON.stringify(this.skills));
  }

  // --- COURSES ---
  async getCourses(): Promise<TrainingCourse[]> {
    if (this.isFirebaseActive) {
      try {
        const firestoreCourses = await firebaseService.getCourses();
        if (firestoreCourses.length > 0) {
          this.courses = firestoreCourses;
          return firestoreCourses;
        }
      } catch (err) {
        console.warn('[Firebase] Error loading courses:', err);
      }
    }
    await this.delay();
    return JSON.parse(JSON.stringify(this.courses));
  }

  // --- ALERTS ---
  async getAlerts(): Promise<SystemAlert[]> {
    if (this.isFirebaseActive) {
      try {
        const firestoreAlerts = await firebaseService.getAlerts();
        if (firestoreAlerts.length > 0) {
          this.alerts = firestoreAlerts;
          return firestoreAlerts;
        }
      } catch (err) {
        console.warn('[Firebase] Error loading alerts:', err);
      }
    }
    await this.delay();
    return JSON.parse(JSON.stringify(this.alerts));
  }

  // --- REBALANCE SUGGESTIONS ---
  async getRebalanceSuggestions(): Promise<RebalanceSuggestion[]> {
    if (this.isFirebaseActive) {
      try {
        const firestoreSugs = await firebaseService.getRebalanceSuggestions();
        if (firestoreSugs.length > 0) {
          this.rebalanceSuggestions = firestoreSugs;
          return firestoreSugs;
        }
      } catch (err) {
        console.warn('[Firebase] Error loading rebalance suggestions:', err);
      }
    }
    await this.delay();
    return JSON.parse(JSON.stringify(this.rebalanceSuggestions));
  }

  async updateRebalanceStatus(
    suggestionId: string,
    status: 'accepted' | 'rejected' | 'pending'
  ): Promise<RebalanceSuggestion> {
    const idx = this.rebalanceSuggestions.findIndex((s) => s.id === suggestionId);
    if (idx !== -1) {
      this.rebalanceSuggestions[idx].status = status;
      // Invert or modify employee workload hours in local cache
      const sug = this.rebalanceSuggestions[idx];
      if (status === 'accepted') {
        const fromEmp = this.employees.find((e) => e.id === sug.fromEmployeeId);
        const toEmp = this.employees.find((e) => e.id === sug.toEmployeeId);
        if (fromEmp) {
          fromEmp.currentHours = Math.max(0, fromEmp.currentHours - sug.hoursToTransfer);
          if (fromEmp.currentHours <= fromEmp.targetHours) {
            fromEmp.status = 'healthy';
          }
        }
        if (toEmp) {
          toEmp.currentHours += sug.hoursToTransfer;
          if (toEmp.currentHours >= toEmp.targetHours * 0.5) {
            toEmp.status = 'healthy';
          }
        }
      }
    }

    if (this.isFirebaseActive) {
      try {
        await firebaseService.updateRebalanceStatus(suggestionId, status);
      } catch (err) {
        console.warn('[Firebase] Error updating rebalance status in Firestore:', err);
      }
    }

    const updated = this.rebalanceSuggestions.find((s) => s.id === suggestionId);
    if (!updated) throw new Error('Suggestion not found');
    return JSON.parse(JSON.stringify(updated));
  }

  // --- AI CANDIDATE MATCHING & TEAM COMPOSITION ENGINE ---
  async computeTeamMatching(projectId: string, customMemberIds?: string[]): Promise<{
    project: Project;
    rankedCandidates: MatchCandidate[];
    selectedMemberIds: string[];
    teamCoverageInsights: TeamCoverageInsight[];
    overallCoverageScore: number;
  }> {
    await this.delay(60);

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
    await this.delay(50);
    this.employees = JSON.parse(JSON.stringify(INITIAL_EMPLOYEES));
    this.projects = JSON.parse(JSON.stringify(INITIAL_PROJECTS));
    this.rebalanceSuggestions = JSON.parse(JSON.stringify(INITIAL_REBALANCE_SUGGESTIONS));
  }
}

export const api = new WorkforceRepository();
