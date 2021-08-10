import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import { Slider, ButtonBase, Modal } from '@material-ui/core';

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
    },
    paper: {
        height: 410,
        backgroundColor: "#fff",
        maxWidth: "80%",
        width: 400,
        overflow: "scroll",
        padding: 30,
        margin: "60px auto",
        textAlign: "justify"
    },
    readMore: {
        fontSize:"1em",
        color:"#59a8ff",
        marginTop:10,
        textDecoration:"underline"
    }
});

const QuizQuestion = () => {
    const classes = useStyles();
    const [level, setLevel] = useState(1);
    const [questions, setQustions] = useState([]);
    const [questionTitle, setQustionTitle] = useState("");
    const [questionDesc, setQustionDesc] = useState("");
    const [answer, setAnswer] = useState(5);
    const [answers, setAnswers] = useState([]);
    const [buttonText, setButtonText] = useState("مرحله بعد");
    const [open, setOpen] = useState(false);

    let quiz = useSelector(state => {
        return state.quiz;
    });
    const handleClick = () => {
        setAnswers([...answers, answer]);
        setLevel(level + 1)
    }

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
                        setQustionDesc(element.questionDescription)
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
                setQustionDesc(element.questionDescription)
            }
        });
        (level >= 10) ? setButtonText("ارسال نتایج") : setButtonText("مرحله بعد")
    }, [level, questions,])

    const body = (
        <div className={classes.paper}>
            <h3 id="simple-modal-title">{questionTitle}</h3>
            <p id="simple-modal-description">
                {questionDesc}
            </p>
        </div>
    );

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
            <ButtonBase className={classes.readMore} type="button" onClick={handleOpen}>
                توضیحات بیشتر
            </ButtonBase>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    )
}

export default QuizQuestion;