import { useState, useEffect } from 'react';
import ListElement from './component/ListElement/ListElement';
import AddElement from './component/AddElement/AddElement';
import Modal from './component/Modal/Modal';
import ComplitedTitle from './component/ComplitedTitle/ComplitedTitle';
import { ExpandLess , ExpandMore } from '@material-ui/icons';
import data from './data/data.json';
// import ls from 'local-storage';
import './App.css';

function App() {
  const [toggleButton, showResult] = useState(true); 
  const [iconName, setName] = useState(<ExpandMore/>);
  const [open, setOpen] = useState(false);
  const [todoItems, setTodoItems] = useState(data);
  const [newItemText, setNewItemText] = useState("");

  function handlClick() {
    toggleButton ? showResult(false) : showResult(true);
    toggleButton ? setName(<ExpandLess/>) : setName(<ExpandMore/>);
  }

  const handleClose = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addItem = (event) => {
    event.preventDefault();
    handleClose();
    let newObj = {
      text: newItemText,
      completed: false
    }
    newItemText && setTodoItems([...data, newObj]);
    setNewItemText('');
  }

  const handleInput = (event) => {
    setNewItemText(event.target.value);
  };


  useEffect(() => {
    fetch('./data/data.json')
    .then((res) => console.log(res))
  })

  return (
    <div className="App">
      {todoItems.map((el) => {
        return <ListElement text={el.text}/>
      })}
      <AddElement handleClose={handleClose}/>
      <Modal 
        handleClose={handleClose} 
        open={open} 
        newItemText={newItemText} 
        handleInput={handleInput} 
        addItem={addItem} 
      />
      <ComplitedTitle 
        handlClick={handlClick} 
        iconName={iconName} 
        todoItems={todoItems}
      />
      {/* {useEffect(() =>  */}
        {toggleButton && todoItems.map((el) => {
          return el.completed && <ListElement text={el.text}/>
        })}
        {/* , [checkButton]
      )} */}

    </div>
  );
}

export default App;
