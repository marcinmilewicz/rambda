const curryThree = require("./internal/curryThree")

function update(index, newValue, arr){
  const arrClone = arr.concat()

  return arrClone.fill(newValue, index, index + 1)
}

module.exports = curryThree(update)
