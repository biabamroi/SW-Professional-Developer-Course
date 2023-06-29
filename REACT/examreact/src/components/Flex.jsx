export default function Flex(props){
  // {children}
  return(
    <div style={{display:"flex",flexDirection:"column"}}>
      {props.children}
    </div>
  )
}