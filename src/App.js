import { useState } from 'react';
import ListElement from './component/ListElement/ListElement';
import ModalElement from '../src/ModalElement/ModalElement';
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

  function handlClick() {
    toggleButton ? showResult(false) : showResult(true);
    toggleButton ? setName(<ExpandLess/>) : setName(<ExpandMore/>);
  }

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">

      {data.map((el) => {
        return <ListElement text={el.text}/>
      })}

      <Divider />
      <ListItem button onClick={handleOpen}>
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
            <TextField id="outlined-basic" label="Outlined" variant="outlined"/>
            <Button variant="contained" style={{margin: '10px 25px 5px 25px'}}>
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
        <ListItemText primary="nth Complited items" />
      </ListItem>

      {toggleButton && data.map((el) => {
        return <ListElement text={el.text}/>
      })}

    </div>
  );
}

export default App;
