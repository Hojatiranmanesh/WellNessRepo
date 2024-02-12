import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Box, Radio, RadioGroup, FormControlLabel, FormControl, Checkbox, Button } from '@mui/material';
import {Link} from 'react-router-dom';
import ArrowBack from '@material-ui/icons/ArrowBack';
import ArrowForward from '@material-ui/icons/ArrowForward';



const useStyles = makeStyles({
    container: {
        padding: '2rem',
        height: '90%',
    },
    iconImage: {
        width: '75px',
        margin: '0.5rem',
    },
    gradientLine: {
        height: '1px',
        width: '100%',
        border: "none",
        background: 'linear-gradient(to right, transparent, black, transparent)',
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
});


const GradeAnswer = ({ grade }) => {
    const classes = useStyles();
    if (0 < grade < 6) {
        return (
            <p className={classes.quizText}>وضعیت خواب شما مناسب و قابل قبول است.</p>
        )
    } else if (7 < grade < 12) {
        return (
            <p className={classes.quizText}>در زمینه خواب نیاز به تقویت دارید و می توانید با به کارگیری روش های مراحل بعدی،به سطح مطلوب برسید.</p>
        )
    } else {
        return (
            <p className={classes.quizText}>وضعیت خواب شما مطلوب نیست و پیشنهاد می شود از راهنمایی های مراحل بعدی برای بهبود آن استفاده کنید.</p>
        )
    }

}

const Movement = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const classes = useStyles();
    const [selectedValue, setSelectedValue] = useState(null);
    const [selected, setSelected] = useState([]);
    const [grade, setGrade] = useState(0);




    const questions = [
        {
            text: 'در حالت کلی، بدن انسان نیاز به 8-7 ساعت خواب دارد. البته باید توجه داشت که عوامل زیادی از جمله ژنتیک بر خواب تاثیر دارند و نیازهای هر فرد با دیگری متفاوت است. ',
            options: [],
        },
        {
            text: 'برای آنالیز خواب و بررسی اتفاقات در این بازه، نیاز به گوشی/ساعت هوشمند یا وسایل و تجهیزاتی خاص در این زمینه است.             در صورت نیاز می توانید از نرم افزارهای زیر استفاده کنید. البته وسیله هوشمند در کل طول خواب باید در نزدیکی شما باشد.',
            options: [],
        },
        {
            text: 'برای درک بهتر وضعیت خواب خود، مشخص کنید که کدام یک از مشکلات زیر را دارد: (حداکثر انتخاب 3 گزینه ممکن است.)',
            options: ["بیدار شدن در نیمه شب", "زمان طولانی بین تصمیم به خواب و به خواب رفتن  ", "مشکلات تنفسی و خر و پف", "پایین بودن سطح انرژی در طول روز", "خستگی و خواب آلودگی زیاد هنگام بیدار شدن", "راه رفتن یا صحبت کردن در خواب", "افتادن از تخت", "رویاهای ناخوشایند"],
        },
        {
            text: 'در ادامه جملات و عبارت هایی نمایش داده می شوند که اطلاع از پاسخ های شما به آن ها، ارزیابی اولیه ای مفیدی از وضعیت خواب شما به دست می دهد.',
            options: [],
        },
        {
            text: 'در طول روز استرس و اضطراب زیادی تجربه می کنم.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'قبل از خواب از نوشیدنی های حاوی کافئین مانند قهوه استفاده می کنم.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'نور محل خواب من زیاد است.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'قبل از خواب با گوشی یا لپ تاپ کار می کنم.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'مدتی قبل از خواب وعده غذایی اصلی و سنگین مصرف میکنم.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'دمای محیط خواب من بیش از حد گرم یا سرد است.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'بالشت و تشک خود را استاندارد و مناسب خوابی مطلوب ارزیابی نمی کنم.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'شغل من بیدار ماندن در شیفت شب را ایجاب می کند.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: 'قبل از خواب تحرک و فعالیت ورزشی شدید دارم.',
            options: ["اغلب صدق می کند", "گاهی/بعضی اوقات صدق می کند", "به ندرت صدق می کند"],
        },
        {
            text: '',
            options: [],
        },
        {
            text: 'راهکارهایی که در مراحل بعدی می آیند می توانند برای تمامی افراد مفید باشند ',
            options: [],
        },
        {
            text: 'برای بهبود وضعیت خواب، هر شب قبل از خواب از این تکنیک تنفسی استفاده کنید.',
            options: [],
        },
        {
            text: '            به مدت 152 ثانیه از این تکنیک استفاده کنید. ابتدا برای 4 ثانیه دم (از بینی)، 7 ثانیه حبس کردن نفس و بعد برای 8 ثاتیه بازدم (از دهان) انجام شود. این کار برای 8 بار متناوبا تکرار شود.',
            options: [],
        },
        {
            text: 'علاوه بر تکنیک مرحله قبل، با استفاده از نرم افزارهایی مانند White Noise Deep Sleep Sounds و White Noise Lite و گوش دادن هر شبه به صداهای آرامشبخش هم می توانید مسیر بهبود خواب خود را هموارتر کنید. ',
            options: [],
        },
        {
            text: 'بعد از اولین شبی که از یکی از نرم افزارها یا تجهیزات مخصوص پایش خواب استفاده کردید، اسکرین شاتی از نتایج و خروجی آن ها تهیه کرده و در محل پشتیبانی آنلاین بارگذاری کنید. بعد از آن منتظر تماس از جانب ما باشید.',
            options: [],
        },
        {
            text: 'با توجه به اینکه برای تحلیل فرآیند پیچیده ای مثل خواب احتیاج به گردآوری داده های بیشتری است، بعد از گذشت 5 روز، اسکرین شات مربوط به روزهای 2، 3، 4 و 5 را هم در محل تعیین شده بارگذاری کنید. ',
            options: [],
        },
        // Add more questions here
    ];

    const handleOptionChange = (event) => {
        if (event.target.checked) {
            if (selected.length < 3) {
                setSelected([...selected, event.target.name]);
            }
        } else {
            setSelected(selected.filter(item => item !== event.target.name));
        }
    };


    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
    };

    const handleNext = () => {
        if (questions[currentQuestion].options.length !== 0 && selectedValue === null) { } else {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedValue(null);
            handleAnswer(selectedValue);
            console.log(answers);
            let temp = 0;
            for (let i = 4; i <= 12; i++) {
                temp += parseInt(answers[i]);
                console.log(temp)
                setGrade(temp);
                console.log(grade, "grade")
            }
        }
    };

    const handlePrev = () => {
        setCurrentQuestion(currentQuestion - 1);
    };
    const handleChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className={classes.container}>
            <progress className={classes.progressBar} value={currentQuestion} max={questions.length}></progress>
            {currentQuestion < questions.length ? (
                <Box display="flex" flexDirection="column" height="90%" justifyContent="space-between" >
                    <div className={classes.textWrapper}>
                        <p className={classes.quizText}>{questions[currentQuestion].text}</p>
                        {(currentQuestion === 13) && (<GradeAnswer />)}
                        <FormControl component="fieldset" style={{ width: "100%" }}>
                            <RadioGroup
                                value={selectedValue}
                                onChange={handleChange}
                                style={{ display: 'grid', justifyContent: 'center', listStyle: 'none', width: "100%" }}
                            >
                                {questions[currentQuestion].options.map((option, index) => (
                                    <>
                                        {(currentQuestion === 2) ? (
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

                    <p>بعد از 5 روز استفاده از برنامه ها و تجهیزات و بارگذاری نتایج، برای راهنمایی و کسب اطلاعات دقیق تر در مورد وضعیت خواب خود با قسمت پشتیبانی در ارتباط باشید.
                    </p>
                    <Button component={Link} to="/quizzes" type='button' variant='contained' style={{ margin: "20px auto 80px" }}>بازگشت</Button>
                </div>
            )}
        </div >
    );
};

export default Movement;

