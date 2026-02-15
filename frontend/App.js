import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
    <div>
      {JSON.stringify(yourAPIResponse, null, 2)}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
