import React from "react";
import { useParams } from "react-router-dom";

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
            Hello
        </div>
    );
}
