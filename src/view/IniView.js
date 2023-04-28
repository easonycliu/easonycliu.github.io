import React from 'react';
import '../css/MainView.css';
import '../css/BoxSize.css';
import TopMenu from '../components/TopMenu.js'
import SideMenu from '../components/SideMenu.js';
import BookHeader from "../components/BookHeader.js";
import BookList from "../components/BookList.js";

export default class IniView extends React.Component {
    render() {
        return (
            <div>
                <TopMenu />
                <div className='bigbox'>
                    <div className='clearfix'>
                        <SideMenu callback={this.callback} />
                        <div className='column content'>
                            <BookHeader classification='home' />
                            <BookList search='' classification='home' />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};