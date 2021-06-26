import authentication from './auth';
import userID from './userId';

import { combineReducers } from 'redux';

console.log(authentication)

const allReducres = combineReducers({
    authentication: authentication,
    userID: userID
})

export default allReducres;