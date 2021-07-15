import React, { useEffect, useState } from 'react';
import { Box, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import axios from 'axios';

const useStyle = makeStyles({
    resultWrapper: {
        height: 150,
        width: 25,
        padding: 4,
        borderRadius: 20,
        boxShadow: "inset 0 0 6px 3px #00000029",
        position: "relative",
        marginBottom: 14
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
    },
    result: {
        margin: 20,
        textAlign: 'center',
        marginBottom: 40
    },
    resultDesc: {
        textAlign: 'center'
    }
});

const QuizEval = () => {
    const classes = useStyle();
    const [answers, setAnswers] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    let quiz = useSelector(state => {
        return state.quiz;
    });
    const user = localStorage.getItem('userid')
    const token = `bearer ${localStorage.getItem('jwt')}`
    useEffect(() => {
        axios.get(`http://api.hamyarwellness.com/api/v1/quiz/results/?user=${user}&quiz=${quiz}`,
            { headers: { 'Authorization': token } },
        )
            .then(res => {
                console.log(res.data.data[res.data.data.length-1].created_at)
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
            })
    }, [])
    return (
        <Box>
            <Box className={classes.resultDesc}>
                <h4 style={{ color: "#526699", margin: 20 }}>معرفی مسیر عشق و مسئولیت پذیری در قبال خود</h4>
                <p style={{ color: "#7987a1" }}>تاریخ انجام آزمون: 31 اسفند 1399</p>
                <p style={{ color: "#7987a1", marginBottom: 20 }}>ساعت انجام آزمون: 23:04:15</p>
            </Box>
            <Divider variant="middle" />
            <Box className={classes.resultsContainer}>
                {answers.map((data, index) => (
                    <Box className={classes.result}>
                        <div className={classes.resultWrapper}>
                            <div className={classes.resultFiller} style={{ height: data * 10 + "%" }}></div>
                        </div>
                        <p>گزینه {index + 1}</p>
                        <p> {data * 10 + "٪"}</p>
                    </Box>
                ))}

                {/* <Box className={classes.result}>
                    <div className={classes.resultWrapper}>
                        <div className={classes.resultFiller} style={{height:"80%"}}></div>
                    </div>
                    <p>گزینه 1</p>
                    <p>90٪</p>
                </Box>
                <Box className={classes.result}>
                    <div className={classes.resultWrapper}>
                        <div className={classes.resultFiller} style={{height:"80%"}}></div>
                    </div>
                    <p>گزینه 1</p>
                    <p>90٪</p>
                </Box>
                <Box className={classes.result}>
                    <div className={classes.resultWrapper}>
                        <div className={classes.resultFiller} style={{height:"80%"}}></div>
                    </div>
                    <p>گزینه 1</p>
                    <p>90٪</p>
                </Box>
                <Box className={classes.result}>
                    <div className={classes.resultWrapper}>
                        <div className={classes.resultFiller} style={{height:"80%"}}></div>
                    </div>
                    <p>گزینه 1</p>
                    <p>90٪</p>
                </Box>
                <Box className={classes.result}>
                    <div className={classes.resultWrapper}>
                        <div className={classes.resultFiller} style={{height:"80%"}}></div>
                    </div>
                    <p>گزینه 1</p>
                    <p>90٪</p>
                </Box>
                <Box className={classes.result}>
                    <div className={classes.resultWrapper}>
                        <div className={classes.resultFiller} style={{height:"80%"}}></div>
                    </div>
                    <p>گزینه 1</p>
                    <p>90٪</p>
                </Box> */}
            </Box>

        </Box>
    )
}

export default QuizEval;