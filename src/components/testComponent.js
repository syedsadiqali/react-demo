import React from 'react';

class TestComponent extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>{this.props.count}</h1>
        </div>
      );
    }
}

export { TestComponent };
// default exports
// export default testComponent;