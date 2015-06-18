$(document).ready(function(){
    $("img").draggable();
    $(".answers").draggable({containment:"parent"});
});


// if ($())
var equations = ['<img class="problems" src="problem1.png">','<img class="problems" src="problem2.png">','<img class="problems" src="problem3.png">','<img class="problems" src="problem4.png">','<img class="problems" src="problem5.png">','<img class="problems" src="problem6.png">','<img class="problems" src="problem7.png">','<img class="problems" src="problem8.png">','<img class="problems" src="problem9.png">' ];

// code needs to do this: as a correct answers is dragged into the appropriate box, have it stick there and have the next problem appear
var equationNumber = 0;
var captionLength = captions.length -1;

var changeCaption = function(increaseBy)
{
  captionNumber += increaseBy;
  if (captionNumber > captionLength){
    captionNumber =0;
  }
  if (captionNumber < 0){
    captionNumber = captionLength;
  }

document.getElementById("caption").innerHTML = captions[captionNumber];
}

function autoRun(){
  setInterval("changeCaption(1)", 5000);
}
