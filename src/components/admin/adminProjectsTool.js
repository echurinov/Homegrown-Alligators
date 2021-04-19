import React from "react";
import AdminTablePanel from "./adminTablePanel";
import NewProjectPanel from "./newProjectPanel";
import "./adminProjectsTool.css"

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
            <div className="admin-projects-tool">
                <AdminTablePanel
                    headerText="Projects"
                    tableRows={this.getTableRows()}
                />
                <NewProjectPanel/>
            </div>
        );
    }
}