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