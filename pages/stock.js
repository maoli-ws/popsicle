import { ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Layout from "../components/Layout";
import Item from "../components/Item";
import { withAuthenticator } from '@aws-amplify/ui-react';
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { useState, useEffect } from "react";
import { Products } from "../src/models";
import styles from "../styles/Home.module.css";

function Stock() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetchItems();
    async function fetchItems() {
      const itemData = (await DataStore.query(Products)).sort((a, b) => a.Flavor.Name.localeCompare(b.Flavor.Name) );
      setItems(itemData);
      let productTotal = 0;
      Object.keys(itemData).map((item, i) => {
        productTotal += itemData[item].quantity;
      });
      setTotal(productTotal);
    }
    const subscription = DataStore.observe(Products).subscribe(() =>
      fetchItems()
    );
    return () => subscription.unsubscribe();
  }, [setItems, total]);

  const list = items.map((item) => {
    return (
      <ListGroup.Item key={item.Flavor.Name}>
        <Item stock value={item.quantity} flavor={item.Flavor.Name}></Item>
      </ListGroup.Item>
    );
  });
  return (
    <Layout>
      <h1>
        Inventario{" "}
        <Badge pill bg="secondary" className={styles.badge} >
          {total}
        </Badge>
      </h1>
      <ListGroup>{list}</ListGroup>
    </Layout>
  );
}

export default withAuthenticator(Stock);
