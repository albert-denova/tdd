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
    var player1 = {id:'player1', hand:'rock'};
    var player2 = {id:'player2', hand:'lizard'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test( "LizardLosesAgainstRock", function( assert ) {
    var player1 = {id:'player1', hand:'lizard'};
    var player2 = {id:'player2', hand:'rock'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player2');
});

QUnit.test( "RockWinsScissors", function( assert ) {
    var player1 = {id:'player1', hand:'rock'};
    var player2 = {id:'player2', hand:'scissors'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('SameHandBothPlayers', function(assert) {
    var player1 = {id:'player1', hand:'rock'};
    var player2 = {id:'player2', hand:'rock'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'tie');
    
    player1.hand = 'scissors';
    player2.hand = 'scissors';
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'tie');
});

QUnit.test('LizardWinsPaper', function(assert) {    
    var player1 = {id:'player1', hand:'lizard'};
    var player2 = {id:'player2', hand:'paper'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('LizardWinsSpock', function(assert) {    
    var player1 = {id:'player1', hand:'lizard'};
    var player2 = {id:'player2', hand:'spock'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

// Just to accelerate, we will do two cases now for each one until have the full rules
QUnit.test('SpockWinsRock', function(assert) {
    var player1 = {id:'player1', hand:'spock'};
    var player2 = {id:'player2', hand:'rock'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('SpockWinsScissors', function(assert) {
    var player1 = {id:'player1', hand:'spock'};
    var player2 = {id:'player2', hand:'scissors'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('ScissorsWinsLizard', function(assert) {
    var player1 = {id:'player1', hand:'scissors'};
    var player2 = {id:'player2', hand:'lizard'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('ScissorsWinsPaper', function(assert) {
    var player1 = {id:'player1', hand:'scissors'};
    var player2 = {id:'player2', hand:'paper'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('PaperWinsRock', function(assert) {
    var player1 = {id:'player1', hand:'paper'};
    var player2 = {id:'player2', hand:'rock'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('PaperWinsSpock', function(assert) {
    var player1 = {id:'player1', hand:'paper'};
    var player2 = {id:'player2', hand:'spock'};
    
    var winner = gamesRulesManager.DecideWinner([player1, player2]); 
    assert.equal(winner, 'player1');
});

QUnit.test('3Players', function(assert) {
    var player1 = {id:'player1', hand:'paper'};
    var player2 = {id:'player2', hand:'spock'};   
    var player3 = {id:'player3', hand:'lizard'};   
    
    var winner = gamesRulesManager.DecideWinner([player1, player2, player3]); 
    assert.equal(winner, 'player3');
});