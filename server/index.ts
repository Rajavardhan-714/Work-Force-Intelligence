import express, { Request, Response } from 'express';
import cors from 'cors';
import {
  getAllEmployees,
  getEmployeeById,
  saveEmployee,
  getAllProjects,
  getProjectById,
  saveProject,
  getAllSkills,
  getAllCourses,
  getAllAlerts,
  getAllRebalanceSuggestions,
  applyRebalanceStatus,
  seedDatabase,
} from './db';
import { computeTeamMatching } from './engine';
import { Project } from '../src/types';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Request logger
app.use((req, res, next) => {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`[API] ${req.method} ${req.originalUrl} -> ${res.statusCode} (${duration}ms)`);
  });
  next();
});

// --- Health Check ---
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'Workforce Intelligence API',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

// --- EMPLOYEES ---
app.get('/api/employees', (_req: Request, res: Response) => {
  try {
    const employees = getAllEmployees();
    res.json(employees);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/employees/:id', (req: Request, res: Response) => {
  try {
    const employee = getEmployeeById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/employees', (req: Request, res: Response) => {
  try {
    const employee = saveEmployee(req.body);
    res.status(201).json(employee);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/employees/:id', (req: Request, res: Response) => {
  try {
    const employee = saveEmployee({ ...req.body, id: req.params.id });
    res.json(employee);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- PROJECTS ---
app.get('/api/projects', (_req: Request, res: Response) => {
  try {
    const projects = getAllProjects();
    res.json(projects);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/api/projects/:id', (req: Request, res: Response) => {
  try {
    const project = getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.json(project);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/projects', (req: Request, res: Response) => {
  try {
    const newProject: Project = {
      ...req.body,
      id: req.body.id || `proj-${Date.now().toString(36)}`,
      currentMemberIds: req.body.currentMemberIds || [],
    };
    const saved = saveProject(newProject);
    res.status(201).json(saved);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/projects/:id', (req: Request, res: Response) => {
  try {
    const updated = saveProject({ ...req.body, id: req.params.id });
    res.json(updated);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/api/projects/:id/members', (req: Request, res: Response) => {
  try {
    const { currentMemberIds } = req.body;
    if (!Array.isArray(currentMemberIds)) {
      return res.status(400).json({ error: 'currentMemberIds must be an array of string IDs' });
    }
    const project = getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    project.currentMemberIds = currentMemberIds;
    const saved = saveProject(project);
    res.json(saved);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- SKILLS ---
app.get('/api/skills', (_req: Request, res: Response) => {
  try {
    const skills = getAllSkills();
    res.json(skills);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- COURSES ---
app.get('/api/courses', (_req: Request, res: Response) => {
  try {
    const courses = getAllCourses();
    res.json(courses);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- ALERTS ---
app.get('/api/alerts', (_req: Request, res: Response) => {
  try {
    const alerts = getAllAlerts();
    res.json(alerts);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- REBALANCE SUGGESTIONS ---
app.get('/api/rebalance-suggestions', (_req: Request, res: Response) => {
  try {
    const suggestions = getAllRebalanceSuggestions();
    res.json(suggestions);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/api/rebalance-suggestions/:id/status', (req: Request, res: Response) => {
  try {
    const { status } = req.body;
    if (!['accepted', 'rejected', 'pending'].includes(status)) {
      return res.status(400).json({ error: 'Status must be accepted, rejected, or pending' });
    }
    const result = applyRebalanceStatus(req.params.id, status);
    res.json(result);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- AI TEAM MATCHING ENGINE ---
app.post('/api/projects/:id/match', (req: Request, res: Response) => {
  try {
    const project = getProjectById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    const employees = getAllEmployees();
    const courses = getAllCourses();
    const { customMemberIds } = req.body || {};

    const matchResult = computeTeamMatching(project, employees, courses, customMemberIds);
    res.json(matchResult);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// --- RESET DATABASE TO DEMO SEED ---
app.post('/api/reset', (_req: Request, res: Response) => {
  try {
    seedDatabase(true);
    res.json({ success: true, message: 'Database reset to baseline state' });
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
});

// Start Express Server
app.listen(PORT, () => {
  console.log(`🚀 Workforce Intelligence API running on http://localhost:${PORT}`);
});

export default app;
