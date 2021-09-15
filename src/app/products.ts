export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image?: string;
}

export const products = [
  {
    id: 1,
    name: 'Samsung Galaxy Note 20',
    price: 1250,
    description: '256GB, 8GB RAM, Dual SIM, Mystic Gray',
    image: ''
  },
  {
    id: 2,
    name: 'Samsung Galaxy Note 10 Plus',
    price: 850,
    description: '256GB, 12GB RAM, 5G, Aura Glow',
    image: ''
  },
  {
    id: 3,
    name: 'Apple iPhone 12 Pro Max',
    price: 1500,
    description: '512GB, 6GB RAM, Gold',
    image: ''
  },
  {
    id: 4,
    name: 'Apple iPhone 11 Pro',
    price: 799,
    description: '64 GB, 4GB RAM, Black ',
    image: ''
  },
  {
    id: 5,
    name: 'Huawei P40 Pro',
    price: 650,
    description: '256GB, 8GB RAM, Silver Frost',
    image: ''
  },
  {
    id: 6,
    name: 'Huawei P Smart 2021',
    price: 320,
    description: '128GB, 4GB RAM, Blush Gold',
    image: ''
  }
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
