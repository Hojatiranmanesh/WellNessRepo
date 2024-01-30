import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles({
    container: {
        padding: '2rem',
    },
    progressBar: {
        width: '100%',
    },
    textWrapper: {
        overflow: 'auto',
        margin: '3rem 0',
    },
    quizText: {
        fontSize: '1.2rem',
        textAlign: 'justify',
    },
    option: {
        width: '100%',
        maxWidth: '300px',
        margin: '0.2rem auto',
        padding: '0.5rem',
        border: '2px solid #2d93ad',
        backgroundColor: 'transparent',
        "&:hover": {
            backgroundColor: '#2d93ad',
        }
    },
    buttonWrapepr: {
        display: 'flex',
        justifyContent: 'center',
    },
    button: {
        width: '100%',
        maxWidth: '200px',
        backgroundColor: '#2d93ad',
        color: 'white',
        padding: '0.5rem',
        fontSize: '1rem',
        fontWeight: 'bold',
        border: 'none',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
        '&:hover': {
            backgroundColor: 'gray',
        },
    },
});

const Nutrition = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const classes = useStyles();
    const [table1Rows, setTable1Rows] = useState([]);
    const [table2Rows, setTable2Rows] = useState([]);
    const [table3Rows, setTable3Rows] = useState([]);
    const [table4Rows, setTable4Rows] = useState([]);
    const [table5Rows, setTable5Rows] = useState([]);
    const [detailsInput, setDetailsInput] = useState([
        { time: '', food: '', calories: '' },
        { time: '', food: '', calories: '' },
        { time: '', food: '', calories: '' },
        { time: '', food: '', calories: '' },
        { time: '', food: '', calories: '' },
    ]);

    const handleAddRow1 = () => {
        const newRow = {
            time: detailsInput[0].time,
            food: detailsInput[0].food,
            calories: detailsInput[0].calories,
        };

        setTable1Rows([...table1Rows, newRow]);
        setDetailsInput([
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
        ]);
    };

    const handleAddRow2 = () => {
        const newRow = {
            time: detailsInput[1].time,
            food: detailsInput[1].food,
            calories: detailsInput[1].calories,
        };

        setTable2Rows([...table2Rows, newRow]);
        setDetailsInput([
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
        ]);
    }

    const handleAddRow3 = () => {
        const newRow = {
            time: detailsInput[2].time,
            food: detailsInput[2].food,
            calories: detailsInput[2].calories,
        };

        setTable3Rows([...table3Rows, newRow]);
        setDetailsInput([
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
        ]);
    }

    const handleAddRow4 = () => {
        const newRow = {
            time: detailsInput[3].time,
            food: detailsInput[3].food,
            calories: detailsInput[3].calories,
        };

        setTable4Rows([...table4Rows, newRow]);
        setDetailsInput([
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
        ]);
    }

    const handleAddRow5 = () => {
        const newRow = {
            time: detailsInput[4].time,
            food: detailsInput[4].food,
            calories: detailsInput[4].calories,
        };
        
        setTable5Rows([...table5Rows, newRow]);
        setDetailsInput([
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
            { time: '', food: '', calories: '' },
        ]);
    }

    const questions = [
        {
            text: 'مبحث تغذیه و انتخاب مسیر درست آن، اثر زیادی بر سلامت جسم، روح و عاطفه دارد. برای داشتن بدنی سالم, ورزش نقش مهمی بازی می کند ولی به تنهایی کافی نیست و نباید از اثرات مثبت تغذیه مناسب مانند کاهش خطر ابتلا به بیماری های قلبی، کاهش افسردگی، بهبود کیفیت خواب یا افزایش سطح انرژی بدن غافل شد.  ',
            options: [],
        },
        {
            text: 'لطفا قسمت زیر را تا حد امکان کامل کنید و  تا جایی که بخاطر دارید مواد غذایی مصرفی و مقدار آن ها را وارد کنید. برای این منظور، هم به وعده های غذایی اصلی، هم به میان وعده ها و هم به نوشیدنی ها توجه کنید. بعد از تکمیل این قسمت برای 5 روز، با قسمت پشتیبانی تماس برقرار کنید. توجه: در طول این 5 روز، هر زمان که احساس گرسنگی یا تشنگی به شما دست داد، مطابق میل خود و مانند روزهای گذشته از مواد غذایی و نوشیدنی استفاده کنید. در این مرحله نیازی به استفاده از هیچ رژیمی نیست و این روش دید بهتری از عادات غذایی شما را نمایش می دهد. اگر برای ساعات زیاد یا حتی 1 روز میل به غذا نداشتید، احتیاجی به خوردن چیزی نیست. ',
            options: [],
        },
        {
            text: '',
            options: [],
        },
        {
            text: 'به منظور درک جامع تری از وضعیت بدنی-ذهنی خود به 10 سوالی که در ادامه آورده شده اند پاسخ دهید. این اطلاعات در مورد یافتن تعادل در بدن شما کمک کننده خواهند بود.',
            options: [],
        },
        {
            text: 'فقط 1 گزینه که برای اکثر طول عمر شما (نه لزما شرایط فعلیتان) صادق است را انتخاب کند.',
            options: [],
        },
        {
            text: 'سوال 1: وضعیت و حالت بدنی خود را چگونه توصیف می کنید؟',
            options: ['باریک و کشیده', 'متوسط و دارای مقداری عضله', 'تنومند '],
        },
        {
            text: 'سوال 2: تغییرات وزن شما چگونه بوده است؟',
            options: ['افزایش وزن سخت', 'افزایش و کاهش وزن راحت', 'کاهش وزن سخت'],
        },
        {
            text: 'سوال 3: دمای بدن شما معمولا چگونه است؟',
            options: ['سرد و ترجیح به حضور در محیط گرم', 'گرم و ترجیح به حضور در محیط سرد', 'متعادل و قابل تطبیق با اکثر محیط ها'],
        },
        {
            text: 'سوال 4: اشتهای شما چگونه است؟',
            options: ['یکسان نیست و امکان از دست دادن وعده های غذایی وجود دارد', 'زیاد است و گرسنگی زیاد ممکن است باعث تغییر خلق شود', 'مناسب است و مدتی بعد از غذا احساس گرسنگی یا سنگینی وجود ندارد'],
        },
        {
            text: 'سوال 5: وضعیت انرژی شما چگونه است؟',
            options: ['شروع روز با انرژی زیاد و سپس کاهش آن', 'متوسط و با قابلیت ادامه دادن فعالیت ها در صورت نیاز', 'دارای تحمل زیاد و تجربه کم در کاهش انرژی'],
        },
        {
            text: 'سوال 6: وضعیت خواب خود را چگونه توصیف می کنید؟',
            options: ['خواب سبک', 'خواب کم در مقایسه با سایرین', 'خواب عمیق و طولانی'],
        },
        {
            text: 'سوال 7: کارهای روزمره خود را چگونه انجام می دهید؟',
            options: ['در لحظه و با توجه به حس آن لحظه', 'کاملا دقیق و پس از بررسی کامل', 'کند و گاهی همراه با دخالت دیگران'],
        },
        {
            text: 'سوال 9: غریزه و ذات خود را چگونه ارزیابی می کنید؟',
            options: ['با ذوق و میل به کسب تجارب جدید', 'با هدف و کاملا نتیجه محور', 'بدون سخت گیری و سوار بر جریان زندگی'],
        },
        {
            text: 'سوال 10: در مواجهه با استرس، چه رفتاری از خود نشان می دهید؟',
            options: ['مضطرب و نگران', 'غیرمنطقی و بدون صبر', 'بدون انگیزه و رها کردن مسائل'],
        },
        {
            text: 'با توجه به نتایج این سوالات، موارد زیر مشخص می شوند:(تحلیل این بخش در آینده ارائه خواهد شد) قدرت ذهنی، وضعیت جسمانی، وضعیت پوست، وضعیت مو، وضعیت اشتها، وضعیت برنامه ریزی، وضعیت خلقی، نحوه مکالمه و تعامل با سایرین، میل به خرید، توانایی تحمل اضطراب',
            options: [],
        },
        {
            text: 'در مراحل بعدی تعدادی از رژیم های غذایی مرسوم آورده شده اند. آشنایی بیش تر با مزایا، معایب و نکات مهم درباره آن ها می تواند نقش مهمی در اصلاح سبک تغذیه شما داشته باشد. در صورتیکه هم اکنون از یکی از آن ها استفاده می کنید، مطالعه مطالب آتی، ضروری تر به نظر می رسد.',
            options: [],
        },
        {
            text: 'رژیم Omnivore: \
            این رژیم که متداول ترین رژیم بین انسان هاست، شامل استفاده از مواد غذایی با منشا حیوانی و گیاهی است\
            \
            به دلیل استفاده توامان از منابع حیوانی و گیاهی، تمام مواد غذایی مورد نیاز بدن از جمله پروتئین ها، ویتامین ها و مواد معدنی در دسترس خواهند بو \ددر مورد این رژیم حفظ تعادل مصرف مواد غذایی برای جلوگیری از افزایش دریافت موادی مانند سدیم، کلسترول و چربی های ترانس حائز اهمیت است  ',
            options: [],
        },
        {
            text: 'رژیم Ketogenic: تمرکز اصلی این رژیم، دریافت انرژی مورد نیاز بدن از منابع چربی و پروتئینی به جای کربوهیدرات هاست و به همین دلیل، مصرف روزانه کربوهیدرات ها به کمتر از 50 گرم در روز می رسد استفاده از این رژیم می تواند باعث کاهش ریسک ابتلا به بیماری های قلبی و کاهش وزن شود. البته این رژیم بیش تر به هدف کاهش وزن انتخاب می شود تا بهبود عملکرد کلی بدن با  توجه به کاهش شدید مصرف  کربوهیدرات، مبتلایان به بعضی از بیماری ها مانند دیابت نوع اول باید باید با حساسیت بیش تری این رژیم را انتخاب کنند  ',
            options: [],
        },
        {
            text: 'رژیم Vegeterian:ر این رژیم پرطرفدار، در کنار استفاده از منابع گیاهی به عنوان منبع اصلی تامین مواد مغذی، از فرآورده های لبنی و تخم مرغ هم استفاده می شود به علت استفاده زیاد از میوه و سبزیجات، آنتی اکسیدان و فیبر به مقدار کافی به بدن می رسد که از نتایج آن می توان به کاهش ریسک ابتلا به سرطان، دیابت و چاقی اشاره کرد چون از موادی مانند انواع گوشت استفاده نمی شود، باید در انتخاب مواد غذایی برای رسیدن به رژیمی متناسب به خصوص در مورد پروتئین ها توجه زیادی کرد ',
            options: [],
        },
        {
            text: 'رژیم Pescatarian: فرق این رژیم با Vegeterian در استفاده از ماهی و غذاهای دریایی به اضافه منابع قبل است به دلیل وجود ماهی، پروتئین مورد نیاز بدن به راحتی تامین می شود. علاوه بر داشتن مزایای رژیم Vegeterian، امکان انتخاب مواد غذایی در مقیاس گسترده تری وجود دارد این رژیم معایب زیادی ندارد ولی ممکن است در صورت استفاده از آبزیان موجود در مناطق با آلودگی های زیست محیطی، ضررهایی به بدن وارد شود ',
            options: [],
        },
        {
            text: 'رژیم Vegan: فرق این رژیم با Vegeterian در حذف تمامی منابع با منشا حیوانی مانند فرآورده های لبنی، تخم مرغ و عسل و است: این رژیم مزایا و معایبی مانند Vegeterian دارد ولی چون انتخاب ها محدودتر هستند، فقط در صورت انتخاب کاملا بادقت می توان تمام مواد مغذی مورد نیاز بدن را فراهم کرد: ',
            options: [],
        },
        {
            text: 'در ادامه جدولی شامل ارزش غذایی موادی که مصرف بیش تری در کشورمان دارند تهیه شده است که توجه به آن و رژیم های غذایی معرفی شده در مراحل قبل، در کنار گرفتن مشاوره از پشتیبان می تواند کمک شایانی به بهبود سبک غذایی بکند.(اطلاعات این جدول به ازای هر 100 گرم از محصول گردآوری شده است.)در صورت دسترسی به گوشی/ساعت هوشمند می توانید از نرم افزار Nutrition Info برای داشتن اطلاعات جامع تر در این زمینه استفاده کنیدآیکون نرم افزار قرار داده شود.',
            options: [],
        },
        {
            text: ' ',
            options: ['Option A', 'Option B', 'Option C'],
        },
        // Add more questions here
    ];

    const handleAnswer = (answer) => {
        setAnswers([...answers, answer]);
    };

    const handleNext = () => {
        setCurrentQuestion(currentQuestion + 1);
    };

    const handlePrev = () => {
        setCurrentQuestion(currentQuestion - 1);
    };

    return (
        <div className={classes.container}>
            <progress className={classes.progressBar} value={currentQuestion} max={questions.length}></progress>
            {currentQuestion < questions.length ? (
                <div>
                    <div className={classes.textWrapper}>
                        <p className={classes.quizText}>{questions[currentQuestion].text}</p>
                        {(currentQuestion === 2) && (
                            <div>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>روز اول</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                            <table style={{ width: "100%", border: "1px solid black" }}>
                                                <table style={{ width: "100%", border: "1px solid black" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>ساعت</th>
                                                            <th>غذا</th>
                                                            <th>مقدار (کالری)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {table1Rows.map((row, index) => (
                                                            <tr key={index}>
                                                                <td>{row.time}</td>
                                                                <td>{row.food}</td>
                                                                <td>{row.calories}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </table>

                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    placeholder='ساعت'
                                                    value={detailsInput[0].time}
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[0].time = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[0].food}
                                                    placeholder='نام غذا'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[0].food = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[0].calories}
                                                    placeholder='مقدار کالری'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[0].calories = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <button className={classes.button} style={{ width: '100%', borderRadius: '10px' }} onClick={handleAddRow1}>Add More Row</button>
                                        </Box>


                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography>روز دوم</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                            <table style={{ width: "100%", border: "1px solid black" }}>
                                                <table style={{ width: "100%", border: "1px solid black" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>ساعت</th>
                                                            <th>غذا</th>
                                                            <th>مقدار (کالری)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {table2Rows.map((row, index) => (
                                                            <tr key={index}>
                                                                <td>{row.time}</td>
                                                                <td>{row.food}</td>
                                                                <td>{row.calories}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </table>

                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    placeholder='ساعت'
                                                    value={detailsInput[1].time}
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[1].time = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[1].food}
                                                    placeholder='نام غذا'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[1].food = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[1].calories}
                                                    placeholder='مقدار کالری'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[1].calories = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <button className={classes.button} style={{ width: '100%', borderRadius: '10px' }} onClick={handleAddRow2}>Add More Row</button>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography>روز سوم</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                            <table style={{ width: "100%", border: "1px solid black" }}>
                                                <table style={{ width: "100%", border: "1px solid black" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>ساعت</th>
                                                            <th>غذا</th>
                                                            <th>مقدار (کالری)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {table3Rows.map((row, index) => (
                                                            <tr key={index}>
                                                                <td>{row.time}</td>
                                                                <td>{row.food}</td>
                                                                <td>{row.calories}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </table>

                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    placeholder='ساعت'
                                                    value={detailsInput[2].time}
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[2].time = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[2].food}
                                                    placeholder='نام غذا'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[2].food = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[2].calories}
                                                    placeholder='مقدار کالری'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[2].calories = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <button className={classes.button} style={{ width: '100%', borderRadius: '10px' }} onClick={handleAddRow3}>Add More Row</button>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel3a-content"
                                        id="panel3a-header"
                                    >
                                        <Typography>روز چهارم</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                            <table style={{ width: "100%", border: "1px solid black" }}>
                                                <table style={{ width: "100%", border: "1px solid black" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>ساعت</th>
                                                            <th>غذا</th>
                                                            <th>مقدار (کالری)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {table4Rows.map((row, index) => (
                                                            <tr key={index}>
                                                                <td>{row.time}</td>
                                                                <td>{row.food}</td>
                                                                <td>{row.calories}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </table>

                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    placeholder='ساعت'
                                                    value={detailsInput[3].time}
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[3].time = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[3].food}
                                                    placeholder='نام غذا'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[3].food = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[3].calories}
                                                    placeholder='مقدار کالری'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[3].calories = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <button className={classes.button} style={{ width: '100%', borderRadius: '10px' }} onClick={handleAddRow4}>Add More Row</button>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>

                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel4a-content"
                                        id="panel4a-header"
                                    >
                                        <Typography>روز پنجم</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                    <Box style={{ width: "100%", display: "flex", justifyContent: "center" }} >
                                            <table style={{ width: "100%", border: "1px solid black" }}>
                                                <table style={{ width: "100%", border: "1px solid black" }}>
                                                    <thead>
                                                        <tr>
                                                            <th>ساعت</th>
                                                            <th>غذا</th>
                                                            <th>مقدار (کالری)</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {table5Rows.map((row, index) => (
                                                            <tr key={index}>
                                                                <td>{row.time}</td>
                                                                <td>{row.food}</td>
                                                                <td>{row.calories}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </table>

                                        </Box>
                                        <Box display="flex" justifyContent="space-between">
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    placeholder='ساعت'
                                                    value={detailsInput[4].time}
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[4].time = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[4].food}
                                                    placeholder='نام غذا'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[4].food = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                            <Box style={{ width: "30%", }}>
                                                <input
                                                    type="text"
                                                    style={{ width: "100%" }}
                                                    value={detailsInput[4].calories}
                                                    placeholder='مقدار کالری'
                                                    onChange={(e) => {
                                                        const updatedDetailsInput = [...detailsInput];
                                                        updatedDetailsInput[4].calories = e.target.value;
                                                        setDetailsInput(updatedDetailsInput);
                                                    }}
                                                />
                                            </Box>
                                        </Box>
                                        <Box style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                            <button className={classes.button} style={{ width: '100%', borderRadius: '10px' }} onClick={handleAddRow5}>Add More Row</button>
                                        </Box>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )}

                        <ul style={{ display: 'grid', justifyContent: 'center', listStyle: 'none' }}>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li key={index} style={{ width: "100%", margin: "0 auto" }}>
                                    <button className={classes.option} onClick={() => handleAnswer(option)}>{option}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={classes.buttonWrapepr}>
                        {currentQuestion > 0 && <button className={classes.button} style={{
                            borderRadius: '0px 10px 10px 0px',
                        }} onClick={handlePrev}>مرحله قبل</button>}
                        <button className={classes.button} onClick={handleNext}
                            style={currentQuestion > 0 ? { borderRadius: '10px 0px 0px 10px', } : { borderRadius: '10px 10px 10px 10px', }}
                        >مرحله بعد</button>
                    </div>
                </div >
            ) : (
                <div>
                    <h2>Quiz Completed!</h2>
                    <p>Answers: {answers.join(', ')}</p>
                </div>
            )}
        </div >
    );
};

export default Nutrition;
