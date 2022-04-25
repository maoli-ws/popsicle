// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Flavor, Products, Kardex, Item, Order, SalesRecord, User } = initSchema(schema);

export {
  Flavor,
  Products,
  Kardex,
  Item,
  Order,
  SalesRecord,
  User
};