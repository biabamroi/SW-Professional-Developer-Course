// 상수, 변수
// 기존 자바스크립트 ES5
// ES6, ES7, ES2019... ES6 → ESNEXT
// ECMA Script는 javascript의 기반 스크립팅 언어 명세 


// ES6, var = Variable
// var name = '철수'
// console.log(name)



// ES6, let / const
// let 변화하는 내용을 넣을 때 쓰는 변수 선언법
// const = constant 상수, 항상 유지, 변화하지 않는 내용을 담을 때 사용
// let name = '철수'
// name = '영희'
// console.log(name)

// const myName = '지우'
// myName = '피카츄' // error 
// console.log(myName)



// // 함수
// // ES5
// function multiply (number){
//   return number * 2;
// }
// console.log(multiply(2))

// // ES6 화살표 함수
// // multiply2
// const multiply2 = (number)=>{
//   return number *2;
// }
// console.log(multiply2(3))

// // 화살표 함수에서 매개변수가 1개일 때만 가능한 방법
// const multiply3 = number => number *2;
// console.log(multiply3(5))



/** 
 * class - 객체지향프로그래밍
 * ES6부터 도입된 개념
 * */

// 슬라이더 라이브러리, Swiper-slide 라이브러리 

class Pokemon {
  constructor(){
    this.pokemonName = '피카츄'
  }
  showPokemonName(){
    // 포켓몬 이름을 출력해 주는 메소드
    console.log(this.pokemonName)
  }
}

class Trainer extends Pokemon {
  // 초기화, trainerName 기본값 = '지우'
  constructor(trainerName = '지우'){
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName(){
    console.log(this.name)
  }
}
const trainer = new Trainer('웅이')
// trainer.name = '웅이'
// console.log(trainer.name)
trainer.showTrainerName()
trainer.showPokemonName()

// class Pokemon {
//   // 초기화, trainerName 기본값 = '지우'
//   constructor(evolutionName = '미뇽'){
//     this.name = evolutionName
//   }
//   // trainer 이름 출력하는 메소드 ★
//   showEvolutionName(){
//     console.log(this.name)
//   }
// }
// const evolution = new Pokemon('신뇽')
// // 클래스.name 재할당
// evolution.name = '망나뇽'
// // console.log(evolution.name)
// evolution.showEvolutionName() // ★




// 함수가 클래스 안에 들어가면 메소드
// 변수가 클래스 안에 들어가면 프로퍼티




/**
 * 스프레드 연산자
 * 배열에서 쓸 수 있고 
 * 객체에서도 쓸 수 있다.
 * 반드시 ... (점 세 개)
 */

const pokemons = ['피카츄', '고라파덕', '이상해씨']
// 스프레드 연산자 '...' 배열을 통째로 가져와서 펼치는 역할 
const newPoke = [...pokemons, '파이리']
// 기존 방식
// pokemons.forEach(pokemon => newPoke.push(pokemon))
// newPoke.push('파이리')
// console.log(newPoke)
console.log(pokemons)

const numbers = [1,2,3]
// 4, 5를 추가해서 newNumbers 배열을 새로 생성하세요.
const newNumbers = [...numbers, 4, 5]
console.log(newNumbers)


// 객체 {}
const pokemonTrainer = {
  name:'지우',
  pokemon:"피카츄"
}
console.log(pokemonTrainer.name)
const newTrainer = {
  ...pokemonTrainer, // 내용을 가져와서 뿌리는
  age:20
}
console.log(newTrainer)


//
const char = {
  enLength: 26,
}
// char의 내용을 복사해서
// alphabet: characters 속성을 추가하여 출력
const num = {
  ...char,
  alphabet: 'characters'
}
console.log(num)



/**
 * rest 연산자
 * args = arguments (인수)
 * arguments 객체는 모든 함수 내에서 이용 가능한 지역 변수
 */

// const numbers = [1,2,3]
const filterNumbers = (...args) => {
  return args.filter(number => number === 1)
}

// 조건을 두 가지 걸러낼 때 
// OR 
// if(number === 1 || number === 3){}

// return args.filter(number=>{
  // if(number===1){
    // return number
  // }
// })
console.log(filterNumbers(1,3,6,7,8)) // [1]


// filterAlphabet 생성
// a,b,c,d 인수 필터링
// 조건 : alphabet === 'a' 
// 결과 : ['a']

const filterAlphabet = (...args) => {
  return args.filter(alphabet => alphabet === 'a')
}
console.log(filterAlphabet('a','b','c','d'))
// ['a'] filter 메소드는 결과를 배열로 만들어 준다.


// const pokemons = ['피카츄','고라파덕','이상해씨]
// 변수명 : filterPokemon
// 조건 : "피카츄"만 출력
// 결과 : ['피카츄']

const filterPokemons = (...args) => {
  return args.filter(pokemon => pokemon === '피카츄')
}
console.log(filterPokemons(...pokemons))



// console.log(1+'2')
// console.log(1+2)

// let res = 1+'2'
// console.log(res) // '12'
// console.log(typeof res)



/**
 * 구조분해 - Destructuring
 * structure - 구조
 * de - 분해
 */

const [a, b] = [1, 2]
console.log(a)
console.log(b)


// const pokemons = ['피카츄','고라파덕','이상해씨]
// 변수 3개 구조 분해해서 담아주세요.
// console.log() 결과 출력

const [c,d,e] = pokemons
console.log(c,d,e)

// const newMons = [...pokemons, '파이리']
// const newMons2 = [pokemons, '파이리']
// console.log(newMons2) // [[],]
// console.log(newMons2.length) // 2

// 공백 부분은 skip (건너뛴다)
const [first, , ,second] = pokemons
console.log(first, second) // ['피카츄', undefined]
// 배열 중 정해진 순서대로 출력



/**
 * 객체 구조분해
 */

const { nickname, age } = {
  nickname: '홍길동',
  age: 16
}
console.log(nickname, age)


/**
 * map 배열 메소드
 * forEach / Map의 차이
 * map은 결과를 새로운 배열로 반환해 준다.
 */

// const numbers = [1,2,3]
const doubleNumbers = numbers.map(num=>num*2)
console.log(doubleNumbers) // [2, 4, 6]


// const pokemons = ['피카츄','고라파덕','이상해씨]
// map 활용하여 문자열을 더해주세요.
// '너로 정했다!'
// namedPokemon

const namedPokemon = pokemons.map(pokemon=>pokemon+', 너로 정했다!')
// const namedPokemon = pokemons.map(pokemon=>pokemons+', 너로 정했다!')
console.log(namedPokemon)



