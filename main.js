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
var holding = [],
tiles = 4,
$content = $(".content"),


function content(content){
  var $tiles = content.children(),
  $topTile = content.find(":first-child"),
  topTileValue = $topTile.data("value"),
  $holdingTisk = $canves.find(".hold");

if($holdingTile.length !== 0){
  if(topTileValue === holding[0]){
    $holdingDisk.removeClass("hold");
  }else if (topTileValue === undefined || topTileValue> holding[0]){
    $holdingTile.remove();
    content.append($(tiles)); //trying to append titles to other towers...not working
  }else if ($topTile.length !==0){
    $topTile.addclass("hold");
    holding[0] = topTileValue;
  }
}

$content.on("click", function(){
  
})

}



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
