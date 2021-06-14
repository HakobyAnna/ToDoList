import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import './Modal.css';

function Modal(props) {
  return (
    <Dialog
      onClose={props.handleClose}
      aria-labelledby="customized-dialog-title"
      open={props.open}
    >
      <DialogTitle
        id="customized-dialog-title"
        className="modal-title-containner"
      >
        <p>Add</p>
        <CloseIcon className="close-button" onClick={props.handleClose} />
      </DialogTitle>
      <DialogContent dividers className="popup-container">
        <TextField
          id="outlined-basic"
          variant="outlined"
          value={props.newItemText}
          onChange={props.handleInput}
        />
        <Button
          variant="contained"
          style={{ margin: "10px 25px 5px 25px" }}
          onClick={props.addItem}
        >
          Add
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.handleClose}
          style={{ margin: "5px 25px 0 25px" }}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
