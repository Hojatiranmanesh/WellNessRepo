import { Box } from '@material-ui/core';
import react from 'react';
import banner from '../assets/images/banner.png';

import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    categories: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: 40,
        flexWrap: "wrap"
    },
    category: {
        width: 130,
        height: 50,
        display: "flex",
        borderRadius: 10,
        paddingBottom: 8,
        backgroundColor: "#c8d1da",
        justifyContent: "center",
        alignItems: "center",
        margin: 10
    },
    bannerWrapper:{
        display:"flex",
        justifyContent:"center",
    },
    banner: {
        width: 500,
        maxWidth:"90vw",
        marginBottom:50
    }
})

const ProductsTab = () => {
    const classes = useStyle();
    return (
        <Box className={classes.root}>
            <Box className={classes.categories}>
                <Box className={classes.category}>زیبایی و سلامت</Box>
                <Box className={classes.category}>ورزش و سفر</Box>
                <Box className={classes.category}>خانه و محل کار</Box>
                <Box className={classes.category}>نوشیدنی ها ارگانیک</Box>
            </Box>
            <Box className={classes.bannerWrapper}>

                <img src={banner} className={classes.banner} alt="banner" />
            </Box>
        </Box>
    )
}

export default ProductsTab;