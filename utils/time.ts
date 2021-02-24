export const msToTime = (ms: number) => {
  const sec = Math.floor(ms / 1000)
  const min = Math.floor(sec / 60)
  const hour = Math.floor(min / 60)
  return {
    hour,
    min: min - hour * 60,
    sec: sec - min * 60
  }
}