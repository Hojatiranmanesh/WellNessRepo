import React, { useState, useEffect } from 'react';
import { Grid, Button, Drawer, ButtonBase } from '@material-ui/core';
import settings from "../assets/images/settings.png";
import dots from "../assets/images/dots.png";
import { makeStyles } from "@material-ui/core/styles";
import back from "../assets/images/Right Arrow 2.png";
import { Link } from 'react-router-dom';
import Slider from '@material-ui/core/Slider';
import FontSize from './FontSize';
import { useHistory } from 'react-router-dom';
import cartIcon from '../assets/images/Cart 2.png';

const useStyles = makeStyles({
  settingsButton: {
    position: "fixed",
    right: 10,
    top: 17,
  },
  back: {
    position: "fixed",
    left: 21,
    top: 22,
  },
  backIcon: {
    height: 23,
    width: 32,
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

  },
  list: {
    width: "100vw",
    background: "#ffffff00",
    height: "100vh",
    display: "grid",
    justifyContent: "center",
    alignItems: "center",
    "& ul": {
      "& div": {
        textAlign: "center",
      },
    },

  },
  topList: {
    fontWeight: "bold",
    display: "grid",
    gridGap: "5em",
  },
  dotsIcon: {
    width: 28
  },
  listItem: {
    fontWeight: "bold",
    fontSize: "1.1em",
    color: "#4b6097",
    textAlign: "center",
    textShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px  #ffffffd1",
  }
});

const Header = ({ component, to, setting, cart }) => {
  const classes = useStyles();
  const history = useHistory();
  const [fontSizeState, setFontSize] = useState('1em');
  useEffect(() => {

  }, [fontSizeState])

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
  if (!setting) {
    setting = false;
  } else {
    setting = true
  }
  const backButton = () => {
    switch (component) {
      case "function":
        return (<ButtonBase className={classes.back} onClick={to}><img src={back} alt="بازگشت" className={classes.backIcon} /></ButtonBase>)
      case "link":
        return (<ButtonBase className={classes.back} component={Link} to={to}><img src={back} alt="بازگشت" className={classes.backIcon} /></ButtonBase>)
      case "dots":
        return (<ButtonBase className={classes.back} component={Link} to={to}><img src={dots} className={classes.dotsIcon} alt="dots" /></ButtonBase>)
      default:
        return ("");
    }
  }
  const handleChange = (e, value) => {
    localStorage.setItem('fontSize', value);
    setFontSize(FontSize(1))
  }
  return (
    <Grid item>
      <div>
        <React.Fragment key={"right"}>
          {(cart) ? <Button
            className={classes.settingsButton}

            onClick={() => history.push("/products/cart")}
          >
            <img style={{ width: 40, height: 40 }} src={cartIcon} alt="سبد خرید" />
          </Button> : null}
          {(setting) ? <Button
            className={classes.settingsButton}
            onClick={toggleDrawer("right", true)}
          >
            <img src={settings} alt="settings" />
          </Button> : null}

          {backButton()}
          <Drawer
            anchor={"right"}
            open={state["right"]}
            onClose={toggleDrawer("right", false)}
            onOpen={toggleDrawer("right", true)}
            disableBackdropClick
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
            >
              <div className={classes.topList}>
                <div className={classes.slider}>
                  <p style={{ fontSize: fontSizeState }} className={classes.listItem}>سایز متن</p>
                  <Slider
                    defaultValue={(localStorage.getItem('fontSize')) ? localStorage.getItem('fontSize') : 1}
                    marks
                    min={0}
                    track={false}
                    style={{ width: 289 }}
                    max={2}
                    onChange={handleChange}
                    classes={{ markLabel: classes.sliderLabel }}
                  />
                </div>
                <ButtonBase style={{ fontSize: fontSizeState }} className={classes.listItem}>جلوه‌های صوتی</ButtonBase>
                <ButtonBase style={{ fontSize: fontSizeState }} className={classes.listItem}>زبان فارسی</ButtonBase>
              </div>
              <ButtonBase
                onClick={() => { toggleDrawer("right", false); window.location.reload(false); }}
                className={classes.listItem}
                style={{ color: "#e1515a", fontSize: FontSize(1.1) }}
              >
                بازگشت
              </ ButtonBase>
            </div>
          </Drawer>
        </React.Fragment>
      </div>
    </Grid >
  )
}
export default Header;