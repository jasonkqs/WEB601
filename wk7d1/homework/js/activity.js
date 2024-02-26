$(document).ready(function(){
  $("table td.selectable").on("click", function () {
    $(this).toggleClass("selected");
  });
});
