export const coinSelect = (items) => {
  const selectObj = []

  for (const item in items) {
    if (item === "usd" || item === "eur") {
      let itemValue = items[item]
      selectObj.push({item, itemValue})
    }
  }

  return selectObj
}