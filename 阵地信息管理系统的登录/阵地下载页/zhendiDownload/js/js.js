// JavaScript Document
$(function(){
  $('.search_fxl_span').click(function(){
    $(this).siblings('.search_xl').fadeToggle();
  })
  $('.search_fxl').hover(function(){},function(){
    $(this).find('.search_xl').fadeOut();
  })
  $('.search_xl a').click(function(){
    var attr1=$(this).text();
    var attr2=$(this).attr('data-id');
    $('.search_fxl_span').text(attr1);
    $('.search_fxl_span').siblings('input').val(attr2);
    $('.search_xl').fadeOut();
  })
});  