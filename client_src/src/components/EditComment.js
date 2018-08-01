import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditComment extends Component{
  constructor(props){
    super(props);
    this.state = {
      id:'',
      comment:'',
      name:'',
      avatarka:''
    }
  }



    componentWillMount(){
      this.getCommentDetails();
    }


    getCommentDetails(){
      let commentId = this.props.match.params.id;
      axios.get(`http://localhost:3000/api/commentsmodels/${commentId}`)
      .then(response => {
        this.setState({
          id: response.data.id,
          comment: response.data.comment,
          name: response.data.name,
          avatarka: response.data.avatarka
        }, () => {
          console.log("Awesome");
          console.log(this.state);
        });
      })
      .catch(err => console.log(err));
    }

  editComment(newComment){
    axios.request({
      method:'put',
      url:`http://localhost:3000/api/commentsmodels/${this.state.id}`,
      data: newComment
    }).then(response => {
      this.props.history.push('/');
    }).catch(err => console.log(err));
  }

  onSubmit(e){
    const newComment = {
      comment: this.refs.comment.value,
      name: this.refs.name.value,
      avatarka: this.refs.avatarka.value
    }
    this.editComment(newComment);
    e.preventDefault();
  }


  render(){
    return (
      <div className="row">
      <h1>Test</h1>
      <div className="col s12 m6 offset-m3 l6 offset-l3"><span className="flow-text">
        <form id='myForm' onSubmit={this.fileUploadHandler.bind(this)}>
          <div className="input-field">
            <textarea placeholder="Comment text" required ref="comment" id="textarea1" className="materialize-textarea" data-length="120"></textarea>
          </div>

          <div className="input-field">
            <input placeholder="Author Name" required type="text" data-length="30" name="name" ref="name" />
          </div>
            <div className="file-field input-field">
              <input
              required
              accept=".png, .jpg"
              style={{display: ''}}
              type="file"
              onChange={this.fileSelectedHandler.bind(this)}
              ref={fileInput => this.fileInput = fileInput} />
              <div className="file-path-wrapper">
                <input placeholder="Change avatar if needed" required="" style={{display: ''}} className="file-path validate" ref="avatarka" type="text" />
              </div>
            </div>
          <button onClick={() => this.fileInput.click()} className="btn col s12 m12 l3 ">File</button>
          <span>&nbsp;</span>
          <input type="submit" value="Comment" className="btn col s12 m12 l3 right" />
        </form>
        <br />
        <div className="divider"></div>
      </span></div>
      </div>
    )
  }
}

export default EditComment;
