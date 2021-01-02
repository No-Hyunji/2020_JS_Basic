// false : 0, -0, ''(텅텅빈 문자열), null, undefined
// true : -1, 'hello'(값이들어있는 문자열), [](빈 배열 : 오브젝트이기때문에)

let num; // 값을 주지 않는다면 undefined이기때문에 false
if(num){
    console.log('true!');
}else{
    console.log('false!');
}

num && console.log(num);
// num이 true이면, 즉 num에 값이 있다면 num을 출력할거야 
// && 연산자는 앞에가 트루여야지 뒤가 실행됨 
// 위 코드보단 이 코드가 더 간결하기때문에 이렇게 많이 씀 