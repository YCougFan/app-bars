import React, { Component, Fragment } from 'react';

import MenuAppBar from './MenuAppBar';
import SimpleAppBar from './SimpleAppBar';

export default class extends Component {
  render() {
    return (
      <Fragment>
          <SimpleAppBar /><br/>
          <MenuAppBar />
      </Fragment>
     )
   }
}