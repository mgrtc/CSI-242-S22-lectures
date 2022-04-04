////*************************************************************************
////*************************************************************************
//// Lecture  11: Testing with Jest
////*************************************************************************
////*************************************************************************



//Install Node: https://nodejs.org/en/download/
//Install and connect JEST: $ npm i --global jest
//create package.json and {NAME}.test.js 


function add(x, y) {
    return x + y;
}

const TOYS = ["doll", "top", "iPad"];

function getRandomToy() {
  let idx = Math.floor(
      Math.random() * TOYS.length);
  return {
    toy: {
      name: TOYS[idx],
      price: 34.99,
    },
  };
}

function getCartTotal(cart, discount=0){
  var total = 0
  for(const elem of cart){
    total += elem.price * elem.qty
  }
  return total * (1 - discount)
}

module.exports = { getRandomToy, add, getCartTotal};

