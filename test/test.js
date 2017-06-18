var assert = require("assert"); // node.js core module

describe('Array', function(){
  var C = require('../cash.js');  // our module
it('getChange(210,300) should equal [50,20,20]', function(){
    assert.deepEqual(C.getChange(210,300), [50,20,20]);
})
});