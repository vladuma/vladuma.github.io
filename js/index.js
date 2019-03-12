$(document).ready(function(){
  $('.more-button-container').click(function(){
    var txt = $('.more-skills').is(':visible') ? 'Show more' : 'Show less';

     $('.show-more-skills').text(txt);
     $('.more-skills').slideToggle();

     $('.more-skills').toggleClass('hidden', 'slow');
  })
})

$(document).ready(function(){
  $('.skill i').hover(function(){
    $((this)).toggleClass('colored', 'slow');
  })
})

$(document).ready(function(){
  // if ($('.more-skills:visible').visible() && $('#ql.progress').visible()) {
  //   console.log(0);
  // }
  // if ($('#ql.progress').visible(true)) {
  //   console.log(0);
  // }

  var progressBars = $('.progress .progress-bar');

  for (var i = 0; i < progressBars.length; i++) {
    $(progressBars[i]).width($(progressBars[i]).data('percent') + '%');
    // console.log(progressBars[i].attr('data-percent'));

  }
})


$(document).ready(function(){
  $('.filters > div').click(function(){
    var filter = $(this).text().toLowerCase();

    if ($(this).closest('section').attr('id').includes('skills')) {
      filterSkills(filter);
    } else if ($(this).closest('section').attr('id').includes('projects')) {
      filterProjects(filter);
    }

    for (var i = 0; i < $('.filters > div').length; i++) {
      $('.filters > div').removeClass('active')
    }

    $(this).addClass('active');
  });


  function filterSkills(value) {
  	var list = $(".skill.filter-item");
  	$(list).fadeOut("fast");
  	if (value.includes("all")) {
  		$(".stack").find("div").each(function (i) {
  			$(this).delay(200).slideDown("fast");
  		});
  	} else {
  		$(".stack").find("div[data-skill-level*=" + value + "]").each(function (i) {
  			$(this).delay(200).slideDown("fast");
  		});
  	}
  }

  function filterProjects(value) {
    var list = $(".project.filter-item");
    $(list).fadeOut("fast");
    if (value.includes("all")) {
      $("#project-grid").find("div").each(function (i) {
        $(this).delay(200).slideDown("fast");
      });
    } else {
      // var toShow = $('div[data-project-type*="' + value.replace( /\s/g, '') + '"]":contains("div[data-project-hidden="visible"]');
      // console.log(toShow);
      $("#project-grid").find("div[data-project-type*=" + value + "]").each(function (i) {
        $(this).delay(200).slideDown("fast");
      });
    }
  }
})

/* Email FORM */
$(document).ready(function () {
    $('[name="send-button"]').click(function (e) {
      // console.log($('form'));

      // e.preventDefault(); //STOP default action
      const name = $('[name="name"]').val(),
            email = $('[name="email"]').val(),
            message = $('[name="message"]').val();

      if (name && email && message) {
        //emailjs.com
        emailjs.sendForm('gmail', 'template_C6kumJaD', '#contact-form')
        .then(function(response) {
          // console.log('SUCCESS!', response.status, response.text);
          $('.form-success-message').show();
          $('form').hide();
        }, function(error) {
          $('.form-error-message').show();
          console.log('FAILED...', error);
        });
      }
    });
});

//smooth scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $('a').on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.hash.includes('#')) {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      scrollTo(hash);
    } // End if
  });
});
function scrollTo(el){
  if ($(el).length) {
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(el).offset().top
    }, 800, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = el;
    });
  }
}
