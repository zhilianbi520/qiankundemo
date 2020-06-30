
import { getWelcomeData } from '@/services/welcome';

const Model = {
  namespace: 'welcome',
  state: {
  },
  effects: {
    *WelcomeData({ payload }, { call }) {
      const response = yield call(getWelcomeData, payload);
      return response;
    }
  },
  reducers: {

  },
};
export default Model;
