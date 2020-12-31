// Function
// - fundamental building block in the program 기본적인 빌딩블럭
// - subprogram can be used multiple times 여러번 재사용 가능
// - performs a task or calculates a value 한가지의 일이나 어떤 값을 계산하기 위해서 사용됨

// 1. Function declaration
// function name(param1, param2) { body기본적 비지니스 로직... return; }
// one function === one thing 하나의 함수 === 한가지의 일
// naming: doSomthing, command, verb 변수는 명사, 함수는 무언가를 동작한느 것이기 때문에 동사형태로 지정.
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS. function은 오브젝트의 일종
function printHello(){
    console.log('Hello');
}
printHello();

function log(message){
    console.log(message);
}
log('Hello@');

// JS에는 Type이 없다!

// 2. Prameters
// primitive parameters: passed by value 기본형 파라미터는 메모리에 값으로 전달
// object prameters: passed by reference 오브젝트는 레퍼런스로 전달
function changeName(obj){
    obj.name = 'coder';
} // 이름을 무조건  coder로 바꾸는 함수
const hyunji = {name: 'hyunji'}; // 오브젝트:레퍼런스로 전달
changeName(hyunji); // hyunji가 obj에 들어가서 이름이 무조건 coder로 바뀜
console.log(hyunji); // 값이 coder로 바뀌어있음 

// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    // 예전에는 두번째 값이 전달되지 않을 때를 대비해서 아래의 코드를 짰었다
    // if (from === undefined){
    //     from = 'unknown';
    // }
    // 지금은 파라미터 오르족에 원하는 디폴트 값을 지정해둔다. 
    console.log(`${message} by ${from}`);
} 
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
function printAll(...args){ // 배열형태로 전달 
    for (let i = 0 ; i < args.length; i++){ // 인자의 개수만큼 반복!후 출력
        console.log(args[i]);
    }
    for (const arg of args){ // 위와 똑같은 코드 
        console.log(arg);
    }
    // forEach 함수형 언어
    args.forEach((arg) => console.log(arg));
}
printAll('dream','coding','ellie'); // 인자 전달 

// 5. Local scope
// 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다!
let globalMessage = 'global'; // global variable
function printMessage(){
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother(){
        console.log(message);
        let childMessage = 'hello';
    }
    // 모든 함수는 return undefined; 들어있는거랑 똑같다 생략 가능.
}
printMessage();

// 6. Return a value
function sum(a, b){
    return a + b;
}
const result = sum(1,2); // 3
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit

// bad
function upgradeUser(user){
    if(user.point > 10) {
        // long update logic...
    }
}

// good
function upgradeUser(user){
    if(user.point <= 10){ // 조건이 맞지 않을 때는 빨리 return을 해서 함수를 종료시키는게 좋다
        return;
    }
    // 조건이 맞을때만 필요한 조건을 실행 
    // long upgrade logic...
}

// First-class function
// function are treated like any other variable 다른 변수와 마찬가지로
// can be assigned as a value to variable 변수에 할당이 되고
// can be passed as an argument to other functions. function에 parameter로 전달이 되며
// can be returned by another function 리턴값으로도 리턴이 된다

// 1. Function expression 위에것을 가능하게 한 것
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
// 함수가 선언 되기 이전에 호출해도 됨 (hoisting)
const print = function(){ // anonymous function 함수에 이름이 없음, 이름이 있는것은 named function
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else {
        printNo();
    }
}
// anonymous function
const printYes = function(){
    console.log('yes!');
};
// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function print(){
    console.log('no!');
    // print(); 함수 스스로를 부르는것 . 피보나치수 혹은 반복되는 평균수를 구할 때나 씀
};
randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous
// const simplePrint = function(){
//    console.log('simplePrint!');
// };

const simplePrint = () => console.log('simplePrint!');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};

// IIFE : Immediately Invoked Function Expression
// 함수 선언과 동시에 함수 호출
(function hello() {
    console.log('IIFE');
})();

// Fun quiz time❤
// function calculate(command, a, b)
// command : add덧셈, substract뺄셈, divide나눗셈, multiply곱셈, remainder나눗셈을 한 나머지

function calculate(command, a, b){
    switch (command) {
        case 'add':
            return a + b;
        case 'substract':
            return a - b;
        case 'divide':
            return a / b;
        case 'multiply':
            return a * b;
        case 'remainder':
            return a % b;
        default:
            throw error('unknown command');
        
    }
}
console.log(calculate('add', 2, 3));

// 정해진 데이터를 처리하는 경우 if문 보다는 switch문을 이용하는게 좋다!
