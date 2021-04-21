import React from "react";
import "./newMemberPanel.css"
import axios from 'axios';

export default class NewMemberPanel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name:"Input Member Name...",
            position:"Input Member Position...",
            imageName:"Input Image name..."
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [name]: value });
    }

    handleSubmit(event)
    {
        event.preventDefault();

        const member = {
            name: this.state.name,
            position: this.state.position,
            imageName: this.state.imageName
        };

        const req = axios.post('https://ufssdc.herokuapp.com/api/member/add', member)
            .then(res => {
                this.setState({
                    name: '',
                    position: '',
                    imageName: ''
                })
            //this.props.history.push('/admin');
        })
        .catch(err => {
            console.log(err);
        })

        req.then(this.props.updateMemberList);
    }

    render() {
        return (
            <div className="new-member-panel">
                <div className="new-member-panel-header">
                    <h1>Add New Member</h1>
                </div>
                <div className="new-member-form">
                    <form noValidate onSubmit={this.handleSubmit}>
                        
                        <div className="input-text">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" className='form-control' value={this.state.name} onChange={this.handleChange}/>
                        </div>

                        <div className="input-text">
                            <label htmlFor="position">Position</label>
                            <input type="text" id="position" name="position" className='form-control' value={this.state.position} onChange={this.handleChange}/>
                        </div>

                        <div className="input-text">
                            <label htmlFor="imageName">Image Name</label>
                            <input type="text" id="imageName" name="imageName" className='form-control' value={this.state.imageName} onChange={this.handleChange}/>
                        </div>

                        <input type="submit" value="Add Member"/>
                    </form>
                </div>
            </div>
        );
    }
}