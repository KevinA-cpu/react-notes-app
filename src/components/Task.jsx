import { useState } from 'react';
import EditTask from './EditTask';
import { MdDeleteForever, MdEdit } from 'react-icons/md';
import DatePicker from 'react-datepicker';
import { MdKeyboardArrowDown } from 'react-icons/md';
import 'react-datepicker/dist/react-datepicker.css';

const Task = ({
  id,
  title,
  content,
  date,
  status,
  handleDeleteTask,
  handleEditTask,
  handleToggleTaskStatus,
  handleSetDate,
  handleStartTask,
  handleCompletedTask,
}) => {
  const [edit, setEdit] = useState(false);
  const [day, month, year] = date.split('/');
  const startDate = new Date(year, month - 1, day);

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
        <div
          className="transform transition-transform duration-200 ease-in-out hover:scale-110 mr-[20px] mb-[20px] bg-[#fef68a] rounded-[10px] p-4 flex flex-col justify-between whitespace-pre-wrap"
          id={id}
        >
          <div className="flex flex-col mb-4">
            <span>{title}</span>
            <span>{content}</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex text-center items-center ">
              <div className="flex flex-col">
                <div className="flex items-center">
                  <DatePicker
                    className="w-24 text-center bg-[#ffc800] rounded-lg border"
                    dateFormat="dd/MM/yyyy"
                    selected={startDate}
                    onChange={(date) => handleSetDate(id, date)}
                  />
                  <MdKeyboardArrowDown className="text-2xl" />
                </div>
                <label className="mr-4 mt-2">
                  <input
                    className="mr-1"
                    type="checkbox"
                    checked={status === 'Completed'}
                    onChange={() => handleCompletedTask(id)}
                  />
                  Completed
                </label>
              </div>
              <span className="mx-2">-</span>
              <div className="flex flex-col items-center">
                <button
                  onClick={() => handleToggleTaskStatus(id)}
                  className={`min-w-[120px] text-white font-bold py-2 px-4 rounded-xl ${
                    status === 'Incomplete'
                      ? 'bg-orange-500 hover:bg-orange-600 animate-pulse'
                      : status === 'In-progress'
                      ? 'bg-yellow-500 hover:bg-yellow-600 animate-pulse'
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {status}
                </button>
                <button
                  onClick={() => handleStartTask(id)}
                  className="my-2 min-w-[120px] text-white font-bold py-2 px-4 rounded-xl bg-blue-500 hover:bg-blue-600"
                >
                  Start
                </button>
              </div>
            </div>
            <div className="flex gap-2 ml-2">
              <MdEdit
                className="cursor-pointer"
                size="1.3em"
                onClick={() => setEdit(true)}
              />
              <MdDeleteForever
                onClick={() => handleDeleteTask(id)}
                className="cursor-pointer"
                size="1.3em"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Task;
