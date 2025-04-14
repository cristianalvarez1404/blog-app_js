import express from "express";
import {
  createTask,
  deleteTask,
  editTask,
  getTasks,
} from "../controllers/blogs/index.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.post("/:id", editTask);
router.delete("/:id", deleteTask);

export default router;
