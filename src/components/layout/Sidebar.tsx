import React from 'react';
import { motion } from 'framer-motion';
import { useWorkforceStore, NavigationView } from '../../store/useWorkforceStore';
import {
  LayoutDashboard,
  Sparkles,
  Scale,
  Grid,
  GraduationCap,
  Layers,
  RotateCcw,
  ShieldCheck,
  Flame,
} from 'lucide-react';
import { api } from '../../api';

export const Sidebar: React.FC = () => {
  const currentView = useWorkforceStore((s) => s.currentView);
  const setCurrentView = useWorkforceStore((s) => s.setCurrentView);
  const employees = useWorkforceStore((s) => s.employees);
  const resetToScenarioSeed = useWorkforceStore((s) => s.resetToScenarioSeed);

  const overloadedCount = employees.filter((e) => e.status === 'overloaded').length;

  const navItems: { id: NavigationView; label: string; icon: any; badge?: string; badgeColor?: string }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    {
      id: 'project-match',
      label: 'Project Match',
      icon: Sparkles,
    },
    {
      id: 'workload',
      label: 'Workload & Balance',
      icon: Scale,
      badge: overloadedCount > 0 ? `${overloadedCount}` : undefined,
      badgeColor: 'bg-[#ef4444] text-white',
    },
    { id: 'skills', label: 'Skills Heatmap', icon: Grid },
    { id: 'training', label: 'Upskill & Training', icon: GraduationCap },
  ];

  return (
    <aside
      className="w-[220px] h-screen sticky top-0 flex-shrink-0 flex flex-col justify-between z-30 select-none hidden md:flex sidebar-surface"
      aria-label="Main Navigation"
      style={{ background: 'var(--sidebar-bg)' }}
    >
      <div className="p-4">
        {/* Brand */}
        <div className="flex items-center gap-3 px-2 py-4 mb-4">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
            style={{ background: '#ff5500', boxShadow: '0 4px 14px rgba(255,85,0,0.45)' }}
          >
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="font-bold text-sm tracking-tight block" style={{ color: '#f4f4f5' }}>
              Workforce Intel
            </span>
            <span className="text-[10px] font-medium" style={{ color: '#71717a' }}>
              HackAttack 2026
            </span>
          </div>
        </div>

        {/* Nav Label */}
        <span
          className="px-2 text-[10px] font-bold uppercase tracking-[0.1em] block mb-2"
          style={{ color: '#52525b' }}
        >
          Modules
        </span>

        {/* Nav Items */}
        <div className="space-y-0.5">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;

            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className="relative w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff5500]"
                style={{
                  color: isActive ? '#f4f4f5' : '#71717a',
                  background: isActive ? 'rgba(255,85,0,0.15)' : 'transparent',
                }}
                aria-current={isActive ? 'page' : undefined}
              >
                {/* Animated active pill */}
                {isActive && (
                  <motion.div
                    layoutId="activeNavPill"
                    className="absolute inset-0 rounded-xl -z-10"
                    style={{ background: 'rgba(255,85,0,0.15)', border: '1px solid rgba(255,85,0,0.25)' }}
                    transition={{ type: 'spring', damping: 28, stiffness: 320 }}
                  />
                )}

                {/* Hover highlight */}
                {!isActive && (
                  <span
                    className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ background: 'rgba(255,255,255,0.04)' }}
                  />
                )}

                <div className="flex items-center gap-2.5">
                  <Icon
                    className="w-4 h-4 flex-shrink-0 transition-colors"
                    style={{ color: isActive ? '#ff5500' : '#52525b' }}
                  />
                  <span className="text-[13px]" style={{ color: isActive ? '#f4f4f5' : '#a1a1aa' }}>
                    {item.label}
                  </span>
                </div>

                {item.badge && (
                  <span
                    className={`text-[10px] min-w-[20px] h-5 px-1.5 rounded-full font-bold flex items-center justify-center ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom area */}
      <div className="p-4 space-y-3" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
        {/* Status chip */}
        <div
          className="p-3 rounded-xl text-xs space-y-2"
          style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div>
            <div className="flex items-center gap-1.5 font-semibold mb-1" style={{ color: '#4ade80' }}>
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Evaluation Ready</span>
            </div>
            <p className="leading-tight text-[var(--text-secondary)] font-medium" style={{ fontSize: 11 }}>
              Scenarios A & B loaded.
            </p>
          </div>

          {/* Firebase Connection Indicator */}
          <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
            <div className="flex items-center gap-1.5">
              <Flame className={`w-3.5 h-3.5 ${api.isFirebaseActive ? 'text-amber-400' : 'text-zinc-500'}`} />
              <span className={api.isFirebaseActive ? 'text-amber-300 font-semibold' : 'text-[var(--text-secondary)] font-medium'}>
                {api.isFirebaseActive ? 'Firebase Live' : 'Firebase Ready'}
              </span>
            </div>
            {api.isFirebaseActive ? (
              <button
                onClick={async () => {
                  try {
                    await api.seedFirebase();
                    alert('Firestore seeded successfully with workforce intelligence data!');
                  } catch (e: any) {
                    alert('Error seeding Firestore: ' + e.message);
                  }
                }}
                className="text-[10px] px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 hover:bg-amber-500/30 font-medium cursor-pointer"
                title="Populate Firestore with initial demo collections"
              >
                Seed Cloud
              </button>
            ) : (
              <span className="text-[10px] text-zinc-500 font-mono">.env.local</span>
            )}
          </div>
        </div>

        {/* Reset button */}
        <button
          onClick={resetToScenarioSeed}
          className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all active:scale-[0.97] cursor-pointer"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <RotateCcw className="w-3.5 h-3.5 text-[var(--accent)]" />
          <span>Reset Demo Seed</span>
        </button>
      </div>
    </aside>
  );
};
