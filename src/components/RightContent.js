import React from "react";
import { useParams } from "react-router-dom";
import BookHeader from "./BookHeader.js";
import BookList from "./BookList.js";

export default function RightContent() {
    var { op, info } = useParams();
    var search;
    var classification;
    if (op === 'search')
    {
        search = info;
        classification = 'home';
    }
    else
    {
        search = '';
        classification = info;
    }
    return (
        <div>
            <BookHeader classification={classification}/>
            <BookList search={search} classification={classification}/>
        </div>
    );
}
