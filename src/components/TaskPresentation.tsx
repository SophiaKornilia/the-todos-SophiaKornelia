import { Task } from "../models/Task"

//SHowBeer i Sebastians förslag. 
interface ITaskPresentationProps {
    oneTask: Task; // här vill jag ha en task med datatypen task
    doTask: (key: string) => void; //här vill jag skicka taskdone funktionen vilket har void som datatyp
}

export const TaskPresentation = (props: ITaskPresentationProps) => {
    const handleDoneClick = () => {
        props.doTask(props.oneTask.taskName);
    }



    return (
        <>
            <p>{props.oneTask.taskName}</p>
            <input type="checkbox"  checked={props.oneTask.isDone} />
            <button className="button" onClick={handleDoneClick}>Task done</button>
        </>
    )
}