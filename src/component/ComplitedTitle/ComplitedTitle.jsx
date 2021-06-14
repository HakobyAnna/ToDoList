import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";

function ComplitedTitle(props) {
  return (
    <ListItem button onClick={props.handlClick}>
      <ListItemIcon>{props.iconName}</ListItemIcon>
      <ListItemText primary={`${props.todoItems.length} Complited items`} />
    </ListItem>
  );
}

export default ComplitedTitle;
