import { ListGroup } from "react-bootstrap";
import Layout from "../components/Layout";
import Item from "../components/Item";
import { DataStore } from "aws-amplify";
import { useState, useEffect } from "react";
import { Products } from "../src/models";

export default function Stock() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
    async function fetchItems() {
      const itemData = await DataStore.query(Products);
      setItems(itemData);
    }
    const subscription = DataStore.observe(Products).subscribe(() =>
      fetchItems()
    );
    return () => subscription.unsubscribe();
  }, [setItems]);

  const list = items.map((item) => {
    return (
      <ListGroup.Item key={item.flavor}>
        <Item stock value={item.quantity} flavor={item.flavor}></Item>
      </ListGroup.Item>
    );
  });
  return (
    <Layout>
      <h1>Existencias</h1>
      <ListGroup>{list}</ListGroup>
    </Layout>
  );
}
