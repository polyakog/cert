const chai = require("chai");
const { quarterOf } = require("./QuarterOfYear");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Basic Tests", () => {
    it("Testing for fixed tests", () => {
        assert.strictEqual(quarterOf(3), 1)
        assert.strictEqual(quarterOf(8), 3)
        assert.strictEqual(quarterOf(11), 4)
    });
});
