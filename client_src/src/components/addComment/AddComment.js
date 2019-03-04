import React, {Component, Fragment} from 'react';
import CommentForm from '../commentForm/CommentForm';
import CommentsList from '../commentList/CommentsList';

class AddComment extends Component {
  render() {
    return (
      <Fragment>
        <div className="indent" />
        <CommentForm />
        <CommentsList />
      </Fragment>
    );
  }
}

export default AddComment;
