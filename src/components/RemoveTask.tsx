interface IRemoveTask {
    removeATask: (taskName:string) => void; 
}

export const RemoveTask = (props: IRemoveTask) => {
    const handleRemove = () => {
        props.removeATask(""); //Är det ett okej sätt att göra det på?

    }

    return (
        <>
           <button onClick={handleRemove}>Remove task</button>
        </>
    )
}

