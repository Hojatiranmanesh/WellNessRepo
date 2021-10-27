import React, { useEffect, useState } from 'react';
import { Box, ButtonBase, Table, TableBody, TableCell, TableHead, TableRow, } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Search from '../../assets/images/Search.png';
import edit from '../../assets/images/Edit.png';

const useStyles = makeStyles({
    container: {
        width: 800,
        maxWidth: "100%",
        margin: "100px auto 0",
        borderRadius: 30,
        backgroundColor: "#dde7f3",
        boxShadow: "-7px 6px 13px #a6a6a6b8, -7px -8px 20px 0px #ffffffd1",
    },
    header: {
        backgroundColor: "#d3e0f1",
        boxSizing: "border-box",
        padding: "10px 30px",
        borderRadius: "30px 30px 0 0"
    },
    headerTitle: {
        color: "#08afe3"
    },
    innerContainer: {
        padding: 30,
    },
    searchInputs: {
        display: "flex",
        justifyContent: "space-between"
    },
    nameInput: {
        backgroundColor: "#d7e1ed",
        border: "1px solid #bfcbdb",
        boxSizing: "border-box",
        padding: "3px 6px",
        borderRadius: 15,
        height: 50,
        width: 210,
        textAlign: "center",
        outline: 0,
    },
    lnameInput: {
        backgroundColor: "#d7e1ed",
        border: "1px solid #bfcbdb",
        boxSizing: "border-box",
        padding: "3px 6px",
        borderRadius: 15,
        height: 50,
        width: 210,
        textAlign: "center",
        outline: 0,
    },
    phoneInput: {
        backgroundColor: "#d7e1ed",
        border: "1px solid #bfcbdb",
        boxSizing: "border-box",
        padding: "3px 6px",
        borderRadius: 15,
        height: 50,
        width: 210,
        textAlign: "center",
        outline: 0,
    },
    searchButton: {
        backgroundColor: "#495e95",
        padding: 10,
        boxSizing: "border-box",
        borderRadius: 15,
        height: 50,
        width: 50
    },
    searchIcon: {
        height: 25,
        width: 25,
        filter: "brightness(0) invert(1)"
    },
    tableWrapper: {
        maxHeight: 400,
        overflow: "auto",
        marginTop: 30
    },
    table: {
        borderRadius: 30,
        overflow: "hidden"
    },
    tableHeader: {
        backgroundColor: "#9eadca",
    },
    tableRow: {
        backgroundColor: "#d3e0f1",
        textDecoration: "none",
    },
    cell: {
        color: "#4b6095",
        fontWeight: "Bold",
        fontSize: "1.1em"
    },
    botButtons: {
        display: "flex",
        justifyContent: "space-between",
        padding: "0 30px 30px"
    },
    return: {
        border: "1px solid #df585f",
        color: "#df585f",
        borderRadius: 11,
        width: 180,
        height: 40,
        marginBottom: 15,
    }
});

const SearchUserInfo = () => {
    const classes = useStyles();
    const [users, setUsers] = useState([])
    useEffect(() => {
        axios.get(`https://api.hamyarwellness.com/api/v1/users`, { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
            .then(res => {
                console.log(res)
                setUsers(res.data.data)
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                }
            })
    }, [])
    return (
        <Box className={classes.container}>
            <Box className={classes.header}>
                <h2 className={classes.headerTitle}>جستجوی اطلاعات کاربران</h2>
            </Box>
            <Box className={classes.innerContainer}>
                <Box className={classes.searchInputs}>
                    <input type="text" placeholder={"نام"} className={classes.nameInput} />
                    <input type="text" placeholder={"نام خانوادگی"} className={classes.lnameInput} />
                    <input type="text" placeholder={"شماره همراه"} className={classes.phoneInput} />
                    <ButtonBase className={classes.searchButton}><img src={Search} className={classes.searchIcon} alt="جستجو" /></ButtonBase>
                </Box>
                <Box className={classes.tableWrapper}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead className={classes.tableHeader}>
                            <TableRow>
                                <TableCell className={classes.cell} align="center">#</TableCell>
                                <TableCell className={classes.cell} align="center">نام</TableCell>
                                <TableCell className={classes.cell} align="center">نام‌خانوادگی</TableCell>
                                <TableCell className={classes.cell} align="center">شماره‌همراه</TableCell>
                                <TableCell className={classes.cell} align="center">ویرایش</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((data, index) => (
                                <TableRow className={classes.tableRow} >
                                    <TableCell className={classes.cell} align="center">{(users) ? index + 1 : ""}</TableCell>
                                    <TableCell className={classes.cell} align="center">{(users) ? data.firstname : ""}</TableCell>
                                    <TableCell className={classes.cell} align="center">{(users) ? data.lastname : ""}</TableCell>
                                    <TableCell className={classes.cell} align="center">{(users) ? data.phone : ""}</TableCell>
                                    <TableCell className={classes.cell} align="center">
                                        <img src={edit} alt="ویرایش" style={{ width: 30, height: 30 }} />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Box>
            <Box className={classes.botButtons}>
                <ButtonBase component={Link} to={"/admin/specilists-panel"} className={classes.return}>بازگشت</ButtonBase>
            </Box>
        </Box>
    )
}

export default SearchUserInfo
