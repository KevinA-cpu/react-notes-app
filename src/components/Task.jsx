import { useState } from "react";
import EditTask from "./EditTask";
import { MdDeleteForever, MdEdit } from "react-icons/md";

const Task = ({
  id,
  title,
  content,
  date,
  status,
  handleDeleteTask,
  handleEditTask,
}) => {
  const [edit, setEdit] = useState(false);

  return (
    <>
      {edit ? (
        <EditTask
          id={id}
          setEdit={setEdit}
          handleEditTask={handleEditTask}
          title={title}
          content={content}
        />
      ) : (
        <div className="task" id={id}>
          <span>{title}</span>
          <span>{content}</span>
          <div className="task-footer">
            <small>{date}</small>
            <small>{status}</small>
            <MdEdit className=" " size="1.3em" onClick={() => setEdit(true)} />
            <MdDeleteForever
              onClick={() => handleDeleteTask(id)}
              className="delete-icon"
              size="1.3em"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
