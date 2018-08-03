import React, { Component } from 'react';
import CommentForm from './CommentForm';
import CommentsList from './CommentsList';

class AddComment extends Component{

  render(){
    return (
      <div>
        <CommentForm />
        <CommentsList />
      </div>
    )
  }
}

export default AddComment;
