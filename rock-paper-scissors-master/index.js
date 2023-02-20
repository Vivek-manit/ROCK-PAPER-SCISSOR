var arr=["rock","scissors","paper"];
var score =0;
var attempt=0;
$(".stone").click(function () {
    $(".chosed").css("visibility","visible");
    var imgsrc= $(this).attr("src");
    $(".myoption").attr("src",imgsrc);
    var randonNumber= Math.floor(Math.random() * 3);
    var imgsrc2 = "images/icon-"+arr[randonNumber]+".svg";
    $(".computer").attr("src",imgsrc2);
    if(randonNumber==1){
        score++;
        attempt++;
        $(".result").text("YOU WON!!");
    }
    else if(randonNumber==2){
        attempt++;
        $(".result").text("COMPUTER WON");
    }
    else{
        $(".result").text("Draw");
    }
    $(".score").text(score+"/"+attempt);
})
$(".paper").click(function(){
    $(".chosed").css("visibility","visible");
    var imgsrc= $(this).attr("src");
    $(".myoption").attr("src",imgsrc);
    var randonNumber= Math.floor(Math.random() * 3);
    var imgsrc2 = "images/icon-"+arr[randonNumber]+".svg";
    $(".computer").attr("src",imgsrc2);  
    if(randonNumber==0){
        score++;
        attempt++;
        $(".result").text("YOU WON !!");
    }
    else if(randonNumber==1){
        attempt++;
        $(".result").text("COMPUTER WON");
    }
    else{
        $(".result").text("Draw");
    }
    $(".score").text(score+"/"+attempt);
})
$(".Scissor").click(function(){
    $(".chosed").css("visibility","visible");
    var imgsrc= $(this).attr("src");
    $(".myoption").attr("src",imgsrc);
    var randonNumber= Math.floor(Math.random() * 3);
    var imgsrc2 = "images/icon-"+arr[randonNumber]+".svg";
    $(".computer").attr("src",imgsrc2); 
    if(randonNumber==2){
        score++;
        attempt++;
        $(".result").text("YOU WON!!");
    }
    else if(randonNumber==0){
        attempt++;
        $(".result").text("COMPUTER WON");
    }
    else{
        $(".result").text("Draw");
    }
    $(".score").text(score+"/"+attempt); 
})
