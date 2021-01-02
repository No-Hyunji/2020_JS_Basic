class Counter {
    constructor(runEveryFiveTimes){ // 처음에 생성이 되면 
        this.counter = 0; // counter라는 변수가 있는데 0부터 시작함
        this.callback = runEveryFiveTimes;
        // 0으로 초기가 된다. 
    }

    // class안에 함수가 있다. function이라고 안해줘도 됌 
    increase(){
        // 호출할때마다 counter에 숫자를 하나씩 증가할것이다
        this.counter++; 
        console.log(this.counter);
        // if(this.counter %5 === 0){
        //     console.log('yo!');
        // } 
        if(this.counter){
            this.callback && this.callback(this.counter);
        }
    }
}

function printSomething(num){
    console.log(`Wow! ${num}`);
}
function alertNum(num){
    alert(`alert! ${num}`);
}

const printCounter = new Counter(printSomething);
const printCounter = new Counter(alertNum);

