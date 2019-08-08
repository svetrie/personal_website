import React from 'react';
import './SectionContent.css';
import {TextEditor} from './textEditor.js'
import './textEditorCode.css'

const sectionContainer = {
    backgroundColor: '#ad6161',
    //height: 650,
    height: '110vh',
    //marginTop: 75,
    marginTop: '12vh',
    position: 'relative'
}

const sectionTitlePosition = {
    /*
    position: 'absolute',
    paddingTop: 20,
    paddingLeft: 15
    */

    paddingTop: '1.5%',
    paddingRight: 0,
    paddingBottom: '1%',
    paddingLeft: '1.5%'
}

const quotePosition = {
    //paddingTop: 85

    position: 'absolute',
    left: '20%',
    marginTop: '1.5%'
}

const textEditorPosition = {
    /*
    margin: 'auto',
    position: 'absolute',
    top: 155,
    marginLeft: 15
    */

    margin: 'auto',
    position: 'absolute',
    //top: 150,
    top: '24%',//'26vh',
    //marginLeft: 15
    marginLeft: '1.5%'//'1.5vw'
}

const summaryPosition = {
    /*
    width: 600,
    position: 'absolute',
    top: 150,
    left: 650
    */

    width: '47%',
    position: 'absolute',
    top: '23%',
    right: '2%'
}
/*
Vetrie_Senthilkumar.programming_languages = ['Python',
 'C++', 'Java', 'Javascript', 'R', 'MIPS Assembly']

Vetrie_Senthilkumar.technologies_used = ['R Shiny',
'React.js', 'Postgresql', 'openFrameworks', 'Git',
'Reportlab', 'Verilog']
*/

function Skills(props) {
    if (props.device === 'tabletPortrait') {
        sectionContainer.marginTop = '8vh'
        sectionContainer.height = '38vh'
    } else if (props.device === 'tabletLandscape') {
        sectionContainer.marginTop = '7vh'
        sectionContainer.height = '70vh'
    } else if (props.device === 'mobile') {
        sectionContainer.height = '36vh'
        sectionContainer.marginTop = '7vh'
    }

    return (
        <div id='Skills' style={sectionContainer}>
            <h1 className="SectionTitle" style={sectionTitlePosition}> Skills </h1>
            <h2 className='Quote' style={quotePosition}>"Ever tried. Ever failed. No matter.
            Try again. Fail again. Fail better." - Samuel Beckett</h2>

            <div style={textEditorPosition}>
                <TextEditor device={props.device}>
                    <div className='Code'>
                        <span className='YellowText'>Vetrie_Senthilkumar</span>
                        <span className='WhiteText'>.</span>
                        <span className='RedText'>programming_languages</span>
                        <span className='WhiteText'>= [</span>
                        <span className="GreenText">'Python'</span>
                        <span className="WhiteText">, </span>
                        <br/>
                        <span className="GreenText">'C++'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'Java'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'Javascript'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'R'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'MIPS Assembly'</span>
                        <span className="WhiteText">]</span>

                        <br/>
                        <br/>

                        <span className='YellowText'>Vetrie_Senthilkumar</span>
                        <span className='WhiteText'>.</span>
                        <span className='RedText'>technologies_used</span>
                        <span className='WhiteText'>= [</span>
                        <span className="GreenText">'R Shiny'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'React.js'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'Postgresql'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'openFrameworks'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'Git'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'Reportlab'</span>
                        <span className="WhiteText">, </span>
                        <span className="GreenText">'Verilog'</span>
                        <span className="WhiteText">]</span>
                    </div>
                </TextEditor>
            </div>

            <div style={summaryPosition}>
                <p className='SectionSummary'> To stay relevant in a rapidly evolving field, I believe that it's
                crucial to embrace new technologies and be versatile. I'm always eager to add new languages, frameworks,
                and libraries to my ever expanding toolkit, but for now, I'm comfortable developing
                software using OOP languages like Java and C++, wrangling data and building models using
                Python and R, designing beautiful front end interfaces with Javascript and HTML/CSS,
                or getting down to the nitty gritty details with a low level language like Assembly.
                </p>
            </div>

        </div>
    )
}


export default Skills
