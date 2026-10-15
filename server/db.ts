import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import {
  Employee,
  Project,
  Skill,
  TrainingCourse,
  SystemAlert,
  RebalanceSuggestion,
} from '../src/types';
import {
  INITIAL_EMPLOYEES,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_COURSES,
  INITIAL_REBALANCE_SUGGESTIONS,
  INITIAL_ALERTS,
} from '../src/api/mockData';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_PATH = path.join(__dirname, 'workforce.db');

export const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');

// Initialize schema
db.exec(`
  CREATE TABLE IF NOT EXISTS employees (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    department TEXT NOT NULL,
    status TEXT NOT NULL,
    data TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    priority TEXT NOT NULL,
    data TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS skills (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT NOT NULL,
    data TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS courses (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    data TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS rebalance_suggestions (
    id TEXT PRIMARY KEY,
    status TEXT NOT NULL,
    data TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS alerts (
    id TEXT PRIMARY KEY,
    type TEXT NOT NULL,
    data TEXT NOT NULL
  );
`);

/**
 * Seed initial data if tables are empty
 */
export function seedDatabase(force = false) {
  const empCount = (db.prepare('SELECT count(*) as count FROM employees').get() as { count: number }).count;
  
  if (empCount === 0 || force) {
    console.log('⚡ Seeding workforce database with initial records...');
    
    const clearAll = db.transaction(() => {
      db.prepare('DELETE FROM employees').run();
      db.prepare('DELETE FROM projects').run();
      db.prepare('DELETE FROM skills').run();
      db.prepare('DELETE FROM courses').run();
      db.prepare('DELETE FROM rebalance_suggestions').run();
      db.prepare('DELETE FROM alerts').run();

      const insertEmp = db.prepare('INSERT INTO employees (id, name, department, status, data) VALUES (?, ?, ?, ?, ?)');
      for (const emp of INITIAL_EMPLOYEES) {
        insertEmp.run(emp.id, emp.name, emp.department, emp.status, JSON.stringify(emp));
      }

      const insertProj = db.prepare('INSERT INTO projects (id, name, priority, data) VALUES (?, ?, ?, ?)');
      for (const proj of INITIAL_PROJECTS) {
        insertProj.run(proj.id, proj.name, proj.priority, JSON.stringify(proj));
      }

      const insertSkill = db.prepare('INSERT INTO skills (id, name, category, data) VALUES (?, ?, ?, ?)');
      for (const skill of INITIAL_SKILLS) {
        insertSkill.run(skill.id, skill.name, skill.category, JSON.stringify(skill));
      }

      const insertCourse = db.prepare('INSERT INTO courses (id, title, data) VALUES (?, ?, ?)');
      for (const course of INITIAL_COURSES) {
        insertCourse.run(course.id, course.title, JSON.stringify(course));
      }

      const insertRebalance = db.prepare('INSERT INTO rebalance_suggestions (id, status, data) VALUES (?, ?, ?)');
      for (const reb of INITIAL_REBALANCE_SUGGESTIONS) {
        insertRebalance.run(reb.id, reb.status, JSON.stringify(reb));
      }

      const insertAlert = db.prepare('INSERT INTO alerts (id, type, data) VALUES (?, ?, ?)');
      for (const alert of INITIAL_ALERTS) {
        insertAlert.run(alert.id, alert.type, JSON.stringify(alert));
      }
    });

    clearAll();
    console.log('✅ Workforce database seeded successfully.');
  }
}

// Auto-seed on startup
seedDatabase();

// --- EMPLOYEE DATA ACCESS ---
export function getAllEmployees(): Employee[] {
  const rows = db.prepare('SELECT data FROM employees').all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
}

export function getEmployeeById(id: string): Employee | null {
  const row = db.prepare('SELECT data FROM employees WHERE id = ?').get(id) as { data: string } | undefined;
  return row ? JSON.parse(row.data) : null;
}

export function saveEmployee(emp: Employee): Employee {
  const stmt = db.prepare(`
    INSERT INTO employees (id, name, department, status, data)
    VALUES (?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      department = excluded.department,
      status = excluded.status,
      data = excluded.data
  `);
  stmt.run(emp.id, emp.name, emp.department, emp.status, JSON.stringify(emp));
  return emp;
}

