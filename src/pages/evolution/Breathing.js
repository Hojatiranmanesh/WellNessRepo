import React, { useState, useEffect } from 'react';
import Circle from '../../assets/images/breathCircle.png';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Divider, ButtonBase } from '@material-ui/core';
import NatureBG from '../../assets/images/natureBG.jpg'
import Header from '../../components/Header';

const useStyles = makeStyles({
    root: {
        position: "fixed",
        left: 0,
        right: 0,
        zIndex: 0,
        marginLeft: 20,
        marginRight: 20,
        minHeight: "100vh",
        "&::before": {
            position: "fixed",
            left: 0,
            right: 0,
            zIndex: -1,
            display: "block",
            "-webkit-filter": "blur(5px)",
            "-moz-filter": "blur(5px)",
            "-o-filter": "blur(5px)",
            "-ms-filter": "blur(5px)",
            filter: "blur(5px)",
            backgroundImage: `url(${NatureBG})`,
            content: '""',
            background: "#00000061",
            height: "100%",
            width: "100%"
        }
    },
    activeState: {
        position: "absolute",
        fontSize: "2em",
        fontWeight: "Bold",
        color: "#9fb7e5",
        top: 170,
        right: "48%",
        textShadow: "3px 4px 4px #000000ad"
    },
    container: {
        height: "100%",
        width: "100%",
    },
    "@keyframes spin": {
        "from": { transform: "rotate(0deg)" },
        "to": { transform: "rotate(360deg)" }
    },
    rotator: {
        width: "fit-content",
        animation: "spin 3000ms infinite cubic-bezier(0.32, 0.3, 1, 1)",
        margin: "0 auto",
    },
    options: {
        display: "flex",
        justifyContent: "center"
    },
    optionButtons: {
        margin: 10,
        padding: 10,
        backgroundColor: "#1f0f0f7a",
        width: 70,
        height: 57,
        color: "#fff",
        textAlign: "center",
        borderRadius: 10
    },
    option: {
        display: "flex",
        justifyContent: "space-around",
        fontWeight: "bold",
        fontSize: "1.2em",
        color: "#9cb7e2",

    },
    number: {
    },
    inred: {
        fontSize: "1.2em"
    },
});

const Breathing = () => {
    const classes = useStyles();
    const [activeState, setActiveState] = useState('دم');
    const [inhale, setInhale] = useState(2);
    const [exhale, setExhale] = useState(2);
    const [pause, setPause] = useState(2);
    useEffect(() => {
        if (activeState === 'دم') {
            const timeoutID = window.setTimeout(() => {
                setActiveState('بازدم')
            }, inhale * 1000);

            return () => window.clearTimeout(timeoutID);
        }
        if (activeState === 'بازدم') {
            const timeoutID = window.setTimeout(() => {
                setActiveState('مکث')
            }, exhale * 1000);

            return () => window.clearTimeout(timeoutID);
        }
        if (activeState === 'مکث') {
            const timeoutID = window.setTimeout(() => {
                setActiveState('دم')
            }, pause * 1000);

            return () => window.clearTimeout(timeoutID);
        }
    });
    return (
        <Box className={classes.root}>
            <Header component="link" to="/evolution"  />
            <Box className={classes.container}>
                <p className={classes.activeState}>{activeState}</p>
                <div className={classes.rotator} style={{}}>
                    <img src={Circle} alt="breath" />
                </div>
                <Divider variant="middle" />
                <Box className={classes.options}>
                    <Box className={classes.optionButtons}>
                        دم
                        <Box className={classes.option}>
                            <ButtonBase onClick={() => setInhale(inhale + 1)} className={classes.inred}>+</ButtonBase>
                            <span className={classes.number}>{inhale}</span>
                            <ButtonBase onClick={() => setInhale((inhale) => (Math.max(inhale - 1, 1)))} className={classes.inred}>-</ButtonBase>
                        </Box>
                    </Box>
                    <Box className={classes.optionButtons}>
                        بازدم
                        <Box className={classes.option}>
                            <ButtonBase onClick={() => setExhale(exhale + 1)} className={classes.inred}>+</ButtonBase>
                            <span className={classes.number}>{exhale}</span>
                            <ButtonBase onClick={() => setExhale((exhale) => (Math.max(exhale - 1, 1)))} className={classes.inred}>-</ButtonBase>
                        </Box>
                    </Box>
                    <Box className={classes.optionButtons}>
                        مکث
                        <Box className={classes.option}>
                            <ButtonBase onClick={() => setPause(pause + 1)} className={classes.inred}>+</ButtonBase>
                            <span className={classes.number}>{pause}</span>
                            <ButtonBase onClick={() => setPause((pause) => (Math.max(pause - 1, 1)))} className={classes.inred}>-</ButtonBase>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Breathing;
