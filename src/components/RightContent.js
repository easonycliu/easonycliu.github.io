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
                    <p>I am now an undergraduate student at Shanghai Jiao Tong University (SJTU), majoring in Automation (Sensor).</p>
                    <p>
                        I have been working as a research intern at John Hopcoft Center since 2021, advised by Guanjie Zheng. 
                        I am now a student at Institution of Parallel And Distributed System (IPADS), advised by Prof. Changliu Liu.
                    </p>
                    <div className="link">
                        <p>
                            <a href="mailto:liuyicheng1515@sjtu.edu.cn">Email</a> / <a href={cv}>CV</a> / <a href="https://github.com/liuyc1515/">GitHub</a>
                        </p>
                    </div>
                    
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
                        Currently, my focus is on system security, with a specific emphasis on virtual machine (VM) and container security. 
                        In the realm of security, there exist three primary objectives: Confidentiality, Integrity, and Availability (CIA). 
                        While the majority of research in this field has concentrated on maintaining confidentiality and integrity, 
                        I am dedicated to extending the boundaries of defending against availability-based attacks while concurrently upholding confidentiality and integrity.
                    </p>

                    <p>
                        I am alse excited to explore topics like distributed storage and GPU-accelerated training, which are becoming increasingly vital as we continue to develop larger models in areas such as computer vision (CV) and natural language processing (NLP), among others. 
                        To support these models, we require GPU clusters to accelerate training time and distributed storage to house vast amounts of training data.
                    </p>

                    <p>
                        I have experience in artificial intelligence (AI) research and am eager to combine this expertise with system research, such as utilizing AI for SYS. 
                        I am aware that some AI technologies have already been applied to the testing arena, such as reinforcement learning-based fuzzers. 
                        However, I believe that AI can play a crucial role in system research due to the many predicting-related situations, such as cache and memory swapping.
                    </p>
                </div>

                <div id="Reviewer Services">
                    <h2>Reviewer Services</h2>
                    <ul>
                        <li>Knowledge Discovery and Data Mining (KDD), 2023</li>
                        <li>International Conference on Machine Learning (ICML) 2023</li>
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
