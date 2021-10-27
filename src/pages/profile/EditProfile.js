import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    Grid,
    ButtonBase,
    TextField,
    Box,
    Snackbar
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import profileImage from "../../assets/images/user.png";
import back from "../../assets/images/Right Arrow 2.png";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { showNav } from '../../actions';
import MuiAlert from '@material-ui/lab/Alert';
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles({
    profilePic: {
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
        borderRadius: "50%",
        width: 85,
        height: 85,
        overflow: "hidden",
        border: "3px solid #cfd6dc",
        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: "90%",
        },
    },
    topBar: {
        padding: "20px 16px",
        left: 18
    },
    uploadButton: {
        fontSize: 16,
        borderBottom: "1px solid #485c93",
        color: "#485c93",
        marginLeft: 15,
    },
    submitButton: {
        width: 289,
        height: 57,
        margin: 15,
        borderRadius: 15,
        background: "linear-gradient(126deg, rgba(73,94,149,1) 0%, rgba(87,108,164,1) 100%)",
        fontSize: "1.1em",
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
        fontWeight: "bold",
        color: "#fff"
    },
    upperSection: {
        background: "#c9e3fc"
    },
    labelRoot: {
        fontWeight: "bold",
        fontSize: "1.2em",
        color: "#485c93",
        textShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px  #ffffffd1",
    },
    labelFocused: {
        fontWeight: "bold",
    },
    input: {
        height: "1.4876em"
    },
    secure: {
        color: "#ef5661",
        fontWeight: "bold",
        fontSize: "1em",
        textAlign: "center"
    }
});

const EditProfile = () => {
    const classes = useStyles();
    const [fname, setFname] = useState();
    const [lname, setlname] = useState();
    const [phone, setPhone] = useState();
    const [image, setImage] = useState();
    const [selectedImage, setSelectedImage] = useState();
    const [jobTitle, setJobTitle] = useState();
    const [address, setAddress] = useState();
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");
    const fileInputRef = React.useRef(null);

    const dispatch = useDispatch();
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
    }
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnack(false);
    };
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
                if (res.data.data.image) {
                    setImage(`https://api.hamyarwellness.com/${res.data.data.image}`)
                }
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

        let formData = new FormData();
        formData.append('firstname', fname);
        formData.append('lastname', lname);
        formData.append('jobTitle', jobTitle);
        formData.append('address', address);
        formData.append('image', selectedImage);

        axios.patch(`https://api.hamyarwellness.com/api/v1/users/updateMyProfile`, formData, config)
            .then(res => {
                console.log(res)
                setSnackType("success")
                setSnackMessage("تغییر با موفقیت انجام شد")
                setOpenSnack(true)
            })
            .catch(err => {
                console.log(err)
                setSnackType("error")
                setSnackMessage("خطا در سرور")
                setOpenSnack(true)
                if (err.response.status === 401) {
                    localStorage.removeItem('jwt')
                }
            })
    };
    return (
        <Grid container>

            <Grid container item className={classes.upperSection}>
                <Grid item className={classes.topBar}>
                    <ButtonBase component={Link} to={'/profile'} >
                        <img style={{ width: 28, height: 21 }} src={back} alt="بازگشت" />
                    </ButtonBase>
                </Grid>
                <form onSubmit={e => e.preventDefault()}>
                    <Grid container style={{ padding: "0 16px" }}>
                        <Grid container item alignItems={'center'} style={{ marginBottom: 14 }}>
                            <Box className={classes.profilePic} >
                                {(image) ? <img src={image} alt={"نصویر پروفایل"} /> : <img src={profileImage} alt={"نصویر پروفایل"} />}
                            </Box>
                            <ButtonBase onClick={() => fileInputRef.current.click()} className={classes.uploadButton}>ویرایش تصویر پروفایل</ButtonBase>
                            {(selectedImage) ? <CheckIcon /> : ""}
                            <input
                                type="file"
                                ref={fileInputRef}
                                name={image}
                                accept="image/*"
                                multiple={false}
                                onChange={(e) => setSelectedImage(e.target.files[0])}
                                style={{ display: 'none' }} />

                        </Grid>
                    </Grid>
                    <Grid container item style={{ padding: "0px 16px" }}>
                        <Grid item style={{ width: "100%", margin: "10px 10px" }}>
                            <TextField
                                key="Firstname"
                                onChange={e => setFname(e.target.value)}
                                value={fname}
                                style={{ width: "100%" }}
                                id="name"
                                label="نام"
                                name="firstname"
                                inputProps={{ className: classes.input }}
                                InputLabelProps={{
                                    shrink: (fname) ? true : false,
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%", margin: "10px 10px" }}>
                            <TextField
                                key="Lastname"
                                onChange={e => setlname(e.target.value)}
                                value={lname}
                                style={{ width: "100%" }}
                                id="name"
                                name="lastname"
                                label="نام خانوادگی"
                                inputProps={{ className: classes.input }}
                                InputLabelProps={{
                                    shrink: (lname) ? true : false,
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%", margin: "10px 10px" }}>
                            <TextField
                                key="Phone number"
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                                style={{ width: "100%" }}
                                id="name"
                                label=" شماره همراه"
                                inputProps={{ className: classes.input }}
                                InputLabelProps={{
                                    shrink: (phone) ? true : false,
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%", margin: "10px 10px" }}>
                            <TextField
                                key="Job Title"
                                onChange={e => setJobTitle(e.target.value)}
                                value={jobTitle}
                                style={{ width: "100%" }}
                                id="name"
                                name="jobTitle"
                                label="شغل"
                                inputProps={{ className: classes.input }}
                                InputLabelProps={{
                                    shrink: (jobTitle) ? true : false,
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%", margin: "10px 10px" }}>
                            <TextField
                                key="Address"
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                                style={{ width: "100%" }}
                                id="name"
                                name="address"
                                label="آدرس"
                                inputProps={{ className: classes.input }}
                                InputLabelProps={{
                                    shrink: (address) ? true : false,
                                    classes: {
                                        root: classes.labelRoot,
                                        focused: classes.labelFocused
                                    }
                                }}
                            />
                        </Grid>
                        <Grid item style={{ width: "100%", margin: "5px 10px", display: "flex", justifyContent: "center" }}>
                            <ButtonBase onClick={update} className={classes.submitButton}>ثبت تغییرات</ButtonBase>
                        </Grid>
                        <Grid item style={{ width: "100%", marginBottom: 15 }}>
                            <p className={classes.secure}>اطلاعات شما به صورت محرمانه زخیره خواهد شد.</p>
                        </Grid>
                    </Grid>
                </form>
            </Grid>

            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity={snackType}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </Grid >
    )
}
export default EditProfile;