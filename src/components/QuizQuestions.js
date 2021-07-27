import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Slider, ButtonBase } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        width: 300,
        margin: "10px auto",
        textAlign: 'center',
    },
    button: {
        fontSize: "1.3em",
        color: "#fff",
        backgroundColor: "#082464",
        padding: 5,
        width: 250,
        borderRadius: 10
    }
});

const QuizQuestion = () => {
    const classes = useStyles();
    const [level, setLevel] = useState(1);
    const [questions, setQustions] = useState([]);
    const [questionTitle, setQustionTitle] = useState("");
    const [answer, setAnswer] = useState(5);
    const [answers, setAnswers] = useState([]);
    const [buttonText, setButtonText] = useState("مرحله بعد");
    let quiz = useSelector(state => {
        return state.quiz;
    });
    const handleClick = () => {
        setAnswers( [...answers, answer]);
        setLevel(level + 1)
        
    }
    useEffect(() => {
        if (answers.length === 10) {
            const body = {
                "quiz": quiz,
                "user": localStorage.getItem('userid'),
                "answers": answers
            };
            console.log(body)
            axios.post('https://api.hamyarwellness.com/api/v1/quiz/results/',
                body,
                { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } },

            )
                .then(response => {
                    console.log(response)
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 401) {
                        localStorage.removeItem('jwt')
                    }
                })
        }
    }, [answers, quiz])
    useEffect(() => {
        axios.get(`https://api.hamyarwellness.com/api/v1/quizzes/${quiz}`, { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } })
            .then(function (response) {
                setQustions(response.data.data[0].questions);
                questions.forEach(element => {
                    if (element.level === level) {
                        setQustionTitle(element.questionTitle)
                    }
                });
            })
            .catch(function (error) {
                console.log(error);
                if (error.response.status === 401) {
                    localStorage.removeItem('jwt')
                }
            })
    }, [])
    useEffect(() => {
        questions.forEach(element => {
            if (element.level === level) {
                setQustionTitle(element.questionTitle)
            }
        });
        (level >= 10) ? setButtonText("ارسال نتایج") : setButtonText("مرحله بعد")
    }, [level, questions,])
    return (
        <div className={classes.root}>
            <h2>{questionTitle}</h2>
            <Slider
                defaultValue={5}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                value={answer}
                onChange={(event, newValue) => setAnswer(newValue)}
                marks
                min={1}
                max={10}
            />
            <ButtonBase onClick={handleClick} className={classes.button}>{buttonText}</ButtonBase>
        </div>
    )
}

export default QuizQuestion;