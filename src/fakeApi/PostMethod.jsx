import React, { Component } from 'react'
import axios from 'axios';

export default class PostMethod extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }

    changHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handlesubmit = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.get("https://jsonplaceholder.typicode.com/posts", this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }


    render() {
        const { userid, title, body } = this.state
        return (

            <form onSubmit={this.handlesubmit}>
                <div>
                    <label > userid</label>
                    <input type="text" value={userid} name="userid" onChange={this.changHandler} />
                </div>
                <div>
                    <label > title</label>
                    <input type="text" value={title} name="title" onChange={this.changHandler} />
                </div>
                <div>
                    <label > body</label>
                    <input type="text" value={body} name="body" onChange={this.changHandler} />
                </div>
                <button>Submit</button>
            </form>


        )
    }
}
