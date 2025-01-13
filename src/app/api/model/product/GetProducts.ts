export interface GetProductsResponse {
  product: Product[];
}

export interface Product {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  categoryId: number;
  categoryName: string;
}
