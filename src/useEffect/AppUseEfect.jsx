import React, { useState, useEffect } from 'react'

export default function AppUseEfect() {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(50)
    const handleIncrement = () => {
        setCount(count + 1);
    }
    const handlDecrement = () => {
        setCount1(count1 - 1);
    }
    useEffect(() => {
        console.log("Use Effect Called");
    }, [count]);
    return (
        <div>
            <h1>Count Up : {count}</h1>
            <button type="button" onClick={handleIncrement}> Increment</button>
            <h1>Count Up : {count1}</h1>
            <button type="button" onClick={handlDecrement}> Decrement</button>
        </div>
    )
}
