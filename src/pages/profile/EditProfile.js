import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    ButtonBase,
    TextField,
} from '@material-ui/core';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from "@material-ui/core/styles";
import profileImage from '../../assets/images/user.png';
import axios from 'axios';
import { useDispatch } from "react-redux";
import { showNav } from '../../actions';

const useStyles = makeStyles({
    topBar: {
        padding: "20px 0",
    },
    uploadButton: {
        fontSize: 18,
        borderBottom: "1px solid black",
        marginLeft: 15,
    },
    submitButton: {
        width: "100%",
        color: "#fff",
        marginTop: 15,
        background: "linear-gradient(0deg, rgba(73,94,149,1) 0%, rgba(87,108,163,1) 100%)",
        fontSize: "1.5em",
        padding: 6,
        borderRadius: 15
    }
});

const EditProfile = () => {
    const classes = useStyles();
    const [fname, setFname] = useState();
    const [lname, setlname] = useState();
    const [phone, setPhone] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [address, setAddress] = useState();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showNav())
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            },
        };
        axios.get("https://api.hamyarwellness.com/api/v1/users/getMyProfile", config)
            .then(res => {
                console.log(res)
                setFname(res.data.data.firstname)
                setlname(res.data.data.lastname)
                setPhone(res.data.data.phone)
                setJobTitle(res.data.data.jobTitle)
                setAddress(res.data.data.address)
            })
            .catch(err => {
                if (err.response.status === 401) {
                    localStorage.removeItem('jwt')
                }
            })

    }, [])
    const update = () => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            },
        };
        const data = {
            firstname: fname,
            lastname: lname,
            phone: phone,
            jobTitle: jobTitle,
            address: address,
        }
        axios.patch(`https://api.hamyarwellness.com/api/v1/users/${localStorage.getItem('userid')}`, data, config)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
                if (err.response.status === 401) {
                    localStorage.removeItem('jwt')
                }
            })
    };
    return (
        <Grid container style={{ padding: 10 }}>
            <Grid item className={classes.topBar}>
                <ButtonBase component={Link} to={'/profile'} >
                    <ArrowForwardIcon style={{ fontSize: 30 }} />
                </ButtonBase>
            </Grid>
            <Grid container item>
                <Grid container>
                    <input type="file" hidden />
                    <Grid container item alignItems={'center'}>
                        <img src={profileImage} height={100} alt={"نصویر پروفایل"} />
                        <ButtonBase className={classes.uploadButton}>ویرایش تصویر پروفایل</ButtonBase>
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField
                            key="Firstname"
                            variant="filled"
                            onChange={e => setFname(e.target.value)}
                            value={fname}
                            style={{ width: "100%" }}
                            id="name"
                            label="نام"
                            InputLabelProps={{ shrink: (fname) ? true : false }}
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField
                            key="Lastname"
                            variant="filled"
                            onChange={e => setlname(e.target.value)}
                            value={lname}
                            style={{ width: "100%" }}
                            id="name"
                            label="نام خانوادگی"
                            InputLabelProps={{ shrink: (lname) ? true : false }}
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField
                            key="Phone number"
                            variant="filled"
                            onChange={e => setPhone(e.target.value)}
                            value={phone}
                            style={{ width: "100%" }}
                            id="name"
                            label=" شماره همراه"
                            InputLabelProps={{ shrink: (phone) ? true : false }}
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField
                            key="Job Title"
                            variant="filled"
                            onChange={e => setJobTitle(e.target.value)}
                            value={jobTitle}
                            style={{ width: "100%" }}
                            id="name"
                            label="شغل"
                            InputLabelProps={{ shrink: (jobTitle) ? true : false }}
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField
                            key="Address"
                            variant="filled"
                            onChange={e => setAddress(e.target.value)}
                            value={address}
                            style={{ width: "100%" }}
                            id="name"
                            label="آدرس"
                            InputLabelProps={{ shrink: (address) ? true : false }}
                        />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <ButtonBase onClick={update} className={classes.submitButton}>ثبت تغییرات</ButtonBase>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}
export default EditProfile;