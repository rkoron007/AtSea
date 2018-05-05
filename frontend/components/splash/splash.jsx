import React from "react";

class Splash extends React.Component{

  render(){
    return(
      <div className="splash-contain">
        <div className="splashImage"></div>
        <ul className="sellers-info">
          <li>
            <div className="check-title">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="seller-title">Unique Everything</p>
            </div>
            <p>Love the sea? So do we.
              We have hundreds of unique nautical items.</p>
          </li>
          <li>
            <div className="check-title">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="seller-title">Independent Sellers</p>
            </div>
            <p>From hardened sailors to gods.
              Everyone is welcome at atSea.</p>
          </li>
          <li>
            <div className="check-title">
              <i className="fa fa-check" aria-hidden="true"></i>
              <p className="seller-title">Secure Shopping</p>
            </div>
            <p>What's more secure than not even
              giving us any identifying information? Nothing.</p>
          </li>
        </ul>
        <h1 className="staff-headline">Staff Favorites</h1>
      </div>
    );
  }


}

export default Splash;
