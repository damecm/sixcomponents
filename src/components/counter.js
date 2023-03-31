import React, {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)
    return (
        <div className='counter-wrap'>

            <div className="btn">
                <button onClick={() => setCount(count + 1)}>Count UP</button>
            </div>
            <div className='number'>
                <p style={{ textAlign: "center"}}>Counter: {count}</p>
            </div>
            <div className='btn'>
                <button onClick={() => setCount(count - 1)}>Count Down</button>
            </div>


        </div>
    );
}