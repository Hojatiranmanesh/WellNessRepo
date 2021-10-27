import React, { useEffect, useState } from 'react';
import { Box, Divider } from '@material-ui/core';
import Header from '../../components/Header';
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios';
import { useLocation, Link } from "react-router-dom";

const useStyle = makeStyles({
    listContainer: {
        display: "flex",
        padding: "80px 30px",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },
    itemContainer: {
        display: "flex",
        flexDirection: "column",
        width: 310,
        backgroundColor: "#c4dffaad",
        borderRadius: 15,
        color: "#696969",
        textDecoration: "none",
        marginBottom: 25,
    },
    productImage: {
        height: 150,
        objectFit: "cover",
        width: "100%",
        objectPosition: "center",
        borderRadius: "15px 15px 0 0 ",
        opacity: .8,
    },
    productInfo: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginLeft: 10,
        "& p": {
            margin: 10
        }
    },
    headerContainer: {
        backgroundColor: "#d4ebff",
        height: "74px",
        position: "fixed",
        width: "100%"
    }
});

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const ProductList = () => {
    let query = useQuery();
    const classes = useStyle();
    const token = `bearer ${localStorage.getItem('jwt')}`
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let params = "";
        if (query.get("category")) {
            params = "category=" + query.get("category")
        } else if (query.get("isFeatured")) {
            params = "isFeatured=true"
        }
        axios.get(`https://api.hamyarwellness.com/api/v1/products/search?${params}`,
            { headers: { 'Authorization': token } })
            .then(res => {
                console.log(res.data.data)
                setProducts(res.data.data)
            })
    }, [])
    return (
        <Box>
            <Box className={classes.headerContainer}>
                <Header component="link" to="/products" />
            </Box>
            <Box className={classes.listContainer}>
                {products.map((item, index, array) => (
                    <Box className={classes.itemContainer} component={Link} to={`/products/product?pid=${item._id}`}>
                        <img className={classes.productImage} src={"https://api.hamyarwellness.com/" + item.image} alt="" />
                        <Box className={classes.productInfo}>
                            <p style={{ fontWeight: "bold", fontSize: "1.3em" }}>{item.name}</p>
                            <p style={{ paddingLeft: 10 }}>مشاهده</p>
                        </Box>
                    </Box>

                ))}

            </Box>
        </Box >
    )
}

export default ProductList
