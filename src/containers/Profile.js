import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./style.css";

export default function Profile() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [username, setUsername] = useState("");


  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Profile">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="username">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            autoFocuse
            type="username"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            autoFocuse
            type="username"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            autoFocuse
            type="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        
        
        <Button block="false" size="lg" type="submit">
          LogOut
        </Button>
      </Form>
    </div>
  );
}