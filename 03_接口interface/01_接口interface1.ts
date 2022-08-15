// 定义了一个接口
interface Norm {
  name: string;
  age: number;
  sex: number;
  //   say(): string;
  [prop: string]: any;
}

const gir = {
  name: 'zhangsan',
  age: 18,
  sex: 0,
  body: 'piano',
};

const fn3 = (girs: Norm) => {
  return girs.sex;
};
console.log(fn3(gir));
