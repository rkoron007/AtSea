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
      id:'',
      title: '',
      description:'',
      price: '',
      imageUrl: '',
      userId: '',
      uploadedFile: null,
      uploadedFileCloudinaryUrl: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    if (this.props.item) {
      this.setState({
        title: this.props.item.title,
        description: this.props.item.description,
        price: this.props.item.price,
        imageUrl: this.props.item.imageUrl,
        userId: this.props.currentUser.id,
        id: parseInt(this.props.item.id),
      });
    } else if (this.props.match.params.itemId) {
      this.props.fetchItem(this.props.match.params.itemId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(!this.props.item && nextProps.item){
      this.setState({
        title: nextProps.item.title,
        description: nextProps.item.description,
        price: nextProps.item.price,
        imageUrl: nextProps.item.imageUrl,
        userId: nextProps.currentUser.id,
        id: parseInt(nextProps.item.id)
      });
    }
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
      img_url: this.state.uploadedFileCloudinaryUrl || this.state.imageUrl,
      id: this.state.id || null
    };
    this.props.processItemForm(currentItem, this.state.id).then(
      railsitem => {
        this.props.history.push(`/items/${railsitem.payload.item.id}`);
      });
  }

  updateField(field){
    return (e) => this.setState({[field]: e.target.value});
  }



  handleDelete(){
    if (typeof this.props.handleDelete === 'function'){
      this.props.handleDelete(this.state.id).then(
        item => this.props.history.push(`/items`));
        }
        else {
        this.props.history.push(`/items`);
      }
  }

  showCurrentPicture(){
    if (this.state.imageUrl && this.state.uploadedFileCloudinaryUrl === ''){
      return(
          <div className="uploaded-picture">
              <img src={this.state.imageUrl} />
          </div>);
    } else if (this.state.uploadedFileCloudinaryUrl){
      return(
          <div className="uploaded-picture">
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>
      );
    } else {return null;}
  }

  render(){
     const { item, formType, formTitle } = this.props;
     if(this.props.item){
       if (this.props.item.userId !== this.props.currentUser.id){
         return (
           <h1 className="not-yo-item">Hey this is not your item!
             Get outta here and go make some! </h1>
         );
       }
     }
    return(

      <div className="item-form">
        <div className="form-header">
          <h1>{this.props.formTitle}</h1>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}
            className="item-form-container">
            <div className="file-upload">
              <h2>Photos</h2>
              <p>Please Add One Photo per Item</p>
              <Dropzone
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload.</p>
              </Dropzone>
            </div>

            <section className="picture-show">
              {this.showCurrentPicture()}
            </section>

            <section className="">
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
            </section>
            <div className="item-form-footer">
              <button className="item-delete-button"
                onClick={this.handleDelete}>Delete Item
              </button>
              <input className="item-form-submit"
                type="submit" value="Submit Item">
              </input>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default ItemForm;
