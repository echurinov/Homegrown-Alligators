import React from 'react';
import stock1 from '../components/Images/stock1.png';
import "./home.css";
import PageTitle from '../components/pageTitle';
import Scroller from '../components/Scroller.js';
import { ScrollerData } from '../components/ScrollerData.js';
import Footer from '../components/footer';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function Home() {
    return (
        <nav class="full">
            <div>
                <Scroller slides={ScrollerData}/>
            </div>
         <PageTitle text = "Who We Are" />
            <div class="info">
                The primary purpose of this organization is tosfacilitate the research, design, and development of space systems and related technology. 
                These goals shall be achieved through creative and collaborative research methods while maintaining an encouraging and stimulating environment 
                within the club and local community.
            </div>
            <img className="project-photo" src={stock1}></img>
            <PageTitle text = "Interested in Joining?" />
            <div class="info">
                <h1>
                    What we're looking for
                </h1>
                <ul class="looking">
                    <li>People interested in space technlogy</li>
                    <li>People looking to work and collaborate with others</li>
                </ul>




                Click <a href = "https://www.google.com/?gws_rd=ssl" target="_blank">this link</a> to get some signup information.
            </div>
            <div>
                <Footer />
            </div>
        </nav>
    )
}

export default Home;