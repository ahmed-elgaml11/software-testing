const assert = require('assert')
const { Given, When, Then } = require('@cucumber/cucumber')
const { isPositive } = require('../../../src/app')


Given('number {int}', function (number) {
    this.number = number;
});

When('i ask if {int} + or -', function (number) {
    this.answer = isPositive(this.number); 
});

Then('I should receive {string}', function (expected) {
    assert.equal(this.answer, expected);
});
