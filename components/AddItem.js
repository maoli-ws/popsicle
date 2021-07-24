import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { Form, Button } from "react-bootstrap";
import { DataStore } from "aws-amplify";
import { Products } from "../src/models";

export default function AddItem() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function addNewItem() {
    const quantity = document.getElementById('formGroupQuantity').value;
    await DataStore.save(
      new Products({
        flavor: document.getElementById('formGroupFlavor').value,
        quantity: +quantity
      })
    );
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar nuevo sabor
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Agregar nuevo sabor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupFlavor">
              <Form.Label>Sabor</Form.Label>
              <Form.Control type="text" placeholder="Sabor" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupQuantity">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={addNewItem}>
              Agregar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
