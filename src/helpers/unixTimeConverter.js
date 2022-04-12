export const unixTimeConverter = (unixTimestamp) => {
  let date = new Date(unixTimestamp)
  
  let month = date.toLocaleDateString('en-US', {month: 'short'})

  let year = date.getFullYear()

  let dayNum = date.toLocaleDateString('en-NG', {day: 'numeric'})

  let hours = date.getHours()
  if (hours.toString().length === 1) {
    hours = '0' + hours
  }

  let minutes = date.getMinutes()
  if (minutes.toString().length === 1) {
    minutes = '0' + minutes
  }

  let seconds = date.getSeconds()
  if (seconds.toString().length === 1) {
    seconds = '0' + seconds
  }

  let day = date.toLocaleDateString('en-US', {weekday: 'short'})
  
  const formatDate = day + ' ' + dayNum + ' ' + month + ' ' + year + ' ' + hours + ':' + minutes + ':' + seconds
  return formatDate
}