import Task from "./Task";
import AddTask from "./AddTask";

const TasksList = ({
  tasks,
  handleAddTask,
  handleDeleteTask,
  handleEditTask,
}) => {
  return (
    <div className="tasks-list">
      {tasks.map((task) => (
        <Task
          id={task.id}
          title={task.title}
          content={task.content}
          date={task.date}
          status={task.status}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      ))}
      <AddTask handleAddTask={handleAddTask} />
    </div>
  );
};

export default TasksList;
