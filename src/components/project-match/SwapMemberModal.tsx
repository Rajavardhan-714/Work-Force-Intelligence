import React from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { ScoreRing } from '../ui/ScoreRing';
import { Badge } from '../ui/Badge';
import { MatchCandidate } from '../../types';
import { ArrowLeftRight, Check } from 'lucide-react';

export interface SwapMemberModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentMember: MatchCandidate | null;
  availableCandidates: MatchCandidate[];
  onSwap: (currentMemberId: string, replacementCandidateId: string) => void;
}

export const SwapMemberModal: React.FC<SwapMemberModalProps> = ({
  isOpen,
  onClose,
  currentMember,
  availableCandidates,
  onSwap,
}) => {
  if (!currentMember) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Swap Team Member"
      description={`Select a replacement for ${currentMember.employee.name} to optimize coverage live.`}
      maxWidth="max-w-2xl"
    >
      <div className="space-y-4">
        {/* Current Member Snapshot */}
        <div className="p-3.5 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/30 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={currentMember.employee.avatar}
              alt={currentMember.employee.name}
              className="w-10 h-10 rounded-full object-cover border border-[var(--accent)]"
            />
            <div>
              <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-wider block">
                Currently Selected
              </span>
              <p className="text-sm font-semibold text-[var(--text-primary)]">
                {currentMember.employee.name}
              </p>
              <p className="text-xs text-[var(--text-secondary)]">
                {currentMember.employee.role}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ScoreRing score={currentMember.matchScore} size={48} strokeWidth={4} />
          </div>
        </div>

        {/* Candidate Alternatives */}
        <div className="pt-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] block mb-3">
            Ranked Alternative Candidates ({availableCandidates.length})
          </span>

          <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
            {availableCandidates.map((cand) => (
              <div
                key={cand.employee.id}
                className="p-3.5 rounded-xl glass-card hover:border-[var(--accent)] transition-all flex items-center justify-between gap-4 group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={cand.employee.avatar}
                    alt={cand.employee.name}
                    className="w-10 h-10 rounded-full object-cover border border-[var(--border-subtle)] flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-[var(--text-primary)] truncate">
                        {cand.employee.name}
                      </span>
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
                    <p className="text-xs text-[var(--text-secondary)] truncate">
                      {cand.employee.role} • {cand.employee.department}
                    </p>
                    <p className="text-[11px] text-[var(--text-tertiary)] mt-1 truncate">
                      {cand.whyExplanation}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 flex-shrink-0">
                  <ScoreRing score={cand.matchScore} size={48} strokeWidth={4} />
                  <Button
                    size="sm"
                    variant="secondary"
                    className="group-hover:border-[var(--accent)] group-hover:text-[var(--accent)]"
                    onClick={() => {
                      onSwap(currentMember.employee.id, cand.employee.id);
                      onClose();
                    }}
                  >
                    <ArrowLeftRight className="w-3.5 h-3.5 mr-1" />
                    Swap In
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Modal>
  );
};
