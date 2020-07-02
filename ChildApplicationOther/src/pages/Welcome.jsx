import React, {useState,useLayoutEffect} from 'react';
import {connect, useModel } from "umi";






const   Welcome = props =>{
  const [color,setColor] = useState('');
  const [start,setStart] = useState('');
  // const add = useModel('@@qiankunStateForSlave');
  // console.info(add,"11111");
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
    </>
  )
}
export default connect(({ welcome, loading }) => ({
  welcome: welcome,
  loading
}))(Welcome);
