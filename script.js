// $(function() {
//   var height=$("header").height();
//   $(".contents-1st").css("margin-top", height + 75);//75pxだけ余裕をもたせる
// });

$(function(){
  var pagetop = $('#page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

$('.questionFirst').click(function(){

  var $answerFirst = $(this).next('.answerFirst');

    if($answerFirst.hasClass('open')){
      $answerFirst.removeClass('open');
      $answerFirst.slideUp(300);
      $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');

    }else{
      $answerFirst.addClass('open');
      $answerFirst.slideDown(300);
      $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
}

return false;

});

$('.question').click(function(){

  var $answer = $(this).next('.answer');

    if($answer.hasClass('open')){
      $answer.removeClass('open');
      $answer.slideUp(300);
      $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');

    }else{
      $answer.addClass('open');
      $answer.slideDown(300);
      $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
}

return false;

});