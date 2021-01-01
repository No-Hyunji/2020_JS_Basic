'use strict';

// 함수 선언
// 함수 호출

function doSomething(add){ // 함수 정의 , ():어떤 값을 전달받아올건지 인자를 정의하는 부분
    // 실제로 함수안에서 어떤 코드가 동작하는지, 코드를 작성하는 부분 2가지로 나누어져 있음
    console.log(add);
    const result = add(2, 3); // 받아온 값을 할당 
    console.log(result);
} // 함수를 선언만 한 상태, 출력X

function add(a, b){ // 각각 1과 2라는 값이 들어옴 
    const sum = a + b; // 리턴 안해줌. 
    return sum; // 계산한 값 전달
}
// 호출!
// doSomething(add); // 함수를 전달할 때는 이름만 이용해서 전달. 

// const result = add(1, 2);
// console.log(result); 

const addFun = add; // add라는 함수 이름만 할당하게 되면 addFun은 함수 자체만 가르키고 있다 
console.log(addFun); // 출력하면 함수자체가 나옴
addFun(1, 2); // 함수이름의 괄호를 이용해서 두가지 인자를 이용해 호출할 수 있다

// 호출할 땐 항상 괄호를 써야한다. 괄호를 쓰지 않고 함수 이름만 할당하면
// 함수 자체를 전달하는것이다. 함수를 호출할 때는 함수마다 정의된 인자값들을 정확하게 전달해 주어야 한다. 
// 필요한 인자값들을 정상적으로 잘 전달해서 함수를 호출. 
// 함수의 이름만 변수에 할당하고 함수에 전달하면 함수 전체를 전달한다!

function minusSomething(c, e){ 
    // 함수는 한번에 한가지 일만! 계산과 출력 둘다하지 말고 
    // 계산만 하고 리턴해주자
    const result2 = c - e;
    return result2;
}
// 인자값을 넣어 호출한다음 리턴받은값을 또다른 상수에 넣어 출력시키자. 
const result3 = minusSomething(2,3);
console.log(result3);

function Something(minusSomething){
    console.log(minusSomething);
    const result4 = minusSomething(5,8);
    console.log(result4);
}
Something(minusSomething);