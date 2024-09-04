import React from 'react'

function App() {
  const name = 'Nigel';
  const x = 3;
  const y = 7;

  return (
    <div>
      <div className='text-5xl'>
        App
      </div>
      <p>Hello {name}</p>
      <p>The sume of {x} and {y} is {x + y}</p>
    </div>
    
  )
}

export default App