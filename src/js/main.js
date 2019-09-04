// let val = "hello";
// console.log(val)
// val is "Hello";

$(document).ready(function() {
  $(".uis-form-icon").on("click", function() {
    $(this).addClass("uis-active");

    $(this)
      .siblings("input")
      .addClass("uis-active");
    $(this)
      .siblings("input")
      .focus();

    $(this)
      .siblings("input")
      .focusout(function(e) {
        $(this).removeClass("uis-active");
        $(this)
          .siblings("i")
          .removeClass("uis-active");
        $(this).val("");
      });
  });



});
$(document).on('click', 'ul li', function() {
  $(this).addClass('active').siblings().removeClass('active');
});
