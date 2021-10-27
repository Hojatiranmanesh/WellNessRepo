import React, { useState } from 'react';
import Delete from '../../assets/images/Delete.png'
import { Box, ButtonBase, Divider, FormControl, Select, MenuItem, TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';
import addIcon from '../../assets/images/Add.png';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import water from '../../assets/images/water.png';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FontSize from '../../components/FontSize';

const useStyle = makeStyles({
    topContainer: {
        height: 120,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c4dffaad",
        "& h2": {
            marginTop: 40,
            color: "#67c7f1",
        }
    },
    recomendText: {
        textAlign: "center",
        fontWeight: "bold",
        borderBottom: "1px solid #2e4169",
        color: "#2e4169",
        width: "fit-content",
        margin: "20px auto auto",
        fontSize: FontSize(1)
    },
    daySelection: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        margin: "15px 0"
    },
    dayButton: {
        width: 72,
        height: 50,
        backgroundColor: "#c4dffaad",
        margin: 5,
        borderRadius: 15
    },
    timeSelectionContainer: {
        display: "flex",
        justifyContent: "center",
        boxSizing: "border-box",
        marginTop: 10,
    },
    add: {
        display: "grid",
        justifyContent: "center",
        height: 70,
        width: 80,
        boxSizing: "border-box",
        padding: 10,
        color: "#fff",
        backgroundColor: "#4d639d",
        fontSize: FontSize(.6),
        marginRight: 10,
        borderRadius: 15,
        "& img": {
            height: 25,
            width: 25,
        },
    },
    timeSelection: {
        display: 'flex',
        width: 257,
        height: 70,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#c4dffaad",
        borderRadius: 15,
    },
    hrAdjust: {
        display: 'grid',
        color: "#abafd4c2",
        "& svg": {
            fontSize: "2em"
        }
    },
    time: {
        fontSize: FontSize(2),
        color: "#2b4166",
        fontWeight: "bold",
        opacity: .9
    },
    minAdjust: {
        display: 'grid',
        color: "#abafd4c2",
        "& svg": {
            fontSize: "2em"
        }
    },
    timesAdded: {
        width: "100%",
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "space-around",
        margin: "10px 0"
    },
    timeAdded: {
        backgroundColor: "#67c8f3",
        width: 160,
        height: 50,
        display: "flex",
        alignItems: "center",
        color: "#fff",
        borderRadius: 15,
        fontSize: FontSize(1.4),
        justifyContent: "space-around",
    },
    bottomContainer: {
        width: "100%",
        padding: "10px 0",
        boxSizing: "border-box",
        display: "grid",
        maxWidth: 440,
        margin: "0 auto"
    },
    formControl: {
        width: "100%",
        margin: "0 auto",
        "& .MuiInputBase-root": {
            borderRadius: 15
        }
    },
    reminderDesc: {
        fontWeight: "Bold",
        fontSize: FontSize(1.1),
        color: "#485b95",
        textShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px  #ffffffd1",
        marginTop: 25,
    },
    submit: {
        height: 57,
        width: 289,
        margin: "40px auto auto",
        background: "#51669d",
        color: "#fff",
        fontSize: FontSize(1.1),
        fontWeight: "bold",
        borderRadius: 15,
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
    },
    selectRoot: {
        background: "#c4dffaad",
        borderRadius: 15,
        padding: "13px 12px",
    },
    selectitem: {
        display: "flex",
        alignItems: "center"
    },
});

const publicVapidKey = 'BPBc8omBrJ-NtB_XcIW0S_QS4pVe_dNVECdvRiDWH3DsIQF2CshhYYUgep2U9DWlu7Huns5dzkrlypdRIrIgp8Q';
async function send(minute, hour) {
    // Register Service Worker
    console.log("Registering service worker...");
    const register = await navigator.serviceWorker.register("../../service-worker.js", {
        scope: "/profile/notifications"
    });
    console.log("Service Worker Registered...");
    console.log(register)
    if (!('PushManager' in window)) {
        console.log('Push messaging isn\'t supported.');
        return;
    }
    //
    if (Notification.permission === 'denied') {
        console.log('The user has blocked notifications.');
        return;
    }
    // Register Push.
    await navigator.serviceWorker.ready;
    console.log("Registering Push...");
    let subscription = await register.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicVapidKey)
    });
    console.log("Push Registered...");

    let data = {
        subscription: JSON.stringify(subscription),
        minute: minute,
        hour: hour
    };
    // Send Push Notification
    console.log("Sending Push...");
    await fetch("https://api.hamyarwellness.com/api/v1/subscribe", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    });
    console.log("Push Sent...");
}

