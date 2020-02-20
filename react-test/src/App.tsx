import React, { Fragment, useState } from 'react';
import './App.css';
import { TestButton } from './Test';

function App() {
  const [ numRowsToGenerate, setNumRowsToGenerate ] = useState(1000);
  return (
    <Fragment>
      <input type='text' name='numRowsToGenerate' onChange={(event) => setNumRowsToGenerate(parseInt(event.target.value))} />
      <TestButton numRowsToGenerate={numRowsToGenerate} />
    </Fragment>
  );
}

export default App;
