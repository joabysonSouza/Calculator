import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [num, setnum] = useState(0);
  const [oldnum, setoldnum] = useState(0);
  const [operator, setoperator] = useState();

  function numInput(e) {
    var input = e.target.value;
    if (num === 0) {
      setnum(input);
    } else {
      setnum(num + input);
    }
  }

  function clear() {
    setnum(0);
  }

  function percentage() {
    setnum(num / 100);
  }

  function changeSign() {
    if (num > 0) {
      setnum(-num);
    } else {
      setnum(Math.abs(num));
    }
  }

  function operatorhandle(e) {
    var operatorinput = e.target.value;
    setoperator(operatorinput)
    setoldnum(num)
    setnum(0)
    console.log(operatorinput);
  }

   function calculate(){
    if(operator==='/'){
      setnum (parseFloat(oldnum) / parseFloat(num))
    } else if (operator === 'X'){
      setnum (parseFloat(oldnum) * parseFloat(num))
    }else if (operator === '+'){
      setnum (parseFloat(oldnum) + parseFloat(num))
    }else if (operator === '-'){
      setnum (oldnum - num)
    }

    }

   
  return (
    <>
      
      <section className="container">
        <input type="text" className="text" value={num} />

        <div className="icones">
          <button className="orange" onClick={clear}>AC</button>
          <button className="orange" onClick={changeSign}>+/-</button>
          <button className="orange" onClick={percentage}>%</button>
          <button className="orange" onClick={operatorhandle} value={"/"}>
            /
          </button>
          <button onClick={numInput} value={7}>
            7
          </button>
          <button onClick={numInput} value={8}>
            8
          </button>
          <button onClick={numInput} value={9}>
            9
          </button>
          <button className="orange" onClick={operatorhandle} value={"X"}>
            X
          </button>
          <button onClick={numInput} value={4}>
            4
          </button>
          <button onClick={numInput} value={5}>
            5
          </button>
          <button onClick={numInput} value={6}>
            6
          </button>
          <button className="orange"onClick={operatorhandle} value={"-"}>
            -
          </button>
          <button onClick={numInput} value={1}>
            1
          </button>
          <button onClick={numInput} value={2}>
            2
          </button>
          <button onClick={numInput} value={3}>
            3
          </button>
          <button className="orange" onClick={operatorhandle} value={"+"}>
            +
          </button>
          <button className="zero" onClick={numInput} value={0}>
            0
          </button>
          <button className="orange" onClick={numInput} value={"."}>
            ,
          </button>
          <button className="orange" onClick={calculate} value={'='}>
            =
            </button>
        </div>
      </section>
    </>
  );
}

export default Calculator;
