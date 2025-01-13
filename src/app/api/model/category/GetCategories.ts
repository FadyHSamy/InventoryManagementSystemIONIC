export interface GetCategoriesResponse {
  categories: {
    categoryId: number;
    categoryName: string;
    status: number;
  }[];
}
