import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

class EditComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      comment: '',
      name: '',
      avatarka: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  componentWillMount() {
    this.getCommentDetails();
    window.location.hash = 'edit';
  }

  getCommentDetails() {
    let commentId = this.props.match.params.id;
    axios
      .get(`http://localhost:3000/api/commentsmodels/${commentId}`)
      .then(response => {
        this.setState(
          {
            id: response.data.id,
            comment: response.data.comment,
            name: response.data.name,
            avatarka: response.data.avatarka,
          },
          () => {
            console.log(this.state);
          }
        );
      })
      .catch(err => console.log(err));
  }

  editComment(newComment) {
    axios
      .request({
        method: 'put',
        url: `http://localhost:3000/api/commentsmodels/${this.state.id}`,
        data: newComment,
      })
      .then(response => {
        this.props.history.push('/');
      })
      .catch(err => console.log(err));
  }

  onSubmitHandler(e) {
    e.preventDefault();
    const newComment = {
      comment: this.refs.comment.value,
      name: this.refs.name.value,
      avatarka: this.refs.avatarka.value,
    };
    this.editComment(newComment);
    return false;
  }

  render() {
    return (
      <div>
        <div className="center title">Edit Form</div>
        <div className="row">
          <div className="col s12 m6 offset-m3 l6 offset-l3 flow-text">
            <form id="myForm" onSubmit={this.onSubmitHandler.bind(this)}>
              <div className="input-field">
                <textarea
                  placeholder="Comment text"
                  name="comment"
                  value={this.state.comment}
                  style={{height: 150}}
                  placeholder="Comment text"
                  ref="comment"
                  id="textarea1"
                  className="materialize-textarea"
                  data-length="120"
                  onChange={this.handleInputChange}
                />
                <label className="active" htmlFor="textarea1">
                  Comment text
                </label>
              </div>

              <div className="input-field">
                <input
                  placeholder="Author Name"
                  value={this.state.name}
                  required
                  type="text"
                  data-length="20"
                  name="name"
                  ref="name"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="name" className="active">
                  Author name
                </label>
              </div>

              <div className="file-field input-field">
                <input
                  accept=".png, .jpg"
                  style={{display: ''}}
                  type="file"
                  onChange={this.fileSelectedHandler}
                  ref={fileInput => (this.fileInput = fileInput)}
                />
                <div className="file-path-wrapper">
                  <input
                    style={{display: 'none'}}
                    value={this.state.avatarka}
                    placeholder="Change avatar if needed"
                    className="file-path validate"
                    ref="avatarka"
                    type="text"
                  />
                </div>
              </div>
              <button
                style={{display: 'none'}}
                onClick={() => this.fileInput.click()}
                className="btn col s12 m12 l3 "
              >
                File
              </button>
              <input
                type="submit"
                value="Change"
                className="btn col s12 m12 l3"
              />
              <span>&nbsp;</span>
              <Link
                className="btn col s12 m12 l3 right #ff6066d4 red lighten-1"
                to={'/'}
              >
                Cancel
              </Link>
              <div className="indent" />
              <div className="divider" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default EditComment;
