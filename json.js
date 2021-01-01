// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color:'white',
    size:null,
    birthData:new Date(),
    jump: () => {
        console.log(`${name} can jump!`)
    }, // 함수는 오브젝트에 있는 데이터가 아님!
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'hyunji' : value;
});

// 2. JSON to Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
}); //우리가 변환하고싶은 json을 전달하기만 하면 됨
console.log(obj);
rabbit.jump();
// obj.jump();

console.log(rabbit.birthData.getDate());
// console.log(obj.birthData.getDate());