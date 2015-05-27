var GameRulesManager = function() {
    this.DecideWinner = function(hands) {
        if(arguments.length == 0) {
            return;
        }
        
        var player1Hand = hands[0].hand;
        var player2Hand = hands[1].hand;
        
        var winner = hands[1].id;
        if(haveSameHand(player1Hand, player2Hand)) {
            winner = 'tie';
        }
        else {        
            if(player1Hand === 'rock' && doesRockWin(player2Hand)) {
                winner = hands[0].id;
            }
            else if(player1Hand === 'lizard' && doesLizardWin(player2Hand)) {
                winner = hands[0].id;
            }
            else if(player1Hand === 'spock' && doesSpockWin(player2Hand)) {
                winner = hands[0].id;
            }
            else if(player1Hand === 'scissors' && doesScissorsWin(player2Hand)) {
                winner = hands[0].id;
            }
            else if(player1Hand === 'paper' && doesPaperWin(player2Hand)) {
                winner = hands[0].id;
            }
        }
        
        return winner;
    };
    
    // Private
    var doesRockWin = function(oppositeHand) {
        var rockWins = false;
        
        if((oppositeHand === 'lizard') ||
           (oppositeHand === 'scissors')) {
            rockWins = true;
        }
        
        return rockWins;
    };
    
    var doesLizardWin = function(oppositeHand) {
        var lizardWins = false;
        
        if((oppositeHand === 'paper') ||
           (oppositeHand === 'spock')) {
            lizardWins = true;   
        }
        
        return lizardWins;
    };
    
    var doesSpockWin = function(oppositeHand) {
        var spockWins = false;
        
        if((oppositeHand === 'rock') ||
           (oppositeHand === 'scissors')) {
            spockWins = true
        }
        
        return spockWins;
    };
    
    var doesScissorsWin = function(oppositeHand) {
        var scissorsWins = false;
        
        if((oppositeHand === 'lizard') ||
           (oppositeHand === 'paper')) {
            scissorsWins = true
        }
        
        return scissorsWins;
    };
    
    var doesPaperWin = function(oppositeHand) {
        var paperWins = false;
        
        if((oppositeHand === 'rock') ||
           (oppositeHand === 'spock')) {
            paperWins = true
        }
        
        return paperWins;
    };
    
    var haveSameHand = function(player1Hand, player2Hand) {
        var sameHand = false;
        if(player1Hand == player2Hand) {
            sameHand = true;   
        }
        
        return sameHand;
    };
};