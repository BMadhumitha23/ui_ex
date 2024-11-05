import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={styles.container}>
            <h1>Counter: {count}</h1>
            <div>
                <button onClick={increment} style={styles.button}>Increment</button>
                <button onClick={decrement} style={styles.button}>Decrement</button>
            </div>
        </div>
    );
};

// Basic styling
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    button: {
        margin: '5px',
        padding: '10px 20px',
        fontSize: '16px',
    },
};

export default Counter;
