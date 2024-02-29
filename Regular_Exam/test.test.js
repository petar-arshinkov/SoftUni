import { assert } from "chai";
import {planYourTrip} from "./planYourTrip.js";


describe("planYourTrip", function() {
    describe("choosingDestination", function() {
        it("should throw an error for an invalid year", function() {
            assert.throws(() => planYourTrip.choosingDestination("Ski Resort", "Winter", 2023), Error, "Invalid Year!");
        });

        it("should throw an error for an invalid destination", function() {
            assert.throws(() => planYourTrip.choosingDestination("Beach", "Summer", 2024), Error, "This destination is not what you are looking for.");
        });

        it("should recommend visiting in Winter for a Ski Resort", function() {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Winter", 2024), "Great choice! The Winter is the perfect time to visit the Ski Resort.");
        });

        it("should advise visiting in Winter if another season is chosen for Ski Resort", function() {
            assert.equal(planYourTrip.choosingDestination("Ski Resort", "Summer", 2024), "Consider visiting during the Winter for the best experience at the Ski Resort.");
        });
    });

    describe("exploreOptions", function() {
        it("should throw an error for invalid input parameters", function() {
            assert.throws(() => planYourTrip.exploreOptions("not an array", 0), Error, "Invalid Information!");
        });

        it("should return remaining activities after removing the chosen one", function() {
            const activities = ["Skiing", "Snowboarding", "Winter Hiking"];
            assert.equal(planYourTrip.exploreOptions(activities, 1), "Skiing, Winter Hiking");
        });
    });

    describe("estimateExpenses", function() {
        it("should throw an error for invalid distances or costs", function() {
            assert.throws(() => planYourTrip.estimateExpenses(-1, 2), Error, "Invalid Information!");
            assert.throws(() => planYourTrip.estimateExpenses(100, -2), Error, "Invalid Information!");
        });

        it("should classify the trip as budget-friendly for low costs", function() {
            assert.include(planYourTrip.estimateExpenses(100, 4), "The trip is budget-friendly", "Message should indicate a budget-friendly trip");
        });

        it("should indicate planning is needed for higher costs", function() {
            assert.match(planYourTrip.estimateExpenses(200, 10), /The estimated cost for the trip is/, "Message should advise on planning for higher costs");
        });
    });
});
