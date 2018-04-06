import React from "react";
import { withRouter } from "react-router-dom";
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { Redirect } from "react-router-dom";

const CLOUDINARY_UPLOAD_PRESET = 'fdvmycl7';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dkaolr6pg/upload';

class ItemForm extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      title: this.props.item.title,
      description: this.props.item.description,
      price: this.props.item.price,
      imgUrl: this.props.item.imgUrl,
      userId: this.props.currentUser.id,
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file){
      let upload = request.post(CLOUDINARY_UPLOAD_URL)
                          .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                          .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  handleSubmit(e){
    e.preventDefault();
    const currentItem ={
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      user_id: this.props.currentUser.id,
      img_url: this.state.imgUrl || this.state.uploadedFileCloudinaryUrl,
    };

    return this.props.processItemForm(currentItem);
  }

  updateField(field){
    return (e) => this.setState({[field]: e.target.value});
  }

  handleDelete(e){
    if (typeof this.props.deleteItem === 'function'){
      return this.props.deleteItem(this.state);}
      else{
        return <Redirect to="/"/>;
      }
  }

  render(){
     const { item, formType, formTitle } = this.props;
    return(
      <div className="item-form">

        <button className="item-delete"
          onClick={this.handleDelete}>Delete Item</button>

        <form onSubmit={this.handleSubmit}>
          <h1 className="item-form-title">{this.props.formTitle}</h1>
          <div className="file-upload">
            <Dropzone
              multiple={false}
              accept="image/*"
              onDrop={this.onImageDrop.bind(this)}>
              <p>Drop an image or click to select a file to upload.</p>
            </Dropzone>
          </div>

          <div className="uploaded-picture">
            {this.state.uploadedFileCloudinaryUrl === '' ? null :
              <div>
                <img src={this.state.uploadedFileCloudinaryUrl} />
              </div>}
            </div>

          <label className="item-form-title">Title
            <input type="text"
              value={this.state.title}
              onChange={this.updateField("title")}>
            </input>
          </label>
          <label className="item-form-description">Description
            <textarea
              value={this.state.description}
              onChange={this.updateField("description")}>
            </textarea>
          </label>

          <label className="item-form-price">Price
            <input type="number"  value={this.state.price}
              onChange={this.updateField("price")} />
          </label>
          <input className="item-form-submit"
            type="submit">{this.formType}</input>
        </form>
      </div>
    );
  }
}

export default ItemForm;
