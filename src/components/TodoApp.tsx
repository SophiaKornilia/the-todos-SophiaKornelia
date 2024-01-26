import { useState } from "react";
import { TaskPresentation } from "./TaskPresentation";
import { Task } from "../models/Task";
import { AddTask } from "./AddTask";
import { RemoveTask } from "./RemoveTask";

export const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>(
    JSON.parse(
      localStorage.getItem("task") ||
        JSON.stringify([new Task("Diska", false), new Task("Tvätta", false)])
    )
  );

  const addANewTask = (theNewTask: string) => {
    setTasks([...tasks, new Task(theNewTask, false)]);
  };

  const handleSort = () => {
    setTasks([...tasks].sort((a, b) => a.taskName.localeCompare(b.taskName)));
  };

  const removeTask = (taskName: string) => {
    setTasks(tasks.filter((task) => task.taskName !== taskName));
  };

  const taskDone = (task: string) => {
    //denna funktionen ska ändra checkboxen till checked eller unchecked.
    setTasks(
      tasks.map((aTask) => {
        if (aTask.taskName === task) {
          return { ...aTask, isDone: !aTask.isDone };
        } else {
          return aTask;
        }
      })
    );
  };

  localStorage.setItem("task", JSON.stringify(tasks));

  return (
    <>
      <h1>Todolist</h1>
      <AddTask addTask={addANewTask} /> <br />
      <button onClick={handleSort}>Sort list</button>
      <ul>
        {tasks.map((aTask) => {
          // skickar in ett Task objekt som jag döpt variabeln till aTask
          return (
            <li key={aTask.taskName}>
              <div id="list-btn-style">
                
                <TaskPresentation
                  oneTask={aTask}
                  doTask={taskDone}
                  key={aTask.taskName}
                />
                <RemoveTask removeATask={() => removeTask(aTask.taskName)} />
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};
