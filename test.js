// function grabAnswer(){
//   var z = 0;
//   thing = "'answer";
//   thing += z +"'";
//   console.log(thing);
//   var answer1 = $(thing).val();
//   console.log(answer1);
//   return answer1;
//   }

function runAll(){
//  for(var i=0; i<12; i++){
var i=0;
grabAnswer = grabAnswer();
console.log(grabAnswer);
checkKey(grabAnswer);
removeAnswerClass();
displayBoldedAnswer(i);
revealNextFillIn(i);
//bringButtonBack();
//}
 }

var grabAnswer =function(){
  var given = $(".answer").val();
  return given.toLowerCase();
};

// var grabAnswer =function(){
//   var given = $(".answer").val();
//   return given.toLowerCase();
// };

function checkKey(grabAnswer){
  console.log(grabAnswer);
  var key = ["came","sand bar","ever","lolos","preforming","senior citizen","tickled","children","darth vader","pi","ex-boyfriend","penises","bored"];
  // for (var i =0; i < key.length; i++)
    if (grabAnswer == key[key.length-1]){
       console.log("this works");
       key.pop();
       console.log(key);
       return key;
    } else {
      alert("wrong!");
    }
  };

  function displayBoldedAnswer(i){
      var n = i+1;
      var keyBold= ["ca<b>m</b>e", "sand ba<b>r</b>","e<b>v</b>er","lo<b>l</b>os","preformi<b>n</b>g","<b>s</b>enior c<b>i</b>tizen","<b>t</b>ickled","childre<b>n</b>","d<b>a</b>rth vader","<b>p</b>i","ex-bo<b>y</b>friend","peni<b>s</b>e<b>s</b>","<b>bo</b>red"];
      boldedAnswer = (keyBold[keyBold.length-1]);
      // document.getElementById("'"+"p"+i+"'").innerHTML = boldedAnswer;};
      $("input").hide();
      $("button").hide();
      $("span:nth-of-type(n)").append(boldedAnswer);
  };

  function removeAnswerClass(){
    $("input:first").removeClass("answer");
  };

function revealNextFillIn(i){
  var n = i;
  //var test = ["<p>something</p>","something else", "a third thing"];
  var fillIns = ['<p>Scouring the Phoenix Art Museum until we finally found the <input class="answer" type="text" placeholder="mmm&hellip;" name="penises"> in the basement, then talking about kissing in the parking lot until I could almost taste your tongue in my mouth &hellip; and then left me in anticipation.</p>',
  '<p>Watching a dirty puppet play while shit-talking about how my<input id="answer2" class="answer" placeholder="__-_________" type="text" name="ex-boyfriend"> loved playing Magic the gathering but failed to gather magic in his pants.</p>',
  '<p>The thrill of watching you dive face deep into my <input id="answer3" class="answer" placeholder="num num" type="text" name="pi"> day celebration after you came to support me at my first book signing. </p>',
  '<p>Ending our glare-gathering make-out session by marching out of the Phoenix Symphony hall to <input id="answer4" class="answer" placeholder="space in vader" type="text" name="Darth Vader">&lsquo;s theme song. </p>',
  '<p>&hellip;And then taking down the death star a week later, armed with nothing but a crepe-paper-wrapped stick and several small <input id="answer5" type="text" class="answer" placeholder="--------" name="children">.</p>',
  '<p>Getting tied to your weight bench while you <input id="answer6" class="answer" placeholder="tee-hee" type="text" name="tickled"> me half-to-death with your new toys.</p>',
  '<p>Making you pretend to like the Beatles while we lived it up on the <input id="answer7" type="text" class="answer" placeholder="______ _______" name="senior citizen"> floor of the Mirage in Vegas.</p>',
  '<p><input id="answer8" type="text" name="performing" class="answer" placeholder="think ... arts school"> my first surgery by removed a spider egg sack from your back.</p>',
  '<p>A day full of <input id="answer9" type="text" name="lolos" class="answer" placeholder="you got the crazy stuupid moves"> walkin&lsquo; &lsquo;round the mean streets of Chandler</p>',
  '<p>Laughing our asses off to the most boring radio show <input id="answer10" type="text" class="answer" placeholder="I just needed a "v" word" name="ever"> then sharing the drama of a comic book wrought with expressive Jewish silence.</p>',
  '<p>Playing beached whale rescuer by keeping your skin moist while you lay on the floor of <input id="answer11" class="answer" placeholder="you&lsquo;re still my hero" type="text" name="Sand Bar"> and nearly died from the effort of trying to keep up with my amazing cyclo-magnificence.',
  '<p>Practicing abstinence until we practically <input id="answer12" class="answer" placeholder="oh oh oh-yeah zzz" type="text" name="came"> in ach other&lsquo;s faces&hellip; and then cumming in each other&lsquo;s faces.'];
  //test1 = test[n];
  $("p:last").append(fillIns[n]);
  $("button").show();
};
