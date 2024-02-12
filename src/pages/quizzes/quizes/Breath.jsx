import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, Button } from '@mui/material';
import ArrowBack from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom';
import ArrowForward from '@material-ui/icons/ArrowForward';



const useStyles = makeStyles({
    container: {
        padding: '2rem',
        height: '90%',
    },
    accordion: {

    },
    gradientLine: {
        height: '1px',
        width: '100%',
        border: "none",
        background: 'linear-gradient(to right, transparent, black, transparent)',
    },
    breathCounter: {
        top: 10,
        width: "100%",
        border: "1px solid #2d93ad",
    },
    progressBar: {
        width: '100%',
        height: '.5rem',
    },
    textWrapper: {
        overflow: 'auto',
        margin: '3rem 0',
    },
    quizText: {
        fontSize: '1.2rem',
        textAlign: 'justify',
        fontWeight: 'bold',
        marginBottom: '1rem',
    },
    option: {
        width: '100%',
        maxWidth: '300px',
        margin: '0.2rem auto',
        padding: '0.5rem',
        border: '2px solid #2d93ad',
        backgroundColor: 'transparent',
    },
    buttonWrapepr: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row-reverse"
    },
    button: {
        backgroundColor: 'transparent',
        padding: '0.5rem',
        fontSize: '1rem',
        border: 'none',
        cursor: 'pointer',
    },
    icon: {
        width: '60px',
        margin: '0.5rem',
    },
    circle: {
        width: 200,
        height: 200,
        margin: "0 auto",
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)',
        // border:"1px solid black",
        animation: '$shrink 60s linear forwards',
    },
    '@keyframes shrink': {
        '0%': {
            transform: 'scale(1)',
        },
        '100%': {
            transform: 'scale(0)',
        },
    },
});


const FirstStatus = ({ status }) => {
    const classes = useStyles();
    if (status === "crit") {
        return (
            <p className={classes.quizText}>با توجه به اینکه تنفس شما در محدوده مناسب نیست، برای جلوگیری از آسیب های جسمانی با پشتیبان ما در تماس باشید.
                در صورت داشتن علائمی از قبیل تب، سوزش گلو یا درد در ناحیه سینه هم می توانید با پشتیبان ارتباط برقرار کنید.</p>
        )
    } else if (status === "higher") {
        return (
            <p className={classes.quizText}>تعداد تنفس شما از استاندارد بیشتر است و توصیه می شود از تکنیک های زیر استفاده کنید.</p>
        )
    } else if (status === "standart") {
        return (
            <p className={classes.quizText}>تنفس شما در محدوده استاندارد است. با این حال، در صورت تمایل می توانید در ادامه با تعدادی از تکنیک های تنفسی آشنا شوید.</p>
        )
    } else {
        return (
            <p className={classes.quizText}>تعداد تنفس شما از استاندارد کم تر است و توصیه می شود داز تکنیک های زیر استفاده کنید.</p>
        )
    }

}

const SecondStatus = ({ status }) => {
    const classes = useStyles();
    if (status === "crit") {
        return (
            <p className={classes.quizText}>تکنیک خواب:

                با استفاده از این تکنیک و شروع آن قبل از خواب، می توان تغییر مثبتی در روند خواب مشاهده کرد.</p>
        )
    } else if (status === "higher") {
        return (
            <p className={classes.quizText}>تکنیک آرامشبخش:

                با استفاده از این تکنیک، به علت کاهش ضربان قلب و فشار خون، استرس کم شده و ذهن به آرامش می رسد.</p>
        )
    } else if (status === "standart") {
        return (
            <p className={classes.quizText}>تکنیک بازیابی انرژی:

                با استفاده از این تکنیک، می توان تمرکز را افزایش داد و باعث افزایش عملکرد کلی بدن شد.</p>
        )
    } else {
        return (
            <p className={classes.quizText}>تکنیک کاهش درد:

                استفاده از این تکنیک، می تواند در کاهش سردرد یا دردهای عضلانی موثر باشد.</p>
        )
    }
}

