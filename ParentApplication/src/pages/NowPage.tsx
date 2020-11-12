import React, {useState,useEffect} from 'react';

function NowPage(props) {
  useEffect(() => {
    // console.info("====");
    let childFrame = document.getElementById("LoadReady");
    childFrame.addEventListener("load", function() {
      childFrame.contentWindow.postMessage({
        tenantId:'ba67e6cf30dc4f9c9c46adef188bbd04',
        access_token:'e162fa58-df29-4245-a3ee-55dd9d615a80'
      }, "*");
    }, false)
  },[]);
  return (
    <>
      <iframe id="LoadReady" style={{width:'100%',height:'-webkit-fill-available'}} src='http://localhost:8000/'></iframe>
    </>
  );
}

export default NowPage;
