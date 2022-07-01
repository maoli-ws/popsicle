import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Flavor, ListProducts } from "../src/models";

function AddItem() {
  const [show, setShow] = useState(false);
  const [flavors, setFlavors] = useState([]);
  const [flavorsList, setFlavorList] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    async function retrieveFlavors() {
      const flavors = (await DataStore.query(Flavor)).sort((a, b) =>
        a.Name.localeCompare(b.Name)
      );
      setFlavorList(flavors);
    }
    retrieveFlavors();
  }, []);

  async function addNewItem() {
    const quantity = document.getElementById("formGroupQuantity").value;
    const selectedFlavor = document.getElementById("formGroupFlavor").value;

    const flavorToUpdate = flavorsList.filter((flavor) => {
      return flavor.Name === selectedFlavor;
    });

    const original = (await DataStore.query(ListProducts)).filter(
      (p) => p.Flavor.Name === flavorToUpdate[0].Name
    );
    if (original[0]) {
      console.log("original update");
      await DataStore.save(
        ListProducts.copyOf(original[0], (updated) => {
          updated.quantity = +original[0].quantity + +quantity;
        })
      );
    } else {
      console.log("original create", flavorToUpdate);
      const saved = await DataStore.save(
        new ListProducts({
          quantity: +quantity,
          Flavor: {
            id: flavorToUpdate[0].id,
          },
        })
      );
    }
    handleClose();
  }

  const flavorsOpt = (flavor) => {
    return (
      <option key={flavor.Name} value={flavor.Name}>
        {flavor.Name}
      </option>
    );
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Agregar nuevo sabor
      </Button>

      <Modal show={show} onHide={handleClose} keyboard={false}>
        <Modal.Header>
          <Modal.Title>Agregar nuevo sabor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupFlavor">
              <Form.Label>Sabor</Form.Label>
              <Form.Select>
                <option> Selecciona un sabor </option>
                {flavorsList.map(flavorsOpt)}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupQuantity">
              <Form.Label>Cantidad</Form.Label>
              <Form.Control type="number" placeholder="Cantidad" />
            </Form.Group>
            <Button variant="primary" type="button" onClick={addNewItem}>
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

export default AddItem;
