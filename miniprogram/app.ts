// app.ts
App<IAppOption>({
  globalData: {
    hospitals:[
      {
        id:1,
        name: '汝城县人民医院',
        price: "价格面议",
        imgs: ['https://img.yzcdn.cn/vant/cat.jpeg', '/images/xxx.png'],
        detail: [
          ['服务内容', '满足患者住院时的护理需求，依据患者自身情况。'],
          ['适用人群', '适用于行动不便或处于手术前期及手术康复期。'],
          ['护理项目', "日常生活起居护理，清洁护理，饮食护理，压疮护理。"],
        ],
        phone: '15666666666'
      },
      {
        id:2,
        name: '汝城县中医医医院',
        price: "价格面议",
        imgs: ['https://img.yzcdn.cn/vant/cat.jpeg'],
        detail: [
          ['服务内容', '满足患者住院时的护理需求，依据患者自身情况。'],
          ['适用人群', '适用于行动不便或处于手术前期及手术康复期。'],
          ['护理项目', "日常生活起居护理，清洁护理，饮食护理，压疮护理。"]
        ],
        phone: '15666666666'
      },
      {
        id:3,
        name: '汝城县妇幼保健院',
        price: "价格面议",
        imgs: ['https://img.yzcdn.cn/vant/cat.jpeg'],
        detail: [
          ['服务内容', '满足患者住院时的护理需求，依据患者自身情况。'],
          ['适用人群', '适用于行动不便或处于手术前期及手术康复期。'],
          ['护理项目', "日常生活起居护理，清洁护理，饮食护理，压疮护理。"]
        ],
        phone: '15666666666'
      },
      {
        id:4,
        name: '汝城县精神病医院',
        price: "价格面议",
        imgs: ['https://img.yzcdn.cn/vant/cat.jpeg'],
        detail: [
          ['服务内容', '满足患者住院时的护理需求，依据患者自身情况。'],
          ['适用人群', '适用于行动不便或处于手术前期及手术康复期。'],
          ['护理项目', "日常生活起居护理，清洁护理，饮食护理，压疮护理。"]
        ],
        phone: '15666666666'
      }
    ]
  },
  onLaunch() {
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // // 登录
    // wx.login({
    //   success: res => {
    //     console.log(res.code)
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //   },
    // })
  },
})