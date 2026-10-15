import React, { useState } from 'react';
import { Modal } from '../ui/Modal';
import { Button } from '../ui/Button';
import { useWorkforceStore } from '../../store/useWorkforceStore';
import { Plus, Trash2 } from 'lucide-react';
import { SkillProficiency } from '../../types';

export interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProjectModal: React.FC<CreateProjectModalProps> = ({ isOpen, onClose }) => {
  const skills = useWorkforceStore((s) => s.skills);
  const createProject = useWorkforceStore((s) => s.createProject);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [clientOrDept, setClientOrDept] = useState('');
  const [priority, setPriority] = useState<'Critical' | 'High' | 'Medium'>('High');
  const [deadline, setDeadline] = useState('2027-02-15');
  const [headcountNeeded, setHeadcountNeeded] = useState(4);
  const [requiredSkills, setRequiredSkills] = useState<
    { skillId: string; skillName: string; minProficiency: SkillProficiency; weight: number }[]
  >([
    { skillId: 'sk-python', skillName: 'Python', minProficiency: 4, weight: 5 },
    { skillId: 'sk-cloud', skillName: 'Cloud Architecture', minProficiency: 4, weight: 4 },
  ]);

  const handleAddSkill = () => {
    const unselected = skills.find((s) => !requiredSkills.some((r) => r.skillId === s.id));
    if (unselected) {
      setRequiredSkills((prev) => [
        ...prev,
        { skillId: unselected.id, skillName: unselected.name, minProficiency: 3, weight: 3 },
      ]);
    }
  };

  const handleRemoveSkill = (index: number) => {
    setRequiredSkills((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || requiredSkills.length === 0) return;

    await createProject({
      name: name.trim(),
      description: description.trim() || 'Custom strategic initiative requiring cross-functional engineering excellence.',
      clientOrDept: clientOrDept.trim() || 'Strategic Initiatives',
      priority,
      deadline,
      headcountNeeded: Number(headcountNeeded),
      requiredSkills,
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Create Project & Match Team"
      description="Define requirements and let Workforce Intelligence compute the optimal team composition."
      maxWidth="max-w-2xl"
    >
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
            Project Name
          </label>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. NextGen Autonomous Robotics Backend"
            className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Department / Client
            </label>
            <input
              type="text"
              value={clientOrDept}
              onChange={(e) => setClientOrDept(e.target.value)}
              placeholder="e.g. Core Robotics"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Headcount Needed
            </label>
            <input
              type="number"
              min={1}
              max={10}
              value={headcountNeeded}
              onChange={(e) => setHeadcountNeeded(Number(e.target.value))}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Priority Level
            </label>
            <select
              value={priority}
              onChange={(e: any) => setPriority(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            >
              <option value="Critical">Critical</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
              Target Deadline
            </label>
            <input
              type="date"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--focus-ring)]"
            />
          </div>
        </div>

        {/* Required Skills Table */}
        <div className="pt-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)]">
              Required Competencies & Weights
            </span>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={handleAddSkill}
              className="text-[var(--accent)]"
            >
              <Plus className="w-3.5 h-3.5 mr-1" /> Add Skill
            </Button>
          </div>

          <div className="space-y-2.5">
            {requiredSkills.map((req, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-[var(--bg-surface-secondary)] border border-[var(--border-subtle)]"
              >
                <select
                  value={req.skillId}
                  onChange={(e) => {
                    const sk = skills.find((s) => s.id === e.target.value);
                    if (sk) {
                      setRequiredSkills((prev) =>
                        prev.map((item, i) =>
                          i === idx ? { ...item, skillId: sk.id, skillName: sk.name } : item
                        )
                      );
                    }
                  }}
                  className="flex-1 bg-transparent text-sm font-medium text-[var(--text-primary)] focus:outline-none"
                >
                  {skills.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.name}
                    </option>
                  ))}
                </select>

                <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                  <span>Min Level:</span>
                  <select
                    value={req.minProficiency}
                    onChange={(e) => {
                      const val = Number(e.target.value) as SkillProficiency;
                      setRequiredSkills((prev) =>
                        prev.map((item, i) => (i === idx ? { ...item, minProficiency: val } : item))
                      );
                    }}
                    className="px-2 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-medium text-[var(--text-primary)]"
                  >
                    {[1, 2, 3, 4, 5].map((lvl) => (
                      <option key={lvl} value={lvl}>
                        L{lvl}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1.5 text-xs text-[var(--text-secondary)]">
                  <span>Weight:</span>
                  <select
                    value={req.weight}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setRequiredSkills((prev) =>
                        prev.map((item, i) => (i === idx ? { ...item, weight: val } : item))
                      );
                    }}
                    className="px-2 py-1 rounded-lg bg-[var(--bg-surface)] border border-[var(--border-subtle)] font-medium text-[var(--text-primary)]"
                  >
                    {[1, 2, 3, 4, 5].map((w) => (
                      <option key={w} value={w}>
                        {w}x
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveSkill(idx)}
                  className="p-1 text-[var(--text-tertiary)] hover:text-[var(--status-danger)] transition-colors"
                  aria-label="Remove skill"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end gap-3 pt-4 border-t border-[var(--border-subtle)]">
          <Button type="button" variant="ghost" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit" variant="primary">
            Run AI Matching Engine
          </Button>
        </div>
      </form>
    </Modal>
  );
};
