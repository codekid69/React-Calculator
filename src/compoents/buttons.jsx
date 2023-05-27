import { useState } from "react";

const Keys = () => {
  const [result, setResult] = useState("");
  const handleBtnClick = (e) => {
    setResult(result.concat(e.target.value));
  };
  const clearScreen=()=>{
    setResult("");
  }
  const clearOne=()=>{
    setResult(result.slice(0,result.length-1));
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }
  return (
    <>
      <div className="screen">
        <span className="result">{result}</span>
      </div>
      <div className="buttons">
        <button className="btn" onClick={clearScreen}>CLEAR</button>
        <button className="btn" onClick={clearOne}> C </button>
        <button className="btn"value={"%"} onClick={handleBtnClick}>%</button>
        <button className="btn"value={"/"} onClick={handleBtnClick}>/</button>
        <button className="btn" value={"7"} onClick={handleBtnClick}>
          7
        </button>
        <button className="btn" value={"8"} onClick={handleBtnClick}>
          8
        </button>
        <button className="btn" value={"9"} onClick={handleBtnClick}>
          9
        </button>
        <button className="btn" value={"*"} onClick={handleBtnClick}>X</button>
        <button className="btn" value={"4"} onClick={handleBtnClick}>
          4
        </button>
        <button className="btn" value={"5"} onClick={handleBtnClick}>
          5
        </button>
        <button className="btn" value={"6"} onClick={handleBtnClick}>
          6
        </button>
        <button className="btn"value={"-"} onClick={handleBtnClick}>-</button>
        <button className="btn" value={"1"} onClick={handleBtnClick}>
          1
        </button>
        <button className="btn" value={"2"} onClick={handleBtnClick}>
          2
        </button>
        <button className="btn" value={"3"} onClick={handleBtnClick}>
          3
        </button>
        <button className="btn"value={"+"} onClick={handleBtnClick}>+</button>
        <button className="btn zero" value={"0"} onClick={handleBtnClick}>
          0
        </button>
        <button className="btn" value={"."} onClick={handleBtnClick}>.</button>
        <button className="btn" onClick={calculate}> = </button>
      </div>
    </>
  );
};
export default Keys;
