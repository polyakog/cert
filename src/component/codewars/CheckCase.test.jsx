const { assert } = require("chai");
const { sameCase } = require("./CheckCase");

function doTest(a, b, expected) {
    it(`Testing for "${a}" and "${b}"`, function () {
        assert.strictEqual(sameCase(a, b), expected, `For sameCase("${a}","${b}")`);
    });
}

describe("Solution", function () {
    doTest('C', 'B', 1);
    doTest('b', 'a', 1);
    doTest('d', 'd', 1);
    doTest('A', 's', 0);
    doTest('c', 'B', 0);
    doTest('b', 'Z', 0);
    doTest('\t', 'Z', -1);
    doTest('H', ':', -1);
});