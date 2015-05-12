var gamesRulesManager = null;

// Setup
QUnit.testStart(function( details ) {
  gamesRulesManager = new GameRulesManager();
});

// Tests
QUnit.test( "DummyTest", function( assert ) {
  assert.ok( 1 == "1", "Passed!" );
});