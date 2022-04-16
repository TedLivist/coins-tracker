export const capitalize = (str) => {
  return str[0].toUpperCase() + str.slice(1, str.length).toLowerCase()
}

export const blockchainExtract = (urlsArray) => {
  const usefulUrls = urlsArray.filter((item) => item !== '')
  
  const nameAndUrl = []
  for (let url of usefulUrls) {
    const cappedName = capitalize(url.split('//')[1].split('/')[0].split('.')[0])
    nameAndUrl.push({cappedName, url, shortUrl: `${url.slice(0, 15)}...`})
  }

  const uniqueNameAndUrls = nameAndUrl.filter((value, index, self) =>
    index === self.findIndex((t) => (
      t.cappedName === value.cappedName
    ))
  )

  return uniqueNameAndUrls
}