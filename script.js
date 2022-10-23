$(document).ready(function(){
var xTurn =true;
var isWinner = false;
// calls the grid class and will iterate through each child element    
$(".grid").children().each(function(){
// if you click on the cell call this function
$(this).click(function() {
    if(isWinner){
        click($(this));
    }
});
});

function click(cell) {
    // if the cell is empty place an x in the cell then xTurn will === false
    if (cell.attr("data-piece") === "") {
    if(xTurn) {
        cell.attr("data-piece", "X");
        cell.html("X");
         xTurn = false;

    } else {
        //when xTurn is false and you click a cell data piece === O and xTurn === true
        cell.attr("data-piece", "O");
        cell.html("O");
         xTurn = true;
         
    }
    findWinner();
}
    
}

function findWinner(){
    

        if(!isWinner){
        if($("#0").attr("data-piece") === $("#1").attr("data-piece")
        &&$("#0").attr("data-piece") === $("#2").attr("data-piece")
        &&$("#0").attr("data-piece")!== ""){

            $("#0").css("color", "red");
            $("#1").css("color", "red");     
            $("#2").css("color", "red");
            isWinner = true;
        }
    }

        if(!iswinner){
        if($("#3").attr("data-piece") === $("#4").attr("data-piece")
        &&$("#3").attr("data-piece") === $("#5").attr("data-piece")
        &&$("#3").attr("data-piece")!== ""){

            $("#3").css("color", "red");
            $("#4").css("color", "red");     
            $("#5").css("color", "red");
            isWinner = true;
        }
    }
        if(!iswinner){
        if($("#6").attr("data-piece") === $("#7").attr("data-piece")
        &&$("#6").attr("data-piece") === $("#8").attr("data-piece")
        &&$("#6").attr("data-piece")!== ""){

            $("#6").css("color", "red");
            $("#7").css("color", "red");     
            $("#8").css("color", "red");
            isWinner = true;
        }
    }
        if(!iswinner){
        if($("#0").attr("data-piece") === $("#3").attr("data-piece")
        &&$("#0").attr("data-piece") === $("#6").attr("data-piece")
        &&$("#0").attr("data-piece")!== ""){

            $("#0").css("color", "red");
            $("#3").css("color", "red");     
            $("#6").css("color", "red");
            isWinner = true;
        }
    }
        if(!iswinner){
        if($("#1").attr("data-piece") === $("#4").attr("data-piece")
        &&$("#1").attr("data-piece") === $("#7").attr("data-piece")
        &&$("#1").attr("data-piece")!== ""){

            $("#1").css("color", "red");
            $("#4").css("color", "red");     
            $("#7").css("color", "red");
            isWinner = true;
        }
    }
        if(!iswinner){
        if($("#2").attr("data-piece") === $("#5").attr("data-piece")
        &&$("#2").attr("data-piece") === $("#8").attr("data-piece")
        &&$("#2").attr("data-piece")!== ""){

            $("#2").css("color", "red");
            $("#5").css("color", "red");     
            $("#8").css("color", "red");
            isWinner = true;
        }
    }

        if(!iswinner){
        if($("#0").attr("data-piece") === $("#1").attr("data-piece")
        &&$("#0").attr("data-piece") === $("#2").attr("data-piece")
        &&$("#0").attr("data-piece")!== ""){

            $("#0").css("color", "red");
            $("#1").css("color", "red");     
            $("#2").css("color", "red");
            isWinner = true;
        }
    }
        if(!iswinner){
        if($("#0").attr("data-piece") === $("#4").attr("data-piece")
        &&$("#0").attr("data-piece") === $("#8").attr("data-piece")
        &&$("#0").attr("data-piece")!== ""){

            $("#0").css("color", "red");
            $("#4").css("color", "red");     
            $("#8").css("color", "red");
            isWinner = true;
        }
    }
        if(!iswinner){
        if($("#2").attr("data-piece") === $("#4").attr("data-piece")
        &&$("#2").attr("data-piece") === $("#6").attr("data-piece")
        &&$("#2").attr("data-piece")!== ""){

            $("#2").css("color", "red");
            $("#4").css("color", "red");     
            $("#6").css("color", "red");
            isWinner = true;
        }
    }
  
    }
    });