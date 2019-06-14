import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import PostsReducer from './reducer_posts';
import PostReducer from './reducer_post';

const rootReducer = combineReducers({
  post: PostReducer,
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
