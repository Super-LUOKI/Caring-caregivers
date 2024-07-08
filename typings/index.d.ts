/// <reference path="./types/index.d.ts" />

type HospitalType = {
  id: number;
  name: string;
  price:string;
  imgs:string[],
  detail:[string, string][],
  phone: string;
}
interface IAppOption {
  globalData: {
    userInfo?: WechatMiniprogram.UserInfo,
    hospitals?: HospitalType[]
  }
  userInfoReadyCallback?: WechatMiniprogram.GetUserInfoSuccessCallback,
}