$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
      $('.btn').addClass("btn-sticky");
    } else {
      $('.navbar').removeClass("sticky");
      $('.btn').addClass("btn-sticky");
    }
    if (this.scrollY > 20) {
      $('.blog-nav').addClass("sticky");
    } else {
      $('.blog-nav').removeClass("sticky");
    }
  });
});

