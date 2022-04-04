var module = require("./helper");
module.helper = jest.fn()
module.helper.mockReturnValue(1);

var {returnHelper} = require("./returnHelper")

console.log("hi")

test("mocking helper", function () {
    expect(returnHelper()).toEqual(1);
});