import moment from "moment";
import React from "react";
import "./newEventPanel.css"
import axios from 'axios';

const TODAY = new Date();

export default class NewEventPanel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            title:"Input Event Title...",
            startDate:moment(TODAY).utc().format("YYYY-MM-DD"),
            endDate:moment(TODAY).utc().format("YYYY-MM-DD"),
            colorIndex:1
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({[name]:value});
    }

    handleSubmit(event)
    {
        event.preventDefault();

        const calendarEvent = {
            title: this.state.title,
            startDate: moment(this.state.startDate).utc(),
            endDate: moment(this.state.endDate).utc(),
            colorIndex: this.state.colorIndex
        }

        const req = axios.post('https://ufssdc.herokuapp.com/api/calendar/add', calendarEvent)
            .then(res => {
                this.setState({
                    title: '',
                    startDate: '',
                    endDate: '',
                    colorIndex: ''
                })
            //this.props.history.push('/admin');
        })
        .catch(err => {
            console.log("Error in NewEventPanel: " + err);
        })

        req.then(this.props.updateEventList);
    }

    render() {
        return (
            <div className="new-event-panel">
                <div className="new-event-panel-title">
                    <h1>Add New Calendar Event</h1>
                </div>
                <div className="new-event-form">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="input-text">
                            <label htmlFor="title">Event Title</label>
                            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </div>

                        <div className="date-input-row">
                            <div className="input-date">
                                <label htmlFor="startDate">Start Date</label>
                                <input type="date" id="startDate" name="startDate" value={this.state.startDate} onChange={this.handleChange}/>
                            </div>

                            <div className="input-date">
                                <label htmlFor="date-end">End Date</label>
                                <input type="date" id="endDate" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
                            </div>
                        </div>
                    
                        <div className="input-select">
                            <label htmlFor="colorIndex">Select the Display Color</label>
                            <select id="colorIndex" name="colorIndex" value={this.state.colorIndex} onChange={this.handleChange}>
                                <option value="1">Gray (1)</option>
                                <option value="2">Blue (2)</option>
                                <option value="3">Orange (3)</option>
                                <option value="4">Green (4)</option>
                                <option value="5">Pink (5)</option>
                                <option value="6">Olive (6)</option>
                                <option value="7">Purple (7)</option>
                                <option value="8">Yellow (8)</option>
                                <option value="9">Red (9)</option>
                                <option value="10">Peach (10)</option>
                            </select>
                        </div>

                        <input type="submit" value="Add Event"/>
                    </form>
                </div>
            </div>
        );
    }
}