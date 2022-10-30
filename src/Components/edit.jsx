import {Form, Button} from "react-bootstrap"
import React from "react"
import { useState } from "react"
import{db} from "../firebase/Config";
import {doc, updateDoc, serverTimestamp} from "firebase/firestore";

const Edit = (props)=> {
    const [topic, setTopic] = useState(props.info.topic);
    const [todo, setTodo] = useState(props.info.todo);
    
    const [id, setId] = useState(props.info.id);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      let info = {
        topic,
        todo,
        
        id,
        timestamp: serverTimestamp(),
      };
      try {
        const docRef = doc(db, "todos", info.id);
        await updateDoc(docRef, info);
      } catch (error) {
        console.log(error );
      }
  
      setTopic("");
      setTodo("");
      
      setId("");
      props.close();
    };
  
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="Topic">
            <Form.Label>Topic</Form.Label>
            <Form.Control
              type="topic"
              placeholder="Enter your Topic"
              value={topic}
              onChange={(e) => {
                setTopic(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group classname="mb-3" controlId="todo">
            <Form.Label>todo</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your todo"
              value={todo}
              onChange={(e) => {
                setTodo(e.target.value);
              }}
            />
          </Form.Group>
  
          
          <Button onClick={handleSubmit} classvariant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
}

export default Edit;