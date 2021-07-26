import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setDimension } from '../actions';
import dim1 from '../assets/images/dims/1.png';
import dim2 from '../assets/images/dims/2.png';
import dim3 from '../assets/images/dims/3.png';
import dim4 from '../assets/images/dims/4.png';
import dim5 from '../assets/images/dims/5.png';
import dim6 from '../assets/images/dims/6.png';
import dim7 from '../assets/images/dims/7.png';
import dim8 from '../assets/images/dims/8.png';


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
        background: `url(${dim2}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        transition: "all 0.5s",
        backgroundSize: "contain",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-45deg)",

        },
        height: 140,
        width: 150, position: "absolute", left: 40, top: 45, transform: "rotate(-45deg)", "& img": { height: 140 },
    },
    classDim3: {
        background: `url(${dim3}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-90deg)"
        },
        width: 150,
        height: 140, position: "absolute", left: 4, top: 133, transform: "rotate(-90deg)", "& img": { height: 140 },
    },
    classDim4: {
        background: `url(${dim4}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-135deg)"
        },
        width: 150,
        height: 140, position: "absolute", left: 43, top: 218, transform: "rotate(-135deg)", "& img": { height: 140 },
    },
    classDim5: {
        background: `url(${dim5}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-180deg)"
        },
        width: 150,
        height: 140, position: "absolute", left: 131, top: 253, transform: "rotate(-180deg)", "& img": { height: 140 },
    },
    classDim6: {
        background: `url(${dim6}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-225deg)"
        },
        width: 150,
        height: 140, position: "absolute", left: 218, top: 217, transform: "rotate(-225deg)", "& img": { height: 140 },
    },
    classDim7: {
        background: `url(${dim7}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-270deg)"
        },
        width: 150,
        height: 140, position: "absolute", left: 255, top: 130, transform: "rotate(-270deg)", "& img": { height: 140 },
    },
    classDim8: {
        background: `url(${dim8}) no-repeat center`,
        "-webkit-background-size": 'contain',
        "-moz-background-size": "contain",
        "-o-background-size": "contain",
        backgroundSize: "contain",
        transition: "all 0.5s",
        "&:hover": {
            transform: "scale(1.2, 1.2) rotate(-315deg)"
        },
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
                to={"/quizzes/dimension"}><div className={classes.classDim1}>
                    <Box style={{ margin: "48px 53px" }}>فیزیکی</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("feeling"))}
                to={"/quizzes/dimension"}><div className={classes.classDim2}>
                    <Box style={{ margin: "48px 53px" }}>احساسی</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("mindset"))}
                to={"/quizzes/dimension"}><div className={classes.classDim3}>
                    <Box style={{ margin: "48px 53px" }}>ذهنی</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("meaning"))}
                to={"/quizzes/dimension"}><div className={classes.classDim4}>
                    <Box style={{ margin: "48px 53px" }}>هویت و معنا</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("career"))}
                to={"/quizzes/dimension"}><div className={classes.classDim5}>
                    <Box style={{ margin: "48px 53px" }}>شغلی</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("economical"))}
                to={"/quizzes/dimension"}><div className={classes.classDim6}>
                    <Box style={{ margin: "48px 53px" }}>اقتصادی</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("social"))}
                to={"/quizzes/dimension"}><div className={classes.classDim7}>
                    <Box style={{ margin: "48px 53px" }}>اجتماعی</Box>
                </div>
            </Link>
            <Link
                onClick={() => dispatch(setDimension("environment"))}
                to={"/quizzes/dimension"}><div className={classes.classDim8}>
                    <Box style={{ margin: "48px 53px" }}>محیط‌ زیست</Box>
                </div>
            </Link>
        </Box>
    )
}

export default Dimensions;
