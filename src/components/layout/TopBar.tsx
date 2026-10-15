import React from 'react';
import { useWorkforceStore, NavigationView } from '../../store/useWorkforceStore';
import { useThemeStore } from '../../store/useThemeStore';
import { Button } from '../ui/Button';
import {
  Sun,
  Moon,
  RotateCcw,
  Menu,
  Sparkles,
  Scale,
  Search,
} from 'lucide-react';

export interface TopBarProps {
  onToggleMobileMenu: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ onToggleMobileMenu }) => {
  const currentView = useWorkforceStore((s) => s.currentView);
  const setCurrentView = useWorkforceStore((s) => s.setCurrentView);
  const resetToScenarioSeed = useWorkforceStore((s) => s.resetToScenarioSeed);
  const isDark = useThemeStore((s) => s.isDark);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  const viewTitles: Record<NavigationView, string> = {
    overview: 'Overview & Metrics',
    'project-match': 'Project Match (Scenario A)',
    workload: 'Workload & Rebalance (Scenario B)',
    skills: 'Skills & Competencies',
    training: 'Upskilling & Training Courses',
  };

  return (
    <header className="sticky top-0 z-20 w-full glass-chrome border-b border-[var(--border-subtle)] px-4 sm:px-8 py-3.5 flex items-center justify-between transition-colors">
      {/* Mobile Menu & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onToggleMobileMenu}
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)] md:hidden focus:outline-none"
          aria-label="Open mobile navigation"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-[var(--text-tertiary)] hidden sm:inline">
            Workforce Intelligence
          </span>
          <span className="text-xs text-[var(--text-tertiary)] hidden sm:inline">/</span>
          <span className="text-sm font-bold text-[var(--text-primary)] tracking-tight">
            {viewTitles[currentView]}
          </span>
        </div>
      </div>

      {/* Right Controls: Quick scenario switches, Theme Toggle, Seed Reset */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* Quick Scenario Toggles for Judges */}
        <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)]">
          <button
            onClick={() => setCurrentView('project-match')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg flex items-center gap-1 transition-all ${
              currentView === 'project-match'
                ? 'text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
            style={currentView === 'project-match' ? { background: '#ff5500' } : {}}
          >
            <Sparkles className="w-3 h-3" />
            Scenario A
          </button>
          <button
            onClick={() => setCurrentView('workload')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-lg flex items-center gap-1 transition-all ${
              currentView === 'workload'
                ? 'bg-[var(--status-danger)] text-white shadow-xs'
                : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
            }`}
          >
            <Scale className="w-3 h-3" />
            Scenario B
          </button>
        </div>

        {/* Reset Seed Button */}
        <button
          onClick={resetToScenarioSeed}
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)] border border-transparent hover:border-[var(--border-subtle)] transition-all active:scale-95 cursor-pointer"
          title="Reset Scenarios Seed"
          aria-label="Reset Scenarios Seed"
        >
          <RotateCcw className="w-4 h-4 text-[var(--accent)]" />
        </button>

        {/* Dark / Light Mode Switcher */}
        <button
          onClick={toggleTheme}
          className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-secondary)] border border-transparent hover:border-[var(--border-subtle)] transition-all active:scale-95 cursor-pointer"
          aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[var(--accent)]" />}
        </button>

        {/* User Profile Thumbnail */}
        <div className="flex items-center gap-2 pl-2 border-l border-[var(--border-subtle)]">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
            alt="Judge User"
            className="w-7 h-7 rounded-full object-cover border border-[var(--border-strong)]"
          />
          <span className="text-xs font-semibold text-[var(--text-primary)] hidden xl:inline">
            HackAttack Evaluator
          </span>
        </div>
      </div>
    </header>
  );
};
