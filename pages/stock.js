import {
  ListGroup,
  Col,
  Button,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Layout from "../components/Layout";
import Item from "../components/Item";

export default function Stock() {
  const popsicles = [
    {
      flavor: "limon",
      value: 5,
    },
    {
      flavor: "galleta",
      value: 8,
    },
  ];
  const list = popsicles.map((item) => {
    return (
        <ListGroup.Item key={item.flavor}>
          <Item stock value={item.value} flavor={item.flavor}></Item>
        </ListGroup.Item>
    );
  })
  return (
    <Layout>
      <ListGroup>
        {list}
      </ListGroup>
    </Layout>
  );
}
