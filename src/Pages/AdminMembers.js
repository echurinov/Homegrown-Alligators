import React from "react";
import AdminTablePanel from "../components/admin/adminTablePanel";
import NewMemberPanel from "../components/admin/newMemberPanel";
import "./AdminMembers.css"

class MemberRow extends React.Component
{
    render()
    {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.position}</td>
            </tr>
        );
    }
}

export default class AdminMembers extends React.Component
{
    getTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Name</th>
                <th>Position</th>
            </tr>
        );

        for(var i = 0; i < 100; i++)
        {
            tableRows.push(
                <MemberRow
                    name="Test Name"
                    position="Test Position"
                />
            );
        }

        return tableRows;
    }

    render()
    {
        return (
            <div className="admin-members">
                <div className="admin-members-header">
                    <h1>Admin Members Tool</h1>
                </div>
                <div className="admin-members-tools">
                    <AdminTablePanel
                        headerText="Members"
                        tableRows={this.getTableRows()}
                    />
                    <NewMemberPanel/>
                </div>
            </div>
        );
    }
}