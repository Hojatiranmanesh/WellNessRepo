import authentication from './auth';
import userID from './userId';
import dimension from './dimension';
import quiz from './quiz';

import { combineReducers } from 'redux';

const allReducres = combineReducers({
    authentication: authentication,
    userID: userID,
    dimension: dimension,
    quiz: quiz,
})

export default allReducres;