const ThirdStatus = ({ status }) => {
    const classes = useStyles();
    if (status === "crit") {
        return (
            <p className={classes.quizText}>
                به مدت 152 ثانیه از این تکنیک استفاده کنید. ابتدا برای 4 ثانیه دم (از بینی)، 7 ثانیه حبس کردن نفس و بعد برای 8 ثاتیه بازدم (از دهان) انجام شود. این کار برای 8 بار متناوبا تکرار شود.

            </p>
        )
    } else if (status === "higher") {
        return (
            <p className={classes.quizText}>
                به مدت 60 ثانیه از این تکنک استفاده کنید. ابتدا برای 4 ثانیه دم (از بینی) و بعد برای 6 ثاتیه  بازدم (از دهان) انجام شود. این کار برای 5 بار متناوبا تکرار شود.

            </p>
        )
    } else if (status === "standart") {
        return (
            <p className={classes.quizText}>به مدت 80 ثانیه از این تکنیک استفاده کنید. برای 4 ثانیه دم (از بینی)، بعد برای 4 ثانیه حبس کردن نفس، 4 ثاتیه بازدم (از دهان) و در آخر مجددا 4 ثانیه حبس کردن نفس انجام شود. این کار برای 5 بار متناوبا تکرار شود.

            </p>
        )
    } else {
        return (
            <p className={classes.quizText}>
                به مدت 70 ثانیه از این تکنیک استفاده کنید. ابتدا برای 4 ثانیه دم (از بینی)، 4 ثانیه حبس کردن نفس و بعد برای 6 ثاتیه بازدم (از دهان) انجام شود. این کار برای 5 بار متناوبا تکرار شود.

            </p>
        )
    }
}



