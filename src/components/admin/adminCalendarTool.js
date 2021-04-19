import React from "react";
import NewEventPanel from "./newEventPanel";
import AdminTablePanel from "./adminTablePanel";
import CALENDAR_EVENTS from "../calendarEvents";
import "./adminCalendarTool.css"

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

export default class AdminCalendarTool extends React.Component
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
            <div className="admin-calendar-tool">
                <AdminTablePanel
                    headerText="Calendar Events"
                    tableRows={this.getTableRows()}
                />
                <NewEventPanel/>
            </div>
        );
    }
}