import { useState } from "react";
import Button from "./components/button";
import './assets/styles/style.css'

const App =()=>{
    const [count,SetCount]=useState({counter:0})
    const increment = ()=>{
      SetCount({counter:count.counter+1})
    }
    const decrement=()=>{
      if(count.counter>=1){
        SetCount({counter:count.counter-1})
      }
      else{
        alert("Count can't be negative")
      }
    }
    const reset=()=>{
      SetCount({counter:0})
    }

    return <div className="container">
      <h1>Count is {count.counter}</h1>
      <div className="box">
      <Button action={increment} text="Increase +" color="white" bgcolor="orange"/>
      <Button action={decrement} text="Decrease -" color="blue" bgcolor="white"/>
      <Button action={reset} text="Reset" color="white" bgcolor="green"/>
      </div>
    </div>
}
export default App;