for(var i=1;i<10;i++){
    var div=$(`<div class='square' id='item${i}'</div>`)
    div.appendTo($(".game"))
}
var player1="X"
var player2="O"
var turn=0;
$('.square').click(function(event){
   var id=event.target.id
   
   if(turn===0){
      $(`#${id}`).text(player1)
      thewinner()
      return turn=1
   }  
    if(turn===1){
         $(`#${id}`).text(player2)
         thewinner()
      return turn=0
  
   }
   });  
   var x = document.getElementById("myaudio");

      function playAudio() {
         x.play();
        }

      function thewinner() {
         var square1=$("#item1").text()
         var square2=$("#item2").text()
         var square3=$("#item3").text()
         var square4=$("#item4").text()
         var square5=$("#item5").text()
         var square6=$("#item6").text()
         var square7=$("#item7").text()
         var square8=$("#item8").text()
         var square9=$("#item9").text()

          if (square1 === square2 && square2 === square3 && square1 !== "") {
            $("h2").text(square1 + "  is the winner");
            playAudio()
             

          } else if (square4 === square5 && square5 === square6 && square4 !== "") {
            $("h2").text(square4 + "  is the winner");
            playAudio()

          } else if (square7 === square8 && square8 === square9 && square7 !== "") {
            $("h2").text(square7 + "  is the winner");
            playAudio()

          } else if (square1 === square4 && square4 === square7 && square1 !== "") {
            $("h2").text(square1 + "  is the winner");
            playAudio()

          } else if (square2 === square5 && square5 === square8 && square2 !== "") {
            $("h2").text(square2 + "  is the winner");
            playAudio()

          } else if (square3 === square6 && square6 === square9 && square3 !== "") {
            $("h2").text(square3 + "  is the winner");
            playAudio()

          } else if (square1 === square5 && square5 === square9 && square1 !== "") {
            $("h2").text(square1 + "  is the winner");
            playAudio()

          } else if (square3 === square5 && square5 === square7 && square3 !== "") {
            $("h2").text(square3 + "  is the winner");
            playAudio()
          }
       }
       
       $('.bare').hide()
       $(".exit").click(function(){
        $('.bare').show()
       })
       $(".No").click(function(){
        $('.bare').hide()
       }) 
      //  $(".yes").click(function(){
      //   $(".barre").append("<a>")
      //   $("a").attr("herf","../mainPage.html")
      //   alert("nljl")

      //  })
      $("#ex").click(function(){
        location.reload();
      })
       
 


  
   





