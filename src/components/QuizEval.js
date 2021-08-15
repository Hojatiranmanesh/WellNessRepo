import React, { useEffect, useState } from 'react';
import { Box, Divider, Snackbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import axios from 'axios';
import persianDate from 'persian-date';
import MuiAlert from '@material-ui/lab/Alert';

const useStyle = makeStyles({
    resultWrapper: {
        height: 150,
        width: 25,
        padding: 4,
        borderRadius: 20,
        boxShadow: "inset 0 0 6px 3px #00000029",
        position: "relative",
        marginBottom: 14,
        margin: "0 auto"
    },
    resultFiller: {
        background: "linear-gradient(0deg, rgba(253,139,173,1) 0%, rgba(248,118,224,1) 100%)",
        borderRadius: 20,
        position: "absolute",
        bottom: 5,
        right: 3.3,
        width: 26
    },
    resultsContainer: {
        display: "flex",
        flexWrap: 'wrap',
        width: 500,
        maxWidth: "88vw",
        margin: "0 auto",
        justifyContent: "center",
        marginTop: 10
    },
    result: {
        textAlign: 'center',
        marginBottom: 40,
        width: "20%"
    },
    resultDesc: {
        textAlign: 'center'
    }
});

const QuizEval = () => {
    const classes = useStyle();
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    const [colors, setColors] = useState([
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
    const [date, setDate] = useState();
    const [time, setTime] = useState();
    const [openSnack, setOpenSnack] = React.useState(false);
    const [snackType, setSnackType] = React.useState("");
    const [name, setName] = React.useState("");
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
    const user = localStorage.getItem('userid')
    const token = `bearer ${localStorage.getItem('jwt')}`
    useEffect(() => {
        axios.get(`https://api.hamyarwellness.com/api/v1/quiz/results/?user=${user}&quiz=${quiz}`,
            { headers: { 'Authorization': token } },
        )
            .then(res => {
                console.log(res.data.data)
                setDate(new persianDate(res.data.data[res.data.data.length - 1].created_at).format("D MMMM YYYY"))
                setTime(new persianDate(res.data.data[res.data.data.length - 1].created_at).format("H:m:s"))
                setName(res.data.data[res.data.data.length - 1].quiz.quizTitle);
                let array = [];
                answers.forEach((answer, index) => {
                    let score = 0;
                    res.data.data.forEach(quiz => {
                        score += quiz.answers[index]
                    });
                    array[index] = score / res.data.data.length
                });
                setAnswers(array)
            })
            .catch(err => {
                console.log(err)
                setSnackType("error")
                setSnackMessage("خطا در سرور")
                setOpenSnack(true)
                if (err.response.status === 401) {
                    localStorage.removeItem('jwt')
                }
            })
    }, [])
    return (
        <Box>
            <Box className={classes.resultDesc}>
                <h4 style={{ color: "#526699", margin: 20 }}>{name}</h4>
                <p style={{ color: "#7987a1" }}>تاریخ انجام آزمون: {date}</p>
                <p style={{ color: "#7987a1", marginBottom: 20 }}>ساعت انجام آزمون: {time}</p>
            </Box>
            <Divider variant="middle" />
            <Box className={classes.resultsContainer}>
                {answers.map((data, index) => (
                    <Box className={classes.result}>
                        <div className={classes.resultWrapper}>
                            <div className={classes.resultFiller}
                                style={{
                                    height: data * 10 + "%",
                                    background: colors[index]
                                }}
                            >

                            </div>
                        </div>
                        <p>گزینه {index + 1}</p>
                        <p> {data * 10 + "٪"}</p>
                    </Box>
                ))}
            </Box>
            <Snackbar open={openSnack} autoHideDuration={6000} onClose={handleCloseSnack}>
                <Alert onClose={handleCloseSnack} severity={snackType}>
                    {snackMessage}
                </Alert>
            </Snackbar>
        </Box>
    )
}

export default QuizEval;