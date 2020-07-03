import { useState } from "react";

export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({
    MasterValue:"传给子应用一的值"
  });
  const [mainState, setMainState] = useState({
    mainState:"传给子应用二的值"
  })
  return {
    globalState,
    setGlobalState,
    mainState,
    setMainState
  }
}
