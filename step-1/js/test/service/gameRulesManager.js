var gamesRulesManager = null;

// Setup
QUnit.testStart(function( details ) {
  gamesRulesManager = new GameRulesManager();
});

// Tests
// We will check that we can not call the method without any parameter
QUnit.test( "AlwaysContainParameters", function( assert ) {
    var winner = gamesRulesManager.DecideWinner();
    assert.equal(winner, undefined);
});