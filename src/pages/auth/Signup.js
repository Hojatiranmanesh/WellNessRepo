import React, { useState, useEffect } from 'react';
import { Grid, Typography, TextField, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { hideNav, } from '../../actions';

const useStyles = makeStyles({
    header: { height: 300, maxHeight: "40vh", padding: 40 },
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
        justifyContent: "center"
    },
    inputRoot: {
        fontSize: 20,
        width: "100%"
    },
    labelRoot: {
        fontSize: 20,
        width: "100%",
        "&$labelFocused": {
            marginBottom: 10
        }
    },
    sendActivation: {
        width: "100%",
        color: "#fff",
        marginTop: 15,
        background: "linear-gradient(0deg, rgba(85,145,120,1) 0%, rgba(100,160,134,1) 100%)",
        boxShadow: "0 0 7px 3px rgba(85,145,120,0.73)",
        fontSize: "1em",
        borderRadius: 15,
        height: 50,
        paddingBottom: 4
    },
});

const Signup = () => {
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [signedUp, setSignedUp] = useState("");
    const dispatch = useDispatch()
    const classes = useStyles();
    useEffect(() => {
        dispatch(hideNav())
    }, [])
    const signup = () => {
        if (password === rePassword) {
            axios.post('https://api.hamyarwellness.com/api/v1/users/signup', { phone: phone, password: password, })
                .then(res => {
                    localStorage.setItem('userid', res.data.user._id);
                    setSignedUp(true)
                })
                .catch(err => {
                    if (err.response.status === 401) {
                        localStorage.removeItem('jwt')
                    }
                })
        }
    }
    if (signedUp) {
        return <Redirect to='/activate' />
    }
    return (
        <Grid container className={classes.root}>
            {/* <Grid item container justify="center" alignContent="flex-start" className={classes.header}> */}

            {/* </Grid> */}
            <Grid item container direction="column" className={classes.body} justify="center">
                <Typography className={classes.headerTitle} variant={'h5'}>عضویت در پنل کاربری </Typography>
                <form>
                    <Grid item style={{ marginBottom: 15 }}>
                        <TextField id="phone" style={{ width: "100%" }} InputProps={{ classes: { root: classes.inputRoot } }}
                            variant="filled"
                            value={phone}
                            onChange={e => setPhone(e.target.value)}
                            InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }} label="شماره همراه" />
                    </Grid>
                    <Grid item style={{ width: "100%", marginBottom: 15 }}>
                        <TextField id="password"
                            style={{ width: "100%" }}
                            variant="filled"
                            InputProps={{ classes: { root: classes.inputRoot } }} InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }} type="password"
                            onChange={e => setPassword(e.target.value)}
                            autoComplete="new-password"
                            value={password}
                            label="رمزعبور" />
                    </Grid>
                    <Grid item style={{ width: "100%", marginBottom: 15 }}>
                        <TextField id="repeatedPassword"
                            style={{ width: "100%" }}
                            variant="filled"
                            InputProps={{ classes: { root: classes.inputRoot } }} InputLabelProps={{
                                classes: {
                                    root: classes.labelRoot,
                                    focused: classes.labelFocused
                                }
                            }} type="password"
                            onChange={e => setRePassword(e.target.value)}
                            autoComplete="new-password"
                            value={rePassword} label="تکرار رمزعبور " />
                    </Grid>
                    <Grid item style={{ width: "100%", marginBottom: 15 }}>
                        <ButtonBase onClick={signup} className={classes.sendActivation}>ارسال کد فعال سازی</ButtonBase>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default Signup;
