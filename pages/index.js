import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { Button, ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import { GoogleAd } from "../components/GoogleAd";
import Item from "../components/Item";
import Layout from "../components/Layout";
import { ListProducts } from "../src/models";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
    async function fetchItems() {
      const itemData = (await DataStore.query(ListProducts)).sort((a, b) =>
        a.Flavor.Name.localeCompare(b.Flavor.Name)
      );
      setItems(itemData);
    }
    const subscription = DataStore.observe(ListProducts).subscribe(() =>
      fetchItems()
    );
    return () => subscription.unsubscribe();
  }, [setItems]);

  const list = items.map((item) => {
    return (
      item.quantity > 0 && (
        <ListGroup.Item key={item.id}>
          <Item list flavor={item.Flavor.Name} quantity={item.quantity}></Item>
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
                href="https://api.whatsapp.com/send?phone=7774482486&text=¡Hola!%20Quiero%20pedir%20unas%20paletas%20🥵"
              >
                <Image
                  width={"20px"}
                  fluid
                  src="whatsapp.png"
                  alt="Pide por whatsapp"
                ></Image>
                Pide tus paletas
              </Button>
            </div>
          </Card.Footer>
        </Card>
      </div>
      <GoogleAd />
    </Layout>
  );
}
