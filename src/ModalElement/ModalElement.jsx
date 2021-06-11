import Modal from '@material-ui/core/Modal';

function ModalElement(props) {
    return(
        <Modal
        aria-labelledby="spring-modal-title"
        aria-describedby="spring-modal-description"
        // className={classes.modal}
        open={props.open}
        onClose={props.handleClose}
        closeAfterTransition
        // BackdropComponent={Backdrop}
        // BackdropProps={{
        //   timeout: 500,
        // }}
      />
    )
}

export default ModalElement