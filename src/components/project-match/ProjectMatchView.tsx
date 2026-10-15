import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { ScoreRing } from '../ui/ScoreRing';
import { Skeleton } from '../ui/Skeleton';
import { EmptyState } from '../common/EmptyState';
import { CreateProjectModal } from './CreateProjectModal';
import { SwapMemberModal } from './SwapMemberModal';
import { MatchCandidate } from '../../types';
import {
  Users,
  Plus,
  ArrowRight,
  GraduationCap,
  Sparkles,
  ArrowLeftRight,
  AlertTriangle,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronDown,
} from 'lucide-react';

export const ProjectMatchView: React.FC = () => {
  const projects = useWorkforceStore((s) => s.projects);
  const selectedProjectId = useWorkforceStore((s) => s.selectedProjectId);
  const setSelectedProjectId = useWorkforceStore((s) => s.setSelectedProjectId);
  const projectMatchResult = useWorkforceStore((s) => s.projectMatchResult);
  const isMatchingLoading = useWorkforceStore((s) => s.isMatchingLoading);
  const swapProjectMember = useWorkforceStore((s) => s.swapProjectMember);
  const toggleProjectMember = useWorkforceStore((s) => s.toggleProjectMember);
  const openEmployeeDrawer = useWorkforceStore((s) => s.openEmployeeDrawer);
  const setCurrentView = useWorkforceStore((s) => s.setCurrentView);

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [swappingMember, setSwappingMember] = useState<MatchCandidate | null>(null);
  const [activeTab, setActiveTab] = useState<'selected' | 'all-ranked'>('selected');

  if (!projectMatchResult && isMatchingLoading) {
    return (
      <div className="p-8 space-y-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <Skeleton className="h-10 w-64" />
          <Skeleton className="h-10 w-36" />
        </div>
        <Skeleton className="h-44 w-full" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Skeleton className="h-64 w-full" />
          <Skeleton className="h-64 w-full" />
        </div>
      </div>
    );
  }

  if (!projectMatchResult) {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <EmptyState
          title="No Project Match Found"
          description="Select a project or create a new one to run autonomous workforce composition matching."
          actionLabel="Create Project"
          onAction={() => setIsCreateModalOpen(true)}
        />
      </div>
    );
  }

  const { project, rankedCandidates, selectedMemberIds, teamCoverageInsights, overallCoverageScore } =
    projectMatchResult;

  const selectedTeamMembers = rankedCandidates.filter((c) => selectedMemberIds.includes(c.employee.id));
  const unselectedCandidates = rankedCandidates.filter((c) => !selectedMemberIds.includes(c.employee.id));

  const hasCriticalGap = teamCoverageInsights.some((c) => c.gapSeverity === 'Critical' || c.gapSeverity === 'Moderate');

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header & Project Switcher */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-[var(--accent)]">
              AI Team Matching Engine
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
            <span className="text-xs text-[var(--text-secondary)]">Multi-objective constraint engine</span>
          </div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
              {project.name}
            </h1>
            <Badge variant={project.priority === 'Critical' ? 'overloaded' : 'accent'} size="sm">
              {project.priority}
            </Badge>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {/* Project Selector dropdown */}
          <div className="relative">
            <select
              value={selectedProjectId}
              onChange={(e) => setSelectedProjectId(e.target.value)}
              className="appearance-none pl-3.5 pr-8 py-2 rounded-xl bg-[var(--bg-surface-elevated)] border border-[var(--border-subtle)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--accent)] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] shadow-sm"
              aria-label="Switch project"
            >
              {projects.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name}
                </option>
              ))}
            </select>
            <ChevronDown className="w-4 h-4 text-[var(--text-tertiary)] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>

          <Button variant="primary" onClick={() => setIsCreateModalOpen(true)}>
            <Plus className="w-4 h-4 mr-1.5" />
            New Project
          </Button>
        </div>
      </div>

      {/* Project Specs Bar */}
      <div className="glass-card p-5 grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-subtle)]">
        <div className="px-3">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Target Headcount
          </span>
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-[var(--accent)]" />
            <span className="text-lg font-bold text-[var(--text-primary)] font-mono">
              {selectedTeamMembers.length} / {project.headcountNeeded}
            </span>
            <span className="text-xs text-[var(--text-tertiary)]">engineers</span>
          </div>
        </div>

        <div className="px-3 pt-3 sm:pt-0">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Target Launch
          </span>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--text-secondary)]" />
            <span className="text-sm font-semibold text-[var(--text-primary)] font-mono">
              {project.deadline}
            </span>
          </div>
        </div>

        <div className="px-3 pt-3 sm:pt-0">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Required Competencies
          </span>
          <div className="flex flex-wrap gap-1.5 mt-1">
            {project.requiredSkills.map((s) => (
              <span
                key={s.skillId}
                className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] border border-[var(--border-subtle)] font-medium"
              >
                {s.skillName} (L{s.minProficiency}, {s.weight}x)
              </span>
            ))}
          </div>
        </div>

        <div className="px-3 pt-3 sm:pt-0">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)] uppercase tracking-wider block mb-1">
            Division
          </span>
          <div className="flex items-center gap-2">
            <Layers className="w-4 h-4 text-[var(--text-secondary)]" />
            <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
              {project.clientOrDept}
            </span>
          </div>
        </div>
      </div>

      {/* Hero Team Coverage & Skill Gap Intelligence Card */}
      <motion.div
        layout
        transition={{ type: 'spring', damping: 25 }}
        className="glass-elevated p-6 rounded-2xl relative overflow-hidden"
      >
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-[var(--border-subtle)]">
          <div className="flex items-center gap-5">
            <ScoreRing
              score={overallCoverageScore}
              size={84}
              strokeWidth={7}
              label="Team Capability Coverage"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                  Team Capability Coverage: {overallCoverageScore}%
                </h2>
                {overallCoverageScore >= 80 ? (
                  <Badge variant="healthy">Optimal Alignment</Badge>
                ) : (
                  <Badge variant="warning">Skill Deficit Detected</Badge>
                )}
              </div>
              <p className="text-sm text-[var(--text-secondary)] mt-1 max-w-2xl">
                Computed by evaluating team proficiency against weighted requirements.
                {hasCriticalGap && ' Recommended training pathways and member swaps are available below.'}
              </p>
            </div>
          </div>

          {/* Quick Action: Linked Training Path if Gap Exists */}
          {hasCriticalGap && (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-3 p-3.5 rounded-xl bg-[var(--status-warning-bg)] border border-[var(--status-warning)]/30"
            >
              <div className="p-2 rounded-lg bg-[var(--status-warning)]/20 text-[var(--status-warning)]">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--status-warning)] block">
                  Skill Gap Identified
                </span>
                <span className="text-xs text-[var(--text-primary)] font-medium">
                  Upskill team in Cloud Architecture
                </span>
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentView('training')}
                className="bg-white/80 dark:bg-black/40 text-xs ml-2"
              >
                View Courses <ArrowRight className="w-3 h-3 ml-1" />
              </Button>
            </motion.div>
          )}
        </div>

        {/* Breakdown by Required Skill */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
          {teamCoverageInsights.map((ins) => (
            <div
              key={ins.skillName}
              className={`p-4 rounded-xl border transition-all ${
                ins.isSatisfied
                  ? 'bg-[var(--bg-surface-secondary)] border-[var(--border-subtle)]'
                  : 'bg-[var(--status-warning-bg)]/40 border-[var(--status-warning)]/30'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[var(--text-primary)]">
                  {ins.skillName}
                </span>
                {ins.isSatisfied ? (
                  <CheckCircle2 className="w-4 h-4 text-[var(--status-success)]" />
                ) : (
                  <AlertTriangle className="w-4 h-4 text-[var(--status-warning)]" />
                )}
              </div>

              {/* Progress Bar */}
              <div className="h-1.5 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden my-2">
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    backgroundColor: ins.isSatisfied ? 'var(--status-success)' : 'var(--status-warning)',
                  }}
                  initial={{ width: 0 }}
                  animate={{ width: `${ins.coverageLevel}%` }}
                  transition={{ type: 'spring', damping: 20 }}
                />
              </div>

              <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] mt-2">
                <span>
                  Team Max: <strong className="text-[var(--text-primary)]">L{ins.bestProficiency}</strong> / L
                  {ins.requiredProficiency}
                </span>
                <span className="font-mono font-medium">{ins.coverageLevel}%</span>
              </div>

              {/* Skill Gap Chip with direct link to training */}
              {!ins.isSatisfied && ins.linkedCourseId && (
                <button
                  onClick={() => setCurrentView('training')}
                  className="mt-2.5 w-full text-left p-1.5 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] hover:border-[var(--accent)] transition-all flex items-center justify-between group cursor-pointer"
                >
                  <span className="text-[11px] font-medium text-[var(--accent)] truncate">
                    Upskill Team Course Available
                  </span>
                  <ArrowRight className="w-3 h-3 text-[var(--accent)] group-hover:translate-x-0.5 transition-transform" />
                </button>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Team Composition Controls & Tabs */}
      <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('selected')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'selected'
                ? 'bg-[var(--accent)] text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            Recommended Roster ({selectedTeamMembers.length})
          </button>
          <button
            onClick={() => setActiveTab('all-ranked')}
            className={`px-3 py-1.5 text-sm font-semibold rounded-lg transition-all ${
              activeTab === 'all-ranked'
                ? 'bg-[var(--accent)] text-white shadow-sm'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            All Ranked Candidates ({rankedCandidates.length})
          </button>
        </div>

        <span className="text-xs text-[var(--text-tertiary)] hidden sm:inline">
          Live live recalculation active upon swapping or toggling members
        </span>
      </div>

      {/* Candidate Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <AnimatePresence mode="popLayout">
          {(activeTab === 'selected' ? selectedTeamMembers : rankedCandidates).map((cand) => {
            const isSelected = selectedMemberIds.includes(cand.employee.id);

            return (
              <motion.div
                key={cand.employee.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: 'spring', damping: 25, stiffness: 260 }}
                className={`glass-card p-5 relative flex flex-col justify-between transition-all hover:shadow-md ${
                  isSelected ? 'border-[var(--accent)]/50 ring-1 ring-[var(--accent)]/30' : ''
                }`}
              >
                {/* Header row with avatar, name, match score ring */}
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex items-center gap-3.5 cursor-pointer group"
                      onClick={() => openEmployeeDrawer(cand.employee)}
                    >
                      <img
                        src={cand.employee.avatar}
                        alt={cand.employee.name}
                        className="w-12 h-12 rounded-full object-cover border border-[var(--border-subtle)] group-hover:border-[var(--accent)] transition-all"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-base font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                            {cand.employee.name}
                          </h4>
                          <Badge
                            size="sm"
                            variant={
                              cand.employee.status === 'healthy'
                                ? 'healthy'
                                : cand.employee.status === 'overloaded'
                                ? 'overloaded'
                                : 'underutilized'
                            }
                          >
                            {cand.employee.status}
                          </Badge>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {cand.employee.role} • {cand.employee.department}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center flex-shrink-0">
                      <ScoreRing score={cand.matchScore} size={54} strokeWidth={5} />
                      <span className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase mt-0.5">
                        Fit Score
                      </span>
                    </div>
                  </div>

                  {/* Score Breakdown (Skills, Experience, Availability) */}
                  <div className="grid grid-cols-3 gap-2 mt-4 p-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs">
                    <div>
                      <span className="text-[10px] text-[var(--text-tertiary)] uppercase block">
                        Skills (55%)
                      </span>
                      <span className="font-semibold text-[var(--text-primary)] font-mono">
                        {cand.breakdown.skillScore}%
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--text-tertiary)] uppercase block">
                        Experience (25%)
                      </span>
                      <span className="font-semibold text-[var(--text-primary)] font-mono">
                        {cand.breakdown.experienceScore}%
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] text-[var(--text-tertiary)] uppercase block">
                        Availability (20%)
                      </span>
                      <span className="font-semibold text-[var(--text-primary)] font-mono">
                        {cand.breakdown.availabilityScore}%
                      </span>
                    </div>
                  </div>

                  {/* "Why this person?" AI Rationale Banner */}
                  <div className="mt-3.5 p-3 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20 text-xs">
                    <div className="flex items-center gap-1.5 font-semibold text-[var(--accent)] mb-1">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Why this person?</span>
                    </div>
                    <p className="text-[var(--text-primary)] leading-relaxed">
                      {cand.whyExplanation}
                    </p>
                  </div>

                  {/* Skills Alignment Tags */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {cand.matchingSkills.map((m) => (
                      <span
                        key={m.skillName}
                        className={`text-[11px] px-2 py-0.5 rounded-md font-medium border ${
                          m.proficiency >= m.required
                            ? 'bg-[var(--status-success-bg)] text-[var(--status-success)] border-[var(--status-success)]/20'
                            : 'bg-[var(--status-warning-bg)] text-[var(--status-warning)] border-[var(--status-warning)]/20'
                        }`}
                      >
                        {m.skillName}: L{m.proficiency} (Req: L{m.required})
                      </span>
                    ))}
                    {cand.missingSkills.map((m) => (
                      <span
                        key={m}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-[var(--bg-surface-secondary)] text-[var(--text-tertiary)] border border-[var(--border-subtle)] line-through"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Footer (Swap Member or Toggle) */}
                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <button
                    onClick={() => openEmployeeDrawer(cand.employee)}
                    className="text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                  >
                    View Full Profile & Projects →
                  </button>

                  <div className="flex items-center gap-2">
                    {isSelected ? (
                      <>
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => setSwappingMember(cand)}
                          className="hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                          <ArrowLeftRight className="w-3.5 h-3.5 mr-1" />
                          Swap Member
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleProjectMember(cand.employee.id)}
                          className="text-[var(--status-danger)] hover:bg-[var(--status-danger-bg)] text-xs"
                        >
                          Remove
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        onClick={() => toggleProjectMember(cand.employee.id)}
                      >
                        <Plus className="w-3.5 h-3.5 mr-1" />
                        Add to Team
                      </Button>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Modals */}
      <CreateProjectModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
      />

      <SwapMemberModal
        isOpen={!!swappingMember}
        onClose={() => setSwappingMember(null)}
        currentMember={swappingMember}
        availableCandidates={unselectedCandidates}
        onSwap={swapProjectMember}
      />
    </div>
  );
};
