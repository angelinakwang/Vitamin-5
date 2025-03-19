import React, { useState, useEffec } from 'react';

const notHome = () => {
    useEffect(() => {
        if (count > 5) {
            alert ('You passed 5!');
        }
    }, [count]);

    return (
        <div>
            <h1>NotHome Page</h1>
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    );
};

export default notHome;