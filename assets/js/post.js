$(function () {
  $('.card').on("click", function () {
    var id = $(this).data('id');
    $('.solution-description').html($(id).html()).show();
    //$(id).dialog("open");
  });

  $('.navitem a').click(function(event) {
    // This will prevent the default action of the anchor
    event.preventDefault();
  });

  // Nav Menu 
  $('.navitem').on("click", function () {
    $('.home-section').hide();
    //Find the currently active menu item and hide the content.
    var active = $('.contentnavmenu').find('.contentnav-active');
    var curActiveId = $(active).data('id');
    $(active).removeClass('contentnav-active')
    $(curActiveId).hide();
    // Show the content for the clicked item.
    var id = $(this).data('id');
    $('.solution-description').hide();
    $(id).show();
    $(this).addClass('contentnav-active')
  });

  //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
  var parts = location.href.split("#");
  if (parts.length > 1) {
    var trgt = parts[1];
    console.log("im here");
    $('.navitem[data-id="#' + trgt + '"').click();
  }
  else{
    $('.home-section').show();
  }
});