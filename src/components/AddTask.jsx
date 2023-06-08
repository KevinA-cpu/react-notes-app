import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");
  const characterLimit = 200;
  const titleChracaterLimit = 30;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setTaskContent(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    if (titleChracaterLimit - event.target.value.length >= 0) {
      setTaskTitle(event.target.value);
    }
  };

  const handleSaveClick = () => {
    if (taskContent.trim().length > 0) {
      handleAddTask(taskTitle, taskContent);
      setTaskTitle("");
      setTaskContent("");
    }
  };

  return (
    <div className="task new">
      <textarea
        rows="1"
        cols="1"
        placeholder="Add title here"
        value={taskTitle}
        onChange={handleTitleChange}
      ></textarea>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add a task..."
        value={taskContent}
        onChange={handleChange}
      ></textarea>
      <div className="task-footer">
        <small>{characterLimit - taskContent.length} Remaining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTask;
