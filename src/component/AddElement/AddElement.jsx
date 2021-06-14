import {
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

function AddElement(props) {
  return (
    <>
      <Divider />
      <ListItem button onClick={props.handleClose}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>
        <ListItemText primary="List item" />
      </ListItem>
      <Divider />
      <Divider variant="middle" style={{ margin: "20px" }} />
    </>
  );
}

export default AddElement;
