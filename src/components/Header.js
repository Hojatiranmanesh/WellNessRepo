import React, { useState } from 'react';
import { Grid, Button, SwipeableDrawer, ListItem, ListItemText, List, ButtonBase } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
  settingsButton: {
    position: "fixed",
    right: 10,
    top: 17,
  },
  back: {
    position: "fixed",
    left: 10,
    top: 17,
  },
  backIcon:{
    fontSize:"2em"
  },
  settingIcon: {
    fontSize: "2em",
  },
  BackdropProps: {
    background: "transparent",
  },
  drawerRoot: {
    background: "#ffffff00",
    "&::before": {
      content: '""',
      position: "fixed",
      left: 0,
      right: 0,
      zIndex: "-1",
      height: "100vh",
      width: "100vw",
      backdropFilter: "blur(10px)",
    },
  },
  drawerPaper: {
    background: "transparent"
  },
  drawerModal: {
    background: "transparent"
  },
  exitButton: {
    position: "absolute",
    top: 27,
    right: 33
  },
  list: {
    width: "100vw",
    background: "#ffffff00",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      "& div": {
        textAlign: "center",
      },
    },

  },
  listItems: {
    fontWeight: "bold",
  },
});

const Header = ({ component, to }) => {
  const classes = useStyles();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const backButton = () => {
    switch (component) {
      case "function":
        return (<ButtonBase className={classes.back} onClick={to}><ArrowForwardIcon className={classes.backIcon} /></ButtonBase>)
      case "link":
        return (<ButtonBase className={classes.back} component={Link} to={to}><ArrowForwardIcon className={classes.backIcon} /></ButtonBase>)
      default:
        return ("");
    }
  }
  return (
    <Grid item>
      <div>
        <React.Fragment key={"right"}>
          <Button
            className={classes.settingsButton}
            onClick={toggleDrawer("right", true)}
          >
            <SettingsIcon className={classes.settingIcon} />
          </Button>
          {backButton()}
          <SwipeableDrawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            BackdropProps={{
              classes: {
                root: classes.BackdropProps
              }
            }}
            classes={{
              modal: classes.drawerModal,
              paper: classes.drawerPaper,
              root: classes.drawerRoot,
            }}
          >
            <div
              className={classes.list}
              role="presentation"
              onClick={toggleDrawer("right", false)}
              onKeyDown={toggleDrawer("right", false)}
            >
              <ButtonBase
                className={classes.exitButton}
                onClick={toggleDrawer("right", true)}
              >
                <CloseIcon className={classes.settingIcon} />
              </ ButtonBase>
              <List>
                <ListItem className={classes.listItems} button key={"darklight"}>
                  <ListItemText primary={"حالت تیره/روشن"} />
                </ListItem>

                <ListItem className={classes.listItems} button key={"soundEffects"}>
                  <ListItemText primary={"جلوه های صوتی"} />
                </ListItem>

                <ListItem className={classes.listItems} button key={"language"}>
                  <ListItemText primary={"فارسی"} />
                </ListItem>
              </List>
            </div>
          </SwipeableDrawer>
        </React.Fragment>
      </div>
    </Grid>
  )
}
export default Header;