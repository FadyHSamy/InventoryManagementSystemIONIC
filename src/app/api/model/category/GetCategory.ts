export interface GetCategoryResponse {
  category: Category;
}
interface Category {
  categoryId: number;
  categoryName: string;
  status: number;
}
