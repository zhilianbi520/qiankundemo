import React from 'react';

class BlankLayout extends React.PureComponent {

  render() {
    const { children } = this.props;
    console.info("====||||");
    return (
      <div id='ChildrenContainer'>{children}</div>
    )
  }
}

export default BlankLayout;
