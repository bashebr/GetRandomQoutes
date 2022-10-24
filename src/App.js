import React from 'react'
import GetRandomQuotes from './GetRandomQoutes';

function App() {
  const url = 'https://api.quotable.io/random'

  return (
    <GetRandomQuotes url={url}/>
  );
}

export default App;
