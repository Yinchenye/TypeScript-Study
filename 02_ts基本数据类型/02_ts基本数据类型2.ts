// object表示一个js对象
let a2: object;
a2 = {};
a2 = [];
a2 = () => {};
// js中万物皆对象，这种方法并不常用

// 最常用的
let a3: { name: string; age?: number };
a3 = { name: 'YCY' };
let a4: { name: string; [prop: string]: unknown };
a4 = { name: 'hello', age: 18, sex: '男', boddy: 'fsd' };

// 数组
let arr: number[];
arr = [1, 5, 6];
let arr1: { [prop: string]: any }[];
arr1 = [
  {
    name: 'asdf',
    age: 18,
    a() {
      console.log(1);
    },
  },
  {
    name: 'asd',
    age: 1,
    as() {
      console.log(1);
    },
  },
];
console.log(arr1[0].name);
