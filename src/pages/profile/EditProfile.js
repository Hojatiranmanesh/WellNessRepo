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
    useEffect(() => {
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            },
        };
        axios.get("http://api.hamyarwellness.com/api/v1/users/getOne", config)
            .then(res => {
                console.log(res)
                setFname(res.data.data.firstname)
                setlname(res.data.data.lastname)
                setPhone(res.data.data.phone)
                setJobTitle(res.data.data.jobTitle)
                setAddress(res.data.data.address)
            })

    }, [])
    const update = ()=>{
        const config = {
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('jwt')}`,
            },
        };
        const data = {
            firstname:fname,
            lastname:lname,
            phone:phone,
            jobTitle:jobTitle,
            address:address,
        }
        axios.patch(`http://api.hamyarwellness.com/api/v1/users/${localStorage.getItem('userid')}`,data,config)
        .then(res=>{
            console.log(res)
        })
        .catch(err=>{
            console.log(err)
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
                        <TextField onChange={e => setFname(e.target.value)} value={fname} style={{ width: "100%" }} id="name" label="نام" />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField onChange={e => setlname(e.target.value)} value={lname} style={{ width: "100%" }} id="name" label="نام خانوادگی" />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField onChange={e => setPhone(e.target.value)} value={phone} style={{ width: "100%" }} id="name" label=" شماره همراه" />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField onChange={e => setJobTitle(e.target.value)} value={jobTitle} style={{ width: "100%" }} id="name" label="شغل" />
                    </Grid>
                    <Grid item style={{ width: "100%", margin: "5px 10px" }}>
                        <TextField onChange={e => setAddress(e.target.value)} value={address} style={{ width: "100%" }} id="name" label="آدرس" />
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