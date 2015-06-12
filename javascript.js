fill in blanks
$(document).ready(function(){
  $(".answer").hide);
  $("#q[i]").show(function(key, userAnswers){

  });
});

var input = document.getElementById("q[i]").value;
var key =[""];
var userAnswers =[""];
var fillIn=[""]

for (var i=0; i<key.length; i++)
{

if (key[i]=== userAnswers[i])
{
  userAnswers.push(input[i]);
  document.getElementById("fillIn").innerHTML = fillIn[i];
  }
}
else {
"wrong  + pic of laughing dog from duck hunt."
}
return false;
}; //function
