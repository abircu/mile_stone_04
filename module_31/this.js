class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sleep() {
    console.log(`sleeping now ${this.name}`);
  }
}

const kodom = new Person("kodom Ali", 21);
console.log(kodom);
kodom.sleep();
const badam = new Person("kacha badam");
badam.sleep();
