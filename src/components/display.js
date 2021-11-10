function display(props) {


    return (
        <div className='display_preview'>
            <img className='display_img' src={"/img/"+props.imgName+".jpg"} alt="" /> 
            <span className='display_upperLine'>{props.upperLine}</span>
            <span className='display_lowerLine'>{props.lowerLine}</span>
        </div>
    )
}

export default display