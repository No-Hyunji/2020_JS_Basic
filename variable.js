// 1. Use strict
// JavaScript is very flexible
// flexible === dangerous
// added ECMAScript 5
'use strict';

// 2. Variable, rw(read, write)
// let (added in ES6)
let globalName = 'global name';
{
    let name = '노현지';
    console.log(name);
    name = 'hello!';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var(don't ever use this!)
// 값을 선언하기도 전에 쓸 수 있음
// var hoisting (move declaration from bottom to top) : 끌어올려주다
// 어디에선언했냐에 상관없이 항상 제일 위로 선언을 끌어올려주는것을 말함.
// has no block scope : 블럭 무시 
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constant : 상수, r(read only)
// 값을 할당하고 나서 변경 되지 않음 
// use const whnever possible.
// only use let if variable needs to change.
const daysInWeek = 7;
const maxNumber = 5;

// Note!
// Immutable data types : primitive types, frozen objects (i.e. object.freeze())
// Mutable data types: all objects by default are mutable in JS
// favor immutable data type always for a few reasons;
// - security 보안
// - thread safety
// - reduce human mistakes

// 4. Variable types
// primitive, single item: number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function

const count = 17; // integer
const size = 17.1; // decimal number
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// number = special numberic values : infinity, -infinity, NaN
const infinity = 1 / 0 ;
const negativeInfinity = -1 / 0 ;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (fairly new, don't use it yet)
const bigInt = 115151515126262626215612626262626262262626n; // over (-2**53) ~ (2*53)
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);
Number.MAX_SAFE_INTEGER;

// string 
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello' + brendan;
console.log(`value: ${greeting}, type: ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; // template literals (string)
console.log(`value: ${helloBob}, type:${typeof helloBob}`);

// boolean
// false: 0, null, undefined, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; // false
console.log(`value: ${canRead}, type: ${typeof canRead}`);
console.log(`value: ${test}, type: ${typeof test}`);

// null
let nothing = null;
console.log(`value: ${nothing}, type: ${typeof nothing}`);

// undefined
let x;
console.log(`value: ${x}, type: ${typeof x}`);

// symbol, create unique indentifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true;
console.log(`value: ${symbol1.description}, type: ${typeof symbol1}`);

// object, real-life object, data structure
const hyunji = { name: 'hyunji', age: 23}; // 모든 object는 변경이 가능함
hyunji.age = 20;
console.log(hyunji);

// 5. Dynamin typing: dynamically typed language
let text = 'hello';
console.log(text.charAt(0)); // h
console.log(`value: ${text}, type: ${typeof text}`); // string
text = 1;
console.log(`value: ${text}, type: ${typeof text}`); // number
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`); // string
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`); // number
// console.log(text.charAt(0)); 오류

