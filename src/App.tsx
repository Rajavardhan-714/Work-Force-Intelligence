import React, { useEffect } from 'react';
import { Shell } from './components/layout/Shell';
import { useWorkforceStore } from './store/useWorkforceStore';
import { ProjectMatchView } from './components/project-match/ProjectMatchView';
import { WorkloadView } from './components/workload/WorkloadView';
import { OverviewView } from './components/overview/OverviewView';
import { SkillsView } from './components/skills/SkillsView';
import { TrainingView } from './components/training/TrainingView';
import { Skeleton } from './components/ui/Skeleton';
import { Button } from './components/ui/Button';
import { AlertCircle, RefreshCw } from 'lucide-react';

export function App() {
  const currentView = useWorkforceStore((s) => s.currentView);
  const isLoading = useWorkforceStore((s) => s.isLoading);
  const error = useWorkforceStore((s) => s.error);
  const loadAllData = useWorkforceStore((s) => s.loadAllData);

  useEffect(() => {
    loadAllData();
  }, [loadAllData]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[var(--bg-app)] flex items-center justify-center p-6">
        <div className="glass-elevated p-8 rounded-3xl max-w-md w-full text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-[var(--accent)] text-white flex items-center justify-center mx-auto shadow-sm animate-pulse">
            <RefreshCw className="w-6 h-6 animate-spin" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
              Initializing Workforce Intelligence
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              Synthesizing 36 verified profiles, project constraints, and training pathways...
            </p>
          </div>
          <div className="space-y-2 pt-2">
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[var(--bg-app)] flex items-center justify-center p-6">
        <div className="glass-elevated p-8 rounded-3xl max-w-md w-full text-center space-y-4 border-[var(--status-danger)]/30">
          <div className="w-12 h-12 rounded-2xl bg-[var(--status-danger-bg)] text-[var(--status-danger)] flex items-center justify-center mx-auto">
            <AlertCircle className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[var(--text-primary)] tracking-tight">
              Intelligence Engine Unavailable
            </h2>
            <p className="text-xs text-[var(--text-secondary)] mt-1">
              {error}
            </p>
          </div>
          <Button variant="primary" onClick={() => loadAllData()} className="mt-2">
            Retry Connection
          </Button>
        </div>
      </div>
    );
  }

  return (
    <Shell>
      {currentView === 'project-match' && <ProjectMatchView />}
      {currentView === 'workload' && <WorkloadView />}
      {currentView === 'overview' && <OverviewView />}
      {currentView === 'skills' && <SkillsView />}
      {currentView === 'training' && <TrainingView />}
    </Shell>
  );
}

export default App;
