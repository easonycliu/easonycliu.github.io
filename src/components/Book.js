import React from "react";
import { Link } from "react-router-dom";

export default class Book extends React.Component {
    render() {
        const { info } = this.props;
        return (
            <Link style={{ textDecoration:'none', color:'black'}} to={`/bookdetail/${info.id}`}>
                <div className='grid-item'>
                    <img src={info.image} width={200} alt="img"></img>
                    <p style={{ fontSize: 12 }}>{info.name}</p>
                    <p style={{ fontSize: 8 }}>{info.author}</p>
                    <p style={{ fontSize: 10 }}>{info.price}</p>
                </div>
            </Link>
        )
    }
}