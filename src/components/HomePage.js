/**
 * Created by Amir on 27/09/2016.
 */

import React from 'react';
import Header from './partiales/Header';
import Banner from './partiales/Banner';
import Content from './partiales/Content';

class HomePage extends React.Component {

  render() {
    return (

      <div className="home-page">

          <Header/>

        <section className="container-fluid">
          <Banner/>
        </section>

        <section className="container">
          <Content/>
        </section>

      </div>

    );
  }

}

HomePage.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default HomePage;
