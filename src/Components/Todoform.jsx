import React from "react";
import { useState } from "react";
import { Card, Col, Button, Modal  } from "react-bootstrap";
import Edit from "./edit.jsx";
import {doc, deleteDoc} from "firebase/firestore";
import{db} from "../firebase/Config"


export default function TodoForm(
    {handleDelete, info, edit}
){
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    const deleteTodo = async () => {
        try{
            await deleteDoc(doc(db, "todos", info.id));
        }
        catch{
            console.log("error 404")
        }
    }

    return (
        <>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit Todo</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Edit
                close={handleClose}
                info = {info}
                edit= {edit}
                />
            </Modal.Body>
        </Modal>
        <Col md={2} style={{width:"15rem", marginBottom:"10px"}}>
            <Card>
                <Card.Body>
                    <Card.Title>Topic: {info.topic}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Todo: {info.todo}
                        </Card.Subtitle> 
                    <Button href="#" size="sm" variant="primary" onClick={handleShow} >
                        Edit
                        </Button>   
                      <Button href="#" size="sm" variant="danger" onClick={deleteTodo}></Button>

                </Card.Body>
            </Card>
        </Col>
        </>
    )
}