// Destructuring
// 구조 분해 할당
// 구조를 분해해서 값을 가져온다. 

let person = {
  name : 'kai',
  age : 27
}
console.log(person.name)
console.log(person.age)


// 단축 표기법
// 먼저 변수 선언 후 객체를 쓰고 그 안에 내가 가져오고 싶은 key값 입력
// person이라는 객체에서 name과 age라는 key값을 분해한 값을 let으로 선언한 변수에 할당

let {name, age} = person;
console.log(name, age)

// 해당 문법을 Array에 적용
// num1, num2, num3 라는 변수가 생성되고 변수 안에 배열 순서대로 num1에 arr 배열의 0번째 값이 할당
let arr = [1,2,3,4,5];
let [num1, num2, num3] = arr;
console.log(num1, num2, num3)


// 배열 안에 나머지값 가져오기
// ...rest
// 배열 안에서 원하는 값을 뽑아낸 후, 나머지값을 저장하고 싶을 때 사용
// rest 대신 다른 이름을 사용해도 상관없다.
// 변수 앞의 ...이 가장 마지막에 위치해야 한다.

// let [a,...rest] = arr;
let [a, b, c,...rest] = arr;
console.log(rest)

