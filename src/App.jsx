import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [display, setDisplay] = useState(0)

  const handleButtonClick = (value) => {
    if(display===0){
      setDisplay(value);
    }else{
      setDisplay(display + value);
    }
   
  }

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' ,border:'2px solid black',width:'250px',marginTop:'50px',padding:'10px',borderRadius:'10px',backgroundColor:'black'
      }}>
      <input type="text" value={display} placeholder='0' style={{fontSize: '20px',
    marginBottom: '20px'}}/>

      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={() => setDisplay(0)}>AC</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("00")}>00</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("%")}>%</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={()=>handleButtonClick("/")}>/</button>
      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("7")}>7</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("8")}>8</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("9")}>9</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={()=>handleButtonClick("*")}>*</button>
      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("4")}>4</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("5")}>5</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("6")}>6</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={()=>handleButtonClick("-")}>-</button>

      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("1")}>1</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("2")}>2</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("3")}>3</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={()=>handleButtonClick("+")}>+</button>
      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("0")}>0</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick(".")}>.</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}}>=</button>
      </div>
      </div>
    </>
  )
}

export default App
