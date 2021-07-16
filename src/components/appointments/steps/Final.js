import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField } from '@material-ui/core';
import persianDate from 'persian-date';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        width: 400,
        maxWidth: "90vw",
        textAlign: "center"
    },
    info: {
        backgroundColor: "#cbd7e2",
        margin: 5,
        height: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        color: "#2f4167",
        fontWeight: "Bold",
        fontSize: ".9em"
    },
    desc: {
        width: "100%",
        marginTop: 10
    },
    label: {
        fontWeight: "bold",
        fontSize: "1.1em",
        color: "#2f4167",
        textShadow: " 0px 2px 3px #262d4e75",
        textAlign: "initial"
    },
    input: {
        width: "100%"
    }
})

const Final = ({setDesc, day, duration, hour}) => {
    const classes = useStyles()
    const [state, setState] = useState()
    useEffect(() => {
        setDesc(state)

    }, [state, setDesc])
    let date = new Date();
    date.setDate(date.getDate()+day);
    const persian_date = new persianDate(date).toLocale('fa').format('dd MMMM');
    return (
        <Box className={classes.root}>
            <Box className={classes.info}>ارزیابی و ارتقاء تخصصی (حضوری)</Box>
            <Box className={classes.info}>تاریخ {persian_date}</Box>
            <Box className={classes.info}>مشاوره {duration*60} دقیقه‌ای</Box>
            <Box className={classes.info}>{hour}:00</Box>
            <Box className={classes.desc}>
                <p className={classes.label}>توضیحات</p>
                <TextField className={classes.input} value={state} onChange={(e)=> setState(e.target.value)}
                    multiline id="standard-basic" label="توضیحات خود را وارد نمایید" />
            </Box>
        </Box>
    )
}

export default Final
