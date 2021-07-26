import React, { useState } from 'react';
import Header from '../../components/Header';
import { Box, Tabs, Tab, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import IRLIndex from '../../components/appointments/IRLIndex';
import OnlineIndex from '../../components/appointments/OnlineIndex';


const useStyle = makeStyles({
    topWrapper: {
        height: 200
    },
    assitance: {
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100%",
        backgroundColor: "#dce5ef"
    },
    assistanceHeader: {
        color: "#08afe4",
    },
    requestAssistance: {
        textDecoration: "underline",
    },
    tabRoot: {
        fontSize: "1.1em"
    },
});

const Appointments = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const classes = useStyle();
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue);

    }
    return (
        <>
            <Box>
                <Header />
                <Box className={classes.topWrapper}>
                    <Box className={classes.assitance}>
                        <h1 className={classes.assistanceHeader}>دریافت مشاوره</h1>
                        {/* <p className={classes.requestAssistance}>خرید اشتراک طلایی برای مشاوره آنلاین</p> */}
                    </Box>
                </Box>
                <Divider variant="middle" />
                <Tabs TabIndicatorProps={{
                    style: {
                        backgroundColor: "#08afe4",
                        color: "#08afe4"
                    }
                }} centered value={selectedTab} onChange={handleChange}>
                    <Tab classes={{ root: classes.tabRoot, }}
                        // style={{ color: (selectedTab === 0) ? "#08afe4" : "#02d4166" }}
                        label="مشاوره حضوری" />
                    <Tab classes={{ root: classes.tabRoot }}
                        // style={{ color: (selectedTab === 1) ? "#08afe4" : "#02d4166" }}
                        label="مشاوره آنلاین" />
                </Tabs>
                {selectedTab === 0 && <IRLIndex />}
                {selectedTab === 1 && <OnlineIndex />}
            </Box>
        </>
    )
}

export default Appointments;