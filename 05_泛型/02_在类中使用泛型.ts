interface animalInterface {
  name: string;
}
class Animals<T extends animalInterface> {
  public name: Array<T>;
  constructor(name: Array<T>) {
    this.name = name;
  }
  getAnimal(i: number): string {
    return this.name[i].name;
  }
}
let animal = new Animals([
  {
    name: 'fdsdf',
  },
  {
    name: 'gdfgd',
  },
  {
    name: 'tretr',
  },
]);

// 类型约束
class People<T extends number | string> {
  public age: T;
  constructor(age: T) {
    this.age = age;
  }
  getAge(): T {
    return this.age;
  }
}
let teacher = new People<string>('fsd');
console.log(teacher.getAge());
