import React, {useEffect, useState} from 'react';
import { ButtonBase, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { useSelector } from 'react-redux';

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
        marginTop:20
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
    let quiz = useSelector(state => {
        return state.quiz;
    });
    const classes = useStyle();
    useEffect(() => {
        axios.get(`http://api.hamyarwellness.com/api/v1/quizzes/${quiz}`, { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
            .then(function (response) {
                setQuizTitle(response.data.data[0].quizTitle)
                setQuizDesc(response.data.data[0].quizDescription)
                console.log(response);
            })
            .catch(function (error) {
                if(error.response.status === 401){
                    localStorage.removeItem('jwt')
                }
                console.log(error);
            })
    }, [])
    return (
        <Box className={classes.mainWrapper}>
            <h5 className={classes.intro} style={{marginTop:20}}>{quizTitle}</h5>
            <p className={classes.desc} style={{textAlign:'justify',marginTop:20}}> {quizDesc} </p>
            <ButtonBase className={classes.take} onClick={onStart}>انجام آزمون</ButtonBase>
        </Box>
    )
}

export default NewQuizTab;