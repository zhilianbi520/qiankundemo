import React, {useState,useLayoutEffect} from 'react';
import {connect, useModel } from "umi";






const   Welcome = props =>{
  const [color,setColor] = useState('');
  const [start,setStart] = useState('');
  const { mainState } = useModel('@@qiankunStateFromMaster')||{};
  console.info(mainState,"11111");
  useLayoutEffect(()=>{
    const { dispatch } = props;
    dispatch({
      type: 'welcome/WelcomeData',
      payload:{
        query:1,
      }
    }).then((res)=>{
      setColor(res.data.color);
      setStart(res.data.start)
    })
  },[])
  return (
    <>
      <p>颜色是：{color}</p>
      <p>图形是：{start}</p>
      <p>主应用传过来的值：{mainState&&mainState.mainState}</p>
    </>
  )
}
export default connect(({ welcome, loading }) => ({
  welcome: welcome,
  loading
}))(Welcome);
