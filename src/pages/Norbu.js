import React, { useState, } from 'react';
import video from '../assets/Video/monLoop.mp4';
import Bird from '../assets/audio/Bird.mp3';
import Rain from '../assets/audio/Rain.mp3';
import Sea from '../assets/audio/Sea.mp3';
import Water from '../assets/audio/Water.mp3';
import { makeStyles } from '@material-ui/core/styles';
import { Box, ButtonBase, Menu, MenuItem, Divider, Slider } from '@material-ui/core';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ReactAudioPlayer from 'react-audio-player';

const useStyle = makeStyles({
    video: {
        height: "100%",
        width: "100%",
        objectFit: "cover"
    },
    videoWrapper: {
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
    },
    volumeIcon: {
        zIndex: 12,
        position: 'absolute',
        top: 10,
        right: 10,
        color: "white",
        padding: 15,
    },
    clockIcon:{
        zIndex: 12,
        position: 'absolute',
        top: 10,
        left: 10,
        color: "white",
        padding: 15,
    },
    menuPaper: {
        width: 400,
        maxWidth: "92vw",
        background: "transparent",
        backgroundColor: "#00000080",
    }
});

const Norbu = () => {
    const classes = useStyle();
    const [showVolume, setShowVolume] = useState(false);
    const [showClock, setShowClock] = useState(false);
    const [birdVolume, setBirdVolume] = React.useState(0.3);
    const [rainVolume, setRainVolume] = React.useState(0.3);
    const [seaVolume, setSeaVolume] = React.useState(0.3);
    const [waterVolume, setWaterVolume] = React.useState(0.3);
    const handleClick = (event) => {
        setShowVolume(event.currentTarget);
    };
    const handleClose = () => {
        setShowVolume(null);
    };
    const handleClickClock = (event) => {
        setShowClock(event.currentTarget);
    };
    const handleCloseClock = () => {
        setShowClock(null);
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
    return (
        <>
            <Box className={classes.videoWrapper}>
                <video className={classes.video} autoPlay={true} muted loop id="myVideo">
                    <source src={video} type="video/mp4" />
                </video>
            </Box>
            <ButtonBase onClick={handleClick} className={classes.volumeIcon}><VolumeUpIcon /></ButtonBase>
            <ButtonBase onClick={handleClickClock} className={classes.clockIcon}><AccessTimeIcon /></ButtonBase>
            <Menu
                id="simple-menu"
                anchorEl={showVolume}
                keepMounted
                open={Boolean(showVolume)}
                onClose={handleClose}
                classes={{ paper: classes.menuPaper }}
            >
                <MenuItem >
                    <Slider
                        value={birdVolume} min={0} max={1} step={0.001}
                        onChange={birdChange} aria-labelledby="continuous-slider" />
                </MenuItem>
                <Divider />
                <MenuItem >
                    <Slider value={rainVolume} min={0} max={1} step={0.001}
                        onChange={rainChange} aria-labelledby="continuous-slider" />
                </MenuItem>
                <Divider />
                <MenuItem >
                    <Slider value={seaVolume} min={0} max={1} step={0.001}
                        onChange={seaChange} aria-labelledby="continuous-slider" />
                </MenuItem>
                <Divider />
                <MenuItem >
                    <Slider value={waterVolume} min={0} max={1} step={0.001}
                        onChange={waterChange} aria-labelledby="continuous-slider" />
                </MenuItem>
            </Menu>
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