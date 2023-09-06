import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CommitsPage from './pages/Commits/CommitsPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <CommitsPage />
    </>
  )
}

export default App
