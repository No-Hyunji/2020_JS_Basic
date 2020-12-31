'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduced in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor
    constructor(name, age){ // 생성자 
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const hyunji = new Person('hyunji', 23); // 생성자는 대문자 사용 
console.log(hyunji.name);
console.log(hyunji.age);
hyunji.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age(){ // 사용자가 get age를 호출하면 바로 this.age를 리턴해야함
        return this._age;
    }

    set age(value){ // 값 설정. value를 받아와야함 
        // this.age = value; // 여기까지만 하면 call stack error남.
        // this._age = value; // get age와 set age의 이름을 변경한다. 
        // if (value < 0) {
        //    throw Error('age can not be negative');
        // } 이렇게 해도 돼지만 아래처럼 더 젠틀하게 할 수 있음
        this._age = value < 0 ? 0 : value;
    }   
}
const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
class Experiment {
    publicField = 2; // 외부에서 접근 가능
    #privateField = 0; // private필드 . 클래스 외부에서 값을 읽을수도, 바꿀수도 없음 
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance 상! 속!
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(){
        console.log(`drawing ${this.color} color of`);
    }

    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape{}
class Triangle extends Shape{
    draw(){
        super.draw(); // 부모의 메소드도 호출
        console.log('▲'); // 여기서 정의한 호출
    }
    getArea(){
        return (this.width * this.height) / 2;
    }
}
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf
// 왼쪽에 있는 오브젝트가 오른쪽에 클래스의 인스턴스인지 확인하는 것 true와 false를 리턴함
console.log(rectangle instanceof Rectangle); // t
console.log(triangle instanceof Rectangle); // f
console.log(triangle instanceof Triangle); // t
console.log(triangle instanceof Shape); // t
console.log(triangle instanceof Object); // t 
console.log(triangle.toString());

// MDN 자바스크립트 오브젝트 레퍼런스 페이지
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference
