import React from "react";
import NewEventPanel from "./newEventPanel";
import AdminTablePanel from "./adminTablePanel";
import axios from "axios";
import moment from "moment";
import "./adminCalendarTool.css"

class CalendarEventRow extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const req = axios.delete('http://localhost:8082/api/calendar/' + this.props.id, {params:{id:this.props.id}})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        req.then(this.props.updateEventList);
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.startDate}</td>
                <td>{this.props.endDate}</td>
                <td>{this.props.colorIndex}</td>
                <td>
                    <button onClick={this.handleClick}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default class AdminCalendarTool extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            events:[],
            tableRows:[]
        }

        this.updateEventList = this.updateEventList.bind(this);
    }

    componentDidMount()
    {
        this.updateEventList();
    }

    updateEventList()
    {
        const req = axios.get('http://localhost:8082/api/calendar/');
        
        req.then(res => {
            const events = res.data;
            this.setState({events:events});
            this.setState({tableRows:this.constructTableRows()});
        });
    }

    constructTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Color Index</th>
                <th>Options</th>
            </tr>
        );

        for(var i = 0; i < this.state.events.length; i++)
        {
            tableRows.push(
                <CalendarEventRow
                    id={this.state.events[i]._id}
                    title={this.state.events[i].title}
                    startDate={moment(this.state.events[i].startDate).format("MM/DD/YYYY")}
                    endDate={moment(this.state.events[i].endDate).format("MM/DD/YYYY")}
                    colorIndex={this.state.events[i].colorIndex}
                    updateEventList={this.updateEventList}
                />
            );
        }

        return tableRows;
    }

    render()
    {
        return (
            <div className="admin-calendar-tool">
                <AdminTablePanel
                    headerText="Calendar Events"
                    tableRows={this.state.tableRows}
                />
                <NewEventPanel updateEventList={this.updateEventList}/>
            </div>
        );
    }
}