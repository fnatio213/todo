import React, { useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import AllTodo from "./Components/AllTodo.jsx";
import AddTodo from "./Components/Addtodo.jsx";

import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "./firebase/Config";
import { useDispatch } from "react-redux";
import { AddNewtodo } from "./action/action";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const retrieveData = async () => {
      const q = query(collection(db, "todos"), orderBy("timestamp", "asc"));
      const subscribe = onSnapshot(q, (querySnapshot) => {
        const todosArr = [];
        querySnapshot.forEach((doc) => {
          todosArr.push(doc.data());
        });
        dispatch(AddNewtodo(todosArr));
        console.log(todosArr);
      });
    };
    retrieveData();
  }, []);

  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col>
          <AddTodo />
        </Col>
        <Col>
          <AllTodo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;

