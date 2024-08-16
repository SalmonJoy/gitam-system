import { useState } from 'react'
import './App.css'
import Filters from './Filters'

function App() {

  return (
    <>
    <div class="d-flex justify-content-around">
      <div class="p-2">
      <Filters/>
      </div>
      <div class="p-2">
      <Filters/>
      </div>
    </div>
      
    </>
  )
}

export default App
