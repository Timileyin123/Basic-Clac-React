import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Screen from './components/Screen/Screen';
import Button from './components/Button/Button';
import * as math from 'mathjs';

function App(){

  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const resetInput =() => {
    setText(" ");
    setResult(" ");
  };
const deleteData = () =>{
  setText();
};
const checkResult = ()=>{
  const input = text.join(" "); //remove commas

  setResult(math.evaluate(input));
};
  
  const addToText = (val)  => {
    setText((text) =>[...text, val + " "])
  };
  // useEffect((event)=>{
  //   event.preventDefault();
  // } )
    //   window.onbeforeunload = function() {
    //     return alert("Are you sure you want to leave?");
    // }
  return (
    <div className="App">
       <Header />
       <div className='form'>
         <Screen  text={text} result={result}/>
         <div className='button-row'>
          <Button label={'AC'} handleClick={resetInput}/>
          <Button label={'Del'} handleClick={deleteData}/>
          <Button label={'.'} handleClick={addToText} />
          <Button label={'/'} handleClick={addToText} />
            </div>
            <div className='button-row'>
          <Button label={'7'} handleClick={addToText}/>
      <Button label={'8'} handleClick={addToText}/>
      <Button label={'9'} handleClick={addToText}/>
      <Button label={'+'} handleClick={addToText}/>
            </div>
            <div className='button-row'>
          <Button label={'4'} handleClick={addToText}/>
      <Button label={'5'} handleClick={addToText}/>
      <Button label={'6'} handleClick={addToText} />
      <Button label={'*'} handleClick={addToText}/>
            </div>
            <div className='button-row'>
          <Button label={'1'} handleClick={addToText}/>
      <Button label={'2'} handleClick={addToText}/>
      <Button label={'3'} handleClick={addToText}/>
      <Button label={'-'} handleClick={addToText}/>
            </div>
            <div className='button-row'>
          <Button label={'0'} handleClick={addToText}/>
          <Button label={'='} handleClick={checkResult}/>
            </div>
       </div>
       <div>
           
       </div>
       
    </div>
  );
}

export default App;
