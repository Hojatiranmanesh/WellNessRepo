import React, { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import persianDate from 'persian-date';

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
        boxShadow:"0 0 7px 3px #cbd7e24b",
        fontSize: ".9em",
        borderRadius: 10,
    },
    buttonActive: {
        height: 40,
        margin: 5,
        backgroundColor: "#08afe4",
        boxShadow:"0 0 7px 3px #08afe44b",
        color: "#fff",
        fontSize: ".9em",
        borderRadius: 10,
    }
});

const First = ({ setDay }) => {
    const classes = useStyles();
    const [active, setActive] = useState('list');
    const array = [];
    for (let i = 1; i <= 6; i++) {
        let newDate = new Date();
        const date = new persianDate(newDate.setDate(newDate.getDate() + i)).toLocale('fa').format('dddd / DD MMMM');
        array.push(date)
    }
    useEffect(() => {
        setDay(active)

    }, [active, setDay])
    return (
        <Box className={classes.root}>
            <ButtonBase
                className={(active === 0) ? classes.buttonActive : classes.button}
                onClick={() => setActive(0)}>
                {array[0]}
            </ButtonBase>
            <ButtonBase
                className={(active === 1) ? classes.buttonActive : classes.button} onClick={() => setActive(1)}>
                {array[1]}
            </ButtonBase>
            <ButtonBase
                className={(active === 2) ? classes.buttonActive : classes.button} onClick={() => setActive(2)}>
                {array[2]}
            </ButtonBase>
            <ButtonBase
                className={(active === 3) ? classes.buttonActive : classes.button} onClick={() => setActive(3)}>
                {array[3]}
            </ButtonBase>
            <ButtonBase
                className={(active === 4) ? classes.buttonActive : classes.button} onClick={() => setActive(4)}>
                {array[4]}
            </ButtonBase>
            <ButtonBase
                className={(active === 5) ? classes.buttonActive : classes.button} onClick={() => setActive(5)}>
                {array[5]}
            </ButtonBase>
        </Box >
    );
}

export default First
