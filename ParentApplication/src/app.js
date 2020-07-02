import { useState } from "react";

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({
    MasterValue:"我是主应用拿过来的值"
  });
  const [mainState, setMainState] = useState({
    mainState:"父应用"
  })
  return {
    globalState,
    setGlobalState,
    mainState,
    setMainState
  }
}
