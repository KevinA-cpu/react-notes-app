import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskContent, setTaskContent] = useState("");
  const [titleError, setTitleError] = useState(false);
  const characterLimit = 200;
  const titleCharacterLimit = 30;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setTaskContent(event.target.value);
    }
  };

  const handleTitleChange = (event) => {
    if (titleCharacterLimit - event.target.value.length >= 0) {
      setTaskTitle(event.target.value);
      setTitleError(false);
    }
  };

  const handleSaveClick = () => {
    if (taskTitle.trim().length > 0) {
      handleAddTask(taskTitle, taskContent);
      setTaskTitle("");
      setTaskContent("");
      setTitleError(false);
    } else {
      setTitleError(true);
    }
  };

  return (
    <div className="bg-[#74f2ce] rounded-[10px] p-4 flex flex-col justify-between whitespace-pre-wrap">
      <div className="flex">
        <textarea
          className="bg-[#74f2ce]"
          rows="1"
          cols="40"
          placeholder="Add title here"
          value={taskTitle}
          onChange={handleTitleChange}
        ></textarea>
        {titleError && (
          <span className="text-red-500 text-sm">Title cannot be empty</span>
        )}
      </div>
      <textarea
        className="bg-[#74f2ce]"
        rows="8"
        cols="10"
        placeholder="Type to add a task..."
        value={taskContent}
        onChange={handleChange}
      ></textarea>
      <div className="flex items-center justify-between">
        <small>{characterLimit - taskContent.length} Remaining</small>
        <button
          className="animate-bounce bg-gray-300 border-none rounded-lg px-2 py-1 hover:bg-gray-200 cursor-pointer"
          onClick={handleSaveClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddTask;
