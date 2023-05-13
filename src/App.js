import React from 'react';
import Counter from './components/Counter';

const App = () => {
    return (
        <div style={{textAlign: "center"}}>
            <h1>Welcome to react-redux</h1>
           <Counter />
        </div>
    );
};

export default App;


// 1. state - count: 0
// 2. action - increment, decrement, reset
// 3. reducers - increment -> count => count + 1
//  - decrement -> count => count - 1
//  - reset -> count => 0
// 4. store
// 5. providing store in react
// 6. use store
