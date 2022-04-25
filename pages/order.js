import { ListGroup } from "react-bootstrap";
import Layout from "../components/Layout";
import Item from "../components/Item";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Products } from "../src/models";

function Order() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItems();
    async function fetchItems() {
      const itemData = (await DataStore.query(Products)).sort((a, b) => a.Flavor.Name.localeCompare(b.Flavor.Name) );
      setItems(itemData);
    }
    const subscription = DataStore.observe(Products).subscribe(() =>
      fetchItems()
    );
    return () => subscription.unsubscribe();
  }, [setItems]);

  
  const list = items.map((item) => {
    return (
      <ListGroup.Item key={item.Flavor.Name}>
        <Item order value={item.quantity} flavor={item.Flavor.Name}></Item>
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

export default withAuthenticator(Order);