import Input from './inputText';

function Form (props) {
    return (
        <form className='form'>
            <label htmlFor="selectImg">First choose meme image!</label>
            <select name='selectImg' onChange={props.onSelectedImg}>
                {props.imgOptions.map(img=>(
                    <option value={img.value}>{img.optionName}</option>
                ))}
            </select>
            <Input  inputName='upperTextInput' inputChange={props.onTextChange} position='upper'  labelName="Upper line"/>
            <Input  inputName='lowerTextInput' inputChange={props.onTextChange} position='lower' labelName="Lower line"/>
            <input className='button' type="button" value="Download" />
        </form>
    
    )
}


export default Form 
