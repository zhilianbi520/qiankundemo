import request from '@/utils/request';

export async function fakeAccountLogin(params) {
  console.info(params,"=====");
  return request('/ChildProxy/app/mock/259065/login/account', {
    method: 'POST',
    data: params,
  });
}
export async function getFakeCaptcha(mobile) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
