import _ from 'lodash';
import * as actionTypes from '../actions/actionTypes';

export default function (state = {}, action){
    switch (action.type){
        case actionTypes.FETCH_POSTS:             
            return _.mapKeys(action.payload, 'id');   
        case actionTypes.DELETE_POST:             
            return _.omit(state, action.payload);     
        default:
            return state;
    }


}