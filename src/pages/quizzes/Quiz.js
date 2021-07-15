import React, { useState } from 'react';
import Header from '../../components/Header';
import { Box, Tabs, Tab } from '@material-ui/core';
import NewQuizTab from '../../components/NewQuizTab';
import QuizEval from '../../components/QuizEval';
import { makeStyles } from "@material-ui/core/styles";
import { Doughnut } from 'react-chartjs-2';
import QuizQuestion from '../../components/QuizQuestions';


const useStyle = makeStyles({
    wiw: {
        textAlign: 'center',
        direction: "rtl",
    },
    readMore: {
        textAlign: 'center',
        direction: "rtl",
        textDecoration: 'underline',
        textDecorationStyle: 'dotted',
    },

    tabRoot: {
        color: "#08afe4",
        fontWeight: "Bold",
        fontSize: '1.1em',
    },
    performanceWraper: {
        display: 'flex',
        flexDirection: "row-reverse",
    },
    preformanceReport: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        direction: 'rtl',
        padding: 10
    },
    preformCaption: {
        fontWeight: 'bold'
    },
    performScore: {
        color: "#65c7f4"
    },
});


const Quiz = () => {

    const [selectedTab, setSelectedTab] = useState(0);

    const [testStart, setTestStart] = useState(false);
    const classes = useStyle();
    const handleChange = (event, newValue) => {
        setSelectedTab(newValue)
    }
    const data = {
        datasets: [
            {
                label: '# of Votes',
                data: [40, 60],
                backgroundColor: [
                    'rgba(255, 99, 132)',
                    'rgba(54, 162, 235)',
                ],
            },
        ],
    };
    const plugins = [{
        beforeDraw: function (chart) {
            var width = chart.width,
                height = chart.height,
                ctx = chart.ctx;
            ctx.restore();
            var fontSize = (height / 160).toFixed(2);
            ctx.font = fontSize + "em sans-serif";
            ctx.textBaseline = "top";
            var text = data.datasets[0].data[0] + "%",
                textX = Math.round((width - ctx.measureText(text).width) / 2),
                textY = height / 2;
            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    }]
    return (
        <>
            <Box>
                <Header />
                <Box className={classes.performanceWraper}>
                    <Box>
                        <Doughnut data={data} width={200} height={100} plugins={plugins} />
                    </Box>
                    <Box className={classes.preformanceReport}>
                        <p className={classes.preformCaption}>Your Performance</p>
                        <h2 className={classes.performScore}>Good</h2>
                    </Box>
                </Box>

                <Tabs TabIndicatorProps={{
                    style: {
                        backgroundColor: "#08afe4"
                    }
                }} centered value={selectedTab} onChange={handleChange}>
                    <Tab classes={{ root: classes.tabRoot }} label="ارزیابی جدید" />
                    <Tab classes={{ root: classes.tabRoot }} label="تحلیل ارزیابی‌های پیشین" />
                </Tabs>
                {selectedTab === 0 && (testStart ? <QuizQuestion /> : <NewQuizTab onStart={() => { setTestStart(true) }} />)}
                {selectedTab === 1 && <QuizEval />}
            </Box>
        </>
    )

}

export default Quiz;