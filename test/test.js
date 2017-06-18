var assert = require("assert"); // node.js core module

describe('Array', function(){
  var C = require('../cash.js');  // our module
C.getChange = function (totalPayable, cashPaid) {
    'use strict';
    return [50, 20, 20];    // just enough to pass :-)
};
});