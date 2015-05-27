var GameRulesManager = function() {
    this.DecideWinner = function(player1Hand, player2Hand) {
        if(arguments.length == 0) {
            return;
        }
        
        var winner = 'player2';
        if(player1Hand === 'rock' && doesRockWin(player2Hand)) {
            winner = 'player1';
        }
        else if(player1Hand === 'lizard' && doesLizardWin(player2Hand)) {
            winner = 'player1';
        }
        
        return winner;
    };
    
    // Private
    var doesRockWin = function(oppositeHand) {
        var rockWins = false;
        
        if((oppositeHand == 'lizard') ||
           (oppositeHand == 'scissors')) {
            rockWins = true;
        }
        
        return rockWins;
    };
    
    var doesLizardWin = function(oppositeHand) {
        var lizardWins = false;
        
        return lizardWins;
    };
};