export interface InsertProductRequest {
  productName: string;
  productDescription: string;
  productPrice: number;
  categoryId: number;
  stockQuantity: number;
}
