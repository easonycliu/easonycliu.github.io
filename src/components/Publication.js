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
                                <a>{paper.title}</a>
                                <p>{paper.authors}</p>
                                <p>{paper.conference}</p>
                                <p>{paper.abstract}</p>
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
                                <a>{paper.title}</a>
                                <p>{paper.authors}</p>
                                <p>{paper.abstract}</p>
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
