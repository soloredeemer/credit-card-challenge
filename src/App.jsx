import logo from './logo.svg';
import './App.css';
// import Counter from './views/app1';
import gradiant1 from "./assets/bg-card-front.png"
import cardBack from "./assets/bg-card-back.png"
import React, { useState } from "react"
import Form from "./views/Form"
import Thanks from "./views/Thanks"



function App() {
  const [nam, setNam] = useState("")
  const [num, setNum] = useState("")
  const [mm, setMM] = useState("")
  const [yy, setYY] = useState("")
  const [cvv, setCvv] = useState("")

  const [validSubmit, setValidSubmit] = useState(false)


  const handleName = e => {
    console.log("setNamwe is fired:", e.target.value);
    setNam(e.target.value)

  }


  const handleNum = e => {
    console.log("setNum is fired:", e.target.value);
    setNum(e.target.value)

  }
  const handleMM = e => {
    console.log(e.target.value)
    setMM(e.target.value)
  }
  const handleYY = e => {
    console.log(e.target.value)
    setYY(e.target.value)
  }
  const handleCvv = e => {
    console.log(e.target.value)
    setCvv(e.target.value)
  }

  function isNameValid(name) {
    if (!name.length || !name.includes(" ")) { return false }
    let makeArr = name.split(" ")
    if (makeArr[0].length >= 2 && makeArr[1].length >= 2) {
      return true
    } else {
      return false
    }

  }

  function isNumValid(num) {
    let numReg = /\d{16}/
    console.log(numReg.test(num))
    return numReg.test(num)

  }


  function isCvvValid(mm, yy, cvv) {


    if (mm <= 12 && yy >= 23 && cvv > 100 && cvv < 1000) {
      return true
    } else {
      return false
    }



  }

  function theclickeriss(e, isCvvValid, isNameValid, isNumValid) {
    e.preventDefault()
    if (isCvvValid(mm, yy, cvv) && isNameValid(nam) && isNumValid(num)) {
      setValidSubmit(true)
    } else {
      setValidSubmit(false)
      alert(" Your information Is valid ")
    }

  }




  return (
    <>

      <div className="flexIt">
        <div id="left"></div>


        <div id="card1"><img src={gradiant1} alt="card1" /><h2 id= "cardtext">{num}</h2> <br/> <h5>{nam}</h5></div>

        <div id="card2"><img src={cardBack} alt="card2" /></div>

 
        <div id="right">


          {
            validSubmit ? <Thanks /> : <Form num={num} setNum={setNum} nam={nam} setNam={setNam} isNameValid={isNameValid} handleNum={handleNum} isNumValid={isNumValid} handleYY={handleYY} isCvvValid={isCvvValid} mm={mm} yy={yy} cvv={cvv} handleName={handleName} handleMM={handleMM} handleCvv={handleCvv} theclickeriss={theclickeriss} />
          }

  



        </div>
      </div>




    </>
  );
}
export default App;