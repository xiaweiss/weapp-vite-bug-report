/**
 * 是否在 PC 上
 */
export const isPC = () => {
  const deviceInfo = wx.getDeviceInfo()
  return ['mac', 'windows', 'ohos_pc'].includes(deviceInfo.platform)
}
