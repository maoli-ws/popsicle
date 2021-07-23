import { ListGroup } from "react-bootstrap";
import Layout from "../components/Layout";
import Item from "../components/Item";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Products } from "../src/models";

export default function Order() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
    async function fetchItems() {
      const itemData = await DataStore.query(Products, Predicates.ALL, {
        sort: (s) => s.flavor(SortDirection.ASCENDING),
      });
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
        <Item order value={item.quantity} flavor={item.flavor}></Item>
      </ListGroup.Item>
    );
  });
  return (
    <Layout>
      <h1>Ventas</h1>
      <ListGroup>{list}</ListGroup>
    </Layout>
  );
}
