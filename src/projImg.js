import React from 'react'

function ProjImg(props) {
    const dimensions = {
        height: '28vw',
        width: '28vw'
    }

    if (props.device === 'tabletPortrait') {
        dimensions.height = '24vw'
        dimensions.width = '24vw'
    }

    return (
            <img src={props.imgSrc} alt="Project Description" style={dimensions}
            onMouseOver={props.onMouseOver}/>
    )
}

export default ProjImg
