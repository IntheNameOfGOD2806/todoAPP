import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import React from "react";

import InputGroup from 'react-bootstrap/InputGroup';
function Example(props: any) {
  const [show, setShow] = useState(false);
  const[title, setTitle] = useState<string>("");
  useEffect(() => {
    setShow(props.openModal);
  }, [props.openModal]);
  const handleClose = () => {
    props.setOpenModal(false);
  };

 
  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>CHANGE TODO TITLE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">Title:</InputGroup.Text>
        <Form.Control
          onChange={(e:any) => setTitle(e.target.value)}
          placeholder="Title..."
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button  variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button  variant="primary" onClick={
             ()=>{
               props.handleEditTodo(title);
               handleClose();
             }
           }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
