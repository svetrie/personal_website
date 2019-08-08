import React from 'react';

const headerStyle = {
    backgroundColor: 'white',
    //height: 75,
    height: '13vh',
    width: '100%',
    position: 'fixed',
    zIndex: 1
}

const h1Style = {
    fontFamily: 'Raleway',
    color: 'black',
    //fontSize: 34,
    fontSize: '2.8vw',
    fontWeight: 200,
    //paddingTop: 15,
    paddingTop: '3vh',
    textAlign: 'center'
}


export const Header = (props) => {

    if (props.device === 'tabletPortrait') {
        headerStyle.height = '8vh'
    } else if (props.device === 'tabletLandscape') {
        headerStyle.height = '10vh'
    } else if (props.device === 'mobile') {
        headerStyle.height = '7vh'
    }

    return (
            <div style={headerStyle}>
                <h1 style={h1Style}>Vetrie Senthilkumar</h1>
            </div>
    )
}
