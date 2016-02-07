/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { Component, PropTypes } from 'react';
import s from './PostsPage.scss';
import withStyles from '../../decorators/withStyles';

@withStyles(s)
class PostsPage extends Component {

  static propTypes = {

  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired,
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>Post</h1>
        </div>
      </div>
    );
  }

}

export default PostsPage;
