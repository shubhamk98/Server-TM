import Task from "../model/Task.js";

export const getTaskById = async (req, res) => {
  const taskId = req.params.id;

  try {
    const task = await Task.findById(taskId);

    if (!task) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "task fetched successfully",
      data: task,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve task",
      error: error.message,
    });
  }
};

export const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});
    return res.status(200).json({
      success: true,
      message: "task fetched successfully",
      data: tasks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to retrieve tasks",
      error: error.message,
    });
  }
};

export const createNewTask = async (req, res) => {
  const { title, description, details, dueDate } = req.body;

  if (!title || !description || !details || !dueDate) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  const taskDueDate = new Date(dueDate);
  const today = new Date();



  try {
    const newTask = await Task.create({
      title,
      description,
      details,
      dueDate,
    });

    return res.status(200).json({
      success: true,
      message: "Task created Successfully",
      data: newTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create task",
      error: error.message,
    });
  }
};

export const deleteTask = async (req, res) => {
  const { taskId } = req.params;

  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task deleted successfully",
      data: deletedTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to delete task",
      error: error.message,
    });
  }
};

export const editTask = async (req, res) => {
  const { taskId, title, description, details, dueDate } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      taskId,
      {
        title,
        description,
        details,
        dueDate,
      },
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({
        success: false,
        message: "Task not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Task updated successfully",
      data: updatedTask,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update task",
      error: error.message,
    });
  }
};
