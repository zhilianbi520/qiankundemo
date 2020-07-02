import React from 'react';
import { Button } from 'antd';
import { history } from 'umi';

class BlankLayout extends React.PureComponent {

  goParentApplication = ()=>{
    // 回不去
    console.info("回不去主应用的地址～！");
    history.goBack();
  }

  render() {
    const { children } = this.props;
    console.info("====||||");
    return (
      <>
        <Button onClick={this.goParentApplication}>回主应用</Button>
        <div id="ChildBody">{children}</div>
      </>
    )
  }
}

export default BlankLayout;
