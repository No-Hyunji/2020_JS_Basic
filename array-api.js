// Q1. make a string out of an array
// 주어진 배열을 string으로 변환
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();// 괄호 안에 구분자를 전달해 주지 않아도 자동적으로 콤마(,)로 구분지어줌.
    console.log(result);
    // join : 배열에 있는 모든 아이들을 더해서 string으로 리턴한다.
    // 하지만 그냥 string으로 만들지 않고, 내가 전달해준 separator라는 문자열을 통해서
    // 각각 구분자를 넣어서 string으로 만들어줌. 
}

// Q2. make an array out of a string
{
const fruits = '🍎, 🥝, 🍌, 🍒';
const result = fruits.split(',',2); // 구분자는 꼭 전달!
console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
const array = [1, 2, 3, 4, 5];
const result = array.reverse();
console.log(result); // 배열자체와 리턴값도 변화시킨다. 
console.log(array); // 순서 자체가 바껴있다
}

// Q4. make new array without the first two elements
{
const array = [1, 2, 3, 4, 5];
// const result = array.splice(0,2);배열 자체에서 삭제
// 새로운 배열 만들어야하기때문에 splice는 맞지 않음 
const result = array.slice(2, 5); // 배열에서 원하는부분만 리턴해서받아오고싶을 때
console.log(result);
console.log(array);
}

class Student {
constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
}
}
const students = [
new Student('A', 29, true, 45),
new Student('B', 28, false, 80),
new Student('C', 30, true, 90),
new Student('D', 40, false, 66),
new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result);
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result);
}

// Q8. check if there is a student with the score lower than 50
{
    console.clear();
    const result = students.some((student) => student.score < 50);
    // 하나라도 50보다 작으면 true가 리턴됨 
    console.log(result);

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2);
    console.log(!true);
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result / students.length);
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(student => student.score).join();
    console.log(result);
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
    .map(student => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result);

}