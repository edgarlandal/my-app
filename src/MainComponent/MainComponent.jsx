/**
 * React Import
 */

import React from "react";

/**
 * Components Imports
 */

import AboutComponent from "./AboutComponent";

/**
 * Style import
 */

import './MainComponent.css';

/**
 * Componets imports
 */
import ResumeComponents from "./ResumeComponents";
import ProjectsComponents from "./ProjectsComponents";
import ContactComponent from "./ContactComponent";

class MainComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <section id="about">
                    <AboutComponent />
                </section>
                <section id="resume">
                    <ResumeComponents/>
                </section>
                <section id="projects">
                    <ProjectsComponents/>
                </section>
                <section id="contact">
                    <ContactComponent />
                </section>
            </div>
        )
    }
}

export default MainComponent;