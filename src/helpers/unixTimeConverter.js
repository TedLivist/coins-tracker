export const unixTimeConverter = (unixTimestamp) => {
  let date = new Date(unixTimestamp)
  let hours = date.getHours()
  let minutes = date.getMinutes()
  if (minutes.toString().length === 1) {
    minutes = '0' + date.getMinutes()
  }
  let seconds = date.getSeconds()
  if (seconds.toString().length === 1) {
    seconds = '0' + date.getSeconds()
  }
  let day = date.toLocaleDateString('en-US', {weekday: 'short'})
  
  const formatDate = day + ' ' + hours + ':' + minutes + ':' + seconds
  return formatDate
}