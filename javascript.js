
// $(document).ready(function(){
//   $(".fillIn").hide();
// });

var keyBold =["<b>bo</b>red","peni<b>s</b>e<b>s</b>","ex-bo<b>y</b>friend","<b>p</b>i","d<b>a</b>rth vader","childre<b>n</b>","<b>t</b>ickled","<b>s</b>enior c<b>i</b>tizen","preformi<b>n</b>g","lo<b>l</b>os","e<b>v</b>er","sand ba<b>r</b>", "ca<b>m</b>e" ];
var key = ["bored","penises","ex-boyfriend","pi","darth vader","children","tickled","senior citizen","preforming","lolos","ever","sand bar", "came" ];
var fillIns = ["<p>Scouring the Phoenix Art Museum until we finally found the <input id="answer1" type="text" name="penises"> in the basement, then talking about kissing in the parking lot until I could almost taste your tongue in my mouth &hellip; and then didn&lsquo;t. (5th and 7th letters)<input type="submit" value="Submit"></p>",
"<p>Watching a dirty puppet play while shit-talking about how my<input id="answer2" type="text" name="ex-boyfriend"> loved playing Magic the gathering but failed to gather magic in his pants. (5th letter)<input type="submit" value="Submit"></p>",
"<p>The thrill of watching you dive face deep into my <input id="answer3" type="text" name="pi"> day celebration after you came to support me at my first book signing.  (first letter)<input type="submit" value="Submit"></p>",
"<p>Ending our glare-gathering make-out session by marching out of the Phoenix Symphony hall to <input id="answer4" type="text" name="Darth Vader">&lsquo;s theme song. (2nd letter) <input type="submit" value="Submit"></p>",
"<p>&hellip;And then taking down the death star a week later, armed with nothing but a crepe-paper-wrapped stick and several small <input id="answer5" type="text" name="children">. (last letter)<input type="submit" value="Submit"></p> ",
"<p>Getting tied to your weight bench while you <input id="answer6" type="text" name="tickled"> me half-to-death with your new toys.  (1st letter)<input type="submit" value="Submit"></p>",
"<p>Making you pretend to like the Beatles while we lived it up on the <input id="answer7" type="text" name="senior citizen"> floor of the Mirage in Vegas. (1st letter)<input type="submit" value="Submit"></p>",
"<p><input id="answer8" type="text" name="preforming"> my first surgery by removed a spider egg sack from your back. (8th and 9th letters)<input type="submit" value="Submit"></p> ",
"<p>A day full of <input id="answer9" type="text" name="lolos"><input type="submit" value="Submit"> walkin&lsquo; &lsquo;round the mean streets of Chandler, laughing our asses off to the most boring radio show <input id="answer10" type="text" name="ever"><input type="submit" value="Submit"> then sharing the drama of a comic book wrought with expressive Jewish silence. (1st letter 2nd letter) <input type="submit" value="Submit"></p>",
"<p>Playing beached whale rescuer by keeping your skin moist while you lay on the floor of <input id="answer11" type="text" name="Sand Bar"> and nearly died from the effort of trying to keep up with my amazing cyclo-magnificence. (last letter)<input type="submit" value="Submit"</p>",
"<p>Practicing abstinence until we practically <input id="answer12" type="text" name="came"> in ach other&lsquo;s faces&hellip; and then cumming in each other&lsquo;s faces. (3rd letter)<input type="submit" value="Submit"></p>"];
var attempts = 0;
// var userAnswers =[];



var checkAnswers = function(){
for (var i=0; i<key.length; i++)
{
  var pushToUserAnswers = function(userAnswers){
    var inputs = document.getElementById("'"+"answer"+i+"'").value;
    var correct = userAnswers.push(inputs).toLowerCase();
    return correct;
  };

  var replaceInputWithCorrectAnswer = function()
  {
    $("input").html(keyBold[i]);
    // document.getElementById("''"+"p"+i+"'").innerHTML = key[i];};
  }

if (key[i]=== this.input || attempts >= 2)
{
  replaceInputWithCorrectAnswer;
  // pushToUserAnswers();
  $("form").append(fillIns[i])
  // $("#p"+ (i+1) + "'").show;
  }

else {
  // userAnswers.pop();
i --;
attempts ++;
};
}//for
return false;
}; //function
