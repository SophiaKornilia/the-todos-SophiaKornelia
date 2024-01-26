import { ChangeEvent, FormEvent, useState } from "react";

interface IAddTaskProps {
  addTask: (theNewTask: string) => void;
}

export const AddTask = (props: IAddTaskProps) => {
  const [newTaskName, setNewTaskName] = useState("");

  const handleClick = (e: FormEvent) => {
    e.preventDefault(); // Förhindrar att sidan laddas om när jag lägger till
    props.addTask(newTaskName);
    setNewTaskName("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTaskName(e.target.value);
  };
  return (
    <form>
      <input type="text" value={newTaskName} onChange={handleChange} placeholder="New task" id="input"/>
      <button onClick={handleClick}>Save</button>
    </form>
  );
};
