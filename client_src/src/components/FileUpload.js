import React, { Component } from 'react';
import axios from 'axios';

class FileUpload extends Component {

  constructor(props) {
    super(props);
      this.state = {
        uploadStatus: false
      }
    this.handleUploadImage = this.handleUploadImage.bind(this);
  }

  handleUploadImage(ev) {
    ev.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);

    axios.post('http://localhost:3000/api/Containers/pics/upload', data)
      .then(function (response) {
    this.setState({ imageURL: `http://localhost:3000/api/Containers/Pics/download/${body.file}`, uploadStatus: true });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
  /* Omitted for brevity */

 }
}
