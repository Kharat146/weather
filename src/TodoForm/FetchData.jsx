import React, { useState, useEffect } from 'react'
import axios from 'axios';

export default function FetchData() {

    const [data, setData] = useState('');
    const [getData, setgetData] = useState([]);
    const [task, setTask] = useState({
        email: '',
        password: '',

    });
    // useEffect(() => {

    // async function getData() {
    // const res = await axios.get('http://localhost:3000/reactDataBase');
    // console.log("first nmae");
    // console.log(res);

    // }

    // }, [])
    const onSUbmitHandler = (e) => {
        console.log(task);
        e.preventDefault();
        console.log(getData[0]);
    }

    useEffect(() => {

        axios.get("http://localhost:3000/reactDataBase").then((res) => {
            // console.log(res.data.email);
            setgetData(res.data)
        })

    }, [])

    return (
        <div>
            <h1>Fetch data</h1>

            <div className="container">
                <div className="row">
                    <form onSubmit={onSUbmitHandler}>
                        <div className="card col-lg-4 offset-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">
                            <div className="card-header">
                                <h3 className="text-center">Form</h3>
                            </div>
                            <div className="card-body">
                                <input type="email" placeholder="enter email name" className=" form-control" value={task.email} onChange={(e) => { setTask({ ...task, email: e.target.value }) }} />
                                <input type="password" placeholder="enter password" className=" form-control" value={task.password} onChange={(e) => { setTask({ ...task, password: e.target.value }) }} />
                                <button type="submit" className="btn  btn-success mt-2 form-control">submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            {/* {
                getData.map((dd, i) => {
                    return <h1>{dd.email}</h1>
                })
            } */}
            {/* <h2>{data}</h2> */}
        </div>
    )
}
