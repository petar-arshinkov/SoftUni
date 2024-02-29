import { assert } from "chai";
import { mathEnforcer } from "./planYourTrip.js";



describe("test addFive functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.addFive("test string"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.addFive("5"), "return value must be undefined");
    });
    it("test with valid value", () => {
        assert.equal(mathEnforcer.addFive(-10), -5, "value is correct");
        assert.equal(mathEnforcer.addFive(-5), 0, "value is correct");
        assert.equal(mathEnforcer.addFive(0), 5, "value is correct");
        assert.equal(mathEnforcer.addFive(5), 10, "value is correct");
        assert.equal(mathEnforcer.addFive(5.5), 10.5, "value is correct");
    })
})


describe("test subtractTen functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.subtractTen("test string"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen([]), "return value must be undefined");
        assert.isUndefined(mathEnforcer.subtractTen("10"), "return value must be undefined");
    })

    it("test with valid value", () => {
        assert.equal(mathEnforcer.subtractTen(-10), -20, "result is correct");
        assert.equal(mathEnforcer.subtractTen(0), -10, "result is correct");
        assert.equal(mathEnforcer.subtractTen(10), 0, "result is correct");
        assert.equal(mathEnforcer.subtractTen(15), 5, "result is correct");
        assert.equal(mathEnforcer.subtractTen(15.5), 5.5, "result is correct");
    })
})

describe("test sum functionality", () => {
    it("test with invalid value", () => {
        assert.isUndefined(mathEnforcer.sum("test", "test"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("test", []), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("test", 5), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum([], 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum("5", 10), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "test"), "return value must be undefined");
        assert.isUndefined(mathEnforcer.sum(10, "10"), "return value must be undefined");

    })

    it("test with valid value", () => {
        assert.equal(mathEnforcer.sum(-10, 10), 0, "result is correct");
        assert.equal(mathEnforcer.sum(10, 0), 10, "result is correct");
        assert.equal(mathEnforcer.sum(0, 0), 0, "result is correct");
        assert.equal(mathEnforcer.sum(-10, -5), -15, "result is correct");
        assert.equal(mathEnforcer.sum(10, 5), 15, "result is correct");
        assert.equal(mathEnforcer.sum(10.5, 5), 15.5, "result is correct");
        assert.equal(mathEnforcer.sum(10.5, 5.5), 16, "result is correct");
        assert.equal(mathEnforcer.sum(10, 5.5), 15.5, "result is correct");

    })
})