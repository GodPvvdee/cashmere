$('.nav-menu li').hover(function(){
  var width1 = $(this).width();
  var width2 = $(this).children('ul').width();
  var width3 = width2/2;
  $(this).children('ul').css("margin-left", -width3+"px")
})
var slider = new Swiper('#slider .swiper-container', {
  pagination: '#slider .swiper-pagination',
  nextButton: '.s-right',
  prevButton: '.s-left',
  effect: 'fade',
  autoplay: 4500,
  speed: 1500,
  paginationClickable: true
});
$(".checkbox").click(function(e){
  e.preventDefault()
  $(this).toggleClass("checked");
});
var galleryTop = new Swiper('.top .swiper-container', {
  nextButton: '.top .next',
  prevButton: '.top .prev',
  effect: 'fade',
  slidesPerView: 'auto'
});
var galleryThumbs = new Swiper('.thumb .swiper-container', {
    spaceBetween: 10,
    centeredSlides: true,
    slidesPerView: 'auto',
    touchRatio: 0.2,
    slideToClickedSlide: true
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop;
$('.search').hover(function(){
  $(".search input").focus();
})
$("#header .bars").click(function(e){
  e.preventDefault()
  $(this).toggleClass('active');
  $('.mobile-nav').slideToggle();
});
$(".mobile-product-menu").click(function(e){
  e.preventDefault()
  $('.product-menu-list').slideToggle();
});
