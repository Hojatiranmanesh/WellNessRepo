import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import axios from 'axios';
import { Box } from '@material-ui/core';
import logo from '../assets/images/LogoWellness.png';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  logo: {
    width: 300
  },
  root: {
    height: "100%"
  },
  logoWrapper: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "27vh"
  },
  devTeam: {
    position: "fixed",
    bottom: 10,
    textAlign: "center",
    width: "100%",
    fontWeight: "bold",
    color: "#ad87c0",
  }
});

const Index = () => {
  const classes = useStyles();
  const [login, setLogin] = useState();
  const [content, setContent] = useState(
    <Box className={classes.root}>
      <Box className={classes.logoWrapper}>
        <img className={classes.logo} src={logo} alt="logo" />
      </Box>
      <Box className={classes.devTeam}>طراحی و توسعه توسط شرکت اکسین فراوان سپنتا</Box>
    </Box>
  );
  const checkLogin = () => {
    if (localStorage.getItem("jwt") === null || localStorage.getItem("jwt") === "") {
      setLogin(false)
    } else {
      axios.get('https://api.hamyarwellness.com/api/v1/users/checkLogin', { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
        .then(res => {
          setLogin(true)
        })
        .catch(err => {
          setLogin(false)
        })
    }
  }
  useEffect(() => {
    checkLogin()
  }, [])
  useEffect(() => {
    if (login === false) {
      setContent(<Redirect to={"/login"} />)
    } else if (login === true) {
      setContent(<Redirect to={"/profile"} />)
    } else {
    setContent(
      <Box className={classes.root}>
        <Box className={classes.logoWrapper}>
          <img className={classes.logo} src={logo} alt="logo" />
        </Box>
        <Box className={classes.devTeam}>طراحی و توسعه توسط شرکت اکسین فراوان سپنتا</Box>
      </Box>
    )
    }
  }, [login])
  return (content)
};
export default Index;