const Button=(props)=>{
    return <button className="btn" onClick={props.action} style={{color:props.color, backgroundColor:props.bgcolor}}>{props.text}</button>
}
export default Button;