export type CVLink = {
  text: string;
  url: string;
};

export type CVItem = {
  title: string | CVLink;
  date: string;
  place: string | CVLink;
  description: string;
};

export type CVSection = {
  title: string;
  items: CVItem[];
};

export const cv: CVSection[] = [
  {
    title: 'Experience',
    items: [
      {
        title: 'Lorem ipsum dolor sit amet',
        date: '2018 - 2021',
        place: 'Consectetur Adipiscing University',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed tempus sem. Duis malesuada congue neque, nec condimentum diam ultrices sit amet.',
      },
      {
        title: { text: 'Sed Do Eiusmod Tempor', url: 'https://example.com' },
        date: '2015 - 2018',
        place: { text: 'Incididunt ut Labore', url: 'https://example.com' },
        description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
      },
    ],
  },
  {
    title: 'Education',
    items: [
      {
        title: 'Ut Enim Ad Minim Veniam',
        date: '2021 - present',
        place: 'Quis Nostrud Exercitation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
      },
      {
        title: { text: 'Ullamco Laboris Nisi', url: 'https://example.com' },
        date: '2019 - 2021',
        place: 'Aliquip Ex Ea Commodo',
        description: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Proin vel ante a orci tempus eleifend ut et magna.',
      },
    ],
  },
  {
    title: 'Volunteer Work',
    items: [
      {
        title: 'Aenean Lacinia Bibendum',
        date: '2020 - 2022',
        place: { text: 'Nulla Sed consectetur', url: 'https://example.com' },
        description: 'Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam quis risus eget urna mollis.',
      },
      {
        title: 'Vivamus Sagittis Lacus',
        date: '2017 - 2019',
        place: 'Vel Augue Laoreet',
        description: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl consectetur.',
      },
    ],
  },
  {
    title: 'Skills',
    items: [
      {
        title: 'genius',
        date: '',
        place: '',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      },
      {
        title: 'best person',
        date: '',
        place: '',
        description: 'the best',
      },
    ],
  },
  {
    title: 'Languages',
    items: [
      {
        title: 'Polish',
        date: '',
        place: '',
        description: '',
      },
      {
        title: 'Spanish',
        date: '',
        place: '',
        description: ''
      },
    ],
  },
];