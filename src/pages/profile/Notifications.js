import React from 'react';
import { Box, ButtonBase, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';
import add from '../../assets/images/Add.png';
import delte from '../../assets/images/Delete.png';
import water from '../../assets/images/water.png';
import { Link } from 'react-router-dom';
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
    quickReminder: {
        display: "flex",
        flexWrap: "wrap",
        margin: "15px 0",
        justifyContent: "center"
    },
    recomendText: {
        textAlign: "center",
        fontWeight: "bold",
        borderBottom: "1px solid #2e4169",
        color: "#2e4169",
        width: "fit-content",
        margin: "20px auto auto"
    },
    quickReminderButtton: {
        width: 160,
        height: 57,
        backgroundColor: "#c4dffaad",
        margin: 10,
        fontSize: FontSize(1),
        borderRadius: 15,
    },
    bottomContainer: {
        display: "grid",
        justifyContent: "center",
        padding: 15,
    },
    addButton: {
        width: 339,
        height: 60,
        backgroundColor: "#4d639d",
        color: "#fff",
        margin: "10px auto",
        borderRadius: 15,
    },
    add: {
        height: 32,
        width: 32,
        position: "relative",
        right: 10,
        opacity: .9
    },
    reminder: {
        width: 339,
        height: 50,
        color: "#fff",
        backgroundColor: "#67c8f3",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 15,
        margin: "15px auto auto",

    },
    reminderLeft: {
        display: "flex",
        marginLeft: 15,
    },
    reminderRight: {
        display: "flex",
        marginRight: 15,
    },
    delete: {
        height: 28,
        width: 28,
        opacity: .8
    }
});


const Notifications = () => {
    const classes = useStyle();
    return (
        <Box>
            <Box className={classes.topContainer}>
                <Header component="link" to='/profile' />
                <h2 style={{ fontSize: FontSize(1.5) }}>یادآوری‌ها</h2>
            </Box>
            <p style={{ fontSize: FontSize(1) }} className={classes.recomendText}>یادآوری‌های پیشنهادی مرکز ولنس برای شما</p>
            <Box className={classes.quickReminder}>
                <ButtonBase className={classes.quickReminderButtton}>یادآور نوشیدن آب</ButtonBase>
                <ButtonBase className={classes.quickReminderButtton}>یادآور نوشیدن دمنوش</ButtonBase>
                <ButtonBase className={classes.quickReminderButtton}>یادآور ریلکسیشن</ButtonBase>
                <ButtonBase className={classes.quickReminderButtton}>یادآور ورزش و یوگا</ButtonBase>
            </Box>
            <Divider variant="middle" />
            <Box className={classes.bottomContainer}>
                <ButtonBase style={{ fontSize: FontSize(1) }} className={classes.addButton} component={Link} to="/profile/notifications/add-notif">
                    <img className={classes.add} src={add} alt="اضافه" />
                    اضافه کردن یادآوری جدید
                </ButtonBase>
                <Box className={classes.reminder}>
                    <Box className={classes.reminderLeft}>
                        <img src={water} alt="آب" />
                        <p style={{ marginRight: 10 }}>یادآوری نوشیدن آب</p>
                    </Box>
                    <Box className={classes.reminderRight}>
                        <span style={{ marginLeft: 10, fontSize: "1.3em" }}>18:30</span>
                        <ButtonBase><img className={classes.delete} src={delte} alt="حذف" /></ButtonBase>
                    </Box>
                </Box>
                <Box className={classes.reminder}>
                    <Box className={classes.reminderLeft}>
                        <img src={water} alt="آب" />
                        <p style={{ marginRight: 10, fontSize: FontSize(1) }}>یادآوری نوشیدن آب</p>
                    </Box>
                    <Box className={classes.reminderRight}>
                        <span style={{ marginLeft: 10, fontSize: FontSize(1.3) }}>18:30</span>
                        <ButtonBase><img className={classes.delete} src={delte} alt="حذف" /></ButtonBase>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}

export default Notifications
