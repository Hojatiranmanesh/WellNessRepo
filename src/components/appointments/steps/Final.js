import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box, TextField } from '@material-ui/core';
import persianDate from 'persian-date';
import { useSelector } from 'react-redux';
import FontSize from '../../FontSize';

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
        backgroundColor: "#c4dffaad",
        margin: "5px auto",
        height: 57,
        width: 289,
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
        marginTop: 30
    },
    label: {
        fontWeight: "bold",
        fontSize: "1.2em",
        color: "#475d97",
        textShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px  #ffffffd1",
        textAlign: "initial"
    },
    input: {
        width: "100%"
    }
})

const Final = ({ setDesc, day, duration, hour }) => {
    const classes = useStyles()
    const [state, setState] = useState()
    const resType = useSelector(state => {
        return state.resType;
    });
    useEffect(() => {
        setDesc(state)

    }, [state, setDesc])
    let date = new Date();
    date.setDate(date.getDate() + day);
    const persian_date = new persianDate(date).toLocale('fa').format('dd MMMM');
    return (
        <Box className={classes.root}>
            <Box className={classes.info} style={{ fontSize: FontSize(1) }}>
                ارزیابی و ارتقاء
                {(resType === "general" ? " عمومی" : " تخصصی")}
            </Box>
            <Box style={{ fontSize: FontSize(1) }} className={classes.info}>تاریخ {persian_date}</Box>
            <Box style={{ fontSize: FontSize(1) }} className={classes.info}>مشاوره {duration * 60} دقیقه‌ای</Box>
            <Box style={{ fontSize: FontSize(1) }} className={classes.info}>{hour}:00</Box>
            <Box style={{ fontSize: FontSize(1) }} className={classes.desc}>
                <p style={{ fontSize: FontSize(1) }} className={classes.label}>توضیحات</p>
                <TextField style={{ fontSize: FontSize(1) }} className={classes.input} value={state} onChange={(e) => setState(e.target.value)}
                    InputLabelProps={{ shrink: false }}
                    multiline id="standard-basic" placeholder="توضیحات خود را وارد نمایید" />
            </Box>
        </Box>
    )
}

export default Final
