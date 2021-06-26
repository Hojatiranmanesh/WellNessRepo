import React from "react";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import MusicNoteOutlinedIcon from '@material-ui/icons/MusicNoteOutlined';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';

const useStyles = makeStyles({
  root: {
    position: "fixed",
    bottom: "5px",
    left: "0px",
    right: "0px",
    height: "60px",
    margin: "0 5px",
    borderRadius: 10,
    background: "rgba(255, 255, 255, 0.2)",
    padding: 5,
    backdropFilter: "blur(10px)",
  },
  navItem: {
    padding: 0,
    fontWeight: "bold",
  },
  navIcon: {
    fontSize: 30,
  },
});

const BootomNav = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      className={classes.root}
    >
      <BottomNavigationAction
        className={classes.navItem}
        component={Link}
        to="/"
        label="ارزیابی"
        value="quizzes"
        icon={<FavoriteIcon className={classes.navIcon} />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        component={Link}
        to="/"
        label="فروشگاه"
        value="shop"
        icon={<ShoppingCartOutlinedIcon className={classes.navIcon} />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        component={Link}
        to="/"
        label="نوبت‌دهی"
        value="reservation"
        icon={<EqualizerOutlinedIcon className={classes.navIcon} />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        component={Link}
        to="/"
        label="ریلکسیشن"
        value="relaxation"
        icon={<MusicNoteOutlinedIcon className={classes.navIcon} />}
      />
      <BottomNavigationAction
        className={classes.navItem}
        component={Link}
        to="/profile"
        label="پروفایل"
        value="profile"
        icon={<PersonOutlinedIcon className={classes.navIcon} />}
      />
    </BottomNavigation>
  );
};

export default BootomNav;
