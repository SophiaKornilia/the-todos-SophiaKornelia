import { useEffect, useState } from "react";
import { TaskPresentation } from "./TaskPresentation";
import { Task } from "../models/Task";
import { AddTask } from "./AddTask";
import { RemoveTask } from "./RemoveTask";

export const TodoApp = () => {
    const [tasks, setTasks] = useState<Task[]>([
        new Task("Diska", false),
        new Task("Tvätta", false),
        new Task("Tanka", false),
        new Task("Klippa gräs", false)]);

        
        const addANewTask = (theNewTask: string) => {
            setTasks([...tasks, new Task(theNewTask, false)]);
        }
        useEffect(() => {
            // Uppdatera sortTheTasks varje gång tasks förändras
            //Hur ska man göra för att den ska läsa in å, ä och ö? 
            setTasks(tasks.slice().sort((a, b) => a.taskName.localeCompare(b.taskName)));
        }, [tasks]); 

        const removeTask = (taskName:string) => {
            setTasks(tasks.filter((task) => task.taskName !== taskName));
        }
        


    const taskDone = (task: string) => {
        //denna funktionen ska ändra checkboxen till checked eller unchecked. 
        setTasks(
            tasks.map((aTask) => {
                // tasks.sort((a,b)=> a.taskName > b.taskName ? 1 : -1).map((aTask) => { //Går den att använda om jag gör om name till id och har ett number? 
                if (aTask.taskName === task) {
                    return { ...aTask, isDone: !aTask.isDone}
                } else {
                    return aTask;
                }
            }));
    }

    return <>
        <h1>Todolist</h1>
       <AddTask addTask={addANewTask}/> 
        {tasks.map((aTask) => { // skickar in ett Task objekt som jag döpt variabeln till aTask
            return ( <> 
            <TaskPresentation oneTask={aTask} doTask={taskDone} key={aTask.taskName} />
            <RemoveTask removeATask={() => removeTask(aTask.taskName)}/> 
            </>
            )
        })}
    </>
}