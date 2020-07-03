import React from 'react';
import { Button } from 'antd';
import { history , useModel } from 'umi';



const BlankLayout = props =>{
  const { setGlobalState , setMainState } = useModel('@@qiankunStateForSlave');
  const goParentApplication = ()=>{
    history.push("/");
  }

  const changeState = ()=>{
    if(history.location.pathname.indexOf('ChildApplicationTwo')>-1){
      setMainState({
        mainState:'改变主应用传给我的值，我是第二个子应用'
      })
    }else if(history.location.pathname.indexOf('ChildApplicationOne')>-1){
      setGlobalState({
        MasterValue:'改变主应用传给我的值，我是第一个个子应用'
      })
    }
  }
  return (
    <>
      <Button onClick={goParentApplication}>回主应用</Button>
      <Button onClick={changeState}>修改全局带过来的状态</Button>
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
