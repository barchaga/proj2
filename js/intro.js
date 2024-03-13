//resource link: https://www.w3schools.com/jquery/default.asp

$(document).ready(function(){
    
  $("#main-img").show();
  $("#queen-img").hide();
  $("#arbenz-img").hide();
  $("#lumumba-img").hide();
  $("#allende-img").hide();
  $("#mugshot-img").hide();
  $("#welcome-text").hide();


  $("#main-img").click(function(){
    $("#main-img").hide();
    $("#child").hide();
    $("#child").show();
    $("#queen-img").show();
});

$("#queen-img").click(function(){
  $("#queen-img").hide();
  $("#child").hide();
  $("#arbenz-img").show();
});

$("#arbenz-img").click(function(){
  $("#arbenz-img").hide();
  $("#lumumba-img").show();
});

$("#lumumba-img").click(function(){
  $("#lumumba-img").hide();
  $("#allende-img").show();
});

$("#allende-img").click(function(){
  $("#allende-img").hide();
  $("#mugshot-img").show();
});

$("#mugshot-img").click(function(){
  $("#main-img").show();
  $("#mugshot-img").hide();
  $("#main-img").show();


});

const styleBlocks = document.querySelectorAll("child");

styleBlocks.forEach((block) => {
  block.innerText = block.innerText.trim();
});



});

