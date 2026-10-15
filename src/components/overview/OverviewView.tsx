import React, { useMemo } from 'react';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import { StatCard } from '../common/StatCard';
import { motion } from 'framer-motion';
import {
  Users,
  Briefcase,
  AlertTriangle,
  Scale,
  ArrowRight,
  TrendingUp,
  Award,
  Zap,
  ChevronDown,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

/* ─── Activity Heatmap ─────────────────────────────────────── */
type CellLevel = 0 | 1 | 2 | 3 | 4;

const CELL_COLORS: Record<CellLevel, string> = {
  0: 'rgba(255,255,255,0.06)',
  1: 'rgba(255,133,51,0.35)',
  2: 'rgba(255,85,0,0.55)',
  3: 'rgba(255,85,0,0.80)',
  4: '#ff5500',
};

/** Deterministic pseudo-random grid seeded by row/col */
function cellLevel(row: number, col: number): CellLevel {
  const hash = ((row * 17 + col * 31 + row * col * 7) % 11);
  if (hash < 3) return 0;
  if (hash < 5) return 1;
  if (hash < 8) return 2;
  if (hash < 10) return 3;
  return 4;
}

const HOURS = ['10am', '11am', '12pm', '1pm', '2pm', '3pm'];
const DAYS = 10;

const ActivityHeatmap: React.FC = () => (
  <div>
    <div className="flex items-center justify-between mb-3">
      <div>
        <h3 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
          Work Activity
        </h3>
        <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
          Weekly team intensity map
        </p>
      </div>
      <button
        className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg"
        style={{ background: 'rgba(255,255,255,0.08)', color: 'var(--text-secondary)' }}
      >
        Weekly <ChevronDown className="w-3 h-3" />
      </button>
    </div>

    <div className="space-y-1.5">
      {HOURS.map((hour, row) => (
        <div key={hour} className="flex items-center gap-1.5">
          <span
            className="w-8 text-right text-[10px] flex-shrink-0"
            style={{ color: 'var(--text-tertiary)' }}
          >
            {hour}
          </span>
          <div className="flex gap-1 flex-1">
            {Array.from({ length: DAYS }).map((_, col) => {
              const level = cellLevel(row, col);
              return (
                <motion.span
                  key={col}
                  className="heatmap-cell flex-1"
                  style={{
                    height: 24,
                    background: CELL_COLORS[level],
                    opacity: level === 0 ? 0.5 : 1,
                  }}
                  title={`${hour} — Day ${col + 1}`}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', damping: 20, stiffness: 400 }}
                />
              );
            })}
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Onboarding / Active Tasks panel ─────────────────────── */
const ONBOARDING_TASKS = [
  { label: 'Complete skill matrix', time: '2h ago' },
  { label: 'Submit project brief', time: '3h ago' },
  { label: 'Review team assignments', time: '4h ago' },
  { label: 'Confirm capacity blocks', time: '5h ago' },
  { label: 'Run rebalance engine', time: '6h ago' },
];

const OnboardingPanel: React.FC = () => (
  <div className="space-y-4">
    {/* Onboarding progress bar */}
    <div>
      <div className="flex items-center justify-between mb-1.5">
        <span className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
          Onboarding Task
        </span>
        <span className="text-xs font-bold" style={{ color: '#ff5500' }}>30%</span>
      </div>
      <div className="progress-track">
        <motion.div
          className="progress-orange"
          initial={{ width: 0 }}
          animate={{ width: '30%' }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        />
      </div>
    </div>

    {/* Task list */}
    <div className="space-y-2.5">
      {ONBOARDING_TASKS.map((task, i) => (
        <div key={i} className="flex items-start justify-between gap-2">
          <div>
            <p className="text-[12px] font-medium" style={{ color: 'var(--text-primary)' }}>
              {task.label}
            </p>
            <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
              {task.time}
            </p>
          </div>
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5"
            style={{ background: i === 0 ? '#ff5500' : 'rgba(255,255,255,0.15)' }}
          />
        </div>
      ))}
    </div>

    {/* Divider */}
    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: 12 }}>
      <p className="text-[11px] uppercase tracking-micro font-bold mb-1" style={{ color: 'var(--text-tertiary)' }}>
        Active Employees Today
      </p>
      <p className="text-3xl font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
        1,142
      </p>
    </div>
  </div>
);

/* ─── Main OverviewView ────────────────────────────────────── */
export const OverviewView: React.FC = () => {
  const employees = useWorkforceStore((s) => s.employees);
  const projects = useWorkforceStore((s) => s.projects);
  const alerts = useWorkforceStore((s) => s.alerts);
  const setCurrentView = useWorkforceStore((s) => s.setCurrentView);
  const setSelectedProjectId = useWorkforceStore((s) => s.setSelectedProjectId);

  const totalEmployees = employees.length;
  const overloadedCount = employees.filter((e) => e.status === 'overloaded').length;
  const underutilizedCount = employees.filter((e) => e.status === 'underutilized').length;

  const avgUtilization = useMemo(
    () =>
      totalEmployees > 0
        ? Math.round(
            (employees.reduce((acc, e) => acc + e.utilizationRate, 0) / totalEmployees) * 100
          )
        : 81,
    [employees, totalEmployees]
  );

  const trendData = [
    { week: 'W1', utilization: 74, billable: 70 },
    { week: 'W2', utilization: 76, billable: 72 },
    { week: 'W3', utilization: 79, billable: 75 },
    { week: 'W4', utilization: 83, billable: 78 },
    { week: 'W5', utilization: 85, billable: 81 },
    { week: 'W6', utilization: 82, billable: 79 },
    { week: 'W7', utilization: 84, billable: 82 },
    { week: 'W8', utilization: 86, billable: 83 },
    { week: 'W9', utilization: 88, billable: 84 },
    { week: 'W10', utilization: 85, billable: 81 },
    { week: 'W11', utilization: 83, billable: 80 },
    { week: 'W12', utilization: avgUtilization, billable: avgUtilization - 4 },
  ];

  const deptMap: Record<string, number> = {};
  employees.forEach((e) => { deptMap[e.department] = (deptMap[e.department] || 0) + 1; });

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-micro" style={{ color: '#ff5500' }}>
              Executive Cockpit
            </span>
            <span className="w-1 h-1 rounded-full" style={{ background: 'var(--text-tertiary)' }} />
            <span className="text-xs" style={{ color: 'var(--text-secondary)' }}>HackAttack 2026</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Workforce Intelligence
          </h1>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => { setSelectedProjectId('prj-analytics'); setCurrentView('project-match'); }}
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all hover:opacity-90"
            style={{ background: 'rgba(255,85,0,0.14)', color: '#ff5500', border: '1px solid rgba(255,85,0,0.25)' }}
          >
            <Zap className="w-3.5 h-3.5" /> Scenario A
          </button>
          <button
            onClick={() => setCurrentView('workload')}
            className="flex items-center gap-1.5 text-xs font-semibold px-3.5 py-2 rounded-xl transition-all hover:opacity-90"
            style={{ background: 'rgba(248,113,113,0.12)', color: '#f87171', border: '1px solid rgba(248,113,113,0.2)' }}
          >
            <Scale className="w-3.5 h-3.5" /> Scenario B
          </button>
        </div>
      </div>

      {/* ── KPI Cards Row ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Hero card — Total Employees */}
        <StatCard
          hero
          title="Total Employees"
          value={totalEmployees + 1200}
          trend="+10.5%"
          trendType="positive"
          icon={<Users className="w-4 h-4 text-white" />}
          subtitle="Active workforce"
          bars={4}
          onClick={() => setCurrentView('skills')}
        />
        {/* Hires This Month */}
        <StatCard
          title="Hires This Month"
          value={34}
          trend="+8.5%"
          trendType="positive"
          icon={<Users className="w-4 h-4" />}
          subtitle="4 Critical • 2 High roles"
          bars={3}
          onClick={() => setCurrentView('project-match')}
        />
        {/* Employee Productivity */}
        <StatCard
          title="Avg Utilization"
          value={avgUtilization}
          suffix="%"
          trend={avgUtilization >= 80 ? '+3.2%' : '-2.1%'}
          trendType={avgUtilization >= 80 ? 'positive' : 'warning'}
          icon={<TrendingUp className="w-4 h-4" />}
          subtitle="Target threshold: 80%"
          bars={Math.round(avgUtilization / 25)}
          onClick={() => setCurrentView('workload')}
        />
        {/* Overloaded Staff */}
        <StatCard
          title="Overloaded Staff"
          value={overloadedCount}
          trend={overloadedCount > 0 ? 'Burnout risk' : 'All healthy'}
          trendType={overloadedCount > 0 ? 'negative' : 'positive'}
          icon={<AlertTriangle className="w-4 h-4" />}
          subtitle={`${underutilizedCount} idle available`}
          bars={overloadedCount > 0 ? 1 : 4}
          onClick={() => setCurrentView('workload')}
        />
      </div>

      {/* ── Middle Grid: Chart + Heatmap + Tasks ── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">

        {/* Utilization trend chart — 5 cols */}
        <div
          className="lg:col-span-5 card-dark p-5 rounded-2xl"
        >
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                Workforce Utilization Trend
              </h2>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                Trailing 12-week vs 80% baseline
              </p>
            </div>
            <div className="flex items-center gap-3 text-[11px]">
              <span className="flex items-center gap-1.5 font-medium" style={{ color: 'var(--text-secondary)' }}>
                <span className="w-2 h-2 rounded-full" style={{ background: '#ff5500' }} />
                Actual
              </span>
              <span className="flex items-center gap-1.5" style={{ color: 'var(--text-tertiary)' }}>
                <span className="w-2 h-0.5" style={{ background: 'var(--text-tertiary)' }} />
                Baseline
              </span>
            </div>
          </div>

          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trendData} margin={{ top: 8, right: 8, left: -22, bottom: 0 }}>
                <defs>
                  <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ff5500" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#ff5500" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="week"
                  stroke="var(--text-tertiary)"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="var(--text-tertiary)"
                  fontSize={10}
                  domain={[50, 100]}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload?.length) {
                      const d = payload[0].payload;
                      return (
                        <div
                          className="p-3 rounded-xl text-xs"
                          style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-strong)', color: 'var(--text-primary)' }}
                        >
                          <span className="font-bold block mb-1">{d.week}</span>
                          <div className="flex justify-between gap-4">
                            <span style={{ color: 'var(--text-secondary)' }}>Utilization</span>
                            <span className="font-bold font-mono" style={{ color: '#ff5500' }}>{d.utilization}%</span>
                          </div>
                          <div className="flex justify-between gap-4">
                            <span style={{ color: 'var(--text-secondary)' }}>Billable</span>
                            <span className="font-bold font-mono" style={{ color: '#4ade80' }}>{d.billable}%</span>
                          </div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="utilization"
                  stroke="#ff5500"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#orangeGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Work Activity Heatmap — 4 cols */}
        <div className="lg:col-span-4 card-dark p-5 rounded-2xl">
          <ActivityHeatmap />
        </div>

        {/* Onboarding / Task Panel — 3 cols */}
        <div className="lg:col-span-3 card-dark p-5 rounded-2xl">
          <OnboardingPanel />
        </div>
      </div>

      {/* ── Department Allocation + Alerts Row ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Dept Distribution */}
        <div className="card-dark p-5 rounded-2xl">
          <h2 className="text-sm font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
            Department Allocation
          </h2>
          <p className="text-[11px] mb-4" style={{ color: 'var(--text-tertiary)' }}>
            Headcount across engineering units
          </p>
          <div className="space-y-3.5">
            {Object.entries(deptMap).map(([dept, count]) => {
              const pct = Math.round((count / totalEmployees) * 100);
              return (
                <div key={dept}>
                  <div className="flex items-center justify-between text-[11px] mb-1.5">
                    <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{dept}</span>
                    <span className="font-mono" style={{ color: 'var(--text-secondary)' }}>
                      {count} ({pct}%)
                    </span>
                  </div>
                  <div className="progress-track">
                    <motion.div
                      className="progress-orange"
                      initial={{ width: 0 }}
                      animate={{ width: `${pct}%` }}
                      transition={{ duration: 0.9, delay: 0.1 }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className="mt-4 pt-3 flex items-center justify-between text-[11px]"
            style={{ borderTop: '1px solid var(--border-subtle)' }}
          >
            <span style={{ color: 'var(--text-tertiary)' }}>Total active</span>
            <span className="font-bold font-mono" style={{ color: 'var(--text-primary)' }}>
              {totalEmployees} engineers
            </span>
          </div>
        </div>

        {/* Alerts — 2 cols */}
        <div className="lg:col-span-2 card-dark p-5 rounded-2xl">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                High Priority Alerts ({alerts.length})
              </h2>
              <p className="text-[11px] mt-0.5" style={{ color: 'var(--text-tertiary)' }}>
                Continuous workforce signal monitoring
              </p>
            </div>
          </div>
          <div className="space-y-3">
            {alerts.map((al) => (
              <div
                key={al.id}
                className="p-3.5 rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                style={{
                  background:
                    al.type === 'danger'
                      ? 'rgba(248,113,113,0.08)'
                      : al.type === 'warning'
                      ? 'rgba(251,191,36,0.08)'
                      : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${
                    al.type === 'danger'
                      ? 'rgba(248,113,113,0.2)'
                      : al.type === 'warning'
                      ? 'rgba(251,191,36,0.2)'
                      : 'rgba(255,255,255,0.07)'
                  }`,
                }}
              >
                <div className="flex items-start gap-3">
                  <div
                    className="p-2 rounded-lg mt-0.5 flex-shrink-0"
                    style={{
                      background:
                        al.type === 'danger'
                          ? 'rgba(248,113,113,0.18)'
                          : al.type === 'warning'
                          ? 'rgba(251,191,36,0.18)'
                          : 'rgba(255,85,0,0.18)',
                      color:
                        al.type === 'danger'
                          ? '#f87171'
                          : al.type === 'warning'
                          ? '#fbbf24'
                          : '#ff5500',
                    }}
                  >
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>
                        {al.title}
                      </h4>
                      <span className="text-[10px]" style={{ color: 'var(--text-tertiary)' }}>
                        {al.timestamp}
                      </span>
                    </div>
                    <p className="text-xs mt-0.5 leading-relaxed max-w-xl" style={{ color: 'var(--text-secondary)' }}>
                      {al.description}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setCurrentView(al.targetView)}
                  className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg flex-shrink-0 self-end sm:self-center transition-all hover:opacity-80"
                  style={{ background: 'rgba(255,85,0,0.14)', color: '#ff5500', border: '1px solid rgba(255,85,0,0.2)' }}
                >
                  Inspect <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
