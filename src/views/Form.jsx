import React from "react"


// when recieving props in the child, you have 2 ways of destructuring them out of the props object.
//1. INSIDE the parenthesis: 
// ex: function Form ({ num1, setNum, mm, setMM etc etc})

// because you have SO MANY props - its best practice to do this cleaner and destructure inside the function rather than in the parenthesis... like dis: 



function Form(props) {

    const {
        num,
        handleCvv,
        handleMM,
        handleName,
        nam,
        isNameValid,
        handleNum,
        isNumValid,
        handleYY,
        isCvvValid,
        mm,
        yy,
        cvv,
        theclickeriss
    } = props





    return (
        <div id="mainForm">
            <form action="">
                CARDHOLDER NAME
                <div><input type="text" placeholder='John Smith' className="radius" onChange={handleName} /></div> {isNameValid(nam) ? null : <p>invalid</p>}
                
                CARD NUMBER
                <div>
                    <input type="text" className="radius" placeholder='4569 4569 9874 3216' onChange={handleNum} />
                    {num}
                   
                    {isNumValid(num) ? null : <p>invalid</p>}
                </div>
                
                
                EXP. DATE (MM/YY) CVV
                <div><input type="text" id="twoDg" placeholder='MM' onChange={handleMM} /><input type="text" id="twoDg" placeholder='YY' onChange={handleYY} />

                    <input type="text" id="cvv" placeholder='e.g. 123' onChange={handleCvv} />

                </div>
                {isCvvValid(mm, yy, cvv) ? null : <p>invalid</p>}
                <br />

                <button type="submit" className="confirm" onClick={(e) => theclickeriss(e, isCvvValid, isNameValid, isNumValid)}>Confirm</button>



            </form>
        </div>


    )

}
export default Form
