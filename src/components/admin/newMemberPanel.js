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
            imagePath:""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event)
    {
        event.preventDefault();

        alert("Member Name: " + this.state.name
            + ", Position: " + this.state.position
            + ", Image Path: " + this.state.imagePath);

        const data = {
            name: this.state.name,
            position: this.state.position
        };

        axios
        .post('http://localhost:8082/api/members', data)
        .then(res => {
            this.setState({
            name: '',
            position: ''
            })
            this.props.history.push('/admin');
        })
        .catch(err => {
            console.log("Error in NewMemberPanel!");
        })
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

                        <div className="input-image">
                            <label htmlFor="imagePath">Image</label>
                            <input type="file" accept="image/*" id="imagePath" name="imagePath"  className='form-control' value={this.state.imagePath} onChange={this.handleChange}/>
                        </div>

                        <input type="submit" value="Add Member"/>
                    </form>
                </div>
            </div>
        );
    }
}