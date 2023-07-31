const data = require('./fixedlist.json')

function onlyUnique(value, index, array) {
    return array.indexOf(value) === index;
  }

let sAs = data.map((val) => val.sA)

let unique_sAs = [...new Set(sAs)]

console.log(unique_sAs)