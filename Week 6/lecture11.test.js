const { getRandomToy, add, getCartTotal } = require("./lecture11");

// ******
// Expect
// ******

// test("add should return sum", function () {
//     let sum = add(3, 3);
//     expect(sum).toEqual(5);
// });

describe("add function", function () {

    test("return sum", function () {
        let sum = add(2, 3);
        expect(sum).toEqual(5);
    });
  
    test("return sum w/neg numbers", function () {
        let sum = add(-2, 3);
        expect(sum).toEqual(1);
    });
});

// ********
// Matchers
// ********

// .toEqual(obj)  basically == but works on reference types too
//     Has the same value (eg, different objects with same values match)
// .toBe(obj)  basically ===
//     Is the same object (eg, different objects with same values do not count)
// .toContain(sought)
//     Does object/array contain this item?
// .not.
//     Add before matcher to invert (eg expect("hi").not.toEqual("bye"))


// describe("matchers", function () {
//     test("toBe and toEqual are different", function () {
//       let nums = [1, 2, 3];
//       let newNums = nums.slice();
  
//       expect(nums).not.toBe(newNums);  // not the same reference!
//       expect(nums).toEqual(newNums);   // same values so we use toEqual
//       expect(nums).toContain(newNums[0])
//     });
//   });


// ***
// Any
// ***

// test("random toy", function () {
//   let toy = getRandomToy();
//   expect(toy).toEqual({
//     toy: {
//       name: expect.any(String),
//       price: 34.99,
//     },
//   });
// });

// Before and After Demo
// getCartTotal(cart, discount=0)

// describe("getCartTotal", function () {
//     beforeAll(function() {
//         console.log("Run once before all tests");
//     });
    
//     let cart;
//     beforeEach(function () {
//         console.log("Run before each test")
//         cart = [
//             { id: "le croix", price: 4, qty: 3 },
//             { id: "pretzels", price: 8, qty: 10 },
//         ];
//     });
//     test("total w/o discount", function () {

//         const total = getCartTotal(cart);
//         expect(total).toEqual(92);
//     });

//     test("total w/discount", function () {

//         const total = getCartTotal(cart, 0.5);
//         expect(total).toEqual(46);
//     });

//     afterEach(function() {
//         console.log("Run after each test");
//     });
    
//     afterAll(function() {
//         console.log("Run once after all tests");
//     });
// });

// Before / After
// Jest gives us hooks we can tap into so
// we don’t repeat common setup/teardown:

// For one-time setup/teardown:
// beforeAll: run once before all tests start
// afterAll: run once after all tests finish
// For frequent setup/teardown:
// beforeEach: run before each test starts
// afterEach: run after each test finishes


// run with --coverage flag

// *********************************************
// Test Driven Development: Red, Green, Refactor
// *********************************************

// Write tests first, they will fail
// Only write the code needed to make the tests succeed
// Then improve the code if it seems to need improving
// Every time you change the code run all tests

// Benefits of TDD
// Writing tests first helps you understand what a function needs to do
// Writing tests first can prevent you from making bugs in the first place
// Writing tests first leads to higher-quality tests
// If you write the tests after the code, you often write tests that pass
// based on your memory of the implementation—rather than the requirements


// *******
// Mocking
// *******

// AJAX requests
// Reading/Writing to files
// Impure functions like Math.random

test("mocking random", function () {
    global.Math.random = jest.fn();
    global.Math.random.mockReturnValue(0.99);
    expect(getRandomToy().toy.name).toEqual("iPad");
});