import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ReplyForm from './ReplyForm';

class CommentItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        item:props.item
      }
  }

  onDelete(){
      let commentId = this.state.item.id;
      var result = window.confirm("Want to delete?");
        if (result) {
          axios.delete(`http://localhost:3000/api/commentsmodels/${commentId}`)
          .then(response => {
            this.props.history.push('/');
          }).catch(err => console.log(err));
          document.location.reload(true);
        }
    }

  render(){
    return (
      <div className="row" id="commelement">
      <div className="col s12 m6 offset-m3 l6 offset-l3"><span className="flow-text">
      <div className="row col s12 m12">
          <div className="card">
            <div className="row  valign-wrapper">
              <div className="col s0 m0 l3 image-avatar">
                <div className="valign-wrapper">
                  <img className="center responsive-img hide-on-med-and-down" src={'http://localhost:3000/api/Containers/Pics/download/' + this.state.item.avatarka} alt="" />
                </div>
              </div>
              <div className="col s12 m12 l9 rest-content">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s7 m7">
                        <span>{this.state.item.name}</span>
                      </div>
                      <div className="col s5 m5 right-align">
                        <h6>
                        <Link to={`/commentsmodels/edit/${this.state.item.id}`}>Edit</Link>
                          <span>&nbsp;|&nbsp;</span>
                          <a href="#!" onClick={this.onDelete.bind(this)} >Delete</a>
                        </h6>
                      </div>
                    </div>
                    <h6>{this.state.item.comment}</h6>
                    <h6>
                    <a href="#!" onClick={() => this.setState({ showReplyForm: true })} >Reply</a>
                    </h6>
                  </div>
              </div>
            </div>
          </div>
      </div>
      </span>
      </div>
      { this.state.showReplyForm
        ? <ReplyForm commentId={this.props.id} onSubmit={() => this.setState({ showReplyForm: false })} />
        : undefined }
      </div>
    )
  }
}

export default CommentItem;
