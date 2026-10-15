import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  writeBatch,
  query,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
import {
  Employee,
  Project,
  Skill,
  TrainingCourse,
  SystemAlert,
  RebalanceSuggestion,
} from '../types';
import {
  INITIAL_EMPLOYEES,
  INITIAL_PROJECTS,
  INITIAL_SKILLS,
  INITIAL_COURSES,
  INITIAL_ALERTS,
  INITIAL_REBALANCE_SUGGESTIONS,
} from './mockData';

export const firebaseService = {
  /**
   * Seed all initial workforce data into Firestore collections.
   * Uses writeBatch for efficient bulk insertion.
   */
  async seedFirestore(): Promise<{ success: boolean; count: number }> {
    if (!db) throw new Error('Firestore is not initialized');

    const batch = writeBatch(db);
    let count = 0;

    // 1. Employees
    for (const emp of INITIAL_EMPLOYEES) {
      const ref = doc(db, 'employees', emp.id);
      batch.set(ref, emp);
      count++;
    }

    // 2. Projects
    for (const proj of INITIAL_PROJECTS) {
      const ref = doc(db, 'projects', proj.id);
      batch.set(ref, proj);
      count++;
    }

    // 3. Skills
    for (const skill of INITIAL_SKILLS) {
      const ref = doc(db, 'skills', skill.id);
      batch.set(ref, skill);
      count++;
    }

    // 4. Courses
    for (const course of INITIAL_COURSES) {
      const ref = doc(db, 'courses', course.id);
      batch.set(ref, course);
      count++;
    }

    // 5. Alerts
    for (const alert of INITIAL_ALERTS) {
      const ref = doc(db, 'alerts', alert.id);
      batch.set(ref, alert);
      count++;
    }

    // 6. Rebalance Suggestions
    for (const sug of INITIAL_REBALANCE_SUGGESTIONS) {
      const ref = doc(db, 'rebalance_suggestions', sug.id);
      batch.set(ref, sug);
      count++;
    }

    await batch.commit();
    return { success: true, count };
  },

  /**
   * Fetch all employees from the 'employees' collection in Firestore.
   */
  async getEmployees(): Promise<Employee[]> {
    if (!db) return [];
    const q = query(collection(db, 'employees'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((d) => d.data() as Employee);
  },

  /**
   * Fetch all projects from the 'projects' collection.
   */
  async getProjects(): Promise<Project[]> {
    if (!db) return [];
    const q = query(collection(db, 'projects'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((d) => d.data() as Project);
  },

  /**
   * Fetch all skills from the 'skills' collection.
   */
  async getSkills(): Promise<Skill[]> {
    if (!db) return [];
    const q = query(collection(db, 'skills'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((d) => d.data() as Skill);
  },

  /**
   * Fetch all courses from the 'courses' collection.
   */
  async getCourses(): Promise<TrainingCourse[]> {
    if (!db) return [];
    const q = query(collection(db, 'courses'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((d) => d.data() as TrainingCourse);
  },

  /**
   * Fetch system alerts from the 'alerts' collection.
   */
  async getAlerts(): Promise<SystemAlert[]> {
    if (!db) return [];
    const q = query(collection(db, 'alerts'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((d) => d.data() as SystemAlert);
  },

  /**
   * Fetch rebalance suggestions from Firestore.
   */
  async getRebalanceSuggestions(): Promise<RebalanceSuggestion[]> {
    if (!db) return [];
    const q = query(collection(db, 'rebalance_suggestions'));
    const snapshot = await getDocs(q);
    if (snapshot.empty) return [];
    return snapshot.docs.map((d) => d.data() as RebalanceSuggestion);
  },

  /**
   * Create or update a project in Firestore.
   */
  async createProject(project: Project): Promise<Project> {
    if (!db) throw new Error('Firestore is not initialized');
    const ref = doc(db, 'projects', project.id);
    await setDoc(ref, project);
    return project;
  },

  /**
   * Update assigned team member IDs for a project.
   */
  async updateProjectMembers(projectId: string, currentMemberIds: string[]): Promise<void> {
    if (!db) return;
    const ref = doc(db, 'projects', projectId);
    await updateDoc(ref, { currentMemberIds });
  },

  /**
   * Update status of a workload rebalance proposal.
   */
  async updateRebalanceStatus(suggestionId: string, status: 'accepted' | 'rejected' | 'pending'): Promise<void> {
    if (!db) return;
    const ref = doc(db, 'rebalance_suggestions', suggestionId);
    await updateDoc(ref, { status });
  },
};
