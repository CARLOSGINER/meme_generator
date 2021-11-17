function display(props) {


    return (
        <div className='display_preview'>
            <img src={props.imgName} className='display_img' alt="" />
            <span className='display_upperLine'>{props.upperLine}</span>
            <span className='display_lowerLine'>{props.lowerLine}</span>
        </div>
    )
}

export default display