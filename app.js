$("document").ready(function(){
var colorArray = ['blue','yellow','green','red','purple'];
var randomColor = colorArray[chooseColor()];

$('.welcome').text("Welcome, pick the box that is the color " + randomColor);
console.log(randomColor);
createBlocks();




function randomNumber(min,max){
  return Math.floor(Math.random() * (1 + max - min) + min);

}

function chooseColor() {
  var number = randomNumber(0,4);
  return number;
}

function createBlocks(){
  for(var i = 0; i < colorArray.length; i++){
    console.log("count works?");
    $('.container').append("<div class='box' style='background-color: " + colorArray[i] +"' ></div>");
    $('.container').children().last().data('id',colorArray[i]);
  }
}

$('.container').on('click','.box',function(){
  var el = $(this).data("id");
  console.log(el);
})
});
