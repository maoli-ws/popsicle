// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { ListProducts, Flavor, Kardex, Item, Order, SalesRecord, User } = initSchema(schema);

export {
  ListProducts,
  Flavor,
  Kardex,
  Item,
  Order,
  SalesRecord,
  User
};