$(function(){
  $('.btnClick').click(function(){
    if($('#user').val() == ""){
      $("#userTip").show()
      $("#userTip").text("请输入用户名")
    }else if($('#pswd').val() == ""){
      $("#pswdTip").show()
      $("#pswdTip").text("请输入密码")
    }else{
      // $(".btnClick").hide()  
      $(".grayBtn").show() //灰色按钮  点击以后显示灰色按钮，登录失败后$(".grayBtn")隐藏，$(".btnClick")显示
    }
  })
  
  $('#user').bind('input', function(){
    $("#userTip").hide()
  })
  $('#pswd').bind('input', function(){
    $("#pswdTip").hide()
  })
})