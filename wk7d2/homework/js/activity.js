$(document).ready(function () {
  $("#activitiesTable td.selectable").on("click", function () {
    if (!$(this).hasClass("selected") && $(this).text() !== "Not Available") {
      $(this).toggleClass("selected");
    } else if ($(this).hasClass("selected")) {
      $(this).removeClass("selected");
    }
  });
});
