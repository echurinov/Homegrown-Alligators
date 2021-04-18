import React from "react";
import AdminTablePanel from "../components/admin/adminTablePanel";
import NewProjectPanel from "../components/admin/newProjectPanel";
import "./AdminProjects.css"

class ProjectRow extends React.Component
{
    render()
    {
        return (
            <tr>
                <td>{this.props.title}</td>
            </tr>
        );
    }
}

export default class AdminProjects extends React.Component
{
    getTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Title</th>
            </tr>
        );

        for(var i = 0; i < 100; i++)
        {
            tableRows.push(
                <ProjectRow
                    title="Test Title"
                />
            );
        }

        return tableRows;
    }

    render()
    {
        return (
            <div className="admin-projects">
                <div className="admin-projects-header">
                    <h1>Admin Projects Tool</h1>
                </div>
                <div className="admin-projects-tools">
                    <AdminTablePanel
                        headerText="Projects"
                        tableRows={this.getTableRows()}
                    />
                    <NewProjectPanel/>
                </div>
            </div>
        );
    }
}