import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import { Link } from 'react-router-dom';

class PostIndex extends Component {

  componentDidMount(){
    this.props.fetchPosts();
  }

  renderPost(){
    console.log(this.props.posts);
    return _.map(this.props.posts, post =>{
      return(
          
          <li className="list-group-item" key={post.id}>
            <Link to={`/posts/${post.id}`} >
              <span className="title">
                Title: {post.title}  
              </span>
              <br/>
              <span className="categories">
                Tags: {post.categories}
              </span>
            </Link>
          </li>
      );

    });
  }

  

  render() {
    
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add Post
          </Link>
        </div>
        <h3>Post</h3>
        <ul className="list-group">
          {this.renderPost()}
        </ul>        
      </div>
    );
  }
}

function mapStateToProps(state){
  return { posts: state.posts }
}

export default connect(mapStateToProps, { fetchPosts })(PostIndex)