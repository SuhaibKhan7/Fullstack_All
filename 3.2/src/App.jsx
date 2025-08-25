





import { useState } from 'react'
import Library from './Library'
function App() {
 
function inc(){
  setCount(count+1)
}
  function show(e) {
    console.log(e.target.value)
  }
  return (
    <>
     <Library/>
    </>
  )
}

export default App
