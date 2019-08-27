// $(function() {
//   var img=$("img");
//   var num=0;
//   img.each(function(i) {
//     var oImg=new Image();

//     oImg.οnlοad=function(){
//       oImg.οnlοad=null;
//       num++;
//       $(".loading b").html(parseInt( num/$("img").size()*100)+"%");
//       if(num>=i){
//         $(".loading").fadeOut();
//       }
//     }
//     oImg.src=img[i].src;
//   });
// })


document.onreadystatechange=function(){
    console.log(document.readyState);
    if(document.readyState=="complete"){
        $(".loading").fadeOut();
    }
}