var { helper } = require("./helper")

function returnHelper(){
    return helper() //expect this to return 0
}

module.exports = { returnHelper }
  
