import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type FlavorMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type KardexMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ItemMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type OrderMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type SalesRecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Flavor {
  readonly id: string;
  readonly Name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Flavor, FlavorMetaData>);
  static copyOf(source: Flavor, mutator: (draft: MutableModel<Flavor, FlavorMetaData>) => MutableModel<Flavor, FlavorMetaData> | void): Flavor;
}

export declare class Products {
  readonly id: string;
  readonly quantity?: number;
  readonly Flavor?: Flavor;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Products, ProductsMetaData>);
  static copyOf(source: Products, mutator: (draft: MutableModel<Products, ProductsMetaData>) => MutableModel<Products, ProductsMetaData> | void): Products;
}

export declare class Kardex {
  readonly id: string;
  readonly initialQuantity?: number;
  readonly finalQuantity?: number;
  readonly movementType?: string;
  readonly Item?: Item;
  readonly movementDate?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Kardex, KardexMetaData>);
  static copyOf(source: Kardex, mutator: (draft: MutableModel<Kardex, KardexMetaData>) => MutableModel<Kardex, KardexMetaData> | void): Kardex;
}

export declare class Item {
  readonly id: string;
  readonly name?: string;
  readonly description?: string;
  readonly price?: number;
  readonly price2?: number;
  readonly cost?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Order {
  readonly id: string;
  readonly dateTimeOrder: string;
  readonly totalSale?: number;
  readonly SalesRecords?: (SalesRecord | null)[];
  readonly userID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class SalesRecord {
  readonly id: string;
  readonly itemQuantity: number;
  readonly actualSale?: number;
  readonly orderID?: string;
  readonly Item?: Item;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<SalesRecord, SalesRecordMetaData>);
  static copyOf(source: SalesRecord, mutator: (draft: MutableModel<SalesRecord, SalesRecordMetaData>) => MutableModel<SalesRecord, SalesRecordMetaData> | void): SalesRecord;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly phone?: string;
  readonly address: string;
  readonly colony?: string;
  readonly postalCode?: number;
  readonly hasDiscount: boolean;
  readonly Orders?: (Order | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}