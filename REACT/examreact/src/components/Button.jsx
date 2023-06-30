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

export default function Button({title}){
  return(
  <button className={style.button}>{title}</button>
  )
}

