import { assert } from "chai";
import {lookupChar} from "./lookupChar.js"


describe("test lookupChar",()=>{
    it("test invalid parameters type",()=>{
        assert.isUndefined(lookupChar([],1),"return value must be undefined");
        assert.isUndefined(lookupChar({},1),"return value must be undefined");
        assert.isUndefined(lookupChar(1,1),"return value must be undefined");

        assert.isUndefined(lookupChar("test","1"),"return value must be undefined");
        assert.isUndefined(lookupChar("test",[]),"return value must be undefined");
        assert.isUndefined(lookupChar("test",{}),"return value must be undefined");
        assert.isUndefined(lookupChar("test",1.5),"return value must be undefined");
        
    });

    it("test index",()=>{
       
        assert.equal(lookupChar("test",4),"Incorrect index");
        assert.equal(lookupChar("test",-1),"Incorrect index");
        assert.equal(lookupChar("test",-1),"Incorrect index");

    });

    it("test valid input",()=>{
       
        assert.equal(lookupChar("test",0), "t");
        assert.equal(lookupChar("test",3), "t");
        assert.equal(lookupChar("test",1), "e");

    });
})