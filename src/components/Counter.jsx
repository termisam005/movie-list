import React from 'react';
import { useState } from 'react';

const Counter = ({click}) =>{

    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(count + 1);
    };
    const clickString = click || 'Click..';

    return(
        <button type='button' onClick={increment}>
            {clickString} {count}
        </button>
    )
}

export default Counter;