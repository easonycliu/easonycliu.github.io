import React from "react";
import Experience from "./Experience.js";
import { Conference, Arxiv } from "./Publication.js";
import Project from "./Project.js";

export default class RightContent extends React.Component {

    componentDidUpdate() {
        this.scrollToAnchor(this.props.anchor);
    };
    
    scrollToAnchor(id) {
        console.log(`right content scroll into ${id}`);
        document.getElementById(id).scrollIntoView();
    };

    render() {
        return (
            <div>
                <div id="Intro">
                    Hello
                </div>

                <div id="Research Experiences">
                    <h2>Research Experiences</h2>
                    <Experience />
                </div>

                <div id="Publications">
                    <h2>Publications</h2>
                    <h4>Conference</h4>
                    <Conference />
                    <h4>arXiv</h4>
                    <Arxiv />
                </div>

                <div id="Research Interests">
                    <h2>Research Interests</h2>
                    <p>
                        Currently I am focusing on system security, especially virtual machine (VM) security and container security.
                    </p>

                    <p>
                        I am also happy to try up some exciting topics like distributed storage, GPU accelerated training, etc.
                    </p>

                    <p>
                        I have an experience on research of Artificial Intelligence. And I am willing to combime this experience with system research, e.g., AI for SYS.
                    </p>
                </div>

                <div id="Reviewer Services">
                    <h2>Reviewer Services</h2>
                    <ul>
                        <li>Knowledge Discovery and Data Mining (KDD), 2023</li>
                        <li>International Conference on Machine Learning (ICML), 2023</li>
                        <li>International Joint Conferences on Artificial Intelligence (IJCAI), 2023</li>
                    </ul>
                </div>

                <div id="Projects">
                    <h2>Projects</h2>
                    <Project />
                </div>
            </div>
        );
    };
};
