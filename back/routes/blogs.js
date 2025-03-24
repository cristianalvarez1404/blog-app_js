import express from "express";
import { createTask, getTasks } from "../controllers/blogs/index.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.patch("/", () => {});
router.delete("/", () => {});

export default router;
