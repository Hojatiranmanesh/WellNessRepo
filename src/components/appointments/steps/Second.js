import React, { useState,useEffect } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        margin: "0 auto",
    },
    button: {
        height: 40,
        margin: 5,
        backgroundColor: "#cbd7e2",
        fontSize: ".9em",
        borderRadius: 10,
    },
    buttonActive: {
        height: 40,
        margin: 5,
        backgroundColor: "#08afe4",
        color: "#fff",
        fontSize: ".9em",
        borderRadius: 10,
    }
});

const Second = ({setDuration}) => {
    const classes = useStyles();
    const [active, setActive] = useState('list');
    useEffect(() => {
        setDuration(active)

    }, [active, setDuration])
    return (
        <Box className={classes.root}>
            <ButtonBase
                className={(active === 0.5) ? classes.buttonActive : classes.button}
                onClick={() => setActive(0.5)}>
                مشاوره 30 دقیقه‌ای
            </ButtonBase>
            <ButtonBase

                className={(active === 1) ? classes.buttonActive : classes.button} onClick={() => setActive(1)}>
                مشاوره 60 دقیقه‌ای
            </ButtonBase>
            <ButtonBase
                className={(active === 1.5) ? classes.buttonActive : classes.button} onClick={() => setActive(1.5)}>
                مشاوره 90 دقیقه‌ای
            </ButtonBase>
            <ButtonBase
                className={(active === 2) ? classes.buttonActive : classes.button} onClick={() => setActive(2)}>
                مشاوره 120 دقیقه‌ای
            </ButtonBase>
        </Box >
    );
}

export default Second
