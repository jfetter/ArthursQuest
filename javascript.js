
$(document).ready(function(){
  $(".fillIn").hide();
});//document ready
var key =["<b>bo</b>red","penises","ex-boyfriend","pi","darth vader","children","tickled","senior citizen","preforming","lolos","ever","sand bar", "came" ];
var userAnswers =[];

var pushToUserAnswers = function(userAnswers){
  var input = document.getElementById("answer[i]").value;
  var correct = userAnswers.push(input).toLowerCase();
  return correct;
};

var replaceInputWithCorrectAnswer = function()
{
//change the display so that it removes the input box and replaces it with the answer. Bold the letters that are being used for the sub answer.
};

var checkAnswers = function(){

for (var i=0; i<key.length; i++)
{
//if wrong twice just give the answer...
if (key[i]=== userAnswers[i])
{
  replaceInputWithCorrectAnswer;
  pushToUserAnswers();
  $("#p[i+1]").show;
  }
}
else {
  userAnswers.pop();
i --;
};
}//for
return false;
}; //function
