import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react'


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


  // delete tasks

  const deleteTask = (id) => {
    // console.log('delete task', id)
    setTasks(tasks.filter((task) => (task.id !== id)))


  }


  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} />
        : "No Tasks To Show"}

    </div>
  );
}

export default App;
