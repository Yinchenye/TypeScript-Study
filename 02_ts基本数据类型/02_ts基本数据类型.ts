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
// 讲具体的值，赋值给变量，后续不允许修改了
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
