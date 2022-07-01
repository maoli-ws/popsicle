import { withAuthenticator } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import Badge from "react-bootstrap/Badge";
import Item from "../components/Item";
import Layout from "../components/Layout";
import { ListProducts } from "../src/models";
import styles from "../styles/Home.module.css";

function Stock() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    fetchItems();
    async function fetchItems() {
      const itemData = (await DataStore.query(ListProducts)).sort((a, b) =>
        a.Flavor.Name.localeCompare(b.Flavor.Name)
      );
      setItems(itemData);
      let productTotal = 0;
      Object.keys(itemData).map((item, i) => {
        productTotal += itemData[item].quantity;
      });
      setTotal(productTotal);
    }
    const subscription = DataStore.observe(ListProducts).subscribe(() =>
      fetchItems()
    );
    return () => subscription.unsubscribe();
  }, []);

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
        <Badge pill bg="secondary" className={styles.badge}>
          {total}
        </Badge>
      </h1>
      <ListGroup>{list}</ListGroup>
    </Layout>
  );
}

export default withAuthenticator(Stock);
