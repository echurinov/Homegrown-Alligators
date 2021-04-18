import React from "react";
import "./table.css"

export default class Table extends React.Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            rows:this.props.rows
        }
    }

    render()
    {
        return (
            <div className="table">
                <table>
                    {this.state.rows}
                </table>
            </div>
        );
    }
}