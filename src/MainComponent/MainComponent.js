/**
 * React Import
 */

import React from "react";

/**
 * Style import
 */

import './MainComponent.css';

const lenguages = [
    {
        src: "./img/logos/c-plus-plus.svg",
        alt: "c_plus_plus"
    },
    {
        src: "./img/logos/python.svg",
        alt: "python"
    },
    {
        src: "./img/logos/java.svg",
        alt: "java"
    },
    {
        src: "./img/logos/js.svg",
        alt: "html"
    },
    {
        src: "./img/logos/html.svg",
        alt: "js"
    },
    {
        src: "./img/logos/php.svg",
        alt: "js"
    }
]

const frameworks = [
    {
        src: "./img/frameworks/flask.svg",
        alt: "flask"
    },
    {
        src: "./img/frameworks/react.svg",
        alt: "react"
    },
    {
        src: "./img/frameworks/node.svg",
        alt: "node"
    },
    {
        src: "./img/frameworks/electron.svg",
        alt: "electron"
    },

]
const tools = [
    {
        src: "./img/tools/jquery.svg",
        alt: "flask"
    },

]


class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <section id="about">
                    <div className="container">
                        <h2>About me</h2>
                        <h3>Hello My name is Edgar Landa, I'm a Computer Engineer</h3>
                    </div>
                </section>

                <section id="resume">
                    <div className="container">
                        <h2>Resume</h2>

                        <div>
                            <h3>Skills</h3>
                            <di>
                                <h4>Programming Lenguage</h4>
                                <div className="grid-container">
                                    {
                                        lenguages.map((lenguage) => (
                                            <img src={lenguage.src} alt={lenguage.alt} />
                                        ))
                                    }
                                </div>
                            </di>

                            <div>
                                <h4>Frameworks</h4>

                                <div className="grid-container">
                                    {
                                        frameworks.map((framework) => (
                                            <img src={framework.src} alt={framework.alt} />
                                        ))
                                    }
                                </div>
                            </div>
                            <div>
                                <h4>Tools</h4>
                                <div className="grid-container">
                                    {
                                        tools.map((tool) => (
                                            <img src={tool.src} alt={tool.alt} />
                                        ))
                                    }
                                </div>
                            </div>
                            <h4>Protocols</h4>
                        </div>
                    </div>
                </section>

                <section id="projects">
                    <div className="container">
                        <h2>Projects</h2>
                    </div>
                </section>

                <section id="contact">
                    <div className="container"> 
                        <h2>Contact</h2>
                    </div>
                </section>
            </div>
        )
    }
}

export default MainComponent;