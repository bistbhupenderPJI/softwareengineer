import { FETCH_STARTUPS } from '../actions';
import _ from 'lodash';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_STARTUPS:
      console.log(action.payload);
      return _.mapKeys(action.payload.data, 'id');
    default:
      return state;
  }
}
