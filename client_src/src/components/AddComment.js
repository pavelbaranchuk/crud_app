import React, { Component } from 'react';
import axios from 'axios';
import Comments from './Comments';

class AddComment extends Component{
  state = {
    selectedFile: false
  }

  addComment(newComment){
      axios.request({
        method:'post',
        url:'http://localhost:3000/api/commentsmodels',
        data: newComment
      }).then(response => {
        this.props.history.push('/');
      }).catch(err => console.log(err));
    }

  fileSelectedHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    })
  }

  fileUploadHandler = () => {
    const fd = new FormData();
    const newComment = {
      comment: this.refs.comment.value,
      name: this.refs.name.value,
      avatarka: this.refs.avatarka.value,
      replies: []
    }
    fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
    axios.post('http://localhost:3000/api/Containers/pics/upload', fd)
    .catch(function (error) {
      console.log(error);
    });
    this.addComment(newComment);
    document.getElementById("myForm").reset();
  }

  render(){
    return (
      <div className="row">
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
                <input placeholder="Choose avatar in &quot;jpg&quot;, &quot;png&quot; format" required="" style={{display: ''}} className="file-path validate" ref="avatarka" type="text" />
              </div>
            </div>
          <button onClick={() => this.fileInput.click()} className="btn col s12 m12 l3 ">File</button>
          <span>&nbsp;</span>
          <input type="submit" value="Comment" className="btn col s12 m12 l3 right" />
        </form>
        <br />
        <div className="divider"></div>
        <br />
      </span></div>
      <Comments />
      </div>
    )
  }
}

export default AddComment;
