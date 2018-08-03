import React, { Component } from 'react';
import axios from 'axios';
import CommentItem from './CommentItem';
import ScrollApp from './ScrollApp';

class CommentsList extends Component{
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
      console.log("Last and finalthis.state");
      console.log(this.state);
    })
    })
    .catch(err => console.log(err));
  }

  render(){
    console.log("this.state.comments asasdasdasd");
    console.log(this.state.comments);
    const commentItems = this.state.comments.map((comment, i) => {
      return(
        <CommentItem key={comment.id} item={comment} />
      )
      
    })
    return (
      <div>
        {commentItems}
        <ScrollApp/>
      </div>
    )
  }
}

export default CommentsList;
