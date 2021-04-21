import React from "react";
import AdminTablePanel from "./adminTablePanel";
import NewMemberPanel from "./newMemberPanel";
import axios from "axios";
import "./adminMembersTool.css"

class MemberRow extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const req = axios.delete('https://ufssdc.herokuapp.com/api/member/' + this.props.id, {params:{id:this.props.id}})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        req.then(this.props.updateMemberList);
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.position}</td>
                <td>
                    <button onClick={this.handleClick}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default class AdminMembers extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            members:[],
            tableRows:[]
        }

        this.updateMemberList = this.updateMemberList.bind(this);
    }

    componentDidMount()
    {
        this.updateMemberList();
    }

    updateMemberList()
    {
        const req = axios.get('https://ufssdc.herokuapp.com/api/member/');
        
        req.then(res => {
            const members = res.data;
            this.setState({members:members});
            this.setState({tableRows:this.constructTableRows()});
        });
    }

    constructTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Name</th>
                <th>Position</th>
                <th>Options</th>
            </tr>
        );

        for(var i = 0; i < this.state.members.length; i++)
        {
            tableRows.push(
                <MemberRow
                    id={this.state.members[i]._id}
                    name={this.state.members[i].name}
                    position={this.state.members[i].position}
                    updateMemberList={this.updateMemberList}
                />
            );
        }

        return tableRows;
    }

    render()
    {
        return (
            <div className="admin-members-tool">
                <AdminTablePanel
                    headerText="Members"
                    tableRows={this.state.tableRows}
                />
                <NewMemberPanel updateMemberList={this.updateMemberList}/>
            </div>
        );
    }
}