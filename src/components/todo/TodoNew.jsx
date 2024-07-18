const TodoNew = (props) => {
    console.log("check props", props)
    const { addNewtodo } = props
    return (
        <div className='todo-new'>
            <input type='text' />
            <button onClick={() => addNewtodo()}>Add</button>
        </div>
    )

}
export default TodoNew;