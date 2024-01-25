interface IRemoveTask {
  removeATask: () => void;
}

export const RemoveTask = (props: IRemoveTask) => {
  const handleRemove = () => {
    props.removeATask();
  };

  return (
    <>
      <button onClick={handleRemove}>Remove task</button>
    </>
  );
};
