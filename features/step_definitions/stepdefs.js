const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');

function WhatsInTheFridge(contents) {
    // return whats in the fridge
    return "Nothing"
}

Given('I have an empty fridge', function () {
    // return the fridges contents
    this.contents = 'Nothing';
});

When('I ask whether there is something in the fridge', function () {
    // return the actual answer or whats in the fridge
    this.AnswerActual = WhatsInTheFridge(this.contents);
})

Then('I should be told {string}', function (AnswerExpected) {
    // assert the actual answer is the expected answer
    assert.strictEqual(this.AnswerActual, AnswerExpected);
});