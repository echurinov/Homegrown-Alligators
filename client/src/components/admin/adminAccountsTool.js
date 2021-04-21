import React from "react";
import AdminTablePanel from "./adminTablePanel";
import NewAccountPanel from "./newAccountPanel";
import axios from "axios";
import "./adminAccountsTool.css"

class AccountRow extends React.Component
{
    constructor(props)
    {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {
        const req = axios.delete('https://ufssdc.herokuapp.com/api/account/' + this.props.id, {params:{id:this.props.id}})
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

        req.then(this.props.updateAccountList);
    }

    render()
    {
        return (
            <tr>
                <td>{this.props.email}</td>
                <td>
                    <button onClick={this.handleClick}>
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default class AdminAccounts extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            accounts:[],
            tableRows:[]
        }

        this.updateAccountList = this.updateAccountList.bind(this);
    }

    componentDidMount()
    {
        this.updateAccountList();
    }

    updateAccountList()
    {
        const req = axios.get('https://ufssdc.herokuapp.com/api/account/');
        
        req.then(res => {
            const accounts = res.data;
            this.setState({accounts:accounts});
            this.setState({tableRows:this.constructTableRows()});
        });
    }

    constructTableRows()
    {
        let tableRows = [];

        tableRows.push(
            <tr>
                <th>Email</th>
                <th>Options</th>
            </tr>
        );

        for(var i = 0; i < this.state.accounts.length; i++)
        {
            tableRows.push(
                <AccountRow
                    id={this.state.accounts[i]._id}
                    title={this.state.accounts[i].email}
                    updateAccountList={this.updateAccountList}
                />
            );
        }

        return tableRows;
    }

    render()
    {
        return (
            <div className="admin-accounts-tool">
                <AdminTablePanel
                    headerText="Accounts"
                    tableRows={this.state.tableRows}
                />
                <NewAccountPanel updateAccountList={this.updateAccountList}/>
            </div>
        );
    }
}