import React, { useState } from 'react';
import { Grid, Typography, TextField, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';

const useStyles = makeStyles({
    header: { height: 250, maxHeight: "40vh", background: "#d7e5f2", padding: 40 },
    headerTitle: { fontWeight: 'bold', color: "#465b92", textShadow: "0px 2px 4px #00000054" },
    body: {
        padding: 10,

    },
    inputRoot: {
        fontSize: 30
    },
    labelRoot: {
        fontSize: 30,
        "&$labelFocused": {
            marginBottom: 10
        }
    },
    loginButton: {
        width: "100%",
        color: "#fff",
        marginTop: 15,
        background: "linear-gradient(0deg, rgba(73,94,149,1) 0%, rgba(87,108,163,1) 100%)",
        fontSize: "1.5em",
        borderRadius: 15,
        height: 50,
        paddingBottom: 8
    },
    signupButton: {
        width: "100%",
        marginTop: 15,
        fontSize: "1.5em",
        borderRadius: 15,
        height: 50,
        paddingBottom: 8,
        border: "3px solid #5b957d",
        color: "#5b957d",
    },
    forgotPassword: {
        color: "#e65660",
        textShadow: "0 2px 4px #00000066",
        fontSize: "1.1em",
        textAlign: "center"
    },
});


const Login = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [logedIn, setLogedIn] = useState("");
    const classes = useStyles();

    const loginAction = () => {
        axios.post('http://api.hamyarwellness.com/api/v1/users/login', { phone: phone, password: password })
            .then(function (response) {
                localStorage.setItem('userid', response.data.user._id);
                localStorage.setItem('jwt', response.data.token);
                setLogedIn(true);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }
    if (logedIn) {
        return <Redirect to='/profile' />
       }
    return (
        <Grid container className={classes.root}>
            <Grid item container justify="center" alignContent="flex-start" className={classes.header}>
                <Typography className={classes.headerTitle} variant={'h4'}>ورود به پنل کاربری </Typography>
            </Grid>
            <Grid item container className={classes.body} justify="center">
                <form>
                    <Grid item style={{ width: "100%", marginBottom: 15 }} >
                        <TextField id="phone"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            InputProps={{ classes: { root: classes.inputRoot } }} InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }} label="شماره همراه"
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", marginBottom: 15 }}>
                        <TextField id="password" InputProps={{ classes: { root: classes.inputRoot } }}
                            onChange={e => setPassword(e.target.value)}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }} type="password"
                            autoComplete="current-password" label="رمزعبور" />
                    </Grid>
                    <Grid item style={{ width: "100%", marginBottom: 15 }}>
                        <ButtonBase onClick={loginAction} className={classes.loginButton}>ورود</ButtonBase>
                    </Grid>
                    <Grid item style={{ width: "100%", marginBottom: 15 }}>
                        <ButtonBase component={Link} to="/signup" className={classes.signupButton}>ثبت‌نام</ButtonBase>
                    </Grid>

                    <Grid item>
                        <Typography className={classes.forgotPassword} varient="body1">رمز عبور خود زا فراموش کرده‌اید؟</Typography>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default Login;
