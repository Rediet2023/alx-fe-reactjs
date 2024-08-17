import React, { useState } from 'react';

function Counter() {
  // Initialize state with useState, starting count at 0
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {/* Display the current count */}
      <p>Current Count: {count}</p>
      
      {/* Button to increment the count */}
      <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 20px' }}>
        Increment
      </button>

      {/* Button to decrement the count */}
      <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 20px' }}>
        Decrement
      </button>

      {/* Button to reset the count */}
      <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px 20px' }}>
        Reset
      </button>
    </div>
  );
}

export default Counter;