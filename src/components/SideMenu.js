import React from "react";

// var noteStyle = {
//     fontSize: 12,
//     fontWeight: 700,
//     color: '#888'
// }

const classifications = [
    "Intro",
    "Research Experiences",
    "Publications",
    "Research Interests",
    "Reviewer Services",
    "Projects"
]

export default class SideMenu extends React.Component {

    constructor(props) {
        super(props);
        this.columnClick = this.onColumnClick.bind(this);
    };

    onColumnClick(element) {
        console.log(`side menu resieved a click from ${element}`);
        this.props.callback(element);
    };
    
    render() {
        return (
            <div className='column sidemenu'>
                <ul>
                    {
                        classifications.map((element, index) => {
                            return (
                                <li key={index}>
                                    <a onClick={()=>this.columnClick(element)}>
                                        {element}
                                    </a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    };
};