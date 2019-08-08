import React from 'react';

const textEditorStyle = {
    backgroundColor: '#37383b',
    borderColor: '#bbbdbf',
    borderWidth: '0.6vw',
    //borderTopWidth: 25,
    borderStyle: 'solid',

    //height: 400,
    //width: 600
    width:  '45vw'
}

let numberingStyle = {
    fontFamily: 'Consolas',
    //fontSize: 18,
    fontSize: "1.35vw",
    color: '#91959c',
    paddingLeft: 5,
    lineHeight: 1.5
}

export class TextEditor extends React.Component {

    render() {

        let deviceStyle = {
            height : '70vh'
        }

        if (this.props.device === 'tabletPortrait') {
            deviceStyle.height = '23vh'
        } else if (this.props.device === 'tabletLandscape') {
            deviceStyle.height = '43vh'
        } else if (this.props.device === 'mobile') {
            deviceStyle.height = '17vh'
            deviceStyle.borderTopWidth = 5
            numberingStyle = {...numberingStyle, ...{paddingLeft: 1}}
        }

        const textEditorStyleDimensions = {...textEditorStyle, ...deviceStyle}

        return (<div style={textEditorStyleDimensions}>
                    <p style={numberingStyle}>1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12</p>
                    {this.props.children}
                </div>)
    }
}
