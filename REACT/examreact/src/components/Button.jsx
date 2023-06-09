// 두 객체는 같은 내용, 다른 표현 방법이다.
// 객체
// {key: value}
// ------------------------
// {
// name: name,
// color: color,
// size: size
// }
// ------------------------
// { name, color, size }
// ------------------------

// export default function Button({title, color, size, border, bgc, right}){
//   return(
//     <button style={{color:color,
//       fontSize:size,
//       borderColor:border,
//       backgroundColor:bgc,
//       marginBottom:right
//     }}>{title}</button>
//   )
// }

// export default function Button(props){
//   return(
//     <button style={{color:props.color,
//       fontSize:props.size,
//       borderColor:props.border,
//       backgroundColor:props.bgc,
//       marginBottom:props.right
//     }}>{props.title}</button>
//   )
// }


import style from './Button.module.css'

export default function Button({title, primary, secondary}){
  // 3항 연산자
  // IF문 true false 
  const isPrimary = primary ? style.primary : ''
  // if(primary) {
  // return style.primary
  // }else{
  // return ''  
  // }
  
  const isSecondary = secondary ? style.secondary : ''

  return(
  <button className={[style.button, isPrimary, isSecondary].join(' ')}>{title}</button>
  )
}
//   return(
//   <button className={[style.button, style.primary].join(' ')}>{title}</button>
//   )
// }

// 두 가지 이상 - 배열 []
// css 작동을 위한 ].join(' ') 띄어쓰기 합체 ex. button primary 

