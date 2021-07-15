import React from 'react';
import {Box, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    root:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        textAlign:"center",
        margin:40,
    }
})

const PurchasesTab = () =>{
    const classes  = useStyle();
    return(
        <Box className={classes.root}>
            <Typography variant="body1">محصولی برای نمایش موجود نیست</Typography>
        </Box>
    )
}

export default PurchasesTab;