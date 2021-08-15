import React, { useState, useEffect } from 'react';
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

const Third = ({setHour}) => {
    const classes = useStyles();
    const [active, setActive] = useState('list');
    useEffect(() => {
        setHour(active)
    }, [active, setHour])
    return (
        <Box className={classes.root}>
            <ButtonBase
                className={(active === 8) ? classes.buttonActive : classes.button}
                onClick={() => setActive(8)}>
                8:00
            </ButtonBase>
            <ButtonBase

                className={(active === 9) ? classes.buttonActive : classes.button} onClick={() => setActive(9)}>
                9:00
            </ButtonBase>
            <ButtonBase
                className={(active === 10) ? classes.buttonActive : classes.button} onClick={() => setActive(10)}>
                10:00
            </ButtonBase>
            <ButtonBase
                className={(active === 11) ? classes.buttonActive : classes.button} onClick={() => setActive(11)}>
                11:00
            </ButtonBase>
            <ButtonBase
                className={(active === 12) ? classes.buttonActive : classes.button} onClick={() => setActive(12)}>
                12:00
            </ButtonBase>
            <ButtonBase
                className={(active === 13) ? classes.buttonActive : classes.button} onClick={() => setActive(13)}>
                13:00
            </ButtonBase>
            <ButtonBase
                className={(active === 14) ? classes.buttonActive : classes.button} onClick={() => setActive(14)}>
                14:00
            </ButtonBase>
            <ButtonBase
                className={(active === 15) ? classes.buttonActive : classes.button} onClick={() => setActive(15)}>
                15:00
            </ButtonBase>
            <ButtonBase
                className={(active === 16) ? classes.buttonActive : classes.button} onClick={() => setActive(16)}>
                16:00
            </ButtonBase>
            <ButtonBase
                className={(active === 17) ? classes.buttonActive : classes.button} onClick={() => setActive(17)}>
                17:00
            </ButtonBase>
        </Box >
    );
}

export default Third
