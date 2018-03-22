$(function () {
  $('.top-list>li').hover(function () {
    $(this).find('.top-list-hook').show();
  },function () {
    $(this).find('.top-list-hook').hide();
  })
});

$(function () {
  $(document).scroll(function() {
    var top = $(document).scrollTop()
    console.log(top);
    if(top>70){
      $('#header').addClass('on')
      console.log(true);
    }else {
      $('#header').removeClass('on')
      console.log(false);
    }
  })
})

