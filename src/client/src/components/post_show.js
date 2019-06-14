import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost , deletePost} from '../actions';
import { Link } from 'react-router-dom';

class PostShow extends Component {

  componentDidMount(){
    const id = this.props.match.params.id;
    this.props.fetchPost(id);
  }


  deletePostOnClick(){
    const id = this.props.match.params.id;
    this.props.deletePost(id, () => {
        this.props.history.push('/');
    });

  }

  render() {   
    
    const { post } = this.props;

    if(!post){
        return (            
            <div>
                 Loading...            
            </div>
        );
    }else{
    
        return (
        <div>            
                <Link className="btn btn-primary" to="/">
                    Back To List
                </Link>           
            
                <button 
                    className="btn btn-danger delete-post-btn text-xs-right"
                    onClick={this.deletePostOnClick.bind(this)}
                >
                    Delete Post
                </button>
            
            <div>
                <h3>{post.title}</h3>   
                <h5>Tags : {post.categories}</h5>   
                <pre className="post-show-content">
                    {post.content}
                </pre>  
            </div>     
        </div>
        );
    }
  }
}

function mapStateToProps(state){
    return { post: state.post }
}

export default connect( mapStateToProps, { fetchPost , deletePost})(PostShow);