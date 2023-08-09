/**
 * React Import
 */

import React from "react";

/**
 * Style import
 */

import './NavComponent.css';


class NavComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="container">
                <nav className="menu">
                    <a href="#about">About</a>
                    <a href="#resume">Resume</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        )
    }
}

export default NavComponent;