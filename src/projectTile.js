import React from 'react'
import ProjImg from './projImg.js'
import ProjDescription from './projDescription.js'

class ProjectTile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showDescription: false}
        this.toggleTile = this.toggleTile.bind(this)
    }

    toggleTile() {
        if (this.state.showDescription) {
            this.setState({showDescription: false})
        } else {
            this.setState({showDescription: true})
        }
    }

    render() {
        if (this.state.showDescription) {
            return (<ProjDescription title={this.props.title} description={this.props.children}
                    onMouseOut={this.toggleTile} link={this.props.link} device={this.props.device}/>)
        } else {
            return (<ProjImg imgSrc={this.props.img} onMouseOver={this.toggleTile}
                    device={this.props.device}/>)
        }
    }
}

export default ProjectTile
