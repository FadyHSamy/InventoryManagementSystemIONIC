export interface ModifyProductRequest {
  productId: number;
  productName: string;
  productDescription: string;
  productPrice: number;
  categoryId: number;
  stockQuantity: number;
}
