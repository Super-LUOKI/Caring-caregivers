const app = getApp<IAppOption>()

type DataType = {
  hospital: HospitalType | null
}

Page<DataType, any>({
  /**
   * Page initial data
   */
  data: {
    hospital: null
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad(options: { id: string }) {
    const hospitals = app.globalData.hospitals as HospitalType[]
    const targetHosp = hospitals.find(item => item.id == Number(options.id)) || null
    this.setData({ hospital: targetHosp })
  },
  handleCall() {
    if(!this.data.hospital) return
    wx.makePhoneCall({
      phoneNumber: this.data.hospital.phone
    })

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage() {

  }
})