import React, { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
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

const Third = ({ setHour }) => {
    const classes = useStyles();
    const [active, setActive] = useState('list');
    useEffect(() => {
        setHour(active)
    }, [active, setHour])
    return (
        <Box className={classes.root}>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 8) ? classes.buttonActive : classes.button}
                onClick={() => setActive(8)}>
                8:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 9) ? classes.buttonActive : classes.button} onClick={() => setActive(9)}>
                9:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 10) ? classes.buttonActive : classes.button} onClick={() => setActive(10)}>
                10:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 11) ? classes.buttonActive : classes.button} onClick={() => setActive(11)}>
                11:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 12) ? classes.buttonActive : classes.button} onClick={() => setActive(12)}>
                12:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 13) ? classes.buttonActive : classes.button} onClick={() => setActive(13)}>
                13:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 14) ? classes.buttonActive : classes.button} onClick={() => setActive(14)}>
                14:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 15) ? classes.buttonActive : classes.button} onClick={() => setActive(15)}>
                15:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 16) ? classes.buttonActive : classes.button} onClick={() => setActive(16)}>
                16:00
            </ButtonBase>
            <ButtonBase
                style={{ fontSize: FontSize(1) }}
                className={(active === 17) ? classes.buttonActive : classes.button} onClick={() => setActive(17)}>
                17:00
            </ButtonBase>
        </Box >
    );
}

export default Third
