import { useState, useEffect } from "react";
import { DataStore, Predicates, SortDirection } from "aws-amplify";
import { Button, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Item from "../components/Item";
import Layout from "../components/Layout";
import styles from "../styles/Home.module.css";
import { Products } from "../src/models";

export default function Home() {
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
      item.quantity > 0 && (
        <ListGroup.Item key={item.flavor}>
          <Item list flavor={item.flavor} quantity={item.quantity}></Item>
        </ListGroup.Item>
      )
    );
  });

  return (
    <Layout home>
      <h1 className={styles.title}>Paletas de Hielo Maoli</h1>
      <div className={styles.container}>
        <Card style={{ width: "18rem" }} className="text-center">
          <Card.Header>
            <div className="d-grid gap-2">Sabores disponibles</div>
          </Card.Header>
          <ListGroup variant="flush">{list}</ListGroup>
          <Card.Footer>
            <div className="d-grid gap-2">
              <Button
                variant="success"
                size="lg"
                href="https://api.whatsapp.com/send?phone=525554058740&text=Hola!%20Quiero%20paletas"
              >
                Pide tus paletas
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
    </Layout>
  );
}
