import React from 'react';
import {isMobile, isTablet, isIOS, deviceType} from 'react-device-detect';

import logo from './logo.svg';
import './App.css';
import {Header} from './header.js'
import NavMenuContainer from './navMenuContainer.js'
import AboutMe from './aboutMe.js'
import Skills from './skills.js'
import Projects from './projects.js'
import ContactInfo from './contactInfo.js'

const errorMsgStyle = {
    color: 'black',
    fontSize: '3.5vh'
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {device: 'laptop'}
    }

    componentWillMount() {

        //|| (isIOS && window.innerWidth > 500) || (deviceType === 'tablet')

        if (isTablet) {
            if (window.innerWidth > window.innerHeight) {
                this.state.device = 'tabletLandscape'
            } else {
                this.state.device = 'tabletPortrait'
            }
        } else if (isMobile) {
            if (window.innerWidth < window.innerHeight) {
                this.state.device = 'mobile'
            } else {
                this.state.device = 'mobileLandscape'
            }
        } else {
            this.state.device = 'laptop'
        }
    }

    render() {
        if (this.state.device === 'mobileLandscape') {
            return (

                    <p style={errorMsgStyle}>ERROR: This website doesn't support landscape view on
                    mobile devices. Please change your orientation to
                    portrait mode and refresh your browser</p>

            )
        }

        return (

                <div className = 'App'>
                    <Header device={this.state.device}/>
                    <NavMenuContainer device={this.state.device}/>
                    <AboutMe device={this.state.device}/>
                    <Skills device={this.state.device}/>
                    <Projects device={this.state.device}/>
                    <ContactInfo device={this.state.device}/>
                </div>

        );
    }
}

export default App;

/*
function App() {
    let device = "laptop"

    if (window.innerWidth < 1224 && window.innerWidth > 500) {
        if (window.innerWidth > window.innerHeight) {
            device = 'tabletLandscape'
        } else {
            device = 'tabletPortrait'
        }
    } else if (window.innerWidth < 500) {
        device = 'mobile'
    }

    device = 'mobile'

  return (
    <div className = 'App'>
        <Header device={device}/>
        <NavMenuContainer device={device}/>
        <AboutMe device={device}/>
        <Skills device={device}/>
        <Projects device={device}/>
        <ContactInfo device={device}/>
    </div>
  );
}

export default App;
*/
