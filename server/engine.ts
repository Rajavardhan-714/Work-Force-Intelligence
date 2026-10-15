import {
  Project,
  Employee,
  TrainingCourse,
  MatchCandidate,
  TeamCoverageInsight,
} from '../src/types';

export function computeTeamMatching(
  project: Project,
  allEmployees: Employee[],
  allCourses: TrainingCourse[],
  customMemberIds?: string[]
): {
  project: Project;
  rankedCandidates: MatchCandidate[];
  selectedMemberIds: string[];
  teamCoverageInsights: TeamCoverageInsight[];
  overallCoverageScore: number;
} {
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
    const skillScore =
      project.requiredSkills.length > 0 && totalWeight > 0
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
    project,
    rankedCandidates,
    selectedMemberIds,
    teamCoverageInsights,
    overallCoverageScore,
  };
}
