/**
 * React Import
 */

import React from "react";
import { TextField } from "@mui/material";
import Textarea from '@mui/joy/Textarea';


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
        alt: "jquery"
    },
    {
        src: "./img/tools/bootstrap.svg",
        alt: "boostrap"
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
                        <div className="about">
                            <h2>About me</h2>
                            <h3>Hello My name is Edgar Landa, I'm a Computer Engineer</h3>
                        </div>
                    </div>
                </section>
                <section id="resume">
                    <div className="container">
                        <div className="resume">
                            <h2>Resume</h2>
                            <div>
                                <h3>Skills</h3>
                                <di>
                                    <h4>Programming Lenguage</h4>
                                    <div className="grid-container">
                                        {
                                            lenguages.map((lenguage, index) => (
                                                <div style={{ 'backgroundImage': `url(${lenguage.src})` }} className="img-containers" >
                                                </div>
                                            ))
                                        }
                                    </div>
                                </di>
                                <div>
                                    <h4>Frameworks</h4>
                                    <div className="grid-container">
                                        {
                                            frameworks.map((framework, index) => (
                                                <div style={{ 'backgroundImage': `url(${framework.src})` }} className="img-containers" >
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <div>
                                    <h4>Tools</h4>
                                    <div className="grid-container">
                                        {
                                            tools.map((tool, index) => (
                                                <div style={{ 'backgroundImage': `url(${tool.src})` }} className="img-containers" >
                                                </div>
                                            ))
                                        }
                                    </div>
                                </div>
                                <h4>Protocols</h4>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="projects">
                    <div className="container">
                        <div className="projects">
                            <h2>Projects</h2>
                        </div>
                    </div>
                </section>
                <section id="contact">
                    <div className="container">
                        <div className="contact">
                            <h2>Contact</h2>
                            <div className="form-container">
                                <div className="form-content">
                                    <TextField fullWidth label="Enter Your Name" id="fullWidth" />
                                </div>
                                <div className="form-content">
                                    <TextField fullWidth label="Enter Your Email" id="fullWidth" />
                                </div>
                                <div className="form-content">
                                    <Textarea
                                        placeholder="Type in here…"
                                        minRows={2}
                                        maxRows={4}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default MainComponent;