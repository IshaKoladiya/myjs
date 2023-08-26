// object oriented javascript / prototypal inheritance

// 1. Methods

// 1. Constructor Functions

function constructorfunc(name, age) {
    this.name = name;
    this.age = age;
  }
  
  constructorfunc.prototype.sayHello = function() {
    console.log(`Hello, my name is ${this.name} and age is ${this.age}`);
  };
  
  let func = new constructorfunc("isha" , 15)
  func.sayHello()

// 2. Creating Objects

const createobj1 = new constructorfunc("dino", 30);
const createobj2 = new constructorfunc("daisy", 25);

createobj1.sayHello();
createobj2.sayHello();

// 3. Prototypal Inheritance

console.log(createobj1.hasOwnProperty(name));
console.log(createobj2.hasOwnProperty(age)); 

// 4. Adding Methods and Properties

constructorfunc.prototype.greet = function() {
    console.log(`Greetings from ${this.name}`);
  };
  
  createobj1.greet(); 
  
// 5. Object.create()

const person3 = Object.create(Person.prototype);
person3.name = "isha";
person3.age = 19;
person3.sayHello()

// 2. this keyword , window object

// 1. this key word

// JavaScript ma, this keywort current exicutex contex ne get kare che.
// this keyword aek special identifier che je ae check kare che k kai rite function call karva ma ave che 
// te rite ano arth chenge kare che

// globle: this key word ne jyare bar koi function ma use karva ma ave tyare te globle object manay che and te browser ma globle object windo object che

// function : jo aek function ae ak object pramane bolava ma ave che to this a object ne get kare che.
// jo  function ne direct call karva ma ave,to this global object api shake che. global object (in non-strict mode) or be undefined (in strict mode).

// arrow function :  Arrow functions behave differently. teno potano koi context hoto nathi; instead, tene koi no varso levo pade m hoy che

// 2.window object

console.log(window.document);  
console.log(window.location.href);  

function displayMessage() {
//   window.alert("helloo surat");
//   window.prompt("prompt")
//   window.confirm("confirm")
}

displayMessage();  


// 3. call , apply and bind methods

const user = {
    firstName: "isha",
    lastName: "koladiya",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  
  const user1 = {
    firstName: "disha",
    lastName: "modi"
  };
  
  console.log(user.fullName());
  
  //  call
  console.log(user.fullName.call(user1)); 
  
  //apply
  console.log(user.fullName.apply(user1));
  
  //bind
  const bind = user.fullName.bind(user1);
  console.log(bind()); 
  
// 4. some warnings

// 1. context and parameters

// jyare call and applyay use thai tyare contant pass karta pehla dhyan rakho.
// pass karva ma avela parameter and context ne pela jani lo.
// teno khoto upyog thi shake che athva bhulo mali shake che

// 2. function
// jyare call and apply method no use karti vakhte jyare emmidately function call thai che
// Ttyare performance issues or unexpected side effects thai shake che.

// 3. bind and return
// bind method ak new function banveche bind context sathe tyre tyan rakho k bind function ne varmvar call karavi sha ka se k nahi bind function call karavi rakh va thi unexepected result mali shake che

//  memmory
// bine no use kari ne vadhu ma vadhu bind function banava ma avyo to athva anek bind function banavama avya che to memory full thai shake che 


// 5. this insite arrow function

const obj = {
    name: "chottabhimm",
    age : 16,
    func: function() {
      console.log(this.name); 
      console.log(this.age); 
    },
    arrow: () => {
      console.log(this.name); 
      console.log(this.age); 
    }
  };
  
  obj.func();
  obj.arrow();


// 6. short syntax for methods

// Parent Constructor Function
function Animal(name) {
    this.name = name;
  }
  
  //  prototype
  Animal.prototype.sayHello = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
  
  // Child Constructor Function
  function Dog(name, breed) {

    // parent constructor
    Animal.call(this, name);
    this.breed = breed;
  }
  
  // Inherit from Animal's prototype
  Dog.prototype = Object.create(Animal.prototype);
  
  // Adding a method to the Dog prototype
  Dog.prototype.bark = function() {
    console.log("Woof!");
  };
  
  // Create instances
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Buddy", "Golden Retriever");
  
  // Using the methods
  animal.sayHello();  // "Hello, I'm Generic Animal"
  dog.sayHello();     // "Hello, I'm Buddy"
  dog.bark();         // "Woof!"
  


// 7. factory function & discuss some memmory releted problems

function factory(name, age) {
    return {
      name: name,
      age: age,
      func1: function() {
        console.log(`my name is ${this.name} and I'm ${this.age} years old.`);
      }
    };
  }
  
  const userr1 = factory("tishu", 20);
  const userr2 = factory("ronit", 23);
  
  userr1.func1();
  userr2.func1();

  // 2. discuss some memmory releted problems

// Memory Leaks: jo tame objectna refrance ne savdhani purvak na vyavsthapan karo to , memory leaks thai shake che. Objects tamar vichara pramane j aveshe but tamne ama context no sampark thato rehse  tethi garbage collection thai nahi je samaythi memory no dur upyog thi shake che vaprash thai shake che. 

// Closure-related Memory: Functions mathi functions (closures) avak kari shake che. Closures capture kare che postana variables  barna veriabls sathe scope, tyar pachi ni function exicute pachi pan garbage collect na thai shake.

// Event Listeners:sari rite safai karvi event listner attech karvu etc work memmory leaks nu rahshe. jo koi object event listener sathe jodayelo che . ne saririte dur karva ma na ave to te event listener te object ne reference apse.


// Unintended Global Variables: var, let, or const no use no kari ne banavama aveli variables global variables bani shake che . jo a variable ne yogya rite na menege krya to agal jata memmoryma bov ocho time potanu astitva takavi rakh se.



// 8. first solution to that problem


// 1. memory leaks
let leakmemmory = { data: 'some data', memo: " some values" };

leakmemmory = null;

// 2. Closure-related Memory

function Closure() {
    const innervar = 'captured data';
    return function() {
    
      innervar = null;
    };
  }

// 3. Event Listeners


// const btn = document.getElementById('add');
// const handleClick = () => {
  
// };

// btn.addEventListener('click', handleClick);

// remove  event 
// btn.removeEventListener('click', handleClick);


// 4. Unintended Global Variables
function Global() {
    let localVar = 'local data';

    // only accessible within this function
  }

// 9. why that solution isn't that great

// 1. memory leaks solution limitation
// ak object ne null ma set karva thi memory sangrah ni limitation mali shake che .
// vadhare large application ma object , refrance and jodano hoy to defference ni pracriya ma bhulo thai sake che  and manneje karvu mushkel thai shake che
// long time thi chaliraheli aplication varam var object no upyog thato hoy to menually defference time-consuming and impractical bani shake che

// 2. Closure-related Memory solution limitetion
//  closer and tema adchan vali vastu nu dhan apo . jo apni closer  agal niche scope ma use thai che to jyare jaruri na hoy tyare tene null athva to undifined ma set kakaro

// 3. Event Listeners solution limitetion
// yad rakho k jyare event listener ni jarur na hoy tyare tene dur karo a sreth abyas che
// vadthare che se time pae jodano dur karvama ave

// 4. Unintended Global Variables solution limitetion
// var , let and const  no use kari ne bane atlu vadhare banvo.
// value vagar na global variable ne talo.


// 10. what is __proto__. [[prototype]]

// 1. proto

const proto = {};
const prototypeOfObj = proto.__proto__;
console.log(prototypeOfObj)


const proto1 = []
const pro = proto1.__proto__;
console.log(pro)


// 2. [[prototype]]

const objectpro = {};
const prototype = Object.getPrototypeOf(objectpro);
console.log(prototype)


// 11. what is prototype
// 15. more discussion about proto and prototype

// 1. Constructor Functions and Prototypes

function prototypefunc(name) {
    this.name = name;
  }
  
  // prototype
  prototypefunc.prototype.Hello = function() {
    console.log(`Hello, my name is ${this.name}.`);
  };
  
  const person1 = new prototypefunc("Alice");
  const person2 = new prototypefunc("Bob");
  
  person1.Hello();  
  person2.Hello();  

// 12. use prototype

// 1. creating prototype

function Prototype(name, age) {
    this.name = name;
    this.age = age;
  }
  
  Prototype.prototype.standard = function() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  };
  
  const per = new Prototype('dino', 25);
  per.standard();
  
