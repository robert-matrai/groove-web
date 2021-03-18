import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import CustomNotification from "../exercise_list_page/CustomNotification";

const useStyles = makeStyles((theme) => ({
  dialog: {
    "& .MuiPaper-root": { backgroundColor: theme.palette.grey[900] },
  },
  button: {
    "&:hover": {
      backgroundColor: theme.palette.button.hover,
    },
    backgroundColor: theme.palette.button.active,
    width: "200px",
    fontFamily: theme.typography.fontFamily,
  },
}));

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[600],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="h6">{children}</Typography>

      <IconButton className={classes.closeButton} onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: "1px solid rgb(0,0,0,0.9)",
    borderBottom: "none",
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
  center: {
    justifyContent: "center",
  },
}))((props) => {
  const { center, classes, children } = props;
  return (
    <MuiDialogActions className={center ? classes.center : null}>
      {children}
    </MuiDialogActions>
  );
});

export default function CustomizedDialog() {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  const handleTestAlert = () => {
    alert("Test");
  };

  const handleTestNotifications = () => {
    const params = {
        title: "Set name",
        body: "Set x/y",
        tag: 1,
      }
    CustomNotification(params);
  };

  return (
    <div>
      <Dialog onClose={handleClose} open={open} className={classes.dialog}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Allow Notifications
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            The purpose of this application is to notify you at regular
            intervals of your choosing. To ensure that this can work optimally,
            please allow notifications for this site in your browser settings.
            You might also need to allow your browser to send you notifications
            in your system settings and make sure notifications are not blocked
            all-together by your computer (e.g. do not disturb-mode).
          </Typography>
          <Typography gutterBottom>
            You can test whether notifications are working by pressing the
            button below.
          </Typography>
          <DialogActions center={true}>
            <Button
              onClick={handleTestNotifications}
              className={classes.button}
            >
              Test notifications
            </Button>
          </DialogActions>
        </DialogContent>
        <DialogContent dividers>
          <Typography gutterBottom>
            If you do not allow notifications, the app will default to
            sending you browser alerts instead. This works less reliably, so we recommend using notifications.
          </Typography>
          <Typography gutterBottom>
            You can see what browser alerts look like by pressing the button
            below.
          </Typography>
          <DialogActions center={true}>
            <Button onClick={handleTestAlert} className={classes.button}>
              Test browser alerts
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </div>
  );
}
