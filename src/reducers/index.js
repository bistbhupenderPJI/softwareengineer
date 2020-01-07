import { combineReducers } from 'redux';
import StartupsReducer from './startups';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  startups: StartupsReducer,
  form: formReducer
});

export default rootReducer;
