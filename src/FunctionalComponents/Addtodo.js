import * as React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const AddTodo = ({update})=>{
    const [todo, setTodo] = React.useState('');
    
    const onSave = ()=>{
        update(todo);
        setTodo('');
    }

    const onChangeHandler = (e)=>{
        setTodo(e.target.value);
    }

    return (
        <>
            <InputGroup className="mb-3">
                <Form.Control
                placeholder="Your Todo Item"
                aria-describedby="basic-addon2"
                onChange={onChangeHandler}
                value={todo}
                />
                <Button onClick={onSave} variant="outline-secondary" id="button-addon2">
                    Save
                </Button>
            </InputGroup>
        </>
    );
}

export default AddTodo;