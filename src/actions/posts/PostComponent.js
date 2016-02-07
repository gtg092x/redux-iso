'use strict';

import React from 'react';

require('styles/posts/Post.scss');

class PostComponent extends React.Component {
  render() {
    return (
      <div className="post-component">
        Please edit src/components/posts//PostComponent.js to update this component!
      </div>
    );
  }
}

PostComponent.displayName = 'PostsPostComponent';

// Uncomment properties you need
// PostComponent.propTypes = {};
// PostComponent.defaultProps = {};

export default PostComponent;
