import React, { Component } from 'react'
import Student from './Student';

export default class Constructor extends Component {

    constructor(props) {
        super(props);
        console.log("APP - Constructor called");
        console.log(props);
        this.state = {
            roll: "101"
        };
    }

    static getDerivedStateFromProps(props, state) {
        console.log("App - Get Derived State From Props");
        console.log(props, state);
        return null;
    }
    componentDidMount() {
        //get data from server and set the data to state
        console.log("App - componentDidMount - mounted");
    }

    render() {
        return (
            <div>
                {/* <h1>ajay kharat</h1> */}
                <Student Name="ajay kharat" />
            </div>
        )
    }
}
