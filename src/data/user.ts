export class User {
  id: string = '';
  name: string = '';
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

export const USER = new User('1', 'Вася');
