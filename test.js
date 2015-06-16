
// $(document).ready(function(){
//   $(".fillIn").hide();
// });
// what site must do.
// there is a list of questions(stored in an array)-- display only the current question + all preceding questions (append the form to add next question (next element in the array) as correct answer is given).
//
// customer submits their fill-in-the-blank answer in an input field.
//
// the input from that field is stored as a variable in a jquery or js function (in an array?) -- try to see if there is someone to set it up as a this.input type thing (so it can be compared like:  if (this.imput.toLowerCase()) === key[i] { then execute function that will delete the html input element and replace (.replace) it with the correct answer (from the bold answer key).
// };
//
// execute as $(doucment).ready(functionDescribedAbove());

//<button onclick functionToRun()>submit</button>
function runAll(){
var i = document.getElementById("storageSpace").textContent;
console.log("this is i at the start" + i )
if (i<13){
console.log(i);
i = parseInt(i);
checkKey(i);
displayBoldedAnswer(i);
removeAnswerClass(i);
revealNextFillIn(i);
console.log("this is i at the end" + i);
}

  else
  {
    var end = alert("I love you boo!")
}
 }

var grabAnswer =function(){
  var given = $(".answer:last").val();
  return given.toLowerCase();
};



function checkKey(i){
  var answer = grabAnswer();
  console.log (answer);
  var i = i;
  var key = ["bored","penises","phil","pi","darth vader","children","tickled","senior citizen","performing","lolos","ever","sand bar", "came" ];
    while (answer != key[i]){
    answer = prompt("wrong Try again!");
    }
  };

  function displayBoldedAnswer(i){
      var i = i;
      var n = i+1;
      var keyBold =["<b> bo</b>red"," peni<b>s</b>e<b>s</b>"," my ex-bo<b> y</b>friend","<b> p</b>i"," d<b>a</b>rth vader"," childre<b>n</b>","<b> t</b>ickled","<b> s</b>enior c<b>i</b>tizen"," preformi<b>n</b>g"," lo<b>l</b>os"," e<b>v</b>er"," sand ba<b>r</b>", " ca<b>m</b>e" ];
      boldedAnswer = (keyBold[i]);
      console.log(boldedAnswer);
      //document.getElementById(p:nth-of-type(n)).innerHTML = boldedAnswer;};
      $("input").hide();
      $("p:last").append(boldedAnswer);
  };

  function removeAnswerClass(){
    $("input:first").removeClass("answer");
  };

function revealNextFillIn(i){
  var n = i;
  //var test = ["<p>something</p>","something else", "a third thing"];
  var fillIns = ['<p>Scouring the Phoenix Art Museum until we finally found the</p> <input class="answer" type="text" placeholder="mmm&hellip;" name="penises"><span> in the basement, then talking about kissing in the parking lot until I could almost taste your tongue in my mouth &hellip; but you left me in anticipation.</span>',
  '<p>Watching a dirty puppet play while shit-talking about how </p><input id="answer2" class="answer" placeholder="un-filling" type="text" name="ex-boyfriend"><span> loved playing Magic the gathering but failed to gather magic in his pants.</span>',
  '<p>The thrill of watching you dive face deep into my</p> <input id="answer3" class="answer" placeholder="num num" type="text" name="pi"><span> day celebration after you came to support me at my first book signing. </span>',
  '<p>Ending our glare-gathering make-out session by marching out of the Phoenix Symphony hall to </p> <input id="answer4" class="answer" placeholder="space invader" type="text" name="Darth Vader"><span>&lsquo;s theme song. </span>',
  '<p>&hellip;And then taking down the death star a week later, armed with nothing but a crepe-paper-wrapped stick and several small </p><input id="answer5" type="text" class="answer" placeholder="- - - - - - - -" name="children"><span></span>',
  '<p>Getting tied to your weight bench while you </p><input id="answer6" class="answer" placeholder="tee-hee" type="text" name="tickled"><span> me half-to-death with your new toys.</span>',
  '<p>Making you pretend to like the Beatles while we lived it up on the </p><input id="answer7" type="text" class="answer" placeholder="------ -------" name="senior citizen"><span> floor of the Mirage in Vegas.</span>',
  '<p></p><input id="answer8" type="text" name="performing" class="answer" placeholder="perf------"><span> my first surgery by removed a spider egg sack from your back.</span>',
  '<p>A day full of </p><input id="answer9" type="text" name="lolos" class="answer" placeholder="crazy stuupid moves"><span> walkin&lsquo; &lsquo;round the mean streets of Chandler</span>',
  '<p>Laughing our asses off to the most boring radio show </p><input id="answer10" type="text" class="answer" placeholder=" answer = ever" name="ever"><span> then sharing the drama of a comic book wrought with expressive Jewish silence.</span>',
  '<p>Playing beached whale rescuer by keeping your skin moist while you lay on the floor of </p><input id="answer11" class="answer" placeholder="you&lsquo;re still my hero" type="text" name="Sand Bar"><span> and nearly died from the effort of trying to keep up with my amazing cyclo-magnificence.</span>',
  '<p>Practicing abstinence until we practically </p> <input id="answer12" class="answer" placeholder="oh oh oh-yeah zzz" type="text" name="came"><span> in ach other&lsquo;s faces&hellip; and then cumming in each other&lsquo;s faces.</span>',
  '<p>But no matter what we&lsquo;re doing, you pull the Excalibur out every time, Arthur.</p> <span>love Jillian</span>'];
  $("span:last").append(fillIns[n]);
  $("#storageSpace").html(i+1);
};
