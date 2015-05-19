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

// Test that rock wins lizard
QUnit.test( "RockWinsLizard", function( assert ) {
    var winner = gamesRulesManager.DecideWinner('rock', 'lizard'); 
    assert.equal(winner, 'player1');
});

// Test that lizard loses against rock
QUnit.test( "RockWinsLizard", function( assert ) {
    var winner = gamesRulesManager.DecideWinner('lizard', 'rock'); 
    assert.equal(winner, 'player2');
});