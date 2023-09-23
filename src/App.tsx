import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import AlbumTest from './assets/AlbumTest.svg'
import './App.css'
import SideMenu from './components/sideMenu/sideMenu'
import HomePage from './pages/homepage/homepage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="h-screen w-full">
            <HomePage />
        </div>
);
};
export default App
