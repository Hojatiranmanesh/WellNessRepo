import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../../components/Header';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import First from '../../components/appointments/steps/First';
import Second from '../../components/appointments/steps/Second';
import Third from '../../components/appointments/steps/Third';
import Final from '../../components/appointments/steps/Final';
import FontSize from '../../components/FontSize';
import { useSelector } from 'react-redux';

import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        width: '100%',
        paddingTop: 20
    },
    button: {
        width: 289,
        height: 57,
        margin: 15,
        borderRadius: 15,
        background: "linear-gradient(126deg, rgba(73,94,149,1) 0%, rgba(87,108,164,1) 100%)",
        fontSize: FontSize(1.1),
        boxShadow: "-7px 6px 13px #a6a6a6b8, 7px -8px 20px 0px #ffffffd1",
        fontWeight: "bold",
    },
    instructions: {
        textAlign: "center",
    },
    topDesc: {
        textAlign: "center",
        paddingTop: 90,
        paddingBottom: 26,
        backgroundColor: "#c4dffaad",

    },
    descRoot: {
        color: "#68c7f5",
        fontWeight: "bold",
        fontSize: FontSize(1.3)
    }
}));

function getSteps() {
    return ['ثبت تاریخ مورد نظر', 'ثبت زمان مشاوره', 'ثبت ساعت مورد نظر', 'ثبت نهایی مشاوره'];
}

const myStep = (step) => {
    switch (step) {
        case 0:
            return 'مرحله اول ';
        case 1:
            return 'مرحله دوم ';
        case 2:
            return 'مرحله سوم ';
        case 3:
            return '';
        default:
            return 'Unknown step';
    }
}

const ReserveAppointment = () => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [day, setDay] = useState();
    const [duration, setDuration] = useState();
    const [hour, setHour] = useState();
    const [desc, setDesc] = useState();
    const steps = getSteps();
    const resType = useSelector(state => {
        return state.resType;
    });

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <First setDay={(day) => setDay(day)} />;
            case 1:
                return <Second setDuration={(duration) => setDuration(duration)} />;
            case 2:
                return <Third setHour={(hour) => setHour(hour)} />;
            case 3:
                return <Final day={day} duration={duration} hour={hour} setDesc={(desc) => setDesc(desc)} resType={resType} />;
            default:
                return 'Unknown step';
        }
    };

    const handleNext = () => {
        if (activeStep < 3) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        } else {
            let nextDay = new Date();
            nextDay.setDate(nextDay.getDate() + 1);
            const body = {
                "date": nextDay,
                "time": hour,
                "length": duration,
                "description": desc,
            }
            const header = { headers: { 'Authorization': `bearer ${localStorage.getItem('jwt')}` } }
            axios.post('https://api.hamyarwellness.com/api/v1/appointments', body, header)
                .then(res => {
                    console.log(res)
                })
                .catch(err => {
                    console.log(err)
                    if (err.response.status === 401) {
                        localStorage.removeItem('jwt')
                    }
                })
        }
    };

    // const backButton = () => {
    //     if (activeStep === 0) {
    //         return (<Header component="link" to={"/appointments"} />)
    //     } else {
    //         <Header component="function" to={handleBack} />
    //     }
    // }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    return (
        <div className={classes.root}>

            <Step style={{ height: 130, }}>
                <Header component={(activeStep === 0) ? "link" : "function"} to={(activeStep === 0) ? "/appointments" : handleBack} />

                <StepLabel classes={{ label: classes.descRoot }} className={classes.topDesc}>{myStep(activeStep)}{steps[activeStep]}</StepLabel>
            </Step>
            <div>
                <div style={{ paddingTop: 50 }}>
                    <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                    <div className={classes.buttonWrapper}>
                        {/* <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                Back
                            </Button> */}

                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleNext}
                            className={classes.button}
                        >
                            {activeStep === steps.length - 1 ? 'ثبت و پرداخت' : 'مرحله بعد'}
                        </Button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ReserveAppointment;