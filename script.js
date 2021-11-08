var createPolitician = function(name, partyColor) {

  var politician = {};

  politician.name = name;

  politician.partyColor = partyColor;

  politician.electionResults = null;

  politician.totalVotes = 0;

  politician.tallyUpTotalVotes = function()
  {
   this.totalVotes = 0;

   for(var i = 0; i < this.electionResults.length; i++)
   {
      this.totalVotes = this.totalVotes + this.electionResults[i];
   }

  };

  return politician;

};

var jane = createPolitician("Jane Doesitall", [245,141,136]);

var betsy = createPolitician("Betsy Rocks", [132,17,11]);

betsy.electionResults = [5,1,7,2,33,6,4,2,1,14,8,3,1,11,11,0,5,3,3,3,7,4,8,9,3,7,2,2,4,2,8,3,15,15,2,12,0,4,13,1,3,2,8,21,3,2,11,1,3,7,2];

jane.electionResults = [4,2,4,4,22,3,3,1,2,15,8,1,3,9,0,6,1,5,5,1,3,7,8,1,3,3,1,3,2,2,6,2,14,0,1,6,7,3,7,3,6,1,3,17,3,1,2,11,2,3,1];

betsy.electionResults[9]=1;
jane.electionResults[9]=28;

betsy.electionResults[4]=17;
jane.electionResults[4]=38;

betsy.electionResults[43]=11;
jane.electionResults[43]=27;

var setStateResults = function(state)
{
   theStates[state].winner = null;

   if (betsy.electionResults[state] > jane.electionResults[state]){
     theStates[state].winner = betsy;
   }
   else if (betsy.electionResults[state] < jane.electionResults[state]){
     theStates[state].winner = jane;
   }

   var stateWinner = theStates[state].winner

   if (stateWinner != null) {
    theStates[state].rgbColor = stateWinner.partyColor;
   }
   else {
     theStates[state].rgbColor = [11,32,57];
   }

var stateResults = document.getElementById('stateResults');

var header = stateResults.children[0];
var body = stateResults.children[1];

var stateName = header.children[0].children[0];
   stateName.innerText = theStates[state].nameFull;

var stateAbbreviation = header.children[0].children[1];
   stateAbbreviation.innerText = theStates[state].nameAbbrev;

var candidateName1 = body.children[0].children[0];
   candidateName1.innerText = betsy.name;

var candidateName2 = body.children[1].children[0];
   candidateName2.innerText = jane.name;

var candidate1Results = body.children[0].children[1];
   candidate1Results.innerText = betsy.electionResults[state];

var candidate2Results = body.children[1].children[1];
   candidate2Results.innerText = jane.electionResults[state];

var winnersName = body.children[2].children[1];

if (theStates[state].winner ===null) {winnersName.innerText = "DRAW";
} else {
   winnersName.innerText = theStates[state].winner.name;
}

};

betsy.tallyUpTotalVotes();
jane.tallyUpTotalVotes();

var countryResults = document.getElementById('countryResults');
var row = countryResults.children[0].children[0];


var winner = function()
{
   if (betsy.totalVotes > jane.totalVotes)
      {
      winner = betsy.name;
   } else if (betsy.totalVotes <
       jane.totalVotes)
      {
      winner = jane.name;

    }else
      {winner = "Draw!";}
};

winner();


row.children[0].innerText = betsy.name;
row.children[1].innerText = betsy.totalVotes;
row.children[2].innerText = jane.name;
row.children[3].innerText = jane.totalVotes;
row.children[5].innerText = winner;
