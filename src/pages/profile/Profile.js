import React, { useEffect, useState } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import {
  Grid,
  Box,
  Typography,
  ButtonBase,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import user from "../../assets/images/user.png";
import settings from "../../assets/images/settings.png";
import pencil from "../../assets/images/pencil.png";
import stopwatch from "../../assets/images/stopwatch.png";
import axios from "axios";
import Header from '../../components/Header'

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
  fullList: {
    width: "auto",
  },
  settingsButton: {
    borderRadius: 50,
  },
});

const Profile = () => {
  const classes = useStyles();
  const [fname, setFname] = useState();
  const [lname, setlname] = useState();
  const [phone, setPhone] = useState();




  useEffect(() => {
    const config = {
      headers: {
        "Content-type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
      },
    };
    axios.get("http://api.hamyarwellness.com/api/v1/users/getMyProfile", config)
      .then(res => {
        console.log(res)
        setFname(res.data.data.firstname)
        setlname(res.data.data.lastname)
        setPhone(res.data.data.phone)
      })
      .catch(err => {
        if (err.response.status === 401) {
          localStorage.removeItem('jwt')
        }
      })

  }, [])

  useEffect(() => {
    <Router forceRefresh={true} />
  }, [])

  return (
    <Box>

      <Grid className={classes.topBar} container justify="flex-end">
        <Header />
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
