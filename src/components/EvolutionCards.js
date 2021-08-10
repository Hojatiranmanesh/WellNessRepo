import React from 'react';
import { makeStyles } from '@material-ui/core';
import breath from '../assets/images/breathing.jpg';
import relax from '../assets/images/nature.jpg';
import Link from 'react-router-dom/Link';
import { ButtonBase } from '@material-ui/core'

const useStyles = makeStyles({
    root: {
        maxWidth: 800,
        display: "flex",
        margin: "0 auto",
        padding: 20,
        flexWrap: "wrap",
        justifyContent: "center"
    },
    breath: {
        background: `url(${breath}) `,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        maxWidth: "90vh",
        width: 350,
        height: 100,
        borderRadius: 20,
        color: "#fff",
        overflow: "hidden",
        margin: 10,
    },
    overlay: {
        zIndex: 1,
        width: "100%",
        height: "100%",
        backgroundColor: "#00000057",
        textAlign: 'right',
        paddingTop:35,
        paddingRight:10
    },
    relax: {
        background: `url(${relax}) `,
        backgroundPosition: "center center",
        backgroundSize: "cover",
        maxWidth: "90vh",
        width: 350,
        height: 100,
        borderRadius: 20,
        color: "#fff",
        overflow: "hidden",
        margin: 10
    },
});

const EvolutionCards = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ButtonBase component={Link} to="/evolution/breathing" className={classes.breath}>
                <div className={classes.overlay}>
                    <p style={{ fontWeight: "bold" }}>تنفس</p>
                    <p>به شما کمک می‌کند تا آرام شوید</p>
                </div>
            </ButtonBase>
            <ButtonBase component={Link} to="/evolution/relaxation" className={classes.relax}>
                <div className={classes.overlay}>
                    <p style={{ fontWeight: "bold" }}>صدای طبیعت</p>
                    <p>ریلکس، خوابیدن و مدیتیت</p>
                </div>
            </ButtonBase>
        </div>
    )
}

export default EvolutionCards
