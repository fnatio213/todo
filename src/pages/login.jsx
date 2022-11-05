import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Provider } from "react-redux";
import { signInWithEmailAndPassword,
    GoogleAuthProvider,
    signINWithPopup
 } from "../firebase/auth";
 import{auth } from "../firebase/Config"
 import { useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const provider = new GoogleAuthProvider()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const todo = await signInWithEmailAndPassword(auth, email, password)
      navigate("/", {replace:true})
      console.log(todo);

    }
    catch (e) {
      console.log(e);
    }

    setEmail("");
    setPassword("");
    };

    const googleauth = async (e) => {
        e.preventDefault
        try {
            const setPassword = await signINWithPopup(auth, provider);
            navigate("/")
        }
        catch (error) {
            console.log(error)
        }

        setEmail("");
        setPassword("");
    }
    


  return (
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="Name">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordo">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your password #"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Group>

        
        <Button onClick={handleSubmit} classvariant="primary" type="submit">
          Login
        </Button>
        <Button onClick={googleauth}>Sign in with google</Button>
      </Form>
    </div>
  );}
 