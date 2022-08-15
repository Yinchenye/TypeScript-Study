// 数值类型
let a: number = 3;
let b: number = 2.5555;
let hex: number = 0xf00d;
let binary: number = 0b1010;
// console.log(a, b, hex, binary);

// 字符串类型
let str: string;
str = 'hello world';
let newstr: string = 'fsfsdf';
let str2 = '4546';
// console.log(str, newstr, str2);

// boolean
let bool: boolean = true;
bool = false;

// 字面量（类似于const）
// 将具体的值，赋值给变量，后续不允许修改了
let zimian: 10;
// 常用场景
// | 代表或，&代表且
let newzimian: 'aaaa' | 12;
newzimian = 'aaaa';
newzimian = 12;
// console.log(newzimian);

let zimian2: boolean | string;
zimian2 = false;
zimian2 = 'aaa';
console.log(zimian2);

// any，任意类型
// 非特殊情况下，不建议使用，用了之后，对于该变量，ts解析器会关闭类型检测
let d: any;
d = 454;
d = 'ffsd';
d = [4, 5, 6];

// 隐式的any类型转换，强烈不建议使用
let d1;
d1 = 454;
d1 = 'ffsd';
d1 = [4, 5, 6];

// 未知类型unknow
let unkn: unknown = 5;
// 未知类型的无法直接赋值，需要使用类型断言
str = unkn as string;

// void和never通常用来设置函数的返回值
let fn = function (): void {
  return;
};
let fn2 = (): void => {
  return;
};

// never表示的是永远没有返回结果
// 返回never的函数必须存在无法达到的终点
function error(): never {
  throw new Error('报错了');
}
function infiniteLoop(): never {
  while (true) {}
}
