import React from 'react';
import MenuIcon from './menuIcon.js';
import SectionLinkContainer from './sectionLinkContainer.js'

let menuIconPosition = {
    //top: 22,
    //right: 25,
    //top: '4%',
    //right: '2%',
    position: 'fixed',
    zIndex: 5
}

let sectionLinksPosition = {
    //top: 75,
    right: 0,
    position: 'fixed',
    zIndex: 5
}

class NavMenuContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {openMenu: false}
        this.toggleMenu = this.toggleMenu.bind(this)
    }

    toggleMenu() {
        if (this.state.openMenu) {
            this.setState({openMenu: false})
        } else {
            this.setState({openMenu: true})
        }
    }

    render() {
        if (this.props.device === 'mobile') {
            menuIconPosition = {...{top: '2%', right: '3%'}, ...menuIconPosition}
            sectionLinksPosition = {...{top: '7vh'}, ...sectionLinksPosition}
        } else {
            menuIconPosition = {...{top: '4%', right: '2%'}, ...menuIconPosition}
            sectionLinksPosition = {...{top: 75}, ...sectionLinksPosition}
        }

        if (this.state.openMenu) {
            return (
                <div>
                    <div style={menuIconPosition}>
                        <MenuIcon onClick={this.toggleMenu} device={this.props.device}/>
                    </div>

                    <div style = {sectionLinksPosition}>
                        <SectionLinkContainer sectionName='About Me' link='About Me'
                        device={this.props.device} onClick={this.toggleMenu}/>

                        <SectionLinkContainer sectionName='Skills' link='Skills'
                        device={this.props.device} onClick={this.toggleMenu}/>

                        <SectionLinkContainer sectionName='Projects' link='Projects'
                        device={this.props.device} onClick={this.toggleMenu}/>

                        <SectionLinkContainer sectionName='Contact Info' link='ContactInfo'
                        device={this.props.device} onClick={this.toggleMenu}/>
                    </div>
                </div>
            )
        } else {
            return (
                <div style={menuIconPosition}>
                    <MenuIcon onClick={this.toggleMenu} device={this.props.device}/>
                </div>
            )
        }
    }
}

export default NavMenuContainer
