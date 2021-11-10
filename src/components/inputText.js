function Input (props) { 

    return(
    <div className={'input_'+props.position}>
        <label htmlFor={props.position} >{props.labelName}</label>
        <input name={props.inputName} type="text" onChange={props.inputChange} />
    </div>
    )
    
}


export default Input;