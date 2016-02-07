/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './LoginPage.scss';
import withStyles from '../../decorators/withStyles';


const title = 'Log In';

@withStyles(s)
class LoginPage extends Component {

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  componentWillMount() {
    this.context.onSetTitle(title);
  }
  handleClick(){

  }
  render() {
    var logMessage = 'Please click log in';
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{title}</h1>
          <p>{logMessage}</p>
          <button onClick={this.handleClick.bind(this)}>Log In</button>
        </div>
      </div>
    );
  }

}

export default LoginPage;
