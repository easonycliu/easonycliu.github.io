import React from 'react';
import '../css/MainView.css';
import '../css/BoxSize.css';
import '../css/Publication.css'
import Content from '../components/Content';

export default class MainVeiw extends React.Component {
    render() {
        return(
            <div>
                {/* <TopMenu/> */}
                <Content/>
            </div>
        );
    };
};