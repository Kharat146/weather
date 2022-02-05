import React, { useState } from 'react'

export default function Shedul() {

    const [name, setName] = useState("");

    const onSubmitHandler = {


    }

    return (
        <div>

            <div className="container">
                <div className="row">
                    <div className="card col-lg-4 offset-4 col-sm-6 shadow p-3 mb-5 bg-white rounded">

                        <form onSubmit={onSubmitHandler}>

                            <div className="card-header">
                                SET YOUR DEALY SHEDULE
                            </div>
                            <div className="card-body">
                                <input type="text" placeholder="enter your work" className=" form-control" value={name} onChange={(e) => setName(e.target.value)} />
                                <button type="submit" className="btn  btn-success mt-2 form-control">submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    )
}
