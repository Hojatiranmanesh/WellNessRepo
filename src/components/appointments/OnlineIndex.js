import React from 'react';
import { ButtonBase, Box, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';

 const OnlineIndex = () => {
    return (
        <Box>
            <ButtonBase component={Link} to="/quizzes/dimension/quiz">ارزیابی و ارتقاء تخصصی</ButtonBase>
            <ButtonBase>ارزیابی و ارتقاء عمومی</ButtonBase>
            <Divider variant="middle" />
            <ButtonBase>مشاهده فایل های مشاوره پیشین</ButtonBase>
        </Box>
    )
}

export default OnlineIndex;