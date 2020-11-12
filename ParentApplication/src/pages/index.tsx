import React from 'react';
import { Button, DatePicker } from "antd";
import { history, useModel } from 'umi';
import styles from './index.less';


const { RangePicker } = DatePicker;



function main(props) {
  const goChildApplicationOne = ()=>{
    console.info(window.history,"父应用的window");
    history.push('/ChildApplicationOne')
  }

  const goChildApplicationTwo = ()=>{

    history.push('/ChildApplicationTwo')
  }

  const goNowPage = ()=>{
    history.push('/NowPage')
  }
  // const { setGlobalState } = useModel('@@qiankunStateForSlave');
  console.info(window.fetch,"是啥？？？？");
  return (
    <div>
      <h1 className={styles.title}>主应用页面</h1>
      <Button onClick={goChildApplicationOne}>去第一个子应用</Button>
      <Button onClick={goChildApplicationTwo}>去第二个子应用</Button>
      <Button onClick={goNowPage}>去B端</Button>
      <RangePicker />
      {/*<Button onClick={}>去C端</Button>*/}
      {/*<button onClick={() => setGlobalState({})}>修改主应用全局状态</button>*/}
    </div>
  );
}

export default main;
