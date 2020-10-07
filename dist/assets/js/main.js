var initAnchors, initAuthors, initCarousel, initFancyBox, initFaq, initMenu, initSearch, initSettings, initTabs, initUI;

initCarousel = function() {
  $('.top_slider .main_content').slick({
    dots: true,
    arrows: false,
    infinite: true,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: $(".custom_dots")
  });
  $('.journals_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true
    autoplaySpeed: 4000,
    appendArrows: $(".journals_arrows")
  });
  $('.volume_slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    fade: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
    appendArrows: $(".volume_arrows")
  });
  return $('.article_slides').slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick"
      },
      {
        breakpoint: 640,
        settings: {
          dots: true,
          arrows: false,
          infinite: true,
          fade: true,
          speed: 900,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true
        }
      }
    ]
  });
};

initUI = function() {
  var sliderHeight;
  $('select').select2({
    minimumResultsForSearch: -1
  });
  // TOP SLIDER
  sliderHeight = $('.top_slider').outerHeight();
  $('.top_slider').next().css('margin-top', sliderHeight);
  // delivery
  $(".delivery_address").on('click', function() {
    $(this).addClass('active');
    return $(".delivery_block").slideDown();
  });
  // SCROLL TOP
  return $(".icon__scroll_top").on('click', function() {
    return $('html, body').stop().animate({
      scrollTop: 0
    }, 200);
  });
};

initMenu = function() {
  $('.menu_holder').on('click', function(e) {
    return $('body').toggleClass('menu_opened');
  });
  $('.user').on('click', function(e) {
    return $('body').addClass('user_opened');
  });
  $('.user_close').on('click', function(e) {
    return $('body').removeClass('user_opened');
  });
  $('.filter_mob .all').on('click', function(e) {
    return $('body').addClass('filter_opened');
  });
  return $('.filter_mob .close').on('click', function(e) {
    return $('body').removeClass('filter_opened');
  });
};

initFaq = function() {
  var accordionContent;
  accordionContent = $('.faq_item_text');
  accordionContent.slideUp();
  return $('.faq_item_title').on('click', function(e) {
    $(this).parent().toggleClass('active');
    return $(this).next().stop().slideToggle();
  });
};

initSearch = function() {
  var searchOffset;
  searchOffset = $('.search_block').offset();
  $('.search_block').slideUp();
  $('.search').on('click', function(e) {
    $('.search_block').slideDown();
    return window.scroll(0, searchOffset.top - 250);
  });
  return $('.search_close').on('click', function(e) {
    return $('.search_block').slideUp();
  });
};

initAuthors = function() {
  $('.author .more').on('click', function(e) {
    return $('.authors_info').slideDown();
  });
  return $('.authors_close').on('click', function(e) {
    return $('.authors_info').slideUp();
  });
};

initFancyBox = function() {
  return $(".gallery_small_item").fancybox({
    arrows: true,
    infobar: false,
    toolbar: false,
    transitionEffect: "fade"
  });
};

initTabs = function() {
  return $('.tabs li > a').on('click', function(e) {
    var tabId;
    $('.tabs li > a').removeClass('active');
    e.preventDefault();
    tabId = $(this).attr('href');
    $('.tab_item').hide();
    $(this).addClass('active');
    return $('.tab_content').find(tabId).show();
  });
};

initAnchors = function() {
  return $('.page_navigation li > a').on('click', function(e) {
    var anchorItem, anchorOffset, tabId;
    $('.page_navigation li > a').removeClass('active');
    e.preventDefault();
    tabId = $(this).attr('href');
    $(this).addClass('active');
    anchorItem = $('.wrapper').find(tabId).show();
    anchorOffset = anchorItem.offset();
    return window.scrollTo(0, anchorOffset.top - 215);
  });
};

initSettings = function() {
  return $('.change_btn').on('click', function() {
    var parentItem;
    $(this).toggleClass('active');
    parentItem = $(this).parent();
    return parentItem.find('.settings_item_config').slideToggle();
  });
};

$(window).scroll(function() {
  if ($(window).scrollTop() > 400) {
    return $(".icon__scroll_top").show();
  } else {
    return $(".icon__scroll_top").hide();
  }
});

$(function() {
  initCarousel();
  initMenu();
  initUI();
  initFaq();
  initSearch();
  initAuthors();
  initFancyBox();
  initTabs();
  initAnchors();
  return initSettings();
});
