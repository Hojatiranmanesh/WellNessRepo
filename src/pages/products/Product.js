import React from 'react';
import Header from '../../components/Header';
import { Box, Typography, Divider, ButtonBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    header: {
        height: 200,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
    },
    body: {
        display: "flex",
        flexDirection: "column",
        maxWidth: 600,
        margin: "0 auto",
        width: "95vw"
    },
    row: {
        display: "flex",
        justifyContent: "space-between",
        margin:5
    },
    productFeature: {
        color: "#50659c",
        fontWeight: "Bold"
    },
    productKey: {
        color: "#7887a2",
    },
    productValue: {
        color: "#7887a2",
        fontWeight: "Bold"
    },
    price: {
        fontSize: "1.2em",
        color: "#50659c",
        fontWeight: "Bold",
        textShadow: "1px 2px 3px #00000066",
    },
    purchaseButton:{
        fontSize:"1.04em",
        padding:"7px 13px",
        backgroundColor:"#4bea6c",
        color:"#50659c",
        borderRadius:10,
        fontWeight: "Bold",
    },
});

const Product = () => {
    const classes = useStyle();
    return (
        <>
            <Header />
            <Box className={classes.header}>
                <Typography style={{textDecoration:"underline",marginBottom:5}} variant="h4">دمنوش سلامت رازیانه</Typography>
                <Typography style={{color:"#4bea6c"}} variant="body1">گارانتی اصالت و سلامت فیزیکی کالا</Typography>
            </Box>
            <Box className={classes.body}>
                <Box className={classes.row}>
                    <Typography className={classes.productFeature} type="body1">ویژگی های محصول</Typography>
                </Box>
                <Box className={classes.row}>
                    <Typography className={classes.productKey} type="body1">وزن</Typography>
                    <Typography className={classes.productValue} type="body1">250 گرم</Typography>
                </Box>
                <Box className={classes.row}>
                    <Typography className={classes.productKey} type="body1">محفظه نگهدارنده</Typography>
                    <Typography className={classes.productValue} type="body1">جعبه پلاستیکی</Typography>
                </Box>
                <Box className={classes.row}>
                    <Typography className={classes.productKey} type="body1">عصاره</Typography>
                    <Typography className={classes.productValue} type="body1">جوانه گندم</Typography>
                </Box>
                <Box className={classes.row}>
                    <Typography className={classes.productKey} type="body1">مناسب برای </Typography>
                    <Typography className={classes.productValue} type="body1">دفع سموم</Typography>
                </Box>
                <Divider variant="middle" />
                <Box className={classes.row}>
                    <Typography className={classes.price} type="body1">258,000 تومان</Typography>
                    <ButtonBase className={classes.purchaseButton}>ثبت سفارش</ButtonBase>
                </Box>
            </Box>
        </>
    )
};

export default Product;