
import { frameworks, tools, lenguages } from "../data/data";

import ListComponent from "./ListComponent.jsx";

function ResumeComponents() {
    return (
        <div className="container">
            <div className="resume">
                <h2>Resume</h2>
                <div>
                    <h3>Skills</h3>
                    <div>
                        <h4>Programming Lenguage</h4>
                        <ListComponent array={lenguages} />
                    </div>
                    <div>
                        <h4>Frameworks</h4>
                        <ListComponent array={frameworks} />
                    </div>
                    <div>
                        <h4>Tools</h4>
                        <ListComponent array={tools} />
                    </div>
                    <h4>Protocols</h4>
                </div>
            </div>
        </div>
    )
}

export default ResumeComponents