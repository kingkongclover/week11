import { Routes, Route } from "react-router-dom"
import './App.css'
import Header from './components/Header.tsx'
import Home from './components/FrontPage.tsx'
import Saved from './components/Saved.tsx'
import { useJokes } from './hooks/useJokes.ts'

function App() {
  const { savedJokes, saveJoke, deleteJoke } = useJokes()

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home saveJoke={saveJoke}/>} />
        <Route path="/saved" element={<Saved savedJokes={savedJokes} deleteJoke={deleteJoke}/>} />
      </Routes>
    </>
  )
}

export default App
