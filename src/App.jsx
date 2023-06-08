import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import TasksList from "./components/TasksList";
import Search from "./components/Search";
//try and use zustand

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: "First task",
      content: "This is my first task!",
      date: "15/04/2021",
      status: "pending",
    },
    {
      id: nanoid(),
      title: "Second task",
      content: "This is my second task!",
      date: "21/04/2021",
      status: "pending",
    },
    {
      id: nanoid(),
      title: "Third task",
      content: "This is my third task!",
      date: "28/04/2021",
      status: "pending",
    },
    {
      id: nanoid(),
      title: "Fourth task",
      content: "This is my new task!",
      date: "30/04/2021",
      status: "pending",
    },
  ]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("react-tasks-app-data"));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-tasks-app-data", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, content) => {
    const date = new Date();
    const newTask = {
      id: nanoid(),
      title: title,
      content: content,
      date: date.toLocaleDateString(),
      status: "pending",
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const editTask = (id, title, content) => {
    const editedTaskList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title, content: content };
      }
      return task;
    });
    setTasks(editedTaskList);
  };

  return (
    <div>
      <div className="container">
        <div className="header">
          <h1>Tasks</h1>
        </div>
        <Search handleSearchTask={setSearchText} />
        <TasksList
          tasks={tasks.filter((task) =>
            task.content.toLowerCase().includes(searchText)
          )}
          handleAddTask={addTask}
          handleDeleteTask={deleteTask}
          handleEditTask={editTask}
        />
      </div>
    </div>
  );
};

export default App;
