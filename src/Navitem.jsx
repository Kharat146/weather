import React from 'react'

export default function Navitem(path, label) {
    return (
        <div>
            <Navitem to="/" label="Home">Home</Navitem>
            <Navitem to="/FormR" label="FormR">form</Navitem>

            <Navitem to="/FetchData" label="FetchData">loginform</Navitem>
        </div>
    )
}
