import React from "react";

class SearchForm extends React.Component{
  constructor(props){
    super(props);
    this.state={
      description:''
    };

    this.updateQuery = this.updateQuery.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateQuery(){
    return (e) => this.setState({ description: e.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.searchItems(this.state).then(
      this.props.history.push("/search")
    );
    this.setState({description:''});
  }

  render(){
      return(
        <div>
            <form onSubmit={this.handleSubmit} className="search">
              <div className="search-input">
                <input type="text"
                  value={this.state.description}
                  placeholder={"Search Items"}
                  onChange={this.updateQuery()}>
                </input>
              </div>
            <div className="search-button">
              <button className="">Search</button>
            </div>
          </form>
      </div>
    );
  }
}

export default SearchForm;
