import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // Load tasks from localStorage on mount
  useEffect(() => {
    const savedTasks = localStorage.getItem("todo");
    if (savedTasks) {
      setTaskList(JSON.parse(savedTasks));
    }
  }, []);

  // Update localStorage whenever taskList changes
  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(taskList));
  }, [taskList]);

  // Add a new task
  const handleTaskAdd = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;

    // ✅ Check for duplicate task
    if (
      taskList.some((t) => t.text.toLowerCase() === task.trim().toLowerCase())
    ) {
      alert("Duplicate Task");
      return;
    }
    const newTask = {
      id: uuidv4().slice(0, 8),
      text: task,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
    setTask("");
  };

  // Delete a task
  const handleDelete = (id) => {
    const updatedTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(updatedTaskList);
  };

  // Delete all tasks
  const handleDeleteALL = () => {
    if (window.confirm("Are you sure to delete all Tasks?")) {
      setTaskList([]);
      localStorage.removeItem("todo");
    }
  };

  // Toggle task completion status
  const handleToggleComplete = (id) => {
    const updatedTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTaskList(updatedTaskList);
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-2xl font-semibold text-gray-800 text-center mb-4">
          To-Do List
        </h1>

        {/* Input Form */}
        <form onSubmit={handleTaskAdd} className="flex gap-2">
          <input
            type="text"
            className="flex-grow p-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-all"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <ul className="mt-4 space-y-2">
          {taskList.length === 0 ? (
            <p className="text-center text-gray-500">
              No tasks yet. Start adding some!
            </p>
          ) : (
            taskList.map((task) => (
              <li
                key={task.id}
                className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200 rounded-lg shadow-sm"
              >
                <div className="flex items-center gap-3">
                  {/* Checkbox for marking completion */}
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleComplete(task.id)}
                    className="w-5 h-5 accent-blue-500"
                  />
                  <span
                    className={`text-gray-800 ${
                      task.completed ? "text-gray-400 line-through" : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition-all"
                  onClick={() => handleDelete(task.id)}
                >
                  Delete
                </button>
              </li>
            ))
          )}
        </ul>

        {/* Clear All Button */}
        {taskList.length > 0 && (
          <button
            onClick={handleDeleteALL}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-3 rounded-lg transition-all w-full"
          >
            Clear All
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
