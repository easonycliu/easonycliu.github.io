import React from "react";

import {conferencePaper, arxivPaper} from "./Data.js";

class Conference extends React.Component {
    render() {
        return (
            <div>
                {
                    conferencePaper.map((paper) => {
                        return (
                            <div>
                                <div className="paper"><a href={paper.paperLink}>{paper.title}</a></div>
                                <div className="authors">
                                    <p>
                                        {
                                            paper.authors.map((author) => {
                                                if (author.includes("Yicheng Liu"))
                                                {
                                                    return (
                                                        <nobr className="myself">{author};&nbsp;</nobr>
                                                    )
                                                }
                                                else
                                                {
                                                    return (
                                                        <nobr>{author};&nbsp;</nobr> 
                                                    )
                                                }
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="conference">{paper.conference}</div>
                                <div className="paper">
                                    <p>
                                        {
                                            paper.links.map((oneItem) => {
                                                return (
                                                    <a href={oneItem.oneLink}>{oneItem.oneContent}&nbsp;</a> 
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="abstract">{paper.abstract}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};

class Arxiv extends React.Component {
    render() {
        return (
            <div>
                {
                    arxivPaper.map((paper) => {
                        return (
                            <div>
                                <div className="paper"><a href={paper.paperLink}>{paper.title}</a></div>
                                <div className="authors">
                                    <p>
                                        {
                                            paper.authors.map((author) => {
                                                if (author.includes("Yicheng Liu"))
                                                {
                                                    return (
                                                        <nobr className="myself">{author};&nbsp;</nobr>
                                                    )
                                                }
                                                else
                                                {
                                                    return (
                                                        <nobr>{author};&nbsp;</nobr> 
                                                    )
                                                }
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="paper">
                                    <p>
                                        {
                                            paper.links.map((oneItem) => {
                                                return (
                                                    <a href={oneItem.oneLink}>{oneItem.oneContent}&nbsp;</a>
                                                )
                                            })
                                        }
                                    </p>
                                </div>
                                <div className="abstract">{paper.abstract}</div>
                            </div>
                        );
                    })
                }
            </div>
        );
    };
};

export {
    Conference, Arxiv
}
