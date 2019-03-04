import React, {Component} from 'react';
import axios from 'axios';
import CommentItem from '../commentItem/CommentItem';
import ScrollApp from '../../helpers/ScrollApp';

class CommentsList extends Component {
  constructor() {
    super();
    this.state = {
      comments: [],
    };
  }

  componentWillMount() {
    this.getComments();
  }

  getComments() {
    axios
      .get('http://localhost:3000/api/commentsmodels')
      .then(response => {
        this.setState({comments: response.data});
      })
      .catch(err => console.log(err));
  }

  render() {
    const commentItems = this.state.comments.map((comment, i) => {
      return <CommentItem key={comment.id} item={comment} />;
    });
    return (
      <div>
        {commentItems}
        <ScrollApp />
      </div>
    );
  }
}

export default CommentsList;
