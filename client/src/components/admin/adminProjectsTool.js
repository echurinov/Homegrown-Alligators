import React from "react";
import AdminTablePanel from "./adminTablePanel";
import NewProjectPanel from "./newProjectPanel";
import axios from "axios";
import "./adminProjectsTool.css"

class ProjectRow extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const req = axios.delete('http://localhost:8082/api/project/' + this.props.id, {params:{id:this.props.id}})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        req.then(this.props.updateProjectList);
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.title}</td>
                <td>
                    <button onClick={this.handleClick}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default class AdminProjects extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            projects:[],
            tableRows:[]
        }

        this.updateProjectList = this.updateProjectList.bind(this);
    }

    componentDidMount()
    {
        this.updateProjectList();
    }

    updateProjectList()
    {
        const req = axios.get('http://localhost:8082/api/project/');
        
        req.then(res => {
            const projects = res.data;
            this.setState({projects:projects});
            this.setState({tableRows:this.constructTableRows()});
        });
    }

    constructTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Title</th>
                <th>Options</th>
            </tr>
        );

        for(var i = 0; i < this.state.projects.length; i++)
        {
            tableRows.push(
                <ProjectRow
                    id={this.state.projects[i]._id}
                    title={this.state.projects[i].title}
                    updateProjectList={this.updateProjectList}
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
                    tableRows={this.state.tableRows}
                />
                <NewProjectPanel updateProjectList={this.updateProjectList}/>
            </div>
        );
    }
}