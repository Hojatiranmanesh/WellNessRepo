import React, { useState } from 'react';
import Header from '../../components/Header';
import { Box, Divider, Tabs, Tab } from '@material-ui/core';
import Quizzes from '../../components/Quizzes';
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles({
    wiw: {
        textAlign: 'center',
        direction: "rtl",
        color:"#64c6f5",
        paddingTop:30,

    },
    readMore: {
        textAlign: 'center',
        direction: "rtl",
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
        marginBottom:30,
    },

    tabRoot: {
        color: "#08afe4",
        fontWeight: "Bold",
        fontSize: '1.1em',
    },
});

const Dimension = () => {
    const [selectedTab, setSelectedTab] = useState(0);
    const classes = useStyle();
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <>
            <Box>
                <Header />
                <h2 className={classes.wiw}>ولنس چیست؟</h2>
                <p className={classes.readMore}>بیشتر بخوانید</p>
                <Divider variant="middle" />
                <Tabs TabIndicatorProps={{
                    style: {
                        backgroundColor: "#08afe4"
                    }
                }} centered value={selectedTab} onChange={handleChange}>
                    <Tab classes={{ root: classes.tabRoot }} label="ارزیابی‌ها" />
                </Tabs>
                {selectedTab === 0 &&  <Quizzes /> }
            </Box>
        </>
    )

}

export default Dimension;