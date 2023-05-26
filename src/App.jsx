import { useState } from 'react'

import './App.css'
import { Avatar } from 'flowbite-react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <div className="flex flex-wrap gap-2">
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
          <Avatar img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" />
        </div>
      </div>
      <h1 className='font-bold'>Vite + React</h1>
      <div className="card ">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
