// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Products, Kardex, Item, Order, SalesRecord, User } = initSchema(schema);

export {
  Products,
  Kardex,
  Item,
  Order,
  SalesRecord,
  User
};