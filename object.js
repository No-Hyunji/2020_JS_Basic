'use strict';

// Objects
// one of JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object.
// object = {key : value}; 
// 오브젝트는 키와 값의 집합체이다. 
// key : 우리가 접근 할 수 있는 변수, property
// value : property 가 갖고있는 값. 

// 1. Literals and properties
// primitive type은 변수 하나당 값을 하나만 담을 수 있다. 
const name = 'hyunji';
const age = 24;
print(name, age); // 출력하고싶으면 name과 age를 각각 파라미터로 전달해줘야함
function print(name, age){ // 함수를 정의해서 쓸 때도 두가지의 파라미터를 받아 올 수 있도록 만들어야한다. 
    console.log(name);
    console.log(age);
}
// 이렇게 하게되면 인자가 많아지게 될 때 추가해야하는 것들이 굉장히 많음
// => 관리하기도 함들고, 로지컬하게 그룹으로묶어서 생각 할 수 없음
// 이것을 개선하고자, object를 쓴다. 
const obj1 = {} // Curly brackets을 이용해서 오브젝트를 만들 수도 있고, ('object literal' syntax)
const obj2 = new Object(); // 클래스를 탬플릿을 이용해 만들수도 있다 ('object constructor' syntax)
// 우리가 오브젝트를 new라는 키워드를이용해서 생성하면 오브젝트에서 정의된 생성자가 호출이 됨.
function print(person){
    console.log(person.name);
    console.log(person.age);
}
const hyunji = {name: 'hyunji', age:4}; // 클래스가 없어도 괄호 이용해서 오브젝트 생성 가능 
print(hyunji); // 전달, 호출 할 때 간단함

// 자바스크립트는 Runtime(프로그램이 동작 하고 있을 때) 언어임. 
hyunji.hasJob = true; // 그래서 추가할 수 있음 
console.log(hyunji.hasJob); //유지보수 힘들기때문에 피해서 사용 

delete hyunji.hasJob; // 삭제도 가능 ;;;;;

// 2. Computed(계산된) properties
console.log(hyunji.name); 
// 닷(dot)으로 접근 가능 ,코딩하는 그 순간 해당하는 키를 받아오고싶을 때 , 평소코딩할 땐 dot을 사용. 
// key는 항상 string타입으로 지정해서 받아와야한다. 
console.log(hyunji['name']); 
// string 형태로 접근 가능 배열에서 받아오는것처럼. 
// 정확하게 어떤키가 필요한지 모를때, 즉 런타임에서 결정될 때 , 실시간으로 원하는 키의 값을 받아오고 싶을 땨ㅐ 
hyunji['hasJob'] = true;
console.log(hyunji.hasJob);

function printValue(obj, key){
    console.log(obj[key]);
    // key에 관련된 value를 받아올때 유용하게 쓸 수 있음. 
}
printValue(hyunji, 'name');
// key는 항상 문자열로 전달해야함 
printValue(hyunji, 'age');

// 3. Property value shorthand
const person1 = {name : 'bob', age: 2};
const person2 = {name : 'steve', age: 3};
const person3 = {name : 'dave', age: 4};
// const person4 = makePerson('hyunji', 24);
const person4 = new Person('hyunji',24);
console.log(person4);
// function makePerson(name, age){
//     return {
//         // name : name, 
//         // age : age,
//         // 위처럼 value와 key의 이름이 동일하다면 생략가능. 
//         name,
//         age,
//     };
// }

// 4. Constructor function
function Person(name, age){ // 대문자로 시작
    // this = {};
    this.name = name;
    this.age = age;
    // return this;
}

// 5. in operator : property existence check (key in obj)
// 해당하는 오브젝트안에 키가 있는지 없는지 확인하는 것 
console.log('name' in hyunji);
console.log('age' in hyunji);
console.log('random' in hyunji);
console.log(hyunji.random); 

// 6. for..in vs for..of
// for (key in obj)
console.clear();
for (key in hyunji){ 
    // hyunji가 가지고 있는 key들이 블럭을 돌때마다 키들이 키라는 지역변수에 할당이 됨, hyunji안에 있는 모든 키들이 출력됨 
    console.log(key);
}

// for (value of iterable)
const array = [1, 2, 4, 5];
for(value of array) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, obj3...])
const user = {name: 'hyunji', age:'24'};
const user2 = user;
user2.name='coder';
console.log(user);

// old way
const user3 = {};
for(key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({},user);
console.log(user4)

// another example
const fruit1 = { color : 'red'};
const fruit2 = { color : 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);
