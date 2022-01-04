export interface responseProducstDTO {
  count: number;
  next: string;
  previous: string;
  results: ProductDTO[];
}

export interface ProductDTO {
  id: number;
  title: string;
  authors: authorsDTO[];
  translators: string[];
  subjects: string[];
  bookshelves: string[];
  languages: string[];
  copyright: boolean;
  media_type: 'Text';
  download_count: number;
}

export interface authorsDTO {
  name: string;
  birth_year: number;
  death_year: number;
}
