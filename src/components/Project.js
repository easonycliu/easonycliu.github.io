import React from "react";
import {projects} from "./Data.js";

export default class Project extends React.Component {
    render() {
        return (
            <div>
                {
                    projects.map((project) => {
                        return (
                            <div>
                                <div className="link"><a href={project.ref}>{project.name}</a></div>
                                <p>{project.description}</p>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};