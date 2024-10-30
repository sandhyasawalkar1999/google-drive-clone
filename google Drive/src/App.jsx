import { useState } from 'react'
import Header from './Header/Header'
import Sidebar from './sidebar/Sidebar'
import Data from './data/Data'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <div className='App'>
        <Sidebar />
        <Data />
      </div>
    </>
  )
}

export default App
