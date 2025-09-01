import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [display, setDisplay] = useState(0)
  const [previousValue, setPreviousValue] = useState(null)
  const [operator, setOperator] = useState(null)

  const handleButtonClick = (value) => {
    if(display===0){
      setDisplay(value);
    }else{
      setDisplay(display + value);
    }
  
  }
  const handleAddonClick=()=>{
    setPreviousValue(display);  //store previous value
    setOperator("+");
    setDisplay(0);  //store new value
  }
  
  const handleEqualClick=()=>{
    if(operator === "+"){
      const result = Number(previousValue) + Number(display);
      setDisplay(result);
      setPreviousValue(null);
      setOperator(null);
    }
    else if(operator === "-"){
      const result=Number(previousValue) - Number(display);
      setDisplay(result);
      setPreviousValue(null);
      setOperator(null);
    }
    else if(operator === "*"){
      const result=Number(previousValue) * Number(display);
      setDisplay(result);
      setPreviousValue(null);
      setOperator(null);
    }
    else if(operator === "/"){
      const result=Number(previousValue) / Number(display);
      setDisplay(result);
      setPreviousValue(null);
      setOperator(null);
    }
  }
  const handleSubtractClick=()=>{
    setPreviousValue(display);
    setOperator("-");
    setDisplay(0);
  }
  const handleMultiplyClick=()=>{
    setPreviousValue(display);
    setOperator("*");
    setDisplay(0);
  }
  const handleDivideClick=()=>{
    setPreviousValue(display);
    setOperator("/");
    setDisplay(0);
  }
  const handleClearClick=()=>{
    if(display.length>1){
      setDisplay(display.slice(0,-1));  //remove last character
    }else{
      setDisplay(0); //if all deleted then show 0
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
        <button style={{background:'white', borderRadius:'20px'}} onClick={() =>handleButtonClick("00")}>00</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={() =>handleButtonClick("%")}>%</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={handleDivideClick}>/</button>
      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("7")}>7</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("8")}>8</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("9")}>9</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={handleMultiplyClick}>*</button>
      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("4")}>4</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("5")}>5</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("6")}>6</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={handleSubtractClick}>-</button>

      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("1")}>1</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("2")}>2</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("3")}>3</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={handleAddonClick}>+</button>
      </div>

       <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%',marginBottom:'5px' }}>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick("0")}>0</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={()=>handleButtonClick(".")}>.</button>
        <button style={{background:'white', borderRadius:'20px'}} onClick={handleClearClick}>C</button>
        <button style={{background:'orange', borderRadius:'20px', color:'white'}} onClick={handleEqualClick}>=</button>
      </div>
      </div>
    </>
  )
}

export default App
