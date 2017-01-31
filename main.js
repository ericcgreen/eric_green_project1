var tiles = [$("#t1"), $("#t2"), $("#t3"), $("#t4")],
 tower1 = $("#tower1");
 tower2 = $("#tower2");
 tower3 = $("#tower3");
 towers = $(".towers");
 gameover = false;
 active = false;//initally there is not a click

towers.click(function(){

    if (active==true) {

      if (parseInt($(".active").eq(0).text()) < parseInt($(this).children().eq(0).text()) || $(this).children().length === 0){
        $(this).prepend($(".active")) //move to selected tower clicked
        $('.active').removeClass('active');
        active = false;
      } else {
        $('.active').removeClass('active');
        active = false;
        }
      }
   else {
     $(this).children().eq(0).addClass("active");
     active = true;
   }

//}
//create a score keeper/move tracker
//create a timer


   //create a game won/lost alert
  //  function checkWin(){
  //  if(tower3.children().length === 4){
  //    alert("Congratulaions! You've caught them all!");
  //    gameover = true;
  //  } setTimeout(checkWin, 5000);}
   });
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
