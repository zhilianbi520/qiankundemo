import React,{ Component } from 'react';
import { history,qiankunStart } from 'umi';
import { Button } from 'antd';


function ChildrenContainer(props){
  console.info(props,"子应用加载了～～～")
  // setTimeout(qiankunStart, 200);

  const goParentApplication = ()=>{
    history.go(-1);
  }
  return (
    <>
      {/*<Button onClick={goParentApplication}>回主应用</Button>*/}
    </>
  );
}
export default ChildrenContainer;
