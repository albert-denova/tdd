var gamesRulesManager = null;

// Setup
QUnit.testStart(function( details ) {
  gamesRulesManager = new GameRulesManager();
});

// Tests
QUnit.test( "SimpleMovement", function( assert ) {
  assert.ok(gamesRulesManager.makeMove(0), "Passed!" );
});

QUnit.test( "SecondSimpleMovement", function( assert ) {
  assert.notOk(gamesRulesManager.makeMove(-1), "Passed!" );
  assert.notOk(gamesRulesManager.makeMove(9), "Passed!" );
});