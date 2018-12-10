export interface ICow {
  image: string;
  name: string;
  age: number;
  weight: number;
  yeld: number;
  price: number;
}

export class Cow implements ICow {
  image: string = '';
  name: string = '';
  age: number = 0;
  weight: number = 0;
  yeld: number = 0;
  price: number = 0;
  constructor(cow: Partial<ICow>) {
    for (const key in cow) {
      if ( cow[key] ) {
        this[key] = cow[key];
      }
    }
  }
}

export const COWS: Cow[] = [
  new Cow({
    image: 'Mashka',
    name: 'Машка',
    age: 2,
    weight: 500,
    yeld: 10,
    price: 10000,
  }),
  new Cow({
    image: 'Zorka',
    name: 'Зорька',
    age: 3,
    weight: 600,
    yeld: 15,
    price: 15000,
  }),
  new Cow({
    image: 'Burenka',
    name: 'Буренка',
    age: 3,
    weight: 700,
    yeld: 12,
    price: 12000,
  }),
  new Cow({
    image: 'Vesnushka',
    name: 'Веснушка',
    age: 4,
    weight: 800,
    yeld: 12,
    price: 9000,
  }),
];
