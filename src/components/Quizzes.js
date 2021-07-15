import React, { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setQuiz } from '../actions';
import { useSelector } from 'react-redux';
import {Link }from 'react-router-dom';

const useStyle = makeStyles({
    quizzesWrapper: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        marginTop: 10
    },
    button: {
        displat: "flex",
        flexDirection: "column",
    },
    iconWrapper: {
        height: 60,
        width: 60,
        borderRadius: 20,
    },
    buttonCaption: {
        color: "#7887a2",
    },
});



const Quizzes = () => {
    const dispatch = useDispatch()
    let dimension = useSelector(state => {
        return state.dimension;
    });
    const classes = useStyle();
    const [quizzes, setQuizzes] = useState([])
    const handleClick = (e, data) =>{
        dispatch(setQuiz(data))
    }
    useEffect(() => {
        axios.get(`http://api.hamyarwellness.com/api/v1/quizzes/dimension/${dimension}`, { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
            .then(function (response) {
                console.log(response)
                response.data.data.forEach(element => {
                    setQuizzes(quizzes => [...quizzes, 
                    <ButtonBase listId={element._id} key={element._id} className={classes.button} onClick={((e) => handleClick(e, element._id))} component={Link} to="/quizzes/dimension/quiz">
                        <div style={{ backgroundColor: "#e5d796" }} className={classes.iconWrapper}></div>
                        <p className={classes.buttonCaption}>{element.quizCategory}</p>
                    </ButtonBase>])
                });
            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);

    return (
        <Box className={classes.quizzesWrapper}>
            {quizzes}
        </Box>
    )
}

export default Quizzes;