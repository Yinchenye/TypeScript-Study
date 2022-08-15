interface interfaceNormal {
  name: string;
  age: number;
  gender: number;
  teacher(): string;
}

// 接口用来限制类，必须加implements
class clas implements interfaceNormal {
  name = 'fds';
  age = 20;
  gender = 1;
  teacher() {
    return '个海兽接口的';
  }
}

// 接口的继承
interface newInterface extends interfaceNormal {
  say(): number;
}
const cn = {
  name: 'fsdfs',
  age: 25,
  gender: 1,
  say() {
    return 0;
  },
  teacher() {
    return 'fsdfds';
  },
};
let fn55 = (cn: interfaceNormal) => {
  return cn.teacher();
};

let newObj = new clas();
console.log(fn55(newObj));
console.log(fn55(cn));
