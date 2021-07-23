import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import Image from "next/image";

export default function Menu() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
          <Image
            alt=""
            src="/logo-min.jpeg"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          Paletas MAOLI
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="stock">Inventario</Nav.Link>
            <Nav.Link href="order">Ventas</Nav.Link>
            <Nav.Link href="purchase">Compras</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
