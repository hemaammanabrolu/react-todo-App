import React from "react";
import AddTodo from "./Addtodo";
import TodoList from './Todolist';

class Todo extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            todoList:[ ],
            
        }
        this.updateTodoState = this.updateTodoState.bind(this);
        this.markasDone = this.markasDone.bind(this)
        this.editItem = this.editItem.bind(this)
    }

    updateTodoState(todoText){
        this.setState({
            
            todoList:[...this.state.todoList,{
                id: Date.now(),
                todo:todoText,
                status:1,
                
            }]
        });
    }

    markasDone(id){
        // console.log(id)
        const list = [...this.state.todoList]
       const temp = list.map(el=>{
            if(el.id === id){
                return { ...el, status:2}
            }else{
                return el
            }

        })
        this.setState({todoList: temp

        })
    }

    editItem (id,todo){
        const newTaskName = prompt("Updated task name", todo);
        const allTasks = Object.assign([],  [...this.state.todoList]);

        const position = allTasks.findIndex(el=>el.id === id);
        allTasks[position] = {
            id: id,
            todo: newTaskName
        };
        
        this.setState({
            todoList:allTasks

        })
    }

    // editItem(){
    //     const x = prompt("edit item")
    //     console.log(x)
    // }

    render(){
        return(
            <>
                <div className="Todo-main">
                    <AddTodo update={this.updateTodoState}/>
                    <TodoList todoList = {this.state.todoList } markasDone ={this.markasDone} editItem ={this.editItem}/>
                </div>
            </>
        )
    }
}

export default Todo;