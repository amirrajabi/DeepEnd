/**
 * Created by Amir on 27/09/2016.
 */

import React from 'react';

class Content extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 0,
          text: "WEEKLY GIVEAWAY"
        },
        {
          id: 1,
          text: "WEEKLY GIVEAWAY"
        },
        {
          id: 2,
          text: "WEEKLY GIVEAWAY"
        }
      ]
    };
  }

  render() {

    let products = this.state.products.map((item) => {
      return (
        <div key={item.id}
             className="col-xs-12 col-sm-4">
          <div className="product-box">
            <di className="caption">
              <h3>{item.text}</h3>
            </di>
          </div>
        </div>
      );
    });

    return (

      <div className="content">

        <section className="row">
          {products}
        </section>

      </div>

    );
  }

}

export default Content;
