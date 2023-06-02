const chai = require("chai");
const { reverseNumber } = require("./ReversNumberInAnyBase");
const assert = chai.assert;

describe("Reverse a number in any base", function () {

    function doTest([n, b, out]) {
        assert.strictEqual(reverseNumber(n, b), out, `Reverse ${n} in base-${b}`);
    }

    it("Tests from description", function () {
        [[12n, 2n, 3n], [10n, 5n, 2n], [45n, 30n, 451n], [3n, 4n, 3n], [5n, 1n, 5n]].forEach(doTest);
    });

});
