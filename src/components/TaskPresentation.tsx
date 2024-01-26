import { Task } from "../models/Task";

interface ITaskPresentationProps {
  oneTask: Task; // här vill jag ha en task med datatypen task
  doTask: (key: string) => void; //här vill jag skicka taskdone funktionen vilket har void som datatyp
}

export const TaskPresentation = (props: ITaskPresentationProps) => {
  const handleDoneClick = () => {
    props.doTask(props.oneTask.taskName);
  };

  return (
    <>
      <p>
        <input
          type="checkbox"
          readOnly
          checked={props.oneTask.isDone}
          id="checkmarks"
        />
        {props.oneTask.taskName}
      </p>
      <button className="button" onClick={handleDoneClick}>
        Task done
      </button>
    </>
  );
};