// --- PROJECT DATA ACCESS ---
export function getAllProjects(): Project[] {
  const rows = db.prepare('SELECT data FROM projects').all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
}

export function getProjectById(id: string): Project | null {
  const row = db.prepare('SELECT data FROM projects WHERE id = ?').get(id) as { data: string } | undefined;
  return row ? JSON.parse(row.data) : null;
}

export function saveProject(proj: Project): Project {
  const stmt = db.prepare(`
    INSERT INTO projects (id, name, priority, data)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = excluded.name,
      priority = excluded.priority,
      data = excluded.data
  `);
  stmt.run(proj.id, proj.name, proj.priority, JSON.stringify(proj));
  return proj;
}

// --- SKILLS DATA ACCESS ---
export function getAllSkills(): Skill[] {
  const rows = db.prepare('SELECT data FROM skills').all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
}

// --- COURSES DATA ACCESS ---
export function getAllCourses(): TrainingCourse[] {
  const rows = db.prepare('SELECT data FROM courses').all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
}

// --- ALERTS DATA ACCESS ---
export function getAllAlerts(): SystemAlert[] {
  const rows = db.prepare('SELECT data FROM alerts').all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
}

// --- REBALANCE DATA ACCESS ---
export function getAllRebalanceSuggestions(): RebalanceSuggestion[] {
  const rows = db.prepare('SELECT data FROM rebalance_suggestions').all() as { data: string }[];
  return rows.map((r) => JSON.parse(r.data));
}

export function getRebalanceSuggestionById(id: string): RebalanceSuggestion | null {
  const row = db.prepare('SELECT data FROM rebalance_suggestions WHERE id = ?').get(id) as { data: string } | undefined;
  return row ? JSON.parse(row.data) : null;
}

export function saveRebalanceSuggestion(sug: RebalanceSuggestion): RebalanceSuggestion {
  const stmt = db.prepare(`
    INSERT INTO rebalance_suggestions (id, status, data)
    VALUES (?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      status = excluded.status,
      data = excluded.data
  `);
  stmt.run(sug.id, sug.status, JSON.stringify(sug));
  return sug;
}

/**
 * Apply rebalance transfer transaction:
 * Updates suggestion status, adjusts hours on fromEmployee and toEmployee,
 * and updates their utilization rate and status atomically.
 */
export function applyRebalanceStatus(
  suggestionId: string,
  status: 'accepted' | 'rejected' | 'pending'
): { suggestion: RebalanceSuggestion; employees: Employee[] } {
  const sug = getRebalanceSuggestionById(suggestionId);
  if (!sug) throw new Error(`Rebalance suggestion ${suggestionId} not found`);

  const prevStatus = sug.status;
  sug.status = status;

  const transaction = db.transaction(() => {
    saveRebalanceSuggestion(sug);

    if (status === 'accepted' && prevStatus !== 'accepted') {
      const fromEmp = getEmployeeById(sug.fromEmployeeId);
      const toEmp = getEmployeeById(sug.toEmployeeId);

      if (fromEmp) {
        fromEmp.totalAssignedHours = Math.max(0, fromEmp.totalAssignedHours - sug.hours);
        fromEmp.utilizationRate = parseFloat((fromEmp.totalAssignedHours / fromEmp.weeklyCapacity).toFixed(2));
        fromEmp.status = fromEmp.utilizationRate > 1.0 ? 'overloaded' : fromEmp.utilizationRate < 0.6 ? 'underutilized' : 'healthy';
        saveEmployee(fromEmp);
      }

      if (toEmp) {
        toEmp.totalAssignedHours += sug.hours;
        toEmp.utilizationRate = parseFloat((toEmp.totalAssignedHours / toEmp.weeklyCapacity).toFixed(2));
        toEmp.status = toEmp.utilizationRate > 1.0 ? 'overloaded' : toEmp.utilizationRate < 0.6 ? 'underutilized' : 'healthy';
        saveEmployee(toEmp);
      }
    }
  });

  transaction();

  return {
    suggestion: sug,
    employees: getAllEmployees(),
  };
}
