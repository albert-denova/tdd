var GameRulesManager = function() {
    this.DecideWinner = function(player1Hand, player2Hand) {
        if(arguments.length == 0) {
            return;
        }
        
        var winner;
        if(player1Hand === 'rock' && player2Hand === 'lizard') {
            winner = 'player1';
        }
        else if(player1Hand === 'lizard' && player2Hand === 'rock') {
            winner = 'player2';
        }
        else if(player1Hand === 'rock' && player2Hand === 'scissors') {
            winner = 'player1';    
        }
        
        return winner;
    };
};