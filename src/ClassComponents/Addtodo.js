import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

class AddTodo extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            todo:'',
           
        }
        this.OnChangeHandler = this.OnChangeHandler.bind(this);
        this.OnSave = this.OnSave.bind(this)
    }

    OnChangeHandler(event){
        this.setState({
            todo: event.target.value,
            
        });
      }
    
      OnSave(){
        this.props.update(this.state.todo);
        this.setState({ todo: "" });        
      }
      
      


    render(){
        return(
            <>
                <InputGroup className="mb-4 ">
                    <Form.Control
                        placeholder="Todo item"
                        aria-describedby="basic-addon2"
                        onChange={this.OnChangeHandler }
                        value={this.state.todo}
                        className="rounded-0"
                        
                    />&nbsp;&nbsp;
                    <Button onClick={this.OnSave}   className="btn btn-primary rounded-0" >
                        Save
                    </Button>

                </InputGroup>
                
            </>
        )
    }
}

export default AddTodo;