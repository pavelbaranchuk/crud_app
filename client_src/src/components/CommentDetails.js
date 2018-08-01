import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class CommentDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    console.log('Test0');
    this.getComment();
  }

  getComment(){
    let commentId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/commentsmodels/${commentId}`)
    .then(response => {
      this.setState({details: response.data}, () => {
      console.log(this.state);
      console.log(this.state.details.name);
      })
    })
    .catch(err => console.log(err));
  }

  render(){
    return (
      <h1>Comment Details</h1>
    )
  }
}

export default CommentDetails;
