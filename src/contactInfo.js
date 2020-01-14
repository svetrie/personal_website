import React from 'react';
import './SectionContent.css';

const sectionContainer = {
    position: 'relative',
    backgroundColor:'#e0e0e0',
    //backgroundColor: '#deded5',
    height: '45vh'
}

const sectionTitlePosition = {
    paddingTop: '1.5%',
    paddingRight: 0,
    paddingBottom: '1%',
    paddingLeft: '1.5%'
}

const contactImg = {
    height: '6vw',
    width: '6vw',
    float:'left',
    paddingRight: '4vw',
    fill: 'white'
}

const contactContainer = {
    width: '50%',

    position: 'absolute',
    top: '50%',
    right: '20%'

}

function ContactInfo(props) {
    if (props.device === 'tabletPortrait') {
        sectionContainer.height = '20vh'
    } else if (props.device === 'tabletLandscape') {
        sectionContainer.height = '30vh'
    } else if (props.device === 'mobile') {
        sectionContainer.height = '12vh'
    }

    return (
        <div id="ContactInfo" style={sectionContainer}>
            <h1 className="SectionTitle" style={sectionTitlePosition}> Contact Info </h1>

            <p className="SectionSummary">Have any questions or comments? Or simply want
            to connect and have a conversation? Don't hesitate to reach out!</p>

            <div style={contactContainer}>
                <a href="https://github.com/svetrie" target="_blank">
                <img src={require('./images/Github_logo.svg')} style={contactImg}/></a>

                <a href="https://www.linkedin.com/in/vetrie-senthilkumar-50a109164/" target="_blank">
                <img src={require('./images/LinkedIn_logo.png')} style={contactImg}/></a>

                <a href="mailto:vetsenthilkumar@gmail.com" target="_blank">
                <img src={require('./images/email_logo.png')} style={contactImg}/></a>

                <a href="https://www.facebook.com/profile.php?id=100004418595664" target="_blank">
                <img src={require('./images/facebook_logo.svg')} style={contactImg}/></a>
            </div>
        </div>
    )
}

export default ContactInfo
