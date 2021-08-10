import React from 'react';
import Header from '../../components/Header';
import Dimensions from '../../components/Dimensions';
import { Box, Tabs, Tab } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    main: {
        display: "flex",
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop:20,
    },
    topBox:{
        height: 160,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor:"#d7e4f4"
    },
    tabRoot: {
        color: "#08afe4",
        fontWeight: "Bold",
        fontSize:'1.1em',
        borderBottom:"5px solid"
    }
});

const QuizzesDims = () => {
    const classes = useStyles();
    return (
        <>
            <Box className={classes.topBox}>
                <Header />
                <Tabs centered value="value" aria-label="simple tabs example">
                    <Tab classes={{ root: classes.tabRoot }} label="ارزیابی‌ها" />
                </Tabs>
            </Box>
            <Box  className={classes.main} >
                <Dimensions />
            </Box>

        </>
    )
}

export default QuizzesDims;