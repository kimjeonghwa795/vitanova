var swiper = new Swiper('.blog-slider', {
      spaceBetween: 30,
      effect: 'fade',
      loop: true,
      mousewheel: {
        invert: false,
      },
      // autoHeight: true,
      pagination: {
        el: '.blog-slider__pagination',
        clickable: true,
      }
    });


$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".blog-slider__item.active");
  var findNext = $(current).next(".blog-slider__item");
  var findPrev = $(current).prev(".blog-slider__item");
  var button = $(this);

  $(current).removeClass("active");
  setTimeout(function() {
    if ($(button).hasClass("js-right")) {
      $(findNext).addClass("active");
      checkForDisable();
    } else if ($(button).hasClass("js-left")) {
      $(findPrev).addClass("active");
      checkForDisable();
    }
  }, 300);
});

function checkForDisable() {
  var current = $(".blog-slider__item.active");
  if ($(current).is(".blog-slider__item:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".blog-slider__item:first")) {
    $(".js-left").addClass("disabled");
  }
}