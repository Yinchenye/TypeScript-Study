"use strict";
// 静态属性
// 静态属性是指class本身的属性，属性前加static修饰符修饰
// 只能通过 类名.属性 的方式添加属性
class Dog {
    constructor(name) {
        this.name = name;
    }
    //   静态方法
    static getName() {
        console.log(this.age);
    }
}
let dog = new Dog('fds');
Dog.age = 17;
console.log(Dog.age);
console.log(Dog.getName());
// 抽象类和抽象方法
// 抽象类、抽象方法是ts中新增的类
// abstract 关键用于定义抽象类和抽象方法
// 抽象类只能用作父类使用，不可直接被实例化
// 和接口不同，抽象类可以包含class的实现细节
// 抽象方法语法和函数接口相似。两者都是定义方法签名，不包含具体函数体。
// 但是，抽象方法必须包含 abstract 关键字并且可以包含访问修饰符。
// 抽象方法必须在子类中实现
class Animal {
}
class Pander extends Animal {
    constructor(age, eye) {
        super();
        this.age = age;
        this.eye = eye;
        this.name = 'pan';
        this.age = age;
        this.eye = eye;
    }
    skill() {
        console.log('eat');
    }
}
class Tiger extends Animal {
    constructor(age, sex) {
        super();
        this.age = age;
        this.sex = sex;
        this.name = 'tiger';
        this.age = age;
        this.sex = sex;
    }
    skill() {
        console.log('sk');
    }
}
let pander = new Pander(18, 'fsfd');
pander.skill();
