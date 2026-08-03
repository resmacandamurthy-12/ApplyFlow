import express from "express";

import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../controllers/applicationController.js";

const router = express.Router();

// GET all applications
router.get("/", getApplications);

// POST new application
router.post("/", createApplication);

// UPDATE application
router.put("/:id", updateApplication);

// DELETE application
router.delete("/:id", deleteApplication);

export default router;
