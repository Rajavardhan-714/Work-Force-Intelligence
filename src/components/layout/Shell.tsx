import React, { useState } from 'react';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';
import { Drawer } from '../ui/Drawer';
import { useWorkforceStore, NavigationView } from '../../store/useWorkforceStore';
import { EmployeeDetailDrawer } from '../skills/EmployeeDetailDrawer';
import {
  LayoutDashboard,
  Sparkles,
  Scale,
  Grid,
  GraduationCap,
  Layers,
  RotateCcw,
} from 'lucide-react';

export interface ShellProps {
  children: React.ReactNode;
}

export const Shell: React.FC<ShellProps> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentView = useWorkforceStore((s) => s.currentView);
  const setCurrentView = useWorkforceStore((s) => s.setCurrentView);
  const resetToScenarioSeed = useWorkforceStore((s) => s.resetToScenarioSeed);

  const navItems: { id: NavigationView; label: string; icon: any }[] = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'project-match', label: 'Project Match', icon: Sparkles },
    { id: 'workload', label: 'Workload & Rebalance', icon: Scale },
    { id: 'skills', label: 'Skills Heatmap', icon: Grid },
    { id: 'training', label: 'Upskill & Training', icon: GraduationCap },
  ];

  return (
    <div className="min-h-screen flex bg-[var(--bg-app)] text-[var(--text-primary)] antialiased transition-colors">
      {/* Desktop Sidebar */}
      <Sidebar />

      {/* Mobile Navigation Drawer */}
      <Drawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        title="Navigation"
        description="Workforce Intelligence Modules"
        width="max-w-xs"
      >
        <div className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentView(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-[var(--accent)] text-white shadow-sm'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--bg-surface-secondary)]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{item.label}</span>
              </button>
            );
          })}

          <div className="pt-4 border-t border-[var(--border-subtle)] mt-6">
            <button
              onClick={() => {
                resetToScenarioSeed();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-[var(--bg-surface-secondary)] text-xs font-semibold text-[var(--accent)]"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Demo Seed
            </button>
          </div>
        </div>
      </Drawer>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <TopBar onToggleMobileMenu={() => setMobileMenuOpen(true)} />
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Global Employee Detail Drawer */}
      <EmployeeDetailDrawer />
    </div>
  );
};
