const { assert } = require("chai");
const without = require("../without");

describe("#without", () => {
  it("returns [1, 2, 4] without [3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(without([1, 2, 3, 4], [3]), [1, 2, 4]);
  });
});