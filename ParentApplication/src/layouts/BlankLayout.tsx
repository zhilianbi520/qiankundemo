import React from 'react';
import { Button } from 'antd';
import { history , useModel } from 'umi';



const BlankLayout = props =>{
  const { setGlobalState } = useModel('@@qiankunStateForSlave');
  const goParentApplication = ()=>{
    // 回不去
    console.info("回不去主应用的地址～！");
    history.goBack();
  }

  const changeMainValue = ()=>{
    const { setGlobalState } = useModel('@@qiankunStateForSlave');
    setGlobalState({

    })
  }
  return (
    <>
      <Button onClick={goParentApplication}>回主应用</Button>
      <Button onClick={() => setGlobalState({MasterValue:'变了'})}>修改全局状态</Button>
      <div id="ChildBody">{props.children}</div>
    </>
  )
}

// class BlankLayout extends React.PureComponent {
//
//   goParentApplication = ()=>{
//     // 回不去
//     console.info("回不去主应用的地址～！");
//     history.goBack();
//   }
//
//   changeMainValue = ()=>{
//     const { setGlobalState } = useModel('@@qiankunStateForSlave');
//     setGlobalState({
//
//     })
//   }
//
//   render() {
//     const { children } = this.props;
//     return (
//       <>
//         <Button onClick={this.goParentApplication}>回主应用</Button>
//         <button onClick={this.changeMainValue}>修改主应用全局状态</button>
//         <div id="ChildBody">{children}</div>
//       </>
//     )
//   }
// }

export default BlankLayout;
