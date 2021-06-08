import { useState } from 'react';
import ListItem from './component/ListItem/ListItem';
import data from './data/data.json';
import './App.css';

function App() {
  const [toggleButton, showResult] = useState(true); 

  function handlClick() {
    showResult(toggleButton ? false : true);
  } 

  return (
    <div className="App">
      {data.map((el) => {
        return <ListItem text={el.text}/>
      })}
      <input type='button' value='+' onClick={handlClick}/>
      <p>List item</p>
      <input type='button' value='>' onClick={handlClick}/>
      {toggleButton && data.map((el) => {
        return <ListItem text={el.text}/>
      })}
    </div>
  );
}

export default App;
