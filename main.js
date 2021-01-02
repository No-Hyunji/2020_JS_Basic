// 프로그래밍 언어에서 우리가 처리해야하는 데이터를 담을 수 있도록 도와주는 아이 : 변수
// 담을 수 있는 가장 작은 단위의 데이터들을 primitive datatype이라고 한다. 
// number, string, boolean, null, undefined, symbol(잘 안씀)
let number = 2; // 로직과 연관된 좀더 의미있는 이름을 지정하자
let number2 = number; // 복사해서 할당
console.log(number); //2
console.log(number2); //2

number2 = 3;

console.log(number); //2
console.log(number2); //3

// 위 primitive datatype을 제외한 모든 애들은 object datatype
// 오브젝트 : 최소한 한두가지의 다양한 데이터를 한군데다 묶어놓은 아이다 
// 함수, 배열, 등등 다 오브젝트 
// 오브젝트도 각각 키 마다 할당이 따로 되어져있고 얘네들을 묶어서 가리키고있는 주소가 있는데
// 그 주소만 obj라는 변수에 할당이 되는것. 
let obj = {
    name: 'hyunji',
    age: 5,
};
// obj를 const로 선언하게 되면, reference는 잠겨있기때문에 전체를 변경하는건 불가능하지만,
// obj.name = 'dumb'; 이런식으로 레퍼런스가 가리키는 값을 이용해서 변경이 가능하다. 
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);
// primitive type , object type 변수를 할당 할 때 변수안에 들어있는 값이 복사되어 들어온다. 
// 하지만 primitive데이터타입은 데이터 자체가 복사되어들어오지만 
// 오브젝트는 오브젝트를 가르키고있는 주소만 가르키고 있기때문에 주소만 들어온다 

obj.name = 'uni'; // obj나 obj2를 이용해 값을 변경해도 둘다 동일하게 값이 변경된다. 
console.log('--------');
console.log(obj.name);
console.log(obj2.name);

const num1 = 1;
const num2 = 2;
const result = num1 + num2;
console.log(result);

const num3 = 1;
const num4 = 2;
const result2 = num3 + num4;
// 반복되는것들을 함수를 이용하면 위에것들 재사용 가능 
function add(a, b){ // 괄호안에있는 아이들이 몇가지의 인자를 받는지 정의 
    return a + b;
}

const sum = add(3, 4);
console.log(sum);

const doSomething = add;

const result3 = doSomething(2,3);
console.log(result3);

// 아무런 인자를 받지 않는 함수는 인풋을 받지 않는다. 
// function print(){
//     console.log('print')
// }
// print(2, 3);

function print(a, b){
    console.log(`${a} ${b}`);
}

print(4,100);

function divide(num5, num6){
    return num5 / num6;
}
function surprise(operator){ // operator에는 add의 reference가 복사되어 전달되어있다. 
    // operator를 호출한다는 것은 당연히 add를 수행하는 것과 동일하다!!!
    // const result4 = operator(); 
    // 인자값 없이 호출하면 NaN이 출력된다. 
    const result4 = operator(12,6); // add(5, 8)을 호출한 것과 같다 
    console.log(result4);
}

// surprise(); operater는 함수가 아니기때문에 이대로호출하면 오류가 난다. 
surprise(divide);

// 함수를 전달한다는 것은 사실 함수의 레퍼런스가 복사되어 전달되는것이다. 
// 전달된 레퍼런스를 일반함수를 호출하는 것 처럼 괄호를 이용해서 호출할 수가 있다. operator();


