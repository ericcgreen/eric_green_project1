var tower3 = $("#tower3")
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
  if(tower3.children().length === 7){//game is won once the proper number of children elements are placed into tower 3
    $("#announce-game-won").html("Congratulaions! You've caught them all!");
    gameover = true;
   }
 }
  reset.on('click',function(){
    location.reload();

  })

});
