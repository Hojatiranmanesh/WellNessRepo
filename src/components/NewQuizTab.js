import React, {useEffect, useState} from 'react';
import { ButtonBase, Box, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useSelector } from 'react-redux';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles({
    mainWrapper:{
        display:"flex",
        flexDirection:'column',
        textAlign:'center',
        padding:10,
        alignItems:'center'
    },
    take:{
        height:50,
        width:"100%",
        maxWidth:350,
        color:"#cfd7e2",
        borderRadius:15,
        fontWeight:'bold',
        fontSize:"1.2em",
        backgroundColor:"#485d94",
        marginTop:20,
        boxShadow:"0 0 7px 3px #485d944b",
    },
    intro:{
        color:"#546497",
    },
    desc:{
        color:"#7989a3",
    }
});

const NewQuizTab = ({onStart}) => {
    const [quizTitle, setQuizTitle] = useState("");
    const [quizDesc, setQuizDesc] = useState("");
    const [quizAudio, setQuizAudio] = useState("");
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [snackMessage, setSnackMessage] = React.useState("");
    let quiz = useSelector(state => {
        return state.quiz;
    });
    const handleCloseSnack = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnack(false);
    };
    function Alert(props) {
        return <MuiAlert elevation={6} variant="filled" {...props} />;
      }
    const classes = useStyle();
    useEffect(() => {
        axios.get(`https://api.hamyarwellness.com/api/v1/quizzes/${quiz}`, { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
            .then(function (response) {

                setQuizTitle(response.data.data[0].quizTitle)
                setQuizDesc(response.data.data[0].quizDescription)
                setQuizAudio(response.data.data[0].quizAudio)
                
                console.log(response);
            })
            .catch(function (error) {
                setOpenSnack(true)
                setSnackType("error")
                setSnackMessage("خطا در سرور")
                if(error.response.status === 401){
                    localStorage.removeItem('jwt')
                }
                console.log(error);
            })
    }, [])
    return (
        <Box className={classes.mainWrapper}>
            <h5 className={classes.intro} style={{marginTop:20}}>{quizTitle}</h5>
             <AudioPlayer
                style={{direction:"ltr"}}
               src={`https://api.hamyarwellness.com/${quizAudio}`}
               onPlay={e => console.log("onPlay")}
               showJumpControls={false}
               layout="horizontal"
               customAdditionalControls={[]}
               customVolumeControls={[]}
             />
            <p className={classes.desc} style={{textAlign:'justify',marginTop:20}}> {quizDesc} </p>
            <ButtonBase className={classes.take} onClick={onStart}>انجام آزمون</ButtonBase>
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity={snackType}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default NewQuizTab;