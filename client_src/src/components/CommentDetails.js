import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

class CommentDetails extends Component{
  constructor(props){
    super(props);
    this.state = {
      details:''
    }
  }

  componentWillMount(){
    this.getComment();
  }

  getComment(){
    let commentId = this.props.match.params.id;
    axios.get(`http://localhost:3000/api/${commentId}`).then(response => {
      this.setState({details: response.data}, () => {
      console.log(this.state);
      })
    })
    .catch(err => console.log(err));
  }

  onDelete(){
    let commentId = this.state.details.id;
    axios.delete(`http://localhost:3000/api/comments/${commentId}`)
      .then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
  }

  render(){
    return (
      <div>
        <h1>{this.state.details.name}</h1>
      </div>
    )
  }
}

export default CommentDetails;
