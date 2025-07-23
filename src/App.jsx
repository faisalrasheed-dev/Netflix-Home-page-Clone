import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import NavBar from './components/NavBar/NavBar'
import RowPost from './components/RowPost/RowPost'
import { action, comedy, horror, originals } from './components/Url/url'
function App() {
  return (
  <div className="app">
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title="Originals"/>
    <RowPost url={comedy} title="Comedy"isSmall/>
    <RowPost url={action} title="Action" isSmall/>
    <RowPost url={horror} title="Horror" isSmall/>
  </div>
  )
}

export default App