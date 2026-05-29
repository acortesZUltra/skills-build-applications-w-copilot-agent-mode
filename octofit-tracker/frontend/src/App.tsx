import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>OctoFit Tracker</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

function Home() {
  return (
    <main className="container mt-5">
      <h2>Welcome to OctoFit Tracker</h2>
      <p>Track your fitness activities and compete with your team!</p>
    </main>
  )
}

export default App
