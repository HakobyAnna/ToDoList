import { useEffect, useState } from "react";
import ListElement from "./component/ListElement/ListElement";
import AddElement from "./component/AddElement/AddElement";
import Modal from "./component/Modal/Modal";
import ComplitedTitle from "./component/ComplitedTitle/ComplitedTitle";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import data from "./data/data.json";
import "./App.css";

function App() {
  const [toggleButton, showResult] = useState(true);
  const [iconName, setName] = useState(<ExpandMore />);
  const [open, setOpen] = useState(false);
  const [todoItems, setTodoItems] = useState(data);
  const [tasksToBeDone, setTasksToBeDone] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [newItemText, setNewItemText] = useState("");

  useEffect(() => {
    let completedTasksArr = todoItems.filter((el) => el.completed);
    let tasksToBeDoneArr = todoItems.filter((el) => el.completed === false);
    setCompletedTasks(completedTasksArr);
    setTasksToBeDone(tasksToBeDoneArr);
  }, [todoItems]);

  function addToDones(id) {
    let arr = tasksToBeDone.filter((el) => el._id !== id);
    setTasksToBeDone(arr);

    // let doneTask = todoItems.filter((el) => el._id === id);
    // setCompletedTasks([...completedTasks, doneTask[0]]);
  }

  function handlClick() {
    toggleButton ? showResult(false) : showResult(true);
    toggleButton ? setName(<ExpandLess />) : setName(<ExpandMore />);
  }

  const handleClose = () => {
    open ? setOpen(false) : setOpen(true);
  };

  const addItem = (event) => {
    event.preventDefault();
    handleClose();
    let newObj = {
      _id: todoItems.length + 1,
      text: newItemText,
      completed: false,
    };
    newItemText && setTodoItems([...todoItems, newObj]);
    setNewItemText("");
  };

  const handleInput = (event) => {
    setNewItemText(event.target.value);
  };

  return (
    <div className="App">
      {tasksToBeDone.map((el, i) => {
        return <ListElement key={i} item={el} lineStyle="" addFunction={addToDones} />;
      })}
      <AddElement handleClose={handleClose} />
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
      {completedTasks.map((el, i) => {
        return <ListElement key={i} item={el} checked={true} lineStyle="done" />;
      })}
    </div>
  );
}

export default App;
