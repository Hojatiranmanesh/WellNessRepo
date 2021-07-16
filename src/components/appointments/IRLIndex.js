import React from 'react';
import { ButtonBase, Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Link from 'react-router-dom/Link';

const useStyle = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        width: 400,
        margin: "0 auto",
        padding: 20,
        maxWidth: "90vw",
        alignItems: "center",
    },
    button: {
        height: 40,
        backgroundColor: "#cad1db",
        borderRadius: 10,
        width: "80%",
        color: "#2f4167",
        fontSize: "0.9em",
        margin: 10
    },
    recordButton: {
        height: 40,
        backgroundColor: "#08afe4",
        borderRadius: 10,
        width: "80%",
        color: "#fff",
        fontSize: "0.9em",
        margin: 10
    }
})

const IRLIndex = () => {
    const classes = useStyle()
    return (
        <Box className={classes.root}>
            <ButtonBase component={Link} to="/appointments/reserve" className={classes.button}>ارزیابی و ارتقاء تخصصی</ButtonBase>
            <ButtonBase component={Link} to="/appointments/reserve" className={classes.button}>ارزیابی و ارتقاء عمومی</ButtonBase>
            <Divider style={{ width: "90%" }} />
            <ButtonBase className={classes.recordButton} >مشاهده فایل های مشاوره پیشین</ButtonBase>
        </Box>
    )
}

export default IRLIndex;