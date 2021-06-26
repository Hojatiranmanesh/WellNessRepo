import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  ButtonBase,
  Button,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import SettingsIcon from '@material-ui/icons/Settings';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from "@material-ui/core/styles";
import user from "../../assets/images/user.png";
import settings from "../../assets/images/settings.png";
import pencil from "../../assets/images/pencil.png";
import stopwatch from "../../assets/images/stopwatch.png";
import axios from "axios";

const useStyles = makeStyles({
  topBar: {
    padding: 20,
  },
  settingIcon: {
    fontSize: "2em",
  },
  bold: {
    fontWeight: "900",
  },
  nameBox: {
    margin: "30px 0",
    textAlign: "center",
    color: "#475d97",
  },
  sqareButtons: {
    backgroundColor: "#e9f1f8",
    margin: 15,
    padding: 10,
    borderRadius: 15,
    "& img": {
      height: 40,
    },
  },
  subscription: {
    width: "200px",
    margin: 15,
  },
  logout: {
    width: "200px",
    marginBottom: 80,
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
  BackdropProps: {
    background: "transparent",
  },
  fullList: {
    width: "auto",
  },
  settingsButton: {
    borderRadius: 50,
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
  listItems: {
    fontWeight: "bold",

  }
});

const Profile = () => {
  const classes = useStyles();
  const [fname, setFname] = useState();
  const [lname, setlname] = useState();
  const [phone, setPhone] = useState();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
      },
    };
    axios.get("http://api.hamyarwellness.com/api/v1/users/getOne", config)
      .then(res => {
        console.log(res)
        setFname(res.data.data.firstname)
        setlname(res.data.data.lastname)
        setPhone(res.data.data.phone)
      })

  }, [])

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

  return (
    <Box>
      <Grid className={classes.topBar} container justify="flex-end">
        <Grid item>
          <div>
            <React.Fragment key={"right"}>
              <Button
                className={classes.settingsButton}
                onClick={toggleDrawer("right", true)}
              >
                <SettingsIcon className={classes.settingIcon} />
              </Button>
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
        <Grid
          item
          className={classes.nameBox}
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Grid item>
            <img src={user} alt="profile pic" />
          </Grid>
          <Grid item>
            <Typography className={classes.bold} variant="h6">
              {fname + " " + lname}
            </Typography>
            <Typography variant="h6">{phone}</Typography>
          </Grid>
        </Grid>
        <Grid item container justify="center">
          <ButtonBase component={Link} to={'/profile/edit'} className={classes.sqareButtons}>
            <img src={settings} alt="settings" />
          </ButtonBase>
          <ButtonBase className={classes.sqareButtons}>
            <img src={stopwatch} alt="stopwatch" />
          </ButtonBase>
          <ButtonBase className={classes.sqareButtons}>
            <img src={pencil} alt="pencil" />
          </ButtonBase>
        </Grid>
        <Grid
          item
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
          <Button
            variant="contained"
            color="primary"
            className={classes.subscription}
          >
            اشتراک طلایی
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            className={classes.logout}
          >
            خروج از حساب کاربری
          </Button>
        </Grid>
      </Grid>
    </Box >
  );
};
export default Profile;
