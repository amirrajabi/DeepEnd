/**
 * Created by Amir on 27/09/2016.
 */

import React from 'react';

class Banner extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      caption: {
        id: 0,
        line1: "BIG FALL SALE",
        line2: "UP TO 80% OFF"
      }
    };
  }

  render() {

    return (

      <div className="banner">


          <h1 className="banner__heading">{this.state.caption.line1}</h1>
          <h2 className="banner__subheading">{this.state.caption.line2}</h2>

          <div className="banner__buttons">
            <a className="btn" href="#">shop men</a>
            <a className="btn" href="#">shop men</a>
            <a className="btn" href="#">shop men</a>
          </div>


      </div>

    );
  }

}

export default Banner;
