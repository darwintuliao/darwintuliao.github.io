	<script type="text/javascript">

	// Progress bar Scripts

	  $('.bar-percentage[data-percentage]').each(function () {
	  var progress = $(this);
	  var percentage = Math.ceil($(this).attr('data-percentage'));
	  $({countNum: 0}).animate({countNum: percentage}, {
	    duration: 15000,
	    easing:'linear',
	    step: function() {
	      // What todo on every count
	      var pct = Math.floor(this.countNum) + '%';
	      progress.text(pct) && progress.siblings().children().css('width',pct);
	    }
	  });
	}); // End of Progress bar scripts

	 // Animation plugin on clicking the links

	 $(function() {
		  $('a[href*="#"]:not([href="#"])').click(function() {
		    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      var target = $(this.hash);
		      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		      if (target.length) {
		        $('html, body').animate({
		          scrollTop: target.offset().top
		        }, 1000);
		        return false;
		      }
		    }
		  });
		}); // End of Animation plugin

	 //Fade in fade out Animation plugin

	 $(document).ready(function () {
            $('#home').scrollFadeOut(300,350);
            $('#about').scrollFadeIn(300,300);
        });

	 //End of fadein fadeout animation

	 // Smooth Scrolling

	  // End of smooth scrolling plug in

	</script>