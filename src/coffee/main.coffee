initCarousel = ->
  
  $('.top_slider .main_content').slick(
    dots: true
    arrows: false
    infinite: true
    fade: true
    speed: 900
    slidesToShow: 1
    slidesToScroll: 1
    autoplay: true
    autoplaySpeed: 4000
    appendDots: $(".custom_dots")
  )
  
  $('.journals_slider').slick(
    dots: false
    arrows: true
    infinite: true
    fade: true
    speed: 900
    slidesToShow: 1
    slidesToScroll: 1
    # autoplay: true
    autoplaySpeed: 4000
    appendArrows: $(".journals_arrows")
  )
  
  $('.volume_slider').slick(
    dots: false
    arrows: true
    infinite: true
    fade: true
    speed: 900
    slidesToShow: 1
    slidesToScroll: 1
    autoplaySpeed: 4000
    appendArrows: $(".volume_arrows")
  )

initUI = ->
  $('select').select2(
    minimumResultsForSearch: -1
  )

  # TOP SLIDER
  sliderHeight = $('.top_slider').outerHeight()
  $('.top_slider').next().css('margin-top', sliderHeight)

  # delivery
  $(".delivery_address").on 'click', ->
    $(this).addClass('active')
    $(".delivery_block").slideDown()

  # SCROLL TOP
  $(".icon__scroll_top").on 'click', ->
    $('html, body').stop().animate( { scrollTop: 0 }, 200)

initMenu = ->
  $('.menu_holder').on 'click', (e) ->
    $('body').toggleClass('menu_opened')
  $('.user').on 'click', (e) ->
    $('body').addClass('user_opened')
  $('.user_close').on 'click', (e) ->
    $('body').removeClass('user_opened')

initFaq = ->
  accordionContent = $('.faq_item_text')

  accordionContent.slideUp()
  $('.faq_item_title').on 'click', (e) ->
    $(this).parent().toggleClass('active')
    $(this).next().stop().slideToggle()

initSearch = ->
  searchOffset = $('.search_block').offset()
  $('.search_block').slideUp()

  $('.search').on 'click', (e) ->

    $('.search_block').slideDown()
    
    window.scroll(0, (searchOffset.top - 250))

  $('.search_close').on 'click', (e) ->
    $('.search_block').slideUp()

initAuthors = ->
  $('.author .more').on 'click', (e) ->
    $('.authors_info').slideDown()

  $('.authors_close').on 'click', (e) ->
    $('.authors_info').slideUp()

initFancyBox = ->
  $(".gallery_small_item").fancybox(
    arrows: true
    infobar: false
    toolbar: false
    transitionEffect: "fade"
  )

initTabs = ->
  $('.tabs li > a').on 'click', (e) ->
    $('.tabs li > a').removeClass('active')
    e.preventDefault()

    tabId = $(this).attr('href')

    $('.tab_item').hide()
    
    $(this).addClass('active')
    $('.tab_content').find(tabId).show()

initAnchors = ->
  $('.page_navigation li > a').on 'click', (e) ->
    $('.page_navigation li > a').removeClass('active')
    e.preventDefault()

    tabId = $(this).attr('href')
    $(this).addClass('active')

    anchorItem = $('.wrapper').find(tabId).show()
    anchorOffset = anchorItem.offset()

    window.scrollTo(0, (anchorOffset.top - 215))

initSettings = ->
  $('.change_btn').on 'click', ->
    $(this).toggleClass('active')
    parentItem = $(this).parent()
    parentItem.find('.settings_item_config').slideToggle()
    

$(window).scroll ->

  if ($(window).scrollTop() > 400)
    $(".icon__scroll_top").show()
  else
    $(".icon__scroll_top").hide()

$ ->
  initCarousel()
  initMenu()
  initUI()
  initFaq()
  initSearch()
  initAuthors()
  initFancyBox()
  initTabs()
  initAnchors()
  initSettings()
