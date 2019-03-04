import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import CommentForm from '../commentForm/CommentForm';
import './CommentItem.css';

class CommentItem extends Component {
  constructor() {
    super();
    this.state = {
      showCommentForm: false,
    };
  }

  onDelete() {
    if (window.confirm('Want to delete?')) {
      axios
        .delete(
          `http://localhost:3000/api/commentsmodels/${this.props.item.id}`
        )
        .then(response => {
          this.props.history.push('/');
        })
        .catch(err => console.log(err));

      document.location.reload(true);
    }
  }

  render() {
    return (
      <div className="row" id="ell">
        <div className="col s12 m6 offset-m3 l6 offset-l3">
          <span className="flow-text">
            <div className="row col s12 m12">
              <div className="card">
                <div className="row valign-wrapper">
                  <div
                    className="col s0 m0 l3 image-avatar"
                  >
                    <div className="valign-wrapper">
                      <img
                        className="avatar center valign-wrapper
                        responsive-img hide-on-med-and-down"
                        src={
                          'http://localhost:3000/api/Containers/Pics/download/' +
                          this.props.item.avatarka
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col s12 m12 l9 rest-content">
                    <div className="card-content">
                      <div className="row">
                        <div className="col s7 m7">
                          <span>{this.props.item.name}</span>
                        </div>
                        <div className="col s5 m5 right-align">
                          <div className="formatted-links">
                            <Link
                              to={`/commentsmodels/edit/${this.props.item.id}`}
                            >
                              Edit
                            </Link>
                            <span>&nbsp;|&nbsp;</span>
                            <a href="#!" onClick={this.onDelete.bind(this)}>
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="formatted-links">
                        {this.props.item.comment}
                      </div>
                      <div className="formatted-links">
                        <a
                          href="#!"
                          onClick={() => this.setState({showCommentForm: true})}
                        >
                          Reply
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
        {this.state.showCommentForm && (
          <CommentForm
            commentId={this.props.item.id}
            repliesList={this.props.item.replies}
          />
        )}
      </div>
    );
  }
}

export default CommentItem;
