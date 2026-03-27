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
    title: 'Education',
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
    title: 'Experience',
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
    title: 'Publications',
    items: [
      {
        title: { text: 'Donec Ullamcorper Nulla', url: 'https://example.com' },
        date: '2022',
        place: 'Non Metus Auctor Fringilla',
        description: 'Maecenas sed diam eget risus varius blandit sit amet non magna. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.',
      },
      {
        title: 'Cum Sociis Natoque',
        date: '2020',
        place: { text: 'Penatibus et Magnis', url: 'https://example.com' },
        description: 'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Donec id elit non mi porta gravida at eget metus.',
      },
    ],
  },
  {
    title: 'Awards',
    items: [
      {
        title: 'Nullam Varius Turpis',
        date: '2021',
        place: 'Molestie Dictum Semper',
        description: 'Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus.',
      },
      {
        title: { text: 'Diam Lectus Aliquam', url: 'https://example.com' },
        date: '2019',
        place: 'Ligula at Euismod',
        description: 'Etiam porta sem malesuada magna mollis euismod. Vestibulum id ligula porta felis euismod semper. Aenean lacinia bibendum nulla sed consectetur.',
      },
    ],
  },
];