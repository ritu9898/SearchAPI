import React, { Component } from 'react';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { variable: 0 };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
            <div className="col-md-3">
                Yeass
            </div>
        </div>
      </div>
    );
  }
}

export default Feed;

Feed.propTypes = {
};