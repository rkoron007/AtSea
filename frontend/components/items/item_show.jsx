import React from "react";

class ItemShow extends React.Component{

  componentDidMount(){
    return this.props.fetchItem(this.props.match.params.itemId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.item.id !== nextProps.match.params.itemId) {
      this.props.fetchItem(nextProps.match.params.itemId);
    }
  }

  render(){
    const { item } = this.props;
    if (!item) {
      return <div>Loading...</div>;
      }
    return(
      <div className="items-show">
          <h3>{item.title}</h3>
          <p>{item.description}</p>

          <p>{item.price}</p>
          <Link to="/"className="keep-shopping">Keep Shopping</Link>
      </div>
    );
  }

}


export default ItemShow;
