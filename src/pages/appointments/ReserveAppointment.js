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
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    buttonWrapper: {
        display: "flex",
        justifyContent: "center",
        width: '100%',
        marginTop: 20

    },
    button: {
        margin: "0 auto",
        width: 300,
        borderRadius: 10
    },
    instructions: {
        textAlign: "center",
    },
    topDesc: {
        textAlign: "center",
        marginBottom: 30,
        paddingTop: 60

    },
    descRoot: {
        color: "#68c7f5",
        fontWeight: "bold",
        fontSize: "1.3em"
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

    const getStepContent = (step) => {
        switch (step) {
            case 0:
                return <First setDay={(day) => setDay(day)} />;
            case 1:
                return <Second setDuration={(duration) => setDuration(duration)} />;
            case 2:
                return <Third setHour={(hour) => setHour(hour)} />;
            case 3:
                return <Final day={day} duration={duration} hour={hour} setDesc={(desc) => setDesc(desc)} />;
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
            axios.post('http://api.hamyarwellness.com/api/v1/appointments', body, header)
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
            <Header component={(activeStep === 0) ? "link" : "function"} to={(activeStep === 0) ? "/appointments" : handleBack} />
            <Step >
                <StepLabel classes={{ label: classes.descRoot }} className={classes.topDesc}>{myStep(activeStep)}{steps[activeStep]}</StepLabel>
            </Step>
            <div>

                <div>
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