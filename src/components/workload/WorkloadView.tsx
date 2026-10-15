import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { UtilizationBar } from '../ui/UtilizationBar';
import {
  Scale,
  ArrowRight,
  Check,
  RotateCcw,
  AlertOctagon,
  TrendingDown,
  Sparkles,
  Search,
  Filter,
} from 'lucide-react';

export const WorkloadView: React.FC = () => {
  const employees = useWorkforceStore((s) => s.employees);
  const rebalanceSuggestions = useWorkforceStore((s) => s.rebalanceSuggestions);
  const handleRebalanceAction = useWorkforceStore((s) => s.handleRebalanceAction);
  const openEmployeeDrawer = useWorkforceStore((s) => s.openEmployeeDrawer);

  const [activeFilter, setActiveFilter] = useState<'all' | 'overloaded' | 'underutilized' | 'healthy'>('all');
  const [isRebalanceMode, setIsRebalanceMode] = useState(true);
  const [search, setSearch] = useState('');

  // Partition employees into groups
  const overloaded = employees.filter((e) => e.status === 'overloaded');
  const underutilized = employees.filter((e) => e.status === 'underutilized');
  const healthy = employees.filter((e) => e.status === 'healthy');

  const filteredEmployees = employees.filter((e) => {
    const matchesFilter = activeFilter === 'all' ? true : e.status === activeFilter;
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.role.toLowerCase().includes(search.toLowerCase()) ||
      e.department.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const pendingCount = rebalanceSuggestions.filter((s) => s.status === 'pending').length;
  const acceptedCount = rebalanceSuggestions.filter((s) => s.status === 'accepted').length;

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold text-[var(--status-danger)]">
              Workload Intelligence & Optimization
            </span>
            <span className="w-1 h-1 rounded-full bg-[var(--text-secondary)]" />
            <span className="text-xs text-[var(--text-secondary)]">Burnout prevention & skill-matched redistribution</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-[var(--text-primary)]">
            Capacity & Workload Rebalancing
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant={isRebalanceMode ? 'primary' : 'secondary'}
            onClick={() => setIsRebalanceMode((prev) => !prev)}
          >
            <Scale className="w-4 h-4 mr-2" />
            {isRebalanceMode ? 'Hide Rebalance Engine' : 'Open Rebalance Engine'}
            {pendingCount > 0 && (
              <span className="ml-2 px-1.5 py-0.5 rounded-full text-[11px] bg-black/20 text-zinc-950 font-mono font-bold">
                {pendingCount}
              </span>
            )}
          </Button>
        </div>
      </div>

      {/* KPI Capacity Spectrum Cockpit */}
      <div className="p-6 mb-6 rounded-2xl border border-[var(--border-strong)] bg-gradient-to-br from-red-500/10 via-[var(--bg-surface-elevated)] to-fuchsia-500/10 backdrop-blur-2xl">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Left Zone: Overload Critical Radar */}
          <div
            className={`flex items-center gap-4 cursor-pointer p-3 rounded-2xl transition-all ${
              activeFilter === 'overloaded' ? 'bg-[var(--status-danger-bg)] ring-1 ring-[var(--status-danger)]' : 'hover:bg-white/5'
            }`}
            onClick={() => setActiveFilter(activeFilter === 'overloaded' ? 'all' : 'overloaded')}
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-[var(--status-danger-bg)] border border-[var(--status-danger)]/40 flex items-center justify-center text-[var(--status-danger)] shadow-sm">
                <span className="text-xl font-bold font-mono">{overloaded.length}</span>
              </div>
              {overloaded.length > 0 && (
                <>
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--status-danger)] rounded-full animate-ping" />
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-[var(--status-danger)] rounded-full" />
                </>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--status-danger)]">
                  Critical Overload
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--status-danger-bg)] text-[var(--status-danger)] font-mono font-semibold">
                  +18h Excess
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                {overloaded.length > 0 ? overloaded.map((e) => e.name).slice(0, 3).join(', ') : 'All Balanced'}
              </p>
              <span className="text-[11px] text-[var(--text-tertiary)]">
                {overloaded.length > 0 ? 'Burnout risk detected' : 'Zero capacity violations'}
              </span>
            </div>
          </div>

          {/* Center Zone: Multi-segment visual equilibrium bar */}
          <div className="flex-1 max-w-xl mx-auto px-4 w-full">
            <div className="flex items-center justify-between text-xs mb-2">
              <span className="text-[var(--text-secondary)] font-medium">Workforce Equilibrium Ratio</span>
              <span className="font-mono font-semibold text-[var(--text-primary)]">
                {Math.round((healthy.length / employees.length) * 100)}% Stable
              </span>
            </div>
            <div className="h-3 w-full bg-[var(--border-subtle)] rounded-full overflow-hidden flex p-0.5 gap-1">
              <div
                className="h-full rounded-full bg-[var(--status-danger)] transition-all"
                style={{ width: `${(overloaded.length / employees.length) * 100}%` }}
                title={`${overloaded.length} Overloaded`}
              />
              <div
                className="h-full rounded-full bg-[var(--status-success)] transition-all"
                style={{ width: `${(healthy.length / employees.length) * 100}%` }}
                title={`${healthy.length} Healthy`}
              />
              <div
                className="h-full rounded-full bg-[var(--status-underutilized)] transition-all"
                style={{ width: `${(underutilized.length / employees.length) * 100}%` }}
                title={`${underutilized.length} Underutilized`}
              />
            </div>
            <div className="flex items-center justify-between text-[11px] text-[var(--text-tertiary)] mt-2">
              <button
                onClick={() => setActiveFilter('overloaded')}
                className={`flex items-center gap-1.5 hover:text-[var(--status-danger)] transition-colors cursor-pointer ${
                  activeFilter === 'overloaded' ? 'font-bold text-[var(--status-danger)]' : ''
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--status-danger)]" /> {overloaded.length} Overloaded
              </button>
              <button
                onClick={() => setActiveFilter('healthy')}
                className={`flex items-center gap-1.5 hover:text-[var(--status-success)] transition-colors cursor-pointer ${
                  activeFilter === 'healthy' ? 'font-bold text-[var(--status-success)]' : ''
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--status-success)]" /> {healthy.length} Healthy
              </button>
              <button
                onClick={() => setActiveFilter('underutilized')}
                className={`flex items-center gap-1.5 hover:text-[var(--status-underutilized)] transition-colors cursor-pointer ${
                  activeFilter === 'underutilized' ? 'font-bold text-[var(--status-underutilized)]' : ''
                }`}
              >
                <span className="w-2 h-2 rounded-full bg-[var(--status-underutilized)]" /> {underutilized.length} Available
              </button>
            </div>
          </div>

          {/* Right Zone: Latent Bandwidth Reservoir */}
          <div
            className={`flex items-center gap-4 cursor-pointer p-3 rounded-2xl transition-all ${
              activeFilter === 'underutilized' ? 'bg-[var(--status-underutilized-bg)] ring-1 ring-[var(--status-underutilized)]' : 'hover:bg-white/5'
            }`}
            onClick={() => setActiveFilter(activeFilter === 'underutilized' ? 'all' : 'underutilized')}
          >
            <div className="w-12 h-12 rounded-2xl bg-[var(--status-underutilized-bg)] border border-[var(--status-underutilized)]/40 flex items-center justify-center text-[var(--status-underutilized)] shadow-sm">
              <span className="text-xl font-bold font-mono">{underutilized.length}</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-[var(--status-underutilized)]">
                  Latent Capacity
                </span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--status-underutilized-bg)] text-[var(--status-underutilized)] font-mono font-semibold">
                  82h Unallocated
                </span>
              </div>
              <p className="text-sm font-semibold text-[var(--text-primary)] mt-0.5">
                {underutilized.map((e) => e.name).slice(0, 4).join(', ')}
              </p>
              <span className="text-[11px] text-[var(--text-secondary)] font-medium">
                Available for instant task rebalance
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <motion.div
          whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
          whileTap={{ scale: 0.98, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
          onClick={() => setActiveFilter(activeFilter === 'overloaded' ? 'all' : 'overloaded')}
          className={`rounded-2xl p-5 cursor-pointer transition-all duration-200 border-t border-t-white/20 border-white/[0.08] border backdrop-blur-xl ${
            activeFilter === 'overloaded'
              ? 'bg-[var(--status-danger)]/[0.08] border-[var(--status-danger)]/50 ring-1 ring-[var(--status-danger)]/40'
              : 'bg-[var(--bg-surface)]/70 hover:bg-[var(--bg-surface)]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--status-danger)]/10 text-[var(--status-danger)] border border-[var(--status-danger)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-danger)] animate-pulse" />
              Overloaded (&gt;100%)
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[var(--status-danger)]/10 text-[var(--status-danger)]">
              <AlertOctagon className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono tracking-tight text-[var(--status-danger)]">
              {overloaded.length}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium">engineers at burnout risk</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] font-medium mt-2 truncate">
            {overloaded.map((e) => e.name).slice(0, 3).join(', ')}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
          whileTap={{ scale: 0.98, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
          onClick={() => setActiveFilter(activeFilter === 'underutilized' ? 'all' : 'underutilized')}
          className={`rounded-2xl p-5 cursor-pointer transition-all duration-200 border-t border-t-white/20 border-white/[0.08] border backdrop-blur-xl ${
            activeFilter === 'underutilized'
              ? 'bg-[var(--status-underutilized)]/[0.08] border-[var(--status-underutilized)]/50 ring-1 ring-[var(--status-underutilized)]/40'
              : 'bg-[var(--bg-surface)]/70 hover:bg-[var(--bg-surface)]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--status-underutilized)]/10 text-[var(--status-underutilized)] border border-[var(--status-underutilized)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-underutilized)]" />
              Underutilized (&lt;50%)
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[var(--status-underutilized)]/10 text-[var(--status-underutilized)]">
              <TrendingDown className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono tracking-tight text-[var(--status-underutilized)]">
              {underutilized.length}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium">engineers with spare capacity</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] font-medium mt-2 truncate">
            {underutilized.map((e) => e.name).slice(0, 4).join(', ')}
          </p>
        </motion.div>

        <motion.div
          whileHover={{ y: -3, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
          whileTap={{ scale: 0.98, transition: { type: 'spring', stiffness: 500, damping: 30 } }}
          onClick={() => setActiveFilter(activeFilter === 'healthy' ? 'all' : 'healthy')}
          className={`rounded-2xl p-5 cursor-pointer transition-all duration-200 border-t border-t-white/20 border-white/[0.08] border backdrop-blur-xl ${
            activeFilter === 'healthy'
              ? 'bg-[var(--status-success)]/[0.08] border-[var(--status-success)]/50 ring-1 ring-[var(--status-success)]/40'
              : 'bg-[var(--bg-surface)]/70 hover:bg-[var(--bg-surface)]'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[var(--status-success)]/10 text-[var(--status-success)] border border-[var(--status-success)]/20">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--status-success)]" />
              Healthy Band (50-100%)
            </div>
            <div className="w-7 h-7 rounded-full flex items-center justify-center bg-[var(--status-success)]/10 text-[var(--status-success)]">
              <Check className="w-3.5 h-3.5" />
            </div>
          </div>
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-3xl font-bold font-mono tracking-tight text-[var(--status-success)]">
              {healthy.length}
            </span>
            <span className="text-xs text-[var(--text-secondary)] font-medium">balanced contributors</span>
          </div>
          <p className="text-xs text-[var(--text-secondary)] font-medium mt-2">
            Standard operating capacity sustained
          </p>
        </motion.div>
      </div>

      {/* Hero Scenario B Interactive Rebalance Panel */}
      <AnimatePresence>
        {isRebalanceMode && (
          <motion.div
            layout
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ type: 'spring', damping: 26, stiffness: 220 }}
            className="p-6 rounded-2xl border border-[var(--accent)]/30 bg-[var(--bg-surface-elevated)] backdrop-blur-xl relative"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[var(--accent-muted)] text-[var(--accent)]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
                    Smart Workload Rebalancer
                  </h2>
                  <p className="text-xs text-[var(--text-secondary)]">
                    Simulates transferring task hours from overloaded seniors to qualified, underutilized peers.
                  </p>
                </div>
              </div>

              {/* Live Before/After Status Row - clean seamless typography, no nested card */}
              <div className="flex items-center gap-3 text-xs px-3 py-2 rounded-xl bg-white/[0.04]">
                <div>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase block font-medium">
                    Before Rebalance
                  </span>
                  <span className="font-semibold text-[var(--status-danger)]">
                    3 Overloaded • 4 Idle
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[var(--text-secondary)]" />
                <div>
                  <span className="text-[10px] text-[var(--text-secondary)] uppercase block font-medium">
                    Live Status
                  </span>
                  <span className="font-semibold text-[var(--status-success)]">
                    {overloaded.length} Overloaded ({acceptedCount} Shifts Accepted)
                  </span>
                </div>
              </div>
            </div>

            {/* Rebalance Proposals List */}
            <div className="space-y-4 mt-5">
              {rebalanceSuggestions.map((prop) => {
                const isAccepted = prop.status === 'accepted';
                const isRejected = prop.status === 'rejected';

                return (
                  <motion.div
                    key={prop.id}
                    layout
                    className={`p-4 rounded-xl border transition-all ${
                      isAccepted
                        ? 'bg-[var(--status-success-bg)]/30 border-[var(--status-success)]/40'
                        : isRejected
                        ? 'opacity-40 bg-[var(--bg-surface-secondary)] border-[var(--border-subtle)]'
                        : 'bg-[var(--bg-surface-secondary)] border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                    }`}
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      {/* Left: The Transfer Flow (From -> To) */}
                      <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap">
                        {/* Overloaded Engineer */}
                        <div
                          className="flex items-center gap-2.5 cursor-pointer"
                          onClick={() => {
                            const emp = employees.find((e) => e.id === prop.fromEmployeeId);
                            if (emp) openEmployeeDrawer(emp);
                          }}
                        >
                          <img
                            src={prop.fromAvatar}
                            alt={prop.fromEmployeeName}
                            className="w-9 h-9 rounded-full object-cover border border-[var(--status-danger)]"
                          />
                          <div>
                            <span className="text-sm font-semibold text-[var(--text-primary)] block">
                              {prop.fromEmployeeName}
                            </span>
                            <span className="text-[11px] text-[var(--status-danger)] font-medium">
                              Initial: {prop.fromInitialHours}h/wk
                            </span>
                          </div>
                        </div>

                        {/* Arrow with transfer hours */}
                        <div className="flex flex-col items-center px-2">
                          <span className="text-[10px] font-bold text-[var(--accent)] font-mono">
                            -{prop.hours}h / +{prop.hours}h
                          </span>
                          <ArrowRight className="w-4 h-4 text-[var(--accent)]" />
                        </div>

                        {/* Recipient Engineer */}
                        <div
                          className="flex items-center gap-2.5 cursor-pointer"
                          onClick={() => {
                            const emp = employees.find((e) => e.id === prop.toEmployeeId);
                            if (emp) openEmployeeDrawer(emp);
                          }}
                        >
                          <img
                            src={prop.toAvatar}
                            alt={prop.toEmployeeName}
                            className="w-9 h-9 rounded-full object-cover border border-[var(--status-underutilized)]"
                          />
                          <div>
                            <span className="text-sm font-semibold text-[var(--text-primary)] block">
                              {prop.toEmployeeName}
                            </span>
                            <span className="text-[11px] text-[var(--status-underutilized)] font-medium">
                              Initial: {prop.toInitialHours}h/wk
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Middle: Task Details & Rationale */}
                      <div className="flex-1 lg:px-4">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="text-xs font-semibold text-[var(--text-primary)]">
                            {prop.taskTitle}
                          </span>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--bg-surface)] text-[var(--text-secondary)] font-medium border border-[var(--border-subtle)]">
                            {prop.projectName}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                          {prop.rationale}
                        </p>
                      </div>

                      {/* Right: Actions (Accept, Reject, Undo) */}
                      <div className="flex items-center gap-2 flex-shrink-0 self-end lg:self-center">
                        {isAccepted ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-semibold text-[var(--status-success)] inline-flex items-center gap-1">
                              <Check className="w-3.5 h-3.5" /> Rebalanced
                            </span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRebalanceAction(prop.id, 'pending')}
                              className="text-xs hover:bg-[var(--bg-surface)]"
                            >
                              <RotateCcw className="w-3 h-3 mr-1" /> Undo
                            </Button>
                          </div>
                        ) : isRejected ? (
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-[var(--text-tertiary)]">Declined</span>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRebalanceAction(prop.id, 'pending')}
                              className="text-xs"
                            >
                              <RotateCcw className="w-3 h-3 mr-1" /> Reconsider
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Button
                              variant="primary"
                              size="sm"
                              onClick={() => handleRebalanceAction(prop.id, 'accepted')}
                            >
                              <Check className="w-3.5 h-3.5 mr-1" /> Accept Shift
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleRebalanceAction(prop.id, 'rejected')}
                              className="text-xs"
                            >
                              Decline
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Employee Workload Table & Filter Bar */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          {/* Status Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-[var(--accent)] text-white'
                  : 'bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              All Workforce ({employees.length})
            </button>
            <button
              onClick={() => setActiveFilter('overloaded')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'overloaded'
                  ? 'bg-[var(--status-danger)] text-white'
                  : 'bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Overloaded ({overloaded.length})
            </button>
            <button
              onClick={() => setActiveFilter('underutilized')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'underutilized'
                  ? 'bg-[var(--status-underutilized)] text-white'
                  : 'bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Underutilized ({underutilized.length})
            </button>
            <button
              onClick={() => setActiveFilter('healthy')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeFilter === 'healthy'
                  ? 'bg-[var(--status-success)] text-white'
                  : 'bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              Healthy ({healthy.length})
            </button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="w-4 h-4 text-[var(--text-tertiary)] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, role, dept..."
              className="pl-9 pr-4 py-1.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-xs text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)] w-full sm:w-64"
            />
          </div>
        </div>

        {/* Employee Cards Grid with Spring Utilization Bars */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <AnimatePresence mode="popLayout">
            {filteredEmployees.map((emp) => (
              <motion.div
                key={emp.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ type: 'spring', damping: 25 }}
                onClick={() => openEmployeeDrawer(emp)}
                className="glass-card p-4 flex flex-col justify-between hover:shadow-md transition-all cursor-pointer group"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3">
                      <img
                        src={emp.avatar}
                        alt={emp.name}
                        className="w-10 h-10 rounded-full object-cover border border-[var(--border-subtle)] group-hover:border-[var(--accent)] transition-all"
                      />
                      <div>
                        <h4 className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                          {emp.name}
                        </h4>
                        <p className="text-xs text-[var(--text-secondary)]">
                          {emp.role}
                        </p>
                      </div>
                    </div>
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

                  {/* Utilization Bar */}
                  <div className="my-2">
                    <UtilizationBar
                      rate={emp.utilizationRate}
                      assignedHours={emp.totalAssignedHours}
                      capacity={emp.weeklyCapacity}
                    />
                  </div>
                </div>

                {/* Assignments List */}
                <div className="mt-3 pt-2.5 border-t border-[var(--border-subtle)]">
                  <span className="text-[10px] text-[var(--text-tertiary)] uppercase font-semibold block mb-1.5">
                    Active Projects ({emp.assignments.length})
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {emp.assignments.map((asg) => (
                      <span
                        key={asg.projectId}
                        className="text-[11px] px-2 py-0.5 rounded bg-[var(--bg-surface-secondary)] text-[var(--text-secondary)] font-medium border border-[var(--border-subtle)] truncate max-w-[200px]"
                      >
                        {asg.projectName} ({asg.hoursPerWeek}h)
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
