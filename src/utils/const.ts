import { responseProducstDTO } from '../product/infraestructura/dto/productDTO';

export const FAKE_PRODUCTS: responseProducstDTO = {
  count: 66992,
  next: 'https://gutendex.com/books/?page=2',
  previous: 'https://gutendex.com/books/?page=1',
  results: [
    {
      id: 46,
      title: 'A Christmas Carol in Prose; Being a Ghost Story of Christmas',
      authors: [
        {
          name: 'Dickens, Charles',
          birth_year: 1812,
          death_year: 1870,
        },
      ],
      translators: [],
      subjects: [
        'Christmas stories',
        'Ghost stories',
        'London (England) -- Fiction',
        'Misers -- Fiction',
        'Poor families -- Fiction',
        'Scrooge, Ebenezer (Fictitious character) -- Fiction',
        'Sick children -- Fiction',
      ],
      bookshelves: ["Children's Literature", 'Christmas'],
      languages: ['en'],
      copyright: false,
      media_type: 'Text',

      download_count: 68486,
    },
    {
      id: 84,
      title: 'Frankenstein; Or, The Modern Prometheus',
      authors: [
        {
          name: 'Shelley, Mary Wollstonecraft',
          birth_year: 1797,
          death_year: 1851,
        },
      ],
      translators: [],
      subjects: [
        "Frankenstein's monster (Fictitious character) -- Fiction",
        'Frankenstein, Victor (Fictitious character) -- Fiction',
        'Gothic fiction',
        'Horror tales',
        'Monsters -- Fiction',
        'Science fiction',
        'Scientists -- Fiction',
      ],
      bookshelves: [
        'Gothic Fiction',
        'Movie Books',
        'Precursors of Science Fiction',
        'Science Fiction by Women',
      ],
      languages: ['en'],
      copyright: false,
      media_type: 'Text',

      download_count: 52822,
    },
    {
      id: 1342,
      title: 'Pride and Prejudice',
      authors: [
        {
          name: 'Austen, Jane',
          birth_year: 1775,
          death_year: 1817,
        },
      ],
      translators: [],
      subjects: [
        'Courtship -- Fiction',
        'Domestic fiction',
        'England -- Fiction',
        'Love stories',
        'Sisters -- Fiction',
        'Social classes -- Fiction',
        'Young women -- Fiction',
      ],
      bookshelves: ['Best Books Ever Listings', 'Harvard Classics'],
      languages: ['en'],
      copyright: false,
      media_type: 'Text',

      download_count: 48389,
    },
  ],
};
