import React from "react";
import NewEventPanel from "../components/admin/newEventPanel";
import CALENDAR_EVENTS from "../components/calendarEvents";
import AdminTablePanel from "../components/admin/adminTablePanel";
import "./AdminCalendar.css"

class CalendarEventRow extends React.Component
{
    render()
    {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>{this.props.startDate}</td>
                <td>{this.props.endDate}</td>
                <td>{this.props.colorIndex}</td>
            </tr>
        );
    }
}

export default class AdminCalendar extends React.Component
{
    getTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Color Index</th>
            </tr>
        );

        for(var i = 0; i < CALENDAR_EVENTS.length; i++)
        {
            tableRows.push(
                <CalendarEventRow
                    title={CALENDAR_EVENTS.events[i].content}
                    startDate={CALENDAR_EVENTS.events[i].start.format("MM/DD/YYYY")}
                    endDate={CALENDAR_EVENTS.events[i].end.format("MM/DD/YYYY")}
                    colorIndex={CALENDAR_EVENTS.events[i].colorIndex}
                />
            );
        }

        return tableRows;
    }

    render()
    {
        return (
            <div className="admin-calendar">
                <div className="admin-calendar-header">
                    <h1>Admin Calendar Tool</h1>
                </div>
                <div className="admin-calendar-tools">
                    <AdminTablePanel
                        headerText="Calendar Events"
                        tableRows={this.getTableRows()}
                    />
                    <NewEventPanel/>
                </div>
            </div>
        );
    }
}