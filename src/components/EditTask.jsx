import { useState } from "react";

const EditTask = ({ id, title, content, setEdit, handleEditTask }) => {
  const [taskTitle, setTaskTitle] = useState(title);
  const [taskContent, setTaskContent] = useState(content);
  const [titleError, setTitleError] = useState(false);
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
      setTitleError(false);
    }
  };

  const handleSaveClick = () => {
    if (taskTitle.trim().length > 0) {
      handleEditTask(id, taskTitle, taskContent);
      setEdit(false);
      setTitleError(false);
    } else {
      setTitleError(true);
    }
  };

  return (
    <div className="mr-[20px] mb-[20px] w-[352px] bg-[#ffc800] rounded-[10px] p-4 flex flex-col justify-between whitespace-pre-wrap">
      {titleError && (
        <span className="text-red-500 text-sm">Title cannot be empty</span>
      )}
      <textarea
        className="bg-[#ffc800]"
        rows="1"
        cols="1"
        placeholder="Add title here"
        value={taskTitle}
        onChange={handleTitleChange}
      ></textarea>
      <textarea
        className="bg-[#ffc800] "
        rows="6"
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

export default EditTask;
