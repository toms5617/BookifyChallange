import { BookDetails } from "./book-details"

export interface BooksData {
  items: BookDetails[];
  kind: string;
  totalItems: number;
}