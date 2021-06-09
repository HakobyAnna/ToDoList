import { useState } from 'react';
import ListElement from './component/ListElement/ListElement';
import { Divider, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { ExpandLess , ExpandMore } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import data from './data/data.json';
import './App.css';

function App() {
  const [toggleButton, showResult] = useState(true); 
  const [iconName, setName] = useState(<ExpandMore/>);
  // const [checkButton, setButton] = useState(false);

  function handlClick() {
    toggleButton ? showResult(false) : showResult(true);
    toggleButton ? setName(<ExpandLess/>) : setName(<ExpandMore/>);
  }

  return (
    <div className="App">

      {data.map((el) => {
        return <ListElement text={el.text}/>
      })}

      <Divider />
      <ListItem button>
        <ListItemIcon>
          <AddIcon/>
        </ListItemIcon>
        <ListItemText primary="List item" />
      </ListItem>
      <Divider />
      <Divider variant="middle" style={{margin: '20px'}}/>

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
