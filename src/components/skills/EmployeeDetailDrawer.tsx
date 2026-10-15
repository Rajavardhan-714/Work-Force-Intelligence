import React from 'react';
import { Drawer } from '../ui/Drawer';
import { Badge } from '../ui/Badge';
import { UtilizationBar } from '../ui/UtilizationBar';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import {
  Mail,
  Clock,
  Briefcase,
  Award,
  Layers,
  Calendar,
  Sparkles,
} from 'lucide-react';

export const EmployeeDetailDrawer: React.FC = () => {
  const selectedEmployeeDetail = useWorkforceStore((s) => s.selectedEmployeeDetail);
  const closeEmployeeDrawer = useWorkforceStore((s) => s.closeEmployeeDrawer);

  if (!selectedEmployeeDetail) return null;

  const emp = selectedEmployeeDetail;
  const availableHours = Math.max(0, emp.weeklyCapacity - emp.totalAssignedHours);

  return (
    <Drawer
      isOpen={!!selectedEmployeeDetail}
      onClose={closeEmployeeDrawer}
      title={emp.name}
      description={`${emp.role} • ${emp.department}`}
    >
      <div className="space-y-6">
        {/* Profile Card */}
        <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)]">
          <img
            src={emp.avatar}
            alt={emp.name}
            className="w-16 h-16 rounded-full object-cover border-2 border-[var(--border-strong)]"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="text-base font-bold text-[var(--text-primary)] truncate">
                {emp.name}
              </h4>
              <Badge
                size="sm"
                variant={
                  emp.status === 'healthy'
                    ? 'healthy'
                    : emp.status === 'overloaded'
                    ? 'overloaded'
                    : 'underutilized'
                }
              >
                {emp.status}
              </Badge>
            </div>
            <p className="text-xs text-[var(--text-secondary)] mt-0.5">{emp.role}</p>
            <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)] mt-2">
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" /> {emp.email}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" /> {emp.timezone}
              </span>
            </div>
          </div>
        </div>

        {/* Capacity & Availability Section */}
        <div className="p-4 rounded-2xl glass-card">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Current Weekly Workload
            </span>
            <span className="text-xs font-medium text-[var(--text-secondary)]">
              {availableHours > 0 ? (
                <span className="text-[var(--status-success)] font-semibold">
                  +{availableHours}h Available
                </span>
              ) : (
                <span className="text-[var(--status-danger)] font-semibold">
                  Over Capacity ({emp.totalAssignedHours - emp.weeklyCapacity}h Over)
                </span>
              )}
            </span>
          </div>

          <UtilizationBar
            rate={emp.utilizationRate}
            assignedHours={emp.totalAssignedHours}
            capacity={emp.weeklyCapacity}
          />
        </div>

        {/* Project Assignments */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Briefcase className="w-4 h-4 text-[var(--accent)]" />
            <h5 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Active Project Allocations ({emp.assignments.length})
            </h5>
          </div>

          <div className="space-y-2">
            {emp.assignments.map((asg) => (
              <div
                key={asg.projectId}
                className="p-3.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] flex items-center justify-between"
              >
                <div>
                  <span className="text-sm font-semibold text-[var(--text-primary)] block">
                    {asg.projectName}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)]">{asg.role}</span>
                </div>
                <span className="px-2.5 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-xs font-mono font-semibold text-[var(--text-primary)]">
                  {asg.hoursPerWeek} hrs/wk
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Proficiency Matrix */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-[var(--accent)]" />
            <h5 className="text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider">
              Assessed Competencies ({emp.skills.length})
            </h5>
          </div>

          <div className="space-y-2.5">
            {emp.skills.map((sk) => (
              <div
                key={sk.skillId}
                className="p-3 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] flex items-center justify-between"
              >
                <div>
                  <span className="text-xs font-semibold text-[var(--text-primary)] block">
                    {sk.skillName}
                  </span>
                  <span className="text-[11px] text-[var(--text-tertiary)]">
                    {sk.yearsExperience} years experience
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((lvl) => (
                    <div
                      key={lvl}
                      className={`w-6 h-6 rounded-md flex items-center justify-center text-[11px] font-mono font-semibold transition-all ${
                        lvl <= sk.proficiency
                          ? 'bg-[var(--accent)] text-white shadow-xs'
                          : 'bg-[var(--border-subtle)] text-[var(--text-tertiary)]'
                      }`}
                      title={`Level ${lvl}`}
                    >
                      {lvl}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Drawer>
  );
};
