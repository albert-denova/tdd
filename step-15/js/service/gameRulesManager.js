var GameRulesManager = function() {
    this.DecideWinner = function(hands) {
        if(arguments.length == 0) {
            return;
        }
        
        var winner = 'no winner';
        var winnerIndexes = getWinnerHandIndex(hands);
        
        if(winnerIndexes.length != hands.length) {
            if(winnerIndexes.length == 1) {
                winner = hands[winnerIndexes[0]].id;   
            }
            else if(winnerIndexes.length > 1){
                winner = [];                
                winnerIndexes.forEach(function(winnerIndex) {                    
                    winner.push(hands[winnerIndex].id);
                });
            }
        }        
        else {
            winner = 'tie';   
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
        
    var doesFirstHandWin = function(firstHand, secondHand) {
        var firstWins = false;
        
        if(firstHand === 'rock' && doesRockWin(secondHand)) {
            firstWins = true;
        }
        else if(firstHand === 'lizard' && doesLizardWin(secondHand)) {
            firstWins = true;
        }
        else if(firstHand === 'spock' && doesSpockWin(secondHand)) {
            firstWins = true;
        }
        else if(firstHand === 'scissors' && doesScissorsWin(secondHand)) {
            firstWins = true;
        }
        else if(firstHand === 'paper' && doesPaperWin(secondHand)) {
            firstWins = true;
        }
        
        return firstWins;
    };
    
    var insertIfNotExists = function(array, value) {
        var valueFound = false;
        
        array.forEach(function(element) {
            if(element == value) {
                valueFound = true;   
            }
        });  
        
        if(!valueFound) {
            array.push(value);   
        }
    };
    
    var getWinnerHandIndex = function(hands) {
        var firstPlayerHandIndex = 0;
        var secondPlayerHandIndex = 1;
        
        var currentWinnerIndexes = [];        
        
        while((firstPlayerHandIndex < hands.length) && 
              (secondPlayerHandIndex < hands.length)) {
            var firstPlayerHand = hands[firstPlayerHandIndex].hand;
            var secondPlayerHand = hands[secondPlayerHandIndex].hand;
            
            if(!haveSameHand(firstPlayerHand, secondPlayerHand)) {
                if(!doesFirstHandWin(firstPlayerHand, secondPlayerHand)) {
                    firstPlayerHandIndex = secondPlayerHandIndex;
                }
                
                currentWinnerIndexes = [firstPlayerHandIndex];                
            }
            else {                              
                insertIfNotExists(currentWinnerIndexes, firstPlayerHandIndex);
                insertIfNotExists(currentWinnerIndexes, secondPlayerHandIndex);
            }
            
            secondPlayerHandIndex++; 
        }
        
        // Naive approach to choose if it's real winner, iterate again and see if he wins all beside
        // himself or players with same hand
        var finalWinnerIndexes = [];
        currentWinnerIndexes.forEach(function(winnerHandIndex) {
            var isRealWinner = true;
            hands.forEach(function(playerHand, playerHandIndex) {
                if(playerHandIndex != winnerHandIndex) {
                    var winnerHand  = hands[winnerHandIndex].hand;    
                    
                    if(!haveSameHand(winnerHand, playerHand.hand) && 
                       !doesFirstHandWin(winnerHand, playerHand.hand)) {
                        isRealWinner = false;                        
                    }
                }    
            });
            
            if(isRealWinner) {
                finalWinnerIndexes.push(winnerHandIndex);   
            }
        });
        
        return finalWinnerIndexes;
    };
};