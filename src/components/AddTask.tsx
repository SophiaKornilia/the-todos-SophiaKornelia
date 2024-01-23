import { ChangeEvent, useState } from "react";

interface IAddTaskProps {
    addTask: (theNewTask: string) => void; 
}

export const AddTask = (props: IAddTaskProps) => {
    const [newTaskName, setNewTaskName] = useState(""); 

        const handleClick = () => {
            props.addTask(newTaskName); 
        }

        const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
            setNewTaskName(e.target.value)
        }
    return ( 
        <>
        <input type="text" value={newTaskName} onChange={handleChange} />
        <button onClick={handleClick}>Save</button>
            </>
    )
}