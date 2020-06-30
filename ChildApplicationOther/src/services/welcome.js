import request from '@/utils/request';

export async function getWelcomeData(query) {
  return request(`/ChildProxy/app/mock/259065/WelcomeData?query=${query.query}`);
}
