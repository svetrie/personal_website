import React from 'react'
import SectionLink from './sectionLink.js'

class SectionLinkContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {backgroundColor: 'white', mouseOver: false}
        this.changeColoronHover = this.changeColoronHover.bind(this)
    }

    changeColoronHover() {
        if (!this.state.mouseOver) {
            this.setState({backgroundColor: '#bababa'})
            this.setState({mouseOver: true})
        } else {
            this.setState({backgroundColor: 'white'})
            this.setState({mouseOver: false})
        }
    }

    render() {
        return <SectionLink sectionName={this.props.sectionName} link={this.props.link}
        backgroundColor={this.state.backgroundColor} onHover={this.changeColoronHover}
        device={this.props.device} onClick={this.props.onClick}/>
    }
}

export default SectionLinkContainer
