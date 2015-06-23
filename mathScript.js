

$(document).ready(function(){
      var equations = ["problem1.png","problem2.png","problem3.png", "problem4.png", "problem5.png", "problem6.png", "problem7.png", "problem8.png","problem9.png", "bigProblem.png"];
      var answers =   [ $("#r8"),$("#a9"),$("#p6"),$("#e4"),$("#s7"),$("#h3"),$("#a5"),$("#c1"),$("#k2")];
      var choices =[ $("#r"),$("#a1"),$("#p"),$("#e"),$("#s"),$("#h"),$("#a2"),$("#c"),$("#k")];
      var display = ["R","A","P","E","S","H","A","C","K"]
      var equationNumber = 0;
    $("*").mouseover(function(){ 
    $(".answers").draggable( { containment: "parent", revert: true});
    $(choices[equationNumber]).droppable({ tolerence:"fit", accept: answers[equationNumber], drop: function(){
        if (equationNumber >= 9){
        $(".containsAnswers").html("Go Get 'Em Ninja!");
        return false;
        }
        $(answers[equationNumber]).detach();
        $(this).html(display[equationNumber]);
        equationNumber ++; 
        document.getElementById("equation").src = equations[equationNumber];  
        console.log(equationNumber);        
}  } );
});
});

