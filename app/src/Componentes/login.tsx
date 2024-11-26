import React from "react";
import "../index"
import { Card, Container, Form, Button} from "react-bootstrap";

 function login(){

    return (
        <Container>
            <Card>
                <Card.Body>
                    <Card.Title>Login</Card.Title>

                    <Form>
                        <Form.Group>
                            <Form.Label>Ingresa tu Email</Form.Label>
                            <Form.Control name="email" as="textarea" placeholder="Ingresa tu email..."/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Ingresa tu Contraseña</Form.Label>
                            <Form.Control name="password" as="textarea" placeholder="Ingresa tu Contraseña..."/>
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
    );
 }
 export default login;