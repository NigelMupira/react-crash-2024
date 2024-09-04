import React from 'react'

function App() {
  const name = 'Nigel';
  const x = 3;
  const y = 7;
  const names = ['Mboks', 'Witiza', 'Mphathisi', 'Maposa']
  const loggedIn = true;

  return (
    <div>
      <div className='text-5xl'>
        App
      </div>
      <p>Hello {name}</p>
      <p>The sume of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {loggedIn && <h1>Hello User</h1>}
    </div>
    
  )
}

export default App