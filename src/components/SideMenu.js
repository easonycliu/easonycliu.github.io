import React from "react";
import photo from "../assets/photo.PNG"

// var noteStyle = {
//     fontSize: 12,
//     fontWeight: 700,
//     color: '#888'
// }

const classifications = [
    "Intro",
    "Research Interests",
    "Research Experiences",
    "Publications",
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
                <img src={photo} alt="photo"/>
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