import React from 'react';
import '../css/MainView.css';
import '../css/BoxSize.css';
import TopMenu from '../components/TopMenu.js'
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