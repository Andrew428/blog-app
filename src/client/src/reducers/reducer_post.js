import * as actionTypes from '../actions/actionTypes';

export default function (state = {}, action){
    switch (action.type){        
        case actionTypes.FETCH_POST:
            const post = action.payload;           
            return post;
        default:
            return state;
    }


}