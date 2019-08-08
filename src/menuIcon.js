import React from 'react';

let menuIconBar = {
    backgroundColor: 'black',
    marginTop: 6,
    marginBottom: 6
}

function MenuIcon(props) {

    let deviceStyle = {
        width: 35,
        height: 4
    }

    if (props.device === 'mobile') {
        deviceStyle.width = 25
        deviceStyle.height = 2
    }

    const menuIconStyle = {...deviceStyle, ...menuIconBar}

    return (
        <div onClick={props.onClick}>
            <div style={menuIconStyle}></div>
            <div style={menuIconStyle}></div>
            <div style={menuIconStyle}></div>
        </div>
    )
}

export default MenuIcon
