$(function () {
  $('.card').on("click", function () {
    var id = $(this).data('id');
    var desc = $(this).data('desc');
    var active = $('.card-grid').find('.card-active');
    $(active).removeClass('card-active');

    $('.solution-description-box').html($(id).html()).show();
    $(this).addClass('card-active');

    // Move page to discription box so user sees solution content
    $("body,html").animate(
      {
        scrollTop: $(desc).offset().top - 175
      },
      500 //speed
    );
  });

  $('.navitem a').click(function (event) {
    // This will prevent the default action of the anchor
    event.preventDefault();
  });

  // Nav Menu 
  $('.navitem').on("click", function () {
    $('.home-section').hide();
    $('.dropdown-content').trigger('mouseleave');
    //Find the currently active menu item and hide the content.
    var active = $('.contentnavmenu').find('.contentnav-active');
    var curActiveId = $(active).data('id');
    $('.navitem[data-id="' + curActiveId + '"]').removeClass('contentnav-active') //Remove active class from both menus
    $(curActiveId).hide();
    // Show the content for the clicked item.
    var id = $(this).data('id');
    $('.solution-description-box').hide();
    $(id).show();
    $('.navitem[data-id="' + id + '"]').addClass('contentnav-active') //Add active class to both menus
  });

  //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
  var parts = location.href.split("#");
  if (parts.length > 1) {
    var trgt = parts[1];
    $('.navitem[data-id="#' + trgt + '"').click();
  }
  else {
    $('.home-section').show();
  }
});