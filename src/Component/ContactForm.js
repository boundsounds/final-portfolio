import React from "react";
import { Form, Button } from "react-bootstrap";
import CommissionsTable from "./CommissionsTable";
import Navigation from "./Navbar";
export const ContactForm = () => {
  return (
    <div>
      <Form className="video-txt">
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="John Doe"  />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label className="video-txt">Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Enter Message Here</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
        <Button as="input" type="submit" value="Submit" />{" "}
      </Form>
      <CommissionsTable />
    </div>
  );
};
export default ContactForm;
