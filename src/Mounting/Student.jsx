import React, { Component } from 'react'

export default class Student extends Component {
    render(props) {
        return (
            <div>
                <h1>hello {this.props.Name}</h1>
            </div>
        )
    }
}
