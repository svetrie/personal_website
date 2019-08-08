import React from 'react';
import ReactDOM from 'react-dom';
import './SectionContent.css';
import {TextEditor} from './textEditor.js'
import './textEditorCode.css'


let sectionContainer = {
    backgroundColor: '#416091',
    //backgroundColor: '#5e6bcc',

    position: 'relative',
    //top: 75,
    top: '13vh',

    //height: 650
    height: '110vh'
}

const sectionTitlePosition = {
    //paddingTop: 20,
    paddingTop: '1.5%',
    paddingRight: 0,
    //paddingBottom: 5,
    paddingBottom: '1%', //1vh
    //paddingLeft: 15
    paddingLeft: '1.5%'//'2.5vw'
}

const quotePosition = {
    position: 'absolute',
    left: '4.75%',
    marginTop: '1.5%'//'3.5vh'
}

const summaryPosition = {
    //width: 600,
    width: '47%',//'45vw',
    position: 'absolute',
    //top: 140,
    top: '23%',//'24vh',
    //right: 20
    right: '2%'//'3vw'
}

const textEditorPosition = {
    margin: 'auto',
    position: 'absolute',
    //top: 150,
    top: '24%',//'26vh',
    //marginLeft: 15
    marginLeft: '1.5%'//'1.5vw'
}


function AboutMe(props) {
    if (props.device === 'tabletPortrait') {
        sectionContainer.top = '8vh'
        sectionContainer.height = '38vh'
    } else if (props.device === 'tabletLandscape') {
        sectionContainer.top = '10vh'
        sectionContainer.height = '72vh'
    } else if (props.device === 'mobile') {
        sectionContainer.top = '7vh'
        sectionContainer.height = '36vh'
    }

    return (
        <div id='About Me' style={sectionContainer}>

            <h1 className="SectionTitle" style={sectionTitlePosition}> About Me </h1>

            <h2 className='Quote' style={quotePosition}>“To be yourself in a world that
            is constantly trying to make you something else
            is the greatest accomplishment.” - Ralph Waldo Emerson</h2>

            <div style={textEditorPosition}>
                <TextEditor device={props.device}>
                        <div className="Code">
                            <span className="PurpleText">let </span>
                            <span className="YellowText">Vetrie Senthilkumar</span>
                            <span className="WhiteText"> = {'{'} </span>

                            <span className="RedText"><br/>&emsp;&nbsp;&nbsp;college</span>
                            <span className="WhiteText">: </span>
                            <span className="GreenText">'University of Illinois Urbana-Champaign'</span>
                            <span className="WhiteText">,</span>

                            <span className="RedText"><br/>&emsp;&nbsp;&nbsp;major</span>
                            <span className="WhiteText">: </span>
                            <span className="GreenText">'Computer Science and Statistics'</span>
                            <span className="WhiteText">,</span>

                            <span className="RedText"><br/>&emsp;&nbsp;&nbsp;graduationDate</span>
                            <span className="WhiteText">: </span>
                            <span className="GreenText">'May 2021'</span>
                            <span className="WhiteText">,</span>

                            <span className="RedText"><br/>&emsp;&nbsp;&nbsp;resume</span>
                            <span className="WhiteText">: </span>
                            <a className="GreenText" href={require("./documents/Fall2019ResumeVetrieUpdated.pdf")}>"VetrieSenthilkumarResume.pdf"</a>
                            <span className="WhiteText">,</span>

                            <span className="RedText"><br/>&emsp;&nbsp;&nbsp;homeTown</span>
                            <span className="WhiteText">: </span>
                            <span className="GreenText">'Hoffman Estates, IL'</span>
                            <span className="WhiteText">,</span>

                            <span className="RedText"><br/>&emsp;&nbsp;&nbsp;hobbies</span>
                            <span className="WhiteText">: [</span>
                            <span className="GreenText">'Tennis'</span>
                            <span className="WhiteText">, </span>
                            <span className="GreenText">'Reading'</span>
                            <span className="WhiteText">, </span>
                            <span className="GreenText">'Running'</span>
                            <span className="WhiteText">]</span>

                            <span className="WhiteText"><br/>{'}'}</span>

                        </div>
                </TextEditor>
            </div>

            <div style={summaryPosition}>
                <p className = 'SectionSummary'> Hello there! I'm Vetrie, a rising junior majoring in computer science and
                statistics at the University of Illinois. I have a passionate for
                full stack development as well as data engineering. I am always looking
                for opportunities to develop my career and my skills in these fields.
                Most recently, I interned at General Electric Aviation as a Data Analytics
                and Engineering Intern.
                <br/>
                <br/>
                When I'm not in front of my computer coding or binge watching
                Netflix, I like to play tennis and run to stay active. Recently, I've
                developed an interest in investing and trading foreign exchange currencies.
                </p>
            </div>

        </div>
    )
}

export default AboutMe
