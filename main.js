var tiles = [$("#t1"), $("#t2"), $("#t3"), $("#t4")],
 tower1 = $("#tower1");
 tower2 = $("#tower2");
 tower3 = $("#tower3");//some vars aren't used
 towers = $(".towers");
 gameover = false;//game isn't over yet
 active = false;//initally there is not a click
 reset = $("#resetButton")//trying to add reset function
towers.click(function(){//game function

    if (active==true) {//click in tower is active

      if (parseInt($(".active").eq(0).text()) < parseInt($(this).children().eq(0).text()) || $(this).children().length === 0){//selected tile's value is turned into a numeric value which is compared against the numeric value of the first child of a selected tower
        $(this).prepend($(".active")) //move to selected tower clicked
        $('.active').removeClass('active');
        active = false;//remove active class of selecte tile once placed into tower
      } else {
        $('.active').removeClass('active');
        active = false;//remove active class of selected tile if not moved into a different tower
        }
      }
   else {
     $(this).children().eq(0).addClass("active");
     active = true;//if there are no values to compare, add active class to selected tile
   }
setTimeout(checkWin, 2000);//alert once game is won
function checkWin(){
  if(tower3.children().length === 4){//game is won once the proper number of children elements are placed into tower 3
    $("#announce-game-won").html("Congratulaions! You've caught them all!");
    gameover = true;
   }
 }

// function resetGame(){//trying to add reset by clearing the board and adding the html code back into their original places, but it's not working
  reset.on('click',function(){
    location.reload();
    // $('<div class="towers" id="tower1">').html('<div class="tiles" id="t1">1</div><div class="tiles" id="t2">2</div><div class="tiles" id="t3">3</div><div class="tiles" id="t4">4</div></div>');
    // $('<div class="towers" id="tower2"></div>').empty();
    // $('<div class="towers" id="tower3"></div>').empty();
    // $("#announce-game-won").empty();
    // gameover = false;
  })
})

//}
//create a score keeper/move tracker
//create a timer


   //create a game won/lost alert

  //  });



//how to deselect active class
//compare selected text of the child against the text of the tower being clicked


//move tiles functions

// function moveTile1(){
//   $(".active").prependTo("#tower1");
//   $(".active").removeClass("active");
// }
//
// function moveTile2(){
//   $(".active").prependTo("#tower2");
//   $(".active").removeClass("active");
// }
// function moveTile3(){
//   $(".active").prependTo("#tower3");
//   $(".active").removeClass("active");
// }

//move top block to different towers
//move next block to different tower, but a bigger block cannot be put on top of a smaller block.
//if a bigger block is moved on top a smaller block, this is an invalid move, send last selected block back to previous position.
//game is won when all blocks are in the correct order in the 3rd tower.
//add event listener for click to move to different board.
//function moveTile
//if blockA > blockB, cannot stack etc.
//make the blocks more dynamic and fluid
//if the next block is bigger than the block already in the tower, cannot move.
//make the blocks move to any tower
//make conditions for each move


//var tiles = $(".tiles");
//var towers = $(".towers");

//var firstClick = true;
//var savedTower;

//towers.on("click", function(){
//  savedTower = $(this)
//})
//tower.click(
//if(firstClick == true){
 // savedTower = clickedTower
//  firstCLick == false
//}
//else if (firstClick == false){
//  move top tiles from saved tower to clickedtower2
//}
//else if( top tile is bigger than top tile of selcted tower, invalid move)
//using logic from "last child" build towers and disk:


// function compareTowers(){
// if tower = empty, add tile
// if tower is not empty, compare first child to active. >>> if active tile < tower first child, add.
// else if active tile > tower first child, deselect active. >>>> if tower == tower, deselect
// }

// function compareTiles(){ //compares the titles
//
// }
// }
//
// function compareTowers(){
//   if tower is empty
// }
// towers.click(function(){
//   if (active === true){
//     $(this).append($(".active"))
//     $(".active").removeClass("active")
//     active = false
//
//   }else{
//     $(this).find(":first-child")




//start game


//add class active

// tower.children().children().eq(0)
//
// check to see if any tiles are in second tower
// if yes, is it allowed? if yes move
//
// tower2.children().children().eq(0).preprend(“.tiles”)





//var tile = $(".tiles:first-child")
//tile.on("click", function(){
//  $("#tower2 > .content").append(tile)
//}else if(the top value of the last child is greater than the value of the holding item)

//);
//var tile2 = $(".tiles:nth-last-child(1)")
//tile2.on("click", function(){
//  $("#tower3 > .content").append(tile2)
//});
//var tile3 = $(".tiles:nth-last-child(2)")
//tile3.on("click", function(){
//  $("#tower3 > .content").append(tile3)
//});
//var tile4 = $(".tiles:nth-last-child(3)")
//tile4.on("click", function(){
//  $("#tower2 > .content").append(tile4)
//});
