import React from "react";
import {researchExperience} from "./Data.js";

export default class Experience extends React.Component {
    render() {
        return (
            <div>
                {
                    researchExperience.map((experience) => {
                        return (
                            <div>
                                <h4>{experience.institution}</h4>
                                <ul>
                                    {
                                        experience.workings.map((work) => {
                                            return (
                                                <li>{work}</li>
                                            );
                                        })
                                    }
                                </ul>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};
