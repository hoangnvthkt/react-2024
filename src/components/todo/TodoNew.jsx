const TodoNew = (props) => {
    console.log("check props", props)
    const { addNewtodo } = props
    const handleOnchange = (event) => {
        console.log("hello", event)
    }
    return (
        <div className='todo-new'>
            <input
                onChange={(event) => {
                    handleOnchange(event.target.value)
                }}
                type='text' />
            <button
                style={{ cursor: "pointer" }}
                onClick={addNewtodo}>Add</button>
        </div>
    )

}
export default TodoNew;