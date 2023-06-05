import { validateHello } from "./SayHallo";
const chai = require("chai");
const Test = chai.assert;

describe("Tests", () => {
    it("test", () => {
        Test.assertEquals(validateHello('ahoj'), true);

        Test.assertEquals(validateHello('meh'), false);
    });
});
