import { useState, useEffect } from 'react';
import TasksList from './components/TasksList';
import Search from './components/Search';
import { nanoid } from 'nanoid';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: nanoid(),
      title: 'First task',
      content: 'This is my first task!',
      date: '15/04/2021',
      status: 'Incomplete',
    },
    {
      id: nanoid(),
      title: 'Second task',
      content: 'This is my second task!',
      date: '21/04/2021',
      status: 'Incomplete',
    },
    {
      id: nanoid(),
      title: 'Third task',
      content: 'This is my third task!',
      date: '28/04/2021',
      status: 'Incomplete',
    },
    {
      id: nanoid(),
      title: 'Fourth task',
      content: 'This is my new task!',
      date: '30/04/2021',
      status: 'Incomplete',
    },
    {
      id: nanoid(),
      title: 'Fifth task',
      content: 'This is my final task!',
      date: '30/04/2021',
      status: 'Incomplete',
    },
  ]);

  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('react-tasks-app-data'));

    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-tasks-app-data', JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 min-h-screen">
      <h1 className="text-center text-4xl my-5">React tasks app</h1>
      <Search handleSearchTask={setSearchText} />

      <TasksList
        tasks={tasks.filter((task) =>
          task.status.toLowerCase().includes(searchText)
        )}
        setTasks={setTasks}
      />
    </div>
  );
};

export default App;
