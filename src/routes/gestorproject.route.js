import express from "express";
import { createGestorProject } from "../controllers/gestorProject.controller.js";

const router = express.Router();

//Create a project
router.post("/", createGestorProject);

export default router;
