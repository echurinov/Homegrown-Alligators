import React from "react";
import "./table.css"

export default class Table extends React.Component
{
    render()
    {
        return (
            <div className="table">
                <table>
                    {this.props.rows}
                </table>
            </div>
        );
    }
}