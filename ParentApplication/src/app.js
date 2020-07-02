import { useState } from "react";

const useQiankunStateForSlave = ()=> {
  const [globalState, setGlobalState] = useState({
    slogan: 'Hello MicroFrontend',
  });

  return {
    globalState,
    setGlobalState,
  }
}

export default useQiankunStateForSlave;
