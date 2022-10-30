import React from "react";
import { Row, Container } from "react-bootstrap";
import TodoForm from "./Todoform.jsx";
import { useSelector } from "react-redux";

function AllTodo({ todoData, handleDelete, edit }) {
  const { todos } = useSelector((store) => store);

  return (
    <Container>
      <Row>
        {todos.map((todo, index) => {
          return (
            <TodoForm
              key={index}
              Info={todo}
              handleDelete={handleDelete}
              edit={edit}
            />
          );
        })}
      </Row>
    </Container>
  );
}

export default AllTodo;