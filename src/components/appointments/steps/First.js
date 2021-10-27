import React, { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import persianDate from 'persian-date';
import FontSize from '../../FontSize';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 300,
        margin: "0 auto",
    },
    button: {
        height: 57,
        margin: "5px auto",
        backgroundColor: "#c4dffaad",
        fontSize: ".9em",
        borderRadius: 10,
        width: 289,
    },
    buttonActive: {
        height: 57,
        margin: 5,
        backgroundColor: "#08afe4",
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
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
                style={{ fontSize: FontSize(1) }}
                onClick={() => setActive(0)}>
                {array[0]}
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 1) ? classes.buttonActive : classes.button} onClick={() => setActive(1)}>
                {array[1]}
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 2) ? classes.buttonActive : classes.button} onClick={() => setActive(2)}>
                {array[2]}
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 3) ? classes.buttonActive : classes.button} onClick={() => setActive(3)}>
                {array[3]}
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 4) ? classes.buttonActive : classes.button} onClick={() => setActive(4)}>
                {array[4]}
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 5) ? classes.buttonActive : classes.button} onClick={() => setActive(5)}>
                {array[5]}
            </ButtonBase>
        </Box >
    );
}

export default First
