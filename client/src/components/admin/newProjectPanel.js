import React from "react";
import "./newProjectPanel.css"
import axios from 'axios';

export default class NewProjectPanel extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            title:"Input Project Title...",
            description:"Input Project Description...",
            imageName:"Input image name..."
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

        const project = {
            title: this.state.title,
            description: this.state.description,
            imageName: this.state.imageName
        }

        const req = axios.post('https://ufssdc.herokuapp.com/api/project/add', project)
            .then(res => {
                this.setState({
                    title: '',
                    description: '',
                    imageName: ''
                })
            //this.props.history.push('/admin');
        })
        .catch(err => {
            console.log("Error in NewProjectPanel!");
        })

        req.then(this.props.updateProjectList);
    }

    render() {
        return (
            <div className="new-project-panel">
                <div className="new-project-panel-header">
                    <h1>Add New Project</h1>
                </div>
                <div className="new-project-form">
                    <form onSubmit={this.handleSubmit}>
                        
                        <div className="input-text">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                        </div>

                        <div className="input-description">
                            <label htmlFor="description">Description</label>
                            <textarea id="description" name="description" value={this.state.description} onChange={this.handleChange} rows="10" cols="50"/>
                        </div>

                        <div className="input-text">
                            <label htmlFor="imageName">Image Name</label>
                            <input type="text" id="imageName" name="imageName" className='form-control' value={this.state.imageName} onChange={this.handleChange}/>
                        </div>

                        <input type="submit" value="Add Project"/>
                    </form>
                </div>
            </div>
        );
    }
}