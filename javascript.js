
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

// <button onclick functionToRun()>submit</button>
// function counter(){
//   var i=0;
//   i++;
//   console.log(i);
//   return i;
// };

function initialize()
{ $("#button").click(runAll());};



function runAll(){
$(".answer")
$(this){
    checkKey(i);
    displayBoldedAnswer(i);
    revealNextFillIn(i);
  }
 };

var grabAnswer =function(){
  var given = $('.answer').val();
  return given.toLowerCase();
};

function removeAnswerClass (){
  $(".answer").removeClass("answer");
}

function checkKey(i){
  var n = i;
  console.log(n);
  var answer = grabAnswer();
  console.log(answer);
  var key = ["bored","penises","ex-boyfriend","pi","darth vader","children","tickled","senior citizen","performing","lolos","ever","sand bar", "came" ];
  console.log(key[n]);
    while (answer != key[n]){
    answer = prompt("wrong Try again!");
    }
  };

  function displayBoldedAnswer(i){
      var i = i;
      var n = (i + 1);
      var keyBold =["<b> bo</b>red"," peni<b>s</b>e<b>s</b>"," puppet pla<b> y</b>","<b> p</b>i"," d<b>a</b>rth vader"," childre<b>n</b>","<b> t</b>ickled","<b> s</b>enior ];
      boldedAnswer = (keyBold[i]);
      console.log(boldedAnswer);
      //document.getElementById(p:nth-of-type(n)).innerHTML = boldedAnswer;};
      $("input").hide();
      $("p:nth-of-type(n)").append(boldedAnswer);
  };

function revealNextFillIn(i){
  var i = i+2;
  //var test = ["<p>something</p>","something else", "a third thing"];
  var fillIns = ['<p>Scouring the Phoenix Art Museum until we finally found the <input  type="text" placeholder="mmm&hellip;" name="penises"> in the basement.</p>',
  '<p>Watching a dirty puppet play <input id="answer2"  placeholder="un-filling" type="text" name="ex-boyfriend">.</p>',
  '<p>The thrill of watching you dive face deep into my <input id="answer3"  placeholder="num num" type="text" name="pi"> day celebration after you came to support me at my first book signing. </p>',
  '<p>Ending our glare-gathering make-out session by marching out of the Phoenix Symphony hall to <input id="answer4"  placeholder="space in vader" type="text" name="Darth Vader">&lsquo;s theme song. </p>',
  '<p>&hellip;And then taking down the death star a week later, armed with nothing but a crepe-paper-wrapped stick and several small <input id="answer5" type="text"  placeholder="--------" name="children">.</p>',
  '<p>Getting tied to your weight bench while you <input id="answer6"  placeholder="tee-hee" type="text" name="tickled"> me half-to-death with your new toys.</p>',
  '<p>Making you pretend to like the Beatles while we lived it up on the <input id="answer7" type="text"  placeholder="______ _______" name="senior citizen"> floor of the Mirage in Vegas.</p>'];
  removeAnswerClass ();
  $("p:last").append(fillIns[i]);
  $("input:nth-of-type(i)").addClass("answer");
};
