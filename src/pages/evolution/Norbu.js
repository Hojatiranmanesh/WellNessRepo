import React, { useState, useEffect } from 'react';
import video from '../../assets/Video/210329_06B_Bali_1080p_008.mp4';
import Bird from '../../assets/audio/Bird.mp3';
import Rain from '../../assets/audio/Rain.mp3';
import Sea from '../../assets/audio/Sea.mp3';
import Water from '../../assets/audio/Water.mp3';
import { makeStyles } from '@material-ui/core/styles';
import { Box, ButtonBase, Divider, Slider, ListItem, SwipeableDrawer, List, } from '@material-ui/core';
import ReactAudioPlayer from 'react-audio-player';
import TimeIcon from '../../assets/images/Time.png';
import EQIcon from '../../assets/images/Equalizer Settings.png';
import Countdown from 'react-countdown';


const useStyle = makeStyles({
    video: {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        objectPosition: "33% 71%"
    },
    videoWrapper: {
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        position: "relative",
    },
    buttons: {
        position: "absolute",
        zIndex: 1301,
        top: 0,
        flexDirection: "row-reverse",
        background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(0,0,0,0.49093140674238445) 51%, rgba(0,0,0,0.6141807064622724) 100%)",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    volumeIcon: {
        color: "white",
        padding: 30,
    },
    clockIcon: {
        color: "white",
        padding: 30,
    },
    menuPaper: {
        width: 400,
        maxWidth: "92vw",
        background: "transparent",
        backgroundColor: "#00000080",
    },
    drawerPaper: {
        width: "101%",
        height: "calc(100vh - 185px)",
        background: "#131337a6",
        paddingTop: 120,
        position: "relative",
        left: -2,
        boxShadow: "none"
    },
    drawerRoot: {
        height: "calc(100vh - 65px)"
    },
    sliderRow: {
        display: "flex",
        flexDirection: "column",
        width: "92%",
        margin: "0 auto"
    },
    sliderDesc: {
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
        color: "#ffffffe6",
    },
    sliderPrimary: {
        color: "#9cb9e6"
    },
    sliderRail: {
        height: 4
    },
    sliderTrack: {
        height: 4
    },
    thumb: {
        width: 17,
        height: 17,
        marginTop: -7
    },
    timerWrapper: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        color: "#ffffffe6",
    },
    timerButton: {
        height: 47,
        width: 289,
        border: "1px solid white",
        margin: "10px auto",
        borderRadius: 15,
    },
    offButton: {
        height: 47,
        width: 289,
        border: "1px solid white",
        margin: "20px auto",
        borderRadius: 15,
    },
    timerButtons: {
        height: 275,
    },
    counter: {
        left: "44%",
        top: 120,
        fontSize: "1.6em",
        background: "rgba(0, 0, 0, 0.12)",
        padding: "10px 20px",
        borderRadius: 15,
        width: 80,
        textAlign: "center",
        position: "absolute"
    }
});

