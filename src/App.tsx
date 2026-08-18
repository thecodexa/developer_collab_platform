import { useState } from 'react'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-screen text-amber-200 bg-amber-800'>
        <h1 className=' text-red-500'>Hello Tailwind</h1>
      </div>
    </>
  )
}

export default App
