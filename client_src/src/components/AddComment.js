import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom';

class AddComment extends Component{
async addComment(newComment){


  axios.request({
    method:'post',
    url:'http://localhost:3000/api/comments',
    data: {
      comment: this.refs.comment.value,
      name: this.refs.name.value,
      avatar: this.refs.avatar.value
    }
  }).then(response => {
    console.log('Huraaah')
    document.getElementById("myForm").reset();
  }).catch(err =>console.log(err))
}

postComment(){
  console.log('1');
};

onSubmit(e){
  const newComment = {
    comment: this.refs.comment.value,
    name: this.refs.name.value,
    avatar: this.refs.avatar.value
  }
  this.addComment(newComment);
  e.preventDefault();
}

async onChange(e){
  console.log(e)

  return

  const data = new FormData();
  data.append('file', this.refs.avatar.value.files[0]);
  data.append('filename', 'this.fileName.value');

  const res = await axios.post('http://localhost:3000/api/Containers/pics/upload', data);

  console.log(res);
}

  render(){
    return (
      <div className="row">
      <div className="col s6 offset-s3"><span className="flow-text">
        <form id='myForm' onSubmit={this.onSubmit.bind(this)}>
          <div className="input-field">
            <textarea required ref="comment" id="textarea1" className="materialize-textarea" data-length="120"></textarea>
            <label htmlFor="textarea1">Comment text</label>
          </div>

          <div className="input-field">
            <input required type="text" data-length="30" name="name" ref="name" />
            <label htmlFor="name">Author Name</label>
          </div>

          <div className="row">
            <div className="file-field col s12 m12 l6 input-field">

              <div className="btn">
                  <span>File</span>
                <input onChange={this.onChange.bind(this)} type="file" />
              </div>

              <div className="file-path-wrapper">
                <input className="file-path validate" ref="avatar" type="text" />
              </div>

            </div>
            <input type="submit"  value="Comment" className="btn col s12 m12 l3 right" />
          </div>

        </form>
        <div className="divider"></div>
      </span></div>
      </div>
    )
  }
}

export default AddComment;
