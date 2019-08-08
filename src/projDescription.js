import React from 'react'

const descriptionStyle = {
    backgroundColor: '#808080',

    paddingLeft: 10,
    paddingRight: 10,

    textAlign: 'center',
    fontFamily: 'Raleway',
    fontSize: '3.5vh',
    fontWeight: 300,
    color: 'white'
}

function ProjDescription(props) {

    const dimensions = {
        height: '28vw',
        width: '28vw'
    }

    if (props.device === 'tabletPortrait') {
        dimensions.height = '24vw'
        dimensions.width = '22vw'
        descriptionStyle.fontSize = '1.25vw'
    } else if (props.device === 'tabletLandscape') {
        dimensions.width = '26vw'
        descriptionStyle.fontSize = '1.60vw'
    } else if (props.device === 'mobile') {
        descriptionStyle.fontSize = '1.65vw'
        dimensions.width = '23vw'
    }

    const descriptionStyleDimensions = {...descriptionStyle, ...dimensions}

    return (
        <div style={descriptionStyleDimensions} onMouseOut={props.onMouseOut}>
            <br/>
            <p>{props.title}</p>
            <br/>
            <p>{props.description}</p>
            <br/>
            <a href={props.link} style={{wordWrap: 'break-word'}}>{props.link}</a>
        </div>
    )
}

export default ProjDescription