const Norbu = () => {
    const classes = useStyle();
    const [birdVolume, setBirdVolume] = React.useState(0.3);
    const [rainVolume, setRainVolume] = React.useState(0.3);
    const [seaVolume, setSeaVolume] = React.useState(0.3);
    const [waterVolume, setWaterVolume] = React.useState(0.3);
    const [counter, setCounter] = React.useState(0);
    const [volumeDrawer, setVolumeDrawer] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    const [timerDrawer, setTimerDrawer] = useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });
    
    const startClock = (minutes) => {
        setCounter(5)
    }
    const toggleVolumeDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setVolumeDrawer({ ...volumeDrawer, [anchor]: open });
    };
    const toggleTimerDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setTimerDrawer({ ...timerDrawer, [anchor]: open });
    };

    const birdChange = (event, newValue) => {
        setBirdVolume(newValue);

    };
    const rainChange = (event, newValue) => {
        setRainVolume(newValue);
    };
    const seaChange = (event, newValue) => {
        setSeaVolume(newValue);
    };
    const waterChange = (event, newValue) => {
        setWaterVolume(newValue);
    };

    const renderer = ({  minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return "00:00"
        } else {
            // Render a countdown
            return <span className={classes.counter}>
                {(minutes < 10 ? `0${minutes}` : minutes)}:{(seconds < 10 ? `0${seconds}` : seconds)}
            </span>;
        }
    };
    
    return (
        <>
            <Box className={classes.videoWrapper}>
                <Countdown date={Date.now() + {counter} * 60 * 1000} renderer={renderer} />
                
                <video className={classes.video} onloadedmetadata="this.muted = true" muted playsInline autoPlay loop >
                    <source src={video} type="video/mp4" />
                </video>
                <Box className={classes.buttons}>
                    <ButtonBase
                        onClick={(volumeDrawer['right']) ? toggleVolumeDrawer("right", false) : toggleVolumeDrawer("right", true)}
                        className={classes.volumeIcon}>

                        <img src={EQIcon} style={{ width: 32 }} alt='اکولایزر' />
                    </ButtonBase>
                    <ButtonBase
                        onClick={(timerDrawer['left']) ? toggleTimerDrawer("left", false) : toggleTimerDrawer("left", true)}
                        className={classes.clockIcon}>
                        <img src={TimeIcon} style={{ width: 32 }} alt='تایمر' />
                    </ButtonBase>
                </Box>
            </Box>
            <React.Fragment key={"right"}>

                <SwipeableDrawer
                    anchor={"right"}
                    open={volumeDrawer["right"]}
                    onClose={toggleVolumeDrawer("right", false)}
                    onOpen={toggleVolumeDrawer("right", true)}
                    BackdropProps={{
                        invisible: true,
                        classes: {
                            root: classes.BackdropProps
                        }
                    }}
                    classes={{
                        modal: classes.drawerModal,
                        paper: classes.drawerPaper,
                        root: classes.drawerRoot,
                    }}
                >
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleVolumeDrawer("right", false)}
                        onKeyDown={toggleVolumeDrawer("right", false)}
                    >

                        <List>
                            <ListItem className={classes.sliderRow}>
                                <Box className={classes.sliderDesc}>
                                    <p>صدای پرندگان</p>
                                    <p>{Math.round(birdVolume * 100)} % </p>
                                </Box>
                                <Slider
                                    value={birdVolume} min={0} max={1} step={0.001}
                                    classes={{
                                        colorPrimary: classes.sliderPrimary,
                                        sliderSecondary: classes.colorSecondary,
                                        rail: classes.sliderRail,
                                        track: classes.sliderTrack,
                                        thumb: classes.sliderThumb
                                    }}
                                    onChange={birdChange} aria-labelledby="continuous-slider" />
                            </ ListItem>
                            <Divider />
                            <ListItem className={classes.sliderRow}>
                                <Box className={classes.sliderDesc}>
                                    <p>صدای بارش باران</p>
                                    <p>{Math.round(rainVolume * 100)} % </p>
                                </Box>
                                <Slider value={rainVolume} min={0} max={1} step={0.001}
                                    classes={{
                                        colorPrimary: classes.sliderPrimary,
                                        sliderSecondary: classes.colorSecondary,
                                        rail: classes.sliderRail,
                                        track: classes.sliderTrack,
                                        thumb: classes.sliderThumb
                                    }}
                                    onChange={rainChange} aria-labelledby="continuous-slider" />
                            </ListItem>
                            <Divider />
                            <ListItem className={classes.sliderRow}>
                                <Box className={classes.sliderDesc}>
                                    <p>صدای موج‌های ساحل</p>
                                    <p>{Math.round(seaVolume * 100)} % </p>
                                </Box>
                                <Slider value={seaVolume} min={0} max={1} step={0.001}
                                    classes={{
                                        colorPrimary: classes.sliderPrimary,
                                        sliderSecondary: classes.colorSecondary,
                                        rail: classes.sliderRail,
                                        track: classes.sliderTrack,
                                        thumb: classes.sliderThumb
                                    }}
                                    onChange={seaChange} aria-labelledby="continuous-slider" />
                            </ListItem>
                            <Divider />
                            <ListItem className={classes.sliderRow}>
                                <Box className={classes.sliderDesc}>
                                    <p>صدای موسیقی</p>
                                    <p>{Math.round(waterVolume * 100)} % </p>
                                </Box>
                                <Slider value={waterVolume} min={0} max={1} step={0.001}
                                    classes={{
                                        colorPrimary: classes.sliderPrimary,
                                        sliderSecondary: classes.colorSecondary,
                                        rail: classes.sliderRail,
                                        track: classes.sliderTrack,
                                        thumb: classes.sliderThumb
                                    }}
                                    onChange={waterChange} aria-labelledby="continuous-slider" />
                            </ListItem>
                        </List>
                    </div>
                </SwipeableDrawer>
            </React.Fragment>
            <React.Fragment key={"left"}>
                <SwipeableDrawer
                    anchor={"left"}
                    open={timerDrawer["left"]}
                    onClose={toggleTimerDrawer("left", false)}
                    onOpen={toggleTimerDrawer("left", true)}
                    BackdropProps={{
                        invisible: true,
                        classes: {
                            root: classes.BackdropProps
                        }
                    }}
                    classes={{
                        modal: classes.drawerModal,
                        paper: classes.drawerPaper,
                        root: classes.drawerRoot,
                    }}
                >
                    <div
                        className={classes.list}
                        role="presentation"
                        onClick={toggleTimerDrawer("left", false)}
                        onKeyDown={toggleTimerDrawer("left", false)}
                    >
                        <div className={classes.timerWrapper}>
                            <h2>تنظیم مدت زمان</h2>
                            <div className={classes.timerButtons}>
                                ‌<ButtonBase onClick={() => startClock(5)} className={classes.timerButton}>5 دقیقه</ButtonBase>
                                ‌<ButtonBase className={classes.timerButton}>10 دقیقه</ButtonBase>
                                ‌<ButtonBase className={classes.timerButton}>20 دقیقه</ButtonBase>
                                ‌<ButtonBase className={classes.timerButton}>30 دقیقه</ButtonBase>
                            </div>
                            ‌<ButtonBase className={classes.offButton}>خاموش</ButtonBase>
                        </div>
                    </div>
                </SwipeableDrawer>
            </React.Fragment>

            <ReactAudioPlayer
                loop
                src={Bird}
                autoPlay
                mutded
                volume={birdVolume}
            />
            <ReactAudioPlayer
                loop
                src={Sea}
                autoPlay
                mutded
                volume={seaVolume}
            />
            <ReactAudioPlayer
                loop
                src={Rain}
                autoPlay
                mutded
                volume={rainVolume}
            />
            <ReactAudioPlayer
                loop
                src={Water}
                autoPlay
                mutded
                volume={waterVolume}
            />
        </>
    )

}

export default Norbu;