const Breath = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(null);
    const [start, setStart] = useState(false);
    const [breathCounter, setBreathCounter] = useState(0);
    const [selected, setSelected] = useState([]);

    const handleCounter = () => {
        setBreathCounter(breathCounter + 1)
    }

    const questions = [
        {
            text: 'علیرغم اینکه در نوزادان و کودکان تعداد تنفس های انجام شده در یک بازه مشخص در سنین مختلف متفاوت است، بزرگسالان تقریبا نرخ تنفسی یکسانی دارند.',
            options: [],
        },
        {
            text: 'برای درک بهتر وضعیت تنفسی خود، مواردی را که در مورد شما صادق است مشخص کنید: (حداکثر امکان انتخاب 3 گزینه وحود دارد.)',
            options: ['مشکل خواب', 'احساس اضطراب ', 'مشکلات عاطفی', 'مشکلات سلامتی', 'مشکلات مالی', 'درگیر بودن با چالش های زیاد در زندگی'],
        },
        {
            text: 'در این مرحله، به ازای هر دم و بازدم، 1 بار روی دکمه کلیک کنید تا میزان تنفس شما در یک دقیقه تعین شود.   توجه کنید که دم و بازدم شما باید در محیطی آرام، به دور از استرس و به شکل همیشگی صورت بگیرد.  ',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: 'در این قسمت در صورت تمایل و در دسترس بودن دستگاه پالس اوکسیمتر، درصد اکسیژن خون را انداره گیری و وارد کنید.',
            options: ["کم تر از ۹۵ درصد", "۹۵- ۱۰۰ %"],
        },
        {
            text: '',
            options: [],
        },

        // Add more questions here
    ];

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
    };

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedValue(null);
        handleAnswer(selectedValue);
    };

    const handlePrev = () => {
        setCurrentQuestion(currentQuestion - 1);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const handleOptionChange = (event) => {
        if (event.target.checked) {
            if (selected.length < 3) {
                setSelected([...selected, event.target.name]);
            }
        } else {
            setSelected(selected.filter(item => item !== event.target.name));
        }
    };

    return (
        <div className={classes.container}>
            <progress className={classes.progressBar} value={currentQuestion} max={questions.length}></progress>
            {currentQuestion < questions.length ? (
                <Box display="flex" flexDirection="column" height="90%" justifyContent="space-between" >
                    <div className={classes.textWrapper}>
                        <p className={classes.quizText}>{questions[currentQuestion].text}</p>

                        {(currentQuestion === 2) && (
                            <>
                                <div className={classes.circle} />
                                <Button className={classes.breathCounter} onClick={handleCounter} variant='outlined'>تنفس</Button>
                            </>
                        )}
                        {(currentQuestion === 3) && (
                            <FirstStatus status={(breathCounter > 24 || breathCounter < 10) ? "crit" : (21 < breathCounter < 24) ? "higher" : (12 < breathCounter < 20) ? "standart" : "lower"} />
                        )}
                        {(currentQuestion === 4) && (
                            <SecondStatus status={(breathCounter > 24 || breathCounter < 10) ? "crit" : (21 < breathCounter < 24) ? "higher" : (12 < breathCounter < 20) ? "standart" : "lower"} />
                        )}
                        {(currentQuestion === 5) && (
                            <ThirdStatus status={(breathCounter > 24 || breathCounter < 10) ? "crit" : (21 < breathCounter < 24) ? "higher" : (12 < breathCounter < 20) ? "standart" : "lower"} />
                        )}
                        {(currentQuestion === 7 && answers[6] == 0) && (
                            <p className={classes.quizText}>در صورت داشتن علائمی مثل تنگی نفس، سرگیجه و طپش قلب، ابتدا به محیطی با هوای تازه رفته و برای جلوگیری از آسیب های احتمالی با پشتیبان در تماس باشید</p>
                        )}
                        {(currentQuestion === 7 && answers[6] == 1) && (
                            <p className={classes.quizText}>اکسیژن خون شما در ناحیه استاندارد قرار دارد</p>
                        )}
                        {(currentQuestion === 7 && answers[6] == null) && (
                            <p className={classes.quizText}>در ادامه به شما برنامه های مفیدی معرفی خواهد شد</p>
                        )}

                        <FormControl component="fieldset" style={{ width: "100%" }}>
                            <RadioGroup
                                value={selectedValue}
                                onChange={handleChange}
                                style={{ display: 'grid', justifyContent: 'center', listStyle: 'none', width: "100%" }}
                            >
                                {questions[currentQuestion].options.map((option, index) => (
                                    <>
                                        {(currentQuestion === 1) ? (
                                            <FormControlLabel
                                                key={option}
                                                control={
                                                    <Checkbox
                                                        checked={selected.includes(option)}
                                                        onChange={handleOptionChange}
                                                        name={option}
                                                    />
                                                }
                                                label={option}
                                            />
                                        ) : <FormControlLabel value={index} control={<Radio />} label={option} />}
                                        <hr className={classes.gradientLine} />
                                    </>
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div className={classes.buttonWrapepr}>
                        <button className={classes.button} onClick={handleNext}
                            style={currentQuestion > 0 ? { borderRadius: '10px 0px 0px 10px', } : { borderRadius: '10px 10px 10px 10px', }}
                        >مرحله بعد
                            <ArrowBack style={{ position: "relative", top: 8 }} />
                        </button>
                        {currentQuestion > 0 && <button className={classes.button} style={{
                            borderRadius: '0px 10px 10px 0px',
                        }} onClick={handlePrev}>
                            <ArrowForward style={{ position: "relative", top: 8 }} />
                            مرحله قبل</button>}

                    </div>
                </Box >
            ) : (
                <div>
                    <p>در صورت تمایل میتواند از برنامه های زیر هم برای اطلاع از تعداد تنفس خود و تکنیک های بهبود آن استفاده کنید:
                    </p>
                    <p>
                        <img className={classes.icon} src="https://pbs.twimg.com/profile_images/634467754922405888/2c68N0G4_400x400.png" alt="Medtimer" />
                        <img className={classes.icon} src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/23/9e/02/239e025b-aecc-5ec2-9957-6aab9b1bd300/AppIcon-1x_U007emarketing-0-7-0-85-220.png/60x60bb.jpg" alt="Lungfully" />

                    </p>
                    <Button component={Link} to="/quizzes"  type='button' variant='contained' style={{ margin: "20px auto 80px" }}>بازگشت</Button>
                </div>
            )}
        </div >
    );
};

export default Breath;
