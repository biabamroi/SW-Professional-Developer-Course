let person = {
  name : 'John',
  age : 23
}

// person 이라는 객체를 복사하는 방법
// ... => 객체의 깊은 복사(deep copy)를 할 때 사용
// 깊은 복사 시 기존 객체가 그대로 복사되어 새로운 객체가 생성된다.
// 내용은 똑같지만, 두 개의 객체가 되는 것.(서로 완전 다른 객체)

let person2 = {...person}
console.log(person)
console.log(person2)

// ... 없이 얕은 복사(Shallow capy)
let person3 = person;
console.log(person3)

// 주소값을 비교
// 얕은 복사(shallow copy)를 했을 경우 새로운 객체를 생성하는 게 아니라
// 기존 객체의 주소값을 복사, 객체는 1개 - 객체를 참조하는 변수가 2개
// person3 기존 객체를 참조할 뿐, 새로운 객체가 생성된 게 아니다.
// 리액트는 deep copy 

// 객체를 가르키고 있는 화살표가 동일하지 않다.
console.log(person == person2) // deep copy : false
// 객체를 가르키고 있는 화살표가 동일하다.
console.log(person == person3) // shallow copy : true


let num = [1,2,3,4,5];
let num2 = [...num,6,7,8];
console.log(num2)
console.log(num == num2)

// num이랑 num2 값을 둘 다 복사한 새로운 객체 생산
let num3 = [...num, ...num2]
console.log(num3)
