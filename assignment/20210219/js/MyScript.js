$(document).ready(function () {
    // ?
    function show01() {
        // **caution
        // the code below is not working in local environment.
        // it is working online because of policy.
        $("#question").load("kakao2021_01_01_q.html");
        $("#solve").load("kakao2021_01_01.html");
    }
    function show03() {
        $("#question").load("kakao2021_01_03_q.html");
        $("#solve").load("kakao2021_01_03.html");
    }
})