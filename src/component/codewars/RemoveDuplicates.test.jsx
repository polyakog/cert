const { assert, config } = require("chai");const { solve } = require("./RemoveDuplicates");
 config.truncateThreshold = 0;

describe("Simple remove duplicates", () => {
    it("Example tests", () => {
        assert.deepEqual(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3]);
        assert.deepEqual(solve([1, 2, 1, 2, 1, 2, 3]), [1, 2, 3]);
        assert.deepEqual(solve([1, 2, 3, 4]), [1, 2, 3, 4]);
        assert.deepEqual(solve([1, 1, 4, 5, 1, 2, 1]), [4, 5, 2, 1]);
        assert.deepEqual(solve([1, 2, 1, 2, 1, 1, 3]), [2, 1, 3]);
    });
});