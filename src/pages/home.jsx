import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllTodo from "./Components/AllTodo.jsx";
import AddTodo from "./Components/Addtodo.jsx";


import { auth } from "./firebase/Config";
import {signOut} from "firebase/auth";

import { AddNewtodo } from "./action/action";

function App() {
  

  const Exit = async (e) => {
    e.preventDefault();
    try{
      signOut
    }
    catch(e){
      console.log(e)
    }

  }

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <AddTodo />
        </Col>
        <Col>
          <AllTodo />
        </Col>
        < Button variant="success" onClick={Exit}>Exit</Button>
      </Row>
    </Container>
  );
}

export default App;