function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
        .replace(/\-/g, "+")
        .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
        outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
}

const AddNotif = () => {
    const classes = useStyle();
    const [hour, setHour] = useState(22);
    const [minute, setMinute] = useState(22);
    const incMin = () => {
        if (minute === 59) {
            setMinute(0);
        } else {
            setMinute(minute + 1)
        }
    }
    const incHr = () => {
        if (hour === 23) {
            setHour(0);
        } else {
            setHour(hour + 1)
        }
    }
    const decHr = () => {
        if (hour === 0) {
            setHour(23);
        } else {
            setHour(hour - 1)
        }
    }
    const decMin = () => {
        if (minute === 0) {
            setMinute(59);
        } else {
            setMinute(minute - 1)
        }
    }
    const publicVapidKey = 'BPBc8omBrJ-NtB_XcIW0S_QS4pVe_dNVECdvRiDWH3DsIQF2CshhYYUgep2U9DWlu7Huns5dzkrlypdRIrIgp8Q';

    //check serv worker



    // Register SW, Register Push, Send Push

    return (
        <Box>
            <Box className={classes.topContainer}>
                <Header component="link" to='/profile/notifications' />
                <h2>ثبت یادآوری جدید</h2>
            </Box>
            <Box style={{ padding: "0 20px" }}>
                <p className={classes.recomendText}>یادآوری‌های پیشنهادی مرکز ولنس برای شما</p>
                <Box className={classes.daySelection}>
                    <ButtonBase className={classes.dayButton}>شنبه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>یک‌شنبه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>دوشنبه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>سه‌شنبه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>چهارشنبه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>پنج‌شنبه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>جمعه</ButtonBase>
                    <ButtonBase className={classes.dayButton}>همه</ButtonBase>
                </Box>
                <Divider variant="middle" style={{ with: "90%", marginBottom: 20 }} />
                <Box className={classes.timeSelectionContainer}>
                    <ButtonBase className={classes.add} onClick={send}>
                        <img style={{ margin: "0 auto", width: 27, height: 27, opacity: .9 }} src={addIcon} alt="اضافه" />
                        <span>اضافه کردن</span>
                    </ButtonBase>
                    <Box className={classes.timeSelection}>
                        <Box className={classes.minAdjust}>
                            <ExpandLessIcon onClick={incMin} />
                            <ExpandMoreIcon onClick={decMin} />
                        </Box>
                        <Box className={classes.time}>
                            {(hour < 10) ? "0" + hour : hour}:{(minute < 10) ? "0" + minute : minute}
                        </Box>
                        <Box className={classes.hrAdjust}>
                            <ExpandLessIcon onClick={incHr} />
                            <ExpandMoreIcon onClick={decHr} />
                        </Box>
                    </Box>
                </Box>
                <Box>
                    <Box className={classes.timesAdded}>
                        <Box className={classes.timeAdded}>
                            <img style={{ width: 27, height: 27, opacity: .8 }} src={Delete} alt="حذف" />
                            <span style={{ opacity: .9 }}>18:50</span>
                        </Box>
                        <Box className={classes.timeAdded}>
                            <img style={{ width: 27, height: 27, opacity: .8 }} src={Delete} alt="حذف" />
                            <span style={{ opacity: .9 }}>21:50</span>
                        </Box>
                    </Box>
                </Box>
                <Divider variant="middle" style={{ with: "90%", marginTop: 20 }} />
                <Box className={classes.bottomContainer}>
                    <FormControl variant="filled" className={classes.formControl}>
                        <Select
                            classes={{ root: classes.selectRoot }}
                            IconComponent={ExpandMoreIcon}
                            labelId="demo-simple-select-filled-label"
                            id="demo-simple-select-filled"
                            disableUnderline
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>
                                <Box className={classes.selectitem}>
                                    <img src={water} alt="" />
                                    <span style={{ marginRight: 20, }}>یادآوری نوشیدن آب</span>
                                </Box>
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <span className={classes.reminderDesc}>توضیحات یادآوری</span>
                    <TextField
                        id="standard-multiline-static"
                        rows={4}
                        placeholder="توضیحات خود را وارد کنید"
                    />
                    <ButtonBase onClick={() => {
                        if ("serviceWorker" in navigator) {
                            send(minute, hour).catch(err => console.error(err));
                        } else {
                            console.log("no service worker")
                        }
                    }} className={classes.submit}><span style={{ opacity: .9 }}> ثبت یادآوری جدید</span></ButtonBase>
                </Box>
            </Box>
        </Box>
    )
}

export default AddNotif;
