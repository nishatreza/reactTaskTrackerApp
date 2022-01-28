import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'
import AddTask from "./components/AddTask";


const App = () => {

  const [tasks, setTasks] = useState([

    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30 PM',
      reminder: true
    },

    {
      id: 2,
      text: 'Meeting at School',
      day: 'Feb 6th at 2:30 PM',
      reminder: true
    },

    {
      id: 3,
      text: 'Food Shopping',
      day: 'Dec 7th at 2:30 PM',
      reminder: false
    },

  ])

  // add task

  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, ...task }

    setTasks([...tasks, newTask])

  }

  // delete task

  const deleteTask = (id) => {
    // console.log('delete task', id)
    setTasks(tasks.filter((task) => (task.id !== id)))


  }
  // Toggle reminder

  const toggleReminder = (id) => {

    // console.log("toggle reminder", id)


    setTasks(tasks.map((task) => (task.id === id ?
      { ...task, reminder: !task.reminder } : task
    )))

  }


  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
        : "No Tasks To Show"}

    </div>
  );
}

export default App;
