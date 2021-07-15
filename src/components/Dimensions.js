import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDimension } from '../actions';
import dim1 from '../assets/images/dims/dim1.png';

const useStyles = makeStyles({
    circle: {
        borderRadius: "50%",
        width: 406,
        maxWidth: "100%",
        backgroundColor: "tramsparent",
        height: 399,
        position: "relative",

    },
    classDim1: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        width: 150,
        "&:hover": {
            transform: "scale(1.2, 1.2)"
        },
        height: 140, position: "absolute", left: 127, top: 7, "& img": { height: 140 },
    },
    classDim2: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        height: 140,
        width: 150, position: "absolute", left: 40, top: 45, transform: "rotate(-45deg)", "& img": { height: 140 },
    },
    classDim3: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        width: 150,
        height: 140, position: "absolute", left: 4, top: 133, transform: "rotate(-90deg)", "& img": { height: 140 },
    },
    classDim4: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        width: 150,
        height: 140, position: "absolute", left: 43, top: 218, transform: "rotate(-135deg)", "& img": { height: 140 },
    },
    classDim5: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        width: 150,
        height: 140, position: "absolute", left: 131, top: 253, transform: "rotate(-180deg)", "& img": { height: 140 },
    },
    classDim6: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        width: 150,
        height: 140, position: "absolute", left: 218, top: 217, transform: "rotate(-225deg)", "& img": { height: 140 },
    },
    classDim7: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        width: 150,
        height: 140, position: "absolute", left: 255, top: 130, transform: "rotate(-270deg)", "& img": { height: 140 },
    },
    classDim8: {
        background: `url(${dim1}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        width: 150,
        height: 140, position: "absolute", left: 217, top: 42, transform: "rotate(-315deg)", "& img": { height: 140 },
    },
});

const Dimensions = () => {
    const dispatch = useDispatch()
    const classes = useStyles();
    return (
        <Box className={classes.circle} >
            <Link
                onClick={() => dispatch(setDimension("physical"))}
                to={"/quizzes/dimension"}><div className={classes.classDim1}> </div>
            </Link>
            <div className={classes.classDim2}> </div>
            <div className={classes.classDim3}> </div>
            <div className={classes.classDim4}> </div>
            <div className={classes.classDim5}> </div>
            <div className={classes.classDim6}> </div>
            <div className={classes.classDim7}> </div>
            <div className={classes.classDim8}> </div>
        </Box>
    )
}

export default Dimensions;
