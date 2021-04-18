import React from "react";
import Table from "../table";
import "./adminTablePanel.css"

export default class AdminTablePanel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            headerText:this.props.headerText,
            tableRows:this.props.tableRows
        }
    }
    render()
    {
        return (
            <div className="admin-table-panel">
                <div className="admin-table-panel-header">
                    <h1>{this.state.headerText}</h1>
                </div>
                <div className="admin-table-panel-table">
                    <Table rows={this.state.tableRows}/>
                </div>
            </div>
        );
    }
}