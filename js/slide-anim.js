function swap() {
  var $active = $('#slideshow a.active');

  if ($active.length == 0)
    $active = $('#slideshow a:last');
  
  $active.addClass('last-active');

  var $time = 200;
  
  var $next = $active.next().length ? $active.next()
  : $('#slideshow a:first');

  $next.css({opacity: 0.0})
  .addClass('active')
  .animate({opacity: 1.0}, $time, function() {
    $active.removeClass('active last-active');
  });
}

$(function() {
  var $wait = 12000;
  
  setInterval("swap()", $wait);
});