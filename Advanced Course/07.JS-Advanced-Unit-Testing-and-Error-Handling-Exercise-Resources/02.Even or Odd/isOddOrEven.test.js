import { assert } from "chai";
import { isOddOrEven } from "./isOddOrEven.js";

describe("isOddOrEven", () => {
    it("test with non string value", () => {
        assert.equal(isOddOrEven({ prop: "test" }), undefined, "return type must be undefined");
        assert.equal(isOddOrEven(5), undefined, "return type must be undefined");
        assert.isNotOk(isOddOrEven([]), "return type myst be undefined")
    });
    it("test with valid string value",()=>{
        assert.equal(isOddOrEven("test1"),"odd", "result is correct (odd)")
        assert.equal(isOddOrEven("test"),"even", "result is correct (even)")
    })
})