import React, { useState } from 'react';
import { Grid, Typography, TextField, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import {Redirect} from 'react-router-dom';

const useStyles = makeStyles({
    header: { height: 300, maxHeight: "40vh", background: "#d7e5f2", padding: 40 },
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
    sendActivation: {
        width: "100%",
        color: "#fff",
        marginTop: 15,
        background: "linear-gradient(0deg, rgba(85,145,120,1) 0%, rgba(100,160,134,1) 100%)",
        fontSize: "1.5em",
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

    const classes = useStyles();
    const signup = () => {
        if(password === rePassword){
            axios.post('http://api.hamyarwellness.com/api/v1/users/signup', { phone: phone, password: password, })
            .then(res => {
                localStorage.setItem('userid', res.data.user._id);
                setSignedUp(true)
            })
            .catch(err=>{
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
            <Grid item container justify="center" alignContent="flex-start" className={classes.header}>
                <Typography className={classes.headerTitle} variant={'h4'}>عضویت در پنل کاربری </Typography>
            </Grid>
            <Grid item container className={classes.body} justify="center">
                <form>
                    <Grid item style={{ width: "100%", marginBottom: 15 }} >
                        <TextField id="phone" InputProps={{ classes: { root: classes.inputRoot } }}
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
                        <TextField id="password" InputProps={{ classes: { root: classes.inputRoot } }} InputLabelProps={{
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
                        <TextField id="repeatedPassword" InputProps={{ classes: { root: classes.inputRoot } }} InputLabelProps={{
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
