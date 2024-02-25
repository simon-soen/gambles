import React, { useState } from 'react';

const ToDoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [allCompleted, setAllCompleted] = useState(false);

  const handleAddTask = () => {
    if (task.trim() !== '') {
      alert('Data Saved: Your gambling data has been successfully saved.');
      setTasks([...tasks, { id: tasks.length + 1, title: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTaskCompletion = id => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
    setAllCompleted(updatedTasks.every(task => task.completed));
  };

  const toggleAllCompletion = () => {
    const updatedTasks = tasks.map(task => ({ ...task, completed: !allCompleted }));
    setTasks(updatedTasks);
    setAllCompleted(!allCompleted);
  };

 
  //   <div onClick={() => toggleTaskCompletion(item.id)} style={{ display: 'flex', alignItems: 'center', marginBottom: 5 }}>
  //     <div style={{ display: 'flex', alignItems: 'center', marginRight: 10 }}>
  //       <div onClick={() => toggleTaskCompletion(item.id)} style={{ cursor: 'pointer' }}>
  //         {item.completed ? '✓' : '○'}
  //       </div>
  //     </div>
  //     <div style={{ fontFamily: 'sans-serif', fontSize: 16 }}>{item.title}</div>
  //   </div>
  // );

  return (
    <div style={StyleSheet.container}>
      <h2 style={StyleSheet.title}>
        Did you know a daily to-do list can be a powerful weapon against gambling urges
      </h2>
      <input
        style={styles.input}
        placeholder="Add task"
        value={task}
        onChange={e => setTask(e.target.value)}
        onClick={e => {
          if (e.key === 'Enter') handleAddTask();
        }}
      />
      <button onClick={handleAddTask} style={styles.button}>
        Add
      </button>
      <button onClick={toggleAllCompletion} style={styles.button}>
        {allCompleted ? 'Mark All Incomplete' : 'Mark All Complete'}
      </button>
      {tasks.map((item, index) => (
        <div key={index} style={styles.taskContainer}>
          <div onClick={() => toggleTaskCompletion(item.id)} style={{ cursor: 'pointer', fontSize: 30 }}>
            {item.completed ? '✓' : '○'}
          </div>
          <div style={styles.text}>
            {item.title}
          </div>
        </div>
      ))}
    </div>
  );
};
const styles = {
    container: {
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        marginBottom: 20,
      },
      title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      inputContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 20,
      },
      input: {
        flex: 1,
        height: 40,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
      },
      button: {
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: 5,
        marginBottom: 10,
        cursor: 'pointer',
      },
      taskContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: 5,
      },
      checkbox: {
        cursor: 'pointer',
        marginRight: 10,
      },
      text: {
        fontFamily: 'sans-serif',
        fontSize: 20,
        fontWeight: 'bold'
      },
}
export default ToDoList;
