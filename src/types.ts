export interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  available: boolean;
  description?: string;
}