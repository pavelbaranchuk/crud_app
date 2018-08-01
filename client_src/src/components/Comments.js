import React, { Component } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';

class Comments extends Component{
  constructor(){
    super();
    this.state = {
      comments: []
    }
  }

  componentWillMount(){
    this.getComments();
  }

  getComments(){
    axios.get('http://localhost:3000/api/commentsmodels').then(response => {
      this.setState({comments: response.data}, () =>
    {
      //console.log(this.state);
    })
    })
    .catch(err => console.log(err));
  }

  render(){
    const commentItems = this.state.comments.map((comment, i) => {
      return(
        <CommentItem key={comment.id} item={comment} />
      )
    })
    return (
      <div>
        <h1>Returned Comments</h1>
        {commentItems}
      </div>
    )
  }
}

export default Comments;
