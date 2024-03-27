import Task from './Task';
import AddTask from './AddTask';
import { ListManager } from 'react-beautiful-dnd-grid';
import { nanoid } from 'nanoid';

const TasksList = ({ tasks, setTasks }) => {
  const addTask = (title, content) => {
    const newTask = {
      id: nanoid(),
      title: title,
      content: content,
      date: '01/01/2023',
      status: 'Incomplete',
    };
    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };

  const deleteAllCompletedTasks = () => {
    const newTasks = tasks.filter((task) => task.status !== 'Completed');
    setTasks(newTasks);
  };

  const editTask = (id, title, content) => {
    const editedTasktaskList = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, title: title, content: content };
      }
      return task;
    });
    setTasks(editedTasktaskList);
  };

  const handleStartTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: 'In-progress' };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleCompletedTask = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        if (task.status === 'Completed') {
          return { ...task, status: 'Incomplete' };
        }
        return { ...task, status: 'Completed' };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const toggleTaskStatus = (id) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        let newStatus;
        switch (task.status) {
          case 'Incomplete':
            newStatus = 'In-progress';
            break;
          case 'In-progress':
            newStatus = 'Completed';
            break;
          case 'Completed':
            newStatus = 'Incomplete';
            break;
          default:
            newStatus = 'Incomplete';
        }
        return { ...task, status: newStatus };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDragEnd = (sourceIndex, destinationIndex) => {
    // Create a copy of the list
    const taskList = [...tasks];

    // Remove the item from its original position
    const [removedItem] = taskList.splice(sourceIndex, 1);

    // Insert the item at its new position
    taskList.splice(destinationIndex, 0, removedItem);

    // Update the state with the new list
    setTasks(taskList);
  };

  const setDate = (id, date) => {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    if (day < 10) day = '0' + day;
    if (month < 10) month = '0' + month;
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, date: `${day}/${month}/${year}` };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <>
      <button
        className="bg-red-500 text-white font-bold py-2 px-4 rounded-xl mb-4"
        onClick={deleteAllCompletedTasks}
      >
        Clear Completed Tasks
      </button>
      <ListManager
        onDragEnd={handleDragEnd}
        direction="horizontal"
        maxItems={5}
        items={tasks}
        render={(task) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              content={task.content}
              date={task.date}
              status={task.status}
              handleDeleteTask={deleteTask}
              handleEditTask={editTask}
              handleToggleTaskStatus={toggleTaskStatus}
              handleSetDate={setDate}
              handleStartTask={handleStartTask}
              handleCompletedTask={handleCompletedTask}
            />
          );
        }}
      />
      <AddTask handleAddTask={addTask} />
    </>
  );
};

export default TasksList;
