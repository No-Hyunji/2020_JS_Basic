'use strict';
// 비슷한 타입의 오브젝트 들을 묶어놓는것을 자료구조라고한다.
// JavaScript === dynamically typed language
// 다른 타입의 오브젝트들을 묵어 놓을 수 있다 하지만 좋지 않음
// 칸칸이모여있는 자료구조를 배열 이라고 한다. 인덱스가 지정되어있다. 0부터 시작

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. index position어떻게 인덱스에 접근??
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length - 1]); // 배열의 마지막에 접근할 때 많이 사용하는 방법

console.clear();
// 3. Looping over an array
// print all fruits
// a. for
for(let i = 0 ; i < fruits.length; i ++){
    console.log(fruits[i]);
}

// b. for of
for(let fruit of fruits){
    console.log(fruit);
}

// c. forEach
fruits.forEach((fruit) => console.log(fruit));

// 4. Addtion, deletion, copy
// push : add an item to the end
fruits.push('딸기','복숭아');
console.log(fruits);
// pop : remove an item from the end
fruits.pop();
fruits.pop();
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('딸기', '레몬');
console.log(fruits);

// shift: remove an item from the beginning
fruits.shift();
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(1, 1); // 시작하는 인덱스 번호, 거기서부터 몇개를 지울건지 
console.log(fruits);
fruits.splice(1,1,'사과','수박');
console.log(fruits);

// combine two arrays
const fruits2 = ['배', '코코넛'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching

// indexOf: find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('수박'));
console.log(fruits.indexOf('코코넛')); // 없으면 -1 리턴 

// includes
console.log(fruits.includes('수박')); // 있는지 없는지 true false로 리턴해줌 
console.log(fruits.includes('코코넛'));

// lastIndexOf
console.clear();
fruits.push('사과');
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));