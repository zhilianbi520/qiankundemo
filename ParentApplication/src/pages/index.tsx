import React from 'react';
import { Button } from "antd";
import { history, useModel } from 'umi';
import styles from './index.less';

function main(props) {
  const goChildApplicationOne = ()=>{
    history.push('/ChildApplicationOne')
  }

  const goChildApplicationTwo = ()=>{
    history.push('/ChildApplicationTwo')
  }
  return (
    <div>
      <h1 className={styles.title}>主应用页面</h1>
      <Button onClick={goChildApplicationOne}>去第一个子应用</Button>
      <Button onClick={goChildApplicationTwo}>去第二个子应用</Button>
    </div>
  );
}

export default main;
