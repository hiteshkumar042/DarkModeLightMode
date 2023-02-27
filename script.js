//using JavaScript - not able to toggle vise versa

// var btn = document.querySelector('.mode');
// var paragraph =  document.querySelector('.para');
// var heading = document.querySelector('.heading');

// btn.addEventListener('click', function(){
//     document.body.style.backgroundColor="black"
//     paragraph.style.color="white"
//     heading.style.color="white"
//     btn.textContent = "Light Mode";
// });

//Using JQuery - Not able to toggle the name in button

// $(document).ready(function(){
//     $("#toggle-btn").click(function (){
//             $("body").toggleClass("darkModeOn");
//     })
// })

//Using JQuery Final

$(document).ready(function () {
  $("#toggle-btn").click(function () {
    if ($(".mode").text() == "Dark Mode") {
      $("body").toggleClass("darkModeOn");
      $(".mode").toggleClass("darkModeBtn");
      $(".mode").text("Light Mode");
    } else {
      $("body").toggleClass("darkModeOn");
      $(".mode").toggleClass("darkModeBtn");
      $(".mode").text("Dark Mode");
    }
  });
});
