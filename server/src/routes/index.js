import { Router } from 'express';
import profile from '../data/profile.js';
import experience from '../data/experience.js';
import projects from '../data/projects.js';
import skills from '../data/skills.js';
import education from '../data/education.js';

const router = Router();

router.get('/profile', (_req, res) => res.json(profile));
router.get('/experience', (_req, res) => res.json(experience));
router.get('/projects', (_req, res) => res.json(projects));
router.get('/skills', (_req, res) => res.json(skills));
router.get('/education', (_req, res) => res.json(education));

export default router;
