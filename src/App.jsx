import { useState } from 'react'
// usestate hook
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
//   // usestate is use/responsible to change the state
  // o index par counter(variable) milti ha, or dousri valuenahi function houta ha
  let [counter, setCounter] = useState(15)
  
  // let is laya keyou ka value ko change karna ha
  // let counter = 5
  // arrow function banaya ha
  const addValue = () => {
    if(counter<20)

    // counter=counter+1;

    // for single increase 15_16_17....
    setCounter(counter+1)
    // setCounter(counter+1)
    // setCounter(counter+1)

    // for multiple time increase like 15_18_21....
    // setCounter(counter=counter+1)
    // setCounter(counter=counter+1)
    // setCounter(counter=counter+1)

    // console.log("clicked", counter);
  }

  const removeValue = () => {
   if(counter>0)
     setCounter(counter-1);
  }
  return (
   
  <div>
    <h1>hooks</h1>
    <h3>counter value : {counter}</h3>

    {/* ak function banaya ha onclick name say or 
    reference add keya ha addValue name say  */}
    <button onClick={addValue}>add value {counter}</button>
    <br />
    <button onClick={removeValue}>remove value {counter}</button>
    <p>footer: {counter}</p>
  </div>
  )

}

export default App
