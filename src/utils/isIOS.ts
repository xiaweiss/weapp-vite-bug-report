/**
 * 是否在 iOS 上（包含 iPhone、iPad）
 */
export const isIOS = () => {
  const deviceInfo = wx.getDeviceInfo()
  return ['ios', 'devtools'].includes(deviceInfo.platform)
}
