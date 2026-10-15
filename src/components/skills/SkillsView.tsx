import React, { useState } from 'react';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import { Badge } from '../ui/Badge';
import { Search, Filter, Layers, UserCheck } from 'lucide-react';

export const SkillsView: React.FC = () => {
  const employees = useWorkforceStore((s) => s.employees);
  const skills = useWorkforceStore((s) => s.skills);
  const openEmployeeDrawer = useWorkforceStore((s) => s.openEmployeeDrawer);

  const [selectedDept, setSelectedDept] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [search, setSearch] = useState('');

  // Unique departments & skill categories
  const departments = ['all', ...Array.from(new Set(employees.map((e) => e.department)))];
  const categories = ['all', ...Array.from(new Set(skills.map((s) => s.category)))];

  const filteredSkills = skills.filter((s) =>
    selectedCategory === 'all' ? true : s.category === selectedCategory
  );

  const filteredEmployees = employees.filter((e) => {
    const matchesDept = selectedDept === 'all' ? true : e.department === selectedDept;
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase());
    return matchesDept && matchesSearch;
  });

  // Cell heatmap background by level 1-5
  const getProficiencyStyle = (level: number) => {
    switch (level) {
      case 5:
        return 'bg-[var(--accent)] text-white font-bold shadow-xs';
      case 4:
        return 'bg-[var(--accent)]/80 text-white font-semibold';
      case 3:
        return 'bg-[var(--accent)]/50 text-[var(--text-primary)] font-medium';
      case 2:
        return 'bg-[var(--accent)]/25 text-[var(--text-secondary)]';
      case 1:
        return 'bg-[var(--accent)]/10 text-[var(--text-tertiary)]';
      default:
        return 'bg-transparent text-[var(--border-strong)]';
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-[var(--accent)]">
              Talent Inventory
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-tertiary)]" />
            <span className="text-xs text-[var(--text-secondary)]">Competency matrix & verification</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Skills & Proficiency Heatmap
          </h1>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 p-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs">
          <span className="text-[11px] font-semibold text-[var(--text-secondary)] mr-1">
            Proficiency Scale:
          </span>
          {[1, 2, 3, 4, 5].map((lvl) => (
            <div key={lvl} className="flex items-center gap-1">
              <span
                className={`w-5 h-5 rounded flex items-center justify-center text-[10px] font-mono ${getProficiencyStyle(
                  lvl
                )}`}
              >
                {lvl}
              </span>
              <span className="text-[10px] text-[var(--text-tertiary)]">
                {lvl === 1 ? 'Novice' : lvl === 5 ? 'Master' : ''}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-card p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[var(--text-secondary)] font-medium">Department:</span>
            <select
              value={selectedDept}
              onChange={(e) => setSelectedDept(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--focus-ring)] cursor-pointer"
            >
              {departments.map((d) => (
                <option key={d} value={d}>
                  {d === 'all' ? 'All Departments' : d}
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-[var(--text-secondary)] font-medium">Skill Category:</span>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-2.5 py-1.5 rounded-lg bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--focus-ring)] cursor-pointer"
            >
              {categories.map((c) => (
                <option key={c} value={c}>
                  {c === 'all' ? 'All Categories' : c}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-[var(--text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search employee..."
            className="pl-8 pr-3 py-1.5 rounded-lg bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-1 focus:ring-[var(--focus-ring)] w-full sm:w-56"
          />
        </div>
      </div>

      {/* Heatmap Matrix Table */}
      <div className="glass-card rounded-2xl overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] bg-[var(--bg-surface-secondary)]">
                <th className="sticky left-0 z-20 bg-[var(--bg-surface-secondary)] py-3 px-4 text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider min-w-[220px]">
                  Employee ({filteredEmployees.length})
                </th>
                <th className="py-3 px-3 text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider text-center min-w-[100px]">
                  Capacity
                </th>
                {filteredSkills.map((sk) => (
                  <th
                    key={sk.id}
                    className="py-3 px-2 text-[11px] font-semibold text-[var(--text-secondary)] text-center min-w-[90px] max-w-[120px] truncate"
                    title={sk.name}
                  >
                    {sk.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)]">
              {filteredEmployees.map((emp) => (
                <tr
                  key={emp.id}
                  className="hover:bg-[var(--accent-muted)]/20 transition-colors group cursor-pointer"
                  onClick={() => openEmployeeDrawer(emp)}
                >
                  {/* Sticky Employee Info Column */}
                  <td className="sticky left-0 z-10 bg-[var(--bg-surface)] group-hover:bg-[var(--bg-surface-elevated)] transition-colors py-3 px-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-8 h-8 rounded-full object-cover border border-[var(--border-subtle)] flex-shrink-0"
                      />
                      <div className="min-w-0">
                        <span className="text-xs font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors truncate block">
                          {emp.name}
                        </span>
                        <span className="text-[11px] text-[var(--text-tertiary)] truncate block">
                          {emp.role}
                        </span>
                      </div>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-3 px-3 text-center">
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
                      {Math.round(emp.utilizationRate * 100)}%
                    </Badge>
                  </td>

                  {/* Skill Heatmap Cells */}
                  {filteredSkills.map((sk) => {
                    const empSkill = emp.skills.find((s) => s.skillId === sk.id);
                    const level = empSkill ? empSkill.proficiency : 0;

                    return (
                      <td key={sk.id} className="py-2 px-2 text-center">
                        <div
                          className={`w-7 h-7 mx-auto rounded-lg flex items-center justify-center text-xs transition-transform hover:scale-110 ${getProficiencyStyle(
                            level
                          )}`}
                          title={`${emp.name}: ${sk.name} - ${
                            level ? `Level ${level}` : 'Not assessed'
                          }`}
                        >
                          {level > 0 ? level : '—'}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
