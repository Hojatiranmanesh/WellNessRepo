import React, { useState, useEffect } from 'react';
import { Box, ButtonBase } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setQuiz } from '../actions';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    quizzesWrapper: {
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: 30
    },
    button: {
        display: "flex",
        flexDirection: "column",
        width: 70,
        justifyContent: "flex-start",
    },
    iconWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: 70,
        width: 70,
        borderRadius: 20,
        marginBottom: 10,
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
    },
    buttonCaption: {
        color: "#7887a2",
    },
    quizIcon: {
        height: 40,
        width: 40,
    },
});



const Quizzes = () => {
    const dispatch = useDispatch()
    const [colors] = useState([
        "linear-gradient(0deg, rgba(92,208,221,1) 0%, rgba(102,180,244,1) 100%)",
        "linear-gradient(0deg, rgba(115,218,77,1) 0%, rgba(118,239,146,1) 100%)",
        "linear-gradient(0deg, rgba(245,167,131,1) 0%, rgba(244,201,122,1) 100%)",
        "linear-gradient(0deg, rgba(248,118,224,1) 0%, rgba(253,139,173,1) 100%)",
        "linear-gradient(0deg, rgba(69,235,113,1) 0%, rgba(180,255,113,1) 100%)",
        "linear-gradient(0deg, rgba(92,208,221,1) 0%, rgba(102,180,244,1) 100%)",
        "linear-gradient(0deg, rgba(115,218,77,1) 0%, rgba(118,239,146,1) 100%)",
        "linear-gradient(0deg, rgba(245,167,131,1) 0%, rgba(244,201,122,1) 100%)",
        "linear-gradient(0deg, rgba(248,118,224,1) 0%, rgba(253,139,173,1) 100%)",
        "linear-gradient(0deg, rgba(69,235,113,1) 0%, rgba(180,255,113,1) 100%)",
    ]);
    let dimension = useSelector(state => {
        return state.dimension;
    });
    const classes = useStyle();
    const [quizzes, setQuizzes] = useState([])
    const handleClick = (e, data) => {
        dispatch(setQuiz(data))
    }
    useEffect(() => {
        axios.get(`https://tame-rose-clownfish-ring.cyclic.app/api/v1/quizzes/dimension/${dimension}`, { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
            .then(function (response) {
                console.log(response)
                response.data.data.forEach((element, index) => {
                    setQuizzes(quizzes => [...quizzes,
                    <ButtonBase listId={element._id} key={element._id} className={classes.button} onClick={((e) => handleClick(e, element._id))} component={Link} to="/quizzes/dimension/quiz">
                        <div style={{ background: colors[index] }} className={classes.iconWrapper}>
                            <img className={classes.quizIcon} src={`${element.quizIcon}`} alt={element.quizCategory} />
                        </div>
                        <p className={classes.buttonCaption}>{element.quizCategory}</p>
                    </ButtonBase>])
                });
            })
            .catch(function (error) {
                console.log(error);
                if (error.response.status === 401) {
                    localStorage.removeItem('jwt')
                }
            })
    }, []);

    return (
        <Box className={classes.quizzesWrapper}>
            {quizzes}
        </Box>
    )
}

export default Quizzes;