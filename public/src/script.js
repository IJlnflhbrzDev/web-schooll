AOS.init();

    $(window).load(function () {
      $(".loader").fadeOut("slow");
    });

    window.setTimeout("waktu()" , 1000)

    function waktu() {
      var waktu = new Date();
      setTimeout("waktu()", 1000);
      document.querySelector("footer .card-header").innerHTML = waktu.toUTCString();
    }

    window.addEventListener('scroll',function () {
      let _CompNavbars = document.querySelector('#_CompNavbars nav');
      let window_position = window.scrollY > 0 ;
      _CompNavbars.classList.toggle('animated_scrolling_change' ,window_position );
    });