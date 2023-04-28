import React from "react";

export default class BookHeader extends React.Component {
    render() {
        let classification = this.props.classification;
        classification = classification.slice(0, 1).toUpperCase() + classification.slice(1);
        return(
            <div className='header'>
                <h1>{classification}</h1>
            </div>
        );
    };
};