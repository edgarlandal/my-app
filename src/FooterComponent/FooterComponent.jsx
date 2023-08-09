/**
 * React Import
 */

import React from "react";

/**
 * Style import
 */

import './FooterComponent.css';


class FooterComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="container">
                <div className="footer">
                    <h3>By Edgar Miguel Landa Luna</h3>
                </div>
            </div>
        )
    }
}

export default FooterComponent;