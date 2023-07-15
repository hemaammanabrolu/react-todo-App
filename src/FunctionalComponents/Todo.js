import * as React from 'react';
import AddTodo from './Addtodo';
import TodoList from './Todolist';

const Todo = ()=>{
    const [todoList, setTodoList] = React.useState([]);

    const updateTodoState = (todoText)=>{
        setTodoList([...todoList, {
            id: Date.now(),//1. Math.random()//2. todoList.length+1
            todo: todoText,
            status: 1
        }]);
    }

    const markAsDone = (id)=>{
        // update state corresponding to this id - change the status
        //1 - not done, 2 - done, 3 - delete
        const temp = todoList.map(el=>{
          if(el.id === id){
            return {...el, status: 2}
          }else{
            return el;
          }
        })
        setTodoList(temp);

    }

    return (
        <div className='todo-main'>
            <AddTodo update={updateTodoState} />
            <TodoList todoList={todoList} markAsDone={markAsDone} />
        </div>
    );
}
export default Todo;