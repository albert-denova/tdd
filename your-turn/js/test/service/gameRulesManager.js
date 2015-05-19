var gamesRulesManager = null;

// Setup
QUnit.testStart(function( details ) {
  gamesRulesManager = new GameRulesManager();
});

// Tests
QUnit.test( "AlwaysContainParameters", function( assert ) {
    var winner = gamesRulesManager.DecideWinner();
    assert.equal(winner, undefined);
});

QUnit.test( "RockWinsLizard", function( assert ) {
    var winner = gamesRulesManager.DecideWinner('rock', 'lizard'); 
    assert.equal(winner, 'player1');
});

QUnit.test( "LizardLosesAgainstRock", function( assert ) {
    var winner = gamesRulesManager.DecideWinner('lizard', 'rock'); 
    assert.equal(winner, 'player2');
});

QUnit.test( "RockWinsScissors", function( assert ) {
    var winner = gamesRulesManager.DecideWinner('rock', 'scissors'); 
    assert.equal(winner, 'player1');
});
