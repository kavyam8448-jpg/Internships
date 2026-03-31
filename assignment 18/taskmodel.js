let tasks = [
  { id: 1, title: "Learn MVC", description: "Understand structure", status: "pending" },
  { id: 2, title: "Refactor API", description: "Apply MVC pattern", status: "completed" }
];

const getAllTasks = () => tasks;

const getTaskById = (id) => tasks.find(t => t.id == id);

const addTask = (task) => {
  const newTask = { id: tasks.length + 1, ...task };
  tasks.push(newTask);
  return newTask;
};

const updateTask = (id, updatedData) => {
  const task = tasks.find(t => t.id == id);
  if (!task) return null;

  Object.assign(task, updatedData);
  return task;
};

const deleteTask = (id) => {
  const index = tasks.findIndex(t => t.id == id);
  if (index === -1) return false;

  tasks.splice(index, 1);
  return true;
};

module.exports = {
  getAllTasks,
  getTaskById,
  addTask,
  updateTask,
  deleteTask
};