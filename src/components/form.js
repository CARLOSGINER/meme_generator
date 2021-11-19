import Input from './inputText';

function Form (props) {
    return (
        <form className='form'>
            <label htmlFor="selectImg">First choose meme image!</label>
            <select name='selectImg' onChange={props.onSelectedImg}>
                {props.memesOptions.map(img=>(
                    <option key={img.id} value={img.name}>{img.name}</option>
                ))}
            </select>
            <Input  inputName='upperTextInput' inputChange={props.onTextChange} position='upper'  labelName="Upper line"/>
            <Input  inputName='lowerTextInput' inputChange={props.onTextChange} position='lower' labelName="Lower line"/>
            <input className='button' type="button" value="Download" onClick={props.onClickDownload}/>
        </form>
    
    )
}


export default Form 
