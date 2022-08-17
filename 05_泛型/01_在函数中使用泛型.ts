// 泛型
function func<T>(a: T, b: T) {
  return `${a}${b}`;
}
console.log(func<number>(1, 2));

// 泛型中数组的使用
function myFunc<T>(c: Array<T>): number {
  return c.length;
}
console.log(myFunc<number>([45, 656, 80]));
