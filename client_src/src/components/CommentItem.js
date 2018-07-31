import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class CommentItem extends Component{
  constructor(props){
    super(props);
    this.state = {
      item:props.item
    }
  }

  render(){
    return (
      <div className="row">
      <div className="col s6 offset-s3"><span className="flow-text">
      <div className="row col s12 m12">
          <div className="card">
            <div className="row  valign-wrapper">
              <div className="col s0 m0 l3 image-avatar">
                <div className="valign-wrapper">
                  <img className="responsive-img hide-on-med-and-down" src={this.state.item.avatar} alt="" />
                </div>
              </div>
              <div className="col s12 m12 l9 rest-content">
                  <div className="card-content">
                    <div className="row">
                      <div className="col s6 m6">
                        <span>{this.state.item.name}</span>
                      </div>
                      <div className="col s6 m6 right-align">
                        <h6>
                        <a id="editLink" href="#">Edit</a>
                        <span>&nbsp;|&nbsp;</span>
                        <a id="deleteLink" className="waves-effect waves-light modal-trigger" href="#modal1">Delete</a>
                        <div id="modal1" className="modal">
                          <div className="modal-content">
                            <h4 className="left-align">Modal Header</h4>
                            <p className="left-align">Are you sure you want to delete this comment?</p>
                          </div>

                          <div className="modal-footer">
                            <a href="#!" className="modal-close waves-effect waves-red btn-flat">Disagree</a>
                            <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                          </div>
                        </div>
                        </h6>
                      </div>
                    </div>
                    <h6>{this.state.item.comment}</h6>
                    <h6>
                    <a href="#">Reply</a>
                    </h6>
                  </div>
              </div>
            </div>
          </div>
      </div>
      </span>
      </div>
      </div>
    )
  }
}

export default CommentItem;
