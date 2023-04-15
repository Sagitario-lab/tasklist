import React from "react";
import { useState } from "react";
import "../Css/TaskList.css";

export function TaskList() {
  const [taskList, setTaskList] = useState([]);

  const completed = {
    backgroundColor: "green",
  };
  const completedLine = {
    position: "relative",
    top: "12px",
    border: "2px solid black",
    borderTop: "none",
  };
  const incompleted = {
    backgroundColor: "red",
  };

  const addTask = (e) => {
    e.preventDefault();
    let task = e.target.task.value;
    let fullTask = {
      tarea: task,
      status: false,
    };
    setTaskList([...taskList, fullTask]);
  };

  const updateTask = (e) => {
    const newTaskList = taskList.map((task) => {
      if (task.tarea === e.tarea) {
        const updatedTask = { ...task, status: !e.status };
        return updatedTask;
      }
      return task;
    });
    setTaskList(newTaskList);
  };

  const deleteTask = (e) => {
    const newList = taskList.filter((task) => {
      return e.tarea !== task.tarea;
    });
    setTaskList(newList);
  };

  return (
    <div className="general-cont">
      <div className="task-form-cont">
        <form onSubmit={addTask} className="form-cont">
          <input
            type="text"
            placeholder="Task..."
            name="task"
            className="form"
          ></input>
          <button type="submit" className="add-btn">
            Add
          </button>
        </form>
        <div className="task-cont">
          {taskList.map((tasks) => {
            return (
              <div key={tasks.tarea} className="task">
                <button
                  onClick={() => {
                    updateTask(tasks);
                  }}
                  style={tasks.status ? completed : incompleted}
                  className="asd"
                >
                  <div style={tasks.status ? completedLine : incompleted}></div>
                  {tasks.tarea}
                </button>
                <button
                  onClick={() => {
                    deleteTask(tasks);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default TaskList;
