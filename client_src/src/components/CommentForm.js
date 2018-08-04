import React, { Component } from 'react';
import axios from 'axios';

class CommentForm extends Component{
  constructor(props) {
    super(props);

    this.state = {
      selectedFile: false,
    };
  }

  fileSelectedHandler(event) {
    this.setState({
      selectedFile: event.target.files[0],
    })
  }

  componentDidMount() {
    if (window.location.hash === "#reload") {
      window.scrollIntoView(document.getElementById("arrow"));
    }
  }

  onSubmitHandler(e) {
    e.preventDefault();
    let arrReply = [];
    let ob = {
        comment: this.refs.comment.value,
        name: this.refs.name.value,
        avatarka: this.refs.avatarka.value,
        replies: [],
      };
                                                            
    if (typeof (this.props.commentId) === "undefined") {        //If no parent comments, then this is not a reply and we will paste it at the bottom of the page

        axios.request({
            method:'post',
            url:'http://localhost:3000/api/commentsmodels',
            data: {
                comment: this.refs.comment.value,
                name: this.refs.name.value,
                avatarka: this.refs.avatarka.value,
                replies: []
              }
          })
          .then(() => {
            this.props.history.push('/');
          })
          .catch(err => console.log(err));
          window.location.hash = 'reload';
                                                                
    } else {                                  
        if (typeof (this.props.repliesList[0]) !== "undefined") {      
            arrReply = this.props.repliesList;                      
            arrReply.push(ob);                                  
            axios.request({
                method:'patch',
                url:`http://localhost:3000/api/commentsmodels/${this.props.commentId}`,
                data: {
                  replies: arrReply,
                }
              })
              .then(() => {
                this.props.history.push('/');
              })
              .catch(err => {
                console.log(err)
              });
        } else {
            //Comment already has replies
            axios.request({
                method:'patch',
                url:`http://localhost:3000/api/commentsmodels/${this.props.commentId}`,
                data: {
                  replies: [{
                    comment: this.refs.comment.value,
                    name: this.refs.name.value,
                    avatarka: this.refs.avatarka.value,
                    replies: [],
                  }],
                }
              })
              .then(() => {
                this.props.history.push('/');
              })
              .catch(err => {
                console.log(err)
              });
        }      
    }
    const formData = new FormData();
      formData.append('image', this.state.selectedFile, this.state.selectedFile.name);
      axios.post('http://localhost:3000/api/Containers/pics/upload', formData)
        .catch(err => {
          console.log(err);
        });

    document.location.reload(true);

    return false;
  }

  render() {
    return (
    <div className="row">
      <div className="col s12 m6 offset-m3 l6 offset-l3">
        <form id='myForm' onSubmit={this.onSubmitHandler.bind(this)}>
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
      </div>
    </div>
  )
  }
}

export default CommentForm;