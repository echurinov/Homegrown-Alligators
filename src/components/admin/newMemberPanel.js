import React from "react";
import "./newMemberPanel.css"

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

        this.setState({[name]:value});
    }

    handleSubmit(event)
    {
        event.preventDefault();

        alert("Member Name: " + this.state.name
            + ", Position: " + this.state.position
            + ", Image Path: " + this.state.imagePath);
    }

    render() {
        return (
            <div className="new-member-panel">
                <div className="new-member-panel-header">
                    <h1>Add New Member</h1>
                </div>
                <div className="new-member-form">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="input-text">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                        </div>

                        <div className="input-text">
                            <label htmlFor="position">Position</label>
                            <input type="text" id="position" name="position" value={this.state.position} onChange={this.handleChange}/>
                        </div>

                        <div className="input-image">
                            <label htmlFor="imagePath">Image</label>
                            <input type="file" accept="image/*" id="imagePath" name="imagePath" value={this.state.imagePath} onChange={this.handleChange}/>
                        </div>

                        <input type="submit" value="Add Member"/>
                    </form>
                </div>
            </div>
        );
    }
}