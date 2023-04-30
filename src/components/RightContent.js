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
                    <h1>Yicheng Liu</h1>
                    <p>I am now an undergraduate student at Shanghai Jiao Tong University (SJTU), majoring in Automation (Sensor).</p>
                    <p>
                        I have been working as a research intern at John Hopcoft Center since 2021, advised by Guanjie Zheng. 
                        I am now a student at Institution of Parallel And Distributed System (IPADS), advised by Prof. Changliu Liu.
                    </p>
                    <p>
                        <a href="mailto:liuyicheng1515@sjtu.edu.cn">Email</a> / <a href="https://liuyc1515.github.io/yichengliu.github.io/cv">CV</a> / <a href="https://github.com/liuyc1515/">GitHub</a>
                    </p>
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
                        In security, there are three main targets, Confidentiality, Integrigy, Avalibility (CIA). Currently most researches
                        forcus on the former two targets. And I strive to push the limits of defending avalibility based attacks while keep 
                        the ability in keeping confidentiality and integrity.
                    </p>

                    <p>
                        I am also happy to try up some exciting topics like distributed storage, GPU accelerated training, etc. These are especially needed
                        because recent days big models in AI sprang up in CV, NLP, and will be in more and more other fields, and to support these big models,
                        GPU cluster is needed to accelerate training, and distributed storage is needed to store huge amount of training dataset.
                    </p>

                    <p>
                        I have an experience on research of Artificial Intelligence. And I am willing to combime this experience with system research, e.g., AI for SYS.
                        As I know, there are already some AI technologies applied to testing area, like reinforcement learning based fuzzer. And I think since there are 
                        many predicting related situations, e.g., cache & memory swap, AI can take a more important role in system area.
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
