import React, { useState } from 'react';
import { Tabs, Tab, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import Header from '../../components/Header';
import EvolutionCards from '../../components/EvolutionCards';

const useStyles = makeStyles({
    headWrapper: {
        height:"25vh",
        display:"flex",
        flexDirection:"column",
        textAlign:"center",
        justifyContent:"center"
    },
    headTitle:{
        color:"#0aade4",
        fontWeight:"Bold",
        fontSize:"1.2em"
    },
    headDesc:{
        fontSize:"1em",
        textDecoration:"underline",
        textDecorationStyle: "dotted",
    },
});

const Evolution = () => {
    const classes = useStyles();
    const [selectedTab, setSelectedTab] = useState(0);
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    return (
        <div>
            <Header />
            <Box className={classes.headWrapper}>
                <p className={classes.headTitle}>به سلامت و روح خود اهمیت دهید</p>
                <p className={classes.headDesc}>مجموعه اقدامات برای رشد و ارتقاء خود</p>
            </Box>
            <Tabs TabIndicatorProps={{
                style: {
                    backgroundColor: "#08afe4"
                }
            }} centered value={selectedTab} onChange={handleChange}>
                <Tab label="ارتقاء فردی" />
                <Tab label="چالش ها" />
            </Tabs>
            {selectedTab === 0 && <EvolutionCards />}
            {selectedTab === 1 && <h1> </h1>}
        </div>
    )
}

export default Evolution
