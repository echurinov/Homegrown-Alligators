import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Dayz from "dayz";
import moment from "moment";
import PageTitle from "../components/pageTitle";
import axios from "axios";
import space5 from '../components/Images/space5.png';
import "./calendar.css";
import '../index.css';

const TODAY = new Date();

export default class CalendarPage extends React.Component {
  constructor(props)
  {
    super(props);

    this.state = {
      events:new Dayz.EventsCollection([])
    }

    this.updateEventList = this.updateEventList.bind(this);
    this.buildEventsCollection = this.buildEventsCollection.bind(this);
  }

  componentDidMount()
  {
    this.updateEventList();
  }

  updateEventList()
  {
    const req = axios.get('http://localhost:8082/api/calendar/');
        
    req.then(res => {
      this.setState({events:this.buildEventsCollection(res.data)});
    });
  }

  buildEventsCollection(rawEvents)
  {
    let eventCollection = new Dayz.EventsCollection();

    for(let i = 0; i < rawEvents.length; i++)
    {
      eventCollection.add(
        {
          content:rawEvents[i].title,
          range:moment.range(moment(rawEvents[i].startDate).utc(), moment(rawEvents[i].endDate).utc()),
          colorIndex:rawEvents[i].colorIndex,
        }
      );
    }

    return eventCollection;
  }

  render() {
    return (
      <div className="page">
        <Header />

        <div className="title-wrapper">
          <img src={space5}></img>
          <PageTitle text="CALENDAR" />
        </div>

        <div className="calendar">
          <div className="month-title">
            <h2>{TODAY.toLocaleString("default", { month: "long" })}</h2>
          </div>
          <Dayz display="month" events={this.state.events}/>
        </div>
        <Footer />
      </div>
    );
  }
}
