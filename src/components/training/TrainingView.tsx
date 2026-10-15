import React, { useState } from 'react';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import {
  GraduationCap,
  Star,
  Clock,
  Layers,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  BookOpen,
} from 'lucide-react';

export const TrainingView: React.FC = () => {
  const courses = useWorkforceStore((s) => s.courses);
  const projects = useWorkforceStore((s) => s.projects);
  const employees = useWorkforceStore((s) => s.employees);
  const openEmployeeDrawer = useWorkforceStore((s) => s.openEmployeeDrawer);

  const [grouping, setGrouping] = useState<'project' | 'priority' | 'all'>('project');
  const [enrolledCourseMap, setEnrolledCourseMap] = useState<Record<string, string[]>>({});

  const toggleEnrollment = (courseId: string, employeeId: string) => {
    setEnrolledCourseMap((prev) => {
      const current = prev[courseId] || [];
      const updated = current.includes(employeeId)
        ? current.filter((id) => id !== employeeId)
        : [...current, employeeId];
      return { ...prev, [courseId]: updated };
    });
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--status-warning)]">
              Upskilling Intelligence
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
            <span className="text-xs text-[var(--text-secondary)]">Skill gap mitigation & targeted curricula</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Recommended Training & Skill Pathways
          </h1>
        </div>

        {/* Grouping switcher */}
        <div className="flex items-center gap-2 p-1 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)]">
          <button
            onClick={() => setGrouping('project')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              grouping === 'project'
                ? 'bg-[var(--accent)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            By Project Gap
          </button>
          <button
            onClick={() => setGrouping('priority')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              grouping === 'priority'
                ? 'bg-[var(--accent)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            By Priority
          </button>
          <button
            onClick={() => setGrouping('all')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
              grouping === 'all'
                ? 'bg-[var(--accent)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            All Courses ({courses.length})
          </button>
        </div>
      </div>

      {/* Featured Strategic Gap Alert (Enterprise Analytics Engine Scenario A) */}
      <div className="p-5 rounded-2xl bg-[var(--status-warning-bg)] border border-[var(--status-warning)]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="p-3 rounded-xl bg-[var(--status-warning)]/20 text-[var(--status-warning)] flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-[var(--status-warning)]">
                Scenario A Remediation Path
              </span>
              <Badge variant="warning" size="sm">
                Critical Priority
              </Badge>
            </div>
            <h2 className="text-base font-bold text-[var(--text-primary)] mt-0.5">
              Enterprise Analytics Engine — Cloud Architecture Deficit
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1 max-w-2xl">
              Candidate team needs 1 additional engineer at Cloud Architecture Level 4. Enrolling Sophia Mueller and Priya Patel in the AWS Serverless Masterclass solves the deficit in 4 weeks.
            </p>
          </div>
        </div>

        <Button
          variant="primary"
          size="sm"
          onClick={() => {
            toggleEnrollment('course-aws-cloud', 'emp-sophia-mueller');
          }}
          className="flex-shrink-0 bg-[var(--status-warning)] text-black hover:bg-[var(--status-warning)]/90"
        >
          <CheckCircle2 className="w-4 h-4 mr-1.5" />
          Enroll Sophia Mueller
        </Button>
      </div>

      {/* Course Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => {
          const associatedProject = projects.find((p) => p.id === course.targetProjectId);
          const customEnrolled = enrolledCourseMap[course.id] || [];
          const allEnrolledIds = Array.from(new Set([...course.enrolledEmployeeIds, ...customEnrolled]));
          const enrolledEmployees = employees.filter((e) => allEnrolledIds.includes(e.id));

          return (
            <div
              key={course.id}
              className="glass-card p-5 flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <Badge
                    size="sm"
                    variant={
                      course.priority === 'Critical'
                        ? 'overloaded'
                        : course.priority === 'High'
                        ? 'warning'
                        : 'accent'
                    }
                  >
                    {course.priority} Priority
                  </Badge>
                  <span className="text-[11px] text-[var(--text-tertiary)] font-medium">
                    {course.level}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors leading-snug">
                  {course.title}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1">
                  Provided by <span className="font-medium">{course.provider}</span>
                </p>

                {/* Target Gap Rationale */}
                <div className="mt-3.5 p-3 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs">
                  <span className="text-[10px] font-semibold text-[var(--text-tertiary)] uppercase block mb-0.5">
                    Mitigates Gap In:
                  </span>
                  <p className="text-[var(--text-primary)] font-medium leading-relaxed">
                    {course.associatedGapReason}
                  </p>
                  {associatedProject && (
                    <span className="inline-block mt-2 text-[11px] font-semibold text-[var(--accent)]">
                      Target Project: {associatedProject.name}
                    </span>
                  )}
                </div>

                {/* Course Metadata (Duration, Rating) */}
                <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mt-4">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[var(--text-tertiary)]" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1.5 font-medium">
                    <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" /> {course.rating} / 5.0
                  </span>
                </div>
              </div>

              {/* Enrolled Employees & Action Footer */}
              <div className="mt-5 pt-3.5 border-t border-[var(--border-subtle)]">
                <span className="text-[10px] text-[var(--text-tertiary)] uppercase font-semibold block mb-2">
                  Enrolled Candidates ({enrolledEmployees.length})
                </span>

                <div className="flex items-center justify-between">
                  <div className="flex items-center -space-x-2 overflow-hidden">
                    {enrolledEmployees.map((emp) => (
                      <img
                        key={emp.id}
                        src={emp.avatar}
                        alt={emp.name}
                        title={emp.name}
                        onClick={() => openEmployeeDrawer(emp)}
                        className="w-7 h-7 rounded-full object-cover border-2 border-[var(--bg-surface)] cursor-pointer hover:z-10 transition-transform hover:scale-110"
                      />
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="text-xs"
                    onClick={() => {
                      // Toggle enrollment for first underutilized engineer
                      const candidate = employees.find((e) => e.status === 'underutilized');
                      if (candidate) toggleEnrollment(course.id, candidate.id);
                    }}
                  >
                    <BookOpen className="w-3.5 h-3.5 mr-1" />
                    Quick Enroll
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
