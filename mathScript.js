

$(document).ready(function(){
      var equations = ["problem1.png","problem2.png","problem3.png", "problem4.png", "problem5.png", "problem6.png", "problem7.png", "problem8.png","problem9.png"];
      var answers =   [ $("#r8"),$("#a5"),'$("#p6")','$(#e4)','$(#s7)','$(#h3)','$(#a9)','$(#c1)','$(#k2)'];
      var choices =[ $("#r"),$("#a"),'$(#p)','$(#e)','$(#s)','$(#h)','$(#a)','$(#c)','$(#k)'];
      var equationNumber = 0;
    $(".answers").draggable( { containment: "parent", revert: true});
    $(choices[equationNumber]).droppable({ tolerence:"fit", accept: answers[equationNumber], drop: function(){
        equationNumber ++; 
        document.getElementById("equation").src = equations[equationNumber];  
        console.log(equationNumber); 
       
}  } );
});

