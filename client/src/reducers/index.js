import { combineReducers } from 'redux';

import {reducersConnect} from './posts';

export const reducers = combineReducers({ posts:reducersConnect });