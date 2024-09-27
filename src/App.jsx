import "./App.css"
import { useState } from "react";

function App() {

  const [result, setResult] = useState(0)
  const [number, setNumber] = useState("")
  const [otherNumber, setOtherNumber] = useState("")
  const [operation, setOperation] = useState("+")

  const updateNumber = (value) => {
    if (number === "0") {
      setNumber(String(value))
    } else {
      setNumber((number) => number + value)
    }

  }
  const updateOtehrNumber = (value) => {
    if (otherNumber === "0") {
      setOtherNumber(String(value))
    } else {
      setOtherNumber((otherNumber) => otherNumber + value)
    }
  }

  const clearNumber = () => {
    setNumber("0")
    setResult(0)
  }

  const clearOtherNumber = () => {
    setOtherNumber("0")
    setResult(0)
  }

  const addToSum = () => {
    setResult(Number(number) + Number(otherNumber))
    setOperation("+")
  } 

  const subtractSum = () => {
    setResult(Number(number) - Number(otherNumber))
    setOperation("-")

  }

  const multiplySum = () => {
    setResult(Number(number) * Number(otherNumber))
    setOperation("*")

  }

  const divSum = () => {
    setResult(Number(number) / Number(otherNumber))
    setOperation("÷")
  }



  return (
    <div className="calculator">
      <div className="panel">
        <p>{number}</p>
        <div className="numbers">
          <button onClick={() => updateNumber(1)}>1</button>
          <button onClick={() => updateNumber(2)}>2</button>
          <button onClick={() => updateNumber(3)}>3</button>
          <button onClick={() => updateNumber(4)}>4</button>
          <button onClick={() => updateNumber(5)}>5</button>
          <button onClick={() => updateNumber(6)}>6</button>
          <button onClick={() => updateNumber(7)}>7</button>
          <button onClick={() => updateNumber(8)}>8</button>
          <button onClick={() => updateNumber(9)}>9</button>
          <button onClick={() => updateNumber(0)}>0</button>
          <button onClick={() => clearNumber()}>Clear</button>
        </div>
      </div>

      <div className="panel">
        <p>{operation}</p>
        <div className="numbers">
          <button onClick={() => addToSum()}>+</button>
          <button onClick={() => subtractSum()}>-</button>
          <button onClick={() => multiplySum()}>*</button>
          <button onClick={() => divSum()}>÷</button>
        </div>
      </div>

      <div className="panel">
        <p>{otherNumber}</p>
        <div className="numbers">
          <button onClick={() => updateOtehrNumber(1)}>1</button>
          <button onClick={() => updateOtehrNumber(2)}>2</button>
          <button onClick={() => updateOtehrNumber(3)}>3</button>
          <button onClick={() => updateOtehrNumber(4)}>4</button>
          <button onClick={() => updateOtehrNumber(5)}>5</button>
          <button onClick={() => updateOtehrNumber(6)}>6</button>
          <button onClick={() => updateOtehrNumber(7)}>7</button>
          <button onClick={() => updateOtehrNumber(8)}>8</button>
          <button onClick={() => updateOtehrNumber(9)}>9</button>
          <button onClick={() => updateOtehrNumber(0)}>0</button>
          <button onClick={() => clearOtherNumber()}>Clear</button>
        </div>
      </div>
      <div className="panel answer">
        <p>{result}</p>
        <div>
          <button>=</button>
        </div>
      </div>
    </div>
  )
}

export default App
