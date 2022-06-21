import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ListProductsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type FlavorMetaData = {
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

export declare class ListProducts {
  readonly id: string;
  readonly quantity?: number | null;
  readonly Flavor?: Flavor | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<ListProducts, ListProductsMetaData>);
  static copyOf(source: ListProducts, mutator: (draft: MutableModel<ListProducts, ListProductsMetaData>) => MutableModel<ListProducts, ListProductsMetaData> | void): ListProducts;
}

export declare class Flavor {
  readonly id: string;
  readonly Name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Flavor, FlavorMetaData>);
  static copyOf(source: Flavor, mutator: (draft: MutableModel<Flavor, FlavorMetaData>) => MutableModel<Flavor, FlavorMetaData> | void): Flavor;
}

export declare class Kardex {
  readonly id: string;
  readonly initialQuantity?: number | null;
  readonly finalQuantity?: number | null;
  readonly movementType?: string | null;
  readonly Item?: Item | null;
  readonly movementDate?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Kardex, KardexMetaData>);
  static copyOf(source: Kardex, mutator: (draft: MutableModel<Kardex, KardexMetaData>) => MutableModel<Kardex, KardexMetaData> | void): Kardex;
}

export declare class Item {
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly price?: number | null;
  readonly price2?: number | null;
  readonly cost?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Item, ItemMetaData>);
  static copyOf(source: Item, mutator: (draft: MutableModel<Item, ItemMetaData>) => MutableModel<Item, ItemMetaData> | void): Item;
}

export declare class Order {
  readonly id: string;
  readonly dateTimeOrder: string;
  readonly totalSale?: number | null;
  readonly SalesRecords?: (SalesRecord | null)[] | null;
  readonly userID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Order, OrderMetaData>);
  static copyOf(source: Order, mutator: (draft: MutableModel<Order, OrderMetaData>) => MutableModel<Order, OrderMetaData> | void): Order;
}

export declare class SalesRecord {
  readonly id: string;
  readonly itemQuantity: number;
  readonly actualSale?: number | null;
  readonly orderID?: string | null;
  readonly Item?: Item | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<SalesRecord, SalesRecordMetaData>);
  static copyOf(source: SalesRecord, mutator: (draft: MutableModel<SalesRecord, SalesRecordMetaData>) => MutableModel<SalesRecord, SalesRecordMetaData> | void): SalesRecord;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly phone?: string | null;
  readonly address: string;
  readonly colony?: string | null;
  readonly postalCode?: number | null;
  readonly hasDiscount: boolean;
  readonly Orders?: (Order | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}