// 13. new keyword

function newkeyword(name) {
    this.name = name;
  }
  
  const person = new newkeyword("vrunda");
  console.log(person);


// 14. constructor function with new keyword


class Person {
    constructor(name, age , std , clg) {
      this.name = name;
      this.age = age;
      this.std = std;
      this.clg = clg;
    }
  }
  
  const per1 = new Person("naira", 26 ,"no", "gandhi college");
  const per2 = new Person("kartik", 26 ,"no", "I I M college");
  
  console.log(per1.name); 
  console.log(per1.age);  
  console.log(per1.std);  
  console.log(per1.clg);  
  
  console.log(per2.name); 
  console.log(per2.age);  
  console.log(per2.std);  
  console.log(per2.clg);  


// 16. class keyword

class ClassName {
    constructor() {
      // Constructor code
    }
  
    method1() {
      // Method 1 
    }
    
  }

// 17. example using class keyword


class fruit {
    constructor(name) {
      this.name = name;
    //   console.log(this.name);
    }
  }
  
  const classkeyword = new fruit('Apple');
  console.log(classkeyword)
  
// 18. super keyword

class Parent {
    constructor(name) {
      this.name = name;
    }
  }
  
  class Child extends Parent {
    constructor(name, age) {
      super(name); 
      this.age = age;
    }
  }
  
  const childObj = new Child('angel', 15);
  console.log(childObj.name); 
  console.log(childObj.age);
  
// 19. method overriding

class Animal1 {
    makeSound() {
        return "Generic animal sound";
    }
}

class Dog1 extends Animal1 {
    makeSound() {
        return "Woof woof!";
    }
}

const over = new Dog1();
console.log(over.makeSound())

// 20. getters and setters

// 1 . getter

const getter = {

    country: 'usa',
    
    get getName() {
        return this.country;
    }
};

console.log(getter.country);

// getter methods
console.log(getter.getName); 


// 2. setter
const setter = {
    firstName: 'dino',
    
    set changeName(newName) {
        this.firstName = newName;
    }
};

console.log(setter.firstName); 

setter.changeName = 'new dino';

console.log(setter.firstName); 

  

// 21. static methods and properties

// static methods

class mathfunc {
    static add(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  }
  
  console.log(mathfunc.add(5, 3));   
  console.log(mathfunc.subtract(10, 4));


  // static properties 

  class Article {
    static publisher = "Ilya Kantor";
  }

  console.log( Article.publisher );
  