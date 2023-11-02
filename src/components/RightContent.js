import React from "react";
import Experience from "./Experience.js";
import { Conference, Arxiv } from "./Publication.js";
import Project from "./Project.js";
import cv from "../assets/CV_Yicheng_Liu.pdf"

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
                    <p>I am now an undergraduate student at Shanghai Jiao Tong University (SJTU).</p>
                    <p>
                        I'm an intern at Institution of Parallel And Distributed System (IPADS), advised by Jinyu Gu and Haibo Chen.
                        In this summer, I visited and took part in the research in University of Michigan, OrderLab, advised by Ryan Huang and mentored by Yigong Hu.
                    </p>
                    <div className="link">
                        <p>
                            <a href="mailto:liuyicheng1515@sjtu.edu.cn">Email</a> / <a href={cv}>CV</a> / <a href="https://github.com/liuyc1515/">GitHub</a>
                        </p>
                    </div>
                </div>

                <div id="Research Interests">
                    <h2>Research Interests</h2>
                    <p>
                        <b>Make system secure and reliable: </b>Resource contention is awkward. 
                        Some abnormal workloads leading the system to severe contention depresses the reliability.
                        Other malicious users making use of the contention to launch DoS attack harms the security.
                        I work toward analyzing and mitigating the contention with some novel mechanisms.
                    </p>

                    <p>
                        <b>Make secure and reliable system faster: </b>Security is expensive.
                        The software solution costs efficiency.
                        The hardware solution costs money.
                        I seek a co-design approach to accelerate current solutions while making minimal changes to existing hardware.
                    </p>

                    <p>
                        <b>AI 4 SYS: </b>I have experience in AI research and am eager to combine this expertise with system research.
                    </p>
                </div>

                <div id="Research Experiences">
                    <h2>Research Experiences</h2>
                    <Experience />
                </div>

                <div id="Publications">
                    <h2>Publications</h2>
                    {/* <h4>Conference</h4> */}
                    <Conference />
                    {/* <h4>arXiv</h4> */}
                    <Arxiv />
                </div>

                <div id="Projects">
                    <h2>Projects</h2>
                    <Project />
                </div>
            </div>
        );
    };
};
