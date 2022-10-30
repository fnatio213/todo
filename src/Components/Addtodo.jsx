import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { v4 as uuidv4 } from "uuid";
import { AddNewtodo } from "../action/action";
import { connect } from "react-redux";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/Config";

function AddTodo() {
  const [topic, setTopic] = useState("");
  const [todo, setTodo] = useState("");
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    let info = {
      topic,
      todo,
      
      id: uuidv4(),
      timestamp: serverTimestamp(),
    };
    
    try {
      await setDoc(doc(db, "todos", info.id), info);
    } catch (e) {
      console.log(e);
    }

    setTopic("");
    setTodo("");
    
  };

  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Topic</Form.Label>
          <Form.Control
            type="topic"
            placeholder="Enter your topic"
            value={topic}
            onChange={(e) => {
              setTopic(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="todo">
          <Form.Label>todo</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your todo #"
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
const mapDispatch = { AddNewtodo: AddNewtodo };

export default connect(null, mapDispatch)(AddTodo);

