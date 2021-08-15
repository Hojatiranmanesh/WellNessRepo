import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, ButtonBase, Snackbar, } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { hideNav } from '../../actions';

const useStyles = makeStyles({
    header: { height: 210, maxHeight: "40vh", padding: 40 },
    headerTitle: {
        color: "#465b92",
        fontWeight: "bold",
        width: "95%",
        textShadow: "0px 2px 4px #00000054",
        textAlign: "center",
        padding: "19px 0",
        marginBottom: 50,
        border: "1px solid #0000008c",
        borderRadius: 20,
        boxShadow: "0 0 6px 3px #00000063",
    },
    body: {
        padding: "40px 10px",
        border: "1px solid #0000008c",
        boxShadow: "0 0 6px 3px #00000063",
        margin: "70px auto",
        borderRadius: 20,
        width: "95%",
        maxWidth:600,
    },
    inputRoot: {
        fontSize: 20
    },
    labelRoot: {
        fontSize: 20,
        "&$labelFocused": {
            marginBottom: 10
        }
    },
    loginButton: {
        width: "100%",
        color: "#fff",
        marginTop: 50,
        background: "linear-gradient(0deg, rgba(73,94,149,1) 0%, rgba(87,108,163,1) 100%)",
        fontSize: "1em",
        borderRadius: 15,
        height: 50,
        paddingBottom: 8,
        boxShadow: "0 0 7px 3px rgb(73 94 149 / 58%)"
    },
    signupButton: {
        width: "100%",
        marginTop: 15,
        fontSize: "1em",
        borderRadius: 15,
        height: 40,
        paddingBottom: 8,
        border: "3px solid #5b957d",
        boxShadow: "0 0 7px 3px #5b957d",
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
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
        dispatch(hideNav())
    }, [])

    const loginAction = () => {
        axios.post('https://api.hamyarwellness.com/api/v1/users/login', { phone: phone, password: password })
            .then(function (response) {
                localStorage.setItem('userid', response.data.user._id);
                localStorage.setItem('jwt', response.data.token);
                setLogedIn(true);
                setOpenSnack(true)
                setSnackType("success")
                setSnackMessage("test")
                setTimeout(() => {
                    window.location.reload(false);
                }, 500);
                console.log('page to reload')

            })
            .catch(function (error) {
                console.log(error);
                setSnackType("error")
                setSnackMessage("خطا در لاگین")
                setOpenSnack(true)
                if (error.response.status === 401) {
                    localStorage.removeItem('jwt')
                    setSnackMessage("نام کاربری یا رمزعبور اشتباه است")
                }
            });
    }
    if (logedIn) {
        return <Redirect to='/profile' />
    }
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    return (
        <Grid container direction="column" className={classes.root}>
            {/* <Grid item container justify="center" alignContent="flex-start" className={classes.header}> */}

            {/* </Grid> */}
            <Grid item container className={classes.body} justify="center">
                <Typography className={classes.headerTitle} variant={'h5'}>ورود به پنل کاربری </Typography>
                <form>
                    <Grid item style={{ width: "100%", marginBottom: 15 }} >
                        <TextField id="phone"
                            variant="filled"
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
                            variant="filled"
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
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity={snackType}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </Grid>
    )
}

export default Login;
