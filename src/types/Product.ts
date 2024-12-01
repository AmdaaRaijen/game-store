export interface ProductDataPriceType {
  basic: number;
  premium: number;
  special: number;
}

export interface ProductDataType {
  code: string;
  game: string;
  name: string;
  price: ProductDataPriceType;
  server: string;
  status: "available" | "empty";
}

export interface ProductType {
  result: boolean;
  data: ProductDataType[];
}
