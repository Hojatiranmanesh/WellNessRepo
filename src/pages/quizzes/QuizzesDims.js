import React, { useState, } from 'react';
import Header from '../../components/Header';
import Dimensions from '../../components/Dimensions';
import { Box, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FontSize from "../../components/FontSize";
import QuizEval from '../../components/QuizEval';
import { useLocation } from "react-router-dom";


const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 20,
    },
    topBox: {
        height: 160,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#c4dffaad"
    },
    tabRoot: {
        color: "#08afe4",
        fontWeight: "Bold",
        fontSize: FontSize(1.1),
    },
});

function useQuery() {
    return new URLSearchParams(useLocation().search);
}
const QuizzesDims = () => {
    const classes = useStyles();
    let query = useQuery();
    const [selectedTab, setSelectedTab] = useState(query.get("tab") ? 1 : 0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <>
            <Box className={classes.topBox}>
                <Header />
                <Tabs centered value={selectedTab} onChange={handleChange} TabIndicatorProps={{
                    style: {
                        backgroundColor: "#08afe4"
                    }
                }}>
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="ارزیابی‌ها" />
                    <Tab classes={{ root: classes.tabRoot, selected: classes.selectedTab }} label="تحلیل ارزیابی‌های پیشین" />
                </Tabs>
            </Box>
            {selectedTab === 0 && <Box className={classes.main} >
                <Dimensions />
            </Box>}
            {selectedTab === 1 && <QuizEval />}
        </>
    )
}

export default QuizzesDims;