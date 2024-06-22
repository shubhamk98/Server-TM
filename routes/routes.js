import express from "express";
import {
  createNewTask,
  deleteTask,
  editTask,
  getAllTask,
  getTaskById,
} from "../controller/Task.js";

const router = express.Router();

router.get("/task/:id", getTaskById);
router.get("/all", getAllTask);
router.post("/newTask", createNewTask);
router.delete("/dropTask/:taskId", deleteTask);
router.patch("/editTask", editTask);

export default router;