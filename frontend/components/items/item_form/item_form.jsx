import React from "react";

class ItemForm extends React.Component {
  constructor (props){
    super(props);
    this.state = this.props.item;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFile = this.handleFile.bind(this);
  }

  componentDidMount(){
    if (this.props.match.params.itemId) {
      this.props.fetchItem(this.props.match.params.itemId);
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if(!this.props.id && nextProps.item){
  //     this.setState({
  //       title: nextProps.item.title,
  //       description: nextProps.item.description,
  //       price: nextProps.item.price,
  //       imageUrl: nextProps.item.imageUrl,
  //       userId: nextProps.currentUser.id,
  //       id: parseInt(nextProps.item.id)
  //     });
  //   }
  // }

  handleFile(e){
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ uploadedFile: file, imageUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('item[title]', this.state.title);
    formData.append('item[description]', this.state.description);
    formData.append('item[price]', this.state.price);
    formData.append('item[user_id]', this.props.currentUser.id);
    if (this.state.uploadedFile) {
      formData.append('item[photo]', this.state.uploadedFile);
    } 
    
    if (this.state.id ) {
      formData.append('item[id]', this.state.id);
    }

    this.props.processItemForm(formData).then(
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

  render(){
     const { item, formType, formTitle } = this.props;
    if (this.props.formType ==='Update Your Product'){
       if (this.props.item.userId !== this.props.currentUser.id){
         return (
           <h1 className="not-yo-item">Hey this is not your item!
             Get outta here and go make some! </h1>
         );
       }
     }
      const preview = this.state.imageUrl ? <img src={this.state.imageUrl} /> : null;
    return(

      <div className="item-form">
        <div className="form-header">
          <h1>{this.props.formTitle}</h1>
        </div>

        <div>
          <form onSubmit={this.handleSubmit}
            className="item-form-container">
            <section>
              <div className="file-upload-title">
                <h2>Photos</h2>
                <p>Please Add One Photo per Item</p>
              </div>
              <div className="file-upload">
                <input type="file"
                  onChange={this.handleFile} />
                  <div className="uploaded-picture">
                    {preview}
                  </div>
              </div>

            </section>

            <section className="item-form-details">
              <h2 className="item-form-details-title">Item Details</h2>
              <ul className="details-list">
              <li>
                <label className="item-form-title">Title
                </label>
                  <input type="text"
                    value={this.state.title}
                    onChange={this.updateField("title")} required>
                  </input>
              </li>
                <li>
                  <label className="item-form-description">Description
                  </label>
                    <textarea
                      value={this.state.description}
                      onChange={this.updateField("description")} required>
                    </textarea>
                </li>
                <li>
                  <label className="item-form-price">Price
                    <input type="number"  value={this.state.price}
                      onChange={this.updateField("price")} required/>
                  </label>
                </li>
              </ul>
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


{/* <Dropzone padding="15px"
                  multiple={false}
                  accept="image/*"
                  onDrop={this.onImageDrop.bind(this)}>
                  <p className="droptext">Drop an image or click to
                    select a file to upload.</p>
                </Dropzone> */}