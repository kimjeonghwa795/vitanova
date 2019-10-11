$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}$(".js-navigate").on("click", function() {
  $(".js-navigate").removeClass("disabled");
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}


/*Counter*/
var a = 0;
$(window).scroll(function() {

  var oTop = $('#counter').offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() > oTop) {
    $('.counter-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 1000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    a = 1;
  }

});

/*Wedding Sets*/
/*$num = $('.my-card').length;
$even = $num / 2;
$odd = ($num + 1) / 2;

if ($num % 2 == 0) {
  $('.my-card:nth-child(' + $even + ')').addClass('active');
  $('.my-card:nth-child(' + $even + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $even + ')').next().addClass('next');
} else {
  $('.my-card:nth-child(' + $odd + ')').addClass('active');
  $('.my-card:nth-child(' + $odd + ')').prev().addClass('prev');
  $('.my-card:nth-child(' + $odd + ')').next().addClass('next');
}

$('.my-card').click(function() {
  $slide = $('.active').width();
  console.log($('.active').position().left);
  
  if ($(this).hasClass('next')) {
    $('.card-carousel').stop(false, true).animate({left: '-=' + $slide});
  } else if ($(this).hasClass('prev')) {
    $('.card-carousel').stop(false, true).animate({left: '+=' + $slide});
  }
  
  $(this).removeClass('prev next');
  $(this).siblings().removeClass('prev active next');
  
  $(this).addClass('active');
  $(this).prev().addClass('prev');
  $(this).next().addClass('next');
});


// Keyboard nav
$('html body').keydown(function(e) {
  if (e.keyCode == 37) { // left
    $('.active').prev().trigger('click');
  }
  else if (e.keyCode == 39) { // right
    $('.active').next().trigger('click');
  }
});*/

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// Filter Checkbox

var allCheckboxes = document.querySelectorAll('input[type=checkbox]');
var allPlayers = Array.from(document.querySelectorAll('.player'));
var checked = {};

getChecked('startingReserves');
getChecked('injured');
getChecked('position');
getChecked('nbaTeam');
getChecked('conference');

Array.prototype.forEach.call(allCheckboxes, function (el) {
  el.addEventListener('change', toggleCheckbox);
});

function toggleCheckbox(e) {
  getChecked(e.target.name);
  setVisibility();
}

function getChecked(name) {
  checked[name] = Array.from(document.querySelectorAll('input[name=' + name + ']:checked')).map(function (el) {
    return el.value;
  });
}

function setVisibility() {
  allPlayers.map(function (el) {
    var startingReserves = checked.startingReserves.length ? _.intersection(Array.from(el.classList), checked.startingReserves).length : true;
    var injured = checked.injured.length ? _.intersection(Array.from(el.classList), checked.injured).length : true;
    var position = checked.position.length ? _.intersection(Array.from(el.classList), checked.position).length : true;
    var nbaTeam = checked.nbaTeam.length ? _.intersection(Array.from(el.classList), checked.nbaTeam).length : true;
    var conference = checked.conference.length ? _.intersection(Array.from(el.classList), checked.conference).length : true;
    if (startingReserves && injured && position && nbaTeam && conference) {
      el.style.display = 'block';
    } else {
      el.style.display = 'none';
    }
  });
}

/*Back to Top*/
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



/*Slick*/


/*
$('.slick').slick({
        centerMode: true,
        infinite: true,
        centerPadding: 0,
        slidesToShow: 3,
        speed: 500,
        
    });*/

$('.slick').
on('init', () => {
  $('.slick-slide[data-slick-index="-2"]').addClass('lt2');
  $('.slick-slide[data-slick-index="-1"]').addClass('lt1');
  $('.slick-slide[data-slick-index="1"]').addClass('gt1');
  $('.slick-slide[data-slick-index="2"]').addClass('gt2');
}).
slick({
  centerMode: true,
  centerPadding: 0,
  slidesToShow: 3,
responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]}).
on('beforeChange', (event, slick, current, next) => {
  $('.slick-slide.gt2').removeClass('gt2');
  $('.slick-slide.gt1').removeClass('gt1');
  $('.slick-slide.lt1').removeClass('lt1');
  $('.slick-slide.lt2').removeClass('lt2');

  const lt2 = current < next && current > 0 ? current - 1 : next - 2;
  const lt1 = current < next && current > 0 ? current : next - 1;
  const gt1 = current < next || next === 0 ? next + 1 : current;
  const gt2 = current < next || next === 0 ? next + 2 : current + 1;

  $(`.slick-slide[data-slick-index="${lt2}"]`).addClass('lt2');
  $(`.slick-slide[data-slick-index="${lt1}"]`).addClass('lt1');
  $(`.slick-slide[data-slick-index="${gt1}"]`).addClass('gt1');
  $(`.slick-slide[data-slick-index="${gt2}"]`).addClass('gt2');

  // Clone processing when moving from 5 to 0
  if (current === 5 && next === 0) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('lt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current + 2}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current + 3}"]`).addClass('gt2');
  }

  // Clone processing when moving from 0 to 5
  if (current === 0 && next === 5) {
    $(`.slick-slide[data-slick-index="${current - 1}"]`).addClass('gt2');
    $(`.slick-slide[data-slick-index="${current}"]`).addClass('gt1');
    $(`.slick-slide[data-slick-index="${current - 2}"]`).addClass('lt1');
    $(`.slick-slide[data-slick-index="${current - 3}"]`).addClass('lt2');
  }

  console.log('beforeChange', current, ':', lt2, lt1, next, gt1, gt2);
});

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
  var current = $(".recipe.active");
  var findNext = $(current).next(".recipe");
  var findPrev = $(current).prev(".recipe");
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
  var current = $(".recipe.active");
  if ($(current).is(".recipe:last")) {
    $(".js-right").addClass("disabled");
  } else if ($(current).is(".recipe:first")) {
    $(".js-left").addClass("disabled");
  }
}
