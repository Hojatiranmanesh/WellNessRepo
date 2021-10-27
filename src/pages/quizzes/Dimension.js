import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Box, Divider, Tabs, Tab } from '@material-ui/core';
import Quizzes from '../../components/Quizzes';
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { showNav } from '../../actions';
import FontSize from "../../components/FontSize";
import QuizEval from '../../components/QuizEval';

const useStyle = makeStyles({
    wiw: {
        textAlign: 'center',
        direction: "rtl",
        color: "#64c6f5",
        paddingTop: 30,

    },
    readMore: {
        textAlign: 'center',
        direction: "rtl",
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        marginBottom: 30,
    },

    tabRoot: {
        color: "#08afe4",
        fontWeight: "Bold",
        fontSize: FontSize(1.1),
    },
});

const Dimension = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const classes = useStyle();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showNav())
    }, [])
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <>
            <Box>
                <Box style={{ backgroundColor: "#c4dffaad", height: 130, paddingTop: 30 }}>
                    <Header component="link" to="/quizzes" />
                    <h2 className={classes.wiw}>ولنس چیست؟</h2>
                    <p className={classes.readMore}>بیشتر بخوانید</p>
                </Box>
                <Tabs  style={{ backgroundColor: "#c4dffaad", color: "#7887a2" }} TabIndicatorProps={{
                    style: {
                        backgroundColor: "#08afe4"
                    }
                }} centered value={selectedTab} onChange={handleChange}>
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="ارزیابی‌ها" />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="تحلیل ارزیابی‌های پیشین" />
                </Tabs>
                {selectedTab === 0 && <Quizzes />}
                {selectedTab === 1 && <QuizEval />}
            </Box>
        </>
    )

}

export default Dimension;