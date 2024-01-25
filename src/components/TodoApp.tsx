import { useEffect, useState } from "react";
import { TaskPresentation } from "./TaskPresentation";
import { Task } from "../models/Task";
import { AddTask } from "./AddTask";
import { RemoveTask } from "./RemoveTask";
// import { LocalStorageService } from "../LocalStorageService";

export const TodoApp = () => {
    const [tasks, setTasks] = useState<Task[]>(
        JSON.parse(localStorage.getItem("task") || "[]")
    );

    // setTasks([...tasks,new Task("Diska", false),new Task("Tvätta", false) ]);
    if (tasks.length === 0) {
        localStorage.setItem("task", JSON.stringify([...tasks, new Task("Diska", false), new Task("Tvätta", false)]));
    }

    // const saveInLocalStorage = () => {
    //     localStorage.setItem("task", JSON.stringify(tasks));  <--------
    // }

    useEffect(() => {
        localStorage.setItem("task", JSON.stringify(tasks));
    }, [tasks]);

    const addANewTask = (theNewTask: string) => {
        setTasks([...tasks, new Task(theNewTask, false)]);
        // saveInLocalStorage()
        // const updatedTasks = [...tasks, new Task(theNewTask, false)] 
        // setTasks(updatedTasks);
        // localStorage.setItem("task", JSON.stringify(updatedTasks));
    }

    const handleSort = () => {
        setTasks([...tasks].sort((a, b) => a.taskName.localeCompare(b.taskName)))
        // saveInLocalStorage()
    }

    const removeTask = (taskName: string) => {
        setTasks(tasks.filter((task) => task.taskName !== taskName));
        // saveInLocalStorage()
    }

    const taskDone = (task: string) => {
        //denna funktionen ska ändra checkboxen till checked eller unchecked. 
        setTasks(
            tasks.map((aTask) => {
                if (aTask.taskName === task) {
                    return { ...aTask, isDone: !aTask.isDone }
                } else {
                    return aTask;
                }
            }));
            // saveInLocalStorage()
    }

    return <>
        <h1>Todolist</h1>
        <AddTask addTask={addANewTask} /> <br />
        <button onClick={handleSort}>Sort list</button>

        <ul>
            {tasks.map((aTask) => { // skickar in ett Task objekt som jag döpt variabeln till aTask
                return (<>
                    <li>
                        <TaskPresentation oneTask={aTask} doTask={taskDone} key={aTask.taskName} />
                        <RemoveTask removeATask={() => removeTask(aTask.taskName)} />
                    </li>
                </>
                )
            })}
        </ul>
    </>
}