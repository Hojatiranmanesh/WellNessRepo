import { Box, ButtonBase } from '@material-ui/core';
import react, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png';
import FontSize from './FontSize';
import axios from 'axios';

import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    categories: {
        display: "flex",
        justifyContent: "center",
        textAlign: "center",
        margin: "40px 10px",
        flexWrap: "wrap"
    },
    category: {
        width: 156,
        height: 50,
        display: "flex",
        borderRadius: 10,
        paddingBottom: 8,
        backgroundColor: "#c4dffaad",
        justifyContent: "center",
        alignItems: "center",
        margin: 8,
        color: "#2f4167",
        fontSize: FontSize(1),
    },
    bannerWrapper: {
        display: "flex",
        justifyContent: "center",
    },
    banner: {
        width: 500,
        maxWidth: "90vw",
        marginBottom: 50
    }
})

const ProductsTab = () => {
    const classes = useStyle();
    const token = `bearer ${localStorage.getItem('jwt')}`
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        axios.get(`https://api.hamyarwellness.com/api/v1/categories`,
            { headers: { 'Authorization': token } },
        )
            .then(res => {
                setCategories(res.data.data)
            })
    }, [])
    return (
        <Box className={classes.root}>
            <Box className={classes.categories}>
                {categories.map(item => (
                    <ButtonBase
                        component={Link}
                        to={`/products/product-list?category=${item._id}`}
                        style={{ fontSize: FontSize(1) }}
                        className={classes.category}>
                        {item.name}
                    </ButtonBase>
                ))}
            </Box>
            <Box className={classes.bannerWrapper}>
                <Link to={"/products/product-list?isFeatured=true"}>
                    <img src={banner} className={classes.banner} alt="banner" />
                </Link>
            </Box>
        </Box>
    )
}

export default ProductsTab;