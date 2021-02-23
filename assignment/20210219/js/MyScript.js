
// $(document).ready(function(){
//     $("#question").load("kakao2021_01_01_q.html #question");

//     // $("#header").load("999_test2.html")
//    /* id 지정을 통해서도 가능합니다. 
//     $("#header").load("header.html #navbar")
//     */       
//  });

// // function repositionFixed() {
// //     var left = $("#main_section").innerWidth();
// //     $("#main_aside").css("right", 10 + "px");
// // }
// function showQ(num) {
//     alert('test');
//     $("#question").load("kakao2021_01_01_q.html #question");
//     // kakao2021_01_01_q.html
//     $("#solve").load("kakao2021_01_01.html");
//     // kakao2021_01_01.html
// }
$(document).ready(function () {
    // import는 되는데 css 적용이 안됨
    // document.getElementById("question").innerHTML = '<object type="text/html" data="kakao2021_01_01_q.html"></object>';
    // document.getElementById("question").innerHTML.replace = '<data-include:"kakao2021_01_01_q.html"></data-include>';
    // $("#question").innerHTML = 
    $("#question").load("kakao2021_01_01_q.html");
})