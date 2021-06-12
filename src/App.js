import { useState } from 'react';
import ListElement from './component/ListElement/ListElement';
// import ModalElement from '../src/ModalElement/ModalElement';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Dialog, DialogTitle, DialogContent, TextField, Button } from '@material-ui/core';
import { ExpandLess , ExpandMore } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import data from './data/data.json';
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

  // const handleOpen = () => {
  //   setOpen(true);
  // };

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

  // const itenary = todoItems;
  return (
    <div className="App">

      {todoItems.map((el) => {
        return <ListElement text={el.text}/>
      })}

      <Divider />
      <ListItem button onClick={handleClose}>
        <ListItemIcon>
          <AddIcon/>
        </ListItemIcon>
        <ListItemText primary="List item" />
      </ListItem>
      <Divider />
      <Divider variant="middle" style={{margin: '20px'}}/>


      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
          <DialogTitle id="customized-dialog-title" className="modal-title-containner">
            <p>Add</p>
            <CloseIcon className="close-button" onClick={handleClose}/>
          </DialogTitle>
          <DialogContent dividers className="popup-container">
              <TextField id="outlined-basic" variant="outlined" value={newItemText} onChange={handleInput}/>
              <Button variant="contained" style={{margin: '10px 25px 5px 25px'}} onClick={addItem}>
                Add
              </Button>
              <Button variant="contained" color="secondary" onClick={handleClose} style={{margin: '5px 25px 0 25px'}}>
                Cancel
              </Button>
          </DialogContent>
        </Dialog>


       <ListItem button onClick={handlClick}>
        <ListItemIcon>
          {iconName}
        </ListItemIcon>
        <ListItemText primary={`${todoItems.length} Complited items`}/>
      </ListItem>

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
