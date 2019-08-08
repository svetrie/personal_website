import React from 'react'

function SectionLink(props) {
    let sectionLinkBoxStyle = {
        height: 30,
        width: 120,
        zIndex: 5,

        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 1,

        backgroundColor: props.backgroundColor,

        color: 'black',
        fontSize: 16,
        fontFamily: 'Raleway',
        textAlign: 'center',
        paddingTop: 12
    }

    /*
    if (props.device === 'tabletPortrait') {
        sectionLinkBoxStyle.height = ''
    } else if (props.device === 'tabletLandscape') {
        sectionLinkBoxStyle.height = 20
        sectionLinkBoxStyle.width = 70
        sectionLinkBoxStyle.fontSize = 14
    }*/

    if (props.device === 'mobile') {
        sectionLinkBoxStyle.height = 20
        sectionLinkBoxStyle.width = 80
        sectionLinkBoxStyle.fontSize = 10
        sectionLinkBoxStyle.paddingTop = 4
    }

    return (
        <a href={"#" + props.link} style={{textDecoration:'none'}}>
            <div style={sectionLinkBoxStyle} onMouseOver={props.onHover}
            onMouseOut={props.onHover} onClick={props.onClick}>
                {props.sectionName}
            </div>
        </a>
    )
}

export default SectionLink
