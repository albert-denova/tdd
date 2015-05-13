var GameRulesManager = function() {
    this.makeMove = function(positionId) {
        if(positionId < 0 || positionId > 8) {
            return false;
        }
        
        return true;
    };
};