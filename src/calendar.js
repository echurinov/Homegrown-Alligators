import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import Dayz from "dayz";
import moment from "moment";
import PageTitle from "./components/pageTitle";
import "./calendar.css";

const TODAY = new Date();

const EVENTS = new Dayz.EventsCollection([
    {
        content: "Career Fair",
        range: moment.range(new Date(2021, 3, 1), new Date(2021, 3, 3)),
        colorIndex: 3
    },
    {
        content: "GBM 1",
        range: moment.range(new Date(2021, 3, 13), new Date(2021, 3, 13)),
        colorIndex: 2
    },
    {
        content: "Workshop",
        range: moment.range(new Date(2021, 3, 13), new Date(2021, 3, 13)),
        colorIndex: 4
    },
    {
        content: "GBM 2",
        range: moment.range(new Date(2021, 3, 29), new Date(2021, 3, 29)),
        colorIndex: 2
    },
    {
        content: "Guest Lecture",
        range: moment.range(new Date(2021, 3, 29), new Date(2021, 3, 29)),
        colorIndex: 5
    }
]);

export default class CalendarPage extends React.Component
{
    render()
    {
        return (
            <div className="page">
                <Header/>
                <PageTitle text = "CALENDAR"/>
                <div className="calendar">
                    <div className="month-title">
                        <h1>{TODAY.toLocaleString("default", {month:"long"})}</h1>
                    </div>
                    <Dayz
                        display="month"
                        date={this.props.date}
                        events={EVENTS}
                    />
                </div>
                <Footer/>
            </div>
        );
    }
}