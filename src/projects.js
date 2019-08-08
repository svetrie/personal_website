import React from 'react';
import './SectionContent.css';
import './textEditorCode.css'
import ProjectTile from './projectTile.js'

const sectionContainer = {
    position: 'relative',
    backgroundColor: '#629e70',
    //height: 1000
    height: '175vh'
}

const sectionTitlePosition = {
    /*
    paddingTop: 20,
    paddingLeft: 15
    */

    paddingTop: '1.5%',
    paddingRight: 0,
    paddingBottom: '1%',
    paddingLeft: '1.5%'
}

const quotePosition = {
    //marginTop: 25

    position: 'absolute',
    left: '33%',
    marginTop: 0
}

const project1Position = {
    position: 'absolute',
    //left: 25,
    //top: 150

    left: '3%',
    top: '15%'
}

const project2Position = {
    position: 'absolute',
    //left: 460,
    //top: 150
    left: '36%',
    top: '15%'
}

const project3Position = {
    position: 'absolute',
    //left: 885,
    //top: 150
    left: '69%',
    top: '15%'
}

const project4Position = {
    position: 'absolute',
    //left: 25,
    //top: 575
    left: '3%',
    top: '58%'
}

const project5Position = {
    position: 'absolute',
    //left: 460,
    //top: 575
    left: '36%',
    top: '58%'
}

function Projects(props) {
    if (props.device === 'tabletPortrait') {
        sectionContainer.height = '56vh'
    } else if (props.device === 'tabletLandscape') {
        sectionContainer.height = '110vh'
    } else if (props.device === 'mobile') {
        sectionContainer.height = '46vh'
    }

    return (
        <div id='Projects' style={sectionContainer}>
            <h1 className="SectionTitle" style={sectionTitlePosition}> Projects </h1>
            <h2 className='Quote' style={quotePosition}> “Talk is cheap. Show me the code.” - Linus Torvalds</h2>

            <div style={project1Position}>
                <ProjectTile title='UIUC Course Data Explorer' img={require("./images/GradingChart.png")}
                link='http://uiuccoursedataexplorer.me/'  device={props.device}>
                    Award winning interactive website that allows students to explore grade distribution
                    information for specific courses, professors, general education categories, and majors
                </ProjectTile>
            </div>

            <div style={project2Position}>
                <ProjectTile title='Chicago Crime Analysis' img={require("./images/ChicagoCrimeMap.png")}
                link='https://svetrie.shinyapps.io/chicago_crime_app/' device={props.device}>
                    Web app containing interactive map of Chicago with crime markers, time series graphs
                    for various types of crimes, and crime statistics bar charts for each of Chicago's districts.
                    Created with R Shiny.
                </ProjectTile>
            </div>

            <div style={project5Position}>
                <ProjectTile title='ConnectN' img={require("./images/connectNpic.jpg")}
                link='https://github.com/svetrie/ConnectN' device={props.device}>
                    Variation of traditional Connect4 that allows players to choose the number of
                    consecutive checkers needed to win, which can range from 4 to 8.
                    Built in C++ using the openFrameworks library.
                </ProjectTile>
            </div>

            <div style={project4Position}>
                <ProjectTile title='Gin Rummy Strategies' img={require("./images/cards.jpg")}
                link='https://github.com/svetrie/Gin-Rummy-Strategies' device={props.device}>
                    Simulates the popular card game gin rummy. Uses a game engine to run different
                    AI strategies and have them compete against each other. Written in Java.
                </ProjectTile>
            </div>

            <div style={project3Position}>
                <ProjectTile title='Forex Simulator' img={require("./images/candlestickChart.jpg")} device={props.device}>
                    Allows users to manage a portfolio of foreign currencies
                    using features like candlestick charts, fibonacci retracements, and various
                    moving averages. In process of being developed with React.js and Django
                </ProjectTile>
            </div>

        </div>
    )
}

export default Projects
