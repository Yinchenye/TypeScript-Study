// 类中的三种访问类型
// public，公共的，默认的访问类型即为public，哪里都可以访问
// private，私有的，该类不允许被继承或者实例化，但实例对象可以通过getter和setter访问
// protected，受保护的，只能在父类和受继承的子类中使用
class Girls {
  public name: string;
  private age: number = 10;
  public gender: number;
  //   构造函数，每次类被构造的时候，都能调用
  constructor(name: string, gender: number) {
    this.name = name;
    this.gender = gender;
  }
  public ss(): void {
    console.log(11);
  }
  public say(): number {
    return this.gender;
  }
}

// 继承
class Teacher extends Girls {
  public skill: string;
  public height: number;
  //   当父类中存在构造函数时，继承必须用super关键字，且super一定要在构造函数中访问this之前调用
  constructor(name: string, gender: number, skill: string, height: number) {
    super(name, gender);
    this.skill = skill;
    this.height = height;
  }
  ss() {
    super.ss();
  }
  public teacher(): void {
    console.log(5555);
  }
}
let girl = new Girls('fsdfd', 0);
// console.log(girl);
let teacher = new Teacher('ggd', 1, 'jiangke', 100);
// console.log(teacher);
console.log(teacher.ss());
