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
function tower(tower){
  var $tiles = tower.children(),
  $topTile = tower.find(":last-child"),
  topTileValue = $topTile.data("value"),
  $holdingTisk = $canves.find(".hold");
}



//var tile = $(".tiles:first-child")
//tile.on("click", function(){
//  $("#tower2 > .content").append(tile)
//});
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
