import React from "react";
import Table from "../table";
import "./adminTablePanel.css"

export default class AdminTablePanel extends React.Component
{
    render()
    {
        return (
            <div className="admin-table-panel">
                <div className="admin-table-panel-header">
                    <h1>{this.props.headerText}</h1>
                </div>
                <div className="admin-table-panel-table">
                    <Table rows={this.props.tableRows}/>
                </div>
            </div>
        );
    }
}