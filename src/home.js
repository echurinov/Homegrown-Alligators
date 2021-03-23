import React from 'react';
import stock1 from './components/Images/stock1.png';
import "./home.css";
import PageTitle from './components/pageTitle.js';
import Header from './components/header.js'
import Scroller from './components/Scroller.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Home() {
    return (
        <Router>
        <nav class="full">
            <div>
                <Header />
                <Scroller />
            </div>
         <PageTitle text = "Who We Are" />
            <div class="info">
                The primary purpose of this organization is to facilitate the research, design, and development of space systems and related technology. 
                These goals shall be achieved through creative and collaborative research methods while maintaining an encouraging and stimulating environment 
                within the club and local community.
            </div>
            <img className="project-photo" src={stock1}></img>
            <PageTitle text = "Interested in Joining?" />
            <div class="info">
                <h1>
                    
                </h1>




                Click <a href = "https://www.google.com/?gws_rd=ssl" target="_blank">this link</a> to get some signup information.
            </div>
        </nav>
        </Router>
    )
}

export default Home;